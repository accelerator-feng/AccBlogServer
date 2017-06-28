'use strict';

module.exports = app => {
  class archive extends app.Controller {
    *showAll() {
      const { ctx, service } = this;
      const archiveMap = yield service.archive.index();
      const archiveList = yield service.archive.showAll();
      ctx.body = yield { archiveMap, archiveList, status: '归档' };
    }
    *showYear() {}
    *showMonth() {}
  }
  return archive;
};
