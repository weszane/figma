import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { E as _$$E } from "../905/632989";
import { bL } from "../905/911410";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { K } from "../905/443068";
import { X } from "../905/736922";
import { Z } from "../905/279476";
import { createLocalStorageAtom, useAtomWithSubscription } from "../figma_app/27355";
import _ from "classnames";
import { hasDesktopAPI } from "../figma_app/876459";
import { Ph } from "../905/160095";
import { getI18nString, renderI18nText } from "../905/303541";
import { b as _$$b } from "../905/985254";
import { f as _$$f } from "../905/940356";
import { ZQ } from "../figma_app/727192";
import { Cm } from "../figma_app/826998";
import { f as _$$f2 } from "../figma_app/24747";
import { x1, MA } from "../figma_app/465413";
var h = _;
let v = "mcp_sse_deprecation_banner--deprecationModalTitle--SC-1H";
let $$A = "mcp_sse_deprecation_banner--deprecationModalCodeWell--jLXK1 content_panel--textContent--uGoXz common--well--J0WtH";
let x = "mcp_sse_deprecation_banner--deprecationModalCodeWellSelected--hqCOQ content_panel--textContentSelected--7ms8o";
let $$N1 = createLocalStorageAtom("dev-mode-mcp-is-using-deprecated-sse", !1);
function C() {
  let [e, t] = useState(!1);
  let r = useRef({
    right: 0,
    top: 0
  });
  let a = Cm("http://127.0.0.1:3845/mcp");
  let {
    value,
    eventHandlers
  } = ZQ(x, x);
  return jsxs(Fragment, {
    children: [jsx(_$$E, {
      className: "mcp_sse_deprecation_banner--deprecationModalTriggerButton--NXqHh",
      onClick: function (n) {
        let {
          x,
          y
        } = n.currentTarget.getBoundingClientRect();
        r.current = {
          right: window.innerWidth - x + 8,
          top: y - 4
        };
        t(!e);
      },
      "aria-expanded": e,
      "aria-haspopup": "dialog",
      children: getI18nString("general.learn_more")
    }), e && jsx(bL, {
      width: "sm",
      onClose: () => t(!1),
      defaultPosition: r.current,
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: getI18nString("dev_handoff.mcp.sse_deprecation_modal.title")
          })
        }), jsxs(nB, {
          children: [jsx("div", {
            className: "mcp_sse_deprecation_banner--deprecationModalDescription--tIgfy",
            children: getI18nString("dev_handoff.mcp.sse_deprecation_modal.body.text")
          }), jsxs("div", {
            className: v,
            children: [getI18nString("dev_handoff.mcp.sse_deprecation_modal.body.old_url"), jsx("span", {
              className: "mcp_sse_deprecation_banner--deprecationModalSubtitle--FpcMF",
              children: getI18nString("dev_handoff.mcp.sse_deprecation_modal.body.deprecated")
            })]
          }), jsx("div", {
            className: $$A,
            children: "http://127.0.0.1:3845/sse"
          }), jsxs("div", {
            className: v,
            children: [getI18nString("dev_handoff.mcp.sse_deprecation_modal.body.new_url"), jsx(K, {
              htmlAttributes: eventHandlers,
              onClick: a,
              "aria-label": getI18nString("inspect_panel.copy"),
              children: jsx(X, {})
            })]
          }), jsx("div", {
            className: h()($$A, value),
            children: "http://127.0.0.1:3845/mcp"
          }), jsx("div", {
            className: "mcp_sse_deprecation_banner--deprecationModalReadMore--Zydmi",
            children: jsx(Ph, {
              href: "https://help.figma.com/hc/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server#h_01JVAXY5BNTZX9WZ3BERXWDDRQ",
              trusted: !0,
              newTab: !0,
              children: getI18nString("general.learn_more")
            })
          })]
        })]
      })
    })]
  });
}
export function $$w0(e) {
  let t = useAtomWithSubscription($$N1);
  let r = useDispatch();
  if (_$$f("dev_mode_mcp_sse_deprecation_banner_dismissed") || !hasDesktopAPI() || !t) return null;
  let i = {
    bannerType: x1.WARN_SOFT,
    icon: jsx(Z, {}),
    iconSize: "medium",
    mainText: jsxs("span", {
      className: "mcp_sse_deprecation_banner--devModeMCPSSEDeprecationBannerContent--t4AFA",
      children: [jsx("span", {
        className: "mcp_sse_deprecation_banner--mainText--Limq0",
        children: getI18nString("dev_handoff.mcp.sse_deprecation_banner.main_text")
      }), " ", renderI18nText("dev_handoff.mcp.sse_deprecation_banner.sub_text", {
        newEndpoint: jsx("span", {
          className: "mcp_sse_deprecation_banner--code--INmZ4",
          children: "/mcp"
        })
      })]
    }),
    dismissible: !0,
    onDismiss: () => r(_$$b({
      dev_mode_mcp_sse_deprecation_banner_dismissed: !0
    })),
    button: {
      type: MA.CUSTOM,
      element: jsx(C, {})
    }
  };
  return jsx(_$$f2, {
    ...e,
    bannerContent: i
  });
}
export const Y = $$w0;
export const A = $$N1;
