'use strict';

module.exports = app => {
  app.get('/archives/:year/:month', app.controller.archive.show);
  app.get('/articles/page/:id', app.controller.article.showPage);
  app.get('/articles/:id', app.controller.article.show);
  app.get('/index', app.controller.index);
};
