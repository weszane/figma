import { useState, useLayoutEffect } from "react";
let r = ":not(:empty)";
export function $$a0(e) {
  let [t, i] = useState(!1);
  useLayoutEffect(() => {
    let t = e.current;
    if (!t) return;
    let n = new ResizeObserver(e => {
      let t = !1;
      for (let i of e) if (i.target.scrollWidth - function (e) {
        let t = Number.parseFloat(e.paddingInlineStart || e.paddingLeft || "0") + Number.parseFloat(e.paddingInlineEnd || e.paddingRight || "0");
        return Number.isNaN(t) ? 0 : Math.max(t, 0);
      }(getComputedStyle(i.target)) > Math.round(i.contentRect.width)) {
        t = !0;
        break;
      }
      i(t);
    });
    let a = t.querySelectorAll(r);
    for (let e of a.length ? a : [t]) n.observe(e);
    let s = new MutationObserver(() => {
      for (let e of (n.disconnect(), (a = t.querySelectorAll(r)).length ? a : [t])) n.observe(e);
    });
    s.observe(t, {
      childList: !0
    });
    return () => {
      n.disconnect();
      s.disconnect();
    };
  }, [e]);
  return t;
}
export const R = $$a0;