'use strict';

module.exports = app => {
  class user extends app.Service {
    *create({ r_userName, r_password }) {
      const password = this.ctx.helper.encrypt(r_password);
      const user = new this.ctx.model.User(
        Object.assign(
          {
            username: r_userName,
          },
          password,
        ),
      );
      const result = yield user.save();
      return result;
    }
    *find(username) {
      const user = yield this.ctx.model.User.find({ username });
      return user.length > 0;
    }
  }
  return user;
};
