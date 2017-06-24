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
  }
  return category;
};
