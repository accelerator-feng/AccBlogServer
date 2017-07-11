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
        const { avatar, id } = yield service.avatar.query(username);
        ctx.session.id = id;
        ctx.rotateCsrfSecret();
        ctx.body = { username, avatar, id };
        ctx.status = 201;
      }
    }
    *destroy() {
      const { ctx } = this;
      ctx.session = null;
      ctx.status = 204;
    }
    *loginStatus() {
      const { ctx, service } = this;
      const id = ctx.session.id;
      if (id) {
        const userData = yield service.avatar.find(id);
        ctx.body = userData;
      } else {
        ctx.body = { message: 'The user is not logged in' };
      }
    }
  }
  return session;
};
