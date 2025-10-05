import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useContext, useRef, useEffect, forwardRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nearlyEqual } from "../figma_app/492908";
import { DialogTriggerButton } from "../905/976845";
import { G as _$$G } from "../905/117393";
import { rgbToHsl, rgbToHsv, colorToRgb } from "../figma_app/273493";
import { ColorFormatEnum, DesignGraphElements } from "../figma_app/763686";
import u from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { setOrRemoveAttribute } from "../figma_app/243213";
import { trackDefinedFileEventWithStore } from "../figma_app/901889";
import { BrowserInfo } from "../figma_app/778880";
import { generateRecordingKey, RecordingPureComponent } from "../figma_app/878298";
import { getI18nString } from "../905/303541";
import { colorCSSManipulatorInstance } from "../905/989956";
import { defaultColorManipulator, FormattedHexColor } from "../905/713722";
import { o1 } from "../figma_app/975811";
import { fullscreenValue } from "../figma_app/455680";
import { EditorPreferencesApi } from "../figma_app/740163";
import { useCurrentUserOrgId } from "../905/845253";
import { Xo } from "../figma_app/482495";
import { F as _$$F2 } from "../905/258517";
import { getCurrentTeam } from "../figma_app/598018";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { OpacityInput, ScrubbableInput } from "../figma_app/178475";
import { $z } from "../figma_app/297733";
import { D as _$$D } from "../905/225412";
import { nZ, Mu } from "../905/28111";
import { X7 } from "../905/713167";
import { FormattedInputVariant3 } from "../905/203369";
import { YW } from "../figma_app/778125";
import { Id, fI } from "../figma_app/626177";
import { p as _$$p } from "../figma_app/284426";
import { e as _$$e } from "../905/987482";
import { xp } from "../905/247367";
import { T as _$$T } from "../905/273689";
import { uj0, jzw } from "../figma_app/27776";
import { BA, s1, go, fG, MX, zB, aw, CX, ne, Ep, TD, xJ, Q0, Px, YC, pZ, x4, mP, zI, uh, vh, ke, Qh, AH, Q6, ym } from "../905/698732";
import { A as _$$A } from "../2854/666676";
var p = u;
let $$W8 = parsePxNumber(uj0);
let $$K1 = parsePxNumber(jzw);
function Y(e, t) {
  return Object.keys(e).every(r => e[r] === t[r]);
}
export var $$$9 = (e => (e.FULL = "full", e.WHITEBOARD = "whiteboard", e))($$$9 || {});
export function $$X0(e, t, r) {
  ("l" in t && (0 === t.l || 1 === t.l) || "v" in t && 0 === t.v) && (t = {
    ...t,
    s: e.s
  });
  let n = nearlyEqual(e.h, 0) && nearlyEqual(t.h, 1);
  let i = nearlyEqual(e.h, 1) && nearlyEqual(t.h, 0);
  (nearlyEqual(r.r, r.g) && nearlyEqual(r.r, r.b) || n || i) && (t = {
    ...t,
    h: e.h
  });
  return t;
}
let q = (e, t) => ({
  hslva: t === ColorFormatEnum.HSL ? rgbToHsl(e) : rgbToHsv(e),
  rgba: e
});
let J = e => {
  let t = "";
  let r = "";
  switch (e) {
    case "SOLID":
    case "IMAGE":
    case "EMOJI":
    case "VIDEO":
      t = e;
      break;
    case "GRADIENT_LINEAR":
      t = "GRADIENT";
      r = "LINEAR";
      break;
    case "GRADIENT_RADIAL":
      t = "GRADIENT";
      r = "RADIAL";
      break;
    case "GRADIENT_ANGULAR":
      t = "GRADIENT";
      break;
    case "GRADIENT_DIAMOND":
      t = "GRADIENT";
      r = "DIAMOND";
  }
  return {
    paintPickerTab: t,
    paintPickerFilter: r
  };
};
function Z(e) {
  return parseFloat(e.toFixed(4));
}
export function $$Q2({
  recordingKey: e,
  ...t
}) {
  let [r, s] = useState(q(t.color, t.colorFormat));
  let u = useContext(nZ);
  let {
    setFgHue,
    setFgAlpha,
    standardMet
  } = u.colorContrastInfo;
  let {
    contrastLevelForCategory
  } = u.settings;
  let T = useRef(standardMet);
  let O = useRef(t.color);
  let L = useRef(t.colorFormat);
  let k = Xo();
  let V = X7();
  let W = trackDefinedFileEventWithStore();
  let K = useCurrentUserOrgId();
  let $ = getCurrentTeam()?.id;
  let Q = useSelector(e => !!e.eyedropper) || t.preventAutoFocus;
  let et = {
    ...t,
    preventAutoFocus: Q
  };
  useEffect(() => {
    setFgHue(Z(r.hslva.h));
    setFgAlpha(Z(r.hslva.a));
  }, [setFgHue, setFgAlpha, r.hslva.h, r.hslva.a]);
  useEffect(() => {
    if ((Y(t.color, O.current) || Y(t.color, r.rgba)) && L.current === t.colorFormat) return;
    let e = q(t.color, t.colorFormat);
    e.hslva = $$X0(r.hslva, e.hslva, t.color);
    O.current = t.color;
    L.current = t.colorFormat;
    s(e);
  }, [r, t.color, t.colorFormat]);
  let es = (e, r) => {
    let n = colorToRgb(e);
    s({
      hslva: e,
      rgba: n
    });
    t.onColorChange(n, r ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO_BUT_TRACK_AS_EDIT);
    r && t.analytics && _$$F2.trackFromFullscreen(t.analytics.name, {
      source: "slider",
      color: defaultColorManipulator.format(n),
      ...t.analytics.properties
    });
    u.showColorContrast && void 0 === T.current && (T.current = standardMet);
    r && u.showColorContrast && (!1 === T.current && W("color_contrast.pick_new_color_when_not_compliant", {
      conformance: contrastLevelForCategory,
      compliance: standardMet,
      orgId: K,
      teamId: $
    }), T.current = void 0);
  };
  let eo = (e, r) => {
    if (!t.onOpacityChange) {
      es(e, r);
      return;
    }
    let n = colorToRgb(e);
    s({
      hslva: e,
      rgba: n
    });
    t.onOpacityChange(n.a, r ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO_BUT_TRACK_AS_EDIT);
    r && t.analytics && _$$F2.trackFromFullscreen(t.analytics.name, {
      source: "slider",
      color: defaultColorManipulator.format(n),
      ...t.analytics.properties
    });
  };
  let el = (e, r) => {
    t.onColorChange(e, r);
    t.analytics && _$$F2.trackFromFullscreen(t.analytics.name, {
      source: "hex",
      color: defaultColorManipulator.format(e),
      ...t.analytics.properties
    });
  };
  let ed = e => {
    V && $z();
    e.stopPropagation();
    let {
      paintPickerTab,
      paintPickerFilter
    } = J(t.paintPickerAnalytics?.paintType);
    fullscreenValue.triggerAction("toggle-dropper", {
      canAcceptStyles: t.canAcceptStyles,
      canAcceptVariables: t.canAcceptVariables,
      pickerShown: k?.id,
      paintPickerTab,
      paintPickerFilter,
      paintPickerSessionId: t.paintPickerSessionId
    });
  };
  if ("whiteboard" === t.displayType) return (() => {
    let i = t.currentTool === DesignGraphElements.DROPPER_COLOR;
    return jsxs("div", {
      className: BA,
      children: [jsxs("div", {
        className: s1,
        children: [!t.dropperDisabled && jsx("div", {
          className: go,
          children: jsx(YW, {
            svg: _$$A,
            fill: "dark" === t.theme ? "white" : "black",
            selected: i,
            onPointerDown: ed,
            recordingKey: generateRecordingKey(e, "dropperButton"),
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("fullscreen.color_controls.eyedropper"),
            tooltipForScreenReadersOnly: !0,
            className: p()({
              [fG]: !i && "dark" === t.theme
            })
          })
        }), jsx($$er4, {
          recordingKey: generateRecordingKey(e, "hexInput"),
          ...et,
          onColorChange: el
        })]
      }), jsxs("div", {
        className: p()(MX, {
          [zB]: !t.hideOpacity
        }),
        children: [jsx(_$$e, {
          width: 140,
          color: r.hslva,
          changeCallback: es,
          containerClass: aw,
          recordingKey: generateRecordingKey(e, "hueControl")
        }), !t.hideOpacity && jsx(xp, {
          width: 140,
          color: r.hslva,
          changeCallback: eo,
          containerClass: aw,
          recordingKey: generateRecordingKey(e, "opacityControl")
        })]
      }), jsx(_$$T, {
        size: 184,
        color: r.hslva,
        changeCallback: es,
        ignoreWheelCallback: !0,
        recordingKey: generateRecordingKey(e, "slvControl")
      })]
    });
  })();
  let ec = jsxs(Fragment, {
    children: [jsx(_$$p, {
      dispatch: t.dispatch,
      dropdownShown: t.dropdownShown,
      colorFormat: t.colorFormat,
      onColorFormatChange: e => {
        EditorPreferencesApi().colorFormat.set(e);
      },
      containerRef: t.containerRef,
      recordingKey: e,
      showNewUI: V
    }), t.colorFormat === ColorFormatEnum.HEX && jsx($$er4, {
      recordingKey: generateRecordingKey(e, "hexInput"),
      ...et
    }), t.colorFormat === ColorFormatEnum.RGB && jsx($$en3, {
      recordingKey: generateRecordingKey(e, "rgbInput"),
      ...et
    }), t.colorFormat === ColorFormatEnum.CSS && jsx($$ei6, {
      recordingKey: generateRecordingKey(e, "cssInput"),
      ...et
    }), (t.colorFormat === ColorFormatEnum.HSL || t.colorFormat === ColorFormatEnum.HSB) && jsx($$ea5, {
      value: r.hslva,
      changeCallback: es,
      recordingKey: generateRecordingKey(e, "hslvInput"),
      ...et
    }, t.colorFormat)]
  });
  return jsxs("div", {
    children: [jsx(ee, {
      color: r.hslva,
      onChange: es,
      recordingKey: generateRecordingKey(e, "slvControl")
    }), jsxs(Id, {
      children: [t.additionalControls && jsx("div", {
        className: CX,
        children: t.additionalControls
      }), jsxs("div", {
        className: p()(ne, {
          [Ep]: V
        }),
        children: [!t.dropperDisabled && jsx("div", {
          className: p()(go, {
            [TD]: V
          }),
          children: V ? jsx(DialogTriggerButton, {
            "aria-expanded": t.currentTool === DesignGraphElements.DROPPER_COLOR,
            "aria-label": getI18nString("fullscreen.properties_panel.color_picker.sample_color"),
            htmlAttributes: {
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("fullscreen.properties_panel.color_picker.sample_color")
            },
            recordingKey: generateRecordingKey(e, "dropperButton"),
            onClick: ed,
            children: jsx(_$$G, {})
          }) : jsx(YW, {
            selected: t.currentTool === DesignGraphElements.DROPPER_COLOR,
            onMouseDown: ed,
            recordingKey: generateRecordingKey(e, "dropperButton"),
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("fullscreen.properties_panel.color_picker.eyedropper"),
            tooltipForScreenReadersOnly: !0,
            children: jsx(_$$G, {})
          })
        }), jsxs("div", {
          className: p()(xJ, {
            [Q0]: V
          }),
          children: [jsx(_$$e, {
            width: 156,
            color: r.hslva,
            changeCallback: es,
            containerClass: aw,
            recordingKey: generateRecordingKey(e, "hueControl")
          }), jsx(xp, {
            width: 156,
            color: r.hslva,
            changeCallback: eo,
            containerClass: aw,
            recordingKey: generateRecordingKey(e, "opacityControl")
          })]
        })]
      }), V ? jsx("div", {
        className: Px,
        children: ec
      }) : jsx(fI, {
        children: ec
      })]
    })]
  });
}
function ee({
  color: e,
  onChange: t,
  recordingKey: r
}) {
  return X7() ? jsx("div", {
    className: YC,
    children: jsx(_$$T, {
      size: $$K1,
      color: e,
      changeCallback: t,
      recordingKey: r,
      canvasWrapperStyles: {
        borderRadius: "5px"
      },
      overlay: jsx(Mu, {})
    })
  }) : jsx(_$$T, {
    size: $$W8,
    color: e,
    changeCallback: t,
    recordingKey: r,
    containerClass: pZ
  });
}
$$Q2.displayName = "ColorControls";
let et = forwardRef((e, t) => {
  let r = X7();
  return jsx("div", {
    ref: t,
    className: p()({
      [x4]: !e.isWhiteboard,
      [mP]: e.isWhiteboard,
      [zI]: r
    }),
    children: e.children
  });
});
export function $$er4(e) {
  let t = useDispatch();
  let r = useRef(null);
  let s = "whiteboard" === e.displayType;
  useEffect(() => {
    s && r.current && setOrRemoveAttribute(r.current, "data-preferred-theme", e.theme);
  }, [s, e.theme]);
  let o = useMemo(() => s ? defaultColorManipulator : new FormattedHexColor({
    parseAlpha: !0
  }), [s]);
  let l = !(s || e.hideOpacity);
  return jsxs(et, {
    ref: r,
    isWhiteboard: s,
    children: [jsx(FormattedInputVariant3, {
      autoFocus: !BrowserInfo.isIpad && !e.preventAutoFocus,
      className: p()({
        [uh]: !s,
        [vh]: s
      }),
      formatter: o,
      forwardedRef: e.hexInputRef,
      noBorderOnFocus: !0,
      onChange: e.onColorChange,
      property: e.color,
      recordingKey: generateRecordingKey(e, "color"),
      squareRightBorder: !0
    }), l && jsx(OpacityInput, {
      className: ke,
      value: e.color.a,
      onValueChange: (t, r) => {
        e.onColorChange({
          ...e.color,
          a: t
        }, r);
      },
      noLeftBorder: !0,
      noBorderOnFocus: !0,
      dispatch: t,
      recordingKey: generateRecordingKey(e, "opacity")
    })]
  });
}
export class $$en3 extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.formatter = new o1({
      normalizeFactor: 255,
      min: 0,
      max: 1
    });
    this.onRChange = e => this.props.onColorChange({
      ...this.props.color,
      r: e
    });
    this.onGChange = e => this.props.onColorChange({
      ...this.props.color,
      g: e
    });
    this.onBChange = e => this.props.onColorChange({
      ...this.props.color,
      b: e
    });
    this.onAChange = (e, t) => {
      this.props.onColorChange({
        ...this.props.color,
        a: e
      }, t);
    };
  }
  render() {
    return jsxs(et, {
      children: [jsx(ScrubbableInput, {
        autoFocus: !this.props.preventAutoFocus,
        className: Qh,
        "data-tooltip": getI18nString("fullscreen.color_controls.red"),
        "data-tooltip-type": KindEnum.TEXT,
        dispatch: this.props.dispatch,
        formatter: this.formatter,
        minimizeScrubTargetWidth: !0,
        noBorderOnFocus: !0,
        onValueChange: this.onRChange,
        recordingKey: generateRecordingKey(this.props, "red"),
        scrubMultiplier: 1 / 255,
        squareRightBorder: !0,
        value: this.props.color.r
      }), jsx(ScrubbableInput, {
        className: Qh,
        "data-tooltip": getI18nString("fullscreen.color_controls.green"),
        "data-tooltip-type": KindEnum.TEXT,
        dispatch: this.props.dispatch,
        formatter: this.formatter,
        minimizeScrubTargetWidth: !0,
        noBorderOnFocus: !0,
        noLeftBorder: !0,
        onValueChange: this.onGChange,
        recordingKey: generateRecordingKey(this.props, "green"),
        scrubMultiplier: 1 / 255,
        squareRightBorder: !0,
        value: this.props.color.g
      }), jsx(ScrubbableInput, {
        className: Qh,
        "data-tooltip": getI18nString("fullscreen.color_controls.blue"),
        "data-tooltip-type": KindEnum.TEXT,
        dispatch: this.props.dispatch,
        formatter: this.formatter,
        minimizeScrubTargetWidth: !0,
        noBorderOnFocus: !0,
        noLeftBorder: !0,
        onValueChange: this.onBChange,
        recordingKey: generateRecordingKey(this.props, "blue"),
        scrubMultiplier: 1 / 255,
        squareRightBorder: !0,
        value: this.props.color.b
      }), !this.props.hideOpacity && jsx(OpacityInput, {
        className: ke,
        dispatch: this.props.dispatch,
        value: this.props.color.a,
        onValueChange: this.onAChange,
        noLeftBorder: !0,
        noBorderOnFocus: !0,
        recordingKey: generateRecordingKey(this.props, "opacity")
      })]
    });
  }
}
$$en3.displayName = "RgbInputs";
export class $$ei6 extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.formatter = colorCSSManipulatorInstance;
  }
  render() {
    return jsx(et, {
      children: jsx(FormattedInputVariant3, {
        className: AH,
        formatter: this.formatter,
        property: this.props.color,
        onChange: this.props.onColorChange,
        recordingKey: generateRecordingKey(this.props, "color"),
        autoFocus: !this.props.preventAutoFocus,
        noBorderOnFocus: !0
      })
    });
  }
}
$$ei6.displayName = "CssInputs";
export class $$ea5 extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.formatter360 = new o1({
      normalizeFactor: 360,
      min: 0,
      max: 1
    });
    this.formatter100 = new o1({
      normalizeFactor: 100,
      min: 0,
      max: 1
    });
    this.onHChange = e => this.props.changeCallback({
      ...this.props.value,
      h: e
    }, !0);
    this.onSChange = e => this.props.changeCallback({
      ...this.props.value,
      s: e
    }, !0);
    this.onLChange = e => this.props.changeCallback({
      ...this.props.value,
      l: e
    }, !0);
    this.onVChange = e => this.props.changeCallback({
      ...this.props.value,
      v: e
    }, !0);
    this.onAChange = (e, t) => {
      this.props.onColorChange({
        ...this.props.color,
        a: e
      }, t);
    };
  }
  render() {
    return jsxs(et, {
      children: [jsx(ScrubbableInput, {
        autoFocus: !this.props.preventAutoFocus,
        className: Qh,
        "data-tooltip": getI18nString("fullscreen.color_controls.hue"),
        "data-tooltip-type": KindEnum.TEXT,
        dispatch: this.props.dispatch,
        formatter: this.formatter360,
        minimizeScrubTargetWidth: !0,
        noBorderOnFocus: !0,
        onValueChange: this.onHChange,
        recordingKey: generateRecordingKey(this.props, "hue"),
        scrubMultiplier: 1 / 360,
        squareRightBorder: !0,
        value: this.props.value.h
      }), jsx(ScrubbableInput, {
        className: Qh,
        "data-tooltip": getI18nString("fullscreen.color_controls.saturation"),
        "data-tooltip-type": KindEnum.TEXT,
        dispatch: this.props.dispatch,
        formatter: this.formatter100,
        minimizeScrubTargetWidth: !0,
        noBorderOnFocus: !0,
        noLeftBorder: !0,
        onValueChange: this.onSChange,
        recordingKey: generateRecordingKey(this.props, "saturation"),
        scrubMultiplier: .01,
        squareRightBorder: !0,
        value: this.props.value.s
      }), jsx(ScrubbableInput, {
        className: Qh,
        "data-tooltip": "l" in this.props.value ? getI18nString("fullscreen.color_controls.lightness") : getI18nString("fullscreen.color_controls.brightness"),
        "data-tooltip-type": KindEnum.TEXT,
        dispatch: this.props.dispatch,
        formatter: this.formatter100,
        minimizeScrubTargetWidth: !0,
        noBorderOnFocus: !0,
        noLeftBorder: !0,
        onValueChange: "l" in this.props.value ? this.onLChange : this.onVChange,
        recordingKey: generateRecordingKey(this.props, "value"),
        scrubMultiplier: .01,
        squareRightBorder: !0,
        value: "l" in this.props.value ? this.props.value.l : this.props.value.v
      }), !this.props.hideOpacity && jsx(OpacityInput, {
        className: ke,
        dispatch: this.props.dispatch,
        value: this.props.color.a,
        onValueChange: this.onAChange,
        noLeftBorder: !0,
        noBorderOnFocus: !0,
        recordingKey: generateRecordingKey(this.props, "opacity")
      })]
    });
  }
}
export function $$es7(e) {
  let t = useDispatch();
  let r = useRef(null);
  let s = X7();
  useEffect(() => {
    r.current && setOrRemoveAttribute(r.current, "data-preferred-theme", e.theme);
  }, [e.theme]);
  let o = useMemo(() => new FormattedHexColor({
    parseAlpha: !0
  }), []);
  return jsxs(et, {
    ref: r,
    isWhiteboard: !1,
    children: [jsxs("div", {
      className: Q6,
      children: [jsx(_$$D, {
        color: e.color,
        onMouseDown: e.onChitMouseDown,
        recordingKey: generateRecordingKey(e.recordingKey, "chit")
      }), jsx(FormattedInputVariant3, {
        className: p()(uh, {
          [ym]: s
        }),
        squareRightBorder: !0,
        noBorderOnFocus: !0,
        formatter: o,
        property: e.color,
        onChange: e.onColorChange,
        recordingKey: generateRecordingKey(e, "color")
      })]
    }), jsx(OpacityInput, {
      decimals: e.opacityDecimals,
      className: ke,
      value: e.color.a,
      onValueChange: (t, r) => {
        e.onColorChange({
          ...e.color,
          a: t
        }, r);
      },
      noLeftBorder: !0,
      noBorderOnFocus: !0,
      dispatch: t,
      recordingKey: generateRecordingKey(e, "opacity")
    })]
  });
}
$$ea5.displayName = "HslvInputs";
export const QS = $$X0;
export const Rh = $$K1;
export const S7 = $$Q2;
export const VA = $$en3;
export const dt = $$er4;
export const fC = $$ea5;
export const he = $$ei6;
export const mu = $$es7;
export const qo = $$W8;
export const sX = $$$9;