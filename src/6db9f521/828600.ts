import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { ButtonPrimitive } from "../905/632989";
import { r as _$$r } from "../905/571562";
import { a as _$$a } from "../905/339331";
import { useAtomWithSubscription } from "../figma_app/27355";
import d from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { f as _$$f } from "../figma_app/109947";
import { getI18nString, renderI18nText } from "../905/303541";
import { jsFullscreenPreventEventCapture } from "../figma_app/8833";
import { getViewportWidth } from "../figma_app/62612";
import { wV } from "../figma_app/779965";
import { M$q } from "../figma_app/27776";
var c = d;
let y = "floating_layers_panel--isExpanded--qjuJR";
let f = "floating_layers_panel--chevronIcon--rNFmc";
let j = parsePxNumber(M$q);
export function $$b0({
  children: e,
  title: t = null,
  nodeIcon: i = null,
  panelActions: d = null,
  onSizeChange: u,
  bottom: g,
  left: b,
  hide: E
}) {
  let [v, T] = useState(!1);
  let S = useRef(null);
  let I = getViewportWidth({
    subscribeToUpdates_expensive: !0
  });
  let N = useAtomWithSubscription(_$$f);
  let k = (I - (N?.current?.clientWidth ?? 0)) / 2 - j - 6;
  let [C, w] = useState(230);
  function O() {
    T(!v);
  }
  let A = v ? Math.min(C, k) : 230;
  useEffect(() => {
    u && u(A);
  }, [A, u]);
  return jsx(wV, {
    ref: S,
    className: c()("floating_layers_panel--container---6H4q", jsFullscreenPreventEventCapture, "devHandoffFloatingLayersPanel", "pagesPanel"),
    "data-cancel-insertable-resource-drag-and-drop": !0,
    defaultSize: 230,
    disableResizing: !v,
    id: "focus-floating-left-panel",
    onResize: e => {
      w(Math.min(Math.max(e, 230), k));
    },
    side: "right",
    size: A,
    style: {
      bottom: g,
      left: b,
      display: E ? "none" : void 0
    },
    children: jsxs("div", {
      className: "floating_layers_panel--containerInner--GVica",
      children: [jsxs("div", {
        className: c()("floating_layers_panel--header--YtDpH", {
          [y]: v
        }),
        children: [jsxs(ButtonPrimitive, {
          className: c()("floating_layers_panel--headerButton--e-t0D", {
            [y]: v
          }),
          onClick: O,
          "aria-expanded": v,
          "aria-label": getI18nString("dev_handoff.tag.layers"),
          children: [!v && i, jsxs("div", {
            className: "floating_layers_panel--middle--QR7nt",
            children: [jsx("div", {
              className: c()("floating_layers_panel--title--pH3fr", {
                "floating_layers_panel--hasNoIconWhenCollapsed--F2ap6": !i && !v
              }),
              children: renderI18nText("dev_handoff.tag.layers")
            }), !v && t]
          })]
        }), v && d, jsx(ButtonPrimitive, {
          className: c()("floating_layers_panel--expandCollapseButton--EOmgJ", {
            [y]: v
          }),
          onClick: O,
          "aria-expanded": v,
          "aria-label": getI18nString("dev_handoff.tag.layers"),
          children: v ? jsx(_$$r, {
            className: f
          }) : jsx(_$$a, {
            className: f
          })
        })]
      }), jsx("div", {
        className: c()("floating_layers_panel--listContainer--Kr9-C", {
          [y]: v
        }),
        children: e
      })]
    })
  });
}
export const P = $$b0;