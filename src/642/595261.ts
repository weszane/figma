import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useRef, useState, useCallback, forwardRef, useId } from "react";
import { useDispatch } from "react-redux";
import { VariableResolvedDataType } from "../figma_app/763686";
import { generateRecordingKey } from "../figma_app/878298";
import { Yi } from "../figma_app/933328";
import { valueOrFallback, isInvalidValue } from "../905/216495";
import { SG, u as _$$u } from "../figma_app/852050";
import { KindEnum } from "../905/129884";
import { VZ } from "../905/959568";
import { $j } from "../figma_app/178475";
import { sJ } from "../figma_app/841644";
import { E as _$$E } from "../642/160266";
import { GI, OK, cv, dB, c5, fN, ih, gP, ve } from "../figma_app/328423";
import { fn } from "../figma_app/811257";
import { JV } from "../figma_app/260445";
import { p as _$$p } from "../905/427409";
import { u3, y$ } from "../figma_app/152690";
import { MH, eF } from "../figma_app/394327";
import { d9 } from "../905/579068";
import { jp } from "../figma_app/960196";
import { Xs } from "../figma_app/98483";
import { h as _$$h, k as _$$k } from "../642/927471";
export function $$w0({
  hideVariableIcon: e,
  recordingKey: t
}) {
  let s = GI();
  let i = s(OK.TOP_LEFT).value;
  let l = s(OK.TOP_RIGHT).value;
  let o = s(OK.BOTTOM_LEFT).value;
  let u = s(OK.BOTTOM_RIGHT).value;
  let h = s(OK.TOP_LEFT).setter;
  let m = s(OK.TOP_RIGHT).setter;
  let y = s(OK.BOTTOM_LEFT).setter;
  let _ = s(OK.BOTTOM_RIGHT).setter;
  let b = useMemo(() => [cv(OK.TOP_LEFT)], []);
  let C = useMemo(() => [cv(OK.TOP_RIGHT)], []);
  let v = useMemo(() => [cv(OK.BOTTOM_LEFT)], []);
  let S = useMemo(() => [cv(OK.BOTTOM_RIGHT)], []);
  let k = SG(b).data ?? [];
  let w = SG(C).data ?? [];
  let E = SG(v).data ?? [];
  let M = SG(S).data ?? [];
  let A = useRef(null);
  let P = useRef(null);
  let L = useRef(null);
  let R = useRef(null);
  let O = useRef(null);
  let [D, F] = useState(null);
  let B = useCallback((e, t) => {
    t && F({
      corner: e,
      initialPosition: VZ(t, d9)
    });
  }, []);
  let K = useCallback(() => {
    F(null);
  }, []);
  function G(e) {
    switch (e) {
      case OK.TOP_LEFT:
        return {
          value: i,
          variableFields: b,
          variablesForField: k,
          inputRef: A,
          onChange: h,
          mixedMathHandler: dB
        };
      case OK.TOP_RIGHT:
        return {
          value: l,
          variableFields: C,
          variablesForField: w,
          inputRef: P,
          onChange: m,
          mixedMathHandler: c5
        };
      case OK.BOTTOM_LEFT:
        return {
          value: o,
          variableFields: v,
          variablesForField: E,
          inputRef: L,
          onChange: y,
          mixedMathHandler: fN
        };
      case OK.BOTTOM_RIGHT:
        return {
          value: u,
          variableFields: S,
          variablesForField: M,
          inputRef: R,
          onChange: _,
          mixedMathHandler: ih
        };
    }
  }
  function H({
    corner: t,
    recordingKey: s
  }) {
    let n = G(t);
    return jsx(N, {
      variableFields: n.variableFields,
      isPickerOpen: D?.corner === t,
      onPickerOpen: () => B(t, n.inputRef.current),
      children: jsx(T, {
        ref: n.inputRef,
        disableEntryPoint: 0 === n.variablesForField.length,
        hideVariableIcon: e,
        mixedMathHandler: n.mixedMathHandler,
        onChange: n.onChange,
        recordingKey: s,
        tooltip: gP(t),
        ui3Icon: ve(t),
        value: n.value,
        variableFields: n.variableFields
      })
    });
  }
  return jsxs("div", {
    children: [jsxs(Fragment, {
      children: [jsx(fn, {
        leftInput: H({
          corner: OK.TOP_LEFT,
          recordingKey: generateRecordingKey(t, "rectangleTopLeftCornerRadiusInput")
        }),
        rightInput: H({
          corner: OK.TOP_RIGHT,
          recordingKey: generateRecordingKey(t, "rectangleTopRightCornerRadiusInput")
        }),
        rightLabel: null,
        leftLabel: null,
        icon: null
      }), jsx(fn, {
        ref: O,
        leftInput: H({
          corner: OK.BOTTOM_LEFT,
          recordingKey: generateRecordingKey(t, "rectangleBottomLeftCornerRadiusInput")
        }),
        rightInput: H({
          corner: OK.BOTTOM_RIGHT,
          recordingKey: generateRecordingKey(t, "rectangleBottomRightCornerRadiusInput")
        }),
        rightLabel: null,
        leftLabel: null,
        icon: jsx(_$$E, {
          recordingKey: generateRecordingKey(t, "cornerSmoothingToggle"),
          rowRef: O
        })
      })]
    }), function () {
      if (!D) return null;
      let {
        corner,
        initialPosition
      } = D;
      let s = G(corner);
      let n = valueOrFallback(s.value, 0);
      return jsx(I, {
        corner,
        initialPosition,
        currentFieldValue: n,
        variableFields: s.variableFields,
        onClose: K
      });
    }()]
  });
}
let T = forwardRef(({
  variableFields: e,
  value: t,
  tooltip: s,
  recordingKey: l,
  disableEntryPoint: a,
  onChange: o,
  ui3Icon: c,
  hideVariableIcon: p,
  mixedMathHandler: g
}, f) => {
  let x = useDispatch();
  let {
    smallNudgeAmount,
    bigNudgeAmount,
    wheelMultiplier,
    scrubMultiplier
  } = Xs();
  let {
    consumedVariable
  } = u3(e);
  let w = useId();
  return jsx(sJ, {
    ref: f,
    currentFieldValue: valueOrFallback(t, 0),
    disableEntryPoint: a,
    hideIcon: p,
    children: jsx($j, {
      bigNudgeAmount,
      "data-tooltip": s,
      "data-tooltip-proxy-element-id": consumedVariable ? w : void 0,
      "data-tooltip-type": KindEnum.TEXT,
      dispatch: x,
      inputClassName: _$$h,
      isTokenizable: !0,
      mixedMathHandler: g,
      noBorderOnHover: !0,
      onValueChange: o,
      recordingKey: l,
      scrubMultiplier: .1 * scrubMultiplier,
      smallNudgeAmount,
      value: isInvalidValue(t) ? t : t ?? 0,
      wheelMultiplier,
      children: jsx("div", {
        className: _$$k,
        "data-tooltip-type": consumedVariable ? KindEnum.TEXT : void 0,
        "data-tooltip": consumedVariable ? s : void 0,
        id: w,
        children: c
      })
    })
  });
});
function N({
  variableFields: e,
  isPickerOpen: t,
  onPickerOpen: s,
  children: n
}) {
  let {
    consumedVariable
  } = u3(e);
  let a = MH(consumedVariable);
  let o = _$$u(a ?? void 0);
  let d = !!o && eF(o);
  let [u, p, h] = JV(e, VariableResolvedDataType.FLOAT);
  return jsx(_$$p.Provider, {
    value: {
      boundVariableId: a,
      isBoundVariableDeleted: d,
      isShowingBindingUI: t,
      showBindingUI: s,
      onVariableSelected: h
    },
    children: n
  });
}
function I({
  corner: e,
  initialPosition: t,
  currentFieldValue: s,
  variableFields: a,
  onClose: d
}) {
  let c = useDispatch();
  let {
    updateVariableConsumption,
    clearVariableConsumption
  } = u3(a);
  let h = useCallback(e => {
    e ? c(Yi({
      item: e,
      callback: e => {
        updateVariableConsumption(y$(VariableResolvedDataType.FLOAT, e));
      }
    })) : clearVariableConsumption();
  }, [c, updateVariableConsumption, clearVariableConsumption]);
  return jsx(jp, {
    fields: [cv(e)],
    resolvedType: VariableResolvedDataType.FLOAT,
    initialPosition: t,
    currentFieldValue: s,
    onVariableSelected: h,
    onClose: d
  });
}
export const j = $$w0;