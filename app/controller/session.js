'use strict';

const ms = require('ms');

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
        rememberMe: {
          type: 'bool',
          required: false,
        },
      };
      ctx.validate(createRule);
      const body = ctx.request.body;
      const { username, rememberMe } = body;
      const check = yield service.session.check(body);
      if (!check) {
        const err = new Error('Invalid Grant');
        err.status = 403;
        throw err;
      } else {
        if (rememberMe) {
          ctx.session.maxAge = ms('7d');
        }
        ctx.session.username = username;
        ctx.rotateCsrfSecret();
        ctx.body = { success: true };
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
      const username = ctx.session.username;
      if (username) {
        ctx.body = { username };
      } else {
        ctx.body = { message: 'The user is not logged in' };
      }
    }
  }
  return session;
};
