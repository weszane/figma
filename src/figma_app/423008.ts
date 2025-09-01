import { jsx, jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { E as _$$E } from "../905/632989";
import { J } from "../905/614223";
import o from "classnames";
import { isGovCluster } from "../figma_app/169182";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t } from "../905/303541";
import { Z } from "../905/224161";
import { _6 } from "../figma_app/386952";
import { ju } from "../905/187165";
import { x6, zB, as, Hg, _d, Kk, IO } from "../905/410210";
import { A } from "../5724/721563";
var l = o;
export function $$E0({
  children: e,
  large: t,
  brandTextColor: r,
  ...o
}) {
  let E = _6();
  let y = useRef(null);
  Z("light", y);
  let b = ju(E);
  return isGovCluster() ? null : jsx(J, {
    mode: "light",
    brand: b,
    children: jsx("div", {
      ref: y,
      children: jsx(_$$E, {
        htmlAttributes: {
          "data-test-id": "google-btn"
        },
        className: l()(x6, zB, t ? as : Hg, r && _$$s.colorTextBrand.$),
        "aria-label": _$$t("footer_banner.continue_with_google"),
        ...o,
        children: jsxs("span", {
          className: _d,
          children: [jsx(B, {
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
  let t = _6();
  let r = useRef(null);
  Z("light", r);
  let o = ju(t);
  return jsx(J, {
    mode: "light",
    brand: o,
    children: jsx("div", {
      ref: r,
      children: jsx(_$$E, {
        htmlAttributes: {
          "data-test-id": "google-btn"
        },
        className: "x3nfvp2 x1n2onr6 x1c5tqo3 x8ge37t x19y5rnk xxk0z11",
        "aria-label": _$$t("footer_banner.continue_with_google"),
        ...e,
        children: jsx(B, {
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