import i from "../vendor/257816";
import s from "../vendor/433714";
import o from "../vendor/162537";
import a from "../vendor/577212";
import h from "../vendor/212773";
import d from "../vendor/91089";
import p from "../vendor/33822";
import g from "../vendor/240820";
import m from "../vendor/467957";
function v(e, r, n) {
  r = r.length ? i(r, function (e) {
    return m(e) ? function (r) {
      return s(r, 1 === e.length ? e[0] : e);
    } : e;
  }) : [g];
  var v = -1;
  r = i(r, d(o));
  return h(a(e, function (e, n, s) {
    return {
      criteria: i(r, function (r) {
        return r(e);
      }),
      index: ++v,
      value: e
    };
  }), function (e, r) {
    return p(e, r, n);
  });
}
module.exports = v;