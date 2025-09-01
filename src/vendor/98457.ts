function r(e) {
  return function (r, n, i) {
    for (s = -1, o = Object(r), a = i(r), h = a.length, void 0; h--;) {
      var s;
      var o;
      var a;
      var h;
      var d = a[e ? h : ++s];
      if (!1 === n(o[d], d, o)) break;
    }
    return r;
  };
}
module.exports = r;