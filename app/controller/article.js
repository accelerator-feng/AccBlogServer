'use strict';

module.exports = app => {
  class article extends app.Controller {
    *showPage() {
      const { ctx, service } = this;
      this.ctx.body = yield service.article.showPage(ctx.params.id);
    }
    *show() {
      const { ctx, service } = this;
      this.ctx.body = yield service.article.show(ctx.params.id);
    }
  }
  return article;
};
