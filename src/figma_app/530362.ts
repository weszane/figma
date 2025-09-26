import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useRef, useLayoutEffect, useMemo, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { throwTypeError, assertNotNullish } from "../figma_app/465776";
import { deepEqual } from "../905/382883";
import { clamp } from "../figma_app/492908";
import { isNotNullish } from "../figma_app/95419";
import { IconButton } from "../905/443068";
import { A as _$$A } from "../905/24328";
import { U as _$$U } from "../905/708285";
import { InstanceType } from "../figma_app/338442";
import { Fullscreen, ComponentPropType, AppStateTsApi, VariableResolvedDataType, VariableDataType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { resolveVariableValue } from "../905/929949";
import { getFeatureFlags } from "../905/601108";
import { C as _$$C } from "../figma_app/974443";
import { X as _$$X } from "../905/606795";
import { KeyCodes, isCommandEvent } from "../905/63728";
import { generateRecordingKey } from "../figma_app/878298";
import { RecordableInput } from "../905/511649";
import { Point } from "../905/736624";
import { useModalConfig, PickerOptionType } from "../905/211621";
import { P as _$$P } from "../905/347284";
import { S as _$$S } from "../figma_app/552746";
import { getI18nString, renderI18nText } from "../905/303541";
import { showPickerThunk, hidePickerThunk } from "../figma_app/91703";
import { hideInstanceSwapPicker } from "../905/8732";
import { uP, Oe } from "../figma_app/933328";
import { fullscreenValue } from "../figma_app/455680";
import { clearSelection, addToSelection, renameNode } from "../figma_app/741237";
import { u as _$$u, BQ } from "../figma_app/852050";
import { useDropdownState } from "../905/848862";
import { useSceneGraphSelector } from "../figma_app/722362";
import { useCurrentFileKey } from "../figma_app/516028";
import { Xo } from "../figma_app/482495";
import { o3, nt } from "../905/226610";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { KindEnum } from "../905/129884";
import { conditionalWrapper } from "../905/579635";
import { FormattedInputWithWrapper } from "../figma_app/841644";
import { v as _$$v } from "../905/318279";
import { q as _$$q } from "../figma_app/905311";
import { fileLaunchHelper as _$$S2 } from "../905/459477";
import { InstanceSwapToggle } from "../905/1253";
import { u as _$$u2 } from "../905/419626";
import { l6, c$ } from "../905/794875";
import { ow, OC, NA } from "../figma_app/150804";
import { renameProperty, sanitizePropertyName, formatPropertyValues } from "../figma_app/264776";
import { dD, lt, Qu } from "../figma_app/941824";
import { Y9, oO } from "../figma_app/811257";
import { ControlledVariablePickerProvider, VariablePicker } from "../figma_app/260445";
import { y$ } from "../figma_app/152690";
import { eF } from "../figma_app/394327";
import { P as _$$P2 } from "../figma_app/120873";
import { oz } from "../figma_app/406976";
import { gJ } from "../905/923433";
import { DraggableModalManager } from "../905/748636";
import { isNotVariantPropType, DROPDOWN_HEIGHT, areSlotsEnabled, normalizeComponentPropValue, BOOLEAN_FORMATTER, isValidNumberString, stringToFloat, floatToString, getDefaultStateForStateGroup, VARIABLE_TYPE_CONFIG, computeBackingGUID } from "../figma_app/164212";
import { xP, Zu, Kn } from "../figma_app/65182";
import { u as _$$u3 } from "../figma_app/940920";
import { D as _$$D } from "../905/589275";
import { K8 } from "../figma_app/631970";
let ec = "edit_component_prop_picker--subheading--JbXut";
let eu = "edit_component_prop_picker--inputContainer--B8MrR";
let ep = "edit_component_prop_picker--fieldContainer--OMz1x";
let e_ = "edit_component_prop_picker--input--pTw-O edit_component_prop_picker--baseInput--xQ5tc raw_components--textInput--t9D8g raw_components--base--T7G0z raw_components--input--JB4Ix raw_components--singleRowHeight--dKM4t raw_components--border--SKh2u sf_pro--uiFontWithSFProFallback--m-p9V";
let eh = "edit_component_prop_picker--textArea--SQ8dT edit_component_prop_picker--baseInput--xQ5tc raw_components--textInput--t9D8g raw_components--base--T7G0z raw_components--input--JB4Ix raw_components--singleRowHeight--dKM4t raw_components--border--SKh2u sf_pro--uiFontWithSFProFallback--m-p9V";
let em = "edit_component_prop_picker--variantValueInput--i1oj6 edit_component_prop_picker--input--pTw-O edit_component_prop_picker--baseInput--xQ5tc raw_components--textInput--t9D8g raw_components--base--T7G0z raw_components--input--JB4Ix raw_components--singleRowHeight--dKM4t raw_components--border--SKh2u sf_pro--uiFontWithSFProFallback--m-p9V";
export let $$ef0 = "edit-component-prop-picker";
export function $$eE1({
  componentPropDef: e
}) {
  let t = Xo();
  let r = useSelector(e => ow(e) ?? []);
  let s = useSelector(e => OC(e) ?? []);
  let o = useSelector(e => e.instanceSwapPickerShown.isShown);
  let l = useDispatch();
  let [d, c] = useState(null);
  let u = useCallback(e => c(e.currentTarget.value), []);
  let {
    inputRef,
    inputProps: {
      onChange,
      onFocus,
      onMouseUp,
      onMouseLeave,
      onKeyUp
    }
  } = _$$X({
    onFocus: t => {
      c(e.name);
    },
    onChange: u,
    autoFocus: !0
  });
  let R = useCallback(() => {
    d && d !== e.name && (e.kind === InstanceType.TYPED ? permissionScopeHandler.user("edit-prop-def-name", () => Fullscreen.editComponentPropDefName(e.explicitDefID, d)) : permissionScopeHandler.user("edit-variant-prop-name", () => renameProperty(e.name, d, r, s)));
  }, [e, d, r, s]);
  let L = useCallback(() => {
    t && l(showPickerThunk({
      id: $$ef0,
      initialX: t.initialX,
      initialY: t.initialY,
      data: e.kind === InstanceType.TYPED ? {
        defID: e.explicitDefID
      } : {
        name: d
      }
    }));
  }, [t, l, e, d]);
  let P = useCallback(e => {
    R();
    c(null);
  }, [R]);
  let D = useCallback(t => {
    isNotVariantPropType(e) && e.description !== t && permissionScopeHandler.user("edit-prop-def-description", () => Fullscreen?.editComponentPropDefDescription(e.explicitDefID, t));
  }, [e]);
  let {
    preferredValues,
    handleSetPreferredValues,
    togglePreferredValues
  } = xP(e);
  let U = useCallback(() => {
    l(hidePickerThunk());
    l(hideInstanceSwapPicker());
  }, [l]);
  let B = new Point(t?.initialX, t?.initialY);
  let {
    modalWidth
  } = useModalConfig(PickerOptionType.INSTANCE_SWAP_PICKER);
  let V = useCallback(e => {
    e.stopPropagation();
  }, []);
  return (getFeatureFlags().ds_variable_props_number_def || e.type !== ComponentPropType.NUMBER) && e.type !== ComponentPropType.IMAGE && (getFeatureFlags().dse_slots || e.type !== ComponentPropType.SLOT) ? jsxs(DraggableModalManager, {
    title: getI18nString("design_systems.component_properties.edit_component_property", {
      propType: throwTypeError(e.type).toLocaleLowerCase()
    }),
    initialPosition: B,
    initialWidth: DROPDOWN_HEIGHT,
    headerSize: "small",
    onClose: U,
    onClick: o ? () => l(hideInstanceSwapPicker()) : void 0,
    recordingKey: generateRecordingKey("editComponentPropDefPicker", e.kind === InstanceType.VARIANT ? e.name : e.explicitDefID),
    children: [jsxs("div", {
      className: ep,
      children: [jsx("p", {
        className: ec,
        children: renderI18nText("design_systems.component_properties.name")
      }), jsx(RecordableInput, {
        className: e_,
        forwardedRef: inputRef,
        onBlur: P,
        onChange,
        onClick: () => l(hideInstanceSwapPicker()),
        onFocus,
        onKeyDown: e => {
          e.stopPropagation();
          e.keyCode !== KeyCodes.ENTER || e.shiftKey || (e.currentTarget.blur(), L());
          e.keyCode === KeyCodes.ESCAPE && (e.currentTarget.blur(), U());
          e.keyCode === KeyCodes.TAB && L();
        },
        onKeyUp,
        onMouseLeave,
        onMouseUp,
        recordingKey: "editComponentPropName",
        value: d
      })]
    }), isNotVariantPropType(e) && areSlotsEnabled(e.type) && jsxs("div", {
      className: "edit_component_prop_picker--descriptionContainer--tydPT",
      onMouseDown: V,
      onPointerDown: V,
      children: [jsx("p", {
        className: ec,
        children: renderI18nText("design_systems.component_properties.description")
      }), jsx(_$$u2, {
        description: e.description ?? "",
        onSave: D,
        placeholder: e.type === ComponentPropType.SLOT ? getI18nString("design_systems.component_properties.slot_create_modal.description_placeholder") : getI18nString("design_systems.component_properties.description_placeholder"),
        namespace: "edit-component-prop-description"
      })]
    }), jsx(eN, {
      componentPropDef: e
    }), isNotVariantPropType(e) && Zu(e.type) && jsx(_$$D, {
      addComponents: e => togglePreferredValues(e, Kn.ADD),
      entrypointForLogging: _$$S2.PreferredValuesPickerEntrypoint.EDIT_COMPONENT_PROP_PICKER,
      onSetComponents: handleSetPreferredValues,
      propDefDefaultValue: normalizeComponentPropValue(e.type, e.defaultValue),
      propDefType: e.type,
      recordingKey: "edit-component-prop-preferred-values-picker",
      removeComponents: e => togglePreferredValues(e, Kn.REMOVE),
      swapPickerId: "edit-component-prop-preferred-values-picker",
      swapPickerWidth: modalWidth,
      toggleComponent: e => togglePreferredValues([e]),
      values: preferredValues
    })]
  }) : null;
}
function ey({
  def: e
}) {
  let t = useSelector(e => ow(e));
  let r = useSelector(e => NA(e));
  let s = useSelector(e => OC(e));
  let [d, c] = useState([]);
  let [u, p] = useState(null);
  let [_, g] = useState(null);
  let f = useRef(null);
  let y = o3(nt.useGrid);
  useLayoutEffect(() => {
    null != f.current && (g(f.current), f.current = null);
  }, [f, e.values]);
  let I = useCallback(t => {
    let n = null !== _ ? e.values[_] : null;
    y && g(null);
    let i = r?.nodeId;
    i && t.length === e.values.length && (permissionScopeHandler.user("reorder-variant-prop-values", () => {
      for (let r = 0; r < t.length; r++) t[r] !== e.values[r] && Fullscreen.reorderStateGroupPropertyValue(i, e.name, t[r], r);
    }), y && (f.current = t.indexOf(n)));
  }, [_, e.values, e.name, y, r?.nodeId]);
  let S = useMemo(() => {
    let r = {};
    t?.forEach(t => {
      let n = t.stateInfo.propertyValues;
      if (!n) return;
      let i = n[e.name];
      i in r || (r[i] = []);
      r[i].push(t.symbol.node_id);
    });
    return r;
  }, [t, e]);
  let v = useCallback(e => {
    clearSelection();
    addToSelection(S[e] ?? []);
    AppStateTsApi.canvasViewState().temporarilyHoveredNodes.set([]);
  }, [S]);
  let x = useCallback((r, n) => {
    t && s && "" !== (n = sanitizePropertyName(n)) && (permissionScopeHandler.user("rename-variant-prop-value", () => {
      t.forEach(t => {
        let i = t.stateInfo.propertyValues;
        i && i[e.name] === r && renameNode(t.symbol.node_id, formatPropertyValues({
          ...i,
          [e.name]: n
        }, s));
      });
    }), fullscreenValue.commit(), g(null));
  }, [t, e, s]);
  let C = function ({
    currentValues: e,
    setRenamingIndex: t,
    setSelectedIndices: r
  }) {
    let [n, a] = useState(null);
    useEffect(() => {
      null !== n && deepEqual(e, n.values) && (a(null), t(n.renamingIndex), r([n.renamingIndex]));
    }, [e, n, t, r]);
    return a;
  }({
    currentValues: e.values,
    setRenamingIndex: g,
    setSelectedIndices: c
  });
  let w = useCallback(t => {
    if (isCommandEvent(t) && ["ArrowUp", "ArrowDown"].includes(t.key)) {
      let r = "ArrowUp" === t.key ? -1 : 1;
      if (null === _) return;
      let n = [...e.values];
      let i = clamp(0, _ + r, n.length - 1);
      !function (e, t, r) {
        let n = e[t];
        e[t] = e[r];
        e[r] = n;
      }(n, _, i);
      C({
        values: n,
        renamingIndex: i
      });
      I(n);
      g(null);
    }
  }, [e.values, _, I, C]);
  let O = useCallback((e, t) => {
    e.keyCode === KeyCodes.ENTER && x(t, e.currentTarget.value);
    w(e);
  }, [w, x]);
  let P = useRef(null);
  let [D, k] = useState(!1);
  let M = useCallback(() => k(!0), []);
  let F = useCallback(() => k(!1), []);
  _$$C(P.current?.getScrollContainer(), D);
  return jsxs(Fragment, {
    children: [jsx("p", {
      className: "edit_component_prop_picker--variantValuesSubheading--L0zoU edit_component_prop_picker--subheading--JbXut",
      children: renderI18nText("design_systems.component_properties.values")
    }), jsx(_$$P, {
      className: "edit_component_prop_picker--variantList--K6wCE",
      ref: P,
      children: jsx(dD.Provider, {
        value: {
          useGrid: y
        },
        children: jsx(_$$q, {
          listItems: e.values,
          selectedIndices: d,
          updateSelection: c,
          onChange: I,
          onDragStart: M,
          onDragEnd: F,
          scrollContainer: P.current,
          renderListItem: (t, r, i, a, s, o, l) => {
            let d = t in S ? S[t] : [];
            let m = d.length;
            let f = _ === r;
            function E() {
              p(r);
              AppStateTsApi.canvasViewState().temporarilyHoveredNodes.set(d);
            }
            function b() {
              p(null);
              AppStateTsApi.canvasViewState().temporarilyHoveredNodes.set([]);
            }
            return y ? jsx(lt, {
              cellHtmlAttributes: {
                onFocus: E
              },
              htmlAttributes: {
                onPointerEnter: E,
                onPointerLeave: b
              },
              shouldIconAppearOnHover: !0,
              selected: i,
              appendedClassName: "edit_component_prop_picker--ui3GridRow--YZMDO",
              singletonRow: 1 === e.values.length,
              recordingKey: generateRecordingKey("variantPropertyValueRow", t),
              input: jsx(eb, {
                value: t,
                index: r,
                isRenaming: f,
                onInputKeyDown: O,
                setRenamingIndex: g,
                setSelectedIndices: c,
                renameValueForAllStates: x
              }),
              icon: jsx(eT, {
                value: t,
                index: r,
                numVariantsWithPropertyValue: m,
                selectVariantsWithPropertyValue: v
              })
            }) : jsx(Y9, {
              dragging: a,
              grabberClassName: "edit_component_prop_picker--valueRowGrabber--Bl-te",
              onMouseDown: s,
              onMouseEnter: E,
              onMouseLeave: b,
              onMouseMove: o,
              onMouseUp: l,
              recordingKey: generateRecordingKey("variantPropertyValueRow", t),
              selected: i,
              singletonRow: 1 === e.values.length,
              children: jsx(oO, {
                input: jsx(eb, {
                  value: t,
                  index: r,
                  isRenaming: f,
                  onInputKeyDown: O,
                  setRenamingIndex: g,
                  setSelectedIndices: c,
                  renameValueForAllStates: x
                }),
                children: u === r && !a && jsx(eT, {
                  value: t,
                  index: r,
                  numVariantsWithPropertyValue: m,
                  selectVariantsWithPropertyValue: v
                })
              })
            });
          }
        })
      })
    })]
  });
}
function eb({
  value: e,
  index: t,
  isRenaming: r,
  onInputKeyDown: a,
  setRenamingIndex: s,
  setSelectedIndices: o,
  renameValueForAllStates: l
}) {
  let {
    useGrid
  } = useContext(dD);
  let c = Qu();
  return jsx("div", {
    className: "edit_component_prop_picker--variantValueInputWrapper---9s9m",
    children: r ? jsx(RecordableInput, {
      className: em,
      onKeyDown: t => {
        c(t);
        a(t, e);
      },
      onBlur: t => {
        l(e, t.currentTarget.value);
        useGrid && s(null);
      },
      recordingKey: generateRecordingKey("editVariantPropertyValue", t),
      defaultValue: e,
      onFocus: e => {
        useGrid && e.stopPropagation();
        e.target?.select();
      },
      autoFocus: !0
    }) : jsx(_$$S.recordableDiv, {
      autoFocus: !0,
      className: em,
      onMouseDown: e => e.stopPropagation(),
      onFocus: () => {
        s(t);
        o([t]);
      },
      recordingKey: generateRecordingKey("variantValueName", t),
      tabIndex: 0,
      children: e
    })
  });
}
function eT({
  value: e,
  numVariantsWithPropertyValue: t,
  selectVariantsWithPropertyValue: r,
  index: i
}) {
  let a = getI18nString("design_systems.component_properties.select_variants_with_property_value", {
    numVariants: t
  });
  return jsx(IconButton, {
    disabled: !t,
    onClick: () => r(e),
    "aria-label": a,
    recordingKey: generateRecordingKey("editComponentPropDefPicker", i, "targetButton"),
    htmlAttributes: {
      onMouseDown: e => e.stopPropagation(),
      "data-tooltip": a,
      "data-tooltip-type": KindEnum.TEXT
    },
    children: jsx(_$$A, {})
  });
}
function eI({
  componentPropDef: e,
  dropdownShown: t,
  shouldShowVariableBinding: r,
  boundVariable: s
}) {
  let o = useDispatch();
  let l = useCallback(t => {
    e.type === ComponentPropType.BOOL && t !== normalizeComponentPropValue(ComponentPropType.BOOL, e.defaultValue) && permissionScopeHandler.user("edit-prop-default-value", () => Fullscreen.editBoolComponentPropDefDefaultValue(e.explicitDefID, t));
  }, [e]);
  return jsx("div", {
    className: eu,
    children: r ? jsx(gJ, {
      variableValue: s ?? resolveVariableValue(VariableResolvedDataType.BOOLEAN, normalizeComponentPropValue(ComponentPropType.BOOL, e.defaultValue)),
      onChange: e => {
        l(e.value);
      },
      recordingKey: generateRecordingKey("editComponentPropDefaultValue", throwTypeError(e.type)),
      innerContainerClassName: "edit_component_prop_picker--booleanCellOverride--F9fS2"
    }) : jsxs(l6, {
      ariaLabel: getI18nString("design_systems.component_properties.default_value"),
      id: "edit-component-prop-default-value-select",
      property: normalizeComponentPropValue(ComponentPropType.BOOL, e.defaultValue),
      onChange: l,
      dispatch: o,
      formatter: BOOLEAN_FORMATTER,
      dropdownShown: t,
      inputClassName: e_,
      recordingKey: generateRecordingKey("editComponentPropDefaultValue", throwTypeError(e.type)),
      children: [jsx(c$, {
        value: !0
      }), jsx(c$, {
        value: !1
      })]
    })
  });
}
function eS({
  componentPropDef: e,
  shouldShowVariableBinding: t
}) {
  let [r, a] = useState(e.type === ComponentPropType.TEXT ? e.defaultValue : "");
  let s = useCallback(() => {
    e.type === ComponentPropType.TEXT && r && r !== e.defaultValue && permissionScopeHandler.user("edit-prop-default-value", () => {
      Fullscreen.editTextComponentPropDefDefaultValue(e.explicitDefID, r);
    });
  }, [e, r]);
  return jsx("div", {
    className: eu,
    children: jsx(conditionalWrapper, {
      condition: t,
      wrapper: e => jsx(FormattedInputWithWrapper, {
        noBorder: !0,
        recordingKey: generateRecordingKey("componentPropDefTextInput", "variableInputControl"),
        children: e
      }),
      children: jsx(_$$v, {
        className: eh,
        onChange: e => permissionScopeHandler.user("edit-prop-default-value", () => a(e.currentTarget.value)),
        onBlur: s,
        onKeyDown: e => {
          e.stopPropagation();
          e.keyCode !== KeyCodes.ENTER || e.shiftKey || e.currentTarget.blur();
        },
        value: r,
        onFocus: e => e.currentTarget?.select(),
        recordingKey: generateRecordingKey("editComponentPropDefaultValue", throwTypeError(e.type))
      })
    })
  });
}
function ev({
  componentPropDef: e,
  shouldShowVariableBinding: t
}) {
  let [r, a] = useState(e.type === ComponentPropType.NUMBER ? e.defaultValue : 0);
  let s = useCallback(e => {
    isValidNumberString(e) && a(stringToFloat(e));
  }, []);
  let o = useCallback(() => {
    e.type === ComponentPropType.NUMBER && void 0 !== r && r !== e.defaultValue && permissionScopeHandler.user("edit-prop-default-value", () => Fullscreen.editNumberComponentPropDefDefaultValue(e.explicitDefID, r));
  }, [e, r]);
  return jsx("div", {
    className: eu,
    children: jsx(conditionalWrapper, {
      condition: t,
      wrapper: e => jsx(FormattedInputWithWrapper, {
        noBorder: !0,
        recordingKey: generateRecordingKey("componentPropDefNumberInput", "variableInputControl"),
        children: e
      }),
      children: jsx(_$$v, {
        className: eh,
        onChange: e => permissionScopeHandler.user("edit-prop-default-value", () => s(e.currentTarget.value)),
        onBlur: o,
        onKeyDown: e => {
          e.stopPropagation();
          e.keyCode !== KeyCodes.ENTER || e.shiftKey || e.currentTarget.blur();
        },
        value: floatToString(r),
        onFocus: e => e.currentTarget?.select(),
        recordingKey: generateRecordingKey("editComponentPropDefaultValue", throwTypeError(e.type))
      })
    })
  });
}
function eA({
  componentPropDef: e,
  modalWidth: t,
  instanceSwapDefaultValue: r,
  openFileKey: s
}) {
  let o = useSceneGraphSelector();
  let l = useDispatch();
  let {
    preferredValues,
    preferredValuesFetchError,
    retryPreferredValuesFetch
  } = xP(e);
  let p = useMemo(() => preferredValuesFetchError ? jsx(_$$u3, {
    onRetry: retryPreferredValuesFetch,
    recordingKey: "editComponentPropDef"
  }) : void 0, [preferredValuesFetchError, retryPreferredValuesFetch]);
  return jsx("div", {
    className: eu,
    children: jsx(InstanceSwapToggle, {
      entrypointForLogging: _$$S2.InstancePickerEntrypoint.EDIT_COMPONENT_PROP_PICKER,
      instanceSwapNode: r,
      onSwapCallback: t => {
        l(uP({
          item: t,
          callback: r => {
            let n = t.type === PrimaryWorkflowEnum.STATE_GROUP ? getDefaultStateForStateGroup(t, r, s) : r;
            permissionScopeHandler.user("edit-prop-default-value", () => Fullscreen.editInstanceComponentPropDefDefaultValue(e.explicitDefID, n));
          }
        }));
      },
      pickerID: `edit-instance-swap-prop-picker-${e.explicitDefID}`,
      pickerWidth: t,
      preferredItems: preferredValues,
      preferredValuesErrorComponent: p,
      sceneGraph: o,
      shouldPerformSwapOnClick: !0,
      title: getI18nString("design_systems.component_properties.choose_default_instance_value")
    })
  });
}
function ex({
  value: e,
  onClear: t
}) {
  let r = e.value;
  let i = _$$u(r);
  let a = BQ(r ?? void 0);
  return i ? jsxs("div", {
    className: "edit_component_prop_picker--variableBoundInputContainer--BVQ2Q",
    children: [jsx("div", {
      className: K8,
      children: jsx(_$$P2, {
        value: i?.name,
        variableId: r,
        isStandalone: !0,
        thumbnailValue: a,
        isDeleted: eF(i)
      })
    }), jsx(IconButton, {
      onClick: () => t(a),
      htmlAttributes: {
        "data-tooltip": getI18nString("design_systems.component_properties.detach_property"),
        "data-tooltip-type": KindEnum.TEXT
      },
      recordingKey: generateRecordingKey("componentPropDef", "detachVariableButton"),
      "aria-label": getI18nString("design_systems.component_properties.detach_property"),
      children: jsx(_$$U, {
        className: "edit_component_prop_picker--detachButton--mHZfV"
      })
    })]
  }) : jsx(Fragment, {});
}
function eN({
  componentPropDef: e
}) {
  if (e.type === ComponentPropType.SLOT) return null;
  switch (e.kind) {
    case InstanceType.TYPED:
      return jsx(eC, {
        def: e
      });
    case InstanceType.VARIANT:
      return jsx(ey, {
        def: e
      });
    default:
      throwTypeError(e);
  }
}
function eC({
  def: e
}) {
  let t = useDispatch();
  let {
    variableType,
    requestedTypes,
    variableScope
  } = VARIABLE_TYPE_CONFIG[e.type] ?? {};
  let c = useMemo(() => e.type !== ComponentPropType.INSTANCE_SWAP && isNotNullish(variableType) && isNotNullish(requestedTypes), [e.type, requestedTypes, variableType]);
  let u = useCallback(async n => {
    if (void 0 === n) return;
    assertNotNullish(variableType);
    let i = await t(Oe(n));
    i && (permissionScopeHandler.user("component-prop-def", () => Fullscreen.setComponentPropDefVariableData(e.explicitDefID, y$(variableType, i))), oz("component_prop_def", {
      type: VariableDataType.ALIAS,
      resolvedType: n.resolvedType,
      value: n.node_id
    }));
  }, [t, e.explicitDefID, variableType]);
  return jsxs("div", {
    className: ep,
    children: [jsx("p", {
      className: ec,
      children: renderI18nText("design_systems.component_properties.default_value")
    }), jsx(conditionalWrapper, {
      condition: c,
      wrapper: e => (assertNotNullish(variableType), jsxs(ControlledVariablePickerProvider, {
        boundVariableId: void 0,
        resolvedType: variableType,
        requestedTypes,
        onVariableSelected: u,
        children: [jsx(VariablePicker, {
          variableScope
        }), e]
      })),
      children: jsx(ew, {
        componentPropDef: e,
        shouldShowVariableBinding: c
      })
    })]
  });
}
function ew({
  componentPropDef: e,
  shouldShowVariableBinding: t
}) {
  let {
    modalWidth
  } = useModalConfig(PickerOptionType.INSTANCE_SWAP_PICKER);
  let o = useCurrentFileKey();
  let l = useDropdownState();
  let d = useSelector(t => e?.type === ComponentPropType.INSTANCE_SWAP ? computeBackingGUID([e.defaultValue], t.mirror.sceneGraph) : null);
  let c = useMemo(() => e.type === ComponentPropType.BOOL || e.type === ComponentPropType.NUMBER || e.type === ComponentPropType.TEXT, [e.type]);
  let u = useMemo(() => c && e.varValue.type === VariableDataType.ALIAS, [c, e]);
  let p = useMemo(() => u ? e.varValue : void 0, [u, e]);
  if (u && t) return jsx(ex, {
    value: e.varValue,
    onClear: t => {
      permissionScopeHandler.user("component-prop-def", () => Fullscreen.unbindComponentPropDef(e.explicitDefID, t));
    }
  });
  switch (e.type) {
    case ComponentPropType.BOOL:
      return jsx(eI, {
        componentPropDef: e,
        dropdownShown: l,
        shouldShowVariableBinding: t,
        boundVariable: p
      });
    case ComponentPropType.TEXT:
      return jsx(eS, {
        componentPropDef: e,
        shouldShowVariableBinding: t
      });
    case ComponentPropType.NUMBER:
      return jsx(ev, {
        componentPropDef: e,
        shouldShowVariableBinding: t
      });
    case ComponentPropType.INSTANCE_SWAP:
      return jsx(eA, {
        componentPropDef: e,
        modalWidth,
        instanceSwapDefaultValue: d,
        openFileKey: o
      });
    case ComponentPropType.IMAGE:
    case ComponentPropType.SLOT:
      return null;
    default:
      throwTypeError(e.type);
  }
}
export const aR = $$ef0;
export const pf = $$eE1;