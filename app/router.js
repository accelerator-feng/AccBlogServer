'use strict';

module.exports = app => {
  // app.redirect('/', '/index.html');
  // 注册
  app.get('/api/user', 'user.query');
  app.post('/api/user', 'user.create');

  // 登录
  app.get('/api/session/loginStatus', 'session.loginStatus');
  app.post('/api/session', 'session.create');
  app.delete('/api/session', 'session.destroy');

  // 首页
  app.get('/api/index', 'init');

  // 文章
  app.get('/api/article/:id', 'article.show');
  app.get('/api/article/page/:id', 'article.page');

  // 归档
  app.get('/api/archives/', 'archive.index');
  app.get('/api/archives/:year', 'archive.year');
  app.get('/api/archives/:year/:month', 'archive.month');

  // 分类
  app.get('/api/categories/:category', 'category.show');
};
