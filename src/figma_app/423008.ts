import { jsx, jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { ButtonPrimitive } from "../905/632989";
import { setupThemeContext } from "../905/614223";
import o from "classnames";
import { isGovCluster } from "../figma_app/169182";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { Z } from "../905/224161";
import { getSelectedView } from "../figma_app/386952";
import { getEditorViewType } from "../905/187165";
import { x6, zB, as, Hg, _d, Kk, IO } from "../905/410210";
import { A } from "../5724/721563";
var l = o;
export function $$E0({
  children: e,
  large: t,
  brandTextColor: r,
  ...o
}) {
  let E = getSelectedView();
  let y = useRef(null);
  Z("light", y);
  let b = getEditorViewType(E);
  return isGovCluster() ? null : jsx(setupThemeContext, {
    mode: "light",
    brand: b,
    children: jsx("div", {
      ref: y,
      children: jsx(ButtonPrimitive, {
        htmlAttributes: {
          "data-test-id": "google-btn"
        },
        className: l()(x6, zB, t ? as : Hg, r && cssBuilderInstance.colorTextBrand.$),
        "aria-label": getI18nString("footer_banner.continue_with_google"),
        ...o,
        children: jsxs("span", {
          className: _d,
          children: [jsx(SvgComponent, {
            className: Kk,
            svg: A,
            useOriginalSrcFills_DEPRECATED: !0
          }), jsx("span", {
            className: IO,
            children: e
          })]
        })
      })
    })
  });
}
export function $$y1(e) {
  let t = getSelectedView();
  let r = useRef(null);
  Z("light", r);
  let o = getEditorViewType(t);
  return jsx(setupThemeContext, {
    mode: "light",
    brand: o,
    children: jsx("div", {
      ref: r,
      children: jsx(ButtonPrimitive, {
        htmlAttributes: {
          "data-test-id": "google-btn"
        },
        className: "x3nfvp2 x1n2onr6 x1c5tqo3 x8ge37t x19y5rnk xxk0z11",
        "aria-label": getI18nString("footer_banner.continue_with_google"),
        ...e,
        children: jsx(SvgComponent, {
          className: "x78zum5 x6s0dn4 x46zyou",
          svg: A,
          useOriginalSrcFills_DEPRECATED: !0,
          svgHeight: "18px",
          svgWidth: "18px"
        })
      })
    })
  });
}
export const H = $$E0;
export const M = $$y1;