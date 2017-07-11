'use strict';

module.exports = app => {
  class avatar extends app.Service {
    *create({ avatar, username }) {
      yield this.ctx.model.User.update({ username }, { $set: { avatar } });
    }
    *find(id) {
      const data = yield this.ctx.model.User.findOne(
        { _id: id },
        { avatar: 1, username: 1 },
      );
      return data;
    }
    *query(username) {
      const data = yield this.ctx.model.User.findOne(
        { username },
        { avatar: 1 },
      );
      return data;
    }
  }
  return avatar;
};
