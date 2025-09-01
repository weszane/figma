/**
* virtual-core
*
* Copyright (c) TanStack
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
export function $$i1(e, r, n) {
  var i;
  var s;
  var o = null != (i = n.initialDeps) ? i : [];
  return function () {
    n.key && null != n.debug && n.debug() && (i = Date.now());
    var i;
    var a;
    var h = e();
    if (!(h.length !== o.length || h.some(function (e, r) {
      return o[r] !== e;
    }))) return s;
    if (o = h, n.key && null != n.debug && n.debug() && (a = Date.now()), s = r.apply(void 0, h), n.key && null != n.debug && n.debug()) {
      var d = Math.round((Date.now() - i) * 100) / 100;
      var p = Math.round((Date.now() - a) * 100) / 100;
      var g = p / 16;
      var m = function (e, r) {
        for (e = String(e); e.length < r;) e = " " + e;
        return e;
      };
      console.info("%c\u23F1 " + m(p, 5) + " /" + m(d, 5) + " ms", "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(" + Math.max(0, Math.min(120 - 120 * g, 120)) + "deg 100% 31%);", n?.key);
    }
    n?.onChange(s);
    return s;
  };
}
export function $$s2(e, r) {
  if (void 0 !== e) return e;
  throw Error("Unexpected undefined" + (r ? ": " + r : ""));
}
export var $$o0 = function (e, r) {
  return 1 > Math.abs(e - r);
};
export const L0 = $$o0;
export const ph = $$i1;
export const q3 = $$s2;