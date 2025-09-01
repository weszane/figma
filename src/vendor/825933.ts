import i from "../vendor/220350";
var s = 1;
var o = Object.prototype.hasOwnProperty;
function a(e, r, n, a, h, d) {
  var p = n & s;
  var g = i(e);
  var m = g.length;
  if (m != i(r).length && !p) return !1;
  for (var v = m; v--;) {
    var y = g[v];
    if (!(p ? y in r : o.call(r, y))) return !1;
  }
  var b = d.get(e);
  var O = d.get(r);
  if (b && O) return b == r && O == e;
  var x = !0;
  d.set(e, r);
  d.set(r, e);
  for (var w = p; ++v < m;) {
    var k = e[y = g[v]];
    var _ = r[y];
    if (a) var S = p ? a(_, k, y, r, e, d) : a(k, _, y, e, r, d);
    if (!(void 0 === S ? k === _ || h(k, _, n, a, d) : S)) {
      x = !1;
      break;
    }
    w || (w = "constructor" == y);
  }
  if (x && !w) {
    var E = e.constructor;
    var A = r.constructor;
    E != A && "constructor" in e && "constructor" in r && !("function" == typeof E && E instanceof E && "function" == typeof A && A instanceof A) && (x = !1);
  }
  d.$$delete(e);
  d.$$delete(r);
  return x;
}
module.exports = a;