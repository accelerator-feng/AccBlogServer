'use strict';

const sendToWormhole = require('stream-wormhole');

module.exports = app => {
  class avatar extends app.Controller {
    *create() {
      const { ctx, service } = this;
      const stream = yield ctx.getFileStream();
      let imageUrl;
      try {
        imageUrl =
          'data:image/jpg;base64,' +
          stream._readableState.buffer.head.data.toString('base64');
        yield service.avatar.create({
          avatar: imageUrl,
          username: stream.fields.username,
        });
      } catch (err) {
        yield sendToWormhole(stream);
        throw err;
      }
      ctx.body = {
        imageUrl,
      };
    }
  }
  return avatar;
};
