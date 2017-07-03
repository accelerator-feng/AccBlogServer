'use strict';

module.exports = appInfo => {
  const config = {
    // should change to your own
    keys: appInfo.name + '_1498198494981_6588',

    middleware: ['errorHandler', 'gzip', 'saveSession'],
    errorHandler: {
      match: '/api',
    },

    gzip: {
      threshold: 1024, // 小于 1k 的响应体不压缩
    },

    // add your config here
    mongoose: {
      url: 'mongodb://127.0.0.1:29999/blog',
      options: {},
    },
    /*
    onerror: {
      errorPageUrl: '/50x.html',
    },
    */
    notfound: {
      pageUrl: '/public/404.html',
    },
  };
  return config;
};
