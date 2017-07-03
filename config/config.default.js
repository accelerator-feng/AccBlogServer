'use strict';

module.exports = appInfo => {
  const config = {
    // should change to your own
    keys: appInfo.name + '_1498198494981_6588',

    middleware: ['errorHandler', 'saveSession'],
    errorHandler: {
      match: '/api',
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
