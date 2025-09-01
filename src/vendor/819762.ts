var e = /([A-Z])/g;
module.exports = function (t) {
  return t.replace(e, "-$1").toLowerCase();
};