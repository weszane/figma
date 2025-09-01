import i from "../vendor/300823";
import s from "../vendor/221637";
import o from "../vendor/615861";
import a from "../vendor/509185";
import h from "../vendor/983249";
function d(e, r, n, d) {
  if (!a(e)) return e;
  r = s(r, e);
  for (p = -1, g = r.length, m = g - 1, v = e, void 0; null != v && ++p < g;) {
    var p;
    var g;
    var m;
    var v;
    var y = h(r[p]);
    var b = n;
    if ("__proto__" === y || "constructor" === y || "prototype" === y) break;
    if (p != m) {
      var O = v[y];
      void 0 === (b = d ? d(O, y, v) : void 0) && (b = a(O) ? O : o(r[p + 1]) ? [] : {});
    }
    i(v, y, b);
    v = v[y];
  }
  return e;
}
module.exports = d;