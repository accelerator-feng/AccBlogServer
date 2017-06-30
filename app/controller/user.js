'use strict';

module.exports = app => {
  class user extends app.Controller {
    *create() {
      const { ctx, service } = this;
      const createRule = {
        r_userName: { type: 'string' },
        r_password: { type: 'string' },
      };
      ctx.validate(createRule);
      const body = ctx.request.body;
      const res = yield service.user.create(body);
      ctx.body = { id: res._id };
      ctx.status = 201;
    }
    *find() {
      const { ctx, service } = this;
      const hasUser = yield service.user.find(ctx.params.username);
      ctx.body = hasUser;
    }
  }
  return user;
};
