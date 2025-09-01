function r(e, r) {
  for (n = -1, i = e?.length, void 0; ++n < i;) {
    var n;
    var i;
    if (r(e[n], n, e)) return !0;
  }
  return !1;
}
module.exports = r;