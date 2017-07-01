'use strict';

module.exports = app => {
  app.post('/api/user', 'user.create');
  app.get('/api/user', 'user.find');

  app.post('/api/session', 'session.create');

  app.get('/api/index', 'index');

  app.get('/api/articles/:id', 'article.show');
  app.get('/api/articles/page/:id', 'article.page');

  app.get('/api/archives/', 'archive.index');
  app.get('/api/archives/:year', 'archive.year');
  app.get('/api/archives/:year/:month', 'archive.month');

  app.get('/api/categories/:category', 'category.show');
};
