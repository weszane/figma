import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useAtomWithSubscription } from "../figma_app/27355";
import a from "classnames";
import { Qp, JR, Wi } from "../figma_app/162641";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { bY, Vf } from "../figma_app/60023";
import { Ji } from "../figma_app/553488";
import { r$ } from "../7222/396421";
import { p9, y0 } from "../9410/34183";
import { Vg } from "../9410/148230";
import { C9, _P, cb, XD, I8 } from "../9410/261393";
var s = a;
let m = "loading_state--container--ouiBF";
function g() {
  let e = r$();
  let t = useAtomWithSubscription(bY);
  let i = s()({
    [C9]: e === Ji.OVERLAY_MODAL,
    [_P]: e === Ji.PICKER || e === Ji.OUTLINE_TO_DECK,
    [cb]: t.type === Vf.TEMPLATE_PICKER
  }, cssBuilderInstance.m8.$);
  return jsx(Qp, {
    className: i,
    animationType: JR.LIGHT_SHIMMER
  });
}
function _() {
  let e = r$();
  let t = s()({
    [XD]: e === Ji.PICKER || e === Ji.OUTLINE_TO_DECK,
    [I8]: e === Ji.OVERLAY_MODAL
  });
  return jsx(Qp, {
    className: t,
    animationType: JR.LIGHT_SHIMMER
  });
}
export function $$x3() {
  return jsx(Qp, {
    className: s()("loading_state--title--YIpQO", cssBuilderInstance.m8.$),
    animationType: JR.LIGHT_SHIMMER
  });
}
export function $$y4({
  removePadding: e = !1,
  numSections: t = 3,
  numTemplates: i
}) {
  let a = useAtomWithSubscription(bY).type === Vf.TEMPLATE_PICKER ? 3 : 4;
  return jsx("div", {
    className: s()("loading_state--loadingStateContainer--dcv3D", {
      [cssBuilderInstance.px8.$]: !e
    }),
    children: Array.from({
      length: t
    }).map(() => jsxs(Fragment, {
      children: [jsx($$x3, {}), jsx(p9, {
        children: Array.from({
          length: i ?? a
        }).map((e, t) => jsxs("div", {
          className: cssBuilderInstance.flex.flexColumn.$,
          children: [jsx(g, {}), jsx(Wi, {
            className: cssBuilderInstance.h16.mx8.w100.$,
            animationType: JR.LIGHT_SHIMMER
          })]
        }, t))
      })]
    }))
  });
}
export function $$b2() {
  return jsx("div", {
    className: m,
    children: jsx(p9, {
      children: Array.from({
        length: 14
      }).map((e, t) => jsx(g, {}, t))
    })
  });
}
export function $$C1() {
  return jsx("div", {
    className: m,
    children: jsx(y0, {
      children: Array.from({
        length: 16
      }).map((e, t) => jsx(_, {}, t))
    })
  });
}
export function $$v0() {
  return jsxs("div", {
    className: s()(Vg, cssBuilderInstance.px16.pb16.pt8.gap16.overflowHidden.hFull.$),
    children: [jsx(E, {}), jsx(E, {}), jsx(E, {}), jsx(E, {}), jsx(E, {}), jsx(E, {}), jsx(E, {}), jsx(E, {}), jsx(E, {}), jsx(E, {}), jsx(E, {})]
  });
}
function E() {
  return jsxs("div", {
    className: cssBuilderInstance.flex.flexColumn.gap4.$,
    children: [jsx(Qp, {
      className: "loading_state--file--g4dxg",
      animationType: JR.LIGHT_SHIMMER
    }), jsx(Wi, {
      className: "loading_state--fileTitle--ATrhd",
      animationType: JR.LIGHT_SHIMMER
    }), jsx(Wi, {
      className: "loading_state--fileSubtitle--9Lkb7",
      animationType: JR.LIGHT_SHIMMER
    })]
  });
}
export const yx = $$v0;
export const oJ = $$C1;
export const gu = $$b2;
export const v8 = $$x3;
export const kM = $$y4;