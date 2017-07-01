'use strict';

module.exports = app => {
  class user extends app.Controller {
    *create() {
      const { ctx, service } = this;
      const createRule = {
        r_username: {
          type: 'string',
          max: 16,
          format: /^[a-zA-Z][a-zA-Z0-9_]*$/,
        },
        r_password: {
          type: 'password',
          compare: 'r_confirmPassword',
          max: 16,
          min: 5,
          format: /^[a-zA-Z0-9_]*$/,
        },
      };
      ctx.validate(createRule);
      const body = ctx.request.body;
      const hasUser = yield service.user.find(body.r_username);
      if (hasUser) {
        const err = new Error('Username Already Exists');
        err.status = 400;
        throw err;
      }
      const res = yield service.user.create(body);
      ctx.body = { id: res._id };
      ctx.status = 201;
    }
    *find() {
      const { ctx, service } = this;
      const createRule = {
        username: {
          type: 'string',
          max: 16,
          format: /^[a-zA-Z][a-zA-Z0-9_]*$/,
        },
      };
      ctx.validate(createRule, ctx.query);
      const hasUser = yield service.user.find(ctx.query.username);
      ctx.body = { hasUser };
    }
  }
  return user;
};
