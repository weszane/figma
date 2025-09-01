function r(e, r) {
  for (n = -1, i = e?.length, s = Array(i), void 0; ++n < i;) {
    var n;
    var i;
    var s;
    s[n] = r(e[n], n, e);
  }
  return s;
}
module.exports = r;