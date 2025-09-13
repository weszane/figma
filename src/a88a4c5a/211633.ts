import { jsx } from "react/jsx-runtime";
import { useRef, useState, useCallback, useLayoutEffect, memo } from "react";
import { xk } from "@stylexjs/stylex";
import { getI18nString } from "../905/303541";
import { R } from "../figma_app/636548";
import { W } from "../figma_app/896386";
import { g } from "../figma_app/103028";
import { KindEnum } from "../905/129884";
import { aj, Zp, XS, sE } from "../figma_app/386160";
import { R as _$$R } from "../figma_app/360122";
function x({
  nodeTypeString: e
}) {
  let t = useRef(null);
  let [l, r] = useState(!1);
  let s = useCallback(() => {
    t.current && r(t.current.offsetWidth < t.current.scrollWidth);
  }, []);
  useLayoutEffect(() => {
    s();
    let e = new ResizeObserver(s);
    t.current && e.observe(t.current);
    return () => {
      e.disconnect();
    };
  }, [e, s]);
  return jsx("div", {
    ref: t,
    className: aj,
    "data-tooltip-type": l ? KindEnum.TEXT : void 0,
    "data-tooltip": l ? e : void 0,
    "data-testid": "node-type-display",
    children: e
  });
}
export let $$h0 = memo(e => {
  let {
    nodeCount,
    nodeType,
    nodeTypeString
  } = e;
  let u = g();
  return nodeType ? jsx("div", {
    ref: u,
    ...xk(_$$R.selectionName),
    children: (() => {
      switch (nodeType) {
        case "MIXED":
          return jsx("div", {
            className: Zp,
            children: jsx("span", {
              children: getI18nString("fullscreen.properties_panel.layer_header.node_type_multiple_selected", {
                count: nodeCount
              })
            })
          });
        case "SYMBOL":
          return jsx(R, {
            alwaysShowParentComponent: !0,
            shouldHideComponentIcon: !0,
            unfocusedInputOverridesClassName: XS,
            focusedInputOverridesClassName: sE
          });
        case "INSTANCE":
          return jsx(W, {
            isInSelectionActionsPanel: !0
          });
        default:
          return jsx(x, {
            nodeTypeString
          });
      }
    })()
  }) : null;
});
$$h0.displayName = "SelectionName";
export const Y = $$h0;