'use strict';

module.exports = app => {
  class user extends app.Controller {
    *create() {
      const { ctx, service } = this;
      this.ctx.body = yield ctx.request.body;
    }
  }
  return user;
};
