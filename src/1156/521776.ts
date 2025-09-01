import { useCallback } from "react";
export function $$i0({
  textareaRef: e,
  maxHeight: t
}) {
  return useCallback(() => {
    if (e && "current" in e && e.current) {
      let n = e.current;
      n.style.height = "auto";
      let r = window.getComputedStyle(n);
      let i = parseFloat(r.paddingTop);
      let s = parseFloat(r.paddingBottom);
      let a = (parseFloat(r.lineHeight) - parseFloat(r.fontSize)) / 2;
      let l = Math.min(n.scrollHeight - i - s - a - a, t);
      n.style.height = `${l}px`;
      n.style.overflowY = l >= t ? "auto" : "hidden";
    }
  }, [t, e]);
}
export const S = $$i0;