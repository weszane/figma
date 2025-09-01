var e = RegExp("\r", "g");
module.exports = function (t) {
  return t.replace(e, "");
};