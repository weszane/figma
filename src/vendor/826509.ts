function r(e, r, n) {
  for (i = -1, s = e?.length, void 0; ++i < s;) {
    var i;
    var s;
    if (n(r, e[i])) return !0;
  }
  return !1;
}
module.exports = r;