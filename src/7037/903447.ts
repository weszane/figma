import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { getI18nString } from "../905/303541";
import { In } from "../905/672640";
import { BK } from "../905/848862";
import { Ib } from "../905/129884";
import { Jz } from "../905/504727";
import { YW } from "../figma_app/778125";
export function $$u0(e) {
  let t = BK(e.dropdownId);
  let n = useRef(null);
  let u = useRef(null);
  if (useEffect(() => {
    t.showing && u.current && u.current.focus();
  }, [t.showing]), e.hideTarget && !t.showing) return null;
  let m = e.children;
  m || (m = jsx(YW, {
    style: t.showing ? {
      backgroundColor: "var(--color-bg-hover, var(--fallback-color-bg-hover))"
    } : void 0,
    selected: t.showing,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": getI18nString("fig_feed.more_actions"),
    onClick: e => {
      e.stopPropagation();
      t.toggle();
    },
    children: jsx(In, {
      icon: "dots-32"
    })
  }));
  return jsxs("div", {
    children: [jsx("div", {
      ref: n,
      onMouseDown: e => e.stopPropagation(),
      children: m
    }), n.current && t.showing && jsx(Jz, {
      closeDropdown: t.hide,
      displayAboveTarget: e.displayAboveTarget,
      displayOverTarget: e.displayOverTarget,
      hideDropdown: t.hide,
      lean: e.lean,
      maxHeight: e.maxHeight,
      maxWidth: e.maxWidth,
      minWidth: e.minWidth,
      options: e.options,
      propagateCloseClick: !0,
      showPoint: !1,
      targetRect: n.current.getBoundingClientRect(),
      textAlign: e.textAlign
    })]
  });
}
export const V = $$u0;