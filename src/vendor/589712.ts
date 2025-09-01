var e = /\r\n?|\n/g;
module.exports = function (t) {
  return t.split(e);
};