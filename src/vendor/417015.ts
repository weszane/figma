function r(e, r, n, i) {
  for (s = e.length, o = n + (i ? 1 : -1), void 0; i ? o-- : ++o < s;) {
    var s;
    var o;
    if (r(e[o], o, e)) return o;
  }
  return -1;
}
module.exports = r;