'use strict';

module.exports = app => {
  class comment extends app.Service {
    *create(data) {
      const comment = new this.ctx.model.Comment(data);
      const result = yield comment.save();
      return result;
    }
    *show(articleId) {
      const commentList = yield this.ctx.model.Comment.find({ articleId });
      return commentList;
    }
  }
  return comment;
};
