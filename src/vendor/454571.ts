function r(e, r, n) {
  for (i = n - 1, s = e.length, void 0; ++i < s;) {
    var i;
    var s;
    if (e[i] === r) return i;
  }
  return -1;
}
module.exports = r;