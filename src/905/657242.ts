function i(e) {
  return `LOCAL_${e()}`;
}
function n(e) {
  return e.startsWith("LOCAL_");
}
(function (e, t) {
  for (var i in t) Object.defineProperty(e, i, {
    enumerable: !0,
    get: t[i]
  });
})(exports, {
  createLocalFileKey: function () {
    return i;
  },
  isLocalFileKey: function () {
    return n;
  }
});