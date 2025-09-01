function i(e) {
  return "/" === e.charAt(0);
}
function s(e, r) {
  for (n = r, i = n + 1, s = e.length, void 0; i < s; n += 1, i += 1) {
    var n;
    var i;
    var s;
    e[n] = e[i];
  }
  e.pop();
}
export let $$o0 = function (e, r) {
  void 0 === r && (r = "");
  var n;
  var o = e && e.split("/") || [];
  var a = r && r.split("/") || [];
  var h = e && i(e);
  var d = r && i(r);
  var p = h || d;
  if (e && i(e) ? a = o : o.length && (a.pop(), a = a.concat(o)), !a.length) return "/";
  if (a.length) {
    var g = a[a.length - 1];
    n = "." === g || ".." === g || "" === g;
  } else n = !1;
  for (m = 0, v = a.length, void 0; v >= 0; v--) {
    var m;
    var v;
    var y = a[v];
    "." === y ? s(a, v) : ".." === y ? (s(a, v), m++) : m && (s(a, v), m--);
  }
  if (!p) for (; m--; m) a.unshift("..");
  !p || "" === a[0] || a[0] && i(a[0]) || a.unshift("");
  var b = a.join("/");
  n && "/" !== b.substr(-1) && (b += "/");
  return b;
};
export const A = $$o0;