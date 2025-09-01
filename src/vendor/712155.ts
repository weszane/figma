module.exports = function (e, t) {
  var n = !0;
  try {
    e.forEach(function () {
      if (!t.apply(this, arguments)) throw Error();
    });
  } catch (e) {
    n = !1;
  }
  return n;
};