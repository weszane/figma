import { jsxs, jsx } from "react/jsx-runtime";
import { formatNumber } from "../figma_app/930338";
import { B } from "../905/714743";
import { lo, TQ, Yd, dq, gu, az, k9, s0, _y, Qe } from "../905/5637";
import { A } from "../6828/379561";
import { A as _$$A } from "../5724/322086";
export function $$d3(e) {
  return jsxs("div", {
    className: lo,
    children: [jsx("div", {
      className: TQ,
      children: jsx(B, {
        className: Yd,
        svg: e.icon
      })
    }), formatNumber(e.metric)]
  });
}
export function $$c2(e) {
  let t = "onClick" in e ? e.onClick : void 0;
  let i = e.classNameOverride ? e.classNameOverride : dq;
  return jsxs("div", {
    className: i,
    onClick: t,
    children: [jsxs("div", {
      className: TQ,
      children: [jsx(B, {
        className: (() => {
          let t = [Yd];
          e.hoverIcon && t.push(gu);
          e.activeIcon && t.push(az);
          return t.join(" ");
        })(),
        svg: e.icon
      }), e.hoverIcon && jsx(B, {
        className: k9,
        svg: e.hoverIcon
      }), e.activeIcon && jsx(B, {
        className: s0,
        svg: e.activeIcon
      })]
    }), formatNumber(e.metric)]
  });
}
export function $$u1(e) {
  return !e.onClick || e.isDisabled ? jsx($$d3, {
    icon: _$$A,
    metric: e.metric
  }) : jsx($$c2, {
    icon: _$$A,
    hoverIcon: _$$A,
    activeIcon: _$$A,
    metric: e.metric,
    classNameOverride: e.isActive ? e.isWhiteboard ? _y : Qe : void 0,
    onClick: e.onClick
  });
}
export function $$p0(e) {
  return jsx($$d3, {
    icon: A,
    metric: e.metric
  });
}
export const Ij = $$p0;
export const OV = $$u1;
export const vE = $$c2;
export const x8 = $$d3;