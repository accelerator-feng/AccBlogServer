'use strict';

module.exports = appInfo => {
  const config = {
    keys: appInfo.name + '_1498198494981_6588',

    middleware: ['errorHandler', 'saveSession'],
    errorHandler: {
      match: '/api',
    },

    static: { prefix: '', gzip: true, usePrecompiledGzip: true },

    mongoose: {
      url: 'mongodb://127.0.0.1:29999/blog',
      options: {},
    },

    onerror: {
      errorPageUrl: '/50x.html',
    },

    notfound: {
      pageUrl: '/404.html',
    },
  };
  return config;
};
