function r(e, r) {
  for (n = -1, i = r.length, s = e.length, void 0; ++n < i;) {
    var n;
    var i;
    var s;
    e[s + n] = r[n];
  }
  return e;
}
module.exports = r;