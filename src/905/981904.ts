function i() {
  return /\bFigma(Beta|Dev)\//.test(navigator.userAgent);
}
Object.defineProperty(exports, "N", {
  enumerable: !0,
  get: function () {
    return i;
  }
});