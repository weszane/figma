import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, forwardRef, PureComponent, useCallback, useContext, useRef, useState } from "react";
import { d as _$$d } from "../905/976845";
import { T as _$$T } from "../905/68180";
import { IconButton } from "../905/443068";
import { O as _$$O } from "../905/487602";
import { TransformModifierBindingsCpp, Axis, NodePropertyCategory } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { memoizeByArgs } from "../figma_app/815945";
import { analyticsEventManager } from "../905/449184";
import { debugState } from "../905/407919";
import { getFilteredFeatureFlags } from "../905/717445";
import { Q as _$$Q } from "../figma_app/67145";
import { generateRecordingKey } from "../figma_app/878298";
import { k as _$$k2 } from "../905/582200";
import { getI18nString } from "../905/303541";
import { hidePickerThunk, showPickerThunk } from "../figma_app/91703";
import { ey as _$$ey } from "../figma_app/451499";
import { mapEditorTypeToProductType } from "../figma_app/314264";
import { fullscreenValue } from "../figma_app/455680";
import { valueOrFallback } from "../905/216495";
import { useSelectionPropertyValue } from "../905/275640";
import { useLabConfiguration, labConfigurations } from "../905/226610";
import { Q as _$$Q2 } from "../figma_app/104130";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { calculatePickerPositionLeft } from "../905/959568";
import { a2 } from "../figma_app/762558";
import { e as _$$e } from "../figma_app/905311";
import { h6 } from "../905/401389";
import { YW } from "../figma_app/778125";
import { b as _$$b, O as _$$O2 } from "../905/916974";
import { Id, Zk, $4 } from "../figma_app/626177";
import { l6, c$ } from "../905/794875";
import { Point } from "../905/736624";
import { DraggableModalManager } from "../905/748636";
import { bL, l9, mc, c$ as _$$c$ } from "../905/493196";
import { HiddenLabel } from "../905/270045";
import { EventShield } from "../905/821217";
import { bL as _$$bL, RT, c$ as _$$c$2 } from "../905/867927";
import { Legend } from "../905/932270";
import { O as _$$O3 } from "../905/599243";
import { cS, Cm } from "../figma_app/334459";
import { q as _$$q2 } from "../905/74101";
import { AngleInput } from "../figma_app/178475";
import { dD, Gi } from "../figma_app/941824";
import { Y9 } from "../figma_app/811257";
import { MF } from "../figma_app/473914";
import { B as _$$B } from "../905/229357";
import ed from "classnames";
import { DEFAULT_FINE_NUDGE, DEFAULT_COARSE_NUDGE } from "../905/668764";
import { Lk } from "../figma_app/975811";
import { L as _$$L } from "../905/827467";
import { F as _$$F } from "../905/807573";
import { H as _$$H } from "../905/66320";
import { C as _$$C } from "../905/549861";
import { i1 } from "../905/982943";
let K = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M8 11.5a.5.5 0 0 0 .5.5h6.789l-2.4 2.389a.5.5 0 0 0 .706.708l3.258-3.242a.5.5 0 0 0 0-.709l-3.258-3.243a.5.5 0 1 0-.705.71L15.289 11H8.5a.5.5 0 0 0-.5.5",
      clipRule: "evenodd"
    })
  });
});
let Y = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M12.5 7a.5.5 0 0 0-.5.5v6.789l-2.388-2.4a.5.5 0 0 0-.709.706l3.243 3.258a.5.5 0 0 0 .708 0l3.243-3.258a.5.5 0 0 0-.709-.705L13 14.289V7.5a.5.5 0 0 0-.5-.5",
      clipRule: "evenodd"
    })
  });
});
let Z = "ui3_transform_modifiers_settings_picker--controlTwoSegments--eKMVM";
function X(e) {
  return jsxs(bL, {
    value: e.currentUnits,
    onChange: t => e.onUnitsChange(t, yesNoTrackingEnum.YES),
    children: [jsx(l9, {
      width: "fill",
      label: jsx(HiddenLabel, {
        children: getI18nString("properties_panel.transform_modifiers.repeat.units_label")
      }),
      disabled: e.disabled
    }), jsxs(mc, {
      children: [jsx(_$$c$, {
        value: "RELATIVE",
        children: getI18nString("properties_panel.transform_modifiers.repeat.units_relative", {
          numUnits: e.value
        })
      }), jsx(_$$c$, {
        value: "PIXELS",
        children: getI18nString("properties_panel.transform_modifiers.repeat.units_pixels")
      })]
    })]
  });
}
function Q(e) {
  return jsx(cS, {
    label: e.label,
    input: jsx(EventShield, {
      eventListeners: ["onMouseDown"],
      children: jsx(_$$q2, {
        autoFocus: !0,
        bigStep: 1,
        dataTooltip: getI18nString("properties_panel.transform_modifiers.repeat.count"),
        disabled: e.disabled,
        fullWidth: !0,
        icon: jsx(_$$O3, {}),
        max: 40,
        min: 1,
        onValueChange: e.onValueChange,
        step: 1,
        tooltipForScreenReadersOnly: !0,
        value: e.value
      })
    })
  });
}
function J(e) {
  let t = jsx(EventShield, {
    eventListeners: ["onMouseDown"],
    children: jsx(_$$q2, {
      value: e.value,
      onValueChange: e.onValueChange,
      bigStep: "RELATIVE" === e.currentUnits ? 0.2 : 5,
      step: "RELATIVE" === e.currentUnits ? 0.1 : 1,
      dataTooltip: e.label,
      min: 0,
      tooltipForScreenReadersOnly: !0,
      fullWidth: !0,
      disabled: e.disabled
    })
  });
  return jsx(Cm, {
    label: e.label,
    leftInput: t,
    rightInput: jsx(EventShield, {
      eventListeners: ["onMouseDown"],
      children: jsx(X, {
        disabled: e.disabled,
        onUnitsChange: e.onUnitsChange,
        currentUnits: e.currentUnits,
        value: e.value
      })
    })
  });
}
function ee(e) {
  let t = (t, i) => {
    if (t === e.transformModifier.repeatType) return;
    let n = {
      ...e.transformModifier,
      repeatType: t
    };
    e.onChange(n, i);
  };
  let i = (t, i) => {
    if (t === e.transformModifier.axis) return;
    let n = {
      ...e.transformModifier,
      axis: t
    };
    e.onChange(n, i);
  };
  return jsxs(Id, {
    children: [jsx("div", {
      className: Z,
      children: jsx(EventShield, {
        eventListeners: ["onMouseDown"],
        children: jsxs(_$$bL, {
          legend: jsx(Legend, {
            children: getI18nString("properties_panel.transform_modifiers.repeat.type")
          }),
          value: e.transformModifier.repeatType,
          onChange: e => t(e, yesNoTrackingEnum.YES),
          readonly: e.disabled,
          children: [jsx(RT, {
            label: getI18nString("fullscreen.properties_panel.radial"),
            value: "RADIAL"
          }), jsx(RT, {
            label: getI18nString("fullscreen.properties_panel.linear"),
            value: "LINEAR"
          })]
        })
      })
    }), "LINEAR" === e.transformModifier.repeatType && jsx(cS, {
      label: getI18nString("properties_panel.transform_modifiers.repeat.direction"),
      input: jsx(EventShield, {
        eventListeners: ["onMouseDown"],
        children: jsx("span", {
          className: Z,
          children: jsxs(_$$bL, {
            legend: jsx(Legend, {
              children: getI18nString("properties_panel.transform_modifiers.repeat.direction")
            }),
            value: e.transformModifier.axis,
            onChange: e => i(e, yesNoTrackingEnum.YES),
            readonly: e.disabled,
            children: [jsx(_$$c$2, {
              icon: jsx(K, {}),
              value: "X",
              "aria-label": getI18nString("fullscreen.type_panel.align_horizontal")
            }), jsx(_$$c$2, {
              icon: jsx(Y, {}),
              value: "Y",
              "aria-label": getI18nString("fullscreen.type_panel.align_vertical")
            })]
          })
        })
      })
    }), jsx(Q, {
      ...e,
      label: getI18nString("properties_panel.transform_modifiers.repeat.count"),
      onValueChange: (t, i) => {
        if (t === e.transformModifier.count) return;
        let n = {
          ...e.transformModifier,
          count: t
        };
        e.onChange(n, i);
      },
      value: e.transformModifier.count || 1
    }), jsx(J, {
      ...e,
      label: getI18nString("properties_panel.transform_modifiers.repeat.spacing"),
      onValueChange: (t, i) => {
        if (t === (e.transformModifier.offset?.x ?? 0)) return;
        let n = {
          ...e.transformModifier,
          offset: {
            x: t,
            y: 0
          }
        };
        e.onChange(n, i);
      },
      value: e.transformModifier.offset?.x ?? 0,
      onUnitsChange: (t, i) => {
        if (t !== e.transformModifier.unitType && TransformModifierBindingsCpp) {
          let n = TransformModifierBindingsCpp.getOffsetForUnitChange(e.transformModifierIndex, e.transformModifier.offset?.x || 0, "RELATIVE" === t ? 1 : 0, "X" === e.transformModifier.axis ? Axis.X : Axis.Y);
          let r = {
            ...e.transformModifier,
            unitType: t,
            offset: {
              x: n,
              y: e.transformModifier.offset?.y ?? 0
            }
          };
          e.onChange(r, i);
        }
      },
      currentUnits: e.transformModifier.unitType || "PIXELS"
    })]
  });
}
function ei(e) {
  let t = jsx(AngleInput, {
    value: e.value ?? 0,
    inputClassName: "ui3_transform_modifiers_settings_picker--input--S-N-R",
    onValueChange: e.onValueChange,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": "x" === e.axis ? getI18nString("properties_panel.transform_modifiers.x") : getI18nString("properties_panel.transform_modifiers.y"),
    tooltipForScreenReadersOnly: !0,
    autoFocus: e.autoFocus,
    dispatch: e.dispatch,
    recordingKey: generateRecordingKey(e, `skewAngle${e.axis.toUpperCase()}`)
  });
  return jsx(cS, {
    label: "x" === e.axis ? getI18nString("properties_panel.transform_modifiers.x") : getI18nString("properties_panel.transform_modifiers.y"),
    input: t
  });
}
function en(e) {
  return jsx(Fragment, {
    children: jsxs(Id, {
      children: [jsx(ei, {
        ...e,
        value: e.transformModifier.skewX,
        axis: "x",
        autoFocus: !0,
        onValueChange: (t, i) => {
          if (t === (e.transformModifier.skewX ?? 0)) return;
          let n = {
            ...e.transformModifier,
            skewX: t
          };
          e.onChange(n, i);
        }
      }), jsx(ei, {
        ...e,
        value: e.transformModifier.skewY,
        axis: "y",
        onValueChange: (t, i) => {
          if (t === (e.transformModifier.skewY ?? 0)) return;
          let n = {
            ...e.transformModifier,
            skewY: t
          };
          e.onChange(n, i);
        }
      })]
    })
  });
}
function er(e) {
  let t = e.transformModifier.type && function (e) {
    switch (e) {
      case "SYMMETRY":
      case "SKEW":
        return null;
      case "REPEAT":
        return getI18nString("properties_panel.transform_modifiers.repeat");
    }
  }(e.transformModifier.type);
  let i = new Point(e.initialX, e.initialY);
  return jsx(DraggableModalManager, {
    title: t ? jsx("div", {
      className: "ui3_transform_modifiers_settings_picker--modalTitle--DbZBD",
      children: t
    }) : void 0,
    headerSize: "small",
    initialPosition: i,
    onClose: () => {
      e.dispatch(hidePickerThunk());
      fullscreenValue.deselectProperty();
    },
    recordingKey: generateRecordingKey(e, "modal"),
    children: function (e, t) {
      switch (t) {
        case "SYMMETRY":
          return jsx("div", {});
        case "REPEAT":
          return jsx(ee, {
            ...e
          });
        case "SKEW":
          return jsx(en, {
            ...e
          });
      }
    }(e, e.transformModifier.type ?? "REPEAT")
  });
}
var ec = ed;
let ef = () => ({
  offset: {
    x: 1,
    y: 0
  },
  type: "REPEAT",
  repeatType: "LINEAR",
  count: 3,
  order: "FORWARD",
  axis: "X",
  visible: !0,
  unitType: "RELATIVE"
});
function e_(e) {
  if (!e.type) throw Error("unknown transformModifier type");
  return {
    ...ef(),
    ...e
  };
}
function eA(e) {
  if (!e.type) return jsx("div", {});
  switch (e.type) {
    case "REPEAT":
    case "SYMMETRY":
      return "LINEAR" === e.repeatType ? jsx(_$$L, {}) : jsx(_$$F, {});
    case "SKEW":
      return jsx(_$$H, {});
  }
}
let eb = "transform_modifiers_panel--ui3TransformModifierIconInvisible--i8kXv";
let ev = "transform_modifiers_panel--select--JyMv1";
let eI = "transform_modifiers_panel--input--sydmt";
let eE = "transform_modifiers_panel--inputInvisible--NnRl7";
let ex = "transform_modifiers_panel--chevron--GL--O";
let ew = e => {
  switch (e.type) {
    case "REPEAT":
      return getI18nString("fullscreen.properties_panel.transform_modifiers.repeat");
    case "SYMMETRY":
      return getI18nString("fullscreen.properties_panel.transform_modifiers.symmetry");
    case "SKEW":
      return getI18nString("fullscreen.properties_panel.transform_modifiers.skew");
    default:
      return getI18nString("fullscreen.properties_panel.section_transform_modifiers.tooltip_add_transform_modifier");
  }
};
let eC = new Lk({
  floatingPointFormat: {
    maxNumDigits: 2
  },
  smallNudgeAmount: DEFAULT_FINE_NUDGE,
  bigNudgeAmount: DEFAULT_COARSE_NUDGE
});
let eT = e => {
  if (void 0 === e) return "";
  switch (e) {
    case "X":
      return getI18nString("fullscreen.type_panel.align_horizontal");
    case "Y":
      return getI18nString("fullscreen.type_panel.align_vertical");
    default:
      return "";
  }
};
let ek = e => {
  let t = [];
  if ("REPEAT" === e.type ? "LINEAR" === e.repeatType ? t.push(eT(e.axis)) : "RADIAL" === e.repeatType && t.push(getI18nString("fullscreen.properties_panel.radial")) : t.push(getI18nString("fullscreen.properties_panel.section_transform_modifiers.tooltip_add_transform_modifier")), null != e.offset && null != e.unitType) switch (e.unitType) {
    case "PIXELS":
      t.push(`${getI18nString("properties_panel.transform_modifiers.repeat.units_pixels_lowercase", {
        numPx: eC.format(e.offset.x)
      })}`);
      break;
    case "RELATIVE":
      t.push(`${getI18nString("properties_panel.transform_modifiers.repeat.units_relative_lowercase", {
        numUnits: eC.parse(eC.format(e.offset.x))
      })}`);
  }
  return t;
};
let eR = forwardRef((e, t) => {
  let i = ew(e.transformModifier);
  let r = ek(e.transformModifier);
  return jsx(_$$C, {
    ...e,
    ref: t,
    propertyName: i,
    propertyValues: r,
    visible: e.transformModifier.visible,
    previewElement: jsx("span", {
      className: ec()(i1, {
        [eb]: !e.transformModifier.visible
      }),
      children: eA(e.transformModifier)
    })
  });
});
let eN = ["REPEAT", ...(getFilteredFeatureFlags().ce_il_slant ? ["SKEW"] : [])];
let eP = {
  REPEAT: 2,
  SYMMETRY: 1,
  SKEW: 1
};
let eO = _$$b();
export class $$eD0 extends PureComponent {
  constructor() {
    super(...arguments);
    this.transformModifiersList = memoizeByArgs(e => valueOrFallback(e, []).map(e_));
    this.onTransformModifiersChange = (e, t) => {
      fullscreenValue.updateSelectionProperties({
        transformModifiers: e
      }, {
        shouldCommit: t
      });
      a2("transformModifiers");
    };
  }
  render() {
    let e = this.transformModifiersList(this.props.transformModifiers);
    let t = {};
    eN.forEach(e => t[e] = 0);
    e.forEach(e => e.type && t[e.type]++);
    let i = eN.filter(e => t[e] < eP[e]);
    return jsx(_$$k2, {
      name: "transform_modifiers_panel",
      children: jsx(Zk, {
        id: "transform-modifiers-panel",
        children: jsx(eL, {
          allowedTransformModifiers: i,
          bigNudgeAmount: this.props.bigNudgeAmount,
          currentSelectedProperty: this.props.currentSelectedProperty,
          dispatch: this.props.dispatch,
          dropdownShown: this.props.dropdownShown,
          isUI3: this.props.isUI3,
          onChange: this.onTransformModifiersChange,
          openFile: this.props.openFile,
          pickerShown: this.props.pickerShown,
          propertyList: e,
          recordingKey: generateRecordingKey(this.props, "transformModifiersList"),
          selectedPropertyType: NodePropertyCategory.TRANSFORM_MODIFIER,
          smallNudgeAmount: this.props.smallNudgeAmount
        })
      })
    });
  }
}
function eL(e) {
  let {
    allowedTransformModifiers,
    bigNudgeAmount,
    currentSelectedProperty,
    dispatch,
    dropdownShown,
    onChange,
    openFile,
    pickerShown,
    propertyList,
    recordingKey,
    selectedPropertyType,
    smallNudgeAmount,
    isUI3
  } = e;
  let S = debugState.getState().selectedView;
  let T = mapEditorTypeToProductType(S.editorType);
  let k = valueOrFallback(propertyList, []);
  let R = useCallback(() => {
    atomStoreManager.set(eO, k.length);
    fullscreenValue.triggerActionInUserEditScope("add-transform-modifier-to-selection", {
      source: "panel"
    });
    analyticsEventManager.trackDefinedEvent("illustration.web_transform_add_to_layer", {
      transformType: "REPEAT"
    });
    a2("transformModifiers");
  }, [k.length]);
  let P = useCallback(e => {
    let t = k[e]?.type;
    let i = k.filter((t, i) => i !== e);
    0 === i.length ? fullscreenValue.triggerActionInUserEditScope("ungroup-selection", {
      source: "panel"
    }) : onChange(i);
    dispatch(hidePickerThunk());
    fullscreenValue.deselectProperty();
    analyticsEventManager.trackDefinedEvent("illustration.web_transform_delete_from_layer", {
      transformType: t,
      productType: T
    });
    a2("transformModifiers");
  }, [k, dispatch, onChange, T]);
  let D = useLabConfiguration(labConfigurations.useGrid) && isUI3;
  let {
    useLargePreviewRows
  } = useContext(_$$Q2);
  let F = generateRecordingKey(e);
  let M = useCallback((e, r, a, l, d, u, h, g, y) => jsx(eB, {
    allowedTransformModifiers,
    bigNudgeAmount,
    dispatch,
    dropdownShown,
    hasFocus: d,
    id: `${selectedPropertyType}-${r}`,
    index: r,
    isDragging: l,
    isUI3,
    onChange: u,
    onMouseDown: (...t) => {
      h(...t);
      analyticsEventManager.trackDefinedEvent("illustration.web_transform_toggle_flyout_open", {
        transformType: e.type,
        productType: T
      });
    },
    onMouseMove: g,
    onMouseUp: y,
    onRemoveTransformModifier: () => P(r),
    pickerShown,
    productType: T,
    recordingKey: generateRecordingKey(F, r),
    selected: a,
    singletonRow: valueOrFallback(propertyList, []).length <= 1,
    smallNudgeAmount,
    transformModifier: e,
    useLargePreviewRows
  }, D ? void 0 : `transformModifier-${r}`), [allowedTransformModifiers, F, bigNudgeAmount, dispatch, dropdownShown, P, isUI3, pickerShown, T, propertyList, selectedPropertyType, D, smallNudgeAmount, useLargePreviewRows]);
  return jsx(dD.Provider, {
    value: {
      useGrid: D
    },
    children: jsx("div", {
      className: useLargePreviewRows ? "" : "transform_modifiers_panel--transformModifiersContainer--IFVPR",
      children: jsx(h6, {
        addProperty: R,
        currentSelectedProperty,
        dispatch,
        onChange,
        openFile,
        overrideAddPropertyTooltip: isUI3 ? getI18nString("fullscreen.properties_panel.section_transform_modifiers.tooltip_add_transform_modifier") : void 0,
        pickerShown,
        propertyList,
        recordingKey,
        renderHeader: () => jsx(Fragment, {}),
        renderProperty: M,
        selectedPropertyType,
        stylePickerShown: {
          isShown: !1
        },
        title: getI18nString("fullscreen.properties_panel.transform_modifiers.transform_modifiers")
      })
    })
  });
}
$$eD0.displayName = "TransformModifiersPanel";
let eF = l6;
let eM = c$;
let ej = new _$$ey();
var eU = (e => (e[e.SETTINGS = 0] = "SETTINGS", e[e.COLOR = 1] = "COLOR", e))(eU || {});
function eB(e) {
  let {
    allowedTransformModifiers,
    bigNudgeAmount,
    dispatch,
    dropdownShown,
    hasFocus,
    id,
    index,
    isDragging,
    isUI3,
    onChange,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onRemoveTransformModifier,
    pickerShown,
    recordingKey,
    selected,
    singletonRow,
    smallNudgeAmount,
    transformModifier,
    productType,
    useLargePreviewRows
  } = e;
  let Y = useSelectionPropertyValue("isInstanceSublayerSelected");
  let q = generateRecordingKey(e);
  let $ = `transformModifiers-flyout-${id}`;
  let Z = pickerShown && pickerShown.id === id && pickerShown.data?.type === 0 ? pickerShown : null;
  let {
    useGrid
  } = useContext(dD);
  let Q = useRef(null);
  let [J, ee] = useState();
  let et = useCallback(e => e.stopPropagation(), []);
  let ei = useCallback((e, t) => {
    e.visible = !0;
    onChange(e, t);
    analyticsEventManager.trackDefinedEvent("illustration.web_transform_toggle_visible_implicit", {
      transformType: transformModifier.type,
      productType
    });
  }, [onChange, transformModifier.type, productType]);
  let en = useCallback((e, t = yesNoTrackingEnum.YES) => {
    let i = transformModifier.type;
    onChange({
      ...function (e) {
        switch (e) {
          case "REPEAT":
            return {
              ...ef(),
              repeatType: "LINEAR",
              axis: "X",
              count: 3,
              order: "FORWARD",
              unitType: "RELATIVE",
              offset: {
                x: 1,
                y: 0
              }
            };
          case "SYMMETRY":
            return {
              ...ef(),
              type: "SYMMETRY"
            };
          case "SKEW":
            return {
              ...ef(),
              type: "SKEW",
              skewX: 45,
              skewY: 0
            };
          default:
            throw Error("unknown modifier type");
        }
      }(e),
      ...transformModifier,
      type: e
    }, t);
    analyticsEventManager.trackDefinedEvent("illustration.web_transform_type_change", {
      oldType: i,
      transformType: e,
      productType: mapEditorTypeToProductType(debugState.getState().selectedView.editorType)
    });
  }, [onChange, transformModifier]);
  let ed = useCallback(e => {
    analyticsEventManager.trackDefinedEvent("illustration.web_transform_toggle_visibility", {
      transformType: transformModifier.type,
      isVisible: e,
      productType: mapEditorTypeToProductType(debugState.getState().selectedView.editorType)
    });
    onChange({
      ...transformModifier,
      visible: e
    }, yesNoTrackingEnum.YES);
  }, [onChange, transformModifier]);
  let ec = useCallback(e => {
    if (e && e.stopPropagation(), Z) {
      dispatch(hidePickerThunk());
      fullscreenValue.deselectProperty();
    } else {
      let e = calculatePickerPositionLeft(Q.current);
      fullscreenValue.updateAppModel({
        currentSelectedProperty: {
          type: NodePropertyCategory.TRANSFORM_MODIFIER,
          indices: [index]
        }
      });
      dispatch(showPickerThunk({
        id,
        initialX: e.x,
        initialY: e.y,
        data: {
          type: 0
        }
      }));
    }
  }, [dispatch, index, id, Z]);
  let eu = pickerShown?.id === id;
  let ep = useCallback(() => {
    eu && dispatch(hidePickerThunk());
  }, [eu, dispatch]);
  let em = useCallback(e => transformModifier.type === e || -1 !== allowedTransformModifiers.indexOf(e), [allowedTransformModifiers, transformModifier.type]);
  let eh = useCallback(e => e.map((e, t) => jsx(eM, {
    value: e,
    disabled: !em(e),
    recordingKey: generateRecordingKey(q, "select", e)
  }, t)), [q, em]);
  let eg = useCallback(e => {
    void 0 === e ? ee(void 0) : ee(Math.max(e, 144));
  }, []);
  let e_ = jsx(_$$Q, {
    setMaxWidth: eg,
    options: eh(eN),
    formatOption: e => e && e.props.value ? ej.format(e.props.value) : "",
    getIcon: () => void 0
  });
  if (isUI3) {
    let e = selected && hasFocus;
    let t = selected && !hasFocus;
    let r = jsx(_$$d, {
      onClick: ec,
      recordingKey: generateRecordingKey(q, "toggleSettings"),
      "aria-expanded": !!Z,
      "aria-label": getI18nString("properties_panel.transform_modifiers.transform_modifier_settings"),
      children: jsx("span", {
        className: transformModifier.visible ? "" : eb,
        children: eA(transformModifier)
      })
    });
    let d = jsx(_$$B, {
      visible: transformModifier.visible,
      onChange: ed,
      recordingKey: generateRecordingKey(q, "visibleToggle"),
      selected: e,
      disabled: !!Y
    });
    let m = Y ? void 0 : jsx(_$$T, {
      selected: e,
      children: jsx(IconButton, {
        recordingKey: generateRecordingKey(q, "removeButton"),
        onClick: onRemoveTransformModifier,
        "aria-label": getI18nString("fullscreen.properties_panel.tooltip_remove"),
        htmlAttributes: {
          onMouseDown: et,
          "data-tooltip": getI18nString("fullscreen.properties_panel.tooltip_remove"),
          "data-tooltip-type": KindEnum.TEXT
        },
        children: jsx(_$$O, {})
      })
    });
    let h = m ? [d, m] : [d];
    let f = jsxs(Fragment, {
      children: [jsx(eF, {
        ariaLabel: getI18nString("fullscreen.properties_panel.transform_modifiers.transform_modifiers"),
        chevronClassName: ex,
        className: ev,
        dispatch,
        dropdownShown,
        dropdownWidth: J,
        formatter: ej,
        id,
        inputClassName: transformModifier.visible ? eI : eE,
        onChange: en,
        onMouseDown: et,
        property: transformModifier.type ?? "REPEAT",
        recordingKey: generateRecordingKey(q, "select"),
        children: eh(eN)
      }), e_]
    });
    return jsxs("div", {
      children: [getFeatureFlags().ce_tv_new_row_open_modal && jsx(_$$O2, {
        lastAddedItemIndexAtom: eO,
        index,
        callback: ec
      }), useLargePreviewRows ? jsx(eR, {
        ref: Q,
        dragging: isDragging,
        firstIconButton: d,
        hasFocus,
        onMouseDown,
        onMouseMove,
        onMouseUp,
        onPreviewClick: ec,
        onRowFocus: ep,
        previewActive: !!Z,
        recordingKey,
        secondIconButton: m,
        selected: !!selected,
        singletonRow,
        transformModifier
      }) : useGrid ? jsx(Gi, {
        cellHasCustomFocusRingTarget: !0,
        hasFocus: !0,
        input: f,
        leftIcon: r,
        ref: Q,
        selected: selected && !Z,
        singletonRow,
        children: h
      }) : jsx(Y9, {
        ref: Q,
        containerClassName: t ? "transform_modifiers_panel--rowContainerSecondarySelect--z67oO ui3_rows--rowContainerSecondarySelectDisabled--WFL3w" : void 0,
        dragging: isDragging,
        onMouseDown,
        onMouseMove,
        onMouseUp,
        recordingKey,
        selected: e,
        selectedSecondary: t,
        singletonRow,
        children: jsx(MF, {
          leftIcon: r,
          input: f,
          children: h
        })
      }), Z && jsx(er, {
        bigNudgeAmount,
        disabled: !!Y,
        dispatch,
        dropdownShown,
        initialX: Z.initialX || 0,
        initialY: Z.initialY || 0,
        onChange: ei,
        options: eh(eN),
        pickerId: $,
        recordingKey: generateRecordingKey(q, "settings"),
        smallNudgeAmount,
        transformModifier,
        transformModifierIndex: index
      })]
    });
  }
  return jsx("div", {
    children: jsxs(_$$e, {
      ref: Q,
      dragging: isDragging,
      onFocus: ep,
      onMouseDown,
      onMouseMove,
      onMouseUp,
      recordingKey,
      selected,
      selectedSecondary: selected && !hasFocus,
      singletonRow,
      children: [jsx(YW, {
        className: transformModifier.visible ? "transform_modifiers_panel--transformModifierIcon--84WYT" : "transform_modifiers_panel--transformModifierIconInvisible--THQlm transform_modifiers_panel--transformModifierIcon--84WYT",
        onMouseDown: ec,
        onMouseUp: et,
        recordingKey: generateRecordingKey(q, "toggleSettings"),
        selected: !!Z,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("properties_panel.transform_modifiers.transform_modifier_settings")
      }), jsxs(Fragment, {
        children: [jsx(eF, {
          ariaLabel: getI18nString("fullscreen.properties_panel.transform_modifiers.transform_modifiers"),
          chevronClassName: ex,
          className: ev,
          dispatch,
          dropdownShown,
          dropdownWidth: J,
          formatter: ej,
          id,
          inputClassName: transformModifier.visible ? eI : eE,
          onChange: en,
          onMouseDown: et,
          property: transformModifier.type ?? "REPEAT",
          recordingKey: generateRecordingKey(q, "select"),
          children: eh(eN)
        }), e_]
      }), jsxs($4, {
        children: [jsx(_$$B, {
          visible: transformModifier.visible,
          onChange: ed,
          recordingKey: generateRecordingKey(q, "visibleToggle")
        }), jsx(IconButton, {
          recordingKey: generateRecordingKey(q, "removeButton"),
          onClick: onRemoveTransformModifier,
          "aria-label": getI18nString("properties_panel.transform_modifiers.remove_transform_modifier"),
          htmlAttributes: {
            onMouseDown: et
          },
          children: jsx(_$$O, {})
        })]
      })]
    })
  });
}
export const H = $$eD0;