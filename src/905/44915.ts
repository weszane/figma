import { useContext, useCallback, useEffect } from "react";
import { A } from "../905/780920";
export function $$$$a0({
  isPrimaryLayout: e,
  itemIndex: t,
  layoutIndex: i,
  autoFocusOverride: a,
  enableAutoFocus: s = !0
}) {
  let o = useContext(A);
  return s && (void 0 !== e ? e : 0 === i) && (void 0 !== a ? a : t === o);
}
export function $$s1({
  keyboardNavigationItem: e,
  shouldAutoFocus: t,
  enableFauxFocus: i
}) {
  let r = useCallback(t => {
    e && (i ? e.fauxFocus(t) : e.focus());
  }, [e, i]);
  let a = useCallback(() => {
    e && (i ? e.fauxBlur() : e.blur());
  }, [e, i]);
  useEffect(() => {
    if (e && t) {
      if ("visible" === document.visibilityState) r();else {
        let e = () => {
          "visible" === document.visibilityState && (requestAnimationFrame(() => r()), document.removeEventListener("visibilitychange", e));
        };
        document.addEventListener("visibilitychange", e);
        return () => document.removeEventListener("visibilitychange", e);
      }
    }
  }, [e, t, r]);
  return {
    focus: r,
    blur: a
  };
}
export const a = $$$$a0;
export const i = $$s1;