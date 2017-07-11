'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const CommentSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    content: { type: String, required: true },
    time: { type: String, required: true },
    articleId: { type: String, required: true },
  });
  return mongoose.model('Comment', CommentSchema);
};
