import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useRef, useState, useCallback, cloneElement, Children } from "react";
import { useDispatch, useSelector } from "react-redux";
import { E as _$$E } from "../905/465157";
import { VariableResolvedDataType, PropertyScope } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import d from "classnames";
import { Q } from "../figma_app/67145";
import { generateRecordingKey } from "../figma_app/878298";
import { getI18nString } from "../905/303541";
import { Oe } from "../figma_app/933328";
import { sT } from "../figma_app/740163";
import { getCommonValue, isInvalidValue, MIXED_MARKER } from "../905/216495";
import { SG } from "../figma_app/852050";
import { Ib } from "../905/129884";
import { ig, $j } from "../figma_app/178475";
import { sJ } from "../figma_app/841644";
import { Gz } from "../905/62223";
import { ui, om } from "../figma_app/395097";
import { l6, c$ } from "../905/794875";
import { hu, V5 } from "../figma_app/260445";
import { u3, y$ } from "../figma_app/152690";
import { MH } from "../figma_app/394327";
import { fE } from "../figma_app/359164";
import { QK, YJ, I_, TL, py, H, Xd, os, IX, kA } from "../figma_app/228217";
var c = d;
let w = l6;
let O = c$;
export function $$R0(e) {
  let t = "ACTIVE" === e.iconState ? void 0 : QK;
  return jsx("div", {
    className: t,
    children: jsx(_$$E, {})
  });
}
export function $$L3(e) {
  let {
    bigNudgeAmount,
    smallNudgeAmount
  } = sT();
  let s = useDispatch();
  let o = useRef(null);
  let d = useSelector(e => {
    let {
      borderTopWeight,
      borderBottomWeight,
      borderLeftWeight,
      borderRightWeight
    } = e.mirror.selectionProperties;
    return getCommonValue(borderTopWeight, borderBottomWeight, borderLeftWeight, borderRightWeight);
  });
  let u = (t, r) => {
    if (0 === t.length) return;
    let n = e.borderOption ? ui(e.borderOption) : "strokeWeight";
    if (e.borderOption) {
      if (1 === t.length) {
        e.onChange({
          [n]: t[0]
        }, r);
        return;
      }
      2 === t.length ? (t.push(t[0]), t.push(t[1])) : 3 === t.length && t.push(t[1]);
      let i = {
        borderTopWeight: t[0],
        borderRightWeight: t[1],
        borderBottomWeight: t[2],
        borderLeftWeight: t[3]
      };
      isInvalidValue(getCommonValue(...t)) && (e.selectBorderSides(om.CUSTOM), i.borderStrokeWeightsIndependent = !0);
      e.onChange(i, r);
    } else e.onChange({
      [n]: t[0]
    }, r);
  };
  let h = d ? isInvalidValue(d) ? MIXED_MARKER : [d] : void 0;
  let f = e.borderOption === om.CUSTOM ? h : isInvalidValue(e.strokeWeight) ? MIXED_MARKER : [Number(e.strokeWeight)];
  let b = e.borderOption === om.MIXED ? 1 : 0;
  let S = e.borderOption ? Gz(e.borderOption) : void 0;
  return jsx(Fragment, {
    children: jsx(M, {
      inputClassName: e.gridRight ? YJ : I_,
      isNotPencilTool: e.gridRight,
      inputRef: o,
      field: S || "STROKE_WEIGHT",
      recordingKey: generateRecordingKey(e, "strokeWeightInputWrapper"),
      children: getFeatureFlags().ce_multi_border_weight_input ? jsx(ig, {
        bigNudgeAmount,
        className: c()(TL, {
          [py]: e.gridRight
        }),
        "data-tooltip": getI18nString("fullscreen.properties_panel.fill.stroke_width"),
        "data-tooltip-type": Ib.TEXT,
        dataTestId: e.dataTestId,
        disabled: e.disabled,
        dispatch: s,
        forwardedRef: o,
        inputClassName: H,
        isTokenizable: !0,
        max: fE,
        min: b,
        onValueChange: u,
        recordingKey: e.recordingKey,
        smallNudgeAmount,
        tooltipForScreenReadersOnly: !0,
        value: f,
        children: jsx($$R0, {})
      }) : jsx($j, {
        bigNudgeAmount,
        className: c()(TL, {
          [py]: e.gridRight
        }),
        "data-tooltip": getI18nString("fullscreen.properties_panel.fill.stroke_width"),
        "data-tooltip-type": Ib.TEXT,
        dataTestId: e.dataTestId,
        disabled: e.disabled,
        dispatch: s,
        forwardedRef: o,
        inputClassName: H,
        isTokenizable: !0,
        max: fE,
        min: b,
        onValueChange: (e, t) => {
          u([e], t);
        },
        recordingKey: e.recordingKey,
        smallNudgeAmount,
        tooltipForScreenReadersOnly: !0,
        value: e.strokeWeight,
        children: jsx($$R0, {})
      })
    })
  });
}
export class $$P1 {
  format(e) {
    switch (e) {
      case "CENTER":
        return getI18nString("fullscreen.properties_panel.stroke.center");
      case "INSIDE":
        return getI18nString("fullscreen.properties_panel.stroke.inside");
      case "OUTSIDE":
        return getI18nString("fullscreen.properties_panel.stroke.outside");
    }
  }
}
let D = new $$P1();
export function $$k2(e) {
  let [t, r] = useState(void 0);
  let a = jsx(Q, {
    setMaxWidth: e => {
      void 0 === e ? r(void 0) : r(Math.max(e, 96));
    },
    options: ["CENTER", "INSIDE", "OUTSIDE"],
    formatOption: e => D.format(e),
    getIcon: () => void 0
  });
  return jsxs(Fragment, {
    children: [jsxs(w, {
      ariaLabel: getI18nString("fullscreen.properties_panel.stroke_align"),
      chevronClassName: Xd,
      className: c()(os, {
        [IX]: e.gridLeft
      }),
      disabled: e.disabled,
      dispatch: e.dispatch,
      dropdownShown: e.dropdownShown,
      dropdownWidth: t,
      enablePreview: !0,
      formatter: D,
      id: "stroke-align-select",
      inputClassName: kA,
      onChange: (t, r) => {
        e.onChange({
          strokeAlign: t
        }, r);
      },
      property: e.strokeAlign,
      recordingKey: e.recordingKey,
      children: [jsx(O, {
        value: "CENTER"
      }), jsx(O, {
        value: "INSIDE"
      }), jsx(O, {
        value: "OUTSIDE"
      })]
    }), a]
  });
}
function M({
  children: e,
  inputClassName: t,
  field: r,
  inputRef: s,
  isNotPencilTool: l,
  recordingKey: d
}) {
  let c = useDispatch();
  let u = SG([r]).data ?? [];
  let {
    updateVariableConsumption,
    consumedVariable
  } = u3([r]);
  let {
    clearVariableConsumption,
    consumedVariable: _consumedVariable
  } = u3(["BORDER_BOTTOM_WEIGHT", "BORDER_TOP_WEIGHT", "BORDER_LEFT_WEIGHT", "BORDER_RIGHT_WEIGHT"]);
  let {
    clearVariableConsumption: _clearVariableConsumption
  } = u3(["STROKE_WEIGHT"]);
  let y = MH(consumedVariable) ?? MH(_consumedVariable) ?? void 0;
  let T = useCallback(async e => {
    if (e) {
      let t = await c(Oe(e));
      updateVariableConsumption(y$(VariableResolvedDataType.FLOAT, t));
    } else {
      clearVariableConsumption();
      _clearVariableConsumption();
    }
  }, [clearVariableConsumption, _clearVariableConsumption, c, updateVariableConsumption]);
  return l ? jsxs(hu, {
    boundVariableId: y,
    resolvedType: VariableResolvedDataType.FLOAT,
    onVariableSelected: T,
    children: [jsx(sJ, {
      inputRef: s,
      inputClassName: t,
      currentFieldValue: y,
      disableEntryPoint: 0 === u.length,
      hasBindingContextMenu: !0,
      hideIcon: !1,
      recordingKey: d,
      children: cloneElement(Children.only(e), {
        className: void 0,
        isTokenizable: !0,
        noBorderOnHover: !0
      })
    }), jsx(V5, {
      variableScope: PropertyScope.STROKE_FLOAT
    })]
  }) : cloneElement(Children.only(e), {
    className: t
  });
}
$$k2.displayName = "StrokeAlignSelection";
export const Cq = $$R0;
export const SQ = $$P1;
export const au = $$k2;
export const v9 = $$L3;
