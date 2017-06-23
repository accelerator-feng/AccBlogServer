'use strict';

module.exports = appInfo => {
  const config = {
    // should change to your own
    keys: appInfo.name + '_1498198494981_6588',

    // add your config here
    mongoose: {
      url: 'mongodb://127.0.0.1:27017/blog',
      options: {},
    },
  };
  return config;
};

