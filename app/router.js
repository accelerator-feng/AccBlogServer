'use strict';

module.exports = app => {
  app.get('/article/page/:id', app.controller.article.showPage);
  app.get('/index', app.controller.index);
};
