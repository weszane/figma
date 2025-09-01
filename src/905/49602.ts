import { rb, E$ } from "../905/209596";
import { I } from "../905/83107";
export function $$a0(e) {
  var t;
  var i;
  let r = null !== (i = e.parentNode?.children) && void 0 !== i ? i : [];
  let a = rb(e);
  for (let t = r.length - 1; t >= 0; t--) {
    let i = r[t];
    if (i === e) break;
    if (!1 !== i.visible && (!i.opacity || !(i.opacity <= .1)) && o(a, rb(i))) return !0;
  }
  return !1;
}
export function $$s1(e) {
  var t;
  var i;
  let a = null !== (i = e.parentNode?.children) && void 0 !== i ? i : [];
  let s = rb(e);
  let l = I(e);
  if (!l) return !1;
  let d = rb(l);
  let c = E$(s, d);
  if (!c) return !1;
  for (let t = a.length - 1; t >= 0; t--) {
    let i = a[t];
    if (i === e) break;
    if (function (e) {
      var t;
      if (!1 === e.visible || "TEXT" === e.type) return !1;
      let i = e.fills?.filter(e => !1 !== e.visible);
      return !!i && 0 !== i.length && (!e.opacity || !(e.opacity <= .1));
    }(i) && o(c, rb(i))) return !0;
  }
  return !1;
}
function o(e, t) {
  let i = e.x >= t.x;
  let n = e.x + e.width <= t.x + t.width;
  let r = e.y >= t.y;
  let a = e.y + e.height <= t.y + t.height;
  return i && n && r && a;
}
export const P = $$a0;
export const W = $$s1;