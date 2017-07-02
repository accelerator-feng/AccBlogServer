'use strict';

module.exports = app => {
  class session extends app.Service {
    *check({ username, password }) {
      const info = yield this.ctx.model.User.findOne({ username });
      if (info === null) {
        return false;
      }
      const md5 = this.ctx.helper.md5;
      const currentPassword = md5(md5(password) + info.salt);
      return currentPassword === info.password;
    }
  }
  return session;
};
