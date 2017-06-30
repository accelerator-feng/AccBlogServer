'use strict';

module.exports = app => {
  class archive extends app.Controller {
    *index() {
      const { ctx, service } = this;
      const archiveMap = yield service.archive.index();
      const archiveList = yield service.archive.showAll();
      ctx.body = { archiveMap, archiveList, status: '归档' };
    }
    *year() {
      const { ctx, service } = this;
      const archiveMap = yield service.archive.index();
      const archiveList = yield service.archive.show(ctx.params.year);
      ctx.body = { archiveMap, archiveList, status: ctx.params.year };
    }
    *month() {
      const { ctx, service } = this;
      const archiveMap = yield service.archive.index();
      const archiveList = yield service.archive.show(
        `${ctx.params.year}-${ctx.params.month}`,
      );
      ctx.body = {
        archiveMap,
        archiveList,
        status: `${ctx.params.year}/${ctx.params.month}`,
      };
    }
  }
  return archive;
};
