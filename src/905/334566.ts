import { useRef, useCallback, useMemo } from "react";
export function $$r0(e) {
  let t = useRef(null);
  return useCallback(() => (t.current || (t.current = function (e) {
    let t = e;
    for (; t;) {
      let {
        overflow,
        overflowY
      } = getComputedStyle(t);
      if ("scroll" === overflow || "scroll" === overflowY) return t;
      t = t.parentElement;
    }
    return null;
  }(e.current)), t.current), [e]);
}
export function $$a1(e, t) {
  $$r0(e);
}
export function $$s2(e) {
  if (!e) return !1;
  let t = document.activeElement;
  for (; t;) {
    if (t === e) return !0;
    t = t.parentElement;
  }
  return !1;
}
export function $$o3(e, t) {
  return useMemo(() => {
    if (e.length > 0 && null !== t) {
      let i = 0;
      e[0].index % t != 0 && (i = t - e[0].index % t);
      return e.slice(i);
    }
    return e;
  }, [e, t]);
}
export const Kr = $$r0;
export const TN = $$a1;
export const Yh = $$s2;
export const ud = $$o3;