exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;
exports.search = function (e, n, r, i) {
  if (0 === n.length) return -1;
  var o = function e(n, r, i, o, a, s) {
    var l = Math.floor((r - n) / 2) + n;
    var u = a(i, o[l], !0);
    return 0 === u ? l : u > 0 ? r - l > 1 ? e(l, r, i, o, a, s) : s == exports.LEAST_UPPER_BOUND ? r < o.length ? r : -1 : l : l - n > 1 ? e(n, l, i, o, a, s) : s == exports.LEAST_UPPER_BOUND ? l : n < 0 ? -1 : n;
  }(-1, n.length, e, n, r, i || exports.GREATEST_LOWER_BOUND);
  if (o < 0) return -1;
  for (; o - 1 >= 0 && 0 === r(n[o], n[o - 1], !0);) --o;
  return o;
};