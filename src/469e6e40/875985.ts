import { jsxs, jsx } from "react/jsx-runtime";
import { K } from "../905/443068";
import { A } from "../905/251970";
import r from "classnames";
import { SvgComponent } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { I } from "../figma_app/638694";
import { TrackingProvider } from "../figma_app/831799";
import { z1, wL, tD, D9, wv, bW, EM, vK, Rk, Nt, _9, zK, LD, Up, G } from "../469e6e40/878707";
if (443 == require.j) {}
if (443 == require.j) {}
var l = r;
var $$g1 = (e => (e[e.BLUE = 0] = "BLUE", e[e.GREEN = 1] = "GREEN", e[e.LIGHT_BLUE = 2] = "LIGHT_BLUE", e[e.YELLOW = 3] = "YELLOW", e[e.RED = 4] = "RED", e[e.LIGHT_YELLOW = 5] = "LIGHT_YELLOW", e[e.LIGHT_GREEN = 6] = "LIGHT_GREEN", e))($$g1 || {});
function h(e) {
  return {
    0: z1,
    1: wL,
    2: tD,
    3: D9,
    4: wv,
    5: bW,
    6: EM
  }[e];
}
function x(e) {
  return jsxs(AutoLayout, {
    horizontalAlignItems: "start",
    children: [e.icon, jsx("span", {
      children: e.title
    }), jsx("span", {
      className: _$$s.fontNormal.pl24.$,
      children: e.secondaryText
    })]
  });
}
export function $$b0(e) {
  return jsxs(AutoLayout, {
    horizontalAlignItems: "end",
    width: "fill-parent",
    children: [jsx(x, {
      title: e.title,
      secondaryText: e.secondaryText,
      icon: e.icon
    }), e.button]
  });
}
export function $$v2(e) {
  let t = I();
  return jsx("div", {
    className: l()(h(e.color), e.customClassName, vK, {
      [Rk]: e.isResponsive,
      [Nt]: e.removeNegativeMargin,
      [_9]: t,
      [zK]: e.roundedCorner
    }),
    "data-testid": e.dataTestId,
    children: e.children
  });
}
export function $$f3(e) {
  let t = h(e.color ?? 2);
  let a = I();
  return jsx(TrackingProvider, {
    name: e.trackingContext,
    properties: e.trackingProperties,
    children: jsxs("div", {
      className: l()(e.className || "", LD, t, {
        [_9]: a
      }),
      children: [jsxs("div", {
        className: Up,
        children: [e.icon && jsx(SvgComponent, {
          className: G,
          svg: e.icon
        }), jsx("span", {
          className: _$$s.wFull.$,
          children: e.children
        })]
      }), jsx(K, {
        onClick: e.onClose,
        "aria-label": getI18nString("admin_settings.dimiss"),
        children: jsx(A, {})
      })]
    })
  });
}
export const EC = $$b0;
export const Sn = $$g1;
export const aD = $$v2;
export const wr = $$f3;