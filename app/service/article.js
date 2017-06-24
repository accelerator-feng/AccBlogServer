'use strict';

module.exports = app => {
  class article extends app.Service {
    *find(id) {
      const start = (id - 1) * 5;
      const end = start + 5;
      const articles = yield this.ctx.model.Article
        .find()
        .limit(end)
        .skip(start);
      const total = yield this.ctx.model.Article.find().count();
      return { articles, total };
    }
  }
  return article;
};
