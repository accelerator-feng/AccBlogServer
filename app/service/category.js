'use strict';

module.exports = app => {
  class category extends app.Service {
    *index() {
      const hasCategory = yield this.ctx.model.Article.find({
        category: { $ne: '' },
      });
      const categoryMap = {};
      hasCategory.forEach(item => {
        if (!categoryMap[item.category]) {
          categoryMap[item.category] = 1;
        } else {
          categoryMap[item.category]++;
        }
      });
      return categoryMap;
    }
    *show(category) {
      const categoryList = yield this.ctx.model.Article.find(
        {
          category,
        },
        { time: 1, title: 1 },
      );
      return categoryList;
    }
  }
  return category;
};
