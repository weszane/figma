import { jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { Et } from "../figma_app/397267";
import { W as _$$W } from "../figma_app/462192";
import { rXF, glU, hJs } from "../figma_app/763686";
import d from "classnames";
import { am } from "../figma_app/901889";
import { B as _$$B } from "../905/714743";
import { t as _$$t } from "../905/303541";
import { sT } from "../figma_app/740163";
import { gl, oV, Q8, SX, hS } from "../905/216495";
import { lJ, kl } from "../905/275640";
import { zk } from "../figma_app/198712";
import { Ib } from "../905/129884";
import { Se } from "../figma_app/178475";
import { sA } from "../figma_app/841644";
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
  } = sT();
  let [L, R] = lJ("stackCounterSpacing");
  let O = kl("stackCounterSpacingSynced");
  let [D, F] = lJ("stackCounterAlignContent");
  let B = am();
  let K = useRef(!1);
  let G = gl(D) ? oV : "SPACE_BETWEEN" === D ? Q8 : L;
  let H = useRef(null);
  useEffect(() => {
    e && (H.current?.focus(), H.current?.select());
  }, [e]);
  let {
    boundVariable,
    consumedVariable
  } = _$$O(I, rXF.FLOAT);
  useEffect(() => {
    boundVariable && "SPACE_BETWEEN" === D && F("AUTO", zk.NO);
  }, [boundVariable, D, F]);
  let {
    clearVariableConsumption
  } = _$$O(I, rXF.FLOAT);
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
      value: SX(e) ? "Auto" : e
    }), glU.temporarilyHideOverlay(hJs.SELECTION));
    "number" == typeof e || null === e ? (F("AUTO", zk.NO), R(e, s)) : (clearVariableConsumption(), F("SPACE_BETWEEN", s));
  };
  let Y = _$$t("fullscreen.properties_panel.stack_panel.gap_rows_vertical");
  let X = "spacing-rows-vertical-icon";
  let q = [jsx(c$, {
    value: Et(L) ? L : bigNudgeAmount
  }, "value"), jsx(c$, {
    value: Q8
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
          placeholder: J && hS(G) ? W.format(G) : void 0,
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
  return jsx(sA, {
    recordingKey: d.recordingKey,
    inputClassName: d.outerClassName,
    fields: E,
    currentFieldValue: hS(L) ? L : void 0,
    resolvedType: rXF.FLOAT,
    disableEntryPoint: s,
    children: jsx(Se, {
      allowEmpty: !0,
      bigNudgeAmount,
      "data-tooltip": Y,
      "data-tooltip-proxy-element-id": consumedVariable ? X : void 0,
      "data-tooltip-type": Ib.TEXT,
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
      placeholder: J && hS(G) ? W.format(G) : void 0,
      recordingKey: d.recordingKey,
      scrubMultiplier: smallNudgeAmount,
      scrubStartValue: J ? G : void 0,
      smallNudgeAmount,
      squareRightBorder: d.squareRightBorder,
      value: J ? void 0 : G,
      wheelMultiplier: smallNudgeAmount,
      children: jsx(_$$B, {
        className: c()(QK, d.svgClassName),
        svg: A,
        "data-tooltip-type": consumedVariable ? Ib.TEXT : void 0,
        "data-tooltip": consumedVariable ? Y : void 0,
        id: X
      })
    })
  });
}
export const q = $$M0;