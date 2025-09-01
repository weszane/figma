var i;
var r;
function n(e) {
  return null != e && "object" == typeof e && "message" in e && "string" == typeof e.message && e.message.includes("IPC");
}
function a(e) {
  try {
    return e();
  } catch (e) {
    if (n(e)) {
      console.warn("suppressingErrorsCausedByWindowClose: ignoring IPC error:", e);
      return;
    }
    throw e;
  }
}
function s(e, t) {
  return a(() => {
    let i = e.__figmaFloatingWindow;
    if (null == i) throw Error("withFloatingWindowAPI: bindings not found");
    return t(i);
  });
}
(function (e, t) {
  for (var i in t) Object.defineProperty(e, i, {
    enumerable: !0,
    get: t[i]
  });
})(exports, {
  FloatingWindowHorizontalZone: function () {
    return r;
  },
  FloatingWindowVerticalZone: function () {
    return i;
  },
  isErrorCausedByWindowClose: function () {
    return n;
  },
  suppressingErrorsCausedByWindowClose: function () {
    return a;
  },
  withFloatingWindowAPI: function () {
    return s;
  }
});
(function (e) {
  e[e.NN = 0] = "NN";
  e[e.N = 1] = "N";
  e[e.S = 2] = "S";
  e[e.SS = 3] = "SS";
})(i || (i = {}));
(function (e) {
  e[e.WW = 0] = "WW";
  e[e.W = 1] = "W";
  e[e.E = 2] = "E";
  e[e.EE = 3] = "EE";
})(r || (r = {}));