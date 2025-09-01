import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import a from "classnames";
import { cS } from "../figma_app/334459";
import { Ad } from "../figma_app/811257";
import { Z3, EX, AS } from "../figma_app/709323";
import { Bk, eN } from "../905/331848";
import { $9 } from "../905/77569";
var s = a;
let p = "slider_combo_input_row--sliderInputRow--gtxvX";
export var $$m3 = (e => (e[e.LINEAR = 0] = "LINEAR", e[e.QUADRATIC = 1] = "QUADRATIC", e[e.EXPONENTIAL = 2] = "EXPONENTIAL", e))($$m3 || {});
export function $$h5(e) {
  let t = Bk({
    min: e.min,
    max: e.sliderMax,
    decimalPlaces: 2
  });
  let i = eN({
    min: e.min,
    max: e.sliderMax,
    decimalPlaces: 2
  });
  switch (e.transformType) {
    case 2:
      return t;
    case 1:
      return i;
    default:
      return;
  }
}
export function $$g2(e) {
  let t = $$h5({
    transformType: e.transformType || 0,
    min: e.min,
    sliderMax: e.sliderMax
  });
  let i = {
    ...e,
    sliderValueTransform: t,
    fullWidth: e.fullWidth ?? !0
  };
  let r = 2 === e.transformType ? jsx(Z3, {
    ...i
  }) : jsx(EX, {
    ...i
  });
  return jsx(Ad, {
    alwaysShowLabel: !!e.rowLabel,
    appendedClassName: s()(p, "narrow" === e.scrubbableVariant && $9),
    label: e.rowLabel,
    input: r
  });
}
export function $$f4(e) {
  let t = $$h5({
    transformType: e.transformType || 0,
    min: e.min,
    sliderMax: e.sliderMax
  });
  let i = {
    ...e,
    sliderValueTransform: t,
    fullWidth: e.fullWidth ?? !0,
    rowReversed: e.rowReversed ?? !1
  };
  let r = 2 === e.transformType ? jsx(Z3, {
    ...i
  }) : jsx(EX, {
    ...i
  });
  return jsx(cS, {
    label: e.rowLabel,
    appendedClassName: s()(y.sliderInputRowInline, "narrow" === e.scrubbableVariant && $9),
    input: r
  });
}
export function $$_1(e) {
  let t = {
    ...e,
    min: e.min ?? 0,
    inputMax: e.inputMax ?? 1,
    sliderMax: e.sliderMax ?? 1,
    fullWidth: e.fullWidth ?? !0
  };
  t.sliderValueTransform = $$h5({
    transformType: e.transformType || 0,
    min: t.min,
    sliderMax: t.sliderMax
  });
  return jsx(Ad, {
    alwaysShowLabel: !!e.rowLabel,
    appendedClassName: s()(p, "narrow" === e.scrubbableVariant && $9),
    label: e.rowLabel,
    input: jsx(AS, {
      ...t
    })
  });
}
let $$A0 = forwardRef((e, t) => jsx(Ad, {
  ref: t,
  alwaysShowLabel: !!e.rowLabel,
  label: e.rowLabel,
  input: e.input,
  appendedClassName: p
}));
let y = {
  sliderInputRowInline: {
    paddingRight: "x1jwbysl",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  }
};
export const I6 = $$A0;
export const iQ = $$_1;
export const yw = $$g2;
export const ir = $$m3;
export const li = $$f4;
export const Gy = $$h5;