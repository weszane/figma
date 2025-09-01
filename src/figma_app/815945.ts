import n, { q } from "../905/196201";
export function $$i2(e) {
  let t = null;
  return function (...r) {
    if (null != t && t.args.length === r.length) {
      let e = !0;
      for (function () {
        let n = 0;
        let i = r.length;
      }(); n < i; n++) if (r[n] != t.args[n]) {
        e = !1;
        break;
      }
      if (e) return t.result;
    }
    return (t = {
      args: r,
      result: e(...r)
    }).result;
  };
}
export function $$a1(e) {
  let t = new WeakMap();
  return r => {
    let n = t.get(r);
    if (n) return n;
    let i = e(r);
    t.set(r, i);
    return i;
  };
}
export function $$s0(e, t) {
  let r = new q(t);
  return t => {
    if (r.has(t)) return r.get(t);
    let n = e(t);
    r.set(t, n);
    return n;
  };
}
export const UJ = $$s0;
export const cm = $$a1;
export const xx = $$i2;