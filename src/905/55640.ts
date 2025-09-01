Object.defineProperty(exports, "flatten", {
  enumerable: !0,
  get: function () {
    return function e(t, i = []) {
      for (let n = 0; n < t.length; n++) {
        let r = t[n];
        Array.isArray(r) ? e(r, i) : i.push(r);
      }
      return i;
    };
  }
});