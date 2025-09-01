var e = /-(.)/g;
module.exports = function (t) {
  return t.replace(e, function (t, e) {
    return e.toUpperCase();
  });
};