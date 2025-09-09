import { jsx } from "react/jsx-runtime";
import { useRef, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { U1 } from "../figma_app/343967";
import { cZ } from "../figma_app/272902";
import o from "classnames";
import { Dm } from "../figma_app/8833";
import { Yh, g_ } from "../figma_app/32128";
import { E as _$$E } from "../9410/112838";
var d = o;
export function $$h0({
  isCollapsed: e,
  children: t,
  minWidth: n = Yh,
  maxWidth: o = g_
}) {
  let h = useRef(null);
  let m = function ({
    isShowing: e,
    isCollapsed: t,
    ref: n,
    minWidth: a,
    maxWidth: i
  }) {
    let s = useSelector(e => e.isRenaming);
    let o = _$$E(n, t && !s && e);
    return useMemo(() => t ? s && "number" == typeof o ? {
      width: Math.max(a, o)
    } : {
      maxWidth: i
    } : void 0, [t, s, o, a, i]);
  }({
    isCollapsed: e,
    isShowing: !0,
    ref: h,
    minWidth: n,
    maxWidth: o
  });
  let _ = U1();
  let E = useCallback(t => {
    cZ(h, t);
    _(e ? t : null);
  }, [_, e]);
  return jsx("div", {
    className: d()(Dm, "left_panel_island_container--islandContainer--uM5h6", {
      "left_panel_island_container--collapsed--OEOq4": e,
      "left_panel_island_container--withInsetEditor--XKTTi": !e
    }),
    style: m,
    ref: E,
    children: t
  });
}
export const _ = $$h0;
