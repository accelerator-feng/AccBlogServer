'use strict';

module.exports = app => {
  class comment extends app.Controller {
    *show() {
      const { ctx, service } = this;
      const commentList = yield service.comment.show(ctx.params.id);
      ctx.body = { commentList };
    }
    *create() {
      const { ctx, service } = this;
      const createRule = {
        content: {
          type: 'string',
        },
        time: {
          type: 'string',
        },
        articleId: {
          type: 'string',
        },
      };
      ctx.validate(createRule);
      const username = ctx.session.username || 'tourist';
      const res = yield service.comment.create(
        Object.assign(ctx.request.body, { username }),
      );
      ctx.body = { id: res._id };
      ctx.status = 201;
    }
  }
  return comment;
};
