import { jsx } from "react/jsx-runtime";
import { s as _$$s } from "../cssbuilder/589278";
import { Y } from "../905/830372";
import { x, z } from "../905/407439";
import { YY, nP } from "../figma_app/722791";
import { SP, p7, uy } from "../905/252555";
export function $$d0({
  badges: e
}) {
  return jsx(Y, {
    width: "hug-contents",
    children: e.map((e, t) => jsx(c, {
      badge: e
    }, t))
  });
}
function c({
  badge: e
}) {
  switch (e.type) {
    case "type":
      return jsx(I, {
        type: e.value,
        tracked: e.tracked
      });
    case "phase":
      return jsx(C, {
        phase: e.value
      });
    case "change":
      return jsx($$x1, {
        type: e.value
      });
    case "editType":
      return jsx(P, {
        type: e.value
      });
    default:
      return jsx(D, {
        ...e
      });
  }
}
let u = _$$s.px4.minW10.inlineBlock.bRadius4.h16.flex.alignCenter.justifyCenter.fontSemiBold;
let p = u.colorBgSecondary.colorText.$;
let m = u.colorBgBrandSecondary.colorTextOnbrand.$;
let h = u.colorBgBrand.colorTextOnbrand.$;
let g = u.colorBgSuccess.colorTextOnsuccess.$;
let f = u.colorBgWarning.colorTextOnwarning.$;
let _ = u.colorBgDanger.colorTextOndanger.$;
let A = u.minW28.w28.colorBg.b1.h14;
let y = {
  [SP.Editor]: A.colorBorderDesign.colorTextDesignSecondary.$,
  [SP.DesignSystems]: A.colorBorderComponent.colorTextComponent.$,
  [SP.FigJam]: A.colorBorderFigjam.colorBorderFigjam.$,
  [SP.Page]: A.colorBorder.colorText.$,
  [SP.Other]: A.colorBorderSuccess.colorTextSuccessSecondary.$
};
let b = {
  fontSize: 9,
  lineHeight: "16px",
  fontStyle: "normal"
};
let v = {
  fontSize: 9,
  lineHeight: "14px",
  fontStyle: "normal"
};
function I({
  type: e,
  tracked: t = !0
}) {
  return jsx("div", {
    title: `${e}${t ? " (tracked)" : " (untracked)"}`,
    className: y[p7(e)],
    style: {
      ...v,
      ...(t ? {} : {
        borderStyle: "dashed"
      })
    },
    children: uy[e]
  });
}
let E = {
  CREATED: g,
  MODIFIED: m,
  CHILD_MODIFIED: h,
  REMOVED: _
};
export function $$x1({
  type: e
}) {
  return jsx("div", {
    title: e,
    className: E[e],
    style: b,
    children: x[e]
  });
}
let S = u.minW24.w24.colorBg.b1.h14;
let w = {
  CREATED: S.colorBorderSuccess.colorTextSuccessSecondary.$,
  MODIFIED: S.colorBorderBrand.colorTextBrandSecondary.$,
  REMOVED: S.colorBorderDanger.colorTextDangerSecondary.$
};
function C({
  phase: e
}) {
  return jsx("div", {
    title: e,
    className: w[e],
    style: v,
    children: z[e]
  });
}
let T = u.minW28.w28.colorBg.b1.h14;
let k = T.colorBorderComponent.colorTextComponent.$;
let R = T.colorBorderComponent.colorTextComponentTertiary.$;
let N = T.colorBorderWarning.colorTextWarning.$;
function P({
  type: e
}) {
  return jsx("div", {
    title: `Edit scope type: ${e}`,
    className: "MIXED" === e ? R : YY.has(e) ? k : N,
    style: v,
    children: nP[e]
  });
}
let O = {
  info: p,
  warning: f,
  error: _
};
function D({
  type: e,
  value: t,
  title: i
}) {
  return jsx("div", {
    title: i,
    className: O[e],
    style: b,
    children: t
  });
}
export const IV = $$d0;
export const gp = $$x1;