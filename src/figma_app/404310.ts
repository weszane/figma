import { jsx } from "react/jsx-runtime";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { getI18nString } from "../905/303541";
import { tf } from "../figma_app/831799";
import { d as _$$d } from "../905/86829";
export function $$d0({
  items: e,
  pageSize: t = 4,
  shouldResetOnSelectionChange: r,
  trackingProperties: o,
  showAll: d = !1
}) {
  let {
    visibleItems,
    button
  } = function ({
    items: e,
    pageSize: t = 4,
    shouldResetOnSelectionChange: r,
    trackingProperties: o,
    showAll: d
  }) {
    let u = useSelector(e => e.mirror.sceneGraphSelection);
    let p = Math.min(t, e.length);
    let [_, h] = useState(p);
    let m = d ? e.length : _;
    useEffect(() => {
      d && h(e.length);
    }, [d, e.length]);
    let g = e.length;
    let f = useMemo(() => e.slice(0, Math.min(g, m)), [m, e, g]);
    useEffect(() => {
      r && h(t);
    }, [t, u, h, r]);
    let E = useCallback(() => {
      h(g);
    }, [g]);
    let y = g - f.length;
    return {
      visibleItems: f,
      button: useMemo(() => {
        let e = jsx("div", {
          className: "show_more--showMoreContainer--5car2",
          children: o ? jsx(c, {
            label: getI18nString("inspect_panel.property.remaining_more", {
              remaining: y
            }),
            onClick: E,
            trackingProperties: o
          }) : jsx(_$$d, {
            label: getI18nString("inspect_panel.property.remaining_more", {
              remaining: y
            }),
            onClick: E
          })
        });
        return y > 0 ? e : null;
      }, [o, y, E])
    };
  }({
    items: e,
    pageSize: t,
    shouldResetOnSelectionChange: r,
    trackingProperties: o,
    showAll: d
  });
  return {
    visibleItems,
    showMoreButton: button,
    totalItems: e?.length
  };
}
let c = tf(_$$d);
export const y = $$d0;
