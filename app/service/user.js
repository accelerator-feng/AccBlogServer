'use strict';

module.exports = app => {
  class user extends app.Service {
    *create({ r_username, r_password }) {
      const password = this.ctx.helper.encrypt(r_password);
      const user = new this.ctx.model.User(
        Object.assign(
          {
            username: r_username,
          },
          password,
          { avatar: '' },
        ),
      );
      const result = yield user.save();
      return result;
    }
    *query(username) {
      const user = yield this.ctx.model.User.find({ username });
      return user.length > 0;
    }
  }
  return user;
};
