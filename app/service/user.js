'use strict';

module.exports = app => {
  class user extends app.Service {
    *create({ r_userName, r_password }) {
      const user = new this.ctx.model.User({
        userName: r_userName,
        password: r_password,
      });
      const result = yield user.save();
      return result;
    }
    *find(userName) {
      const user = yield this.ctx.model.User.find({ userName });
      return user.length > 0;
    }
  }
  return user;
};
