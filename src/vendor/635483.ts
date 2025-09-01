!function (r, n) {
  module.exports = n();
}(0, function () {
  return function (e, r, n) {
    var i = function (e, r) {
      if (!r || !r.length || !r[0] || 1 === r.length && !r[0].length) return null;
      1 === r.length && r[0].length > 0 && (r = r[0]);
      n = r[0];
      for (i = 1, void 0; i < r.length; i += 1) {
        var n;
        var i;
        r[i].isValid() && !r[i][e](n) || (n = r[i]);
      }
      return n;
    };
    n.max = function () {
      var e = [].slice.call(arguments, 0);
      return i("isAfter", e);
    };
    n.min = function () {
      var e = [].slice.call(arguments, 0);
      return i("isBefore", e);
    };
  };
});