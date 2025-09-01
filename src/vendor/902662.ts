function r(e, r, n) {
  for (i = -1, s = e.length, o = r.length, a = {}, void 0; ++i < s;) {
    var i;
    var s;
    var o;
    var a;
    var h = i < o ? r[i] : void 0;
    n(a, e[i], h);
  }
  return a;
}
module.exports = r;