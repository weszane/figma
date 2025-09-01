function i(e, t = "pos") {
  let n = 8 * Math.ceil(1.3 * e / 8);
  let r = {
    constant: (-.0223 + .185 * Math.pow(Math.E, -.1745 * e)).toFixed(3),
    fontSizeCoefficient: "pos" !== t ? "var(--text-tracking-neg, 0.005)" : "var(--text-tracking-pos, 0)"
  };
  return {
    fontSize: `${e}px`,
    lineHeight: `${n}px`,
    letterSpacing: `calc(${r.constant}px + ${r.fontSizeCoefficient} * ${e}px)`
  };
}
Object.defineProperty(exports, "p", {
  enumerable: !0,
  get: function () {
    return i;
  }
});