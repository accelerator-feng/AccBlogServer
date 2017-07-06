'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const CommentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    content: { type: String, required: true },
    time: { type: String, required: true },
    articleId: { type: String, required: true },
  });
  return mongoose.model('Comment', CommentSchema);
};
