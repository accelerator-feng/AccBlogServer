'use strict';

module.exports = function*(ctx) {
  const linkMap = yield ctx.service.link.index();
  const archiveMap = yield ctx.service.archive.index();
  const categoryMap = yield ctx.service.category.index();
  const { articles, total } = yield ctx.service.article.showPage(1);
  ctx.body = { articles, total, categoryMap, archiveMap, linkMap };
};
