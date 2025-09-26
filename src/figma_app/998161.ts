import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { noop } from 'lodash-es';
import { IconButton } from "../905/443068";
import { DialogHeader, DialogTitle, DialogActionStrip, DialogContents, DialogBody } from "../figma_app/272243";
import { t as _$$t } from "../905/150656";
import { bL } from "../905/911410";
import { ButtonPrimitive } from "../905/632989";
import { R as _$$R } from "../905/649743";
import { i as _$$i } from "../905/22844";
import { GradientToolApi, VariablesBindings, NodePropertyCategory, LayoutTabType, VariableResolvedDataType } from "../figma_app/763686";
import { permissionScopeHandler, scopeAwareFunction } from "../905/189185";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useCounter } from "../905/108595";
import { generateRecordingKey } from "../figma_app/878298";
import { k as _$$k } from "../905/582200";
import { LazyInputForwardRef } from "../905/408237";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { Ep } from "../figma_app/504823";
import { getColorFormat } from "../figma_app/740163";
import { isGradientType, validateGradientPaint, getSolidPaint, getColorAtStop, paintManager } from "../figma_app/385874";
import { useSelectionPropertyValue } from "../905/275640";
import { tZ } from "../figma_app/852050";
import { useDropdownState } from "../905/848862";
import { useCurrentTool, useAppModelProperty } from "../figma_app/722362";
import { normalizePath } from "../905/309735";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { KeyboardReceiver } from "../905/826900";
import { qo, S7, sX } from "../figma_app/259578";
import { T_, n8 } from "../905/713167";
import { n as _$$n } from "../905/264891";
import { i as _$$i2 } from "../905/777871";
import { Rp } from "../figma_app/149989";
import { aZ } from "../figma_app/481279";
import { PG, o9, Vz } from "../figma_app/952764";
import { E_ } from "../figma_app/177697";
import { Xr, X9, wH, Kv } from "../figma_app/887835";
let $$z1 = qo;
let $$W2 = {
  type: "SOLID",
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  },
  opacity: 1,
  blendMode: "NORMAL"
};
var K = (e => (e[e.COLOR = 0] = "COLOR", e[e.GRADIENT = 1] = "GRADIENT", e))(K || {});
function Y() {
  return jsx(IconButton, {
    actionOnPointerDown: !0,
    onClick: GradientToolApi?.rotateGradient90Degrees,
    "aria-label": getI18nString("fullscreen.properties_panel.gradient_picker.rotate_90"),
    htmlAttributes: {
      "data-tooltip": getI18nString("fullscreen.properties_panel.gradient_picker.rotate_90"),
      "data-tooltip-type": KindEnum.TEXT
    },
    children: jsx(_$$R, {})
  });
}
function $({
  editVar: e
}) {
  let t = useCallback(() => permissionScopeHandler.user("slides-delete-theme-color", () => {
    e && VariablesBindings?.deleteVariable(e.varId);
  }), [e]);
  return e ? jsx(IconButton, {
    onClick: t,
    "aria-label": getI18nString("slides.properties_panel.color_picker.delete_template_color"),
    children: jsx(_$$i, {})
  }) : null;
}
function X({
  paint: e,
  onChange: t
}) {
  let r = isGradientType(e.type);
  let i = validateGradientPaint(e);
  return r && i ? jsxs("div", {
    className: cssBuilderInstance.flex.pl8.$,
    children: [jsx(Y, {}), jsx(_$$n, {
      gradientPaint: i,
      onChange: t
    })]
  }) : null;
}
function q({
  title: e,
  rightButtons: t
}) {
  return jsxs(DialogHeader, {
    children: [jsx(DialogTitle, {
      children: e
    }), t && jsx(DialogActionStrip, {
      children: jsx("div", {
        children: t
      })
    })]
  });
}
export function $$J0({
  paint: e,
  onChange: t,
  onClose: r,
  initialPosition: o,
  enableGradients: u,
  hideCustomColorPickerFillTypeToggle: p,
  inheritStyleKeyField: _
}) {
  let m = PG(t);
  let f = o9(_, Vz);
  let b = ["custom_color", "library"];
  let [T, v, A] = _$$t.useTabs({
    custom_color: b.includes("custom_color"),
    library: b.includes("library")
  }, {
    defaultActive: () => "custom_color"
  });
  let C = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
  let w = useSelectionPropertyValue("numSelectedByType");
  let O = useMemo(() => {
    if (w) return aZ(NodePropertyCategory.FILL, w);
  }, [w]);
  let R = useAtomWithSubscription(E_);
  let L = useMemo(() => new Set(), []);
  let P = useCallback(() => {
    C === LayoutTabType.GRADIENT && fullscreenValue.triggerAction("leave-edit-mode");
    r();
  }, [C, r]);
  let D = "slidesCustomColorPicker";
  let k = isGradientType(e.type);
  let M = R ? getI18nString("slides.properties_panel.text_style.edit_template_color") : k ? getI18nString("slides.properties_panel.fill.fill_type_gradient") : getI18nString("slides.properties_panel.fill.fill_type_color");
  return jsx(_$$k, {
    name: "slides_custom_color_picker",
    children: jsx(bL, {
      defaultPosition: o,
      onClose: P,
      recordingKey: D,
      children: jsxs(DialogContents, {
        allowOverflow: !0,
        children: [jsx(q, {
          title: M,
          rightButtons: jsx($, {
            editVar: R
          })
        }), jsxs(DialogBody, {
          padding: 0,
          children: [jsxs("div", {
            className: "x78zum5 x1qughib xe8ttls x1kgkb76",
            children: [jsxs(_$$t.TabStrip, {
              manager: A,
              children: [jsx(_$$t.Tab, {
                ...T.custom_color,
                children: renderI18nText("fullscreen.properties_panel.color_picker.custom")
              }), jsx(_$$t.Tab, {
                ...T.library,
                children: renderI18nText("fullscreen.properties_panel.color_picker.libraries")
              })]
            }), jsx(X, {
              paint: e,
              onChange: t
            })]
          }), jsx(_$$t.TabPanel, {
            ...v.custom_color,
            children: jsx(Z, {
              paint: e,
              onPaintChange: t,
              enableGradients: u,
              recordingKey: "slidesCustomColorPicker",
              hideCustomColorPickerFillTypeToggle: p
            })
          }), jsx(_$$t.TabPanel, {
            ...v.library,
            children: jsx(Rp, {
              selectedItem: null,
              resolvedType: VariableResolvedDataType.COLOR,
              disabledVariableIds: L,
              pickerType: "color-picker",
              recordingKey: generateRecordingKey("slidesCustomColorPicker", "libraryColors"),
              onVariableSelected: m,
              onStyleSelected: f,
              onClose: noop,
              variableScopes: O
            })
          }), jsx(ee, {
            recordingKey: generateRecordingKey(D, "rename")
          })]
        })]
      })
    })
  });
}
function Z({
  paint: e,
  onPaintChange: t,
  enableGradients: r,
  recordingKey: s,
  hideCustomColorPickerFillTypeToggle: o
}) {
  let l = useDispatch();
  let d = useDropdownState();
  let c = useCurrentTool();
  let u = Ep();
  let p = useCounter();
  let _ = getColorFormat();
  let m = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
  let g = useRef(null);
  let [E, y] = useState(isGradientType(e.type) ? 1 : 0);
  let b = getSolidPaint(e);
  let T = validateGradientPaint(e);
  let I = useAppModelProperty("currentSelectedGradientStop");
  let N = getColorAtStop(b || T || $$W2, I);
  let C = r => {
    e.type !== r && t(paintManager.initPaint(r, $$W2.color, e, "slides-custom-color-picker"), !isGradientType(e.type) && isGradientType(r) ? yesNoTrackingEnum.NO : yesNoTrackingEnum.YES);
  };
  return jsxs(Fragment, {
    children: [!o && r && jsx(Q, {
      panelType: E,
      onPanelTypeChange: e => {
        E !== e && (C(0 === e ? "SOLID" : "GRADIENT_LINEAR"), y(e), 1 === e ? fullscreenValue.triggerAction("toggle-gradient-edit-mode") : m === LayoutTabType.GRADIENT && fullscreenValue.triggerAction("leave-edit-mode"));
      },
      recordingKey: s
    }), r && 1 === E && T && jsx(KeyboardReceiver, {
      name: "Slides color picker",
      ref: g,
      handleKeyDown: e => {
        T && T_(e, T, m, I, t);
      },
      focusOnMount: !0,
      forceUpdate: p,
      children: jsx("div", {
        className: Xr,
        children: jsx(_$$i2, {
          paint: T,
          onChange: t,
          currentSelectedGradientStop: I,
          colorProfile: u,
          hasFocus: !!g.current && g.current.hasFocus(),
          dispatch: l,
          recordingKey: s
        })
      })
    }), jsx(S7, {
      canAcceptStyles: !1,
      canAcceptVariables: !1,
      color: N,
      colorFormat: _,
      currentTool: c,
      dispatch: l,
      displayType: sX.FULL,
      dropdownShown: d,
      dropperDisabled: !1,
      onColorChange: (r, n) => {
        n8(r, e, I, t, n);
      },
      preventAutoFocus: !0,
      recordingKey: s
    })]
  });
}
function Q({
  panelType: e,
  onPanelTypeChange: t,
  recordingKey: r
}) {
  let i = [{
    type: 0,
    label: getI18nString("slides.properties_panel.color_picker.color_toggle"),
    optionRecordingKey: "color"
  }, {
    type: 1,
    label: getI18nString("slides.properties_panel.color_picker.gradient_toggle"),
    optionRecordingKey: "gradient"
  }];
  return jsx("div", {
    className: cssBuilderInstance.wFull.py8.bb1.bSolid.colorBorder.$,
    children: jsx("div", {
      className: X9,
      children: i.map(({
        type: i,
        label: a,
        optionRecordingKey: s
      }) => jsx(ButtonPrimitive, {
        className: e === i ? wH : void 0,
        onClick: () => t(i),
        recordingKey: generateRecordingKey(r, s),
        children: a
      }, i))
    })
  });
}
function ee({
  recordingKey: e
}) {
  let t = useAtomWithSubscription(E_);
  let r = tZ(t?.varId);
  let [a, s] = useState(r ?? "");
  useEffect(() => {
    s(r ?? "");
  }, [r]);
  let o = useRef(null);
  let l = useCallback(() => {
    VariablesBindings?.renameVariable(t?.varId ?? "", normalizePath(a));
  }, [t, a]);
  return t ? jsxs("div", {
    className: cssBuilderInstance.px16.py12.flex.itemsCenter.bt1.bSolid.colorBorder.$,
    children: [jsx("span", {
      className: cssBuilderInstance.colorTextSecondary.textBodyMedium.w64.$,
      children: renderI18nText("slides.properties_panel.color_picker.rename_color_label")
    }), jsx(LazyInputForwardRef, {
      ref: o,
      className: Kv,
      "data-1p-ignore": !0,
      delay: 50,
      name: "variableName",
      onBlur: scopeAwareFunction.user("slides-rename-theme-color", l),
      onChange: e => {
        s(e.target.value);
      },
      onKeyDown: e => {
        ("Enter" === e.key || "Escape" === e.key) && o.current?.blur();
      },
      placeholder: getI18nString("slides.properties_panel.color_picker.rename_color_placeholder"),
      recordingKey: e,
      value: a
    })]
  }) : null;
}
export const Ph = $$J0;
export const jP = $$z1;
export const li = $$W2;