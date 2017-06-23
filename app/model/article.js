'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    time: { type: String, required: true },
    author: { type: String, required: true },
    tags: { type: [String], required: false },
    category: { type: String, required: false },
  });
  return mongoose.model('Article', ArticleSchema);
};
