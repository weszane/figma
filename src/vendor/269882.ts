import i from "../vendor/221637";
import s from "../vendor/817584";
import o from "../vendor/467957";
import a from "../vendor/615861";
import h from "../vendor/856330";
import d from "../vendor/983249";
function p(e, r, n) {
  r = i(r, e);
  for (p = -1, g = r.length, m = !1, void 0; ++p < g;) {
    var p;
    var g;
    var m;
    var v = d(r[p]);
    if (!(m = null != e && n(e, v))) break;
    e = e[v];
  }
  return m || ++p != g ? m : !!(g = e?.length) && h(g) && a(v, g) && (o(e) || s(e));
}
module.exports = p;