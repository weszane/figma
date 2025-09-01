function n(e, t, n) {
  var r = e[t];
  e[t] = e[n];
  e[n] = r;
}
exports.g = function (e, t) {
  !function e(t, r, i, o) {
    if (i < o) {
      var a = Math.round(i + Math.random() * (o - i));
      var s = i - 1;
      n(t, a, o);
      for (l = t[o], u = i, void 0; u < o; u++) {
        var l;
        var u;
        0 >= r(t[u], l) && n(t, s += 1, u);
      }
      n(t, s + 1, u);
      var c = s + 1;
      e(t, r, i, c - 1);
      e(t, r, c + 1, o);
    }
  }(e, t, 0, e.length - 1);
};