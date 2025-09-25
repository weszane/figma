import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { memo, useCallback, useState } from "react";
import { E as _$$E } from "../905/465157";
import { getFeatureFlags } from "../905/601108";
import { generateRecordingKey } from "../figma_app/878298";
import { getI18nString, renderI18nText } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { getNudgeAmounts } from "../figma_app/740163";
import { isInvalidValue, getCommonFromArray, isValidValue } from "../905/216495";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { om, ui } from "../figma_app/395097";
import { Ms, Er } from "../905/873331";
import { M as _$$M } from "../905/983212";
import { Wn, dG, Ey } from "../figma_app/789050";
import { V0, Xd, zr, Jt, kW, R8, x4, Hd, fE, e6 } from "../figma_app/359164";
import { o as _$$o } from "../905/705812";
import { tB, CL } from "../figma_app/722913";
import { XN } from "../figma_app/641313";
import { D7, iI } from "../905/827182";
import { DE, fn } from "../figma_app/811257";
import { EX } from "../figma_app/709323";
import { eN } from "../905/331848";
import { bL, c$ } from "../905/867927";
import { q } from "../905/932270";
import { useDispatch } from "react-redux";
import { AppStateTsApi, DrawingElementType } from "../figma_app/763686";
import { hidePickerThunk, showPickerThunk, hideStylePicker } from "../figma_app/91703";
import { sw } from "../figma_app/914957";
import { Xo } from "../figma_app/482495";
import { getObservableValue } from "../figma_app/84367";
import { calculatePickerPositionLeft } from "../905/959568";
import { d as _$$d } from "../905/976845";
import { A as _$$A } from "../905/891805";
import { AutoInteractableWrapper } from "../905/277716";
import { useNonMixedSelectionPropertyValue } from "../905/275640";
import { Um } from "../905/848862";
import { KindEnum } from "../905/129884";
import { Kt } from "../figma_app/156285";
import { _2 } from "../905/185121";
let $$N = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M12.5 9a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5h1l.1.01a.5.5 0 0 1 0 .98l-.1.01h-1a1.5 1.5 0 0 1-1.5-1.5v-1a.5.5 0 0 1 .5-.5m5 2a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm-5-5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5"
    }), jsx("path", {
      fill: "var(--color-icon)",
      d: "M6.5 6a.5.5 0 0 1 .5.5v4a6.5 6.5 0 0 0 6.5 6.5h4l.1.01a.5.5 0 0 1 0 .98l-.1.01h-4A7.5 7.5 0 0 1 6 10.5v-4a.5.5 0 0 1 .5-.5"
    })]
  });
});
let C = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M12.985 13.963q.252.037.515.037h.75l.1.01a.5.5 0 0 1 0 .98l-.1.01h-.75q-.336 0-.66-.048a.5.5 0 0 1 .145-.99m4.616.047a.5.5 0 0 1 0 .98L17.5 15h-.75a.5.5 0 0 1 0-1h.75zM9.989 12.48a.5.5 0 0 1 .631.029l.069.075.16.201q.17.196.365.364l.201.162.075.068a.5.5 0 0 1-.584.786l-.087-.052-.259-.207a4.5 4.5 0 0 1-.467-.467l-.207-.26-.052-.086a.5.5 0 0 1 .155-.613M9.5 9.25a.5.5 0 0 1 .5.5v.75q0 .263.037.515a.5.5 0 0 1-.99.145A4.5 4.5 0 0 1 9 10.5v-.75a.5.5 0 0 1 .5-.5M9.5 6a.5.5 0 0 1 .5.5v.75a.5.5 0 0 1-1 0V6.5a.5.5 0 0 1 .5-.5"
    }), jsx("path", {
      fill: "var(--color-icon)",
      d: "M6.5 6a.5.5 0 0 1 .5.5v4a6.5 6.5 0 0 0 6.5 6.5h4l.1.01a.5.5 0 0 1 0 .98l-.1.01h-4A7.5 7.5 0 0 1 6 10.5v-4a.5.5 0 0 1 .5-.5m6 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4a1.5 1.5 0 0 1-1.5-1.5v-4a.5.5 0 0 1 .5-.5"
    })]
  });
});
let w = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M13.179 16.992q.159.008.321.008h.75l.1.01a.5.5 0 0 1 0 .98l-.1.01h-.75q-.186 0-.37-.009l-.364-.026-.1-.02a.5.5 0 0 1 .196-.976zm4.422.018a.5.5 0 0 1 0 .98L17.5 18h-.75a.5.5 0 0 1 0-1h.75zm-7.887-1.226a6.5 6.5 0 0 0 .814.5l.29.138.086.052a.5.5 0 0 1-.404.891l-.097-.032-.333-.161a7.5 7.5 0 0 1-.94-.575l.293-.407zm-.697.114a.5.5 0 0 1 .697-.114l-.583.813a.5.5 0 0 1-.114-.699m-2.101-2.963a.5.5 0 0 1 .61.16l.052.088.139.289a6.5 6.5 0 0 0 .499.814.5.5 0 0 1-.813.583 7.5 7.5 0 0 1-.575-.94l-.161-.332-.032-.097a.5.5 0 0 1 .281-.565M6.5 9.25a.5.5 0 0 1 .5.5v.75q0 .162.008.321l.023.317v.101a.5.5 0 0 1-.975.095l-.02-.1-.027-.365A8 8 0 0 1 6 10.5v-.75a.5.5 0 0 1 .5-.5M6.5 6a.5.5 0 0 1 .5.5v.75a.5.5 0 0 1-1 0V6.5a.5.5 0 0 1 .5-.5"
    }), jsx("path", {
      fill: "var(--color-icon)",
      d: "M12.5 6a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4a1.5 1.5 0 0 1-1.5-1.5v-4a.5.5 0 0 1 .5-.5"
    })]
  });
});
function O(e) {
  return jsxs(bL, {
    value: isInvalidValue(e.value) ? void 0 : e.value,
    onChange: e.onChange,
    legend: jsx(q, {
      children: getI18nString("fullscreen.properties_panel.stroke.position")
    }),
    readonly: e.disabled,
    recordingKey: e.recordingKey,
    children: [jsx(c$, {
      icon: jsx($$N, {}),
      value: "OUTSIDE",
      "aria-label": getI18nString("fullscreen.properties_panel.stroke.position_outside")
    }), jsx(c$, {
      icon: jsx(C, {}),
      value: "CENTER",
      "aria-label": getI18nString("fullscreen.properties_panel.stroke.position_center")
    }), jsx(c$, {
      icon: jsx(w, {}),
      value: "INSIDE",
      "aria-label": getI18nString("fullscreen.properties_panel.stroke.position_inside")
    })]
  });
}
let j = "illustration-stroke-settings";
function U() {
  let e = Xo();
  return e?.id === j;
}
function $(e) {
  let t = V0();
  let r = Xd();
  let i = zr();
  let a = Um();
  let s = Xo();
  let l = Jt();
  let d = useNonMixedSelectionPropertyValue("strokeBrushGuid");
  let c = getCommonFromArray(d);
  let p = Kt();
  return jsx(_2, {
    arcRadius: i.arcRadius,
    arcSweep: i.arcSweep,
    brushType: p,
    connectorLineStyle: i.connectorLineStyle,
    dashCap: i.dashCap,
    dashPattern: i.dashPattern,
    dropdownShown: a,
    maxStrokeWeight: i.maxStrokeWeight,
    miterLimitAngle: i.miterLimitAngle,
    numSelectedByType: i.numSelectedByType,
    onChange: r,
    pickerShown: s,
    recordingKey: generateRecordingKey(e, "advanced"),
    strokeBrushGuid: c,
    strokeCap: i.strokeCap,
    strokeJoin: i.strokeJoin,
    strokePanelMode: t,
    strokePanelTerminalPointCount: l,
    strokeType: e.strokeType,
    terminalCap: i.terminalCap
  });
}
function X(e) {
  let t = function (e) {
    let t = useDispatch();
    let r = U();
    return useCallback(() => {
      if (r) t(hidePickerThunk());else {
        if (!e || !e.current) return;
        let r = calculatePickerPositionLeft(e.current);
        t(showPickerThunk({
          id: j,
          initialX: r.x,
          initialY: r.y
        }));
        t(hideStylePicker());
        t(sw());
      }
    }, [t, e, r]);
  }(e.forwardedRef);
  let r = U();
  return jsx(AutoInteractableWrapper, {
    name: "toggle_advanced_settings_button",
    children: jsx(_$$d, {
      "aria-expanded": r,
      onClick: t,
      disabled: e.disabled,
      recordingKey: generateRecordingKey(e, "more"),
      "aria-label": getI18nString("fullscreen.properties_panel.fill.advanced_stroke_settings"),
      htmlAttributes: {
        onMouseDown: e => e.stopPropagation(),
        "data-tooltip": getI18nString("fullscreen.properties_panel.fill.advanced_stroke_settings"),
        "data-tooltip-type": KindEnum.TEXT
      },
      children: jsx(_$$A, {})
    })
  });
}
export let $$q1 = 200;
export function $$J0(e) {
  let [t, r] = useState(om.ALL);
  let A = V0();
  let x = Xd();
  let {
    strokeJoin,
    strokeAlign,
    borderSharedWeight
  } = zr();
  let R = Wn(A);
  let P = dG();
  let D = Ey(A);
  let k = function () {
    let e = V0();
    let t = tB();
    let r = Jt();
    let n = getObservableValue(AppStateTsApi?.propertiesPanelState().isVertexSelectionAndHasEndpoints, !1);
    return (e === DrawingElementType.ENDPOINT || e === DrawingElementType.VECTOR && r > 0 || n) && t;
  }();
  let F = kW(A);
  let j = R8();
  let B = U();
  let G = function () {
    let {
      strokeCap,
      terminalCap,
      dashPattern
    } = zr();
    let n = V0();
    return x4(n, terminalCap, strokeCap, dashPattern);
  }();
  let V = CL();
  let {
    bigNudgeAmount,
    smallNudgeAmount
  } = getNudgeAmounts();
  let W = t === om.MIXED ? 1 : 0;
  let K = eN({
    min: W,
    max: $$q1
  });
  let Y = jsx(_$$o, {
    value: Hd(G),
    onChange: e => x({
      strokeCap: e,
      terminalCap: e
    }),
    label: getI18nString("fullscreen.properties_panel.section_stroke.label_end_cap"),
    recordingKey: generateRecordingKey(e, "endCap"),
    disabled: !k,
    kind: "endCap"
  });
  let J = jsx(D7, {
    source: "properties_panel",
    recordingKey: generateRecordingKey(e.recordingKey, "widthProfile")
  });
  let Z = jsx(iI, {
    recordingKey: generateRecordingKey(e.recordingKey, "flipWidthProfile")
  });
  return jsxs(Fragment, {
    children: [jsx(DE, {
      label: renderI18nText("fullscreen.properties_panel.section_stroke.label_weight"),
      input: jsx(EX, {
        ariaLabel: getI18nString("fullscreen.properties_panel.fill.stroke_width"),
        bigStep: bigNudgeAmount,
        dataTooltip: getI18nString("fullscreen.properties_panel.fill.stroke_width"),
        disabled: !F,
        fullWidth: !0,
        icon: jsx(_$$E, {}),
        inputMax: fE,
        min: W,
        mixedMathHandler: XN,
        onValueChange: (e, r) => {
          x({
            [ui(t)]: e
          }, r);
        },
        recordingKey: generateRecordingKey(e.recordingKey, "weight"),
        sliderMax: $$q1,
        sliderValueTransform: K,
        step: smallNudgeAmount,
        value: borderSharedWeight
      }),
      icon: j ? jsx(Ms, {
        borderOption: t,
        setBorderOption: r,
        onChange: e => {
          if (r(e), e === om.CUSTOM) return;
          let t = e6(e);
          fullscreenValue.updateSelectionProperties(t, {
            shouldCommit: yesNoTrackingEnum.YES
          });
        },
        recordingKey: generateRecordingKey(e, "borderSide")
      }) : null
    }), j && t === om.CUSTOM && jsx(Er, {
      onChange: x
    }), jsx(fn, {
      "data-testid": "stroke-cap-align-join-row",
      ref: e.forwardedRef,
      leftLabel: getI18nString("fullscreen.properties_panel.stroke.position"),
      leftInput: jsx(O, {
        value: strokeAlign,
        disabled: !D,
        onChange: e => x({
          strokeAlign: e
        })
      }),
      rightLabel: getI18nString("fullscreen.properties_panel.stroke_settings.join"),
      rightInput: jsx(_$$M, {
        value: strokeJoin,
        disabled: !R,
        showValueinDisabledStrokeJoin: P,
        onChange: e => x({
          strokeJoin: e
        })
      }),
      icon: jsx(X, {
        forwardedRef: e.forwardedRef,
        recordingKey: e.recordingKey,
        disabled: isInvalidValue(V)
      })
    }), jsx(fn, {
      "data-testid": "stroke-cap-profile-row",
      leftLabel: getI18nString("fullscreen.properties_panel.section_stroke.label_end_cap"),
      leftInput: Y,
      rightLabel: getFeatureFlags().ce_il_var_width_points ? getI18nString("fullscreen.properties_panel.width_profile.label") : null,
      rightInput: getFeatureFlags().ce_il_var_width_points ? J : null,
      icon: getFeatureFlags().ce_il_var_width_points ? Z : null
    }), B && isValidValue(V) && jsx($, {
      strokeType: V,
      recordingKey: e.recordingKey
    })]
  });
}
export const n = $$J0;
export const N = $$q1;