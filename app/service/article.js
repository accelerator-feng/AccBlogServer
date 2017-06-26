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
    *get(id) {
      const article = yield this.ctx.model.Article.find({
        _id: id,
      });
      const previous = yield this.ctx.model.Article
        .find({ _id: { $lt: id } }, { _id: 1, title: 1 })
        .sort({ _id: -1 })
        .limit(1);
      const next = yield this.ctx.model.Article
        .find({ _id: { $gt: id } }, { _id: 1, title: 1 })
        .sort({ _id: 1 })
        .limit(1);
      return { article: article[0], previous: previous[0], next: next[0] };
    }
  }
  return article;
};
