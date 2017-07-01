'use strict';

module.exports = app => {
  class session extends app.Service {
    *check({ username, password }) {
      const info = yield this.ctx.model.User.findOne(
        { username },
        { salt: 1, password: 1, username: 1 },
      );
      if (!info.password) {
        return false;
      }
      const md5 = this.ctx.helper.md5;
      const currentPassword = md5(md5(password) + info.salt);
      return currentPassword === info.password
        ? { id: info._id, username: info.username }
        : false;
    }
  }
  return session;
};
