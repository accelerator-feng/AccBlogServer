'use strict';

const crypto = require('crypto');
/*
 * 10位盐
 * 时间戳(2)+随机字母(8)
 */
const getSalt = () => {
  var time = Date.now() % 100, str = '';
  time = time === 0 ? '00' : String(time);
  for (let i = 0; i < 8; i++) {
    const base = Math.random() < 0.5 ? 65 : 97;
    str += String.fromCharCode(base + Math.floor(Math.random() * 26));
  }
  return time + str;
};
const md5 = text => {
  return crypto.createHash('md5').update(String(text)).digest('hex');
};
const encrypt = password => {
  const salt = getSalt();
  return { password: md5(md5(password) + salt), salt };
};

module.exports = { encrypt, md5 };
