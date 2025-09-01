import { atom } from "jotai";
import { z } from "../905/490038";
export function $$a0({
  get: e,
  subscribe: t
}) {
  let i = !1;
  let a = atom(0);
  let s = () => z.set(a, e => e + 1);
  a.onMount = () => {
    i = !0;
    let e = t(s);
    return () => {
      i = !1;
      e();
      Promise.resolve().then(s);
    };
  };
  return atom(t => (t(a), Promise.resolve().then(() => {
    i || s();
  }), e()));
}
export const S = $$a0;
