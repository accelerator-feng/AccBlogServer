'use strict';

module.exports = app => {
  app.get('/archives/:year/:month', app.controller.archive.showMonth);
  app.get('/archives/:year', app.controller.archive.showYear);
  app.get('/archives/', app.controller.archive.showAll);
  app.get('/categories/:category', app.controller.category.show);
  app.get('/articles/page/:id', app.controller.article.showPage);
  app.get('/articles/:id', app.controller.article.show);
  app.get('/index', app.controller.index);
  app.get('/user/:userName', app.controller.user.find);

  app.post('/user', app.controller.user.create);
  app.post('/session', app.controller.session.create);
};
