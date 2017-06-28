'use strict';

module.exports = app => {
  class archive extends app.Service {
    *index() {
      const timeList = yield this.ctx.model.Article.find(
        {},
        { time: 1, _id: 0 },
      );
      const timeMap = {
        12: '十二月',
        11: '十一月',
        10: '十月',
        '09': '九月',
        '08': '八月',
        '07': '七月',
        '06': '六月',
        '05': '五月',
        '04': '四月',
        '03': '三月',
        '02': '二月',
        '01': '一月',
      };
      const archiveMap = {};
      timeList.forEach(item => {
        let time = item.time;
        time = time.slice(0, time.length - 3).replace('-', '/');
        if (!archiveMap[time]) {
          archiveMap[time] = {
            text: timeMap[time.slice(time.length - 2, time.length)] +
              ' ' +
              time.slice(0, time.length - 3),
            count: 1,
          };
        } else {
          archiveMap[time].count++;
        }
      });
      return archiveMap;
    }
    *showAll() {
      const archiveList = this.ctx.model.Article.find(
        {},
        { time: 1, title: 1 },
      );
      return archiveList;
    }
  }
  return archive;
};
