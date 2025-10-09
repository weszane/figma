import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { memo, useCallback, useRef, Children, cloneElement, useContext, useId, useMemo, useState, useEffect, createRef, forwardRef, PureComponent } from "react";
import { DialogTriggerButton } from "../905/976845";
import { T as _$$T } from "../905/68180";
import { IconButton } from "../905/443068";
import { O as _$$O } from "../905/487602";
import { StyleVariableOperation, CopyPasteType, VariableResolvedDataType, AppStateTsApi, ProcessStage, PropertyScope, AccessLevel, LayoutTabType, NodePropertyCategory } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { memoizeByArgs } from "../figma_app/815945";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { debugState } from "../905/407919";
import { Q as _$$Q } from "../figma_app/67145";
import { generateRecordingKey, useSetupPlayback } from "../figma_app/878298";
import { useSprigWithSampling } from "../905/99656";
import { k as _$$k2 } from "../905/582200";
import { getI18nString, renderI18nText } from "../905/303541";
import { hidePickerThunk, hideStylePicker, showPickerThunk } from "../figma_app/91703";
import { qj } from "../figma_app/451499";
import { mapEditorTypeToProductType } from "../figma_app/314264";
import { fullscreenValue } from "../figma_app/455680";
import { valueOrFallback } from "../905/216495";
import { useLabConfiguration, labConfigurations } from "../905/226610";
import { Q as _$$Q2 } from "../figma_app/104130";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { calculatePickerPositionLeft } from "../905/959568";
import { a2 } from "../figma_app/762558";
import { executeWithDSAAction } from "../905/135117";
import { zK, zM } from "../905/182453";
import { Kx } from "../905/401389";
import { Bf } from "../905/937445";
import { bL, RT } from "../905/867927";
import { Legend } from "../905/932270";
import { LengthInput, OpacityInput, PercentageBaseInput, ExpressionInput } from "../figma_app/178475";
import { aO, UF, ml, gA, vG, qq, IK } from "../905/210945";
import { Id, Zk } from "../figma_app/626177";
import { cS, Zo } from "../figma_app/334459";
import { Ad, Y9, Oe } from "../figma_app/811257";
import { rf } from "../figma_app/960196";
import { yw, li, ir, iQ, I6 } from "../905/159279";
import { useDispatch } from "react-redux";
import { assertNotNullish } from "../figma_app/465776";
import { convertVariableIdToKiwi, convertKiwiToVariableIdString } from "../905/805904";
import $ from "classnames";
import { loadSharedVariableThunk } from "../figma_app/933328";
import { FormattedInputWithWrapper } from "../figma_app/841644";
import { ControlledVariablePickerProvider } from "../figma_app/260445";
import { extractVariableAliasOrFontStyle } from "../figma_app/394327";
import { oz } from "../figma_app/406976";
import { E as _$$E } from "../905/53857";
import { bL as _$$bL } from "../905/911410";
import { DialogContents, DialogHeader, DialogBody } from "../figma_app/272243";
import { Point } from "../905/736624";
import { stopPropagation } from "../figma_app/753501";
import { Rk } from "../figma_app/844696";
import { bL as _$$bL2, l9, mc, c$ } from "../905/493196";
import { HiddenLabel, Label } from "../905/270045";
import eE from "../vendor/805353";
import { c$ as _$$c$, l6 } from "../905/794875";
import { g as _$$g } from "../905/412697";
import { DraggableModalManager } from "../905/748636";
import { Z as _$$Z } from "../905/606826";
import { stylex } from "@stylexjs/stylex";
import { yb } from "../905/608681";
import { clamp, roundToMultiple, nearlyEqual } from "../figma_app/492908";
import { R as _$$R } from "../905/987929";
import { Z as _$$Z2 } from "../905/557139";
import { N as _$$N } from "../905/696319";
import { setupDragHandler } from "../905/97346";
import { useTheme } from "../905/289770";
import { logError } from "../905/714362";
import { Checkbox } from "../905/274480";
import { m as _$$m } from "../905/357539";
import { N as _$$N2 } from "../905/720559";
import { D as _$$D2 } from "../905/225412";
import { So } from "../figma_app/580959";
import { BT, wM, x7, n1 } from "../figma_app/228217";
import { ButtonPrimitive } from "../905/632989";
import { U as _$$U } from "../905/708285";
import { rM } from "../905/95091";
import { b as _$$b, O as _$$O2 } from "../905/916974";
import { getStylePickerUIState } from "../figma_app/836943";
import { dD, o7 } from "../figma_app/941824";
import { B as _$$B } from "../905/229357";
import { IR } from "../905/668609";
import { DEFAULT_FINE_NUDGE, DEFAULT_COARSE_NUDGE } from "../905/668764";
import { LN, Lk } from "../figma_app/975811";
import { C as _$$C } from "../905/549861";
import { i1 } from "../905/982943";
let M = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9.75 9a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m.25 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2-5.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5",
      clipRule: "evenodd"
    })
  });
});
let j = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M11.25 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M7.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0 3.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M7.5 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m3-5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.75-9.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.75-6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m.75 5.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.5 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1",
      clipRule: "evenodd"
    })
  });
});
var Z = $;
let ei = "ui3_effects_settings_picker--scrubbableInput--PrsGY raw_components--borderFocusWithin--BaipZ";
let en = "ui3_effects_settings_picker--controlTwoSegments--vUz-T";
let er = "ui3_effects_settings_picker--colorInput--jo6kn";
let ea = "ui3_effects_settings_picker--input--jCx8o";
let es = "ui3_effects_settings_picker--inactiveLabelXY--CdZig ui3_effects_settings_picker--_inactiveLabel--0JGF0";
let eo = "ui3_effects_settings_picker--paintWithOpacityContainer--BauOe";
let el = "ui3_effects_settings_picker--modalSection--N81Be";
function ed({
  children: e,
  fieldName: t,
  inputClassName: i,
  effect: a,
  onChange: s,
  recordingKey: o
}) {
  let l = (t && extractVariableAliasOrFontStyle(a[t])) ?? void 0;
  let c = useDispatch<AppDispatch>();
  let u = useCallback(async e => {
    if (t && e) {
      let i = await c(loadSharedVariableThunk(e));
      let n = convertVariableIdToKiwi(i);
      assertNotNullish(n);
      let r = {
        resolvedDataType: "colorVar" === t ? "COLOR" : "FLOAT",
        dataType: "ALIAS",
        value: {
          alias: n
        }
      };
      executeWithDSAAction(StyleVariableOperation.VARIABLE_ATTACH, CopyPasteType.DIRECT, () => {
        s({
          ...a,
          [t]: r
        }, yesNoTrackingEnum.YES);
      });
      oz(`EFFECT_${t.slice(0, -3).toUpperCase()}`, r);
    } else t && executeWithDSAAction(StyleVariableOperation.VARIABLE_DETACH, CopyPasteType.DIRECT, () => {
      s({
        ...a,
        [t]: void 0
      }, yesNoTrackingEnum.YES);
    });
  }, [c, s, a, t]);
  let p = useRef(null);
  return jsx(ControlledVariablePickerProvider, {
    boundVariableId: l,
    resolvedType: VariableResolvedDataType.FLOAT,
    onVariableSelected: u,
    children: jsx(FormattedInputWithWrapper, {
      inputClassName: i,
      currentFieldValue: l,
      hasBindingContextMenu: !0,
      inputRef: p,
      recordingKey: o,
      children: jsx(Fragment, {
        children: Children.map(e, e => {
          let t = Z()(e.props.className, "ui3_effects_settings_picker--variableLabel--VART0");
          return cloneElement(e, {
            className: t,
            isTokenizable: !0,
            noBorderOnHover: !0,
            forwardedRef: p
          });
        })
      })
    })
  });
}
function ec() {
  return !getFeatureFlags().ce_il_lina;
}
function eu(e) {
  let {
    onStartRadiusChange,
    isProgressiveBlur
  } = e;
  let r = e => {
    isProgressiveBlur && AppStateTsApi?.setProgressiveBlurHandleTypeSelection(e);
  };
  let a = () => {
    isProgressiveBlur && AppStateTsApi?.setProgressiveBlurHandleTypeSelection(ProcessStage.NONE);
  };
  let s = jsx("div", {
    onFocus: () => r(ProcessStage.START),
    onBlur: a,
    onMouseEnter: () => r(ProcessStage.START),
    onMouseLeave: a,
    children: jsx(yw, {
      ariaLabel: getI18nString("properties_panel.effects.blur.start_blur"),
      bigStep: e.bigNudgeAmount,
      dataTooltip: getI18nString("properties_panel.effects.blur.start_blur"),
      fullWidth: !0,
      icon: jsx(M, {}),
      inputMax: isProgressiveBlur ? aO : void 0,
      min: 0,
      onValueChange: onStartRadiusChange,
      rowLabel: isProgressiveBlur ? getI18nString("properties_panel.effects.blur.start_blur") : getI18nString("fullscreen.properties_panel.effects.blur"),
      sliderMax: aO,
      step: e.smallNudgeAmount,
      value: e.effect.startRadius || 0
    })
  });
  let o = jsx("div", {
    onFocus: () => r(ProcessStage.END),
    onBlur: a,
    onMouseEnter: e => r(ProcessStage.END),
    onMouseLeave: a,
    children: jsx(yw, {
      ariaLabel: isProgressiveBlur ? getI18nString("properties_panel.effects.blur.end_blur") : getI18nString("properties_panel.effects.blur_radius"),
      bigStep: e.bigNudgeAmount,
      dataTooltip: isProgressiveBlur ? getI18nString("properties_panel.effects.blur.end_blur") : getI18nString("properties_panel.effects.blur_radius"),
      fullWidth: !0,
      icon: jsx(M, {}),
      inputMax: isProgressiveBlur ? aO : void 0,
      min: 0,
      onValueChange: e.onRadiusChange,
      rowLabel: isProgressiveBlur ? getI18nString("properties_panel.effects.blur.end_blur") : getI18nString("fullscreen.properties_panel.effects.blur"),
      sliderMax: aO,
      step: e.smallNudgeAmount,
      value: e.effect.radius || 0
    })
  });
  return jsxs("div", {
    className: "ui3_effects_settings_picker--blurSlidersContainer--tiQ0n ui3_effects_settings_picker--slidersContainer--C3A2z",
    children: [isProgressiveBlur ? s : null, o]
  });
}
function ep(e) {
  let {
    onStartRadiusChange,
    isProgressiveBlur
  } = e;
  let r = jsx(cS, {
    label: getI18nString("properties_panel.effects.blur.start_blur"),
    input: jsx(LengthInput, {
      autoFocus: !0,
      bigNudgeAmount: e.bigNudgeAmount,
      "data-tooltip": getI18nString("properties_panel.effects.blur.start_blur"),
      "data-tooltip-type": KindEnum.TEXT,
      dispatch: e.dispatch,
      inputClassName: ea,
      max: aO,
      min: 0,
      onValueChange: onStartRadiusChange,
      recordingKey: generateRecordingKey(e, "startBlurInput"),
      resolution: 0.1,
      scrubMultiplier: 0.1,
      smallNudgeAmount: e.smallNudgeAmount,
      tooltipForScreenReadersOnly: !0,
      value: e.effect.startRadius || 0,
      wheelMultiplier: 4,
      children: jsx("div", {
        className: es,
        children: jsx(M, {})
      })
    })
  });
  return jsxs("div", {
    className: "ui3_effects_settings_picker--blurScrubbableInputsContainer--lSidt ui3_effects_settings_picker--scrubbableInputsContainer--B2I7g",
    children: [isProgressiveBlur ? r : null, jsx(cS, {
      label: isProgressiveBlur ? getI18nString("properties_panel.effects.blur.end_blur") : getI18nString("fullscreen.properties_panel.effects.blur"),
      input: jsx(ed, {
        recordingKey: generateRecordingKey(e, "radiusVar"),
        fieldName: "radiusVar",
        effect: e.effect,
        onChange: e.onChange,
        inputClassName: ei,
        children: jsx(LengthInput, {
          autoFocus: !0,
          bigNudgeAmount: e.bigNudgeAmount,
          "data-tooltip": isProgressiveBlur ? getI18nString("properties_panel.effects.blur.end_blur") : getI18nString("properties_panel.effects.blur_radius"),
          "data-tooltip-type": KindEnum.TEXT,
          dispatch: e.dispatch,
          inputClassName: ea,
          max: isProgressiveBlur ? aO : void 0,
          min: 0,
          onValueChange: e.onRadiusChange,
          recordingKey: generateRecordingKey(e, "blurInput"),
          resolution: 0.1,
          scrubMultiplier: 0.1,
          smallNudgeAmount: e.smallNudgeAmount,
          tooltipForScreenReadersOnly: !0,
          value: e.effect.radius,
          wheelMultiplier: 4,
          children: jsx("div", {
            className: es,
            children: jsx(M, {})
          })
        })
      })
    })]
  });
}
function em(e) {
  let t = e.effect;
  let {
    showIllustrationSliderInputs
  } = useContext(_$$Q2);
  let a = (t, i) => {
    let n = {
      ...e.effect,
      startRadius: t
    };
    e.onChange(n, i);
  };
  let s = "PROGRESSIVE" === t.blurOpType;
  let o = showIllustrationSliderInputs ? jsx(eu, {
    ...e,
    onStartRadiusChange: a,
    isProgressiveBlur: s
  }) : jsx(ep, {
    ...e,
    onStartRadiusChange: a,
    isProgressiveBlur: s
  });
  return jsxs(Fragment, {
    children: [jsxs(Id, {
      children: [jsx(Ad, {
        appendedClassName: en,
        label: null,
        input: jsxs(bL, {
          value: t.blurOpType || "NORMAL",
          onChange: i => {
            let n = "PROGRESSIVE" !== e.effect.blurOpType && "PROGRESSIVE" === i;
            let r = "PROGRESSIVE" === e.effect.blurOpType && "PROGRESSIVE" !== i;
            (n || r) && analyticsEventManager.trackDefinedEvent("illustration.web_progressive_blur_toggle", {
              changedToProgressive: n,
              blurType: "FOREGROUND_BLUR" === t.type ? "layer" : "background",
              productType: mapEditorTypeToProductType(debugState.getState().selectedView.editorType)
            });
            let a = UF(e.effect, t.type, i);
            e.onChange({
              ...t,
              blurOpType: i,
              ...a
            }, yesNoTrackingEnum.YES);
          },
          legend: jsx(Legend, {
            children: renderI18nText("properties_panel.effects.blur.type")
          }),
          children: [jsx(RT, {
            value: "NORMAL",
            label: getI18nString("properties_panel.effects.blur.type.normal")
          }), jsx(RT, {
            value: "PROGRESSIVE",
            label: getI18nString("properties_panel.effects.blur.type.progressive")
          })]
        })
      }), o]
    }), jsx(rf, {
      variableScope: PropertyScope.EFFECT_FLOAT
    })]
  });
}
function eh(e) {
  let t = (t, i) => {
    let n = {
      ...e.effect,
      radius: t
    };
    e.onChange(n, i);
  };
  return ec() ? jsx(em, {
    ...e,
    onRadiusChange: t
  }) : jsxs(Fragment, {
    children: [jsx(Id, {
      children: jsx(cS, {
        label: renderI18nText("fullscreen.properties_panel.effects.blur"),
        input: jsx(ed, {
          recordingKey: generateRecordingKey(e, "radiusVar"),
          fieldName: "radiusVar",
          effect: e.effect,
          onChange: e.onChange,
          inputClassName: ei,
          children: jsx(LengthInput, {
            autoFocus: !0,
            bigNudgeAmount: e.bigNudgeAmount,
            "data-tooltip": getI18nString("properties_panel.effects.blur_radius"),
            "data-tooltip-type": KindEnum.TEXT,
            dispatch: e.dispatch,
            inputClassName: ea,
            min: 0,
            onValueChange: t,
            recordingKey: generateRecordingKey(e, "blurInput"),
            resolution: 0.1,
            scrubMultiplier: 0.1,
            smallNudgeAmount: e.smallNudgeAmount,
            tooltipForScreenReadersOnly: !0,
            value: e.effect.radius,
            wheelMultiplier: 4,
            children: jsx("div", {
              className: es,
              children: jsx(j, {})
            })
          })
        })
      })
    }), jsx(rf, {
      variableScope: PropertyScope.EFFECT_FLOAT
    })]
  });
}
var ex = eE;
let eC = new qj();
function eT(e, t, i) {
  return e === t || "allowed" === i[e];
}
function ek(e, t, i) {
  return Bf().map(r => jsx(_$$c$, {
    value: r,
    disabled: !eT(r, e, t),
    recordingKey: generateRecordingKey(i, r),
    tooltip: function (e, t, i) {
      if (e !== t) switch (i[t]) {
        case "allowed":
          return;
        case "disallowedForGlassType":
          return getI18nString("properties_panel.effects.glass.non_frame_warning");
        case "disallowedForCount":
          return getI18nString("properties_panel.effects.already_applied");
      }
    }(e, r, t),
    tooltipType: KindEnum.TEXT,
    "data-tooltip-show-left": !0,
    "data-tooltip-offset-x": -8
  }, `${r}`));
}
function eR(e) {
  return getFeatureFlags().eu_fpl_migration_styles_picker_selects ? jsx(eP, {
    ...e
  }) : jsx(eN, {
    ...e
  });
}
function eN(e) {
  let {
    allowedEffects,
    currentEffectType,
    ...r
  } = e;
  return jsx(l6, {
    ...r,
    children: ek(e.currentEffectType, e.allowedEffects, e.recordingKey)
  });
}
function eP(e) {
  let {
    allowedEffects,
    currentEffectType,
    onChange,
    recordingKey,
    className,
    enablePreview,
    ...l
  } = e;
  let {
    valueBeforePreview,
    updatePreview,
    onSubmit,
    clearPreview
  } = _$$g({
    id: "effect-type-dropdown",
    property: currentEffectType,
    onChange,
    enablePreview
  });
  let m = ex()(e => {
    if (!e || !eT(e, currentEffectType, allowedEffects)) {
      clearPreview();
      return;
    }
    updatePreview(e);
  }, 50);
  let h = useSetupPlayback(recordingKey, "focus-option", e => {
    m(e);
  }, {
    record: e => ({
      value: e
    })
  });
  return jsxs(_$$bL2, {
    ...l,
    value: String(valueBeforePreview ?? currentEffectType),
    onChange: e => {
      onSubmit(e);
    },
    onSelectionChange: h,
    onOpenChange: e => {
      e || clearPreview();
    },
    recordingKey,
    children: [jsx(l9, {
      width: "fill",
      label: jsx(HiddenLabel, {
        children: eC.format(currentEffectType)
      })
    }), jsx(mc, {
      children: eO(currentEffectType, allowedEffects)
    })]
  });
}
function eO(e, t) {
  return Bf().map(i => jsx(c$, {
    value: i,
    disabled: !eT(i, e, t),
    children: eC.format(i)
  }, `${i}`));
}
class eB extends _$$R {
  constructor({
    mixedMathHandler: e,
    min: t = 0,
    max: i = 100,
    decimals: n = 0,
    hidePercentSign: r = !1
  } = {}) {
    super({
      nudge: 1,
      bigNudge: 10,
      minimumFractionDigits: n,
      maximumFractionDigits: n,
      mixedMathHandler: e,
      min: t,
      max: i
    });
    this.allowedUnits = "%|px";
    this.hidePercentSign = r;
  }
  parse(e, t) {
    let i = super.parse(e, t);
    return clamp(i, this.min ?? 0, this.max ?? 100);
  }
  formatUnmixed(e) {
    let t = clamp(e, this.min ?? 0, this.max ?? 100);
    let i = super.formatUnmixed(t);
    return this.hidePercentSign ? i : `${i}%`;
  }
}
let eH = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M15.447 6.168A1 1 0 0 1 17.002 7v2.55a2.501 2.501 0 0 1 0 4.9v2.552a1 1 0 0 1-1.555.832L12.7 16.002H7.002a1 1 0 0 1-1-1v-2.003L6 13a1 1 0 0 1 0-2h.002V9.002a1 1 0 0 1 1-1h5.692zm-2.445 2.83v6.003l3 2.001v-2.553H16v-1.037h.002v-2.826H16V9.55l.002-.001V7zm-6 6.004H12v-6H7.002zM10.5 13a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm6.502.411a1.498 1.498 0 0 0 0-2.823z"
    })
  });
});
let eY = {
  dial: e => [{
    gridRow: "x19bwqal",
    gridRowStart: null,
    gridRowEnd: null,
    gridColumn: "x1osaytk",
    gridColumnStart: null,
    gridColumnEnd: null,
    position: "x1n2onr6",
    display: "x78zum5",
    justifyContent: "xl56j7k",
    alignItems: "x1cy8zhl",
    width: "xh8yej3",
    height: "x5yr21d",
    borderRadius: "xorixrz",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    transform: "x1uosm7l",
    $$css: !0
  }, {
    "--transform": `rotate(${e}deg)`
  }]
};
function eq({
  angle: e,
  intensity: t,
  onAngleChange: i,
  step: a = 1
}) {
  let s = useRef(null);
  let {
    handleDragStart,
    handleDrag,
    handleDragEnd
  } = function ({
    onAngleChange: e,
    step: t = 1,
    containerRef: i
  }) {
    let n = useRef(null);
    let a = useRef(null);
    return {
      handleDragStart: () => {
        i.current && (n.current = i.current.getBoundingClientRect());
      },
      handleDrag: i => {
        let r = eJ(i, n.current, t);
        r !== a.current && (a.current = r, e(r, yesNoTrackingEnum.NO));
      },
      handleDragEnd: i => {
        let r = eJ(i, n.current, t);
        r !== a.current && (a.current = r, e(r, yesNoTrackingEnum.YES));
        a.current = null;
        n.current = null;
      },
      boundingRectRef: n,
      lastAngleRef: a
    };
  }({
    onAngleChange: i,
    step: a,
    containerRef: s
  });
  let [c, u] = setupDragHandler({
    onDragStart: handleDragStart,
    onDrag: handleDrag,
    onDragEnd: handleDragEnd
  });
  return jsxs("div", {
    ref: s,
    ...u(),
    className: "xrvj5dj xn3lufb x1ku5rj1 x1y5e3q9 x15yg21f xnnlda6 x2lah0s x1v8gsql x2jppxd xb3r6kr",
    "aria-hidden": "true",
    "data-dragging": c,
    "data-testid": "light-angle-control",
    children: [jsxs("div", {
      ...stylex.props(eY.dial(e)),
      "data-testid": "light-angle-dial",
      children: [jsx("div", {
        className: "x1sy10c2",
        children: jsx(eZ, {
          intensity: t
        })
      }), jsx(e$, {})]
    }), jsx(eX, {})]
  });
}
function e$() {
  return jsx("div", {
    className: "x10l6tqk x10a8y8t xdd4er5 x1y332i5 x1aue78i",
    "data-light-grabbable": !0,
    children: jsx(eH, {
      className: "xq77vm1 x8x9d4c xack27t"
    })
  });
}
function eZ({
  intensity: e = 0
}) {
  let t = useTheme();
  let [i, a, s, o] = [useId(), useId(), useId(), useId()];
  (e < 0 || e > 1) && logError("GlassEffectsSettings", "Light intensity value outside valid range", {
    component: "LightIntensityIndicator",
    intensity: e,
    expectedRange: "[0,1]",
    actualValue: e
  });
  let l = clamp(e, 0, 1) ** 0.6;
  let d = "dark" === t.color ? 0.2 : 1;
  let c = (0.1 + 0.9 * l) * d;
  return jsxs("svg", {
    width: "56",
    height: "38",
    viewBox: "0 0 56 38",
    fill: "none",
    "data-testid": "light-intensity-indicator",
    children: [jsx("path", {
      d: "M28.8503 52.1085L0.608784 23.8664L15.8506 8.6246C19.9893 4.48594 22.4241 0.878192 28.7956 0.876273C35.0738 0.874381 37.6099 4.34926 41.706 8.44557L57.1094 23.8494L28.8503 52.1085Z",
      fill: `url(#${i})`
    }), jsx("path", {
      d: "M28.8503 52.1085L0.608784 23.8664L15.8506 8.6246C19.9893 4.48594 22.4241 0.878192 28.7956 0.876273C35.0738 0.874381 37.6099 4.34926 41.706 8.44557L57.1094 23.8494L28.8503 52.1085Z",
      fill: `url(#${a})`
    }), jsx("path", {
      d: "M28.8503 52.1085L0.608784 23.8664L15.8506 8.6246C19.9893 4.48594 22.4241 0.878192 28.7956 0.876273C35.0738 0.874381 37.6099 4.34926 41.706 8.44557L57.1094 23.8494L28.8503 52.1085Z",
      fill: `url(#${s})`
    }), jsx("path", {
      d: "M28.7957 1.37568C34.823 1.37386 37.2028 4.64916 41.3524 8.79892L56.4026 23.8491L28.8503 51.4014L1.3159 23.8671L16.2045 8.97846C20.4085 4.77444 22.6793 1.37753 28.7957 1.37568Z",
      stroke: `url(#${o})`,
      strokeOpacity: 0.4 * c
    }), jsxs("defs", {
      children: [jsxs("radialGradient", {
        id: i,
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(28.7926 7.13426) rotate(90.0173) scale(28.3295 31.3649)",
        children: [jsx("stop", {
          stopColor: "white",
          stopOpacity: (0.3 + 0.7 * l) * d
        }), jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), jsxs("radialGradient", {
        id: a,
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(28.7926 7.13427) rotate(90.0173) scale(30.9706 34.289)",
        children: [jsx("stop", {
          stopColor: "white",
          stopOpacity: 0.8 * c
        }), jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), jsxs("linearGradient", {
        id: s,
        x1: "28.7924",
        y1: "7.79289",
        x2: "28.7996",
        y2: "31.6432",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopColor: "white",
          stopOpacity: 0.6 * c
        }), jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), jsxs("linearGradient", {
        id: o,
        x1: "28.7932",
        y1: "5.24066",
        x2: "28.7955",
        y2: "12.9741",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopColor: "white",
          stopOpacity: c
        }), jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      })]
    })]
  });
}
function eX() {
  return jsx("div", {
    className: "x19bwqal x1osaytk x1n2onr6",
    children: jsx("div", {
      className: "xqsu5wm x1fy69yl x1cum3z5 x1q4tsbq x9f619"
    })
  });
}
function eQ(e, t) {
  let i = 45 * Math.round(e / 45);
  let n = Math.abs(e - i);
  return Math.min(n, 360 - n) <= t ? i % 360 : e;
}
function eJ(e, t, i) {
  var n;
  if (!t) return 0;
  let r = t.left + t.width / 2;
  let a = t.top + t.height / 2;
  let s = (n = 180 * Math.atan2(e.clientX - r, -(e.clientY - a)) / Math.PI) < 0 ? n + 360 : n;
  let o = roundToMultiple(s, i);
  return e.ctrlKey ? o : e.shiftKey ? eQ(o, 45) : eQ(o, 4);
}
function e0(e) {
  let t = [{
    field: e => 100 * (e.refractionIntensity || 0),
    setValue: (e, t) => ({
      ...e,
      refractionIntensity: t / 100
    }),
    label: getI18nString("properties_panel.effects.glass.refraction"),
    min: 0,
    max: 100,
    step: 1
  }, {
    field: e => e.refractionRadius,
    setValue: (e, t) => ({
      ...e,
      refractionRadius: t
    }),
    label: getI18nString("properties_panel.effects.glass.depth"),
    min: 1,
    max: 100,
    step: 1
  }, {
    field: e => 100 * (e.chromaticAberration || 0),
    setValue: (e, t) => ({
      ...e,
      chromaticAberration: t / 100
    }),
    label: getI18nString("properties_panel.effects.glass.chromatic_aberration"),
    min: 0,
    max: 100,
    step: 1
  }, {
    field: e => e.radius,
    setValue: (e, t) => ({
      ...e,
      radius: t
    }),
    label: getI18nString("properties_panel.effects.glass.frost"),
    min: 0,
    max: 100,
    step: 1
  }];
  return jsx(Fragment, {
    children: jsxs(Id, {
      children: [jsx(e5, {
        children: jsx(e1, {
          ...e
        })
      }), jsx(e5, {
        children: t.map((t, i) => jsx(li, {
          ariaLabel: t.label,
          bigStep: e.bigNudgeAmount,
          dataTooltip: t.label,
          fullWidth: !0,
          inputMax: t.max,
          min: t.min,
          onValueChange: (i, n) => e.onChange(t.setValue(e.effect, i), n),
          rowLabel: t.label,
          rowReversed: !0,
          scrubbableVariant: "narrow",
          sliderMax: t.max,
          step: t.step,
          transformType: ir.LINEAR,
          value: t.field(e.effect) || 0
        }, i))
      })]
    })
  });
}
function e1(e) {
  let t = getI18nString("properties_panel.effects.glass.specular_angle");
  return jsx(Zo, {
    label: getI18nString("properties_panel.effects.glass.light"),
    input: jsxs("div", {
      className: "x78zum5 x1q0g3np x1rjybxy",
      children: [jsx(eq, {
        angle: e.effect.specularAngle || 0,
        intensity: e.effect.specularIntensity || 0,
        onAngleChange: (t, i) => {
          e.onChange({
            ...e.effect,
            specularAngle: t
          }, i);
        }
      }), jsxs("div", {
        className: "x78zum5 x1iyjqo2 xdt5ytf x1rjybxy",
        children: [jsx(_$$Z2, {
          "aria-label": t,
          "data-tooltip": t,
          "data-tooltip-type": KindEnum.TEXT,
          incrementDirection: yb.Clockwise,
          onChange: (t, i) => {
            e.onChange({
              ...e.effect,
              specularAngle: t < 0 ? t + 360 : t
            }, i.commit ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO);
          },
          recordingKey: generateRecordingKey(e, "lightAngle"),
          value: (e.effect.specularAngle || 0) > 180 ? (e.effect.specularAngle || 0) - 360 : e.effect.specularAngle || 0
        }), jsx(e2, {
          effect: e.effect,
          recordingKey: generateRecordingKey(e, "lightIntensity"),
          onChange: e.onChange
        })]
      })]
    })
  });
}
function e2(e) {
  let t = useMemo(() => new eB({
    min: 0,
    max: 100
  }), []);
  let i = getI18nString("properties_panel.effects.glass.specular_intensity");
  return jsx(_$$N, {
    "aria-label": i,
    "data-tooltip": i,
    "data-tooltip-type": KindEnum.TEXT,
    value: 100 * (e.effect.specularIntensity || 0),
    onChange: (t, i) => e.onChange({
      ...e.effect,
      specularIntensity: t / 100
    }, i.commit ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO),
    icon: jsx(_$$Z, {}),
    formatter: t,
    recordingKey: e.recordingKey
  });
}
function e5(e) {
  return jsx("div", {
    className: Z()(el, "x78zum5 xdt5ytf"),
    children: e.children
  });
}
let e6 = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-2.464-4.536A1 1 0 1 0 16.95 7.05a1 1 0 0 0-1.414 1.414m0 8.485a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1.05 3.95a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.413m0-8.485A1 1 0 1 1 8.466 7.05 1 1 0 0 1 7.05 8.465M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
      clipRule: "evenodd"
    })
  });
});
function e7(e) {
  let {
    onNoiseSizeChange,
    onRadiusChange
  } = e;
  let r = jsx(yw, {
    ariaLabel: getI18nString("properties_panel.effects.texture.noise_size"),
    bigStep: e.bigNudgeAmount,
    dataTooltip: getI18nString("properties_panel.effects.texture.noise_size"),
    fullWidth: !0,
    icon: jsx(_$$m, {}),
    inputMax: ml,
    min: 0.01,
    onValueChange: onNoiseSizeChange,
    rowLabel: getI18nString("properties_panel.effects.texture.noise_size"),
    sliderMax: ml,
    step: e.smallNudgeAmount,
    transformType: ir.EXPONENTIAL,
    value: e.effect.noiseSize?.x ?? 0
  });
  let a = jsx(yw, {
    ariaLabel: getI18nString("properties_panel.effects.texture.radius"),
    bigStep: e.bigNudgeAmount,
    dataTooltip: getI18nString("properties_panel.effects.texture.radius"),
    fullWidth: !0,
    icon: jsx(e6, {}),
    inputMax: aO,
    min: 0.01,
    onValueChange: onRadiusChange,
    rowLabel: getI18nString("properties_panel.effects.texture.radius"),
    sliderMax: aO,
    step: e.smallNudgeAmount,
    transformType: ir.EXPONENTIAL,
    value: e.effect.radius || 0
  });
  return jsxs("div", {
    className: "ui3_effects_settings_picker--grainSlidersContainer--qITow ui3_effects_settings_picker--slidersContainer--C3A2z",
    children: [r, a]
  });
}
function e8(e) {
  let {
    onNoiseSizeChange,
    onRadiusChange
  } = e;
  let r = jsx(cS, {
    label: renderI18nText("properties_panel.effects.texture.noise_size"),
    input: jsx(LengthInput, {
      autoFocus: !0,
      bigNudgeAmount: e.bigNudgeAmount,
      "data-tooltip": getI18nString("properties_panel.effects.texture.noise_size"),
      "data-tooltip-type": KindEnum.TEXT,
      dispatch: e.dispatch,
      inputClassName: ea,
      max: ml,
      min: 0,
      onValueChange: onNoiseSizeChange,
      recordingKey: generateRecordingKey(e, "noiseSize"),
      resolution: 0.1,
      scrubMultiplier: 0.1,
      smallNudgeAmount: e.smallNudgeAmount,
      tooltipForScreenReadersOnly: !0,
      value: e.effect.noiseSize?.x ?? 0,
      wheelMultiplier: 4,
      children: jsx("div", {
        className: es,
        children: jsx(_$$m, {})
      })
    })
  });
  let a = jsx(cS, {
    label: renderI18nText("properties_panel.effects.texture.radius"),
    input: jsx(LengthInput, {
      autoFocus: !0,
      bigNudgeAmount: e.bigNudgeAmount,
      "data-tooltip": getI18nString("properties_panel.effects.texture.radius"),
      "data-tooltip-type": KindEnum.TEXT,
      dispatch: e.dispatch,
      inputClassName: ea,
      max: aO,
      min: 0,
      onValueChange: onRadiusChange,
      recordingKey: generateRecordingKey(e, "textureRadius"),
      resolution: 0.1,
      scrubMultiplier: 0.1,
      smallNudgeAmount: e.smallNudgeAmount,
      tooltipForScreenReadersOnly: !0,
      value: e.effect.radius,
      wheelMultiplier: 4,
      children: jsx("div", {
        className: es,
        children: jsx(e6, {})
      })
    })
  });
  return jsxs("div", {
    className: "ui3_effects_settings_picker--grainScrubbableInputsContainer--KEUoD ui3_effects_settings_picker--scrubbableInputsContainer--B2I7g",
    children: [r, a]
  });
}
function e9(e) {
  let t = (t, i) => {
    let n = {
      ...e.effect,
      noiseSize: {
        x: t,
        y: t
      }
    };
    e.onChange(n, i);
  };
  let i = (t, i) => {
    let n = {
      ...e.effect,
      radius: t
    };
    e.onChange(n, i);
  };
  let {
    showIllustrationSliderInputs
  } = useContext(_$$Q2);
  return jsxs(Id, {
    children: [showIllustrationSliderInputs ? jsx(e7, {
      ...e,
      onNoiseSizeChange: t,
      onRadiusChange: i
    }) : jsx(e8, {
      ...e,
      onNoiseSizeChange: t,
      onRadiusChange: i
    }), jsx("div", {
      className: el,
      children: jsx("div", {
        className: "ui3_effects_settings_picker--effectPropertyCheckbox--IhyQI",
        children: jsx(Checkbox, {
          checked: e.effect.clipToShape,
          onChange: t => {
            let i = {
              ...e.effect,
              clipToShape: t
            };
            e.onChange(i, yesNoTrackingEnum.YES);
          },
          label: jsx(Label, {
            children: getI18nString("properties_panel.effects.texture.clip_to_shape")
          })
        })
      })
    })]
  });
}
let te = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M8 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4m8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-8 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3.5.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-4 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 11m4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5M8 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3.5.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1z"
    })
  });
});
function ta(e) {
  let t = useDispatch<AppDispatch>();
  let i = t => {
    t.stopPropagation();
    e.togglePicker();
  };
  let r = e => {
    e.stopPropagation();
  };
  return jsxs("div", {
    className: (() => {
      let t = e.paint.colorVar?.value?.alias;
      return t ? convertKiwiToVariableIdString(t) : null;
    })() ? BT : wM,
    children: [jsx(_$$D2, {
      paint: e.paint,
      onMouseDown: i,
      recordingKey: generateRecordingKey(e, "chit"),
      className: x7
    }), jsx(So, {
      appendedColorInputClassname: e.appendedColorInputClassName,
      noBorderOnFocus: !0,
      onBlur: e.onInputBlur,
      onColorChange: t => {
        let i = {
          ...e.paint,
          color: t
        };
        nearlyEqual(t.a, e.paint.opacity ?? 1) || (i.opacity = t.a, i.visible = !0);
        e.onChange(i);
      },
      onFocus: e.onInputFocus,
      onMouseDown: r,
      onTypeMouseDown: i,
      paint: e.paint,
      recordingKey: generateRecordingKey(e, "value"),
      visible: !0
    }), jsx(OpacityInput, {
      className: Z()("paint_with_opacity--opacityInputContainer--x9eKU", n1),
      dispatch: t,
      inputClassName: "paint_with_opacity--opacityInput--SKlru",
      noBorderOnFocus: !0,
      noLeftBorder: !0,
      onBlur: e.onInputBlur,
      onFocus: e.onInputFocus,
      onMouseDown: r,
      onScrubBegin: e.onScrubBegin,
      onScrubEnd: e.onScrubEnd,
      onValueChange: (t, i) => {
        e.onChange({
          ...e.paint,
          opacity: t,
          visible: !0
        }, i);
      },
      recordingKey: generateRecordingKey(e, "opacity"),
      value: e.paint.opacity
    })]
  });
}
function ts(e) {
  let {
    onNoiseSizeChange,
    onDensityChange,
    onOpacityChange,
    chitRowRef,
    primaryColorInput,
    secondaryColorInput
  } = e;
  let l = jsx(yw, {
    ariaLabel: getI18nString("properties_panel.noise.noise_size"),
    bigStep: e.bigNudgeAmount,
    dataTooltip: getI18nString("properties_panel.noise.noise_size"),
    fullWidth: !0,
    icon: jsx(_$$m, {}),
    inputMax: ml,
    min: 0.01,
    onValueChange: onNoiseSizeChange,
    rowLabel: getI18nString("properties_panel.noise.noise_size"),
    sliderMax: ml,
    step: e.smallNudgeAmount,
    transformType: ir.EXPONENTIAL,
    value: e.effect.noiseSize?.x ?? 0
  });
  let d = jsx(iQ, {
    ariaLabel: getI18nString("properties_panel.effects.noise.density"),
    dataTooltip: getI18nString("properties_panel.effects.noise.density"),
    fullWidth: !0,
    icon: jsx(te, {}),
    onValueChange: onDensityChange,
    rowLabel: getI18nString("properties_panel.effects.noise.density"),
    value: e.effect.density ?? 0
  });
  let c = jsx(iQ, {
    ariaLabel: getI18nString("properties_panel.effects.noise.opacity"),
    dataTooltip: getI18nString("properties_panel.effects.noise.opacity"),
    fullWidth: !0,
    icon: jsx(_$$N2, {}),
    onValueChange: onOpacityChange,
    rowLabel: getI18nString("properties_panel.effects.noise.opacity"),
    value: e.effect.opacity ?? 0
  });
  return jsxs("div", {
    className: "ui3_effects_settings_picker--noiseSlidersContainer--5QUKV ui3_effects_settings_picker--slidersContainer--C3A2z",
    children: [l, d, "MULTITONE" === e.effect.noiseType && c, (e => {
      let t = "MONOTONE" === e;
      let i = "DUOTONE" === e;
      return t || i ? jsxs("div", {
        className: "ui3_effects_settings_picker--illustrationColorContainer--WVM8z",
        children: [(t || i) && jsx(I6, {
          ref: chitRowRef,
          rowLabel: getI18nString("properties_panel.effects.noise.color", {
            numColors: t ? 1 : 2
          }),
          input: primaryColorInput
        }), i && jsx(I6, {
          rowLabel: null,
          input: secondaryColorInput
        })]
      }) : null;
    })(e.effect.noiseType ?? "MONOTONE")]
  });
}
function to(e) {
  let {
    onNoiseSizeChange,
    onDensityChange,
    onOpacityChange,
    primaryColorInput,
    secondaryColorInput,
    chitRowRef
  } = e;
  let l = jsx(cS, {
    label: renderI18nText("properties_panel.noise.noise_size"),
    input: jsx(LengthInput, {
      autoFocus: !0,
      bigNudgeAmount: e.bigNudgeAmount,
      "data-tooltip": getI18nString("properties_panel.noise.noise_size"),
      "data-tooltip-type": KindEnum.TEXT,
      dispatch: e.dispatch,
      inputClassName: ea,
      max: ml,
      onValueChange: onNoiseSizeChange,
      recordingKey: generateRecordingKey(e, "noiseSize"),
      resolution: 0.1,
      scrubMultiplier: 0.1,
      smallNudgeAmount: e.smallNudgeAmount,
      tooltipForScreenReadersOnly: !0,
      value: e.effect.noiseSize?.x ?? 0,
      wheelMultiplier: 4,
      children: jsx("div", {
        className: es,
        children: jsx(_$$m, {})
      })
    })
  });
  let d = jsx(cS, {
    label: renderI18nText("properties_panel.effects.noise.density"),
    input: jsx(PercentageBaseInput, {
      autoFocus: !0,
      bigNudgeAmount: e.bigNudgeAmount,
      "data-tooltip": getI18nString("properties_panel.effects.noise.density"),
      "data-tooltip-type": KindEnum.TEXT,
      dispatch: e.dispatch,
      inputClassName: ea,
      onValueChange: onDensityChange,
      recordingKey: generateRecordingKey(e, "density"),
      smallNudgeAmount: e.smallNudgeAmount,
      tooltipForScreenReadersOnly: !0,
      value: e.effect.density ?? 0,
      wheelMultiplier: 4,
      children: jsx("div", {
        className: es,
        children: jsx(te, {})
      })
    })
  });
  let c = jsx(cS, {
    label: renderI18nText("properties_panel.effects.noise.opacity"),
    input: jsx(PercentageBaseInput, {
      autoFocus: !0,
      bigNudgeAmount: e.bigNudgeAmount,
      "data-tooltip": getI18nString("properties_panel.effects.noise.opacity"),
      "data-tooltip-type": KindEnum.TEXT,
      dispatch: e.dispatch,
      inputClassName: ea,
      onValueChange: onOpacityChange,
      recordingKey: generateRecordingKey(e, "opacity"),
      smallNudgeAmount: e.smallNudgeAmount,
      tooltipForScreenReadersOnly: !0,
      value: e.effect.opacity ?? 0,
      wheelMultiplier: 4,
      children: jsx("div", {
        className: es,
        children: jsx(_$$N2, {})
      })
    })
  });
  return jsxs("div", {
    className: "ui3_effects_settings_picker--noiseScrubbableInputsContainer--w3HLj ui3_effects_settings_picker--scrubbableInputsContainer--B2I7g",
    children: [l, d, "MULTITONE" === e.effect.noiseType && c, (e => {
      let t = "MONOTONE" === e;
      let i = "DUOTONE" === e;
      return t || i ? jsxs("div", {
        className: "ui3_effects_settings_picker--colorContainer--Mmsr9",
        children: [(t || i) && jsx(cS, {
          ref: chitRowRef,
          label: renderI18nText("properties_panel.effects.noise.color", {
            numColors: t ? 1 : 2
          }),
          input: primaryColorInput
        }), i && jsx(cS, {
          label: null,
          input: secondaryColorInput
        })]
      }) : null;
    })(e.effect.noiseType ?? "MONOTONE")]
  });
}
function tl(e) {
  let [t, i] = useState(AccessLevel.NONE);
  let [a, s] = useState(new Point(0, 0));
  let {
    showIllustrationSliderInputs
  } = useContext(_$$Q2);
  let l = useRef(null);
  useEffect(() => {
    AppStateTsApi?.setDuotoneNoiseColorTypeSelection(t);
  }, [t]);
  let c = e => {
    t === e ? u(e) : (s(calculatePickerPositionLeft(l.current)), i(e));
  };
  let u = e => {
    e === t && i(AccessLevel.NONE);
  };
  let p = (t, i) => {
    let n = {
      ...e.effect,
      noiseSize: {
        x: t,
        y: t
      }
    };
    e.onChange(n, i);
  };
  let m = (t, i) => {
    let n = {
      ...e.effect,
      density: t
    };
    e.onChange(n, i);
  };
  let h = (t, i) => {
    let n = {
      ...e.effect,
      color: t
    };
    e.onChange(n, i);
  };
  let g = (t, i) => {
    let n = {
      ...e.effect,
      secondaryColor: t
    };
    e.onChange(n, i);
  };
  let _ = (t, i) => {
    let n = {
      ...e.effect,
      opacity: t
    };
    e.onChange(n, i);
  };
  let A = jsx("div", {
    className: eo,
    children: jsx(ta, {
      paint: {
        color: e.effect.color,
        opacity: e.effect.color?.a,
        type: "SOLID"
      },
      togglePicker: () => c(AccessLevel.PRIMARY),
      onChange: (e, t) => {
        e.color && h({
          ...e.color,
          a: e.opacity ?? e.color.a
        }, t);
      },
      appendedColorInputClassName: er
    })
  });
  let b = jsx("div", {
    className: eo,
    children: jsx(ta, {
      paint: {
        color: e.effect.secondaryColor,
        opacity: e.effect.secondaryColor?.a,
        type: "SOLID"
      },
      togglePicker: () => c(AccessLevel.SECONDARY),
      onChange: (e, t) => {
        e.color && g({
          ...e.color,
          a: e.opacity ?? e.color.a
        }, t);
      },
      appendedColorInputClassName: er
    })
  });
  return jsxs(Fragment, {
    children: [jsxs(Id, {
      children: [jsx(Ad, {
        appendedClassName: en,
        label: null,
        input: jsxs(bL, {
          legend: jsx(Legend, {
            children: renderI18nText("properties_panel.noise.noise_type")
          }),
          value: e.effect.noiseType,
          onChange: i => {
            u(t);
            let n = {
              ...e.effect,
              noiseType: i
            };
            e.onChange(n, yesNoTrackingEnum.YES);
          },
          children: [jsx(RT, {
            label: getI18nString("properties_panel.effects.noise.type.mono"),
            value: "MONOTONE"
          }), jsx(RT, {
            label: getI18nString("properties_panel.effects.noise.type.duo"),
            value: "DUOTONE"
          }), jsx(RT, {
            label: getI18nString("properties_panel.effects.noise.type.multi"),
            value: "MULTITONE"
          })]
        })
      }), showIllustrationSliderInputs ? jsx(ts, {
        ...e,
        chitRowRef: l,
        onNoiseSizeChange: p,
        onDensityChange: m,
        onOpacityChange: _,
        primaryColorInput: A,
        secondaryColorInput: b
      }) : jsx(to, {
        ...e,
        chitRowRef: l,
        onNoiseSizeChange: p,
        onDensityChange: m,
        onOpacityChange: _,
        primaryColorInput: A,
        secondaryColorInput: b
      })]
    }), t === AccessLevel.PRIMARY && jsx(gA, {
      initialPosition: a,
      color: e.effect.color,
      onChange: h,
      onClose: () => u(AccessLevel.PRIMARY),
      recordingKey: generateRecordingKey(e, "colorPicker"),
      variableData: e.effect.colorVar
    }), t === AccessLevel.SECONDARY && jsx(gA, {
      initialPosition: a,
      color: e.effect.secondaryColor ?? e.effect.color,
      onChange: g,
      onClose: () => u(AccessLevel.SECONDARY),
      recordingKey: generateRecordingKey(e, "colorPicker"),
      variableData: e.effect.colorVar
    })]
  });
}
function tp(e) {
  let {
    onRadiusChange,
    onSpreadChange,
    onXChange,
    onYChange,
    spreadTooltipText,
    renderColorInputInner,
    chitRowRef
  } = e;
  let d = {
    bigStep: e.bigNudgeAmount,
    dataTooltipType: KindEnum.TEXT,
    fullWidth: !0,
    inputMax: 3e4,
    inputMin: -3e4,
    min: -300,
    sliderMax: 300,
    step: e.smallNudgeAmount
  };
  let c = jsxs(Fragment, {
    children: [jsx(yw, {
      ...d,
      ariaLabel: getI18nString("properties_panel.effects.x"),
      dataTooltip: getI18nString("properties_panel.effects.x"),
      icon: jsx("span", {
        className: es,
        children: renderI18nText("properties_panel.effects.x")
      }),
      onValueChange: onXChange,
      rowLabel: getI18nString("fullscreen.properties_panel.effects.position"),
      value: e.effect.offset.x
    }), jsx(yw, {
      ...d,
      ariaLabel: getI18nString("properties_panel.effects.y"),
      dataTooltip: getI18nString("properties_panel.effects.y"),
      icon: jsx("span", {
        className: es,
        children: renderI18nText("properties_panel.effects.y")
      }),
      onValueChange: onYChange,
      rowLabel: null,
      value: e.effect.offset.y
    })]
  });
  let u = jsx(yw, {
    ariaLabel: getI18nString("fullscreen.properties_panel.effects.blur"),
    bigStep: e.bigNudgeAmount,
    dataTooltip: getI18nString("fullscreen.properties_panel.effects.blur"),
    fullWidth: !0,
    icon: jsx(M, {}),
    inputMax: aO,
    min: 0,
    onValueChange: onRadiusChange,
    rowLabel: getI18nString("fullscreen.properties_panel.effects.blur"),
    sliderMax: aO,
    step: e.smallNudgeAmount,
    value: e.effect.radius || 0
  });
  let p = jsx(yw, {
    ariaLabel: getI18nString("fullscreen.properties_panel.effects.spread"),
    bigStep: e.bigNudgeAmount,
    dataTooltip: spreadTooltipText,
    disabled: !e.selectionContainsOnlySpreadEligibleNodes,
    fullWidth: !0,
    icon: jsx(e6, {}),
    inputMax: 3e4,
    inputMin: -3e4,
    min: -300,
    onValueChange: onSpreadChange,
    rowLabel: getI18nString("fullscreen.properties_panel.effects.spread"),
    sliderMax: 300,
    step: e.smallNudgeAmount,
    value: e.effect.spread
  });
  let m = jsx(I6, {
    ref: chitRowRef,
    rowLabel: getI18nString("properties_panel.effects.color"),
    input: renderColorInputInner()
  });
  return jsxs("div", {
    className: "ui3_effects_settings_picker--shadowSlidersContainer--vkxyM ui3_effects_settings_picker--slidersContainer--C3A2z",
    children: [jsx("div", {
      children: c
    }), u, p, m]
  });
}
function tm(e) {
  let {
    onRadiusChange,
    onSpreadChange,
    onXChange,
    onYChange,
    spreadTooltipText,
    renderColorInputInner,
    chitRowRef
  } = e;
  let d = jsxs(Fragment, {
    children: [jsx(cS, {
      label: renderI18nText("fullscreen.properties_panel.effects.position"),
      input: jsx(ed, {
        recordingKey: generateRecordingKey(e, "xVar"),
        fieldName: "xVar",
        effect: e.effect,
        onChange: e.onChange,
        inputClassName: ei,
        children: jsx(ExpressionInput, {
          autoFocus: !0,
          bigNudgeAmount: e.bigNudgeAmount,
          className: ei,
          "data-tooltip": getI18nString("properties_panel.effects.x"),
          "data-tooltip-type": KindEnum.TEXT,
          dispatch: e.dispatch,
          inputClassName: ea,
          max: 3e4,
          min: -3e4,
          onValueChange: onXChange,
          recordingKey: generateRecordingKey(e, "xInput"),
          smallNudgeAmount: e.smallNudgeAmount,
          tooltipForScreenReadersOnly: !0,
          value: e.effect.offset.x,
          children: jsx("span", {
            className: `${es}`,
            children: renderI18nText("properties_panel.effects.x")
          })
        })
      })
    }), jsx(cS, {
      label: null,
      input: jsx(ed, {
        recordingKey: generateRecordingKey(e, "yVar"),
        fieldName: "yVar",
        effect: e.effect,
        onChange: e.onChange,
        inputClassName: ei,
        children: jsx(ExpressionInput, {
          bigNudgeAmount: e.bigNudgeAmount,
          className: ei,
          "data-tooltip": getI18nString("properties_panel.effects.y"),
          "data-tooltip-type": KindEnum.TEXT,
          dispatch: e.dispatch,
          inputClassName: ea,
          max: 3e4,
          min: -3e4,
          onValueChange: onYChange,
          recordingKey: generateRecordingKey(e, "yInput"),
          smallNudgeAmount: e.smallNudgeAmount,
          tooltipForScreenReadersOnly: !0,
          value: e.effect.offset.y,
          children: jsx("span", {
            className: es,
            children: renderI18nText("properties_panel.effects.y")
          })
        })
      })
    })]
  });
  let c = jsx(cS, {
    label: renderI18nText("fullscreen.properties_panel.effects.blur"),
    input: jsx(ed, {
      recordingKey: generateRecordingKey(e, "radiusVar"),
      fieldName: "radiusVar",
      effect: e.effect,
      onChange: e.onChange,
      inputClassName: ei,
      children: jsx(LengthInput, {
        bigNudgeAmount: e.bigNudgeAmount,
        "data-tooltip": getI18nString("properties_panel.effects.blur_radius"),
        "data-tooltip-type": KindEnum.TEXT,
        dispatch: e.dispatch,
        inputClassName: ea,
        max: 250,
        min: 0,
        onValueChange: onRadiusChange,
        recordingKey: generateRecordingKey(e, "blurInput"),
        resolution: 0.1,
        scrubMultiplier: 0.1,
        smallNudgeAmount: e.smallNudgeAmount,
        tooltipForScreenReadersOnly: !1,
        value: e.effect.radius,
        wheelMultiplier: 4,
        children: jsx("div", {
          className: es,
          children: jsx(M, {})
        })
      })
    })
  });
  let u = jsx(cS, {
    label: renderI18nText("fullscreen.properties_panel.effects.spread"),
    input: jsx(ed, {
      recordingKey: generateRecordingKey(e, "spreadVar"),
      fieldName: "spreadVar",
      effect: e.effect,
      onChange: e.onChange,
      inputClassName: ei,
      children: jsx(ExpressionInput, {
        bigNudgeAmount: e.bigNudgeAmount,
        "data-tooltip": spreadTooltipText,
        "data-tooltip-type": KindEnum.TEXT,
        disabled: !e.selectionContainsOnlySpreadEligibleNodes,
        dispatch: e.dispatch,
        inputClassName: ea,
        max: 3e4,
        min: -3e4,
        onValueChange: onSpreadChange,
        recordingKey: generateRecordingKey(e, "spreadInput"),
        smallNudgeAmount: e.smallNudgeAmount,
        tooltipForScreenReadersOnly: e.selectionContainsOnlySpreadEligibleNodes,
        value: e.effect.spread,
        children: jsx("span", {
          className: es,
          children: jsx(e6, {})
        })
      })
    })
  });
  let p = jsx(cS, {
    ref: chitRowRef,
    label: renderI18nText("properties_panel.effects.color"),
    input: renderColorInputInner()
  });
  return jsxs("div", {
    className: "ui3_effects_settings_picker--shadowScrubbableInputsContainer--4SLW1 ui3_effects_settings_picker--scrubbableInputsContainer--B2I7g",
    children: [d, c, u, p]
  });
}
function th(e) {
  let [t, i] = useState(!1);
  let [a, s] = useState(new Point(0, 0));
  let l = createRef();
  let c = () => {
    t ? u() : (s(calculatePickerPositionLeft(l.current)), i(!0));
  };
  let u = () => {
    i(!1);
  };
  let p = (t, i) => {
    let n = {
      ...e.effect,
      color: t,
      colorVar: void 0
    };
    e.onChange(n, i);
  };
  let m = async t => {
    let i = await e.dispatch(loadSharedVariableThunk(t));
    let n = convertVariableIdToKiwi(i);
    if (!n) return;
    let r = {
      value: {
        alias: n
      },
      dataType: "ALIAS",
      resolvedDataType: "COLOR"
    };
    let a = {
      ...e.effect,
      colorVar: r
    };
    executeWithDSAAction(StyleVariableOperation.VARIABLE_ATTACH, CopyPasteType.DIRECT, () => {
      e.onChange(a, yesNoTrackingEnum.YES);
    });
    oz("EFFECT_COLOR", r);
  };
  let h = t => {
    let i = {
      ...e.effect,
      colorVar: void 0
    };
    executeWithDSAAction(StyleVariableOperation.VARIABLE_DETACH, CopyPasteType.DIRECT, () => {
      e.onChange(i, yesNoTrackingEnum.YES);
    });
    t.stopPropagation();
  };
  let g = getI18nString("properties_panel.effects.spread");
  e.selectionContainsOnlySpreadEligibleNodes || (g = e.framelikeWithoutFills ? getI18nString("properties_panel.effects.spread_fills_warning") : e.framelikeWithoutClipping ? getI18nString("properties_panel.effects.spread_clip_warning") : getI18nString("properties_panel.effects.spread_rect_ellipse_warning"));
  let _ = "DROP_SHADOW" === e.effect.type && e.selectionContainsAnyKnockoutShadowEligibleNodes;
  let {
    showIllustrationSliderInputs
  } = useContext(_$$Q2);
  let b = {
    ...e,
    onRadiusChange: (t, i) => {
      let n = {
        ...e.effect,
        radius: t,
        radiusVar: void 0
      };
      e.onChange(n, i);
    },
    onSpreadChange: (t, i) => {
      let n = {
        ...e.effect,
        spread: t,
        spreadVar: void 0
      };
      e.onChange(n, i);
    },
    onXChange: (t, i) => {
      let n = {
        ...e.effect,
        offset: {
          x: t,
          y: e.effect.offset.y
        },
        xVar: void 0
      };
      e.onChange(n, i);
    },
    onYChange: (t, i) => {
      let n = {
        ...e.effect,
        offset: {
          y: t,
          x: e.effect.offset.x
        },
        yVar: void 0
      };
      e.onChange(n, i);
    },
    spreadTooltipText: g,
    renderColorInputInner: () => {
      let i = e.effect.colorVar?.value?.alias;
      return i ? jsxs("div", {
        className: eo,
        children: [jsx(ButtonPrimitive, {
          onClick: c,
          actionOnPointerDown: !0,
          children: jsx(rM, {
            selected: t,
            variableId: i,
            paint: {
              blendMode: "NORMAL",
              color: e.effect.color,
              type: "SOLID",
              opacity: e.effect.color.a
            },
            onClick: c,
            recordingKey: generateRecordingKey(e, "colorVariableInput")
          })
        }), jsx("span", {
          className: "ui3_effects_settings_picker--colorVariableUnbindButton---TaIC",
          children: jsx(IconButton, {
            "aria-label": getI18nString("fullscreen.properties_panel.fill.detach_style"),
            onClick: h,
            children: jsx(_$$U, {})
          })
        })]
      }) : jsx(ta, {
        paint: {
          color: e.effect.color,
          opacity: e.effect.color.a,
          type: "SOLID"
        },
        togglePicker: c,
        onChange: (e, t) => p({
          ...e.color,
          a: e.opacity
        }, t),
        appendedColorInputClassName: er,
        recordingKey: e.recordingKey
      });
    },
    chitRowRef: l
  };
  return jsxs(Fragment, {
    children: [jsxs(Id, {
      children: [showIllustrationSliderInputs ? jsx(tp, {
        ...b
      }) : jsx(tm, {
        ...b
      }), _ && jsx("div", {
        className: Z()(el, showIllustrationSliderInputs ? "ui3_effects_settings_picker--shadowSlidersSection--yFq-D" : "ui3_effects_settings_picker--shadowScrubbableSection--cEUBq"),
        children: jsx("div", {
          className: "ui3_effects_settings_picker--showBehindTransparentOption--bT-nE",
          children: jsx(Checkbox, {
            label: jsx(Label, {
              children: renderI18nText("properties_panel.effects.show_behind_transparent_areas")
            }),
            checked: e.effect.showShadowBehindNode,
            onChange: t => {
              let i = {
                ...e.effect,
                showShadowBehindNode: t
              };
              e.onChange(i);
            },
            recordingKey: generateRecordingKey(e, "showShadowBehindNode")
          })
        })
      })]
    }), t && jsx(gA, {
      initialPosition: a,
      color: e.effect.color,
      onChange: p,
      onClose: u,
      recordingKey: generateRecordingKey(e, "colorPicker"),
      variableData: e.effect.colorVar,
      onVariableChange: m,
      variableScopes: new Set([PropertyScope.EFFECT_COLOR])
    }), jsx(rf, {
      variableScope: PropertyScope.EFFECT_FLOAT
    })]
  });
}
function tg(e) {
  let t = 160;
  let [i, a] = useState(t);
  let s = useMemo(() => new qj(), []);
  let o = useMemo(() => jsx(_$$Q, {
    setMaxWidth: (e = t) => {
      a(Math.max(e, t));
    },
    options: e.options,
    formatOption: e => s.format(e.props.value),
    getIcon: () => void 0
  }), [e.options, s]);
  return jsxs("div", {
    className: "ui3_effects_settings_picker--titleContainer--cJiJF",
    children: [jsxs("div", {
      className: "ui3_effects_settings_picker--effectTitleAndMaybeBetaBadge--NR7fQ",
      children: [jsxs("div", {
        className: "ui3_effects_settings_picker--effectTitle--uwti2",
        children: [jsx(eR, {
          allowedEffects: e.allowedEffects,
          ariaLabel: getI18nString("properties_panel.effects.effect_settings"),
          currentEffectType: e.effect.type,
          dispatch: e.dispatch,
          dropdownShown: e.dropdownShown,
          dropdownWidth: i,
          enablePreview: !0,
          formatter: s,
          icon: getFeatureFlags().ce_il_root ? vG(e.effect) : void 0,
          iconClassName: "ui3_effects_settings_picker--effectSelectIcon--VPt73",
          id: e.pickerId,
          onChange: e.onTypeChange,
          onMouseDown: stopPropagation,
          property: e.effect.type,
          recordingKey: "effects_settings_picker.title.select"
        }), o]
      }), "GLASS" === e.effect.type && jsx(_$$E, {
        variant: "defaultFilled",
        size: "md",
        children: getI18nString("general.beta")
      })]
    }), e.showBlendModeOption && jsx(Rk, {
      blendMode: e.effect.blendMode,
      onBlendModeChange: e.onBlendModeChange,
      dispatch: e.dispatch,
      dropdownShown: e.dropdownShown,
      recordingKey: generateRecordingKey(e, "blendMode")
    })]
  });
}
function tf(e, t) {
  switch (t) {
    case "INNER_SHADOW":
    case "DROP_SHADOW":
      return jsx(th, {
        ...e
      });
    case "GRAIN":
      return jsx(e9, {
        ...e
      });
    case "NOISE":
      return jsx(tl, {
        ...e
      });
    case "GLASS":
      return jsx(e0, {
        ...e
      });
    default:
      return jsx(eh, {
        ...e
      });
  }
}
function t_() {
  AppStateTsApi?.currentEditModeInDesign() === LayoutTabType.PROGRESSIVE_BLUR && fullscreenValue.triggerAction("toggle-progressive-blur-edit-mode");
}
function tA(e) {
  let t = useLabConfiguration(labConfigurations.useGrid);
  let i = getFeatureFlags().eu_fpl_migration_styles_picker_selects;
  let [a, s] = useState(e.effect.type);
  let o = (e, t) => {
    e !== t && (("NOISE" === t || "NOISE" === e) && analyticsEventManager.trackDefinedEvent("illustration.web_noise_effect_toggle", {
      changedToNoise: "NOISE" === t
    }), ("GRAIN" === t || "GRAIN" === e) && analyticsEventManager.trackDefinedEvent("illustration.web_texture_effect_toggle", {
      changedToTexture: "GRAIN" === t
    }), ("GLASS" === t || "GLASS" === e) && analyticsEventManager.trackDefinedEvent("illustration.web_glass_effect_toggle", {
      changedToGlass: "GLASS" === t
    }));
  };
  let l = () => {
    e.dispatch(hidePickerThunk());
    fullscreenValue.deselectProperty();
    t_();
  };
  let d = new Point(e.initialX, e.initialY);
  let u = i ? a : e.effect.type;
  let p = jsx(tg, {
    pickerId: e.pickerId,
    effect: e.effect,
    showBlendModeOption: "DROP_SHADOW" === u || "INNER_SHADOW" === u || "NOISE" === u,
    onTypeChange: (t, i = yesNoTrackingEnum.YES) => {
      (i === yesNoTrackingEnum.YES || i === yesNoTrackingEnum.YES_FORCE_TRACKING_AS_EDIT) && (o(a, t), s(t));
      let n = UF(e.effect, t);
      e.onChange({
        ...e.effect,
        type: t,
        ...n
      }, i);
    },
    onBlendModeChange: (t, i = yesNoTrackingEnum.YES) => {
      let n = {
        ...e.effect,
        blendMode: t
      };
      e.onChange(n, i);
    },
    dispatch: e.dispatch,
    dropdownShown: e.dropdownShown,
    options: e.options,
    allowedEffects: e.allowedEffects
  });
  let h = generateRecordingKey(e, "modal");
  let g = i ? a : e.effect.type;
  return t ? jsx(_$$bL, {
    defaultPosition: {
      top: d.y,
      left: d.x
    },
    htmlAttributes: {
      "data-testid": "effects-settings-picker"
    },
    onClose: ({
      source: e,
      target: t
    }) => {
      "outside" === e && t && t.closest("#fullscreen-root") || l();
    },
    recordingKey: h,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: p
      }), jsx(DialogBody, {
        scrolling: "none",
        padding: 0,
        children: tf(e, g)
      })]
    })
  }) : jsx(DraggableModalManager, {
    title: p,
    headerSize: "small",
    initialPosition: d,
    onClose: l,
    recordingKey: h,
    dataTestId: "effects-settings-picker",
    children: tf(e, g)
  });
}
let tC = "effects_panel--ui3EffectIconInvisible--R6Gby";
let tk = e => {
  switch (e.type) {
    case "DROP_SHADOW":
      return getI18nString("fullscreen.properties_panel.effects.drop_shadow");
    case "INNER_SHADOW":
      return getI18nString("fullscreen.properties_panel.effects.inner_shadow");
    case "BACKGROUND_BLUR":
      return getI18nString("fullscreen.properties_panel.effects.background_blur");
    case "FOREGROUND_BLUR":
      return getI18nString("fullscreen.properties_panel.effects.layer_blur");
    case "GRAIN":
      return getI18nString("fullscreen.properties_panel.effects.texture");
    case "NOISE":
      return getI18nString("fullscreen.properties_panel.effects.noise");
    case "GLASS":
      return getI18nString("fullscreen.properties_panel.effects.glass");
    default:
      return "Effect";
  }
};
let tR = new LN();
let tN = new Lk({
  floatingPointFormat: {
    maxNumDigits: 2
  },
  smallNudgeAmount: DEFAULT_FINE_NUDGE,
  bigNudgeAmount: DEFAULT_COARSE_NUDGE
});
let tP = e => {
  let t = [];
  switch (e.type) {
    case "DROP_SHADOW":
    case "INNER_SHADOW":
      t.push(`${getI18nString("properties_panel.effects.x")} ${tN.format(e.offset.x)}`);
      t.push(`${getI18nString("properties_panel.effects.y")} ${tN.format(e.offset.y)}`);
      t.push(`${getI18nString("properties_panel.effects.b")} ${tN.format(e.radius)}`);
      t.push(`${getI18nString("properties_panel.effects.s")} ${tN.format(e.spread)}`);
      break;
    case "BACKGROUND_BLUR":
    case "FOREGROUND_BLUR":
      e.blurOpType && "NORMAL" !== e.blurOpType ? (t.push(getI18nString("properties_panel.effects.blur.type.progressive")), t.push(`${tN.format(e.startRadius)} \u2192 ${tN.format(e.radius)}`)) : (t.push(getI18nString("properties_panel.effects.blur.type.normal")), t.push(tN.format(e.radius)));
      break;
    case "GRAIN":
      t.push(`${getI18nString("properties_panel.effects.s_size")} ${tN.format(e.noiseSize?.x || 0)}`);
      t.push(`${getI18nString("properties_panel.effects.r")} ${tN.format(e.radius)}`);
      break;
    case "NOISE":
      t.push(`${(e => {
        switch (e) {
          case "MONOTONE":
            return getI18nString("properties_panel.effects.noise.type.mono");
          case "DUOTONE":
            return getI18nString("properties_panel.effects.noise.type.duo");
          case "MULTITONE":
            return getI18nString("properties_panel.effects.noise.type.multi");
          default:
            return "";
        }
      })(e.noiseType)}`);
      t.push(`${getI18nString("properties_panel.effects.s_size")} ${tN.format(e.noiseSize?.x || 0)}`);
      t.push(`${getI18nString("properties_panel.effects.d")} ${tR.format(e.density)}`);
      break;
    default:
      t.push("Effect values");
  }
  return t;
};
let tO = forwardRef((e, t) => {
  let i = tk(e.effect);
  let r = tP(e.effect);
  return jsx(_$$C, {
    ...e,
    ref: t,
    propertyName: i,
    propertyValues: r,
    visible: e.effect.visible,
    previewElement: jsx("div", {
      className: Z()({
        [tC]: !e.effect.visible
      }, i1),
      children: vG(e.effect)
    })
  });
});
let tD = _$$b();
let tL = {
  DROP_SHADOW: 8,
  INNER_SHADOW: 8,
  BACKGROUND_BLUR: 1,
  FOREGROUND_BLUR: 1,
  REPEAT: 5,
  SYMMETRY: 1,
  GRAIN: 1,
  NOISE: 2,
  GLASS: 1
};
export function $$tF0(e) {
  let t = useLabConfiguration(labConfigurations.useGrid);
  let {
    Sprig
  } = useSprigWithSampling();
  let r = debugState.getState().selectedView;
  let a = mapEditorTypeToProductType(r.editorType);
  return jsx(dD.Provider, {
    value: {
      useGrid: t
    },
    children: jsx(tM, {
      ...e,
      useFPLGrid: t,
      Sprig,
      productType: a
    })
  });
}
class tM extends PureComponent {
  constructor() {
    super(...arguments);
    this.context = null;
    this.effectsList = memoizeByArgs(e => valueOrFallback(this.props.effects, []).map(qq));
    this.onEffectsChange = (e, t) => {
      fullscreenValue.updateSelectionProperties({
        effects: e
      }, {
        shouldCommit: t
      });
      a2("effects");
    };
  }
  render() {
    let e = this.effectsList(this.props.effects);
    let t = Bf().filter(e => "GLASS" !== e || !this.props.anyNonFrameLikesSelected);
    let i = {};
    t.forEach(e => i[e] = 0);
    e.forEach(e => i[e.type]++);
    let r = Bf().reduce((e, t) => ("GLASS" === t && this.props.anyNonFrameLikesSelected ? e[t] = "disallowedForGlassType" : i[t] >= tL[t] ? e[t] = "disallowedForCount" : e[t] = "allowed", e), {});
    let a = getStylePickerUIState({
      ...this.props,
      styleType: "EFFECT",
      inheritStyleKeyField: "inheritEffectStyleKey"
    });
    return jsx(_$$k2, {
      name: "effects_panel",
      children: jsx(Zk, {
        id: "effects-panel",
        children: jsx(tU, {
          allowedEffects: r,
          anyNonFrameLikesSelected: this.props.anyNonFrameLikesSelected,
          bigNudgeAmount: this.props.bigNudgeAmount,
          currentSelectedProperty: this.props.currentSelectedProperty,
          framelikeWithoutClipping: this.props.framelikeWithoutClipping,
          framelikeWithoutFills: this.props.framelikeWithoutFills,
          onChange: this.onEffectsChange,
          pickerShown: this.props.pickerShown,
          propertyList: e,
          recordingKey: generateRecordingKey(this.props, "effectsList"),
          selectedPropertyType: NodePropertyCategory.EFFECT,
          selectionContainsAnyKnockoutShadowEligibleNodes: this.props.selectionContainsAnyKnockoutShadowEligibleNodes,
          selectionContainsOnlySpreadEligibleNodes: this.props.selectionContainsOnlySpreadEligibleNodes,
          smallNudgeAmount: this.props.smallNudgeAmount,
          ...a,
          Sprig: this.props.Sprig,
          isUI3: this.props.isUI3,
          productType: this.props.productType,
          stylePickerListLayout: !0,
          useFPLGrid: this.props.useFPLGrid
        })
      })
    });
  }
}
tM.displayName = "EffectsPanel";
tM.contextType = zK;
class tj extends Kx {}
class tU extends PureComponent {
  constructor() {
    super(...arguments);
    this.addConfiguredEffect = e => {
      let t = valueOrFallback(this.props.propertyList, []);
      atomStoreManager.set(tD, t.length);
      let i = UF(e, e.type);
      this.props.onChange(t.concat([{
        ...e,
        ...i
      }]));
      fullscreenValue.deselectProperty();
      trackEventAnalytics("editor-effects-panel-add");
      a2("effects");
      "NOISE" === e.type ? analyticsEventManager.trackDefinedEvent("illustration.web_noise_effect_toggle", {
        changedToNoise: !0,
        productType: this.props.productType
      }) : "GRAIN" === e.type ? analyticsEventManager.trackDefinedEvent("illustration.web_texture_effect_toggle", {
        changedToTexture: !0,
        productType: this.props.productType
      }) : "GLASS" === e.type && analyticsEventManager.trackDefinedEvent("illustration.web_glass_effect_toggle", {
        changedToGlass: !0,
        productType: this.props.productType
      });
    };
    this.addProperty = () => {
      this.addConfiguredEffect(IK("DROP_SHADOW"));
    };
    this.removeProperty = e => {
      let t = valueOrFallback(this.props.propertyList, []);
      executeWithDSAAction(StyleVariableOperation.IGNORE, CopyPasteType.UNKNOWN, () => {
        this.props.onChange(t.filter((t, i) => i !== e));
      });
      this.props.dispatch(hidePickerThunk());
      this.props.dispatch(hideStylePicker());
      fullscreenValue.deselectProperty();
      trackEventAnalytics("editor-effects-panel-remove");
      a2("effects");
    };
    this.renderProperty = (e, t, i, r, a, s, o, l, d) => jsx(tV, {
      allowedEffects: this.props.allowedEffects,
      anyNonFrameLikesSelected: this.props.anyNonFrameLikesSelected,
      bigNudgeAmount: this.props.bigNudgeAmount,
      dispatch: this.props.dispatch,
      dropdownShown: this.props.dropdownShown,
      effect: e,
      framelikeWithoutClipping: this.props.framelikeWithoutClipping,
      framelikeWithoutFills: this.props.framelikeWithoutFills,
      hasFocus: a,
      id: `${this.props.selectedPropertyType}-${t}`,
      index: t,
      isDragging: r,
      isUI3: this.props.isUI3,
      onChange: (t, i) => {
        getFeatureFlags().ce_il_sprig_tracking && this.props.Sprig && !(e => "NOISE" === e.type || "GRAIN" === e.type || ("BACKGROUND_BLUR" === e.type || "FOREGROUND_BLUR" === e.type) && "PROGRESSIVE" === e.blurOpType)(e) && (e => "NOISE" === e.type || "GRAIN" === e.type || ("BACKGROUND_BLUR" === e.type || "FOREGROUND_BLUR" === e.type) && "PROGRESSIVE" === e.blurOpType)(t) && this.props.Sprig("setAttribute", "is_assets_visual_style_user", !0);
        s(t, i);
      },
      onMouseDown: (...e) => {
        trackEventAnalytics("editor-effects-panel-dropdown-open");
        o(...e);
      },
      onMouseMove: l,
      onMouseUp: d,
      onRemoveEffect: this.removeProperty.bind(this, t),
      pickerShown: this.props.pickerShown,
      productType: this.props.productType,
      recordingKey: generateRecordingKey(this.props, t),
      selected: i,
      selectionContainsAnyKnockoutShadowEligibleNodes: this.props.selectionContainsAnyKnockoutShadowEligibleNodes,
      selectionContainsOnlySpreadEligibleNodes: this.props.selectionContainsOnlySpreadEligibleNodes,
      singletonRow: valueOrFallback(this.props.propertyList, []).length <= 1,
      smallNudgeAmount: this.props.smallNudgeAmount,
      useFPLGrid: this.props.useFPLGrid
    }, this.props.useFPLGrid ? void 0 : `effect-${t}`);
  }
  render() {
    return jsx(tj, {
      addProperty: this.addProperty,
      currentSelectedProperty: this.props.currentSelectedProperty,
      dispatch: this.props.dispatch,
      entrypointMenu: jsx(IR, {
        onAddEffect: this.addConfiguredEffect,
        allowedEffects: this.props.allowedEffects
      }),
      onChange: this.props.onChange,
      openStylePickerToLeft: this.props.isUI3,
      overrideAddPropertyTooltip: this.props.isUI3 ? getI18nString("fullscreen.properties_panel.section_effects.tooltip_addEffect") : void 0,
      pickerShown: this.props.pickerShown,
      propertyList: this.props.propertyList,
      recordingKey: this.props.recordingKey,
      renderProperty: this.renderProperty,
      selectedPropertyType: this.props.selectedPropertyType,
      title: getI18nString("properties_panel.effects.effects"),
      ...getStylePickerUIState(this.props)
    });
  }
}
tU.displayName = "EffectsList";
var tB = (e => (e[e.SETTINGS = 0] = "SETTINGS", e[e.COLOR = 1] = "COLOR", e))(tB || {});
class tV extends PureComponent {
  constructor(e) {
    super(e);
    this.rowRef = createRef();
    this.stopPropagation = e => e.stopPropagation();
    this.formatter = new qj();
    this.onChange = (e, t) => {
      e.visible = !0;
      this.props.onChange(e, t);
    };
    this.logEffectChange = (e, t) => {
      e !== t && (("NOISE" === t || "NOISE" === e) && analyticsEventManager.trackDefinedEvent("illustration.web_noise_effect_toggle", {
        changedToNoise: "NOISE" === t,
        productType: this.props.productType
      }), ("GRAIN" === t || "GRAIN" === e) && analyticsEventManager.trackDefinedEvent("illustration.web_texture_effect_toggle", {
        changedToTexture: "GRAIN" === t,
        productType: this.props.productType
      }), ("GLASS" === t || "GLASS" === e) && analyticsEventManager.trackDefinedEvent("illustration.web_glass_effect_toggle", {
        changedToGlass: "GLASS" === t,
        productType: this.props.productType
      }));
    };
    this.onTypeChange = (e, t = yesNoTrackingEnum.YES) => {
      let i = IK(e);
      (t === yesNoTrackingEnum.YES || t === yesNoTrackingEnum.YES_FORCE_TRACKING_AS_EDIT) && (this.logEffectChange(this.state.userChosenEffectType, e), this.setState({
        userChosenEffectType: e
      }));
      let n = UF(this.props.effect, e);
      this.onChange({
        ...i,
        ...this.props.effect,
        ...n,
        type: e
      }, t);
    };
    this.toggleVisible = e => {
      this.props.onChange({
        ...this.props.effect,
        visible: e
      }, yesNoTrackingEnum.YES);
    };
    this.toggleSettings = e => {
      if (e && e.stopPropagation(), t_(), this.settingsPickerShown()) {
        this.props.dispatch(hidePickerThunk());
        fullscreenValue.deselectProperty();
      } else {
        let e = calculatePickerPositionLeft(this.rowRef.current);
        fullscreenValue.updateAppModel({
          currentSelectedProperty: {
            type: NodePropertyCategory.EFFECT,
            indices: [this.props.index]
          }
        });
        this.props.dispatch(showPickerThunk({
          id: this.pickerId,
          initialX: e.x,
          initialY: e.y,
          data: {
            type: 0
          }
        }));
      }
    };
    this.onRowFocus = () => {
      this.props.pickerShown && this.props.pickerShown.id === this.props.id && this.props.dispatch(hidePickerThunk());
    };
    this.maybeToggleProgressiveBlurEditMode = e => {
      if (ec() && e) {
        let e = AppStateTsApi?.currentEditModeInDesign();
        let t = e !== LayoutTabType.PROGRESSIVE_BLUR;
        let i = "PROGRESSIVE" === this.props.effect.blurOpType;
        let n = "BACKGROUND_BLUR" === this.props.effect.type || "FOREGROUND_BLUR" === this.props.effect.type;
        let r = e === LayoutTabType.PROGRESSIVE_BLUR;
        let a = "BACKGROUND_BLUR" !== this.props.effect.type && "FOREGROUND_BLUR" !== this.props.effect.type;
        let s = "PROGRESSIVE" !== this.props.effect.blurOpType;
        (t && i && n || r && (a || s)) && fullscreenValue.triggerAction("toggle-progressive-blur-edit-mode");
      }
    };
    this.state = {
      dropdownWidth: void 0,
      userChosenEffectType: e.effect.type
    };
  }
  isInCreateStyleModal() {
    return this.context === zM.CREATE_STYLE;
  }
  get pickerId() {
    return this.isInCreateStyleModal() ? `create-style-grid-${this.props.id}` : this.props.id;
  }
  get ui3FlyoutPickerID() {
    return this.isInCreateStyleModal() ? `create-style-grid-effects-flyout-${this.props.id}` : `effects-flyout-${this.props.id}`;
  }
  settingsPickerShown() {
    return this.props.pickerShown && this.props.pickerShown.id === this.pickerId && this.props.pickerShown.data?.type === 0 ? this.props.pickerShown : null;
  }
  render() {
    var e;
    var t;
    var i;
    let r = this.settingsPickerShown();
    this.maybeToggleProgressiveBlurEditMode(r);
    e = this.props.effect.type;
    t = this.props.allowedEffects;
    i = this.props.recordingKey;
    let d = getFeatureFlags().eu_fpl_migration_styles_picker_selects ? eO(e, t) : ek(e, t, i);
    let u = jsx(_$$Q, {
      setMaxWidth: e => {
        void 0 === e ? this.setState({
          dropdownWidth: void 0
        }) : this.setState({
          dropdownWidth: Math.max(e, 144)
        });
      },
      options: d,
      formatOption: e => e && e.props.value ? this.formatter.format(e.props.value) : "",
      getIcon: () => void 0
    });
    let p = this.props.selected && this.props.hasFocus;
    let m = this.props.selected && !this.props.hasFocus;
    let h = jsx(DialogTriggerButton, {
      onClick: this.toggleSettings,
      recordingKey: generateRecordingKey(this.props, "toggleSettings"),
      "aria-expanded": !!r,
      "aria-label": getI18nString("properties_panel.effects.effect_settings"),
      children: jsx("span", {
        className: this.props.effect.visible ? "" : tC,
        children: vG(this.props.effect)
      })
    });
    let _ = jsxs(Fragment, {
      children: [jsx(eR, {
        allowedEffects: this.props.allowedEffects,
        ariaLabel: getI18nString("properties_panel.effects.effect_settings"),
        chevronClassName: "effects_panel--chevron--YSS-g",
        className: "effects_panel--select--7QYY9",
        currentEffectType: this.props.effect.type,
        dispatch: this.props.dispatch,
        dropdownShown: this.props.dropdownShown,
        dropdownWidth: this.state.dropdownWidth,
        enablePreview: !0,
        formatter: this.formatter,
        id: this.pickerId,
        inputClassName: this.props.effect.visible ? "effects_panel--input--n8Afn" : "effects_panel--inputInvisible--082Ym",
        onChange: this.onTypeChange,
        onMouseDown: this.stopPropagation,
        property: this.props.effect.type,
        recordingKey: generateRecordingKey(this.props, "select")
      }), u]
    });
    let A = jsx(_$$B, {
      visible: this.props.effect.visible,
      onChange: this.toggleVisible,
      recordingKey: generateRecordingKey(this.props, "visibleToggle"),
      selected: p
    });
    let b = jsx(_$$T, {
      selected: p,
      children: jsx(IconButton, {
        recordingKey: generateRecordingKey(this.props, "removeButton"),
        onClick: this.props.onRemoveEffect,
        "aria-label": getI18nString("fullscreen.properties_panel.tooltip_remove"),
        htmlAttributes: {
          onMouseDown: this.stopPropagation,
          "data-tooltip": getI18nString("fullscreen.properties_panel.tooltip_remove"),
          "data-tooltip-type": KindEnum.TEXT
        },
        children: jsx(_$$O, {})
      })
    });
    return jsx(_$$Q2.Consumer, {
      children: e => jsxs("div", {
        children: [getFeatureFlags().ce_tv_new_row_open_modal && jsx(_$$O2, {
          lastAddedItemIndexAtom: tD,
          index: this.props.index,
          callback: this.toggleSettings
        }), e.useLargePreviewRows ? jsx(tO, {
          ref: this.rowRef,
          dragging: this.props.isDragging,
          effect: this.props.effect,
          firstIconButton: A,
          hasFocus: this.props.hasFocus,
          onMouseDown: this.props.onMouseDown,
          onMouseMove: this.props.onMouseMove,
          onMouseUp: this.props.onMouseUp,
          onPreviewClick: this.toggleSettings,
          onRowFocus: this.onRowFocus,
          previewActive: !!r,
          recordingKey: this.props.recordingKey,
          secondIconButton: b,
          selected: !!this.props.selected,
          singletonRow: this.props.singletonRow
        }) : this.props.useFPLGrid ? jsx(o7, {
          ref: this.rowRef,
          cellHasCustomFocusRingTarget: !0,
          firstRightIcon: A,
          hasFocus: !0,
          input: _,
          leftIcon: h,
          recordingKey: this.props.recordingKey,
          secondRightIcon: b,
          selected: this.props.selected && !r,
          singletonRow: this.props.singletonRow
        }) : jsx(Y9, {
          ref: this.rowRef,
          containerClassName: m ? "effects_panel--rowContainerSecondarySelect--Duapa ui3_rows--rowContainerSecondarySelectDisabled--WFL3w" : void 0,
          dragging: this.props.isDragging,
          onMouseDown: this.props.onMouseDown,
          onMouseMove: this.props.onMouseMove,
          onMouseUp: this.props.onMouseUp,
          recordingKey: this.props.recordingKey,
          selected: p,
          selectedSecondary: m,
          singletonRow: this.props.singletonRow,
          children: jsx(Oe, {
            label: null,
            leftIcon: h,
            input: _,
            firstRightIcon: A,
            secondRightIcon: b
          })
        }), r && jsx(tA, {
          allowedEffects: this.props.allowedEffects,
          anyNonFrameLikesSelected: this.props.anyNonFrameLikesSelected,
          bigNudgeAmount: this.props.bigNudgeAmount,
          dispatch: this.props.dispatch,
          dropdownShown: this.props.dropdownShown,
          effect: this.props.effect,
          framelikeWithoutClipping: this.props.framelikeWithoutClipping,
          framelikeWithoutFills: this.props.framelikeWithoutFills,
          initialX: r.initialX || 0,
          initialY: r.initialY || 0,
          onChange: this.onChange,
          options: d,
          pickerId: this.ui3FlyoutPickerID,
          recordingKey: generateRecordingKey(this.props, "settings"),
          selectionContainsAnyKnockoutShadowEligibleNodes: this.props.selectionContainsAnyKnockoutShadowEligibleNodes,
          selectionContainsOnlySpreadEligibleNodes: this.props.selectionContainsOnlySpreadEligibleNodes,
          smallNudgeAmount: this.props.smallNudgeAmount
        })]
      })
    });
  }
}
tV.displayName = "Effect";
tV.contextType = zK;
export const F = $$tF0;