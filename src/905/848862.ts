import { bt } from "../905/270322";
import { useMemo } from "react";
import { d4, wA } from "../vendor/514228";
import { oB, j7 } from "../905/929976";
export function $$s1() {
  return d4(e => e.dropdownShown);
}
export function $$o0(e) {
  let t = wA();
  let i = $$s1();
  return useMemo(() => {
    let {
      type,
      ...r
    } = i || {};
    let s = type === e;
    function o() {
      t(oB());
    }
    function l(i = {}) {
      t(j7({
        ...i,
        type: e
      }));
    }
    return {
      ...r,
      showing: s,
      hide: o,
      show: l,
      toggle: function (e = {}) {
        s ? o() : l(e);
      }
    };
  }, [t, i, e]);
}
export let $$l2 = bt(e => e.dropdownShown);
export const BK = $$o0;
export const Um = $$s1;
export const xc = $$l2;