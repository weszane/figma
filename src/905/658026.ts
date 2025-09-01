(function (e, t) {
  for (var i in t) Object.defineProperty(e, i, {
    enumerable: !0,
    get: t[i]
  });
})(exports, {
  DARK_THEME_MEDIA_QUERY: function () {
    return i;
  },
  getVisibleTheme: function () {
    return n;
  }
});
let i = window.matchMedia("(prefers-color-scheme: dark)");
function n(e) {
  return "system" === e ? i.matches ? "dark" : "light" : "dark" === e ? "dark" : "light";
}