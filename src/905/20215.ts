import { atom } from "jotai";
export function $$r0(e, t = 500, i = !1) {
  let a = atom(void 0);
  let s = atom(e);
  let o = atom(!1);
  let l = atom(e, (n, r, d) => {
    clearTimeout(n(a));
    let c = n(s);
    let u = "function" == typeof d ? d(c) : d;
    let p = () => {
      r(l, u);
      r(o, !1);
    };
    if (r(s, u), r(o, !0), !i && u === e) {
      p();
      return;
    }
    r(a, setTimeout(() => {
      p();
    }, t));
  });
  let d = atom(null, (e, t, i) => {
    clearTimeout(e(a));
    t(o, !1);
  });
  return {
    currentValueAtom: atom(e => e(s)),
    isDebouncingAtom: o,
    clearTimeoutAtom: d,
    debouncedValueAtom: l
  };
}
export const Z = $$r0;
