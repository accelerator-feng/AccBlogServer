'use strict';

module.exports = app => {
  class user extends app.Controller {
    *create() {
      const { ctx, service } = this;
      const body = ctx.request.body;
      const res = yield service.user.create(body);
      ctx.body = { id: res._id };
      ctx.status = 201;
    }
    *find() {
      const { ctx, service } = this;
      const hasUser = yield service.user.find(ctx.params.userName);
      ctx.body = hasUser;
    }
  }
  return user;
};
