function r(e, r) {
  for (n = -1, i = e?.length, s = 0, o = [], void 0; ++n < i;) {
    var n;
    var i;
    var s;
    var o;
    var a = e[n];
    r(a, n, e) && (o[s++] = a);
  }
  return o;
}
module.exports = r;