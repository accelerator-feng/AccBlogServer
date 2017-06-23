'use strict';

module.exports = app => {
  app.get('/article/page/:id', app.controller.article.showPage);
};
