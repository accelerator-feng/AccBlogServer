'use strict';

module.exports = () => {
  return function*(next) {
    yield next;
    if (!this.session || !this.session.id) return;
    this.session.save();
  };
};
