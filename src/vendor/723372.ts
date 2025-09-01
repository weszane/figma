function i(e) {
  var r;
  var n;
  var s = "";
  if ("string" == typeof e || "number" == typeof e) s += e;else if ("object" == typeof e) {
    if (Array.isArray(e)) {
      var o = e.length;
      for (r = 0; r < o; r++) e[r] && (n = i(e[r])) && (s && (s += " "), s += n);
    } else for (n in e) e[n] && (s && (s += " "), s += n);
  }
  return s;
}
export let $$s0 = function () {
  for (n = 0, s = "", o = $$arguments.length, void 0; n < o; n++) {
    var e;
    var r;
    var n;
    var s;
    var o;
    (e = $$arguments[n]) && (r = i(e)) && (s && (s += " "), s += r);
  }
  return s;
};
export const A = $$s0;