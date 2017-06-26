'use strict';

module.exports = app => {
  app.get('/article/page/:id', app.controller.article.showPage);
  app.get('/show/:id', app.controller.article.show);
  app.get('/index', app.controller.index);
};
