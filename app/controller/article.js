'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    *showPage() {
      const { ctx, service } = this;
      this.ctx.body = yield service.article.find(ctx.params.id);
    }
  }
  return HomeController;
};
