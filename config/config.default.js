'use strict';

module.exports = appInfo => {
  const config = {
    // should change to your own
    keys: appInfo.name + '_1498198494981_6588',

    middleware: ['errorHandler'],
    errorHandler: {
      match: '/api',
    },

    // add your config here
    mongoose: {
      url: 'mongodb://127.0.0.1:27017/blog',
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
