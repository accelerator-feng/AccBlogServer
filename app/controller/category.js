'use strict';

module.exports = app => {
  class category extends app.Controller {
    *show() {
      const { ctx, service } = this;
      const categoryMap = yield service.category.index();
      const categoryList = yield service.category.show(ctx.params.category);
      ctx.body = yield {
        categoryMap,
        categoryList,
        status: ctx.params.category,
      };
    }
  }
  return category;
};
