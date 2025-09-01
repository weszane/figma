import i from "../vendor/127375";
import s from "../vendor/382708";
import o from "../vendor/360087";
var a = 1;
var h = 2;
function d(e, r, n, d, p, g) {
  var m = n & a;
  var v = e.length;
  var y = r.length;
  if (v != y && !(m && y > v)) return !1;
  var b = g.get(e);
  var O = g.get(r);
  if (b && O) return b == r && O == e;
  var x = -1;
  var w = !0;
  var k = n & h ? new i() : void 0;
  for (g.set(e, r), g.set(r, e); ++x < v;) {
    var _ = e[x];
    var S = r[x];
    if (d) var E = m ? d(S, _, x, r, e, g) : d(_, S, x, e, r, g);
    if (void 0 !== E) {
      if (E) continue;
      w = !1;
      break;
    }
    if (k) {
      if (!s(r, function (e, r) {
        if (!o(k, r) && (_ === e || p(_, e, n, d, g))) return k.push(r);
      })) {
        w = !1;
        break;
      }
    } else if (!(_ === S || p(_, S, n, d, g))) {
      w = !1;
      break;
    }
  }
  g.$$delete(e);
  g.$$delete(r);
  return w;
}
module.exports = d;