'use strict';

module.exports = app => {
  app.post('/user', 'user.create');
  app.get('/user/:username', 'user.find');

  app.post('/session', 'session.create');

  app.get('/index', 'index');

  app.get('/articles/:id', 'article.show');
  app.get('/articles/page/:id', 'article.page');

  app.get('/archives/', 'archive.index');
  app.get('/archives/:year', 'archive.year');
  app.get('/archives/:year/:month', 'archive.month');

  app.get('/categories/:category', 'category.show');
};
