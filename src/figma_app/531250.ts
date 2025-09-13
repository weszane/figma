import { jsx } from "react/jsx-runtime";
import { useRef, useCallback, useMemo, useId } from "react";
import { useDispatch } from "react-redux";
import { isNotNullish } from "../figma_app/95419";
import { Q } from "../figma_app/447352";
import { a as _$$a } from "../905/558168";
import { VariableResolvedDataType } from "../figma_app/763686";
import { generateRecordingKey } from "../figma_app/878298";
import { E as _$$E } from "../905/277716";
import { getI18nString } from "../905/303541";
import { isValidValue } from "../905/216495";
import { kl, lJ } from "../905/275640";
import { u as _$$u, SG } from "../figma_app/852050";
import { KindEnum } from "../905/129884";
import { $j } from "../figma_app/178475";
import { sJ } from "../figma_app/841644";
import { S2 } from "../figma_app/328423";
import { P } from "../905/460261";
import { JV } from "../figma_app/260445";
import { p as _$$p } from "../905/427409";
import { u3 } from "../figma_app/152690";
import { MH, eF } from "../figma_app/394327";
import { U as _$$U } from "../figma_app/924260";
import { Xs, rn } from "../figma_app/98483";
import { hF, QK } from "../figma_app/100987";
let $$C = ["CORNER_RADIUS"];
let w = ["RECTANGLE_TOP_LEFT_CORNER_RADIUS", "RECTANGLE_TOP_RIGHT_CORNER_RADIUS", "RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS", "RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS"];
export function $$O0(e) {
  let t = useRef(null);
  let r = useRef(null);
  let a = kl("cornerRadius");
  let {
    consumedVariable,
    clearVariableConsumption
  } = u3($$C);
  let {
    consumedVariable: _consumedVariable,
    clearVariableConsumption: _clearVariableConsumption
  } = u3(w);
  let f = MH(consumedVariable);
  let y = MH(_consumedVariable);
  let b = f ?? y;
  let x = _$$u(b ?? void 0);
  let N = !!x && eF(x);
  let [O, L, P] = JV(!f && y ? w : $$C, VariableResolvedDataType.FLOAT);
  let D = isNotNullish(a) && isValidValue(a) ? a : void 0;
  let k = 0 === (SG($$C)?.data ?? []).length;
  let M = useCallback(() => {
    clearVariableConsumption();
    _clearVariableConsumption();
  }, [clearVariableConsumption, _clearVariableConsumption]);
  let F = useCallback(e => {
    e ? P(e) : M();
  }, [P, M]);
  let j = useCallback(() => {
    r.current && L(r.current, {
      currentFieldValue: D
    });
  }, [L, D]);
  let U = useMemo(() => ({
    isShowingBindingUI: O,
    showBindingUI: j,
    boundVariableId: b,
    isBoundVariableDeleted: N,
    onVariableSelected: F
  }), [O, j, b, N, F]);
  return jsx(_$$E, {
    name: "corner_radius_input",
    children: jsx(_$$p.Provider, {
      value: U,
      children: jsx(sJ, {
        ref: r,
        currentFieldValue: D,
        disableEntryPoint: k,
        disabled: e.disabled,
        fullHeight: e.useSliderInput,
        hasBindingContextMenu: e.useSliderInput,
        hideIcon: e.useSliderInput,
        inputClassName: e.inputClassName,
        inputRef: t,
        noBorder: e.useSliderInput,
        recordingKey: generateRecordingKey(e, "cornerRadiusInputVariableWrapper"),
        children: e.useSliderInput ? jsx(_$$U, {
          forwardedRef: t,
          disabled: e.disabled,
          useSingleRadiusIcon: e.useSingleRadiusIcon
        }) : jsx($$R1, {
          disabled: e.disabled,
          isBoundToVariable: !!x,
          recordingKey: e.recordingKey,
          useSingleRadiusIcon: e.useSingleRadiusIcon,
          noBorderOnHover: !0
        })
      })
    })
  });
}
export function $$R1(e) {
  let t = useId();
  let {
    smallNudgeAmount,
    bigNudgeAmount,
    wheelMultiplier
  } = Xs();
  let u = useDispatch();
  let [_, m] = lJ("cornerRadius");
  let E = e.disabled ? 0 : void 0;
  let T = P(getI18nString("fullscreen.properties_panel.transform_panel.corner_radius"));
  return jsx($j, {
    bigNudgeAmount,
    "data-tooltip": T,
    "data-tooltip-proxy-element-id": e.isBoundToVariable ? t : void 0,
    "data-tooltip-type": KindEnum.TEXT,
    dataTestId: "transform-corner-radius",
    disabled: e.disabled,
    dispatch: u,
    inputClassName: hF,
    isTokenizable: !0,
    mixedMathHandler: S2,
    noBorderOnHover: e.noBorderOnHover,
    onValueChange: e => {
      rn("cornerRadius");
      m(e);
    },
    recordingKey: generateRecordingKey(e, "cornerRadiusInput"),
    scrubMultiplier: .1 * smallNudgeAmount,
    smallNudgeAmount,
    value: _ ?? E,
    wheelMultiplier,
    children: jsx("div", {
      className: QK,
      "data-tooltip-type": e.isBoundToVariable ? KindEnum.TEXT : void 0,
      "data-tooltip": e.isBoundToVariable ? T : void 0,
      id: t,
      children: e.useSingleRadiusIcon ? jsx(_$$a, {}) : jsx(Q, {})
    })
  });
}
export const C = $$O0;
export const I = $$R1;