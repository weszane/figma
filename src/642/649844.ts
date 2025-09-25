import { jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Et } from "../figma_app/397267";
import { W as _$$W } from "../figma_app/462192";
import { VariableResolvedDataType, Fullscreen, SnapMode } from "../figma_app/763686";
import d from "classnames";
import { trackFileEventWithUser } from "../figma_app/901889";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { getNudgeAmounts } from "../figma_app/740163";
import { isInvalidValue, MIXED_MARKER, AUTO_MARKER, isAutoMarker, isValidValue } from "../905/216495";
import { useSelectionProperty, useSelectionPropertyValue } from "../905/275640";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { ColorInput } from "../figma_app/178475";
import { VariableBindingInput } from "../figma_app/841644";
import { ow } from "../905/188421";
import { c$, tV } from "../905/794875";
import { t as _$$t2 } from "../905/1946";
import { O as _$$O, S as _$$S } from "../figma_app/375482";
import { lW, lL, bd } from "../figma_app/409807";
import { pW, gm } from "../figma_app/335781";
import { Sz, hF, QK } from "../figma_app/960598";
import { A } from "../svg/962815";
var c = d;
let I = "STACK_COUNTER_SPACING";
let E = [I];
export function $$M0({
  focusOnMount: e,
  source: t,
  onCanvasUI: s,
  ...d
}) {
  let M = useDispatch();
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = getNudgeAmounts();
  let [L, R] = useSelectionProperty("stackCounterSpacing");
  let O = useSelectionPropertyValue("stackCounterSpacingSynced");
  let [D, F] = useSelectionProperty("stackCounterAlignContent");
  let B = trackFileEventWithUser();
  let K = useRef(!1);
  let G = isInvalidValue(D) ? MIXED_MARKER : "SPACE_BETWEEN" === D ? AUTO_MARKER : L;
  let H = useRef(null);
  useEffect(() => {
    e && (H.current?.focus(), H.current?.select());
  }, [e]);
  let {
    boundVariable,
    consumedVariable
  } = _$$O(I, VariableResolvedDataType.FLOAT);
  useEffect(() => {
    boundVariable && "SPACE_BETWEEN" === D && F("AUTO", yesNoTrackingEnum.NO);
  }, [boundVariable, D, F]);
  let {
    clearVariableConsumption
  } = _$$O(I, VariableResolvedDataType.FLOAT);
  let W = lW({
    smallNudgeAmount,
    bigNudgeAmount,
    min: 0,
    allowEmpty: !0
  });
  let $ = (e, s) => {
    s && (B("autolayout_counter_spacing_changed", {
      source: t,
      input: K.current ? "scrub" : "textfield",
      value: isAutoMarker(e) ? "Auto" : e
    }), Fullscreen.temporarilyHideOverlay(SnapMode.SELECTION));
    "number" == typeof e || null === e ? (F("AUTO", yesNoTrackingEnum.NO), R(e, s)) : (clearVariableConsumption(), F("SPACE_BETWEEN", s));
  };
  let Y = getI18nString("fullscreen.properties_panel.stack_panel.gap_rows_vertical");
  let X = "spacing-rows-vertical-icon";
  let q = [jsx(c$, {
    value: Et(L) ? L : bigNudgeAmount
  }, "value"), jsx(c$, {
    value: AUTO_MARKER
  }, "auto")];
  let J = O && "SPACE_BETWEEN" !== D;
  if (!s) {
    let e = jsx(_$$W, {});
    return jsx(ow, {
      value: {
        select: pW,
        inputComponent: gm
      },
      children: jsx(tV, {
        value: {
          chevron: _$$t2
        },
        children: jsx(_$$S, {
          allowEmpty: !0,
          dropdownAlignment: "right",
          dropdownWidth: 140,
          formatter: W,
          icon: e,
          iconId: X,
          id: "stackCounterSpacing",
          inputClassName: d.inputClassName,
          inputRef: H,
          inputTestId: d.inputTestId,
          mixedMathHandler: lL,
          noBorderOnFocus: d.noBorderOnFocus,
          noLeftBorder: d.noLeftBorder,
          onBlur: d.onBlur,
          onChange: $,
          onFocus: d.onFocus,
          onKeyDown: d.onKeyDown,
          onMouseEnter: d.onMouseEnter,
          onMouseLeave: d.onMouseLeave,
          onNudge: d.onNudge,
          onPaste: d.onPaste,
          onScrubBegin: d.onScrubBegin,
          onScrubEnd: d.onScrubEnd,
          options: q,
          outerClassName: c()(d.outerClassName, Sz),
          placeholder: J && isValidValue(G) ? W.format(G) : void 0,
          recordingKey: d.recordingKey,
          scrubStartValue: J ? G : void 0,
          shiftVariableOptionToAlign: !0,
          source: t,
          squareRightBorder: d.squareRightBorder,
          tooltipText: Y,
          value: J ? void 0 : G,
          variableField: I
        })
      })
    });
  }
  return jsx(VariableBindingInput, {
    recordingKey: d.recordingKey,
    inputClassName: d.outerClassName,
    fields: E,
    currentFieldValue: isValidValue(L) ? L : void 0,
    resolvedType: VariableResolvedDataType.FLOAT,
    disableEntryPoint: s,
    children: jsx(ColorInput, {
      allowEmpty: !0,
      bigNudgeAmount,
      "data-tooltip": Y,
      "data-tooltip-proxy-element-id": consumedVariable ? X : void 0,
      "data-tooltip-type": KindEnum.TEXT,
      dataTestId: d.inputTestId,
      dispatch: M,
      forwardedRef: H,
      inputClassName: c()(hF, d.inputClassName),
      isTokenizable: !0,
      min: 0,
      mixedMathHandler: bd,
      noBorderOnFocus: d.noBorderOnFocus,
      noBorderOnHover: !0,
      noLeftBorder: d.noLeftBorder,
      onBlur: d.onBlur,
      onFocus: d.onFocus,
      onKeyDown: d.onKeyDown,
      onMouseEnter: d.onMouseEnter,
      onMouseLeave: d.onMouseLeave,
      onNudge: d.onNudge,
      onPaste: d.onPaste,
      onScrubBegin: e => {
        K.current = !0;
        d.onScrubBegin?.(e);
      },
      onScrubEnd: e => {
        K.current = !1;
        d.onScrubEnd?.(e);
      },
      onValueChange: $,
      placeholder: J && isValidValue(G) ? W.format(G) : void 0,
      recordingKey: d.recordingKey,
      scrubMultiplier: smallNudgeAmount,
      scrubStartValue: J ? G : void 0,
      smallNudgeAmount,
      squareRightBorder: d.squareRightBorder,
      value: J ? void 0 : G,
      wheelMultiplier: smallNudgeAmount,
      children: jsx(SvgComponent, {
        className: c()(QK, d.svgClassName),
        svg: A,
        "data-tooltip-type": consumedVariable ? KindEnum.TEXT : void 0,
        "data-tooltip": consumedVariable ? Y : void 0,
        id: X
      })
    })
  });
}
export const q = $$M0;