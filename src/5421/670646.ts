import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useRef, useCallback, PureComponent, useId, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { assertNotNullish, debug } from "../figma_app/465776";
import { isFakeTouchEvent } from "../905/955878";
import { isValidSessionLocalID } from "../905/871411";
import { generateRecordingKey, RecordingPureComponent } from "../figma_app/878298";
import { k as _$$k } from "../905/582200";
import { renderI18nText, getI18nString } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { TrackingProvider, withTracking } from "../figma_app/831799";
import { xv } from "../figma_app/290668";
import { fullscreenValue } from "../figma_app/455680";
import { getNudgeAmounts } from "../figma_app/740163";
import { clearSelection } from "../figma_app/741237";
import { valueOrFallback, isInvalidValue, normalizeValue, isValidValue } from "../905/216495";
import { useSelectionPropertyValue, useSelectionProperty, useSelectedStyleOrSelectionPropertyValues, useSelectionPropertyValues, useNonMixedSelectedStyleOrSelectionPropertyValues, useNonMixedSelectionPropertyValues, useNonMixedSelectionPropertyValue } from "../905/275640";
import { _P, $J, Qx } from "../figma_app/2590";
import { e0 as _$$e } from "../905/696396";
import { Mw, ON } from "../3276/43946";
import { u as _$$u } from "../figma_app/365543";
import { YR } from "../figma_app/365713";
import { bL, c$ } from "../905/867927";
import { Legend } from "../905/932270";
import { c$ as _$$c$, bL as _$$bL, l9, mc, wv, DZ } from "../905/493196";
import { HiddenLabel, Label } from "../905/270045";
import { atomStoreManager } from "../figma_app/27355";
import { hY, yr, $X, Fh, r6, J_, AG, $w, dr } from "../figma_app/349969";
import { formattedColorManipulator, defaultColorManipulator } from "../905/713722";
import { KindEnum } from "../905/129884";
import { LengthInput } from "../figma_app/178475";
import { Q as _$$Q } from "../905/346809";
import { Point } from "../905/736624";
import { hidePickerThunk, showPickerThunk } from "../figma_app/91703";
import { $T } from "../figma_app/8833";
import { calculatePickerPositionLeft } from "../905/959568";
import { J as _$$J2 } from "../905/225412";
import { h as _$$h2 } from "../905/65944";
import { FormattedInputVariant3 } from "../905/203369";
import { TN, dx } from "../figma_app/334459";
import { hl, nV, fI, Zk } from "../figma_app/626177";
import { hg, bi } from "../figma_app/425489";
import { Rk } from "../figma_app/483189";
import { A as _$$A } from "../6020/852410";
import { y7 } from "../5421/828271";
import { A as _$$A2 } from "../6020/624960";
import { Checkbox } from "../905/274480";
import { setupToggleButton } from "../905/167712";
import { L as _$$L } from "../905/473569";
import { SvgComponent } from "../905/714743";
import { pG } from "../figma_app/811257";
import { eT as _$$eT, To, pc } from "../figma_app/210983";
import { A as _$$A3 } from "../svg/983040";
import { A as _$$A4 } from "../svg/621897";
import { z as _$$z } from "../905/454433";
import { isDefined } from "../figma_app/95419";
import { r as _$$r } from "../905/571838";
import { AppStateTsApi, ItemType, ScrollBehavior, PrototypingTsApi } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { selectWithShallowEqual } from "../905/103090";
import { Rk as _$$Rk, Ge, wi } from "../figma_app/451499";
import { getObservableValue } from "../figma_app/84367";
import { l6, c$ as _$$c$2 } from "../905/794875";
import { iE } from "../figma_app/711157";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { registerTooltip } from "../905/524523";
import { A as _$$A5 } from "../svg/94747";
import { A as _$$A6 } from "../svg/330785";
import { useIsFullscreenSitesView } from "../905/561485";
import { rq } from "../figma_app/386160";
import { A as _$$A7 } from "../svg/328437";
import { A as _$$A8 } from "../svg/201898";
import { A as _$$A9 } from "../svg/903582";
import { A as _$$A0 } from "../svg/380641";
import { A as _$$A1 } from "../svg/691234";
let A = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M15 5H9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M9 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z",
      clipRule: "evenodd"
    })
  });
});
let w = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M18 8H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M6 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z",
      clipRule: "evenodd"
    })
  });
});
function z(e) {
  let t = useRef(null);
  let {
    dispatch,
    pickerShown,
    prototypeBackgroundColor
  } = e;
  let l = useCallback(() => {
    let e = t.current;
    if (pickerShown && pickerShown.id === $T) dispatch(hidePickerThunk());else if (e && e instanceof HTMLElement) {
      let t = calculatePickerPositionLeft(e);
      dispatch(showPickerThunk({
        id: $T,
        initialX: t.x,
        initialY: t.y
      }));
    }
  }, [dispatch, pickerShown]);
  let s = useCallback((e, t) => {
    dispatch(_P({
      name: "Prototype Background Modified"
    }));
    fullscreenValue.updateSelectionProperties({
      prototypeBackgroundColor: e
    }, {
      shouldCommit: t
    });
  }, [dispatch]);
  let c = valueOrFallback(prototypeBackgroundColor, {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  });
  let p = jsxs("div", {
    className: "prototype_background_panel--colorValueContainer--CEbzl paint_panels--colorValueContainer--DGeSP raw_components--borderFocusWithin--BaipZ paint_panels--_baseColorValueContainer--t-UIV raw_components--base--T7G0z raw_components--singleRowHeight--dKM4t",
    children: [jsx(_$$J2, {
      onClick: l,
      color: c,
      opacity: c.a,
      recordingKey: generateRecordingKey(e, "chit"),
      className: "prototype_background_panel--chit--F--d0 paint_panels--chit--twQEy"
    }), jsx(FormattedInputVariant3, {
      className: "prototype_background_panel--color--e5Pc8 paint_panels--colorInput--nSz13",
      noLeftBorder: !0,
      formatter: formattedColorManipulator,
      property: c,
      onChange: s,
      recordingKey: generateRecordingKey(e, "colorInput"),
      noBorderOnFocus: !0
    })]
  });
  return jsxs(Fragment, {
    children: [jsx(TN, {
      ref: t,
      children: p
    }), pickerShown && pickerShown.id === $T && jsx(_$$h2, {
      disabledVariableIds: new Set(),
      initialPosition: new Point(pickerShown.initialX ?? 0, pickerShown.initialY ?? 0),
      color: c,
      boundVariable: null,
      onChange: s,
      recordingKey: generateRecordingKey(e, "colorPicker")
    })]
  });
}
let Y = "prototype_device_panel--deviceOption--rvW-q";
let q = "prototype_device_panel--inactiveLabel--UEKyk raw_components--iconInsideBorderFocusWithin--2g7fO";
let X = "prototype_device_panel--labelInactive--pv4Sf";
class J extends PureComponent {
  constructor() {
    super(...arguments);
    this.deviceInfo = () => hY[this.props.prototypeDevice.presetIdentifier];
    this.shouldShowModelDropdown = () => {
      let e = this.deviceInfo();
      return yr[e?.deviceName || ""].length > 1;
    };
    this.onModelChange = e => {
      if (!this.deviceInfo()) return;
      let t = hY[e];
      if (!t) return;
      let n = this.props.prototypeDevice.rotation;
      fullscreenValue.updateSelectionProperties({
        prototypeDevice: {
          type: "PRESET",
          size: t.framePresetSize,
          presetIdentifier: e,
          rotation: n
        }
      });
    };
    this.renderModelDropdown = (e, t, n) => {
      if (!e) return;
      let i = jsx(et, {
        presetIdentifier: this.deviceInfo().presetIdentifier,
        onChange: this.onModelChange,
        recordingKey: generateRecordingKey(this.props, "modelDropdown")
      });
      let r = t ? jsx(dx, {
        left: i,
        right: n
      }) : jsx(TN, {
        children: i
      });
      return jsxs("div", {
        children: [!this.props.isUI3 && jsx(hl, {
          children: jsx(nV, {
            className: X,
            children: renderI18nText("presets.device_panel.model")
          })
        }), this.props.isUI3 ? r : jsx(fI, {
          children: i
        })]
      });
    };
    this.cssForCurrentDeviceRotation = () => {
      if ("NONE" === this.props.prototypeDevice.type) return;
      let e = "";
      switch ("MICROSOFT_SURFACE_PRO_4" === this.props.prototypeDevice.presetIdentifier && (e = "scale(0.65)"), this.props.prototypeDevice.rotation) {
        case "NONE":
        default:
          return;
        case "CCW_90":
          return `rotate(-90deg) ${e}`;
      }
    };
    this.renderDevicePreview = () => {
      let e = this.deviceInfo();
      if (!e) return;
      let t = valueOrFallback(this.props.prototypeBackgroundColor, {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      });
      let n = defaultColorManipulator.format(t);
      let i = t.r > .9 && t.g > .9 && t.b > .9;
      let r = `1px solid ${i ? "#EFEFEF" : "transparent"}`;
      let a = jsx("div", {
        className: "prototype_device_panel--devicePreview--T2Tzn",
        style: {
          backgroundColor: n,
          border: r
        },
        children: jsx("img", {
          className: "prototype_device_panel--deviceImage--Wpr8Y",
          src: e.thumbnailUrl,
          style: {
            transform: this.cssForCurrentDeviceRotation()
          },
          alt: `${e.getI18nDeviceName()}`
        })
      });
      return jsxs("div", {
        children: [!this.props.isUI3 && jsx(hl, {
          children: jsx(nV, {
            className: X,
            children: renderI18nText("presets.device_panel.preview")
          })
        }), this.props.isUI3 ? jsx(TN, {
          appendedClassName: Rk,
          children: a
        }) : jsx("div", {
          className: "prototype_device_panel--devicePreviewContainer--pC-H4",
          children: a
        })]
      });
    };
    this.onChangeOrientation = e => {
      let t = this.props.prototypeDevice;
      if ("NONE" === t.type) return;
      let n = t.size.y > t.size.x;
      let o = t.rotation;
      o = n ? "PORTRAIT" === e ? "NONE" : "CCW_90" : "PORTRAIT" === e ? "CCW_90" : "NONE";
      fullscreenValue.updateSelectionProperties({
        prototypeDevice: {
          ...t,
          rotation: o
        }
      });
    };
    this.currentDeviceOrientation = () => {
      let e = this.props.prototypeDevice;
      return "NONE" === e.type ? "PORTRAIT" : e.size.y > e.size.x ? "NONE" === e.rotation ? "PORTRAIT" : "LANDSCAPE" : "NONE" === e.rotation ? "LANDSCAPE" : "PORTRAIT";
    };
  }
  render() {
    let e = this.props.prototypeDevice;
    let t = jsx(ee, {
      dispatch: this.props.dispatch,
      prototypeDevice: this.props.prototypeDevice,
      isUI3: this.props.isUI3,
      recordingKey: generateRecordingKey(this.props, "deviceDropdown")
    });
    let n = jsxs(bL, {
      onChange: this.onChangeOrientation,
      recordingKey: generateRecordingKey(this.props, "orientationControl"),
      value: this.currentDeviceOrientation(),
      legend: jsx(Legend, {
        children: getI18nString("presets.device_panel.rotation")
      }),
      children: [jsx(c$, {
        "aria-label": getI18nString("presets.device_panel.rotation.portrait"),
        value: "PORTRAIT",
        icon: jsx(A, {})
      }), jsx(c$, {
        "aria-label": getI18nString("presets.device_panel.rotation.landscape"),
        value: "LANDSCAPE",
        icon: jsx(w, {})
      })]
    });
    let i = $X(e.type || "NONE", e.presetIdentifier);
    let r = jsxs(fI, {
      children: [t, i && n]
    });
    let a = this.deviceInfo() && this.shouldShowModelDropdown();
    let l = i && !a ? jsx(dx, {
      left: t,
      right: n
    }) : jsx(TN, {
      children: t
    });
    let s = jsx(Q, {
      prototypeDevice: this.props.prototypeDevice,
      dispatch: this.props.dispatch,
      smallNudgeAmount: this.props.smallNudgeAmount,
      bigNudgeAmount: this.props.bigNudgeAmount,
      recordingKey: generateRecordingKey(this.props, "deviceSizeInputs")
    });
    return jsxs(Zk, {
      children: [jsx(fI, {
        className: "prototype_device_panel--panelTitleRowOuter--wkKKy collapsible_property_panel--panelTitleRowOuter--i5K0R",
        children: jsx(_$$Q, {
          innerRef: this.props.titleRef,
          extended: this.props.isUI3,
          doNotReserveSpaceForChevron: !0,
          forceNoChevron: !0,
          children: this.props.isUI3 ? renderI18nText("presets.device_panel.prototype_settings") : renderI18nText("presets.device_panel.device")
        })
      }), this.props.isUI3 ? l : r, this.renderModelDropdown(!!a, i, n), this.props.isUI3 && "CUSTOM" === this.props.prototypeDevice.type && s, this.props.isUI3 && jsx(z, {
        pickerShown: this.props.pickerShown,
        dispatch: this.props.dispatch,
        prototypeBackgroundColor: this.props.prototypeBackgroundColor,
        recordingKey: generateRecordingKey(this.props, "backgroundPanel")
      }), this.renderDevicePreview(), !this.props.isUI3 && "CUSTOM" === this.props.prototypeDevice.type && s]
    });
  }
}
function Q(e) {
  let t = useCallback(t => {
    fullscreenValue.updateSelectionProperties({
      prototypeDevice: {
        type: "CUSTOM",
        size: {
          x: t,
          y: e.prototypeDevice.size.y
        },
        rotation: e.prototypeDevice.rotation
      }
    });
  }, [e.prototypeDevice.size.y, e.prototypeDevice.rotation]);
  let n = useCallback(t => {
    fullscreenValue.updateSelectionProperties({
      prototypeDevice: {
        type: "CUSTOM",
        size: {
          x: e.prototypeDevice.size.x,
          y: t
        },
        rotation: e.prototypeDevice.rotation
      }
    });
  }, [e.prototypeDevice.size.x, e.prototypeDevice.rotation]);
  let r = jsx(LengthInput, {
    bigNudgeAmount: e.bigNudgeAmount,
    className: "prototype_device_panel--scrubbableInputLeftCol--P2T66 prototype_device_panel--scrubbableInput--0TFVb",
    "data-tooltip": getI18nString("presets.device_panel.device_width_tooltip"),
    "data-tooltip-type": KindEnum.TEXT,
    dispatch: e.dispatch,
    inputClassName: "prototype_device_panel--leftColInput--pAJSy prototype_device_panel--input--vNirJ",
    onValueChange: t,
    recordingKey: generateRecordingKey(e, "deviceWidth"),
    smallNudgeAmount: e.smallNudgeAmount,
    tooltipForScreenReadersOnly: !0,
    value: e.prototypeDevice.size.x,
    children: jsx("span", {
      className: q,
      children: renderI18nText("proto.device_panel.width")
    })
  });
  let a = jsx(LengthInput, {
    bigNudgeAmount: e.bigNudgeAmount,
    className: "prototype_device_panel--scrubbableInput--0TFVb",
    "data-tooltip": getI18nString("presets.device_panel.device_height_tooltip"),
    "data-tooltip-type": KindEnum.TEXT,
    dispatch: e.dispatch,
    inputClassName: "prototype_device_panel--input--vNirJ",
    onValueChange: n,
    recordingKey: generateRecordingKey(e, "deviceHeight"),
    smallNudgeAmount: e.smallNudgeAmount,
    tooltipForScreenReadersOnly: !0,
    value: e.prototypeDevice.size.y,
    children: jsx("span", {
      className: q,
      children: renderI18nText("proto.device_panel.height")
    })
  });
  return jsx(dx, {
    left: r,
    right: a
  });
}
J.displayName = "PrototypeDevicePanel";
class ee extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.formatter = {
      format: e => "NONE" === e ? this.props.isUI3 ? getI18nString("proto.frame_preset_panel.no_device") : getI18nString("proto.frame_preset_panel.none") : "CUSTOM" === e ? getI18nString("proto.frame_preset_panel.custom_size") : "PRESENTATION" === e ? getI18nString("proto.frame_preset_panel.presentation") : e.getI18nDeviceName(),
      isEqual: (e, t) => "NONE" === e || "CUSTOM" === e || "PRESENTATION" === e || "NONE" === t || "CUSTOM" === t || "PRESENTATION" === t ? e === t : e.presetIdentifier === t.presetIdentifier
    };
    this.onChange = e => {
      $J(e, this.props.prototypeDevice);
      let t = this.props.prototypeDevice.type;
      let n = t;
      n = "NONE" === e ? "NONE" : "PRESENTATION" === e ? "PRESENTATION" : "CUSTOM" === e ? "CUSTOM" : "PRESET";
      this.props.dispatch(_P({
        name: "Prototype Device Type Changed",
        params: {
          oldType: this.props.prototypeDevice.presetIdentifier || t,
          newType: e.presetIdentifier || n,
          isInlinePreviewOpened: atomStoreManager.get(hg).modalStatus === bi.OPEN
        }
      }));
    };
    this.renderPresetOption = (e, t) => {
      let n = Fh(e, this.props.prototypeDevice);
      if (null === n) return null;
      let i = n.framePresetSize;
      return jsx(_$$c$, {
        value: n.presetIdentifier,
        children: jsxs("div", {
          className: Y,
          children: [jsx("span", {
            children: n.getI18nDeviceName()
          }), jsxs("span", {
            children: [i.x, "\u200A\xd7\u200A", i.y]
          }), " "]
        })
      }, t);
    };
  }
  render() {
    let e;
    let t = "string" == typeof (e = "NONE" === this.props.prototypeDevice.type ? "NONE" : "PRESENTATION" === this.props.prototypeDevice.type ? "PRESENTATION" : "CUSTOM" === this.props.prototypeDevice.type ? "CUSTOM" : hY[this.props.prototypeDevice.presetIdentifier] || "NONE") ? e : e.presetIdentifier;
    return jsxs(_$$bL, {
      onChange: e => {
        "NONE" === e || "PRESENTATION" === e || "CUSTOM" === e ? this.onChange(e) : this.onChange(Fh(e, this.props.prototypeDevice));
      },
      recordingKey: generateRecordingKey(this.props, "select"),
      value: t,
      children: [jsx(l9, {
        label: jsx(HiddenLabel, {
          children: renderI18nText("proto.frame_preset_panel.device")
        }),
        width: "fill",
        children: this.formatter.format(e)
      }), jsxs(mc, {
        children: [jsx(_$$c$, {
          value: "NONE",
          children: renderI18nText("proto.frame_preset_panel.no_device")
        }), jsx(wv, {}), r6.map(this.renderPresetOption), jsx(wv, {}), J_.map(this.renderPresetOption), jsx(wv, {}), AG.map(this.renderPresetOption), jsx(wv, {}), $w.map(this.renderPresetOption), jsx(wv, {}), jsx(_$$c$, {
          value: "CUSTOM",
          children: jsxs("div", {
            className: Y,
            children: [jsx("span", {
              children: renderI18nText("proto.frame_preset_panel.custom_size")
            }), jsx("span", {
              children: renderI18nText("proto.frame_preset_panel.fit")
            })]
          })
        }), jsx(_$$c$, {
          value: "PRESENTATION",
          children: jsxs("div", {
            className: Y,
            children: [jsx("span", {
              children: renderI18nText("proto.frame_preset_panel.presentation")
            }), jsx("span", {
              children: renderI18nText("proto.frame_preset_panel.fill")
            })]
          })
        }), jsx(wv, {}), dr.map(this.renderPresetOption)]
      })]
    });
  }
}
ee.displayName = "DeviceDropdown";
class et extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.formatter = {
      format: e => {
        let t = hY[e];
        return t ? t.getI18nStyleName() : getI18nString("proto.frame_preset_panel.missing");
      },
      isEqual: (e, t) => e === t
    };
    this.renderStyleOption = (e, t) => {
      let n = e.presetIdentifier;
      return jsx(_$$c$, {
        value: n,
        children: hY[n].getI18nStyleName()
      }, t);
    };
  }
  render() {
    let e = hY[this.props.presetIdentifier];
    if (!e) return null;
    let t = yr[e.deviceName];
    let n = this.props.presetIdentifier;
    return jsxs(_$$bL, {
      onChange: this.props.onChange,
      recordingKey: generateRecordingKey(this.props, "select"),
      value: n,
      children: [jsx(l9, {
        label: jsx(HiddenLabel, {
          children: renderI18nText("proto.frame_preset_panel.device.model")
        }),
        width: "fill",
        children: this.formatter.format(n)
      }), jsx(mc, {
        children: t.map(this.renderStyleOption)
      })]
    });
  }
}
et.displayName = "ModelDropdown";
let el = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M9.146 6.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9H9a3 3 0 1 0 0 6h.5a.5.5 0 0 1 0 1H9a4 4 0 0 1 0-8h1.293L9.146 6.854a.5.5 0 0 1 0-.708M14 8.5a.5.5 0 0 1 .5-.5h.5a4 4 0 0 1 0 8h-1.293l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L13.707 15H15a3 3 0 1 0 0-6h-.5a.5.5 0 0 1-.5-.5",
      clipRule: "evenodd"
    })
  });
});
let es = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M17.854 6.854a.5.5 0 0 0-.708-.708l-11 11a.5.5 0 0 0 .708.708zm-8.708-.708a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9H9a3 3 0 0 0-2.143 5.1.5.5 0 0 1-.714.7A4 4 0 0 1 9 8h1.293L9.146 6.854a.5.5 0 0 1 0-.708m8.004 3.047a.5.5 0 0 1 .707.008A4 4 0 0 1 15 16h-1.293l1.147 1.145a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L13.707 15H15a3 3 0 0 0 2.143-5.1.5.5 0 0 1 .007-.707",
      clipRule: "evenodd"
    })
  });
});
let ec = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M14 18a1 1 0 0 1-1.707.707l-2.44-2.44.707-.707L13 18v-4.88l1-1zm3.146-11.854a.5.5 0 0 1 .707.707l-11 11a.5.5 0 0 1-.707-.707zm-4.853-.853A1 1 0 0 1 14 6v1.879l-1 1v-2.88l-3 3H7.5a.5.5 0 0 0-.5.5v5c0 .108.034.207.09.288l-.71.71a1.5 1.5 0 0 1-.372-.844L6 14.5v-5A1.5 1.5 0 0 1 7.5 8h2.086zm4.483 4.05a3.5 3.5 0 0 1-1.215 5.991c-.29.093-.56-.143-.561-.447v-.029c0-.238.17-.437.393-.522a2.501 2.501 0 0 0 .674-4.283zM15 11.294c0-.344.35-.576.588-.325a1.494 1.494 0 0 1 0 2.063c-.238.25-.588.019-.588-.326z"
    })
  });
});
function eg({
  videoPlayback: {
    mediaLoop: e,
    muted: t
  }
}) {
  let n = null;
  isInvalidValue(e) && isInvalidValue(t) ? n = renderI18nText("proto.prototype_panel.replace_mixed_muted_and_loop_video_playback", {
    loopSvg: jsx(SvgComponent, {
      svg: _$$A3,
      className: _$$eT
    }),
    speakerSvg: jsx(SvgComponent, {
      svg: _$$A4,
      className: To
    })
  }) : isInvalidValue(e) ? n = renderI18nText("proto.prototype_panel.replace_mixed_video_playback", {
    svg: jsx(SvgComponent, {
      svg: _$$A3,
      className: _$$eT
    })
  }) : isInvalidValue(t) && (n = renderI18nText("proto.prototype_panel.replace_mixed_video_playback", {
    svg: jsx(SvgComponent, {
      svg: _$$A4,
      className: To
    })
  }));
  return n ? jsx(fI, {
    children: jsx(nV, {
      className: pc,
      children: n
    })
  }) : null;
}
let ey = e => isInvalidValue(e) ? "mixed" : e;
let ef = e => !0 === e;
let e_ = function (e) {
  let t = jsx("span", {
    children: jsx(Checkbox, {
      label: jsx(Label, {
        htmlAttributes: {
          "data-tooltip": getI18nString("proto.prototype_panel.default_video_playback_state"),
          "data-tooltip-type": KindEnum.TEXT
        },
        children: renderI18nText("proto.prototype_panel.autoplay")
      }),
      onChange: t => {
        e.updateSelectionProperties({
          videoAutoplay: t
        });
        e.dispatch(_P({
          name: "Node video autoplay Changed",
          params: {
            newAutoplay: t,
            oldAutoplay: ey(e.videoPlayback.autoplay),
            numVideosSelected: e.videoPlayback.numVideosSelected
          }
        }));
      },
      checked: ef(e.videoPlayback.autoplay),
      mixed: isInvalidValue(e.videoPlayback.autoplay),
      recordingKey: generateRecordingKey(e, "autoPlayToggle")
    })
  });
  let n = jsx(setupToggleButton, {
    checked: ef(e.videoPlayback.mediaLoop),
    mixed: isInvalidValue(e.videoPlayback.mediaLoop),
    onIcon: jsx(el, {}),
    offIcon: jsx(es, {}),
    onChange: () => {
      let t = !ef(e.videoPlayback.mediaLoop);
      e.updateSelectionProperties({
        videoMediaLoop: t
      });
      e.dispatch(_P({
        name: "Node video loop changed",
        params: {
          newLoop: t,
          oldLoop: ey(e.videoPlayback.mediaLoop),
          numVideosSelected: e.videoPlayback.numVideosSelected
        }
      }));
    },
    "data-testid": "videoLoopToggle",
    recordingKey: generateRecordingKey(e, "videoLoopToggle"),
    "aria-label": getI18nString("proto.prototype_panel.loop"),
    htmlAttributes: {
      "data-tooltip": getI18nString("proto.prototype_panel.loop"),
      "data-tooltip-type": KindEnum.TEXT
    }
  });
  let i = jsx(setupToggleButton, {
    checked: ef(!e.videoPlayback.muted),
    mixed: isInvalidValue(e.videoPlayback.muted),
    onIcon: jsx(_$$L, {}),
    offIcon: jsx(ec, {}),
    onChange: () => {
      let t = !e.videoPlayback.muted;
      e.updateSelectionProperties({
        videoMuted: t
      });
      e.dispatch(_P({
        name: "Node video muted changed",
        params: {
          newMuteValue: t,
          oldMuteValue: ey(e.videoPlayback.muted),
          numVideosSelected: e.videoPlayback.numVideosSelected
        }
      }));
    },
    "data-testid": "videoSoundToggle",
    recordingKey: generateRecordingKey(e, "videoSoundToggle"),
    "aria-label": getI18nString("proto.prototype_panel.sound"),
    htmlAttributes: {
      "data-tooltip": getI18nString("proto.prototype_panel.sound"),
      "data-tooltip-type": KindEnum.TEXT
    }
  });
  let r = jsx(pG, {
    input: t,
    leftIcon: n,
    rightIcon: i,
    label: null
  });
  return jsxs(Zk, {
    children: [jsx(fI, {
      children: jsx(_$$Q, {
        extended: !0,
        children: renderI18nText("proto.prototype_panel.video")
      })
    }), r, jsx(eg, {
      videoPlayback: e.videoPlayback
    })]
  });
};
function eD(e) {
  let {
    type
  } = e;
  return jsxs("div", {
    className: cssBuilderInstance.flex.justifyCenter.itemsCenter.$,
    children: [jsx(SvgComponent, {
      className: cssBuilderInstance.flexGrow1.mx12.$,
      useOriginalSrcFills_DEPRECATED: !0,
      svg: "horizontal" === type ? _$$A5 : _$$A6
    }), jsx("span", {
      className: cssBuilderInstance.flexGrow1.m6.$,
      style: {
        maxWidth: 144
      },
      children: renderI18nText("proto.prototype_panel.content_needs_to_be_bigger_than_the_frame_tooltip")
    })]
  });
}
let eR = registerTooltip("prototype_scroll_horizontal_info", eD, () => ({
  type: "horizontal",
  unconstrainWidth: !0
}));
let eM = registerTooltip("prototype_scroll_vertical_info", eD, () => ({
  type: "vertical",
  unconstrainWidth: !0
}));
let eV = registerTooltip("prototype_scroll_marquee_info", function () {
  return jsx("div", {
    className: cssBuilderInstance.flex.justifyCenter.itemsCenter.$,
    children: jsx("span", {
      className: cssBuilderInstance.flexGrow1.m6.$,
      style: {
        maxWidth: 144
      },
      children: renderI18nText("proto.prototype_panel.overflow_scrolling_not_available_for_frames_with_marquee")
    })
  });
}, () => ({}));
let eH = "scroll_behavior_panel--scrollDirection--XSmzK";
let eU = "scroll_behavior_panel--inactiveLabel--IexW8";
let eF = "scroll_behavior_panel--inactiveLabelContainer--lQjAi";
function eK(e) {
  let {
    disableOverflowBehaviorItem,
    disableScrollBehaviorItem,
    dropdownShown
  } = e;
  let [a, l] = function () {
    let e = getObservableValue(AppStateTsApi?.propertiesPanelState().shownPropertiesPanels, [])[ItemType.OVERFLOW_ITEM];
    let t = useIsFullscreenSitesView();
    let n = useSelectionPropertyValue("isSection");
    let o = useSelectionPropertyValue("anyTopLevelFramesInSelection");
    return [e, !t && !n && !o];
  }();
  let s = useId();
  let u = jsx(iE, {
    titleTx: renderI18nText("proto.scroll_panel.scroll_behavior_title")
  });
  return a || l ? jsx(_$$k, {
    name: "scroll_behavior_panel",
    children: jsxs(Zk, {
      children: [u, l && jsx(Fragment, {
        children: getFeatureFlags().ce_tv_fpl_select ? jsx(eG, {
          disabled: disableScrollBehaviorItem,
          recordingKey: generateRecordingKey(e, "scrollBehavior")
        }) : jsxs(fI, {
          children: [jsx("div", {
            className: eF,
            children: jsx("span", {
              id: s,
              className: eU,
              children: renderI18nText("proto.scroll_panel.position_dropdown.position")
            })
          }), jsx(eY, {
            ariaLabelledBy: s,
            recordingKey: generateRecordingKey(e, "scrollBehavior"),
            dropdownShown,
            disabled: disableScrollBehaviorItem
          })]
        })
      }), a && jsx(ez, {
        disabled: disableOverflowBehaviorItem,
        recordingKey: generateRecordingKey(e, "scrollDirection")
      })]
    })
  }) : null;
}
let e$ = ["NONE", "HORIZONTAL", "VERTICAL", "BOTH"];
function ez({
  disabled: e,
  recordingKey: t
}) {
  let n = useDispatch();
  let [a] = useSelectionProperty("showWontScrollWarning");
  let [l] = useSelectionProperty("scrollDirection");
  let s = eq();
  let d = useCallback(() => s ? eV : "HORIZONTAL" === l ? eR : eM, [s, l]);
  let c = useId();
  let u = useCallback(e => {
    n(_P({
      name: "Overflow Behavior changed",
      params: {
        newDirection: e,
        oldDirection: valueOrFallback(l, "MIXED")
      }
    }));
    fullscreenValue.updateSelectionProperties({
      scrollDirection: e
    });
  }, [n, l]);
  return useMemo(() => jsxs(fI, {
    children: [jsx("div", {
      className: eF,
      children: jsx(Label, {
        htmlFor: c,
        className: eU,
        children: renderI18nText("proto.scroll_panel.overflow_dropdown.overflow")
      })
    }), a && jsx("div", {
      className: "scroll_behavior_panel--infoIcon--FeXbf",
      "data-tooltip-type": KindEnum.SPECIAL,
      "data-tooltip": d(),
      "data-tooltip-show-immediately": !0,
      children: jsx(_$$r, {})
    }), jsx("div", {
      className: a ? "scroll_behavior_panel--scrollDirectionShort--w6iSo" : eH,
      children: jsxs(_$$bL, {
        onChange: u,
        value: l || "NONE",
        recordingKey: t,
        children: [jsx(DZ, {
          "data-testid": "scroll-direction-dropdown",
          disabled: e || s,
          id: c,
          width: "fill"
        }), jsx(mc, {
          children: e$.map(e => jsx(_$$c$, {
            value: e,
            children: _$$Rk.format(e)
          }, e))
        })]
      })
    })]
  }), [c, a, d, u, l, t, e, s]);
}
let eW = l6;
let eZ = _$$c$2;
function eG({
  disabled: e,
  recordingKey: t
}) {
  let n = useDispatch();
  let a = useSelectionPropertyValue("scrollBehavior") || "SCROLLS";
  let l = useCallback(e => {
    let t;
    switch (n(_P({
      name: "Node Scroll Behavior Changed",
      params: {
        newValue: e
      }
    })), e) {
      case "FIXED_WHEN_CHILD_OF_SCROLLING_FRAME":
        t = ScrollBehavior.FIXED;
        break;
      case "STICKY_SCROLLS":
        t = ScrollBehavior.STICKY_SCROLLS;
        break;
      case "SCROLLS":
        t = ScrollBehavior.SCROLLS;
    }
    permissionScopeHandler.user("set-scroll-behavior", () => PrototypingTsApi && PrototypingTsApi.aggressivelySetScrollBehaviorOfSelection(t));
    fullscreenValue.commit();
  }, [n]);
  let {
    fixedScrollingDisabled
  } = eX();
  let d = useId();
  return useMemo(() => jsxs(fI, {
    children: [jsx("div", {
      className: eF,
      children: jsx(Label, {
        htmlFor: d,
        className: eU,
        children: renderI18nText("proto.scroll_panel.position_dropdown.position")
      })
    }), jsx("div", {
      className: eH,
      children: jsxs(_$$bL, {
        onChange: l,
        value: a,
        recordingKey: t,
        children: [jsx(DZ, {
          "data-testid": "scroll-behavior-dropdown",
          disabled: e,
          id: d,
          width: "fill"
        }), jsxs(mc, {
          children: [jsx(_$$c$, {
            value: "SCROLLS",
            children: Ge.format("SCROLLS")
          }), jsx(_$$c$, {
            value: "FIXED_WHEN_CHILD_OF_SCROLLING_FRAME",
            disabled: fixedScrollingDisabled,
            children: Ge.format("FIXED_WHEN_CHILD_OF_SCROLLING_FRAME")
          }), jsx(_$$c$, {
            value: "STICKY_SCROLLS",
            children: Ge.format("STICKY_SCROLLS")
          })]
        })]
      })
    })]
  }), [d, l, a, t, e, fixedScrollingDisabled]);
}
function eY(e) {
  let t = useDispatch();
  let n = useSelectionPropertyValue("scrollBehavior");
  let {
    fixedScrollingDisabled
  } = eX();
  let a = "scroll-behavior-select";
  let l = e.dropdownShown && e.dropdownShown.type === a ? Ge : wi;
  return jsxs(eW, {
    ariaLabelledBy: e.ariaLabelledBy,
    className: "scroll_behavior_panel--scrollPosition--YAyUM",
    dataTestId: "scroll-behavior-dropdown",
    disabled: e.disabled,
    dispatch: t,
    dropdownClassName: "scroll_behavior_panel--fullWidth--reSmx",
    dropdownShown: e.dropdownShown,
    formatter: l,
    id: a,
    onChange: e => {
      t(_P({
        name: "Node Scroll Behavior Changed",
        params: {
          newValue: e
        }
      }));
      let n = "FIXED_WHEN_CHILD_OF_SCROLLING_FRAME" === e ? ScrollBehavior.FIXED : "STICKY_SCROLLS" === e ? ScrollBehavior.STICKY_SCROLLS : ScrollBehavior.SCROLLS;
      permissionScopeHandler.user("set-scroll-behavior", () => PrototypingTsApi?.aggressivelySetScrollBehaviorOfSelection(n));
      fullscreenValue.commit();
    },
    property: n || "SCROLLS",
    recordingKey: e.recordingKey,
    children: [jsx(eZ, {
      value: "SCROLLS"
    }), jsx(eZ, {
      value: "FIXED_WHEN_CHILD_OF_SCROLLING_FRAME",
      disabled: fixedScrollingDisabled
    }), jsx(eZ, {
      value: "STICKY_SCROLLS"
    })]
  });
}
let eq = () => {
  let [e] = useSelectionProperty("marquee");
  return !!isDefined(e);
};
let eX = () => selectWithShallowEqual(e => {
  let t = e.mirror.selectionProperties;
  return {
    fixedScrollingDisabled: !t.nodesAreAllNotInStacksOrAbsolutePositioned || !t.allHaveScrollableFrameAsParent
  };
});
function e5() {
  return jsx(_$$u, {
    idForTests: "create-connection-hint",
    title: getI18nString("proto.onboarding.creating_a_connection"),
    userFlag: "dismissed_create_connection_hint",
    icon_DEPRECATED: _$$A9,
    iconFallback: _$$A0,
    hintText: getI18nString("proto.onboarding.select_a_frame_or_object_hint")
  });
}
function e6() {
  return jsx(_$$u, {
    idForTests: "delete-connection-hint",
    title: getI18nString("proto.onboarding.removing_a_connection"),
    userFlag: "dismissed_delete_connection_hint",
    icon_DEPRECATED: _$$A7,
    iconFallback: _$$A8,
    hintText: getI18nString("proto.onboarding.to_delete_a_connection_click_and_drag_on_either_end")
  });
}
function e8() {
  return jsx(_$$u, {
    idForTests: "play-button-hint",
    title: getI18nString("proto.onboarding.running_your_prototype"),
    userFlag: "dismissed_play_button_hint",
    icon_DEPRECATED: _$$A1,
    hintText: getI18nString("proto.onboarding.use_the_play_button_hint")
  });
}
function e9({
  dismissedCreateConnectionHint: e,
  dismissedDeleteConnectionHint: t,
  dismissedPlayButtonHint: n,
  numTransitionsOnCurrentPage: r
}) {
  let a = 0 === r && !e;
  let l = 0 !== r && !t;
  let s = !n;
  let d = useMemo(() => a ? UpgradeAction.CREATING_A_CONNECTION : l ? UpgradeAction.REMOVING_A_CONNECTION : s ? UpgradeAction.RUNNING_YOUR_PROTOTYPE : null, [a, l, s]);
  return d ? jsx(TrackingProvider, {
    name: "Prototype Onboarding Hint Panel V1",
    properties: {
      trackingDescriptor: d
    },
    children: jsx(Zk, {
      children: jsxs("div", {
        children: [a && jsx(e5, {}), l && jsx(e6, {}), s && jsx(e8, {})]
      })
    })
  }) : null;
}
export let $$e70 = withTracking(function (e) {
  let {
    dropdownShown,
    pickerShown,
    shouldUseSelectedStyleProperties,
    userFlags
  } = e;
  let {
    isInstanceSelected,
    isInstanceSublayerSelected,
    isCodeInstanceSelected,
    isSectionSelected,
    isTopLevelFrameAndValidPrototypeSourceSelected,
    isValidPrototypingSourceSelected,
    numSelected,
    numTransitionsOnCurrentPage,
    numVideosSelected,
    prototypeBackgroundColor,
    prototypeDevice,
    prototypeStartingPointsInfo,
    transitionNodeID
  } = function (e) {
    let t = e ? useSelectedStyleOrSelectionPropertyValues : useSelectionPropertyValues;
    let n = e ? useNonMixedSelectedStyleOrSelectionPropertyValues : useNonMixedSelectionPropertyValues;
    return {
      ...t("prototypeDevice", "prototypeBackgroundColor", "numSelected", "numVideosSelected", "transitionNodeID", "isInstanceSublayerSelected", "isInstanceSelected", "isCodeInstanceSelected", "isValidPrototypingSourceSelected", "isTopLevelFrameAndValidPrototypeSourceSelected"),
      ...n("isSectionSelected", "numTransitionsOnCurrentPage", "prototypeStartingPointsInfo")
    };
  }(shouldUseSelectedStyleProperties);
  let R = useIsFullscreenSitesView();
  let {
    bigNudgeAmount,
    smallNudgeAmount
  } = getNudgeAmounts();
  let B = function (e) {
    let t = useNonMixedSelectionPropertyValue("videoMediaLoop");
    let n = useNonMixedSelectionPropertyValue("videoAutoplay");
    let o = useNonMixedSelectionPropertyValue("videoMuted");
    let i = useNonMixedSelectionPropertyValue("numVideosSelected");
    if (e) {
      assertNotNullish(t);
      assertNotNullish(n);
      assertNotNullish(o);
      assertNotNullish(i);
      return {
        autoplay: n,
        muted: o,
        mediaLoop: t,
        numVideosSelected: i
      };
    }
  }(!!numVideosSelected);
  let H = normalizeValue(numSelected);
  let U = null !== H && H > 0;
  let F = useDispatch();
  let K = useCallback(() => {
    F(_P({
      name: "Show Prototype Settings Clicked"
    }));
    clearSelection();
  }, [F]);
  let $ = useRef(!1);
  let z = useRef(!1);
  let Z = useCallback(() => {
    z.current = !0;
  }, []);
  let G = useCallback(() => {
    z.current = !1;
  }, []);
  let Y = useRef(null);
  let q = useRef(null);
  useEffect(() => {
    if (!z.current) return;
    if ($.current && Y.current) {
      Y.current.focus();
      return;
    }
    let e = xv(q.current);
    e && e.focus();
  }, [U]);
  let X = !isValidValue(transitionNodeID) || isValidSessionLocalID(normalizeValue(transitionNodeID));
  let Q = !R && !!numVideosSelected;
  let ee = !R && prototypeStartingPointsInfo && prototypeStartingPointsInfo.length > 0;
  let et = R || X ? null : jsx(e9, {
    dismissedCreateConnectionHint: !!userFlags.dismissed_create_connection_hint,
    dismissedDeleteConnectionHint: !!userFlags.dismissed_delete_connection_hint,
    dismissedPlayButtonHint: !!userFlags.dismissed_play_button_hint,
    numTransitionsOnCurrentPage
  });
  let er = !R && ((isValidPrototypingSourceSelected ?? !0) || isSectionSelected && YR());
  let ea = !R;
  debug(U || R || isValidValue(prototypeDevice), "should not have mixed device selection");
  return jsxs("div", {
    ref: q,
    onBlur: G,
    onFocus: Z,
    onPointerDown: e => {
      $.current = isFakeTouchEvent(e.nativeEvent);
    },
    children: [ea && jsx(Mw, {
      panelName: ON.PROTOTYPE
    }), U ? jsxs(Fragment, {
      children: [!R && isTopLevelFrameAndValidPrototypeSourceSelected && jsx(_$$A2, {
        recordingKey: generateRecordingKey(e, "startingPointPanel")
      }), er && jsx(y7, {}), !isCodeInstanceSelected && jsx(eK, {
        dropdownShown,
        disableOverflowBehaviorItem: !!(isInstanceSelected || isInstanceSublayerSelected),
        disableScrollBehaviorItem: !!isInstanceSublayerSelected,
        recordingKey: generateRecordingKey(e, "scrollBehaviorPanel")
      }), Q && jsx(e_, {
        updateSelectionProperties: fullscreenValue.updateSelectionProperties,
        dispatch: F,
        videoPlayback: B,
        recordingKey: generateRecordingKey(e, "prototypeVideoPlaybackPanel")
      }), !R && jsx(_$$k, {
        name: "show_prototype_settings_panel",
        children: jsx(Zk, {
          className: rq,
          children: jsx(_$$z, {
            onClick: K,
            recordingKey: generateRecordingKey(e, "prototypeSettingsButton"),
            children: renderI18nText("proto.menu.show_prototype_settings")
          })
        })
      })]
    }) : jsxs(Fragment, {
      children: [!R && jsx(J, {
        bigNudgeAmount,
        dispatch: F,
        isUI3: !0,
        pickerShown,
        prototypeBackgroundColor,
        prototypeDevice: Qx(prototypeDevice),
        recordingKey: "devicePanel",
        smallNudgeAmount,
        titleRef: Y
      }, "device-panel"), ee && jsx(_$$A, {})]
    }), et, U && jsx("div", {})]
  });
}, _$$e.PROTOTYPE_PANEL);
export const Z0 = $$e70;