import { useState, useLayoutEffect } from "react";
import { camelToKebab } from "../figma_app/930338";
import { defaultContextValue, isWhiteboardFullscreen } from "../905/187165";
import { mN } from "../figma_app/985200";
export function $$o0(e, t, i, l, d = !0) {
  let [c, u] = useState(defaultContextValue);
  let p = isWhiteboardFullscreen(i);
  useLayoutEffect(() => {
    let i = t.current;
    if (i) {
      if (d) {
        let t = p ? "light" : e || void 0;
        t ? i.setAttribute("data-preferred-theme", t) : i.removeAttribute("data-preferred-theme");
        "light" === t ? i.style.colorScheme = "light" : "dark" === t && (i.style.colorScheme = "dark");
        l ? i.setAttribute("data-enhanced-contrast", "") : i.removeAttribute("data-enhanced-contrast");
        let n = mN.getInstance();
        n && n.isInnerIframeActive() && n.handleThemeUpdate();
        let a = getComputedStyle(i);
        u(new Proxy({}, {
          get(e, t) {
            let i = a.getPropertyValue(`--${camelToKebab(t.toString())}`);
            return "" === i ? null : i;
          }
        }));
      }
      return () => {
        i.removeAttribute("data-preferred-theme");
        i.removeAttribute("data-enhanced-contrast");
      };
    }
  }, [e, d, p, t, l]);
  return c;
}
export const Z = $$o0;