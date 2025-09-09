import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useCallback } from "react";
import { bL, Q6, zi } from "../905/55068";
import s from "classnames";
import { isInvalidValue } from "../905/216495";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { Uq, Fr, Z, hb } from "../905/633462";
import { Dq } from "../905/331848";
import { xJ, zr, cI, y1, FF, WY, r9, Ij, rd, _V } from "../905/77569";
var o = s;
export function $$_4({
  ariaLabel: e,
  bigStep: t,
  disabled: r,
  hints: i,
  min: s,
  omitRange: l,
  onChange: d,
  onClick: c,
  rangeAnchor: u = 0,
  sliderMax: _,
  sliderStyle: h,
  sliderValue: m,
  step: g
}) {
  return jsx("div", {
    className: xJ,
    children: jsxs(bL, {
      "aria-label": e,
      bigStep: t,
      className: o()(zr, cI),
      disabled: r,
      hints: i,
      htmlAttributes: {
        tabIndex: -1
      },
      max: _,
      min: s,
      onChange: d,
      onClick: c,
      step: g,
      style: h,
      value: m,
      children: [!l && jsx(Q6, {
        className: y1,
        start: u,
        end: m
      }), jsx(zi, {
        className: FF
      })]
    })
  });
}
function h(e) {
  let {
    omitRange,
    value,
    Input,
    dataTooltip,
    dataTooltipShowAbove,
    style,
    min,
    inputMin,
    inputMax,
    step,
    bigStep,
    disabled,
    ariaLabel,
    fullWidth,
    rowReversed,
    sliderMax,
    sliderValueTransform = Dq,
    isTokenizable,
    forwardedRef,
    mixedMathHandler,
    recordingKey,
    onValueChange,
    rangeAnchor = 0
  } = e;
  let L = min < 0 && sliderMax > 0 ? [0] : void 0;
  let P = useRef(null);
  let D = forwardedRef ?? P;
  let k = useCallback((e, {
    commit: t
  }) => {
    let n = sliderValueTransform.toTransformed(e);
    if (isInvalidValue(value)) {
      if (!mixedMathHandler) return;
      mixedMathHandler.onChange(mixedMathHandler.getValue(), () => min, yesNoTrackingEnum.NO);
    }
    onValueChange(n, t ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO);
  }, [onValueChange, sliderValueTransform, mixedMathHandler, value, min]);
  let M = sliderValueTransform.fromTransformed(isInvalidValue(value) ? 0 : value);
  let F = useCallback(() => {
    D?.current?.focus();
  }, [D]);
  return jsxs("div", {
    className: o()(WY, {
      [r9]: disabled,
      [Ij]: fullWidth,
      [rd]: rowReversed
    }),
    children: [jsx(Input, {
      dataTooltip,
      dataTooltipShowAbove,
      onValueChange,
      value,
      bigStep,
      step,
      disabled,
      min: inputMin ?? min,
      max: inputMax,
      isTokenizable,
      forwardedRef: D,
      mixedMathHandler,
      recordingKey,
      className: _V,
      children: e.icon
    }), jsx($$_4, {
      ariaLabel,
      bigStep,
      disabled,
      hints: L,
      min,
      omitRange,
      onChange: k,
      onClick: F,
      rangeAnchor,
      sliderMax,
      sliderStyle: style,
      sliderValue: M,
      step
    })]
  });
}
export function $$m1(e) {
  return jsx(h, {
    ...e,
    Input: Uq
  });
}
export function $$g3(e) {
  let {
    step,
    bigStep
  } = e;
  return jsx(h, {
    ...e,
    Input: Fr,
    step: step ?? 1,
    bigStep: bigStep ?? 5
  });
}
export function $$f0(e) {
  return jsx(h, {
    ...e,
    Input: Z,
    min: e.min ?? 0,
    inputMax: void 0 === e.inputMax ? 1 : e.inputMax,
    sliderMax: void 0 === e.sliderMax ? 1 : e.sliderMax,
    bigStep: .1,
    step: .01
  });
}
export function $$E2(e) {
  return jsx(h, {
    ...e,
    Input: hb
  });
}
export const AS = $$f0;
export const EX = $$m1;
export const Z3 = $$E2;
export const n4 = $$g3;
export const xI = $$_4;