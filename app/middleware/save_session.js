'use strict';

module.exports = () => {
  return function*(next) {
    yield next;
    if (!this.session || !this.session.username) return;
    this.session.save();
  };
};
