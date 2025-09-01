import { jsxs, jsx } from "react/jsx-runtime";
import { createElement } from "react";
import { s as _$$s } from "../cssbuilder/589278";
import { tx } from "../905/303541";
import { ud } from "../905/513035";
import { hK } from "../figma_app/211706";
import { yg, Wb, Rc } from "../905/948828";
export function $$c0() {
  let e = yg();
  return jsxs("div", {
    children: [jsx("div", {
      className: _$$s.textHeadingLarge.$,
      children: tx("plan_comparison.campfire.meet_the_seats")
    }), jsx(hK, {
      height: 16
    }), jsx("div", {
      className: _$$s.grid.gridTemplateColumns3.gap1.bSolid.b1.colorBorder.bRadius8.overflowHidden.colorBgTertiary.$,
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
    className: _$$s.p16.pb24.colorBg.$,
    children: [jsxs("div", {
      className: _$$s.px8.$,
      children: [t, jsx(hK, {
        height: 10
      }), jsxs("div", {
        className: _$$s.font15.lh24.$,
        children: [i, e === ud.EXPERT && jsx(Wb, {
          isStaticColor: !0
        })]
      }), jsx(hK, {
        height: 6
      }), jsx("div", {
        className: _$$s.font11.lh16.h32.colorTextSecondary.$,
        children: r
      })]
    }), jsx(hK, {
      height: 16
    }), Rc(s)]
  });
}
export const L = $$c0;