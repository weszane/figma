import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useContext, useEffect, useRef, useMemo, useState, useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { allEqual } from "../figma_app/656233";
import { Fullscreen, SnapMode, VariableResolvedDataType } from "../figma_app/763686";
import o from "classnames";
import { sT } from "../figma_app/740163";
import { isValidValue } from "../905/216495";
import { zk } from "../figma_app/198712";
import { Ib } from "../905/129884";
import { ig } from "../figma_app/178475";
import { sA } from "../figma_app/841644";
import { u3 } from "../figma_app/152690";
import { ZC } from "../figma_app/39751";
import { p as _$$p } from "../905/427409";
import { HF, C8, wH, Jj, mx } from "../figma_app/409807";
import { QK, hF } from "../figma_app/960598";
var d = o;
function _({
  setShowSinglePaddingControl: e,
  containsFocus: t
}) {
  let s = useContext(_$$p);
  let r = s?.isShowingBindingUI;
  let i = ZC(r);
  let l = ZC(t);
  useEffect(() => {
    i && !r && e?.(!1);
  }, [r, e, i]);
  useEffect(() => {
    t || !l || r || e?.(!1);
  }, [t, l, r, e]);
  return null;
}
export function $$j0({
  paddingSelection: e,
  focusOnMount: t,
  source: s,
  disableVariablesEntryPoint: o,
  setShowSinglePaddingControl: x,
  ...y
}) {
  let j = useDispatch();
  let [v, k] = HF(e);
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = sT();
  let N = useRef(!1);
  let I = C8[e];
  let E = `stack-padding-input-icon-${e}`;
  let M = wH(e);
  let A = useRef(null);
  useEffect(() => {
    t && (A.current?.focus(), A.current?.select());
  }, [e, t]);
  let P = useMemo(() => Jj(e), [e]);
  let L = useMemo(() => S(e), [e]);
  let {
    consumedVariable
  } = u3(L);
  let O = d()(QK, y.svgClassName);
  let [D, F] = useState(!1);
  let B = useCallback(() => {
    F(!0);
  }, [F]);
  let K = useCallback(e => {
    e.relatedTarget && e.currentTarget.contains(e.relatedTarget) || F(!1);
  }, [F]);
  let G = useCallback(() => {
    x?.(!1);
  }, [x]);
  let {
    inputClassName,
    noBorderOnFocus,
    noLeftBorder,
    squareRightBorder,
    onFocus,
    onBlur,
    onNudge,
    onMouseEnter,
    onMouseLeave,
    onClick,
    onKeyDown,
    onPaste,
    inputTestId,
    onScrubBegin,
    recordingKey,
    onScrubEnd
  } = y;
  let en = useMemo(() => jsxs(Fragment, {
    children: [jsx(_, {
      setShowSinglePaddingControl: x,
      containsFocus: D
    }), jsx(ig, {
      bigNudgeAmount,
      "data-tooltip": M,
      "data-tooltip-proxy-element-id": consumedVariable ? E : void 0,
      "data-tooltip-show-on-target-only": !0,
      "data-tooltip-type": Ib.TEXT,
      dataTestId: inputTestId,
      dispatch: j,
      forwardedRef: A,
      inputClassName: d()(hF, inputClassName),
      isTokenizable: !0,
      mixedMathHandler: P,
      noBorderOnFocus,
      noBorderOnHover: !0,
      noLeftBorder,
      onBlur,
      onClick,
      onFocus,
      onKeyDown,
      onMouseEnter,
      onMouseLeave,
      onNudge,
      onPaste,
      onScrubBegin: e => {
        N.current = !0;
        onScrubBegin?.(e);
      },
      onScrubEnd: e => {
        N.current = !1;
        onScrubEnd?.(e);
      },
      onValueChange: (e, t) => {
        t === zk.YES && Fullscreen.temporarilyHideOverlay(SnapMode.SELECTION);
        k(e, t, {
          source: s,
          input: N.current ? "scrub" : "textfield"
        });
      },
      recordingKey,
      scrubMultiplier: smallNudgeAmount,
      smallNudgeAmount,
      squareRightBorder,
      value: v,
      wheelMultiplier: smallNudgeAmount,
      children: jsx("div", {
        className: O,
        "data-tooltip-type": consumedVariable ? Ib.TEXT : void 0,
        "data-tooltip": consumedVariable ? M : void 0,
        id: E,
        children: jsx(I, {})
      })
    })]
  }), [x, D, inputClassName, v, smallNudgeAmount, bigNudgeAmount, P, j, noBorderOnFocus, noLeftBorder, squareRightBorder, M, consumedVariable, E, onFocus, onBlur, onNudge, onMouseEnter, onMouseLeave, onClick, onKeyDown, onPaste, recordingKey, inputTestId, O, I, k, s, onScrubBegin, onScrubEnd]);
  return jsx(sA, {
    recordingKey: y.recordingKey,
    fields: L,
    disableEntryPoint: o,
    resolvedType: VariableResolvedDataType.FLOAT,
    inputClassName: y.outerClassName,
    currentFieldValue: isValidValue(v) && allEqual(v) ? v[0] : void 0,
    onClickDetachButton: G,
    onFocus: B,
    onBlur: K,
    children: en
  });
}
export function $$v1() {
  let e = S(mx.HORIZONTAL);
  let {
    consumedVariable
  } = u3(e);
  let s = S(mx.VERTICAL);
  let {
    consumedVariable: _consumedVariable
  } = u3(s);
  return !isValidValue(consumedVariable) || !isValidValue(_consumedVariable);
}
function S(e) {
  switch (e) {
    case mx.TOP:
      return ["STACK_PADDING_TOP"];
    case mx.RIGHT:
      return ["STACK_PADDING_RIGHT"];
    case mx.BOTTOM:
      return ["STACK_PADDING_BOTTOM"];
    case mx.LEFT:
      return ["STACK_PADDING_LEFT"];
    case mx.HORIZONTAL:
      return ["STACK_PADDING_LEFT", "STACK_PADDING_RIGHT"];
    case mx.VERTICAL:
      return ["STACK_PADDING_TOP", "STACK_PADDING_BOTTOM"];
    case mx.ALL:
      return ["STACK_PADDING_BOTTOM", "STACK_PADDING_LEFT", "STACK_PADDING_RIGHT", "STACK_PADDING_TOP"];
  }
}
export const s = $$j0;
export const U = $$v1;