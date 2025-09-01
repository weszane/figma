function n() {
  Object.entries || (Object.entries = function (e) {
    for (r = Object.keys(e), n = r.length, i = Array(n), void 0; n--;) {
      var r;
      var n;
      var i;
      i[n] = [r[n], e[r[n]]];
    }
    return i;
  });
}
exports.$$default = n;