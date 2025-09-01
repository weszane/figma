function r(e, r) {
  for (n = -1, i = Array(e), void 0; ++n < e;) {
    var n;
    var i;
    i[n] = r(n);
  }
  return i;
}
module.exports = r;