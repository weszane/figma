import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import o from "classnames";
import { _ as _$$_ } from "../figma_app/658134";
import { Gr } from "../figma_app/478006";
import { gN } from "../figma_app/639711";
import { Yk, uo } from "../figma_app/644079";
import { dP } from "../figma_app/740163";
import { d as _$$d } from "../figma_app/550089";
import { Q } from "../905/249555";
import { E3, Oy } from "../figma_app/143628";
var l = o;
export function $$f1(e) {
  return jsx(_$$d, {
    children: jsx(y, {
      shouldRequestMobileNativeBottomOffset: e.shouldRequestMobileNativeBottomOffset,
      offscreen: e.offscreen,
      srOnly: e.srOnly,
      children: e.children
    })
  });
}
export function $$E0({
  offscreen: e,
  shouldRequestMobileNativeBottomOffset: t,
  shouldCenterWithRespectToLeftPanelAndRail: r
} = {}) {
  let n;
  let a = Yk();
  let o = useAtomWithSubscription(Gr);
  let l = uo();
  let u = dP() + _$$_;
  let [h, m] = useState(null);
  l && t && l().then(e => {
    e !== h && m(e);
  }).catch(() => { });
  let g = "";
  e ? g = "translateY(100vh)" : null === h && (g += `translateY(-${a}px)`);
  null !== h && (n = h);
  o.isShowing && !h && (n = o.isFigjamDLTBanner ? "64px" : "56px");
  r && (g += ` translateX(${u / 2}px)`);
  return {
    transform: g,
    bottom: n
  };
}
function y({
  children: e,
  offscreen: t,
  shouldRequestMobileNativeBottomOffset: r,
  srOnly: s
}) {
  let o = uo();
  let d = useSelector(e => !!e.modalShown);
  let [c, _] = useState(null);
  let h = gN();
  o && r && o().then(e => {
    e !== c && _(e);
  }).catch(() => { });
  let f = $$E0({
    offscreen: t,
    shouldRequestMobileNativeBottomOffset: r,
    shouldCenterWithRespectToLeftPanelAndRail: h
  });
  return jsx("div", {
    "aria-hidden": d,
    className: l()({
      [E3]: !0,
      [Oy]: !0,
      [Q]: s
    }),
    style: f,
    children: e
  });
}
export const IQ = $$E0;
export const Pm = $$f1;
