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
  let I = QU({
    subscribeToUpdates_expensive: !0
  });
  let N = md(_$$f);
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
    className: c()("floating_layers_panel--container---6H4q", Dm, "devHandoffFloatingLayersPanel", "pagesPanel"),
    "data-cancel-insertable-resource-drag-and-drop": !0,
    defaultSize: 230,
    disableResizing: !v,
    id: "focus-floating-left-panel",
    onResize: (e) => {
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
        children: [jsxs(_$$E, {
          className: c()("floating_layers_panel--headerButton--e-t0D", {
            [y]: v
          }),
          onClick: O,
          "aria-expanded": v,
          "aria-label": _$$t("dev_handoff.tag.layers"),
          children: [!v && i, jsxs("div", {
            className: "floating_layers_panel--middle--QR7nt",
            children: [jsx("div", {
              className: c()("floating_layers_panel--title--pH3fr", {
                "floating_layers_panel--hasNoIconWhenCollapsed--F2ap6": !i && !v
              }),
              children: tx("dev_handoff.tag.layers")
            }), !v && t]
          })]
        }), v && d, jsx(_$$E, {
          className: c()("floating_layers_panel--expandCollapseButton--EOmgJ", {
            [y]: v
          }),
          onClick: O,
          "aria-expanded": v,
          "aria-label": _$$t("dev_handoff.tag.layers"),
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