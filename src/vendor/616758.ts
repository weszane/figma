import { wg, DJ } from "../vendor/73976";
export function $$s1(e, r, n) {
  let s;
  let o;
  let a = !n || void 0 === n.leading || n.leading;
  let h = !n || void 0 === n.trailing || n.trailing;
  let d = !1;
  return {
    throttled: (...n) => {
      if (d) {
        s = n;
        return;
      }
      a ? e(...n) : s = n;
      d = !0;
      o = wg(() => {
        h && s && e(...s);
        d = !1;
        s = void 0;
      }, r);
    },
    cancel: () => {
      DJ(o);
      d = !1;
      s = void 0;
    }
  };
}
export function $$o0() {}
export const l = $$o0;
export const n = $$s1;