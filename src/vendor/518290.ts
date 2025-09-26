var i = Number.isNaN || function (e) {
  return "number" == typeof e && e != e;
};
function s(e, r) {
  return !!(e === r || i(e) && i(r));
}
function o(e, r) {
  if (e.length !== r.length) return !1;
  for (var n = 0; n < e.length; n++) if (!s(e[n], r[n])) return !1;
  return !0;
}
export function $$a0(e, r) {
  void 0 === r && (r = o);
  var n = null;
  function i() {
    for (i = [], s = 0, void 0; s < $$arguments.length; s++) {
      var i;
      var s;
      i[s] = $$arguments[s];
    }
    if (n && n.lastThis === this && r(i, n.lastArgs)) return n.lastResult;
    var o = e.apply(this, i);
    n = {
      lastResult: o,
      lastArgs: i,
      lastThis: this
    };
    return o;
  }
  i.clear = function () {
    n = null;
  };
  return i;
}
export const A = $$a0;
