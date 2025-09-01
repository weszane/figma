import { A as _$$A } from "../vendor/757728";
let i = function (t, e) {
  for (r = -1, i = t?.length, n = 0, s = [], void 0; ++r < i;) {
    var r;
    var i;
    var n;
    var s;
    var l = t[r];
    e(l, r, t) && (s[n++] = l);
  }
  return s;
};
var s = Object.prototype.propertyIsEnumerable;
var l = Object.getOwnPropertySymbols;
export let $$o0 = l ? function (t) {
  return null == t ? [] : i(l(t = Object(t)), function (e) {
    return s.call(t, e);
  });
} : _$$A;
export const A = $$o0;