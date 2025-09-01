import { jsx, jsxs } from "react/jsx-runtime";
import { A as _$$A } from "../905/251970";
import { md } from "../figma_app/27355";
import s from "classnames";
import { h8 } from "../figma_app/478006";
import { S } from "../figma_app/109947";
import { Me } from "../figma_app/617427";
import { t as _$$t } from "../905/303541";
import { fu } from "../figma_app/831799";
import { Um } from "../905/848862";
import { I } from "../figma_app/827540";
import { b, zr, w, LQ, jD, kL, hu, rb, MP } from "../figma_app/60171";
var o = s;
export function $$g0({
  isFigjamDLTBanner: e = !1,
  bannerType: t,
  ...r
}) {
  let s = Um();
  let g = I();
  h8({
    isFigjamDLTBanner: e,
    bannerType: t
  });
  let f = md(S);
  let E = !!f?.current;
  let {
    leftContent,
    content,
    rightContent,
    trackingContext = "UI3 Toolbelt Banner",
    onClose,
    shouldHide
  } = r;
  let A = jsx(Me, {
    "aria-label": _$$t("fullscreen.toolbar.secondary_toolbar.close"),
    onClick: r.onClose,
    children: jsx(_$$A, {
      className: b
    })
  });
  return jsx(fu, {
    name: trackingContext,
    children: jsx("div", {
      className: o()(zr, {
        [w]: E,
        [LQ]: g || !!s,
        [jD]: shouldHide
      }),
      children: jsxs("div", {
        className: kL,
        children: [jsx("div", {
          className: hu,
          children: leftContent
        }), jsx("div", {
          className: o()(rb, {
            [MP]: "Try Dev Mode Toolbelt Banner" === trackingContext
          }),
          children: content
        }), rightContent, onClose && A]
      })
    })
  });
}
export const G = $$g0;