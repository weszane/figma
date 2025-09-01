function r(e, r, n, i) {
  for (s = -1, o = e?.length, void 0; ++s < o;) {
    var s;
    var o;
    var a = e[s];
    r(i, a, n(a), e);
  }
  return i;
}
module.exports = r;