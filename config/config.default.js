'use strict';

module.exports = appInfo => {
  const config = {
    keys: appInfo.name + '_1498198494981_6588',

    middleware: ['errorHandler', 'saveSession'],
    errorHandler: {
      match: '/api',
    },

    static: { prefix: '' },

    mongoose: {
      url: 'mongodb://127.0.0.1:29999/blog',
      options: {},
    },

    notfound: {
      pageUrl: '/404.html',
    },
  };
  return config;
};
