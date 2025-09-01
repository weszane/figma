function r(e, r, n) {
  var i = -1;
  var s = e.length;
  r < 0 && (r = -r > s ? 0 : s + r);
  (n = n > s ? s : n) < 0 && (n += s);
  s = r > n ? 0 : n - r >>> 0;
  r >>>= 0;
  for (var o = Array(s); ++i < s;) o[i] = e[i + r];
  return o;
}
module.exports = r;