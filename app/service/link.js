'use strict';

module.exports = app => {
  class link extends app.Service {
    *index() {
      const linkList = yield this.ctx.model.Link.find({}, { _id: 0 });
      return linkList;
    }
  }
  return link;
};
