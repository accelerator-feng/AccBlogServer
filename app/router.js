'use strict';

module.exports = app => {
  app.post('/api/user', 'user.create');
  app.get('/api/user', 'user.query');

  app.get('/api/session/loginStatus', 'session.loginStatus');
  app.post('/api/session', 'session.create');
  app.delete('/api/session', 'session.destroy');

  app.get('/api/index', 'index');

  app.get('/api/articles/:id', 'article.show');
  app.get('/api/articles/page/:id', 'article.page');

  app.get('/api/archives/', 'archive.index');
  app.get('/api/archives/:year', 'archive.year');
  app.get('/api/archives/:year/:month', 'archive.month');

  app.get('/api/categories/:category', 'category.show');
};
