import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useState, useRef, useEffect, useCallback, useContext } from "react";
import { VariableDataType, VariablesBindings, AppStateTsApi, ItemType, Fullscreen, ComponentPropType, NodePropertyCategory, VariableResolvedDataType, SceneIdentifier, ApprovalStatus } from "../figma_app/763686";
import { q as _$$q } from "../figma_app/905311";
import { useDispatch, useSelector } from "react-redux";
import { flatten } from "../figma_app/656233";
import { assertNotNullish } from "../figma_app/465776";
import { lQ } from "../905/934246";
import { isNotNullish } from "../figma_app/95419";
import { ServiceCategories } from "../905/165054";
import { IconButton } from "../905/443068";
import { d as _$$d } from "../905/49800";
import { HiddenLabel } from "../905/270045";
import { A as _$$A } from "../905/920165";
import { c$, bL, l9, mc } from "../905/493196";
import { ButtonPrimitive } from "../905/632989";
import { bL as _$$bL } from "../905/911410";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { K as _$$K2 } from "../figma_app/291291";
import { yG } from "../905/859698";
import { SlotSymbolType, ControlType } from "../figma_app/338442";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { resolveVariableValue } from "../905/929949";
import { getFeatureFlags } from "../905/601108";
import C from "classnames";
import { useLatestRef } from "../figma_app/922077";
import { X as _$$X } from "../905/606795";
import { KeyCodes } from "../905/63728";
import { generateRecordingKey } from "../figma_app/878298";
import { reportError } from "../905/11";
import { Y as _$$Y } from "../905/506207";
import { TQ, Zl } from "../905/211621";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { setSelectedTypedPropDefId } from "../figma_app/389091";
import { vq } from "../905/8732";
import { Oe, uP } from "../figma_app/933328";
import { KD } from "../figma_app/975811";
import { isSitesFileType } from "../figma_app/976749";
import { A as _$$A2 } from "../905/639174";
import { setHoveredComponentPropDef } from "../figma_app/741237";
import { isValidValue, isInvalidValue } from "../905/216495";
import { u as _$$u, BQ } from "../figma_app/852050";
import { J as _$$J } from "../905/95677";
import { selectOpenFileKey } from "../figma_app/516028";
import { getObservableValue } from "../figma_app/84367";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { qo } from "../905/959568";
import { conditionalWrapper } from "../905/579635";
import { ScrubbableInput } from "../figma_app/178475";
import { v as _$$v } from "../905/318279";
import { MB } from "../figma_app/525558";
import { e as _$$e3 } from "../figma_app/522702";
import { J as _$$J2 } from "../905/225412";
import { Y as _$$Y2 } from "../905/513028";
import { K as _$$K3 } from "../figma_app/622160";
import { Bc } from "../figma_app/200284";
import { v as _$$v2 } from "../905/501497";
import { h_ } from "../figma_app/151083";
import { x as _$$x } from "../905/1253";
import { P as _$$P } from "../905/201667";
import { g as _$$g } from "../figma_app/594353";
import { Hm } from "../figma_app/47085";
import { ControlledVariablePickerProvider, VariablePicker } from "../figma_app/260445";
import { FormattedInputContext } from "../905/427409";
import { Px, y$ } from "../figma_app/152690";
import { eF as _$$eF } from "../figma_app/394327";
import { P as _$$P2 } from "../figma_app/120873";
import { oz } from "../figma_app/406976";
import { U as _$$U } from "../905/708285";
import { selectWithShallowEqual } from "../905/103090";
import { useSelectionPropertyValue } from "../905/275640";
import { aA } from "../figma_app/632975";
import { f as _$$f } from "../figma_app/884735";
import { selectContainingInstance } from "../figma_app/505098";
import { K as _$$K4 } from "../905/636142";
import { c6, zJ, qU, AN, BY, Mj, FG, ID, c1, u8, bq, CS, PQ, ty, aF, n4, K8, Ro, mD, x1, hF, Zj, nt, R4, ru, Of, l1, ZS, R3, mQ, km, dW } from "../figma_app/631970";
import { VARIABLE_TYPE_CONFIG, PanelWidth, createNodeFieldAlias, isValidNumberString, stringToFloat, floatToString, getDefaultStateForStateGroup } from "../figma_app/164212";
import { AffineTransform } from "../905/583953";
import { deepEqual } from "../905/382883";
import { fullscreenValue } from "../figma_app/455680";
import { xP } from "../figma_app/65182";
import { u as _$$u2 } from "../figma_app/940920";
var w = C;
function eO({
  value: e,
  hasBinding: t,
  variableType: r,
  requestedTypes: s,
  variableScope: o,
  onVariableSelected: l,
  onComponentPropSelected: c,
  onClearBinding: u,
  recordingKey: p
}) {
  let h = useSelectionPropertyValue("isInstanceSublayerSelected");
  let m = selectWithShallowEqual(selectContainingInstance);
  let g = e.type === VariableDataType.ALIAS ? e.value : void 0;
  let f = e.type === VariableDataType.NODE_FIELD_ALIAS ? aA(e.value.stablePathToNode, e.value.indexOrKey) : void 0;
  let E = _$$u(g);
  let y = Px();
  let b = useMemo(() => VariablesBindings.getVariableSetKeyForPublish(E?.variableSetId ?? "") ?? "", [E?.variableSetId]);
  let T = b in y ? y[yG(b)] : void 0;
  let S = useMemo(() => T ? {
    [yG(b)]: T
  } : void 0, [T, b]);
  let v = BQ(g ?? void 0, S) ?? f?.varValue;
  return t ? jsx("span", {
    className: c6,
    children: f && h && !E ? jsx(_$$f, {
      containingInstanceGUID: m,
      propDefId: f?.explicitDefId
    }) : jsx(IconButton, {
      onClick: () => u(v),
      recordingKey: generateRecordingKey(p, "detachButton"),
      "aria-label": getI18nString("design_systems.component_properties.detach_property"),
      children: jsx(_$$U, {})
    })
  }) : (assertNotNullish(r), jsxs(ControlledVariablePickerProvider, {
    boundVariableId: void 0,
    resolvedType: r,
    requestedTypes: s,
    onComponentPropSelected: c,
    onVariableSelected: l,
    children: [jsx(VariablePicker, {
      onPickerClose: () => {
        setHoveredComponentPropDef({
          nodeIDs: [],
          defID: ""
        });
      },
      variableScope: o
    }), jsx(_$$K4, {
      recordingKey: generateRecordingKey(p, "assignAssignmentProp"),
      tooltip: getI18nString("proto.apply_assignment_property")
    })]
  }));
}
function eD(e) {
  let t = ek(e, "image");
  let r = ek(e, "animatedImage");
  return {
    type: "IMAGE",
    visible: !0,
    opacity: 1,
    blendMode: "NORMAL",
    imageScaleMode: "FIT",
    image: {
      hash: t,
      name: ""
    },
    animatedImage: r.every(e => 0 === e) ? void 0 : {
      hash: r,
      name: ""
    },
    animationFrame: isValidValue(e) ? e.animationFrame : void 0,
    transform: AffineTransform.identity().toFigMatrix(),
    scale: 1,
    rotation: 0,
    paintFilter: {}
  };
}
function ek(e, t) {
  if (isInvalidValue(e)) return new Uint8Array();
  let r = e[t];
  if (!r) return new Uint8Array();
  let n = function (e) {
    let t = new Uint8Array(20);
    for (let r = 0; r < 20; r++) t[r] = parseInt(e.slice(2 * r, 2 * r + 2), 16);
    return t;
  }(r);
  return n.every(e => 0 === e) ? new Uint8Array() : n;
}
window.setTimeout.bind(window);
window.clearTimeout.bind(window);
window.setInterval.bind(window);
window.clearInterval.bind(window);
window.requestAnimationFrame.bind(window);
window.cancelAnimationFrame.bind(window);
window.performance;
window.scheduler;
new class {
  constructor() {
    this.calls = [];
  }
  async resetAsync(e) {
    e?.skipFlush !== !0 && (await this.flushBufferAsync());
    this.calls = [];
  }
  async flushBufferAsync() {}
  addCall(e) {
    this.calls.push(e);
  }
  calledWith(e, t) {
    return void 0 !== this.findCall(e, t);
  }
  findCall(e, t) {
    return t ? this.calls.find(r => r.event === e && Object.entries(t).every(([e, t]) => deepEqual(r.data.properties[e], t))) : this.calls.find(t => t.event === e);
  }
  findCalls(e, t) {
    return t ? this.calls.filter(r => r.event === e && Object.entries(t).every(([e, t]) => deepEqual(r.data.properties[e], t))) : this.calls.filter(t => t.event === e);
  }
}();
window.fetch;
function eU(e) {
  let {
    index,
    guids,
    typedPropDef,
    value,
    containerWidth,
    forBubbledProps,
    hideIcon,
    hideBindingButton,
    parameterConfig,
    submitBehaviorAssignment,
    onChange,
    clearBehaviorVariableBinding,
    minHack,
    behaviorAssignmentInfo
  } = e;
  let C = getObservableValue(AppStateTsApi?.propertiesPanelState().shownPropertiesPanels, void 0);
  let O = C?.[ItemType.INSTANCE_ITEM] ?? !1;
  let R = useDispatch();
  let L = useSelector(e => e.selectedComponentPropDefId);
  let [D, M] = useState(!1);
  let F = useRef(null);
  let B = useRef(null);
  useEffect(() => {
    L === typedPropDef.explicitDefID && O && (R(setSelectedTypedPropDefId({
      propDefId: null
    })), M(!0), F.current && clearTimeout(F.current), F.current = setTimeout(() => {
      M(!1);
    }, 1e3));
  }, [R, L, typedPropDef, O]);
  let {
    variableType,
    requestedTypes,
    variableScope
  } = VARIABLE_TYPE_CONFIG[typedPropDef.type] || {
    variableType: void 0,
    requestedTypes: void 0,
    variableScope: void 0
  };
  let Y = useMemo(() => flatten(guids.map(e => Fullscreen?.getInstanceSublayersControlledByDirectPropAssignment(e, typedPropDef.explicitDefID, SlotSymbolType.OVERRIDDEN_SYMBOL_ID).map(e => getSingletonSceneGraph().guidFromDeveloperFriendlyId(e))).filter(e => void 0 !== e)), [guids, typedPropDef.explicitDefID]);
  let $ = !!getFeatureFlags().sts_code && !!parameterConfig;
  let X = !hideBindingButton && !!(typedPropDef.type !== ComponentPropType.INSTANCE_SWAP && void 0 !== variableType && void 0 !== requestedTypes);
  let J = value && "object" == typeof value && "type" in value && value.type === VariableDataType.ALIAS;
  let [Z, ee, er] = _$$e3(!1);
  let {
    isDragHover,
    onDragEnter,
    onDragLeave,
    onDropImage
  } = function ({
    typedPropDef: e,
    instanceGuids: t,
    codeComponentId: r
  }) {
    let [n, s, o] = _$$e3(!1);
    return useMemo(() => getFeatureFlags().ds_image_props_sites && e.type === ComponentPropType.IMAGE ? {
      isDragHover: n,
      onDropImage: n => {
        let i = fullscreenValue.fileArrayToString;
        if (i) {
          let s = i(Array.from(n.files));
          Fullscreen?.dropImageOnPropThumbnail(s, e.explicitDefID, t, NodePropertyCategory.COMPONENT_PROP_ASSIGNMENT, r);
        }
        o();
      },
      onDragEnter: s,
      onDragLeave: o
    } : {
      isDragHover: !1
    }, [e, t, n, s, o, r]);
  }({
    typedPropDef,
    instanceGuids: behaviorAssignmentInfo?.guids ?? guids,
    codeComponentId: behaviorAssignmentInfo?.codeComponentId ?? null
  });
  if (void 0 === value) return jsx(Fragment, {});
  let el = B.current;
  let ed = !!el && el.offsetWidth < el.scrollWidth;
  let ec = parameterConfig?.label?.value ?? typedPropDef.name;
  let ep = jsx("div", {
    className: w()(zJ, {
      [qU]: containerWidth === PanelWidth.RESIZABLE_SIDEBAR,
      [AN]: typedPropDef.type === ComponentPropType.TEXT
    }),
    children: jsx("div", {
      ref: B,
      className: BY,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": ed ? ec : null,
      "data-testid": `component-prop-row-label-${typedPropDef.name}`,
      children: ec
    })
  });
  let e_ = jsx(conditionalWrapper, {
    condition: X,
    wrapper: e => (assertNotNullish(variableType), jsxs(ControlledVariablePickerProvider, {
      boundVariableId: void 0,
      resolvedType: variableType,
      requestedTypes,
      onComponentPropSelected: e => {
        let t = createNodeFieldAlias(e);
        permissionScopeHandler.user("component-prop-assignment", () => Fullscreen?.setComponentPropAssignmentVariableData(guids, typedPropDef.explicitDefID, t, forBubbledProps));
      },
      onVariableSelected: async e => {
        if (void 0 === e) return;
        let t = await R(Oe(e));
        if (!t) return;
        let n = y$(variableType, t);
        submitBehaviorAssignment ? submitBehaviorAssignment(typedPropDef.explicitDefID, n) : permissionScopeHandler.user("component-prop-assignment", () => Fullscreen?.setComponentPropAssignmentVariableData(guids, typedPropDef.explicitDefID, n, forBubbledProps));
        onChange?.(guids, typedPropDef.explicitDefID, n, forBubbledProps);
        oz("COMPONENT_PROP_DEF", {
          type: VariableDataType.ALIAS,
          resolvedType: e.resolvedType,
          value: t
        });
        setHoveredComponentPropDef({
          nodeIDs: [],
          defID: ""
        });
      },
      children: [jsx(VariablePicker, {
        variableScope
      }), e]
    })),
    children: (() => {
      if (J && X) return jsx(eH, {
        ...e
      });
      let t = e.value;
      if (typedPropDef.type === ComponentPropType.BOOL) return jsx(eV, {
        ...e,
        value: t
      });
      if (typedPropDef.type === ComponentPropType.TEXT) return $ && parameterConfig.control === ControlType.SELECT && parameterConfig ? jsx(eX, {
        ...e,
        value: t,
        selectConfig: parameterConfig.selectConfig
      }) : jsx(eK, {
        ...e,
        value: t
      });
      if (typedPropDef.type === ComponentPropType.NUMBER) {
        if ($) {
          if (parameterConfig.control === ControlType.SLIDER && parameterConfig.sliderConfig && null != parameterConfig.sliderConfig.min && null != parameterConfig.sliderConfig.max && null != parameterConfig.sliderConfig.step) return jsx(eW, {
            ...e,
            value: t,
            min: parameterConfig.sliderConfig.min,
            max: parameterConfig.sliderConfig.max,
            step: parameterConfig.sliderConfig.step
          });
          if (parameterConfig.control === ControlType.INPUT) return jsx(e$, {
            ...e,
            value: t,
            unit: parameterConfig.inputConfig.unit?.value,
            min: parameterConfig.inputConfig.min ? parameterConfig.inputConfig.min.value : minHack,
            max: parameterConfig.inputConfig.max?.value
          });
          if (parameterConfig.control === ControlType.SELECT && parameterConfig.selectConfig.options.length > 0) return jsx(eX, {
            ...e,
            value: t,
            selectConfig: parameterConfig.selectConfig
          });
        }
        return jsx(ez, {
          ...e,
          value: t
        });
      }
      return typedPropDef.type === ComponentPropType.INSTANCE_SWAP ? jsx(eq, {
        ...e,
        value: t
      }) : typedPropDef.type === ComponentPropType.IMAGE ? jsx(eJ, {
        ...e,
        value: t,
        isDragHover,
        isPickerOpen: Z,
        onPickerOpen: ee,
        onPickerClose: er,
        onDropImage: onDropImage ?? lQ
      }) : jsx(Fragment, {});
    })()
  });
  if (typedPropDef.type === ComponentPropType.NUMBER && !getFeatureFlags().ds_variable_props_number_asgmnt) return jsx(Fragment, {});
  let ef = () => {
    permissionScopeHandler.user("component-prop-assignment", () => {
      Fullscreen?.removePropImage(typedPropDef.explicitDefID, behaviorAssignmentInfo?.guids ?? guids, behaviorAssignmentInfo?.codeComponentId ?? null);
    });
  };
  let ey = typedPropDef.type === ComponentPropType.IMAGE && getFeatureFlags().ds_image_props_sites;
  let eb = ey && (isInvalidValue(e.value) || (e.value?.image ?? "") !== "");
  function eI() {
    return hideIcon ? jsx(_$$g, {
      appendedClassName: Mj,
      onMouseMove: () => setHoveredComponentPropDef({
        nodeIDs: guids,
        defID: typedPropDef.explicitDefID
      }),
      onMouseLeave: () => setHoveredComponentPropDef({
        nodeIDs: [],
        defID: ""
      }),
      leftLabel: null,
      leftInput: ep,
      rightLabel: null,
      rightInput: e_
    }) : jsx(Hm, {
      recordingKey: `componentPropertyRow.${index}`,
      appendedClassName: w()(Mj, {
        [FG]: X,
        [ID]: Z && getFeatureFlags().ds_image_props_sites
      }),
      onMouseMove: () => setHoveredComponentPropDef({
        nodeIDs: guids,
        defID: typedPropDef.explicitDefID
      }),
      onMouseLeave: () => setHoveredComponentPropDef({
        nodeIDs: [],
        defID: ""
      }),
      leftLabel: null,
      leftInput: ep,
      rightLabel: null,
      rightInput: e_,
      icon: (ey && eb ? jsx(IconButton, {
        onClick: e => {
          e.stopPropagation();
          ef();
        },
        variant: "ghost",
        "aria-label": getI18nString("fullscreen.properties_panel.image_settings.remove_image"),
        recordingKey: generateRecordingKey("componentPropAssignmentRemoveImage", guids.join("-"), typedPropDef.explicitDefID),
        children: jsx(_$$K2, {})
      }) : null) ?? (typedPropDef.type !== ComponentPropType.INSTANCE_SWAP ? null : jsx(h_, {
        instanceAndSublayerGUIDs: Y,
        showAllInstanceOptions: !1
      })) ?? (hideBindingButton || void 0 === variableType || void 0 === requestedTypes ? null : jsx(eO, {
        value,
        hasBinding: J,
        variableType,
        requestedTypes,
        variableScope,
        onComponentPropSelected: e => {
          let t = createNodeFieldAlias(e);
          permissionScopeHandler.user("component-prop-assignment", () => Fullscreen?.setComponentPropAssignmentVariableData(guids, typedPropDef.explicitDefID, t, forBubbledProps));
        },
        onVariableSelected: async e => {
          if (assertNotNullish(variableType), void 0 === e) return;
          let t = await R(Oe(e));
          if (!t) return;
          let n = y$(variableType, t);
          submitBehaviorAssignment ? submitBehaviorAssignment(typedPropDef.explicitDefID, n) : permissionScopeHandler.user("component-prop-assignment", () => Fullscreen?.setComponentPropAssignmentVariableData(guids, typedPropDef.explicitDefID, y$(variableType, t), forBubbledProps));
          onChange?.(guids, typedPropDef.explicitDefID, n, forBubbledProps);
          oz("COMPONENT_PROP_ASSIGNMENT", {
            type: VariableDataType.ALIAS,
            resolvedType: e.resolvedType,
            value: t
          });
          setHoveredComponentPropDef({
            nodeIDs: [],
            defID: ""
          });
        },
        onClearBinding: e => {
          clearBehaviorVariableBinding ? clearBehaviorVariableBinding(typedPropDef.explicitDefID, e) : permissionScopeHandler.user("component-prop-assignment", () => {
            Fullscreen?.unbindComponentPropAssignment(guids, typedPropDef.explicitDefID, e, forBubbledProps);
          });
        },
        recordingKey: "typedComponentPropAssignmentRow"
      }))
    });
  }
  return getFeatureFlags().ds_image_props_sites ? jsx(_$$Y, {
    className: w()({
      [c1]: isDragHover
    }),
    isDragTarget: onDropImage ? eZ : eQ,
    onTargetDragEnter: onDragEnter ?? lQ,
    onTargetDragLeave: onDragLeave ?? lQ,
    onTargetDrop: onDropImage ?? lQ,
    recordingKey: generateRecordingKey(`componentPropertyRow.${index}`, "dropTarget"),
    children: eI()
  }) : eI();
}
function eB(e) {
  switch (e) {
    case PanelWidth.REGULAR:
    case void 0:
      return u8;
    case PanelWidth.WIDE:
      return bq;
    case PanelWidth.UNBOUNDED:
      return CS;
    case PanelWidth.RESIZABLE_SIDEBAR:
      return PQ;
  }
}
function eG(e) {
  switch (e) {
    case PanelWidth.REGULAR:
    case void 0:
      return ty;
    case PanelWidth.WIDE:
      return aF;
    case PanelWidth.UNBOUNDED:
      return n4;
  }
}
function eV({
  value: e,
  viewOnly: t,
  guids: r,
  typedPropDef: s,
  containerWidth: l,
  forBubbledProps: d,
  submitBehaviorAssignment: c,
  onChange: u
}) {
  let p = useDispatch();
  let _ = useSelector(e => e.instanceSwapPickerShown);
  let g = useCallback(e => {
    let t = resolveVariableValue(VariableResolvedDataType.BOOLEAN, e);
    c ? c(s.explicitDefID, t) : permissionScopeHandler.user("toggle-bool-prop-assignment", () => {
      Fullscreen?.setComponentPropAssignmentVariableData(r, s.explicitDefID, t, d);
    });
    u?.(r, s.explicitDefID, t, d);
    _?.isShown && p(vq());
  }, [c, _?.isShown, s.explicitDefID, r, d, p, u]);
  return jsx("div", {
    className: eB(l),
    children: jsx("div", {
      className: eG(l),
      children: jsx(_$$d, {
        checked: e,
        label: jsx(HiddenLabel, {
          children: s.name
        }),
        onChange: g,
        recordingKey: generateRecordingKey("componentPropAssignmentToggle", r.join("-"), s.explicitDefID),
        disabled: t
      })
    })
  });
}
function eH({
  value: e
}) {
  let t = isInvalidValue(e);
  let r = e.value;
  let s = _$$u(r);
  let o = Px();
  let l = useContext(FormattedInputContext);
  let d = useMemo(() => VariablesBindings?.getVariableSetKeyForPublish(s?.variableSetId ?? "") ?? "", [s?.variableSetId]);
  let c = d in o ? o[yG(d)] : void 0;
  let u = useMemo(() => c ? {
    [yG(d)]: c
  } : void 0, [c, d]);
  let p = BQ(r ?? void 0, u);
  let _ = useRef(null);
  return s ? jsx("div", {
    role: "button",
    tabIndex: 0,
    ref: _,
    onClick: () => {
      _.current && l?.showBindingUI(_.current);
    },
    className: K8,
    children: jsx(_$$P2, {
      value: t ? getI18nString("design_systems.component_properties.mixed") : s?.name,
      variableId: r && !t ? r : void 0,
      isStandalone: !0,
      thumbnailValue: "MIXED" !== p ? p : void 0,
      isDeleted: _$$eF(s),
      classNameOverride: cssBuilderInstance.wFull.$,
      variablePillContainerClassName: Ro,
      fullWidth: !0
    })
  }) : jsx(Fragment, {});
}
function ez({
  value: e,
  typedPropDef: t,
  guids: r,
  forBubbledProps: s,
  containerWidth: o,
  viewOnly: l,
  index: d,
  submitBehaviorAssignment: c,
  onChange: p
}) {
  let {
    inputRef,
    inputProps: {
      onChange,
      onFocus,
      onMouseLeave,
      onMouseUp,
      onKeyUp
    }
  } = _$$X({
    onFocus: () => {
      isInvalidValue(e) ? b("") : b(S);
    },
    onChange: e => b(e.currentTarget.value)
  });
  let [y, b] = useState(null);
  let T = isInvalidValue(e) ? 0 : Number(e);
  let I = useMemo(() => {
    let t = !y || !isValidNumberString(y);
    return isInvalidValue(e) || t ? T : stringToFloat(y);
  }, [y, e, T]);
  let S = isInvalidValue(e) ? getI18nString("design_systems.component_properties.mixed") : floatToString(T);
  let A = () => {
    if (isNotNullish(y)) {
      let e = resolveVariableValue(VariableResolvedDataType.FLOAT, I);
      c ? c(t.explicitDefID, e) : permissionScopeHandler.user("set-number-prop-assignment", () => {
        Fullscreen?.setComponentPropAssignmentVariableData(r, t.explicitDefID, e, s);
      });
      p?.(r, t.explicitDefID, e, s);
    }
    inputRef.current && (inputRef.current.scrollTop = 0, inputRef.current.blur());
    b(null);
  };
  return jsx("div", {
    className: eB(o),
    children: jsx("div", {
      className: eG(o),
      children: jsx(_$$v, {
        ref: e => {
          e?.textarea && (inputRef.current = e.textarea);
        },
        className: w()({
          [mD]: l,
          [x1]: "" === S && !l,
          [hF]: !l && "" !== S
        }),
        disableInput: l,
        onBlur: A,
        onChange,
        onFocus,
        onKeyDown: e => {
          e.keyCode !== KeyCodes.ENTER || e.shiftKey || (e.preventDefault(), A());
        },
        onKeyUp,
        onMouseLeave,
        onMouseUp,
        placeholder: isInvalidValue(e) ? S : void 0,
        recordingKey: generateRecordingKey("componentPropAssignmentNumberInput", r.join("-"), d),
        value: y
      })
    })
  });
}
function eW({
  value: e,
  typedPropDef: t,
  guids: r,
  forBubbledProps: s,
  containerWidth: o,
  viewOnly: l,
  index: d,
  min: c,
  max: u,
  step: p,
  submitBehaviorAssignment: _,
  onChange: h
}) {
  let m = isInvalidValue(e) ? 0 : Number(e);
  let [f, E] = useState(null);
  let y = {
    min: c.value,
    max: u.value,
    step: p.value
  };
  let b = e => {
    let n = resolveVariableValue(VariableResolvedDataType.FLOAT, e);
    _ ? _(t.explicitDefID, n) : permissionScopeHandler.user("set-number-prop-assignment", () => Fullscreen?.setComponentPropAssignmentVariableData(r, t.explicitDefID, n, s));
    h?.(r, t.explicitDefID, n, s);
    E(null);
  };
  return jsx("div", {
    className: eB(o),
    children: jsx("div", {
      className: w()(eG(o), {
        [mD]: l
      }),
      children: jsx(_$$A, {
        "aria-label": t.parameterConfig?.label?.value ?? t.name,
        bigStep: y.step,
        disabled: l,
        max: y.max,
        min: y.min,
        onChange: (e, t) => {
          t.commit ? b(e) : E(e);
        },
        rangeAnchor: 0,
        recordingKey: generateRecordingKey("componentPropAssignmentNumberSlider", r.join("-"), d),
        step: y.step,
        value: f ?? m
      })
    })
  });
}
function eK({
  value: e,
  typedPropDef: t,
  guids: r,
  forBubbledProps: s,
  containerWidth: o,
  viewOnly: l,
  index: d,
  submitBehaviorAssignment: c,
  onChange: p
}) {
  let {
    inputRef,
    inputProps: {
      onChange,
      onFocus,
      onMouseLeave,
      onMouseUp,
      onKeyUp
    }
  } = _$$X({
    onFocus: () => {
      isInvalidValue(e) ? b("") : b(T);
    },
    onChange: e => b(e.currentTarget.value)
  });
  let [y, b] = useState(null);
  let T = t.type === ComponentPropType.TEXT ? isInvalidValue(e) ? getI18nString("design_systems.component_properties.mixed") : e : null;
  return jsx("div", {
    className: eB(o),
    children: jsx("div", {
      className: eG(o),
      children: jsx(_$$v, {
        ref: e => {
          e?.textarea && (inputRef.current = e.textarea);
        },
        className: w()({
          [mD]: l,
          [x1]: "" === T && !l,
          [hF]: !l && "" !== T
        }),
        disableInput: l,
        onBlur: () => {
          if (isNotNullish(y)) {
            let e = resolveVariableValue(VariableResolvedDataType.TEXT_DATA, {
              characters: y
            });
            c ? c(t.explicitDefID, e) : permissionScopeHandler.user("set-text-prop-assignment", () => {
              Fullscreen?.setComponentPropAssignmentVariableData(r, t.explicitDefID, e, s);
            });
            p?.(r, t.explicitDefID, e, s);
          }
          inputRef.current && (inputRef.current.scrollTop = 0, inputRef.current.blur());
          b(null);
        },
        onChange,
        onFocus,
        onKeyDown: e => {
          e.keyCode === KeyCodes.ENTER && !e.shiftKey && (e.preventDefault(), inputRef.current && (inputRef.current.scrollTop = 0, inputRef.current.blur()));
        },
        onKeyUp,
        onMouseLeave,
        onMouseUp,
        placeholder: isInvalidValue(e) ? T : null,
        recordingKey: generateRecordingKey("componentPropAssignmentTextInput", r.join("-"), d),
        value: y
      })
    })
  });
}
class eY extends KD {
  constructor(e) {
    super({
      smallNudgeAmount: 4,
      bigNudgeAmount: 8
    });
    this.allowedUnits = "";
    e && (this.allowedUnits = `${e}`);
  }
  format(e) {
    return null == e ? "" : `${parseFloat(e.toFixed(2))}${this.allowedUnits}`;
  }
}
function e$({
  value: e,
  typedPropDef: t,
  guids: r,
  forBubbledProps: s,
  containerWidth: l,
  viewOnly: d,
  index: c,
  submitBehaviorAssignment: u,
  unit: p,
  min: _,
  max: h,
  onChange: m
}) {
  let g = isInvalidValue(e) ? 0 : Number(e);
  let f = useDispatch();
  let [E, y] = useState(null);
  let b = useMemo(() => new eY(p), [p]);
  let T = e => {
    let n = resolveVariableValue(VariableResolvedDataType.FLOAT, e);
    u ? u(t.explicitDefID, n) : permissionScopeHandler.user("set-number-prop-assignment", () => Fullscreen?.setComponentPropAssignmentVariableData(r, t.explicitDefID, n, s));
    m?.(r, t.explicitDefID, n, s);
    y(null);
  };
  let I = t.parameterConfig?.label?.value ?? t.name;
  return jsx("div", {
    className: eB(l),
    children: jsx("div", {
      className: w()(eG(l), {
        [mD]: d
      }),
      children: jsx(ScrubbableInput, {
        value: E ?? g,
        onValueChange: (e, t) => {
          void 0 !== _ && e < _ ? e = _ : void 0 !== h && e > h && (e = h);
          t === yesNoTrackingEnum.YES || t === yesNoTrackingEnum.YES_FORCE_TRACKING_AS_EDIT ? T(e) : y(e);
        },
        disabled: d,
        recordingKey: generateRecordingKey("componentPropAssignmentNumberScrub", r.join("-"), c),
        formatter: b,
        dispatch: f,
        "aria-label": I,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": I
      })
    })
  });
}
function eX({
  value: e,
  typedPropDef: t,
  guids: r,
  forBubbledProps: i,
  containerWidth: s,
  viewOnly: o,
  selectConfig: l,
  submitBehaviorAssignment: d,
  index: c,
  onChange: u
}) {
  let p = l.options.map(e => {
    let t = e.value.value.toString();
    return jsx(c$, {
      value: t,
      children: e.label
    }, e.label);
  });
  let _ = isInvalidValue(e) ? void 0 : e?.toString();
  let h = t.parameterConfig?.label?.value ?? t.name;
  return jsx("div", {
    className: eB(s),
    children: jsx("div", {
      className: eG(s),
      "data-disabled": o,
      children: jsxs(bL, {
        value: _,
        onChange: e => {
          let n = t.type === ComponentPropType.TEXT ? resolveVariableValue(VariableResolvedDataType.TEXT_DATA, {
            characters: e
          }) : resolveVariableValue(VariableResolvedDataType.FLOAT, parseFloat(e));
          d ? d(t.explicitDefID, n) : permissionScopeHandler.user("set-select-prop-assignment", () => {
            Fullscreen && Fullscreen.setComponentPropAssignmentVariableData(r, t.explicitDefID, n, i);
          });
          u?.(r, t.explicitDefID, n, i);
        },
        recordingKey: generateRecordingKey("componentPropAssignmentSelect", r.join("-"), c),
        children: [jsx(l9, {
          placeholder: isInvalidValue(e) ? getI18nString("design_systems.component_properties.mixed") : void 0,
          label: jsx(HiddenLabel, {
            children: h
          }),
          width: "fill",
          size: "md"
        }), jsx(mc, {
          children: p
        })]
      })
    })
  });
}
function eq({
  value: e,
  viewOnly: t,
  guids: r,
  typedPropDef: s,
  containerWidth: d,
  forBubbledProps: c,
  inPlayground: u,
  sceneGraph: p,
  instanceSwapPickerInitialHeight: _,
  instanceSwapPickerInitialPosition: h,
  entrypointForInstanceSwapPicker: m,
  getInstanceSwapPickerPosition: g,
  instanceSwapPickerIdPrefix: f = "instance-swap-prop-assignment-picker-",
  submitBehaviorAssignment: E
}) {
  let y = useDispatch();
  let b = useSelector(selectOpenFileKey);
  let {
    preferredValues,
    preferredValuesFetchError,
    retryPreferredValuesFetch
  } = xP(s);
  let N = useMemo(() => preferredValuesFetchError ? jsx(_$$u2, {
    onRetry: retryPreferredValuesFetch,
    recordingKey: "componentPropAssignment"
  }) : void 0, [preferredValuesFetchError, retryPreferredValuesFetch]);
  let C = useCallback(e => {
    y(uP({
      item: e,
      alwaysFetch: u,
      targetUpsertScene: u ? SceneIdentifier.PLAYGROUND_SCENE : SceneIdentifier.ACTIVE_SCENE,
      callback: t => {
        E ? E(s.explicitDefID, {
          type: VariableDataType.SYMBOL_ID,
          resolvedType: VariableResolvedDataType.SYMBOL_ID,
          value: "SymbolId:" + t
        }) : permissionScopeHandler.user("set-instance-prop-assignment", () => Fullscreen?.setInstanceComponentPropAssignment(r, s.explicitDefID, t, e.type === PrimaryWorkflowEnum.STATE_GROUP ? getDefaultStateForStateGroup(e, t, b) : "", c, 0 === preferredValues.length ? ApprovalStatus.NOT_APPLICABLE : preferredValues.includes(e) ? ApprovalStatus.YES : ApprovalStatus.NO));
      }
    }));
    setHoveredComponentPropDef({
      nodeIDs: [],
      defID: ""
    });
  }, [y, c, r, b, u, preferredValues, s, E]);
  flatten(r.map(e => Fullscreen?.getInstanceSublayersControlledByDirectPropAssignment(e, s.explicitDefID, SlotSymbolType.OVERRIDDEN_SYMBOL_ID).map(e => getSingletonSceneGraph().guidFromDeveloperFriendlyId(e))).filter(e => void 0 !== e));
  let {
    modalWidth
  } = TQ(Zl.INSTANCE_SWAP_PICKER);
  return jsx("div", {
    className: eB(d),
    children: jsx("div", {
      className: eG(d),
      children: jsx(_$$x, {
        disableToggle: t,
        entrypointForLogging: m,
        fill: d === PanelWidth.UNBOUNDED,
        getInstanceSwapPickerPosition: g,
        initialPosition: h,
        instanceSwapNode: e,
        instanceSwapPickerInitialHeight: _,
        onSwapCallback: C,
        pickerID: `${f}${r.join("-")}.${s.explicitDefID}`,
        pickerWidth: modalWidth,
        preferredItems: preferredValues,
        preferredValuesErrorComponent: N,
        sceneGraph: p,
        shouldPerformSwapOnClick: !1,
        title: getI18nString("design_systems.component_properties.choose_instance")
      })
    })
  });
}
function eJ({
  containerWidth: e,
  typedPropDef: t,
  guids: r,
  value: s,
  isPickerOpen: o,
  forBubbledProps: l,
  onPickerOpen: d,
  onPickerClose: c,
  onDropImage: u,
  behaviorAssignmentInfo: p,
  pickerWidth: _
}) {
  let h = t.explicitDefID;
  let m = useMemo(() => function (e) {
    if (isInvalidValue(e)) return eD(e);
    let t = ek(e, "image");
    if (t.every(e => 0 === e)) return eD(e);
    let r = ek(e, "imageThumbnail");
    let n = r.every(e => 0 === e) ? t : r;
    return {
      ...eD(e),
      originalImageHeight: e.originalImageHeight,
      originalImageWidth: e.originalImageWidth,
      imageThumbnail: {
        hash: n,
        name: ""
      }
    };
  }(s), [s]);
  let g = useRef({
    x: 0,
    y: 0
  });
  let f = _$$P();
  let y = useRef(null);
  let b = useCallback(() => {
    Fullscreen?.disableImagePropEdit(NodePropertyCategory.COMPONENT_PROP_ASSIGNMENT, h);
    c?.();
  }, [h, c]);
  let T = useCallback(() => {
    Fullscreen?.enableImagePropEdit(NodePropertyCategory.COMPONENT_PROP_ASSIGNMENT, h, p?.guids ?? r, p?.codeComponentId ?? null);
    d?.();
  }, [h, r, d, p]);
  let I = (void 0 !== p ? (_ ?? 240) + 12 : f - 12) / 2;
  let S = useCallback(({
    clientX: e,
    clientY: t
  }) => {
    let r = y.current?.getBoundingClientRect();
    g.current = {
      x: (r?.left ?? e) - qo - I,
      y: (r?.top ?? t) - 8
    };
    o ? b() : T();
  }, [o, b, T, I]);
  let v = useCallback(() => {
    Fullscreen?.uploadPropImage(h, p?.guids ?? r, p?.codeComponentId ?? null);
  }, [h, r, p]);
  let [A, x, N] = _$$e3(!1);
  let C = MB({
    onBoth: S,
    onKeyDown: x,
    onClick: N
  });
  let O = isSitesFileType();
  let R = l || r.length > 1 || O;
  return jsxs("div", {
    className: w()(eB(e)),
    children: [jsx("div", {
      className: eG(e),
      children: jsx(ButtonPrimitive, {
        onClick: C,
        className: w()(Zj, {
          [nt]: o
        }),
        ref: y,
        children: isValidValue(s) ? jsxs(Fragment, {
          children: [jsxs("div", {
            className: R4,
            children: [jsx("div", {
              className: ru
            }), jsx(_$$J2, {
              paint: m,
              forceNonInteractive: !0,
              tabIndex: -1
            })]
          }), jsx("span", {
            children: getI18nString("design_systems.component_properties.image")
          })]
        }) : jsx("span", {
          className: Of,
          children: getI18nString("design_systems.component_properties.mixed")
        })
      })
    }), o && jsx(e0, {
      image: s,
      defaultPosition: g.current,
      shouldAutofocusUploadButton: A,
      onClose: b,
      onDropImage: u,
      onUploadImage: v,
      disableAi: R
    })]
  });
}
let eZ = () => !0;
let eQ = () => !1;
function e0({
  image: e,
  defaultPosition: t,
  shouldAutofocusUploadButton: r,
  onClose: a,
  onDropImage: s,
  onUploadImage: o,
  disableAi: l
}) {
  let d = useMemo(() => eD(e), [e]);
  let u = useLatestRef(d);
  let _ = useRef(null);
  let [h] = useState(!d.image);
  useEffect(function () {
    (r || h) && _.current?.focus();
  }, [r, h]);
  let [m, g, f] = _$$e3(!1);
  let E = useCallback(e => {
    s(e);
    f();
  }, [s, f]);
  let T = useRef(!1);
  let [I, S] = useState(null);
  let v = !!d.animatedImage;
  let A = useLatestRef(!!d.animatedImage);
  let x = useLatestRef(e);
  let N = useCallback(() => {
    S(null);
    T.current = !0;
    Bc(d).then(e => {
      T.current && S(_$$J(e));
    }).catch(e => reportError(ServiceCategories.DESIGN_SYSTEMS_FOUNDATIONS, e));
  }, [d]);
  useEffect(function () {
    (v && !A || v && e !== x) && N();
  }, [v, A, e, x, N]);
  useEffect(function () {
    return () => {
      T.current = !1;
    };
  }, []);
  let C = d.animatedImage?.hash.toString();
  let R = C !== u?.animatedImage?.hash.toString() ? null : I;
  return jsx(_$$bL, {
    width: "sm",
    onClose: a,
    defaultPosition: t,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString("design_systems.component_properties.image")
        })
      }), jsx(DialogBody, {
        children: jsx("div", {
          className: l1,
          children: jsx(_$$Y, {
            className: w()(ZS, {
              [R3]: m
            }),
            style: {
              backgroundImage: `url('${_$$A2()}')`
            },
            isDragTarget: eZ,
            onTargetDragEnter: g,
            onTargetDragLeave: f,
            onTargetDrop: E,
            recordingKey: generateRecordingKey("ImagePropAssignmentPicker", "dropTarget"),
            children: jsxs("div", {
              className: mQ,
              children: [jsx("div", {
                className: ru
              }), isValidValue(e) ? d.animatedImage ? jsx(_$$Y2, {
                imagePaint: d,
                width: 208,
                height: 208,
                className: km,
                animatedImage: R,
                animationFrame: d.animationFrame ?? 0,
                onUpdateFrameData: lQ,
                playing: !!R
              }, C) : jsx(_$$K3, {
                imagePaint: d,
                width: 208,
                height: 208,
                className: km,
                forceUpdate: !1
              }) : jsx("div", {
                style: {
                  width: 208,
                  height: 208
                }
              }), jsx("div", {
                className: dW,
                children: jsx(_$$v2, {
                  uploadImagePaint: o,
                  isInset: !0,
                  imageButtonRef: _,
                  disableAi: l
                })
              })]
            })
          })
        })
      })]
    })
  });
}
export function $$e10({
  typedPropDefs: e,
  guids: t,
  assignmentValues: r,
  forBubbledProps: o,
  sceneGraph: l,
  inPlayground: d,
  containerWidth: c,
  viewOnly: u,
  hideIcon: p,
  instanceSwapPickerInitialHeight: _,
  instanceSwapPickerInitialPosition: h,
  recordingKey: m,
  entrypointForInstanceSwapPicker: g,
  instanceSwapPickerIdPrefix: f,
  submitBehaviorAssignment: E,
  clearBehaviorVariableBinding: y,
  getInstanceSwapPickerPosition: b,
  hideBindingButton: T,
  minHack: I,
  onChange: S,
  behaviorAssignmentInfo: v,
  pickerWidth: A
}) {
  let x = useMemo(() => e.filter(e => e.type !== ComponentPropType.SLOT), [e]);
  return jsx(_$$q, {
    listItems: x,
    updateSelection: void 0,
    isDragDisabled: !0,
    renderListItem: (e, i) => jsx(eU, {
      behaviorAssignmentInfo: v,
      clearBehaviorVariableBinding: y,
      containerWidth: c,
      entrypointForInstanceSwapPicker: g,
      forBubbledProps: o,
      getInstanceSwapPickerPosition: b,
      guids: t,
      hideBindingButton: T,
      hideIcon: p,
      inPlayground: d,
      index: i,
      instanceSwapPickerIdPrefix: f,
      instanceSwapPickerInitialHeight: _,
      instanceSwapPickerInitialPosition: h,
      minHack: I,
      onChange: S,
      parameterConfig: e.parameterConfig,
      pickerWidth: A,
      sceneGraph: l,
      submitBehaviorAssignment: E,
      typedPropDef: e,
      value: r[e.explicitDefID],
      viewOnly: u
    }, i),
    recordingKey: m
  });
}
export const c = $$e10;