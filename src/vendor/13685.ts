function r(e, r) {
  for (i = -1, s = e.length, void 0; ++i < s;) {
    var n;
    var i;
    var s;
    var o = r(e[i]);
    void 0 !== o && (n = void 0 === n ? o : n + o);
  }
  return n;
}
module.exports = r;