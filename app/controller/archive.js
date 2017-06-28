'use strict';

module.exports = app => {
  class archive extends app.Controller {
    *showAll() {
      const { ctx, service } = this;
      const archiveMap = yield service.archive.index();
      const archiveList = yield service.archive.showAll();
      ctx.body = yield { archiveMap, archiveList, status: '归档' };
    }
    *showYear() {
      const { ctx, service } = this;
      const archiveMap = yield service.archive.index();
      const archiveList = yield service.archive.show(ctx.params.year);
      ctx.body = yield { archiveMap, archiveList, status: ctx.params.year };
    }
    *showMonth() {
      const { ctx, service } = this;
      const archiveMap = yield service.archive.index();
      const archiveList = yield service.archive.show(
        `${ctx.params.year}-${ctx.params.month}`,
      );
      ctx.body = yield {
        archiveMap,
        archiveList,
        status: `${ctx.params.year}/${ctx.params.month}`,
      };
    }
  }
  return archive;
};
