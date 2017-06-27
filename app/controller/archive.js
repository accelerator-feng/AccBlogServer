'use strict';

module.exports = app => {
  class archive extends app.Controller {
    *show() {
      const { ctx, service } = this;
      // this.ctx.body = yield service;
    }
  }
  return archive;
};
