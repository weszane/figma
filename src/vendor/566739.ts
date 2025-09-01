function r(e, r, n, i) {
  for (s = 65535 & e | 0, o = e >>> 16 & 65535 | 0, a = 0, void 0; 0 !== n;) {
    var s;
    var o;
    var a;
    a = n > 2e3 ? 2e3 : n;
    n -= a;
    do o = o + (s = s + r[i++] | 0) | 0; while (--a);
    s %= 65521;
    o %= 65521;
  }
  return s | o << 16 | 0;
}
module.exports = r;