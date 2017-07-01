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
      const id = yield service.session.check(body);
      if (!id) {
        const err = new Error('Invalid Grant');
        err.status = 400;
        throw err;
      } else {
        ctx.session.id = id;
        ctx.body = { id };
        ctx.status = 201;
      }
    }
  }
  return session;
};
