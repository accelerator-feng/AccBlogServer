'use strict';

module.exports = app => {
  class session extends app.Controller {
    *create() {
      const { ctx, service } = this;
      const createRule = {
        username: {
          type: 'string',
          max: 16,
          format: /^[a-zA-Z][a-zA-Z0-9_]*$/,
        },
        password: {
          type: 'password',
          max: 16,
          min: 5,
          format: /^[a-zA-Z0-9_]*$/,
        },
      };
      ctx.validate(createRule);
      const body = ctx.request.body;
      const { username } = yield service.session.check(body);
      if (!username) {
        const err = new Error('Invalid Grant');
        err.status = 400;
        throw err;
      } else {
        ctx.session.username = username;
        ctx.body = { username };
        ctx.status = 201;
      }
    }
    *destroy() {
      const { ctx } = this;
      ctx.session = null;
      ctx.status = 204;
    }
    *loginStatus() {
      const { ctx } = this;
      if (ctx.session.username) {
        ctx.body = { username: ctx.session.username };
      } else {
        ctx.body = { message: 'The user is not logged in' };
      }
    }
  }
  return session;
};
