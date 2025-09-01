function i(e, t) {
  let i = "transparent";
  if (e) try {
    let n = JSON.parse(e).background_color;
    let r = n.a;
    if (0 != r) {
      let e = n.r;
      let a = n.g;
      let s = n.b;
      i = `rgba(${255 * e | 0}, ${255 * a | 0}, ${255 * s | 0}, ${t || r})`;
    }
  } catch (e) {}
  return i;
}
Object.defineProperty(exports, "C", {
  enumerable: !0,
  get: function () {
    return i;
  }
});