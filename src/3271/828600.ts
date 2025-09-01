import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { E as _$$E } from "../905/632989";
import { r as _$$r } from "../905/571562";
import { a as _$$a } from "../905/339331";
import { md } from "../figma_app/27355";
import d from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { f as _$$f } from "../figma_app/109947";
import { t as _$$t, tx } from "../905/303541";
import { Dm } from "../figma_app/8833";
import { QU } from "../figma_app/62612";
import { wV } from "../figma_app/779965";
import { M$q } from "../figma_app/27776";
var c = d;
let v = "floating_layers_panel--isExpanded--qjuJR";
let f = "floating_layers_panel--chevronIcon--rNFmc";
let C = parsePxNumber(M$q);
export function $$j0({
  children: e,
  title: t = null,
  nodeIcon: s = null,
  panelActions: d = null,
  onSizeChange: u,
  bottom: h,
  left: j,
  hide: y
}) {
  let [w, b] = useState(!1);
  let L = useRef(null);
  let N = QU({
    subscribeToUpdates_expensive: !0
  });
  let I = md(_$$f);
  let T = (N - (I?.current?.clientWidth ?? 0)) / 2 - C - 6;
  let [E, P] = useState(230);
  function k() {
    b(!w);
  }
  let R = w ? Math.min(E, T) : 230;
  useEffect(() => {
    u && u(R);
  }, [R, u]);
  return jsx(wV, {
    ref: L,
    className: c()("floating_layers_panel--container---6H4q", Dm, "devHandoffFloatingLayersPanel", "pagesPanel"),
    "data-cancel-insertable-resource-drag-and-drop": !0,
    defaultSize: 230,
    disableResizing: !w,
    id: "focus-floating-left-panel",
    onResize: (e) => {
      P(Math.min(Math.max(e, 230), T));
    },
    side: "right",
    size: R,
    style: {
      bottom: h,
      left: j,
      display: y ? "none" : void 0
    },
    children: jsxs("div", {
      className: "floating_layers_panel--containerInner--GVica",
      children: [jsxs("div", {
        className: c()("floating_layers_panel--header--YtDpH", {
          [v]: w
        }),
        children: [jsxs(_$$E, {
          className: c()("floating_layers_panel--headerButton--e-t0D", {
            [v]: w
          }),
          onClick: k,
          "aria-expanded": w,
          "aria-label": _$$t("dev_handoff.tag.layers"),
          children: [!w && s, jsxs("div", {
            className: "floating_layers_panel--middle--QR7nt",
            children: [jsx("div", {
              className: c()("floating_layers_panel--title--pH3fr", {
                "floating_layers_panel--hasNoIconWhenCollapsed--F2ap6": !s && !w
              }),
              children: tx("dev_handoff.tag.layers")
            }), !w && t]
          })]
        }), w && d, jsx(_$$E, {
          className: c()("floating_layers_panel--expandCollapseButton--EOmgJ", {
            [v]: w
          }),
          onClick: k,
          "aria-expanded": w,
          "aria-label": _$$t("dev_handoff.tag.layers"),
          children: w ? jsx(_$$r, {
            className: f
          }) : jsx(_$$a, {
            className: f
          })
        })]
      }), jsx("div", {
        className: c()("floating_layers_panel--listContainer--Kr9-C", {
          [v]: w
        }),
        children: e
      })]
    })
  });
}
export const P = $$j0;