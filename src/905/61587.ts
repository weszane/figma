import { jsxs, jsx } from "react/jsx-runtime";
import { createElement } from "react";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { ProductAccessTypeEnum } from "../905/513035";
import { hK } from "../figma_app/211706";
import { yg, Wb, Rc } from "../905/948828";
export function $$c0() {
  let e = yg();
  return jsxs("div", {
    children: [jsx("div", {
      className: cssBuilderInstance.textHeadingLarge.$,
      children: renderI18nText("plan_comparison.campfire.meet_the_seats")
    }), jsx(hK, {
      height: 16
    }), jsx("div", {
      className: cssBuilderInstance.grid.gridTemplateColumns3.gap1.bSolid.b1.colorBorder.bRadius8.overflowHidden.colorBgTertiary.$,
      children: e.map((e, t) => createElement(u, {
        ...e,
        key: t
      }))
    })]
  });
}
function u({
  seatType: e,
  icon: t,
  name: i,
  description: r,
  supportedProducts: s
}) {
  return jsxs("div", {
    className: cssBuilderInstance.p16.pb24.colorBg.$,
    children: [jsxs("div", {
      className: cssBuilderInstance.px8.$,
      children: [t, jsx(hK, {
        height: 10
      }), jsxs("div", {
        className: cssBuilderInstance.font15.lh24.$,
        children: [i, e === ProductAccessTypeEnum.EXPERT && jsx(Wb, {
          isStaticColor: !0
        })]
      }), jsx(hK, {
        height: 6
      }), jsx("div", {
        className: cssBuilderInstance.font11.lh16.h32.colorTextSecondary.$,
        children: r
      })]
    }), jsx(hK, {
      height: 16
    }), Rc(s)]
  });
}
export const L = $$c0;