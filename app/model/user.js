'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: false },
    salt: { type: String, required: true },
  });
  return mongoose.model('User', UserSchema);
};
