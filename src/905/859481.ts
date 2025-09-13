import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { d as _$$d } from "../905/976845";
import { A as _$$A } from "../905/891805";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { generateRecordingKey } from "../figma_app/878298";
import { E as _$$E } from "../905/277716";
import { getI18nString, renderI18nText } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { isValidValue, isInvalidValue, getCommonFromArray } from "../905/216495";
import { Gt } from "../905/275640";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { a2 } from "../figma_app/762558";
import { om } from "../figma_app/395097";
import { Ms, Er } from "../905/873331";
import { Kt } from "../figma_app/156285";
import { _2 } from "../905/185121";
import { CL } from "../figma_app/722913";
import { dL } from "../figma_app/473914";
import { useDispatch } from "react-redux";
import { K } from "../905/443068";
import { F as _$$F } from "../905/427107";
import { Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { o as _$$o } from "../905/96108";
import { dG } from "../figma_app/753501";
import { bC, kC, Ey } from "../figma_app/789050";
import { sK } from "../905/794875";
import { OH, EN, Gp, Sp, SO, NC, yh } from "../905/149861";
import { fn } from "../figma_app/811257";
import { P as _$$P } from "../905/460261";
import { vc, O1, Z6, GB, Is, ug } from "../figma_app/228217";
import { au, v9 } from "../figma_app/161708";
import { R8, V0, kW, e6, Jt } from "../figma_app/359164";
let F = new OH();
let M = new EN();
function j(e) {
  let t = useDispatch();
  let i = bC();
  let r = e.leftEndCap === e.rightEndCap && isValidValue(e.leftEndCap) && -1 !== Gp.indexOf(e.leftEndCap);
  let a = !!e.leftEndCap && !!e.rightEndCap && isValidValue(e.leftEndCap) && isValidValue(e.rightEndCap) && e.leftEndCap !== e.rightEndCap;
  let s = t => {
    if (!isInvalidValue(t)) return e.isUI3 ? M.format(t) : " ";
  };
  let o = Sp(e.leftEndCap, "left");
  let d = jsx("span", {
    className: vc,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": _$$P(getI18nString("fullscreen.properties_panel.fill.start_point")),
    children: jsxs(SO, {
      ariaLabel: getI18nString("fullscreen.properties_panel.fill.start_point"),
      blurOnChange: !0,
      "data-tooltip": getI18nString("fullscreen.properties_panel.fill.start_point"),
      "data-tooltip-type": KindEnum.TEXT,
      dispatch: t,
      dropdownOverride: s(e.leftEndCap),
      dropdownShown: e.dropdownShown,
      dropdownWidth: 176,
      enablePreview: !0,
      formatter: F,
      icon: o,
      iconClassName: O1,
      id: "start-end-point-select",
      onChange: (t, i = yesNoTrackingEnum.YES) => {
        if (("CHANGED_END" === e.syncState || "CHANGED_BOTH" === e.syncState) && (r = !1), e.updateSyncState("changed start"), r && -1 !== Gp.indexOf(t)) e.onChange({
          leftEndCap: t,
          rightEndCap: t
        }, i);else if (e.onChange({
          leftEndCap: t
        }, i), t === e.rightEndCap) {
          e.updateSyncState("reset");
          return;
        }
      },
      property: e.leftEndCap,
      recordingKey: generateRecordingKey(e, "startEndPoint"),
      children: [Gp.map(t => jsx(NC, {
        value: t,
        recordingKey: generateRecordingKey(e, "startEndPoint", t),
        children: jsxs("span", {
          className: Z6,
          children: [Sp(t, "left"), jsx(_$$o, {
            text: F.format(t)
          })]
        })
      }, t)), i && jsx(sK, {}), i && yh.map(t => jsx(NC, {
        value: t,
        recordingKey: generateRecordingKey(e, "startEndPoint", t),
        children: jsxs("span", {
          className: Z6,
          children: [Sp(t, "left"), jsx(_$$o, {
            text: F.format(t)
          })]
        })
      }, t))]
    })
  });
  let u = jsx(K, {
    recordingKey: generateRecordingKey(e, "swapCap"),
    onClick: () => {
      permissionScopeHandler.user("swap-stroke-end-caps", () => {
        Fullscreen && (Fullscreen.swapStrokeEndCaps(), Fullscreen.commit());
      });
    },
    "aria-label": getI18nString("fullscreen.properties_panel.fill.swap_start_and_end_points"),
    htmlAttributes: {
      onMouseDown: dG,
      "data-tooltip": getI18nString("fullscreen.properties_panel.fill.swap_start_and_end_points"),
      "data-tooltip-type": KindEnum.TEXT
    },
    children: jsx(_$$F, {})
  });
  let m = a ? jsx("div", {
    className: GB,
    children: u
  }) : jsx(Fragment, {});
  let f = Sp(e.rightEndCap, "right");
  let _ = jsx("span", {
    className: Is,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": _$$P(getI18nString("fullscreen.properties_panel.fill.end_point")),
    children: jsxs(SO, {
      ariaLabel: getI18nString("fullscreen.properties_panel.fill.end_point"),
      blurOnChange: !0,
      dispatch: t,
      dropdownAlignment: "right",
      dropdownOverride: s(e.rightEndCap),
      dropdownShown: e.dropdownShown,
      dropdownWidth: 176,
      enablePreview: !0,
      formatter: F,
      icon: f,
      iconClassName: O1,
      id: "end-end-point-select",
      onChange: (t, i = yesNoTrackingEnum.YES) => {
        if (("CHANGED_START" === e.syncState || "CHANGED_BOTH" === e.syncState) && (r = !1), e.updateSyncState("changed end"), r && -1 !== Gp.indexOf(t)) e.onChange({
          leftEndCap: t,
          rightEndCap: t
        }, i);else if (e.onChange({
          rightEndCap: t
        }, i), e.leftEndCap === t) {
          e.updateSyncState("reset");
          return;
        }
      },
      property: e.rightEndCap,
      recordingKey: generateRecordingKey(e, "endEndPoint"),
      children: [Gp.map(t => jsx(NC, {
        value: t,
        recordingKey: generateRecordingKey(e, "endEndPoint", t),
        children: jsxs("span", {
          className: Z6,
          children: [Sp(t, "right"), jsx(_$$o, {
            text: F.format(t)
          })]
        })
      }, t)), i && jsx(sK, {}), i && yh.map(t => jsx(NC, {
        value: t,
        recordingKey: generateRecordingKey(e, "endEndPoint", t),
        children: jsxs("span", {
          className: Z6,
          children: [Sp(t, "right"), jsx(_$$o, {
            text: F.format(t)
          })]
        })
      }, t))]
    })
  });
  return e.isUI3 ? jsx(fn, {
    leftLabel: renderI18nText("fullscreen.properties_panel.section_stroke.label_startPoint"),
    leftInput: d,
    rightLabel: renderI18nText("fullscreen.properties_panel.section_stroke.label_endPoint"),
    rightInput: _,
    icon: m
  }) : jsxs(Fragment, {
    children: [d, m, _]
  });
}
function V(e) {
  let t = R8();
  let i = V0();
  kC();
  let r = Ey(i);
  let a = kW(i);
  let d = (t, i = yesNoTrackingEnum.YES) => {
    if (e.setIndividualBorderOption(t), t === om.CUSTOM) return;
    let n = e6(t);
    fullscreenValue.updateSelectionProperties(n, {
      shouldCommit: i
    });
    a2("strokePaints");
  };
  return jsx(dL, {
    "data-testid": "stroke-controls-row",
    ref: e.forwardedRef,
    leftLabel: renderI18nText("properties.label.position"),
    leftInput: jsx(au, {
      onChange: (...t) => {
        getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor-paints-panel-stroke-change", {
          key: "align"
        });
        e.onBordersAlignmentChange(...t);
      },
      dispatch: e.dispatch,
      dropdownShown: e.dropdownShown,
      strokeAlign: e.strokeAlign,
      gridLeft: !0,
      recordingKey: generateRecordingKey(e, "align"),
      disabled: !r
    }),
    rightLabel: renderI18nText("fullscreen.properties_panel.section_stroke.label_weight"),
    rightInput: jsx(v9, {
      borderOption: e.individualBorderOption,
      strokeWeight: e.borderSharedWeight,
      onChange: (...t) => {
        getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor-paints-panel-stroke-change", {
          key: "weight"
        });
        e.onNonPaintsChange(...t);
      },
      gridRight: !0,
      recordingKey: generateRecordingKey(e, "weight"),
      disabled: !a,
      dataTestId: "stroke-weight",
      selectBorderSides: d
    }),
    leftIcon: jsx(G, {
      disableAdvancedSettings: e.disableAdvancedSettings,
      isUI3: !0,
      recordingKey: generateRecordingKey(e, "more"),
      showStrokePicker: e.showStrokePicker,
      stopPropagation: e.stopPropagation,
      toggleSettings: e.toggleSettings
    }),
    rightIcon: t ? jsx(Ms, {
      borderOption: e.individualBorderOption,
      setBorderOption: e.setIndividualBorderOption,
      onChange: d,
      recordingKey: generateRecordingKey(e, "borderSide")
    }) : null
  });
}
function G({
  disableAdvancedSettings: e,
  isUI3: t,
  recordingKey: i,
  showStrokePicker: s,
  stopPropagation: o,
  toggleSettings: l
}) {
  return l && t ? jsx(_$$E, {
    name: "toggle_advanced_settings_button",
    children: jsx(_$$d, {
      "aria-expanded": s,
      onClick: l,
      disabled: e,
      recordingKey: i,
      "aria-label": getI18nString("fullscreen.properties_panel.fill.advanced_stroke_settings"),
      htmlAttributes: {
        onMouseDown: o,
        "data-tooltip": getI18nString("fullscreen.properties_panel.fill.advanced_stroke_settings"),
        "data-tooltip-type": KindEnum.TEXT
      },
      children: jsx(_$$A, {})
    })
  }) : null;
}
function z(e) {
  return jsx("div", {
    className: ug,
    ref: e.forwardedRef,
    children: jsx(j, {
      dropdownShown: e.dropdownShown,
      isUI3: !0,
      leftEndCap: e.leftEndCap,
      onChange: e.onNonPaintsChange,
      recordingKey: e.recordingKey,
      rightEndCap: e.rightEndCap,
      syncState: e.syncState,
      updateSyncState: e.updateSyncState
    })
  });
}
export function $$H0(e) {
  let t = R8();
  let i = kC();
  let r = V0();
  let a = Jt();
  let s = CL();
  let o = Gt("strokeBrushGuid");
  let d = getCommonFromArray(o);
  let c = Kt();
  return jsxs(Fragment, {
    children: [jsx(V, {
      ...e,
      forwardedRef: i ? void 0 : e.forwardedRef,
      disableAdvancedSettings: isInvalidValue(s)
    }), t && e.individualBorderOption === om.CUSTOM && jsx(Er, {
      onChange: e.onNonPaintsChange
    }), i && jsx(z, {
      dashCap: e.dashCap,
      dashPattern: e.dashPattern,
      dropdownShown: e.dropdownShown,
      forwardedRef: e.forwardedRef,
      leftEndCap: e.leftEndCap,
      onNonPaintsChange: e.onNonPaintsChange,
      recordingKey: e.recordingKey,
      rightEndCap: e.rightEndCap,
      showStrokePicker: e.showStrokePicker,
      stopPropagation: e.stopPropagation,
      syncState: e.syncState,
      toggleSettings: e.toggleSettings,
      updateSyncState: e.updateSyncState
    }), e.showStrokePicker && isValidValue(s) && jsx(_2, {
      arcRadius: e.arcRadius,
      arcSweep: e.arcSweep,
      brushType: c,
      connectorLineStyle: e.connectorLineStyle,
      dashCap: e.dashCap,
      dashPattern: e.dashPattern,
      dropdownShown: e.dropdownShown,
      maxStrokeWeight: e.maxStrokeWeight,
      miterLimitAngle: e.miterLimitAngle,
      numSelectedByType: e.numSelectedByType,
      onChange: e.onNonPaintsChange,
      pickerShown: e.pickerShown,
      recordingKey: generateRecordingKey(e, "advanced"),
      strokeBrushGuid: d,
      strokeCap: e.strokeCap,
      strokeJoin: e.strokeJoin,
      strokePanelMode: r,
      strokePanelTerminalPointCount: a,
      strokeType: s,
      terminalCap: e.terminalCap
    })]
  });
}
export const t = $$H0;