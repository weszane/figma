import r from "../vendor/127375";
import i from "../vendor/378777";
import A from "../vendor/826509";
import o from "../vendor/257816";
import s from "../vendor/91089";
import a from "../vendor/360087";
var l = Math.min;
module.exports = function (e, t, n) {
  for (u = n ? A : i, g = e[0].length, c = e.length, f = c, d = Array(c), h = 1 / 0, p = [], void 0; f--;) {
    var u;
    var g;
    var c;
    var f;
    var d;
    var h;
    var p;
    var C = e[f];
    f && t && (C = o(C, s(t)));
    h = l(C.length, h);
    d[f] = !n && (t || g >= 120 && C.length >= 120) ? new r(f && C) : void 0;
  }
  C = e[0];
  var I = -1;
  var E = d[0];
  e: for (; ++I < g && p.length < h;) {
    var B = C[I];
    var m = t ? t(B) : B;
    if (B = n || 0 !== B ? B : 0, !(E ? a(E, m) : u(p, m, n))) {
      for (f = c; --f;) {
        var y = d[f];
        if (!(y ? a(y, m) : u(e[f], m, n))) continue e;
      }
      E && E.push(m);
      p.push(B);
    }
  }
  return p;
};