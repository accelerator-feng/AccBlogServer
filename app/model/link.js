'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const LinkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
  });
  return mongoose.model('Link', LinkSchema);
};
