import { jsx } from "react/jsx-runtime";
import { useMemo, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { VariableResolvedDataType, LayoutSizingMode } from "../figma_app/763686";
import o from "classnames";
import { M as _$$M } from "../figma_app/648761";
import { useHandleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import { sT } from "../figma_app/740163";
import { kl } from "../905/275640";
import { SG } from "../figma_app/852050";
import { Um } from "../905/848862";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { fl } from "../figma_app/178475";
import { JV } from "../figma_app/260445";
import { p as _$$p } from "../905/427409";
import { u3, lC, Ek } from "../figma_app/152690";
import { MH, eF } from "../figma_app/394327";
import { SvgComponent } from "../905/714743";
import { sK, c$ } from "../905/794875";
import { y8 } from "../figma_app/409807";
import { vP, wO } from "../figma_app/100987";
import { $$default } from "../svg/764361";
var l = o;
export function $$N1(e, t) {
  let [r, n, a] = JV([e], t);
  let {
    clearVariableConsumption,
    consumedVariable
  } = u3([e]);
  let l = lC(e);
  let d = MH(consumedVariable);
  let c = Ek([e]);
  let u = !!l && eF(l);
  return {
    memoizedProviderValue: useMemo(() => ({
      showBindingUI: n,
      isShowingBindingUI: r,
      onVariableSelected: a,
      boundVariableId: d,
      isBoundVariableDeleted: u,
      mismatchedValue: c
    }), [d, u, r, c, a, n]),
    clearVariableConsumption,
    showBindingUI: n,
    boundVariable: l,
    consumedVariable
  };
}
export function $$C0({
  id: e,
  value: t,
  scrubStartValue: r,
  tooltipText: o,
  showTooltipOnTargetOnly: E,
  variableField: b,
  outerClassName: T,
  onChange: C,
  inputRef: w,
  inputClassName: O,
  iconId: R,
  icon: L,
  disabled: P,
  scrubbingDisabled: D,
  noLeftBorder: k,
  squareRightBorder: M,
  onFocus: F,
  onBlur: j,
  onMouseEnter: U,
  onMouseEnterNonPropagating: B,
  onMouseLeave: G,
  onScrubBegin: V,
  onScrubEnd: H,
  onScrubClick: z,
  onKeyDown: W,
  onKeyUp: K,
  onPaste: Y,
  onNudge: $,
  recordingKey: X,
  inputTestId: q,
  allowEmpty: J,
  placeholder: Z,
  options: Q,
  mixedMathHandler: ee,
  onMixedMathNudge: et,
  formatter: er,
  dropdownWidth: en,
  omitValueFromDropdown: ei,
  shouldFocus: ea,
  onboardingKey: es,
  openBelowTarget: eo,
  dropdownAlignment: el,
  shiftVariableOptionToAlign: ed
}) {
  let ec = Um();
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = sT();
  let e_ = useDispatch();
  let eh = useRef(!1);
  let em = _$$M(w);
  let eg = SG([b]).data ?? [];
  let {
    memoizedProviderValue,
    showBindingUI,
    consumedVariable
  } = $$N1(b, VariableResolvedDataType.FLOAT);
  let eb = useCallback((e, t = yesNoTrackingEnum.YES) => {
    e === y8 ? showBindingUI(em.current) : C(e, t);
  }, [C, showBindingUI, em]);
  let eT = useHandleMouseEvent(generateRecordingKey(X, "scrub"), "click", () => {
    z?.();
  });
  let eI = function (e, t, r) {
    let i = [...e];
    if (t) {
      let e = jsx(SvgComponent, {
        className: vP,
        svg: $$default
      });
      i.push(jsx(sK, {}, "divider"));
      i.push(jsx(c$, {
        iconToReplaceCheck: e,
        value: y8,
        additionalStylesClassName: r ? wO : void 0
      }, "apply_variable"));
    }
    return i;
  }(Q, eg.length > 0, ed);
  let eS = kl("WIDTH" === b ? "stackHorizontalSize" : "stackVerticalSize") === LayoutSizingMode.FIXED || !["WIDTH", "HEIGHT"].includes(b);
  return jsx(_$$p.Provider, {
    value: eS ? memoizedProviderValue : void 0,
    children: jsx(fl, {
      allowEmpty: J,
      autoFocus: ea,
      bigNudgeAmount,
      chevronClassName: "stack_apply_variable_combobox--chevron--T0dhq combo_box--smallChevronSizing--uySoZ",
      className: l()("stack_apply_variable_combobox--scrubbableDropdown--IPQh4", T),
      "data-tooltip": o,
      "data-tooltip-max-width": 200,
      "data-tooltip-proxy-element-id": consumedVariable ? R : void 0,
      "data-tooltip-show-on-target-only": E || void 0,
      "data-tooltip-type": KindEnum.TEXT,
      dataTestId: q,
      disableSelectFocus: !0,
      disabled: P,
      dispatch: e_,
      dropdownAlignment: el,
      dropdownShown: ec,
      dropdownWidth: en ?? 130,
      formatter: er,
      forwardedRef: em,
      icon: L,
      id: e,
      inputClassName: l()(O),
      isTokenizable: !0,
      mixedMathHandler: ee,
      noBorderOnFocus: !0,
      noLeftBorder: k,
      noPlaceholderLine: !0,
      omitValueFromDropdown: ei,
      onBlur: j,
      onFocus: F,
      onKeyDown: W,
      onKeyUp: K,
      onMixedMathNudge: et,
      onMouseEnter: U,
      onMouseEnterNonPropagating: B,
      onMouseLeave: G,
      onNudge: $,
      onPaste: Y,
      onScrubBegin: e => {
        eh.current = !0;
        V?.(e);
      },
      onScrubClick: z ? eT : void 0,
      onScrubEnd: e => {
        eh.current = !1;
        H?.(e);
      },
      onValueChange: eb,
      onboardingKey: es,
      openBelowTarget: eo,
      placeholder: Z,
      recordingKey: X,
      scrubMultiplier: smallNudgeAmount,
      scrubStartValue: r,
      scrubbingDisabled: D,
      smallNudgeAmount,
      squareRightBorder: M,
      unNamespacedInputRecordingKey: !0,
      value: t,
      wheelMultiplier: smallNudgeAmount,
      children: eI
    })
  });
}
export const S = $$C0;
export const O = $$N1;