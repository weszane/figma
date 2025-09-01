function n() {
  Object.fromEntries || (Object.fromEntries = function (e) {
    for (r = {}, n = 0, i = e, void 0; n < i.length; n++) {
      var r;
      var n;
      var i;
      var s = i[n];
      if (Object(s) !== s) throw TypeError("iterable for fromEntries should yield objects");
      Object.defineProperty(r, s[0], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: s[1]
      });
    }
    return r;
  });
}
exports.$$default = n;