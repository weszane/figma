import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useContext, useCallback, useId, useState, useEffect, useRef, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bL, c$, RT } from "../905/867927";
import { q as _$$q } from "../905/932270";
import { bL as _$$bL } from "../905/911410";
import { vo, Y9, nB } from "../figma_app/272243";
import { t as _$$t } from "../905/398894";
import { h as _$$h } from "../905/104000";
import { a as _$$a } from "../905/361302";
import { UI3ConditionalWrapper } from "../905/341359";
import { DistributionType, AppStateTsApi, DrawingElementType, Fullscreen, DesignGraphElements } from "../figma_app/763686";
import { scopeAwareFunction } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { parsePxInt } from "../figma_app/783094";
import { getFilteredFeatureFlags } from "../905/717445";
import { generateRecordingKey } from "../figma_app/878298";
import { useSprigWithSampling } from "../905/99656";
import { Point } from "../905/736624";
import { Vi, GI } from "../905/125333";
import { o as _$$o } from "../905/96108";
import { rM } from "../figma_app/241541";
import { getI18nString, renderI18nText } from "../905/303541";
import { XE } from "../figma_app/91703";
import { deepEqual } from "../905/382883";
import { W3 } from "../905/232641";
import { vx } from "../figma_app/175258";
import { fullscreenValue } from "../figma_app/455680";
import { isInvalidValue, MIXED_MARKER, isValidValue } from "../905/216495";
import { lJ } from "../905/275640";
import { ax } from "../figma_app/722362";
import { getObservableValue, getObservableOrFallback } from "../figma_app/84367";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { $j, M4 } from "../figma_app/178475";
import { u as _$$u } from "../figma_app/110635";
import { Tv } from "../figma_app/151869";
import { nA } from "../905/203369";
import { M as _$$M } from "../905/983212";
import { Wn, dG } from "../figma_app/789050";
import { qJ, Hd, x4 } from "../figma_app/359164";
import { l6, c$ as _$$c$, sK } from "../905/794875";
import { cS } from "../figma_app/334459";
import { v as _$$v } from "../905/439487";
import { o as _$$o2 } from "../905/89370";
import { parseSessionLocalID, defaultSessionLocalID } from "../905/871411";
import { i as _$$i } from "../905/382332";
import { Bu, Gx, T6, UH } from "../figma_app/156285";
import { E as _$$E } from "../905/658074";
import { K as _$$K } from "../905/532723";
import { a as _$$a2 } from "../905/612746";
import { n as _$$n } from "../905/540741";
import { Vb, hl, i as _$$i2 } from "../figma_app/722913";
import { D7, iI } from "../905/827182";
import eo from "classnames";
import { Q as _$$Q } from "../figma_app/104130";
import { JU } from "../figma_app/626177";
import { Gy, ir } from "../905/159279";
import { AS, n4 } from "../figma_app/709323";
import { Z as _$$Z, Fr } from "../905/633462";
import { Y as _$$Y } from "../905/701291";
import { k as _$$k2 } from "../905/988992";
import { Um } from "../905/848862";
import { x as _$$x, o as _$$o3 } from "../905/705812";
import { lF, lN, Y4 } from "../figma_app/384713";
import { hhC } from "../figma_app/27776";
let u = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m5.5 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m6-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z",
      clipRule: "evenodd"
    })
  });
});
let m = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M11 8.5A2.5 2.5 0 0 1 13.5 6h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 0 12 8.5v7A2.5 2.5 0 0 1 9.5 18h-3a.5.5 0 0 1 0-1h3a1.5 1.5 0 0 0 1.5-1.5z",
      clipRule: "evenodd"
    })
  });
});
let N = new class {
  parse(e) {
    let t = [];
    e.split(/[ ,]+/g).forEach(e => {
      if (!e.length) return;
      let i = parseFloat(e);
      if (!isFinite(i)) throw Error("Could not parse dash input");
      i = Math.max(0, i);
      t.push(i);
    });
    t.length % 2 == 1 && (t = t.concat(t).slice(0, 8));
    return t;
  }
  getNudgeAmount(e) {
    return e ? 10 : 1;
  }
  incrementBy(e, t, i) {
    let n = e.slice();
    for (let r = 0; r < e.length; r++) i[r] && (n[r] += t, n[r] = Math.max(n[r], 0));
    return n;
  }
  isEqual(e, t) {
    return deepEqual(e, t);
  }
  format(e) {
    return e?.map(e => parseFloat(e.toFixed(2))).join(", ");
  }
  getDashRanges(e) {
    let t = [];
    let i = 0;
    for (;;) {
      let n = e.slice(i).match(/[^ ,]+/);
      if (!n || void 0 === n.index) break;
      let r = i + n.index;
      let a = r + n[0].length;
      t.push({
        start: r,
        end: a
      });
      i = a + 1;
    }
    return t;
  }
  getIncrementTargets(e, t) {
    let {
      start,
      end
    } = t;
    let r = this.getDashRanges(e);
    let a = {};
    for (let e = 0; e < r.length; e++) r[e].end < start || r[e].start > end || (a[e] = !0);
    if (Object.keys(a).length > 1) for (let e = 0; e < r.length; e++) a[e] && (end === r[e].start || r[e].end === start) && delete a[e];
    return a;
  }
  getSelection(e, t) {
    let i = {
      start: e.length,
      end: 0
    };
    let n = this.getDashRanges(e);
    for (let e in t) {
      i.start = Math.min(i.start, n[parseInt(e)].start);
      i.end = Math.max(i.end, n[parseInt(e)].end);
    }
    return i;
  }
}();
var el = eo;
function eh() {
  let {
    showIllustrationSliderInputs
  } = useContext(_$$Q);
  return showIllustrationSliderInputs;
}
function eg({
  children: e,
  fullWidth: t
}) {
  return jsx("div", {
    className: el()("styled_components--inputContainer--8rZr7", {
      "styled_components--fullWidth--wgZp-": t
    }),
    children: e
  });
}
function ef({
  children: e,
  isFullWidthInput: t
}) {
  return jsx("div", {
    className: el()("styled_components--advancedStrokeRow--5g6NO", {
      "styled_components--inlineLabels--J-6hb": !t
    }),
    children: e
  });
}
function e_() {
  return jsx("hr", {
    className: "styled_components--divider--9RT6t"
  });
}
function eA({
  children: e
}) {
  return jsx(JU, {
    className: "styled_components--label--yrPaY",
    children: e
  });
}
var ey = (e => (e[e.PERCENT = 0] = "PERCENT", e[e.ANGLE = 1] = "ANGLE", e))(ey || {});
function eb({
  label: e,
  isFullWidthInput: t,
  input: i
}) {
  return jsxs(ef, {
    isFullWidthInput: t,
    children: [jsx(eA, {
      children: e
    }), jsx(eg, {
      fullWidth: t,
      children: jsx("div", {
        className: "styled_components--inputContainerInner--ZuozI",
        children: i
      })
    })]
  });
}
function ev({
  label: e,
  isFullWidthInput: t,
  input: i,
  icon: r
}) {
  return jsxs(ef, {
    isFullWidthInput: t,
    children: [jsx(eA, {
      children: e
    }), jsxs(eg, {
      fullWidth: t,
      children: [jsx("div", {
        className: "styled_components--smallInputContainer--y4upP",
        children: i
      }), jsx("div", {
        className: "styled_components--iconContainer--41sN-",
        children: r
      })]
    })]
  });
}
function eI(e) {
  let t = eh();
  let {
    config,
    onValueChangeSideEffect,
    valueType
  } = e;
  let o = useCallback(e => {
    onValueChangeSideEffect?.(e);
    config.setValue(e);
  }, [config, onValueChangeSideEffect]);
  let {
    getLabel
  } = i;
  let d = Gy({
    transformType: e.transformType ?? ir.LINEAR,
    min: e.config.min,
    sliderMax: e.config.sliderMax
  });
  let c = "mixedMathHandler" in e.config ? e.config.mixedMathHandler : void 0;
  let u = (() => {
    switch (valueType) {
      case 0:
        return AS;
      case 1:
        return n4;
    }
  })();
  let p = (() => {
    switch (valueType) {
      case 0:
        return _$$Z;
      case 1:
        return Fr;
    }
  })();
  let m = jsx(u, {
    ariaLabel: getLabel(),
    dataTooltip: getLabel(),
    fullWidth: !0,
    icon: e.icon,
    inputMax: e.config.max,
    min: e.config.min,
    mixedMathHandler: c,
    onValueChange: o,
    recordingKey: e.recordingKey,
    sliderMax: e.config.sliderMax,
    sliderValueTransform: d,
    value: e.config.value
  });
  let h = jsx(p, {
    "data-tooltip-type": KindEnum.TEXT,
    dataTooltip: getLabel(),
    disabled: !1,
    max: e.config.max,
    min: e.config.min,
    mixedMathHandler: c,
    onValueChange: o,
    recordingKey: e.recordingKey,
    value: config.value,
    children: e.icon
  });
  return jsx(eb, {
    label: getLabel(),
    isFullWidthInput: t,
    input: t ? m : h
  });
}
function eE({
  children: e
}) {
  return jsx("div", {
    className: "styled_components--modalBody--zjUY3",
    children: e
  });
}
function ex(e) {
  let {
    defaultStyleAtom
  } = e;
  let i = eh();
  let r = jsx(eI, {
    config: Vb("gap", defaultStyleAtom),
    icon: jsx(_$$E, {}),
    valueType: ey.PERCENT,
    recordingKey: generateRecordingKey(e.recordingKey, "brush", "gap")
  });
  let a = jsx(eI, {
    config: Vb("wiggle", defaultStyleAtom),
    icon: jsx(_$$K, {}),
    valueType: ey.PERCENT,
    recordingKey: generateRecordingKey(e.recordingKey, "brush", "wiggle")
  });
  let s = jsx(eI, {
    config: Vb("sizeJitter", defaultStyleAtom),
    icon: jsx(_$$a2, {}),
    valueType: ey.PERCENT,
    recordingKey: generateRecordingKey(e.recordingKey, "brush", "sizeJitter")
  });
  let o = jsx(eI, {
    config: Vb("angularJitter", defaultStyleAtom),
    icon: jsx(_$$n, {}),
    valueType: ey.ANGLE,
    recordingKey: generateRecordingKey(e.recordingKey, "brush", "angularJitter")
  });
  let l = jsx(eI, {
    config: Vb("rotation", defaultStyleAtom),
    icon: jsx(_$$a, {}),
    valueType: ey.ANGLE,
    recordingKey: generateRecordingKey(e.recordingKey, "brush", "rotation")
  });
  return jsxs(Fragment, {
    children: [r, a, getFilteredFeatureFlags().ce_il_scatter_size_jitter && s, o, l, getFeatureFlags().ce_il_var_width_points && jsxs(Fragment, {
      children: [jsx(e_, {}), jsx(ev, {
        isFullWidthInput: i,
        label: getI18nString("fullscreen.properties_panel.width_profile.label"),
        input: jsx(D7, {
          source: "flyout",
          recordingKey: generateRecordingKey(e.recordingKey, "widthProfile")
        }),
        icon: jsx(iI, {
          recordingKey: generateRecordingKey(e.recordingKey, "flipWidthProfile")
        })
      })]
    })]
  });
}
function eS(e) {
  let {
    onChange
  } = e;
  let i = Bu();
  let a = useCallback((e, i) => {
    let n = parseSessionLocalID(e.guid);
    if (!n) return;
    let r = {
      strokeBrushGuid: n
    };
    e.type === DistributionType.SCATTER && (r.scatterStrokeSettings = e.settings);
    onChange(r, i);
  }, [onChange]);
  return jsxs(Fragment, {
    children: [jsx(_$$i, {
      brushList: i,
      onChange: a,
      value: e.strokeBrushGuid ?? defaultSessionLocalID,
      brushInputClassName: "advanced_stroke--newBrushButton--sca9V",
      recordingKey: generateRecordingKey(e.recordingKey, "brushDropdownTrigger"),
      positioningProps: e.positioningProps
    }), e.brushType === DistributionType.STRETCH && jsx(ew, {
      defaultStyleAtom: e.defaultStyleAtom,
      recordingKey: generateRecordingKey(e.recordingKey, "stretchBrushSettings")
    }), e.brushType === DistributionType.SCATTER && jsx(ex, {
      defaultStyleAtom: e.defaultStyleAtom,
      recordingKey: generateRecordingKey(e.recordingKey, "scatterBrushSettings")
    })]
  });
}
function ew(e) {
  let {
    orientation,
    setOrientation
  } = hl(e.defaultStyleAtom);
  let r = jsxs(bL, {
    value: isInvalidValue(orientation) ? void 0 : orientation,
    onChange: setOrientation,
    legend: jsx(_$$q, {
      children: getI18nString("fullscreen.properties_panel.direction")
    }),
    children: [jsx(c$, {
      icon: jsx(_$$v, {}),
      value: "REVERSE",
      "aria-label": getI18nString("fullscreen.properties_panel.left_arrow")
    }), jsx(c$, {
      icon: jsx(_$$o2, {}),
      value: "FORWARD",
      "aria-label": getI18nString("fullscreen.properties_panel.right_arrow")
    })]
  });
  return jsxs(Fragment, {
    children: [jsx(eb, {
      isFullWidthInput: !1,
      label: getI18nString("fullscreen.properties_panel.direction"),
      input: r
    }), getFeatureFlags().ce_il_var_width_points && jsxs(Fragment, {
      children: [jsx(e_, {}), jsx(ev, {
        isFullWidthInput: !1,
        label: getI18nString("fullscreen.properties_panel.width_profile.label"),
        input: jsx(D7, {
          source: "flyout",
          recordingKey: generateRecordingKey(e.recordingKey, "widthProfile")
        }),
        icon: jsx(iI, {
          recordingKey: generateRecordingKey(e.recordingKey, "flipWidthProfile")
        })
      })]
    })]
  });
}
function eN(e) {
  let {
    onChange,
    endPointProperty,
    strokePanelMode,
    strokePanelTerminalPointCount
  } = e;
  let s = Um();
  let o = getObservableValue(AppStateTsApi?.propertiesPanelState().isVertexSelectionAndHasEndpoints, !1);
  return jsxs(Fragment, {
    children: [jsx(eI, {
      config: _$$i2("frequency", e.defaultStyleAtom),
      transformType: ir.QUADRATIC,
      icon: jsx(_$$Y, {}),
      valueType: ey.PERCENT,
      recordingKey: generateRecordingKey(e, "frequency")
    }), jsx(eI, {
      config: _$$i2("wiggle", e.defaultStyleAtom),
      transformType: ir.QUADRATIC,
      icon: jsx(_$$K, {}),
      valueType: ey.PERCENT,
      recordingKey: generateRecordingKey(e, "wiggle")
    }), jsx(eI, {
      config: _$$i2("smoothen", e.defaultStyleAtom),
      transformType: ir.QUADRATIC,
      icon: jsx(_$$k2, {}),
      valueType: ey.PERCENT,
      recordingKey: generateRecordingKey(e, "smoothen")
    }), (o || strokePanelTerminalPointCount > 0) && jsxs(Fragment, {
      children: [jsx(e_, {}), jsx(_$$x, {
        onChange,
        endPoint: endPointProperty,
        dropdownShown: s,
        strokePanelTerminalPointCount: e.strokePanelTerminalPointCount,
        disabled: e.endPointSettingsDisabled,
        recordingKey: generateRecordingKey(e.recordingKey, "endPoint"),
        strokePanelMode
      })]
    })]
  });
}
let eD = "stroke_settings--adjustedGridLayout--RFyl0";
let eL = "stroke_settings--lineStyleOption--Lau7G";
let eF = parsePxInt(hhC);
let eM = l6;
let ej = _$$c$;
class eU {
  constructor() {
    this.format = e => {
      switch (e) {
        case "LINE":
          return getI18nString("fullscreen.properties_panel.stroke_settings.solid");
        case "SIMPLE_DASH":
          return getI18nString("fullscreen.properties_panel.stroke_settings.simple_dash");
        case "CUSTOM_DASH":
          return getI18nString("fullscreen.properties_panel.stroke_settings.custom");
        default:
          return "";
      }
    };
  }
}
function eB(e) {
  if (e) {
    if (isInvalidValue(e)) return MIXED_MARKER;
    if (2 === e.length) return e[0];
  }
}
function eV(e) {
  let t = useDispatch();
  let i = ax();
  let l = new eU();
  let d = useId();
  let {
    strokePanelMode,
    maxStrokeWeight,
    dashPattern,
    connectorLineStyle
  } = e;
  let [b, v] = useState(qJ(dashPattern));
  useEffect(() => {
    v(qJ(dashPattern));
  }, [dashPattern]);
  let [E, x] = useState(!0);
  let [S, C] = useState();
  let k = eB(dashPattern);
  let R = function (e) {
    if (e) {
      if (isInvalidValue(e)) return MIXED_MARKER;
      if (2 === e.length) return e[1];
    }
  }(dashPattern);
  let P = () => {
    if (!dashPattern || isInvalidValue(dashPattern) || 2 !== dashPattern.length) return;
    x(!0);
    let t = dashPattern[0];
    e.onChange({
      dashPattern: [t, t]
    });
  };
  let D = useRef("NONE");
  let F = createRef();
  let j = createRef();
  let G = createRef();
  useEffect(() => {
    if ("NONE" !== D.current) {
      if ("FOCUS_CURRENT_EVENT" === D.current) switch (b) {
        case "SIMPLE_DASH":
          j.current?.focus();
          j.current?.select();
          break;
        case "CUSTOM_DASH":
          F.current?.focus();
          F.current?.select();
      }
      "FOCUS_NEXT_EVENT" === D.current ? D.current = "FOCUS_CURRENT_EVENT" : D.current = "NONE";
    }
  }, [dashPattern, b, j, F]);
  let z = Hd(e.dashCap);
  let W = strokePanelMode === DrawingElementType.VERTEX || strokePanelMode === DrawingElementType.ENDPOINT;
  let K = useSelector(e => e.mirror.selectionProperties.numSelectedByType);
  let Z = vx(K, "CONNECTOR");
  let X = S ?? b;
  let Q = jsxs(bL, {
    value: isValidValue(connectorLineStyle) ? connectorLineStyle : void 0,
    onChange: t => {
      e.onChange({
        connectorLineStyle: t
      });
    },
    legend: jsx(_$$q, {
      children: getI18nString("fullscreen.properties_panel.stroke_settings.path_style")
    }),
    recordingKey: generateRecordingKey(e, "pathStyle"),
    children: [jsx(c$, {
      icon: jsx(_$$h, {}),
      value: "STRAIGHT",
      "aria-label": getI18nString("fullscreen.properties_panel.stroke_settings.straight")
    }), jsx(c$, {
      icon: jsx(m, {}),
      value: "ELBOWED",
      "aria-label": getI18nString("fullscreen.properties_panel.stroke_settings.elbowed")
    })]
  });
  let J = jsxs(eM, {
    ariaLabelledBy: d,
    disabled: W,
    dispatch: t,
    dropdownShown: e.dropdownShown,
    dropdownWidth: 120,
    enablePreview: i,
    formatter: l,
    icon: function (e) {
      switch (e) {
        case "LINE":
          return jsx(_$$t, {});
        case "SIMPLE_DASH":
          return jsx(u, {});
        default:
          return;
      }
    }(b),
    iconClassName: W ? "stroke_settings--lineStyleSvgDisabled--yc1q6" : "stroke_settings--lineStyleSvg--dSwnh stroke_settings--lineStyleSvgDisabled--yc1q6",
    id: "line-style-select",
    onChange: (t, i = yesNoTrackingEnum.YES) => {
      D.current = "FOCUS_NEXT_EVENT";
      let n = 2 * (maxStrokeWeight ?? 1);
      switch (t) {
        case "LINE":
          e.onChange({
            dashPattern: []
          }, i);
          break;
        case "SIMPLE_DASH":
          e.onChange({
            dashPattern: [n, n],
            variableWidthPoints: []
          }, i);
          break;
        case "CUSTOM_DASH":
          e.onChange({
            dashPattern: [n, 2 * n, 3 * n, 4 * n],
            variableWidthPoints: []
          }, i);
      }
    },
    onPreview: e => {
      C(e);
    },
    property: b,
    recordingKey: generateRecordingKey(e, "strokeStyle"),
    children: [jsx(ej, {
      additionalStylesClassName: eL,
      value: "LINE",
      recordingKey: generateRecordingKey(e, "LINE"),
      children: jsxs("span", {
        className: eL,
        children: [jsx(_$$t, {}), jsx(_$$o, {
          text: l.format("LINE")
        })]
      })
    }), jsx(ej, {
      value: "SIMPLE_DASH",
      recordingKey: generateRecordingKey(e, "SIMPLE_DASH"),
      additionalStylesClassName: eL,
      children: jsxs("span", {
        className: eL,
        children: [jsx(u, {}), jsx(_$$o, {
          text: l.format("SIMPLE_DASH")
        })]
      })
    }), jsx(sK, {}), jsx(ej, {
      value: "CUSTOM_DASH",
      recordingKey: generateRecordingKey(e, "CUSTOM_DASH")
    })]
  });
  let ee = jsx($j, {
    bigNudgeAmount: 10,
    "data-tooltip": getI18nString("fullscreen.properties_panel.stroke_settings.dash"),
    "data-tooltip-type": KindEnum.TEXT,
    disabled: W,
    dispatch: t,
    forwardedRef: j,
    min: 0,
    onValueChange: t => {
      let i;
      if (D.current = "NONE", !dashPattern || isInvalidValue(dashPattern) || 2 !== dashPattern.length) i = [t, t];else {
        let e = dashPattern[0];
        let n = dashPattern[1];
        i = E && e === n ? [t, t] : [t, n];
      }
      e.onChange({
        dashPattern: i
      });
    },
    recordingKey: generateRecordingKey(e, "dash"),
    smallNudgeAmount: 1,
    tooltipForScreenReadersOnly: !0,
    value: eB(dashPattern)
  });
  let et = jsx($j, {
    bigNudgeAmount: 10,
    "data-tooltip": getI18nString("fullscreen.properties_panel.stroke_settings.gap"),
    "data-tooltip-type": KindEnum.TEXT,
    disabled: W,
    dispatch: t,
    forwardedRef: G,
    min: 0,
    onBlur: e => {
      G.current?.value === "" && P();
    },
    onValueChange: t => {
      let i;
      D.current = "NONE";
      x(!1);
      i = !dashPattern || isInvalidValue(dashPattern) || 2 !== dashPattern.length ? [t, t] : [dashPattern[0], t];
      e.onChange({
        dashPattern: i
      });
    },
    placeholder: void 0 !== R && isValidValue(R) && E && k === R ? String(parseFloat(R.toFixed(2))) : void 0,
    recordingKey: generateRecordingKey(e, "gap"),
    smallNudgeAmount: 1,
    tooltipForScreenReadersOnly: !0,
    value: void 0 !== R && isValidValue(R) && E && k === R ? void 0 : R
  });
  let ei = jsx(nA, {
    forwardedRef: F,
    formatter: N,
    property: e.dashPattern,
    onChange: t => {
      e.onChange({
        dashPattern: t
      });
    },
    placeholder: getI18nString("fullscreen.properties_panel.stroke_settings.dash_gap"),
    recordingKey: generateRecordingKey(e, "dashes"),
    disabled: W
  });
  let en = jsx(_$$o3, {
    value: z,
    onChange: t => {
      e.onChange({
        dashCap: t
      });
    },
    recordingKey: generateRecordingKey(e, "dashCap"),
    label: getI18nString("fullscreen.properties_panel.stroke_settings.dash_cap"),
    kind: "dashCap"
  });
  let er = jsx(D7, {
    source: "flyout",
    recordingKey: generateRecordingKey(e.recordingKey, "widthProfile")
  });
  return jsxs(Fragment, {
    children: [Z && void 0 !== connectorLineStyle && jsx(cS, {
      label: renderI18nText("fullscreen.properties_panel.stroke_settings.path_style"),
      appendedClassName: eD,
      input: Q
    }), jsx(cS, {
      labelId: d,
      label: renderI18nText("fullscreen.properties_panel.stroke_settings.stroke_style"),
      appendedClassName: eD,
      input: J
    }), ("SIMPLE_DASH" === X || X === MIXED_MARKER) && jsxs(Fragment, {
      children: [jsx(cS, {
        label: renderI18nText("fullscreen.properties_panel.stroke_settings.dash"),
        appendedClassName: eD,
        input: ee
      }), jsx(cS, {
        label: renderI18nText("fullscreen.properties_panel.stroke_settings.gap"),
        appendedClassName: eD,
        input: et
      })]
    }), "CUSTOM_DASH" === X && jsx(cS, {
      label: renderI18nText("fullscreen.properties_panel.stroke_settings.dashes"),
      appendedClassName: eD,
      input: ei
    }), (strokePanelMode === DrawingElementType.VECTOR || strokePanelMode === DrawingElementType.LINE) && ("SIMPLE_DASH" === X || "CUSTOM_DASH" === X) && void 0 !== z && jsx(cS, {
      label: renderI18nText("fullscreen.properties_panel.stroke_settings.dash_cap"),
      appendedClassName: eD,
      input: en
    }), !getFeatureFlags().ce_il_stroke_endcap_custom_sizing && getFeatureFlags().ce_il_var_width_points && jsx(ev, {
      isFullWidthInput: !1,
      label: getI18nString("fullscreen.properties_panel.width_profile.label"),
      input: er,
      icon: jsx(iI, {
        recordingKey: generateRecordingKey(e.recordingKey, "flipWidthProfile")
      })
    })]
  });
}
function eG(e) {
  let t = useDispatch();
  return jsxs(Fragment, {
    children: [jsx(cS, {
      label: renderI18nText("fullscreen.properties_panel.stroke_settings.join"),
      appendedClassName: eD,
      input: jsx(_$$M, {
        value: e.strokeJoin,
        disabled: e.disabled,
        onChange: t => {
          e.onChange({
            strokeJoin: t
          });
        },
        recordingKey: e.recordingKey,
        showValueinDisabledStrokeJoin: e.showValueinDisabledStrokeJoin
      })
    }), !e.disabled && "MITER" === e.strokeJoin && jsx(cS, {
      label: renderI18nText("fullscreen.properties_panel.stroke_settings.miter_angle"),
      appendedClassName: eD,
      input: jsx(M4, {
        disabled: e.disabled || "MITER" !== e.strokeJoin,
        value: e.miterLimitAngle,
        onValueChange: t => {
          e.onChange({
            miterLimitAngle: t
          });
        },
        recordingKey: generateRecordingKey(e, "miterAngle"),
        tooltipForScreenReadersOnly: !0,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("fullscreen.properties_panel.stroke_settings.miter_angle"),
        dispatch: t,
        children: jsx("div", {
          className: "advanced_stroke--inactiveLabel--6LGv4",
          children: jsx(_$$a, {})
        })
      })
    })]
  });
}
export function $$ez0(e) {
  let t = useDispatch();
  Gx();
  let {
    Sprig
  } = useSprigWithSampling();
  let c = useRef(null);
  let u = getObservableOrFallback(AppStateTsApi.propertiesPanelState().isVertexSelectionAndHasEndpoints);
  let p = Tv();
  let {
    strokePanelMode,
    strokePanelTerminalPointCount,
    numSelectedByType,
    arcRadius,
    arcSweep,
    onChange
  } = e;
  let O = useAtomWithSubscription(T6);
  let M = Wn(strokePanelMode);
  let U = dG();
  let {
    activeToolId,
    activateTool
  } = rM(_$$u);
  let [W] = lJ("variableWidthPoints");
  let q = useCallback(e => {
    switch (("Dynamic" === e || "Brush" === e) && p && scopeAwareFunction.user("advanced-stroke-set-seed", () => {
      for (let e of p) Fullscreen?.initializeStrokeSeed(e);
    })(), getFeatureFlags().ce_il_sprig_tracking && ("Dynamic" === e || "Brush" === e) && Sprig("setAttribute", "is_assets_visual_style_user", !0), e) {
      case "Basic":
        onChange({
          dynamicStrokeSettings: lF,
          strokeBrushGuid: lN.strokeBrushGuid
        });
        break;
      case "Brush":
        onChange({
          dynamicStrokeSettings: lF,
          strokeBrushGuid: O ?? void 0,
          strokeAlign: "CENTER",
          strokeCap: "NONE"
        });
        UH(null, p || []);
        break;
      case "Dynamic":
        let t = W && isValidValue(W) && W.length > 0;
        if (onChange({
          strokeBrushGuid: lN.strokeBrushGuid,
          dynamicStrokeSettings: Y4,
          strokeAlign: "CENTER",
          strokeJoin: "MITER",
          variableWidthPoints: t ? [] : W
        }), t) {
          let e = getI18nString("visual_bell.dynamic_stroke_vector_network_warning");
          fullscreenValue.showVisualBellWithUndo("dynamic-stroke-vector-network-warning", e, !1);
        }
        activeToolId === DesignGraphElements.VECTOR_VAR_WIDTH_POINT && activateTool(DesignGraphElements.SELECT);
    }
  }, [activeToolId, activateTool, O, onChange, p, W, Sprig]);
  if (!e.pickerShown) return null;
  let $ = new Point(e.pickerShown.initialX, e.pickerShown.initialY);
  let Z = strokePanelMode === DrawingElementType.ENDPOINT || strokePanelMode === DrawingElementType.VECTOR && strokePanelTerminalPointCount > 0 || u;
  let X = strokePanelMode !== DrawingElementType.PENCIL;
  let Q = strokePanelMode === DrawingElementType.VECTOR && 0 === strokePanelTerminalPointCount;
  let J = Q && numSelectedByType && 1 === Object.keys(numSelectedByType).length && numSelectedByType.ELLIPSE && 1 === arcRadius && 0 !== arcSweep;
  let et = Q && !J && !u;
  let ei = x4(e.strokePanelMode, e.terminalCap, e.strokeCap, e.dashPattern);
  let en = () => {
    let t = jsx(D7, {
      source: "flyout",
      recordingKey: generateRecordingKey(e.recordingKey, "widthProfile")
    });
    return jsxs(Fragment, {
      children: [jsx(eV, {
        connectorLineStyle: e.connectorLineStyle,
        dashCap: e.dashCap,
        dashPattern: e.dashPattern,
        dropdownShown: e.dropdownShown,
        maxStrokeWeight: e.maxStrokeWeight,
        onChange: e.onChange,
        recordingKey: generateRecordingKey(e.recordingKey, "lineStyle"),
        strokeCap: e.strokeCap,
        strokePanelMode: e.strokePanelMode,
        strokePanelTerminalPointCount: e.strokePanelTerminalPointCount,
        terminalCap: e.terminalCap
      }), Z && jsxs(Fragment, {
        children: [jsx(e_, {}), jsx(_$$x, {
          onChange: e.onChange,
          endPoint: ei,
          dropdownShown: e.dropdownShown,
          strokePanelTerminalPointCount: e.strokePanelTerminalPointCount,
          disabled: et,
          recordingKey: generateRecordingKey(e.recordingKey, "endPoint"),
          strokePanelMode
        }), jsx(e_, {})]
      }), X && jsx(eG, {
        onChange: e.onChange,
        strokeJoin: e.strokeJoin,
        miterLimitAngle: e.miterLimitAngle,
        disabled: !M,
        recordingKey: generateRecordingKey(e.recordingKey, "join"),
        showValueinDisabledStrokeJoin: U
      }), getFeatureFlags().ce_il_stroke_endcap_custom_sizing && getFeatureFlags().ce_il_var_width_points && jsxs(Fragment, {
        children: [jsx(e_, {}), jsx(ev, {
          isFullWidthInput: !1,
          label: getI18nString("fullscreen.properties_panel.width_profile.label"),
          input: t,
          icon: jsx(iI, {
            recordingKey: generateRecordingKey(e.recordingKey, "flipWidthProfile")
          })
        })]
      })]
    });
  };
  let er = generateRecordingKey(e, "modal");
  let ea = getFilteredFeatureFlags().ce_il_strokes ? jsxs(UI3ConditionalWrapper, {
    children: [jsx("div", {
      className: "stroke_settings--segmentedControl--U-Xpx",
      children: jsxs(bL, {
        value: e.strokeType,
        legend: jsx(_$$q, {
          children: getI18nString("fullscreen.properties_panel.stroke_settings.stroke_type")
        }),
        recordingKey: generateRecordingKey(e, "strokeTypeControl"),
        onChange: q,
        children: [jsx(RT, {
          value: "Basic",
          truncate: !0,
          label: getI18nString("fullscreen.properties_panel.basic"),
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("fullscreen.properties_panel.basic"),
            "data-tooltip-timeout-delay": 1e3
          }
        }), getFilteredFeatureFlags().ce_il_dynamic_strokes && jsx(RT, {
          value: "Dynamic",
          truncate: !0,
          label: getI18nString("fullscreen.properties_panel.dynamic"),
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("fullscreen.properties_panel.dynamic"),
            "data-tooltip-timeout-delay": 1e3
          }
        }), jsx(RT, {
          value: "Brush",
          truncate: !0,
          label: getI18nString("fullscreen.properties_panel.brush"),
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("fullscreen.properties_panel.brush"),
            "data-tooltip-timeout-delay": 1e3
          }
        })]
      })
    }), jsxs(eE, {
      children: ["Basic" === e.strokeType && en(), "Brush" === e.strokeType && jsx(eS, {
        recordingKey: generateRecordingKey(e.recordingKey, "brushPicker"),
        onChange: e.onChange,
        strokeBrushGuid: e.strokeBrushGuid,
        brushType: e.brushType,
        defaultStyleAtom: e.defaultStyleAtom ?? Vi,
        positioningProps: {
          positionRelativeTo: c,
          align: {
            x: W3.BEFORE,
            y: W3.MAX
          }
        }
      }), "Dynamic" === e.strokeType && jsx(eN, {
        strokePanelTerminalPointCount: e.strokePanelTerminalPointCount,
        endPointProperty: ei,
        onChange: e.onChange,
        recordingKey: generateRecordingKey(e.recordingKey, "dynamicStroke"),
        endPointSettingsDisabled: et,
        strokePanelMode,
        defaultStyleAtom: e.defaultStyleAtom ?? GI
      })]
    })]
  }) : en();
  return jsx(_$$bL, {
    ref: c,
    defaultPosition: {
      top: $.y,
      left: $.x
    },
    onClose: () => {
      t(XE());
      fullscreenValue.deselectProperty();
    },
    recordingKey: er,
    width: eF,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx("h2", {
          className: "stroke_settings--settingsHeading--Pvgy-",
          children: getI18nString("fullscreen.properties_panel.stroke_settings")
        })
      }), jsx(nB, {
        padding: 0,
        children: ea
      })]
    })
  });
}
eV.displayName = "StrokeLineStyleSettings";
eG.displayName = "StrokeJoinAndMiterAngleSettings";
export const _2 = $$ez0;