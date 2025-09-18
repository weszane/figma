import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "../905/443068";
import { A as _$$A } from "../905/251970";
import l from "classnames";
import { buildUploadUrl } from "../figma_app/169182";
import { Spacing } from "../figma_app/637027";
import { renderI18nText, getI18nString } from "../905/303541";
import { postUserFlag } from "../905/985254";
import { TrackingProvider } from "../figma_app/831799";
import { getVisibleTheme } from "../905/640017";
import { UK } from "../figma_app/740163";
import { useFullscreenReady } from "../905/924253";
import { browserCapabilities } from "../905/409121";
import { getViewportWidth } from "../figma_app/62612";
import { selectUserFlag } from "../905/940356";
import { getObservableOrFallback } from "../figma_app/84367";
import { U as _$$U } from "../figma_app/825971";
import { g as _$$g } from "../figma_app/481637";
import { Qf } from "../figma_app/202626";
import { wz } from "../figma_app/532170";
var d = l;
let x = "no_figma_basics_panning_and_zooming_step--selectedHeaderTitle--8-xpb";
let N = "no_figma_basics_panning_and_zooming_step--unselectedHeaderTitle--y0NFC";
let C = "no_figma_basics_panning_and_zooming_step--instructionRow--BP4W4";
let w = "no_figma_basics_panning_and_zooming_step--icon--mtHJ3";
let O = "no_figma_basics_panning_and_zooming_step--heavyFontWeight--Fma8P";
let R = "no_figma_basics_panning_and_zooming_step--keyboardKeyHighlight--jN1Bq";
export function $$L0({
  markComplete: e
}) {
  let t = selectUserFlag("has_panned_in_design_file");
  let r = selectUserFlag("has_zoomed_in_design_file");
  let s = selectUserFlag("dismissed_no_figma_basics_panning_and_zooming_tooltip");
  let [o, l] = useState(() => t || r);
  let d = !o && !s;
  let [c, u] = useState(!1);
  _$$g("no_figma_basics_panning_and_zooming_overlay");
  _$$U("no_figma_basics_panning_and_zooming_overlay");
  let p = !!selectUserFlag("no_figma_basics_panning_and_zooming_overlay");
  useEffect(() => {
    p && c && setTimeout(() => {
      u(!1);
    }, 1300);
  }, [p, u, c]);
  let _ = useFullscreenReady();
  let h = useSelector(e => e.mirror.sceneGraph);
  let m = _ && Qf(h);
  let g = !!m && m.childCount > 0;
  if (useEffect(() => {
    _ && null != h && (g && (c || d) || e());
  }, [g, _, c, e, h, d]), !g) return null;
  let E = {};
  p && (E = {
    opacity: "0",
    transition: "opacity",
    transitionDelay: "1000ms",
    transitionDuration: "300ms"
  });
  return jsxs(Fragment, {
    children: [d && jsx(k, {}), c && jsx("div", {
      style: E,
      children: jsx(P, {})
    })]
  });
}
function P() {
  let e = getViewportWidth({
    subscribeToUpdates_expensive: !0
  });
  return jsx(TrackingProvider, {
    name: "Panning and Zooming Glow Overlay",
    children: jsxs("div", {
      className: "no_figma_basics_panning_and_zooming_step--readyToDesignMoreContainer--nu9cG",
      children: [jsx("div", {
        className: "no_figma_basics_panning_and_zooming_step--readyToDesignMoreBoldText--H6Q1p",
        children: renderI18nText("tooltips_plus_onboarding.ready_to_design_more")
      }), renderI18nText("tooltips_plus_onboarding.go_to_a_blank_spot_in_your_canvas"), jsx(Spacing, {
        multiple: 3
      }), jsx("div", {
        style: {
          width: e + "px",
          borderRadius: e + "px"
        },
        className: "no_figma_basics_panning_and_zooming_step--blueGlow--zcqFY"
      })]
    })
  });
}
var D = (e => (e.MOUSE = "mouse", e.TRACKPAD = "trackpad", e))(D || {});
function k() {
  let e = useDispatch();
  let [t, r] = useState("mouse");
  return jsx(TrackingProvider, {
    name: "Panning and Zooming Instructions Modal",
    children: jsx(wz, {
      children: jsxs("div", {
        "data-testid": "panning-and-zooming-hint",
        className: "no_figma_basics_panning_and_zooming_step--container--8Vwa-",
        children: [jsxs("div", {
          className: "no_figma_basics_panning_and_zooming_step--header--OrjJu",
          children: [jsxs("div", {
            className: "no_figma_basics_panning_and_zooming_step--headerTabs--D9Er-",
            children: [jsx("button", {
              className: d()({
                [x]: "mouse" === t,
                [N]: "mouse" !== t
              }),
              onClick: () => r("mouse"),
              children: renderI18nText("tooltips_plus_onboarding.mouse")
            }), jsx("button", {
              className: d()({
                [x]: "trackpad" === t,
                [N]: "trackpad" !== t
              }),
              onClick: () => r("trackpad"),
              children: renderI18nText("tooltips_plus_onboarding.trackpad")
            })]
          }), jsx("div", {
            className: "no_figma_basics_panning_and_zooming_step--closeButton--UAV5m",
            children: jsx(IconButton, {
              onClick: () => {
                e(postUserFlag({
                  dismissed_no_figma_basics_panning_and_zooming_tooltip: !0
                }));
              },
              "aria-label": getI18nString("general.close"),
              htmlAttributes: {
                "data-testid": "close-button"
              },
              children: jsx(_$$A, {})
            })
          })]
        }), jsxs("div", {
          className: "no_figma_basics_panning_and_zooming_step--body--QKpb-",
          children: [jsx(Spacing, {
            multiple: 1.5
          }), jsx(G, {
            peripheral: t
          }), jsx(Spacing, {
            multiple: 2
          }), jsx(V, {
            peripheral: t
          })]
        })]
      })
    })
  });
}
let M = e => "dark" === e ? buildUploadUrl("d2eefebde737b9d5fba2b35193dcd51e26ed0164") : buildUploadUrl("99d648a7ac711ba9d19976515105d6395eeb2d4c");
let F = e => "dark" === e ? buildUploadUrl("e27a5d39945685c389cd50e9f08144678edefeab") : buildUploadUrl("2357b697bfe85711b1de702dc63611ef8bb75859");
let j = e => "dark" === e ? buildUploadUrl("f49911183f0d3a2b6ee5044b42e0a14fe549999a") : buildUploadUrl("2a0c8ae88f72d6155bd818a0c51c8ced71fcecfa");
let U = e => "dark" === e ? buildUploadUrl("045c7e1324e953b8ee9ec91ac4e944995662e11e") : buildUploadUrl("c764bcd0a726bf2d31f70f16808785efeae4de56");
let B = e => "dark" === e ? buildUploadUrl("7a24deb2e05c4542dbd8b6bd1f009e26ba761b48") : buildUploadUrl("32f4843d9b24a4b95129bacd47f6b81fe439228f");
function G({
  peripheral: e
}) {
  let t = getVisibleTheme();
  let r = "mouse" === e ? U(t) : M(t);
  let i = `${e} icon`;
  let a = getObservableOrFallback(UK().scrollWheelZoom);
  return jsxs("div", {
    className: C,
    children: [jsx("img", {
      src: r,
      className: w,
      alt: i
    }), jsxs("div", {
      children: [jsx("span", {
        className: O,
        children: renderI18nText("tooltips_plus_onboarding.to_zoom")
      }), "\xa0", "mouse" !== e ? renderI18nText("tooltips_plus_onboarding.pinch_your_trackpad") : a ? renderI18nText("tooltips_plus_onboarding.scroll_your_mouse") : renderI18nText("tooltips_plus_onboarding.hold_key_and_scroll", {
        keyboardKey: jsx("span", {
          className: R,
          children: renderI18nText(browserCapabilities.isMac() ? "tooltips_plus_onboarding.command_key" : "tooltips_plus_onboarding.control_key")
        })
      })]
    })]
  });
}
function V({
  peripheral: e
}) {
  let t = getVisibleTheme();
  let r = getObservableOrFallback(UK().rightClickPan);
  let i = `${e} icon`;
  return jsxs("div", {
    className: C,
    children: [jsx("img", {
      src: "mouse" !== e ? F(t) : r ? B(t) : j(t),
      className: w,
      alt: i
    }), jsxs("div", {
      children: [jsx("span", {
        className: O,
        children: renderI18nText("tooltips_plus_onboarding.to_move")
      }), "\xa0", "mouse" !== e ? renderI18nText("tooltips_plus_onboarding.swipe_your_trackpad_with_two_fingers") : r ? renderI18nText("tooltips_plus_onboarding.hold_right_click_while_moving_mouse") : renderI18nText("tooltips_plus_onboarding.hold_space_and_left_click_while_moving_your_mouse", {
        spaceKey: jsx("span", {
          className: R,
          children: renderI18nText("tooltips_plus_onboarding.space_key")
        })
      })]
    })]
  });
}
export const iF = $$L0;