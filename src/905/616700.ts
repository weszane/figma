function i(e, t) {
  let i = e.split(".");
  let n = t.split(".");
  for (let e = 0; e < Math.max(i.length, n.length); ++e) {
    let t = e < i.length ? +i[e] : 0;
    let r = e < n.length ? +n[e] : 0;
    if (t > r) return -1;
    if (t < r) return 1;
  }
  return 0;
}
Object.defineProperty(exports, "Z", {
  enumerable: !0,
  get: function () {
    return i;
  }
});