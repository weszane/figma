import { jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useEffect } from "react";
var $$a1 = (e => (e[e.OVERLAY = 50] = "OVERLAY", e[e.MULTIPLAYER_SPOTLIGHT = 40] = "MULTIPLAYER_SPOTLIGHT", e[e.LINK_TOOLTIP = 30] = "LINK_TOOLTIP", e[e.SITES_NON_DEFAULT_LEFT_RAIL_VIEW = 25] = "SITES_NON_DEFAULT_LEFT_RAIL_VIEW", e[e.EDITING_TEXT_FIELD = 20] = "EDITING_TEXT_FIELD", e[e.FULL_SCREEN_MODAL = 15] = "FULL_SCREEN_MODAL", e[e.MODAL = 10] = "MODAL", e))($$a1 || {});
let s = new Set();
export function $$o2(e, t) {
  let r = useCallback(e => {
    if ("Escape" !== e.key) return;
    let t = Array.from(s);
    for (let r of (t.sort((e, t) => t.priority - e.priority), t)) if (r.callback()) {
      e.stopImmediatePropagation();
      break;
    }
  }, []);
  useEffect(() => {
    0 === s.size && document.addEventListener("keydown", r, {
      capture: !0
    });
    let n = {
      callback: e,
      priority: t
    };
    s.add(n);
    return () => {
      s.$$delete(n);
      0 === s.size && document.removeEventListener("keydown", r, {
        capture: !0
      });
    };
  }, [r, e, t]);
}
export function $$l0(e) {
  let {
    handleEscape,
    priority
  } = e;
  $$o2(handleEscape, priority);
  return jsx(Fragment, {
    children: e.children
  });
}
export const $W = $$l0;
export const KD = $$a1;
export const O1 = $$o2;