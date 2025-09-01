import { x } from "../905/437800";
export function $$r0(e, t, i) {
  return e && x() ? new Promise((n, r) => {
    let a = !1;
    let s = () => {
      a || (a = !0, setTimeout(() => {
        n();
      }, i.endDelay || 0));
    };
    let o = e.animate(t, i);
    let l = i.stops;
    let d = () => {
      var e;
      e = o.currentTime;
      let t = "undefined" == typeof CSSNumericValue ? e : e instanceof CSSNumericValue ? "value" in e && "number" == typeof e.value ? e.value : null : e;
      if (null !== t) {
        if (t >= i.duration * (i.resolveAt || 1)) {
          s();
          return;
        }
        l && l.length > 0 && t / i.duration > l[0].at && (l[0].then(), l.pop());
        requestAnimationFrame(d);
      }
    };
    d();
    o.onfinish = () => {
      s();
    };
    o.oncancel = () => {
      s();
    };
  }) : Promise.resolve();
}
export function $$a1(e, t) {
  if (!e) {
    t();
    return;
  }
  let i = !1;
  let n = () => {
    i || (i = !0, t());
  };
  e.then(n).catch(n);
}
export const G = $$r0;
export const b = $$a1; 
