import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useRef, useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import { N as _$$N } from "../905/720559";
import { RR } from "../figma_app/338442";
import { VariableResolvedDataType } from "../figma_app/763686";
import { selectWithShallowEqual } from "../905/103090";
import { useHandleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import { getI18nString, renderI18nText } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { isValidValue } from "../905/216495";
import { kl, lJ } from "../905/275640";
import { Sh } from "../figma_app/889655";
import { Yc, yQ } from "../figma_app/930914";
import { L as _$$L } from "../figma_app/884735";
import { Tn, On } from "../figma_app/323320";
import { Pd } from "../figma_app/178475";
import { sA } from "../figma_app/841644";
import { ei as _$$ei } from "../642/384859";
import { Zk } from "../figma_app/626177";
import { C as _$$C } from "../figma_app/531250";
import { Jo, Df } from "../figma_app/98483";
import { K as _$$K } from "../642/473452";
import { j as _$$j } from "../642/595261";
import { Cs, cU, Je } from "../figma_app/938628";
import { Wv } from "../figma_app/711157";
import { fn, DE } from "../figma_app/811257";
import { wu } from "../1528/306300";
import { M as _$$M } from "../figma_app/339170";
import { d as _$$d } from "../905/976845";
import { u as _$$u } from "../905/911813";
import { u as _$$u2 } from "../figma_app/852050";
import { KindEnum } from "../905/129884";
import { u3 } from "../figma_app/152690";
import { ND, $V, $H, AP } from "../figma_app/755783";
import { RK } from "../1528/277451";
import { C as _$$C2 } from "../642/110459";
import { r as _$$r } from "../642/58913";
import { m as _$$m } from "../642/871982";
import { b as _$$b } from "../642/94505";
import { K as _$$K2 } from "../905/443068";
import { EventShield } from "../905/821217";
import { bL, mc } from "../figma_app/860955";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { SU } from "../figma_app/451499";
import { dG } from "../figma_app/753501";
import { Um } from "../905/848862";
import { J as _$$J } from "../642/436925";
import { Z as _$$Z, m as _$$m2 } from "../905/423399";
import { sL, qg, j4, GZ } from "../figma_app/436286";
import { MK } from "../figma_app/844696";
import { c$, l6, sK } from "../905/794875";
import { useIsFullscreenSitesView } from "../905/561485";
import { h as _$$h, s } from "../642/31878";
let B = Tn();
function K(e) {
  let t = useMemo(On, []);
  let {
    isDefReferencedBySelection,
    visibilityIsBoundToComponentProp
  } = selectWithShallowEqual(e => ({
    isDefReferencedBySelection: !!t(e, RR.VISIBLE),
    visibilityIsBoundToComponentProp: B(e, Sh(e), RR.VISIBLE)
  }));
  let {
    consumedVariable
  } = u3(["VISIBLE"]);
  let o = useRef(null);
  let [p, h] = ND("binding-icon");
  let m = $V();
  let f = _$$u2(m);
  let x = !!consumedVariable && !!f || visibilityIsBoundToComponentProp || isDefReferencedBySelection;
  let _ = useCallback(() => h(o.current), [h]);
  let b = useHandleMouseEvent(generateRecordingKey(e, "visibilityVariableBindingControl"), "mousedown", e => {
    e && !x && 1 & e.buttons && (_(), e.preventDefault(), e.stopPropagation());
  });
  return jsx("div", {
    className: RK,
    children: jsx(_$$d, {
      ref: o,
      recordingKey: generateRecordingKey(e, "visibilityVariableBindingControl"),
      "aria-expanded": p,
      "aria-label": getI18nString("proto.apply_assignment_property"),
      disabled: x,
      htmlAttributes: {
        "data-testid": "visibility-variable-binding-control",
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("proto.apply_assignment_property"),
        onMouseDown: b
      },
      children: jsx(_$$u, {})
    })
  });
}
let el = new SU();
class ea extends c$ {}
function eo(e) {
  return jsx(l6, {
    ...e,
    renderInput: ({
      onMouseDown: e,
      props: t
    }) => jsx(_$$K2, {
      recordingKey: generateRecordingKey(t.recordingKey, "blendMode"),
      "aria-label": getI18nString("properties.dropdown.apply_blend_mode"),
      onClick: e,
      actionOnPointerDown: !0,
      htmlAttributes: {
        "data-tooltip": getI18nString("properties.dropdown.apply_blend_mode"),
        "data-tooltip-type": KindEnum.TEXT
      },
      children: jsx(MK, {
        value: t.property,
        defaultBlendMode: "PASS_THROUGH"
      })
    })
  });
}
function ed(e) {
  return getFeatureFlags().eu_fpl_migration_menu ? jsx(eh, {
    recordingKey: generateRecordingKey(e.recordingKey, "blendMode"),
    id: e.id
  }) : jsx(ec, {
    ...e
  });
}
function ec({
  blendModeRowId: e,
  id: t,
  recordingKey: s
}) {
  let [n, l] = sL();
  let a = useDispatch();
  let o = Um();
  let d = useIsFullscreenSitesView();
  let p = !qg(n, "PASS_THROUGH");
  let h = j4.map((e, t) => {
    let n = "LINEAR_BURN" === e && d;
    return "SELECT_DIVIDER" === e ? jsx(sK, {}, t) : jsx(ea, {
      value: e,
      disabled: n,
      recordingKey: generateRecordingKey(s, "blendMode", e)
    }, t);
  });
  return p && o?.type !== t || o?.type === _$$J(e) ? jsx(_$$d, {
    "aria-label": getI18nString("properties.dropdown.remove_blend_mode"),
    "aria-expanded": !0,
    actionOnPointerDown: !0,
    onClick: () => l("PASS_THROUGH"),
    htmlAttributes: {
      "data-tooltip": getI18nString("properties.dropdown.remove_blend_mode"),
      "data-tooltip-type": KindEnum.TEXT
    },
    children: jsx(MK, {
      value: n,
      defaultBlendMode: "PASS_THROUGH"
    })
  }) : jsx(eo, {
    ariaLabel: getI18nString("properties.dropdown.blend_mode"),
    className: "selection_blend_mode_icon_button--container--Wv9Hd",
    disableSelectFocus: !0,
    dispatch: a,
    dropdownAlignment: "right",
    dropdownClassName: "selection_blend_mode_icon_button--blendModeSelectDropdown--WcwN1 blend_mode_select--blendModeSelectDropdown--jlg6p",
    dropdownShown: o,
    enablePreview: !0,
    formatter: el,
    id: t,
    minTop: 6,
    onChange: l,
    onMouseDown: dG,
    property: n,
    recordingKey: generateRecordingKey(s, "blendMode"),
    willShowDropdown: () => (trackEventAnalytics("editor-blend-mode-dropdown-show"), Promise.resolve()),
    children: h
  });
}
let eu = GZ(j4);
let ep = "PASS_THROUGH";
function eh({
  recordingKey: e,
  id: t
}) {
  let [s, n] = sL();
  let {
    getTriggerProps,
    manager,
    updatePreview,
    onSubmit,
    valueBeforePreview
  } = _$$Z({
    id: t,
    blendMode: s,
    onChange: n
  });
  let {
    onClick,
    ...p
  } = getTriggerProps();
  return qg(s, ep) || manager.isOpen ? jsx(EventShield, {
    eventListeners: ["onWheel"],
    children: jsxs(bL, {
      manager,
      children: [jsx(_$$d, {
        recordingKey: e,
        "aria-label": getI18nString("properties.dropdown.apply_blend_mode"),
        htmlAttributes: {
          "data-tooltip": getI18nString("properties.dropdown.apply_blend_mode"),
          "data-tooltip-type": KindEnum.TEXT
        },
        onClick: e => {
          trackEventAnalytics("editor-blend-mode-dropdown-show");
          onClick(e);
        },
        ...p,
        children: jsx(MK, {
          value: s,
          defaultBlendMode: ep
        })
      }), jsx(mc, {
        children: jsx(_$$m2, {
          selectedItem: valueBeforePreview ?? s,
          options: eu,
          onChange: onSubmit,
          recordingKey: e,
          onFocus: updatePreview
        })
      })]
    })
  }) : jsx(_$$K2, {
    "aria-label": getI18nString("properties.dropdown.remove_blend_mode"),
    htmlAttributes: {
      "data-tooltip": getI18nString("properties.dropdown.remove_blend_mode"),
      "data-tooltip-type": KindEnum.TEXT
    },
    onClick: () => n(ep),
    children: jsx(MK, {
      value: s,
      defaultBlendMode: ep
    })
  });
}
let $$eg1 = "layer-blend-mode";
let $$ef2 = "layer-blend-mode-select";
let $$ex3 = ["OPACITY"];
export function $$ey4() {
  let e = Jo();
  let t = Df();
  let s = kl("visible");
  let r = $H();
  let i = useMemo(On, []);
  let {
    isDefReferencedBySelection,
    selectedGUIDs
  } = selectWithShallowEqual(e => ({
    isDefReferencedBySelection: !!i(e, RR.VISIBLE),
    selectedGUIDs: Sh(e)
  }));
  let c = !Yc(RR.VISIBLE, selectedGUIDs) || isDefReferencedBySelection;
  let [u] = lJ("opacity");
  let h = useRef(null);
  let x = useCallback((e, t) => {
    fullscreenValue.updateSelectionProperties({
      opacity: e
    }, {
      shouldCommit: t
    });
    e > 0 && !isDefReferencedBySelection && fullscreenValue.updateSelectionProperties({
      visible: !0
    }, {
      shouldCommit: t
    });
  }, [isDefReferencedBySelection]);
  let _ = AP();
  return {
    shown: t,
    enabled: e,
    visible: s,
    visibilityIsBoundToVariable: r,
    shouldShowVisibilityBindingIcon: c,
    shouldShowPropPill: !r,
    opacity: u,
    opacityInputRef: h,
    onOpacityChange: x,
    handleMirroring: kl("handleMirroring"),
    isVectorEditMode: _,
    selectedGUIDs
  };
}
let $$e_0 = memo(function (e) {
  let t = useRef(null);
  let {
    shown,
    enabled,
    visible,
    visibilityIsBoundToVariable,
    shouldShowVisibilityBindingIcon,
    shouldShowPropPill,
    opacity,
    opacityInputRef,
    onOpacityChange,
    handleMirroring,
    isVectorEditMode,
    selectedGUIDs
  } = $$ey4();
  let {
    cornerRadiusEnabled,
    cornerControlIconButton,
    independentCornerControlEnabled,
    hideCornerSmoothing,
    cornerSmoothingPicker
  } = _$$ei({
    recordingKey: e.recordingKey,
    rowRef: t
  });
  let W = useDispatch();
  let $ = handleMirroring && isVectorEditMode && jsx(Cs, {
    handleMirroring,
    recordingKey: generateRecordingKey(e, "mirroring")
  });
  return jsxs(Zk, {
    "data-testid": "appearance-panel",
    children: [jsxs(Wv, {
      titleTx: renderI18nText("fullscreen.appearance_panel.appearance"),
      children: [!visibilityIsBoundToVariable && !shouldShowVisibilityBindingIcon && jsx(yQ, {
        nodeField: RR.VISIBLE,
        defaultValue: visible,
        guids: selectedGUIDs
      }), jsx(_$$M, {
        showLibrarySets: !1,
        recordingKey: "frameLevel"
      }), jsx(_$$C2, {
        recordingKey: e.recordingKey
      }), shouldShowVisibilityBindingIcon && jsx(K, {
        recordingKey: e.recordingKey
      }), jsx(ed, {
        id: $$ef2,
        blendModeRowId: $$eg1,
        recordingKey: e.recordingKey
      })]
    }), jsx(fn, {
      ref: t,
      leftInput: jsx(sA, {
        recordingKey: generateRecordingKey(e, "layerOpacityInputWrapper"),
        fields: $$ex3,
        disabled: !1,
        resolvedType: VariableResolvedDataType.FLOAT,
        currentFieldValue: isValidValue(opacity) ? opacity : void 0,
        inputRef: opacityInputRef,
        hasBindingContextMenu: !0,
        children: jsx(Pd, {
          dispatch: W,
          forwardedRef: opacityInputRef,
          inputClassName: _$$h,
          isTokenizable: !0,
          mixedMathHandler: eb,
          noBorderOnHover: !0,
          onValueChange: onOpacityChange,
          recordingKey: generateRecordingKey(e, "opacity"),
          ui3RightJustifyPercentSign: !1,
          value: opacity,
          children: jsx("div", {
            className: s,
            children: jsx(_$$N, {})
          })
        })
      }),
      rightInput: jsx(_$$C, {
        recordingKey: e.recordingKey,
        disabled: !cornerRadiusEnabled
      }),
      icon: cornerControlIconButton,
      leftLabel: renderI18nText("fullscreen.properties_panel.section_appearance.label_opacity"),
      rightLabel: renderI18nText("fullscreen.properties_panel.transform_panel.corner_radius")
    }), $ && jsx(DE, {
      label: renderI18nText("fullscreen.properties_panel.section_vector.label_mirroring"),
      input: $,
      icon: null
    }), independentCornerControlEnabled && jsx(_$$j, {
      recordingKey: generateRecordingKey(e, "independentCornerRadius")
    }), (shown.count || shown.starInnerScale) && jsx(cU, {
      countShown: shown.count,
      countDisabled: !enabled.count,
      starInnerScaleShown: shown.starInnerScale,
      starInnerScaleDisabled: !enabled.starInnerScale,
      recordingKey: e.recordingKey
    }), shown.arcData && jsx(Je, {
      arcDataDisabled: !enabled.arcData,
      recordingKey: e.recordingKey
    }), jsx(_$$r, {
      id: $$eg1,
      blendModeSelectId: $$ef2,
      recordingKey: e.recordingKey
    }), shouldShowPropPill && jsx(_$$L, {
      nodeField: RR.VISIBLE,
      label: null
    }), jsx(wu, {
      showExplicitOnly: !0,
      recordingKey: "layerPanel-variableModeEntries"
    }), jsx(_$$m, {}), cornerSmoothingPicker.showing && jsx(_$$K, {
      defaultPosition: cornerSmoothingPicker.initialPosition,
      onClose: hideCornerSmoothing,
      recordingKey: generateRecordingKey(e, "advanced")
    })]
  });
});
let eb = new _$$b();
export const X2 = $$e_0;
export const Rv = $$eg1;
export const ZJ = $$ef2;
export const qP = $$ex3;
export const I_ = $$ey4;