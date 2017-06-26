'use strict';

module.exports = app => {
  class article extends app.Controller {
    *showPage() {
      const { ctx, service } = this;
      this.ctx.body = yield service.article.find(ctx.params.id);
    }
    *show() {
      const { ctx, service } = this;
      this.ctx.body = yield service.article.get(ctx.params.id);
    }
  }
  return article;
};
