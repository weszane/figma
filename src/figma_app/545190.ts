import c from 'classnames';
import { createContext, createRef, useCallback, useContext, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { hideInstanceSwapPicker } from '../905/8732';
import { hideAllPickersAndPreviews } from '../905/12476';
import { useMemoStable } from '../905/19536';
import { k as _$$k } from '../905/44647';
import { d as _$$d2 } from '../905/49800';
import { KeyCodes } from '../905/63728';
import { selectWithShallowEqual } from '../905/103090';
import { KindEnum, StatusEnum } from '../905/129884';
import { ow as _$$ow, a3 } from '../905/188421';
import { permissionScopeHandler } from '../905/189185';
import { isInvalidValue, isValidValue, normalizeValue } from '../905/216495';
import { labConfigurations, useLabConfiguration } from '../905/226610';
import { HiddenLabel } from '../905/270045';
import { getI18nString, renderI18nText } from '../905/303541';
import { getBasename } from '../905/309735';
import { IconButton } from '../905/443068';
import { O as _$$O2 } from '../905/487602';
import { compareRects } from '../905/508367';
import { RecordableButton, RecordableInput } from '../905/511649';
import { ButtonWide } from '../905/521428';
import { r as _$$r3 } from '../905/571562';
import { r as _$$r } from '../905/571838';
import { y as _$$y } from '../905/582657';
import { getFeatureFlags } from '../905/601108';
import { X as _$$X } from '../905/606795';
import { ButtonPrimitive } from '../905/632989';
import { K as _$$K2 } from '../905/636142';
import { U as _$$U } from '../905/708285';
import { logError } from '../905/714362';
import { hideTooltip } from '../905/765855';
import { c$ as _$$c$, l6, sK } from '../905/794875';
import { KeyboardReceiver } from '../905/826900';
import { yG } from '../905/859698';
import { A as _$$A } from '../905/891805';
import { V as _$$V } from '../905/900932';
import { showDropdownThunk, hideDropdownAction } from '../905/929976';
import { calculatePickerPositionLeft } from '../905/959568';
import { O as _$$O } from '../905/969533';
import { DialogTriggerButton } from '../905/976845';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { uj0 } from '../figma_app/27776';
import { wS, xP } from '../figma_app/65182';
import { Q as _$$Q } from '../figma_app/67145';
import { showPickerThunk, hidePickerThunk } from '../figma_app/91703';
import { isNotNullish } from '../figma_app/95419';
import { checkCondition } from '../figma_app/111825';
import { P as _$$P } from '../figma_app/120873';
import { _f, D1, i$, OC, ow } from '../figma_app/150804';
import { mY, Px, R1, u3, y$ } from '../figma_app/152690';
import { getVariableSetErrorMessage, PanelWidth, DefinitionAssignment, computeBackingGUID, DROPDOWN_HEIGHT, getComponentPropDisplayName, renderComponentPropIcon } from '../figma_app/164212';
import { D5, Tj } from '../figma_app/218448';
import { c$, ms } from '../figma_app/236327';
import { VariableIdHandler } from '../figma_app/243058';
import { useVariablePickerForFields } from '../figma_app/260445';
import { deleteProperties, findBestMatchingState, withDeferredVariantPropDefBackfill, renameProperty, EM_DASH, trackStateGroupAnalytics, formatPropertyValues } from '../figma_app/264776';
import { aq } from '../figma_app/305626';
import { Pe } from '../figma_app/323320';
import { groupInstancesByState } from '../figma_app/335489';
import { InstanceType } from '../figma_app/338442';
import { hg } from '../figma_app/355754';
import { Aw } from '../figma_app/383828';
import { setSelectedTypedPropDefId } from '../figma_app/389091';
import { isLocallySoftDeleted } from '../figma_app/394327';
import { ty as _$$ty } from '../figma_app/406976';
import { fullscreenValue } from '../figma_app/455680';
import { applyAutoSuggestedProps, findSingleInstanceId } from '../figma_app/460003';
import { selectContainingStateGroupId } from '../figma_app/505098';
import { c as _$$c } from '../figma_app/528598';
import { aR, pf } from '../figma_app/530362';
import { S as _$$S } from '../figma_app/552746';
import { useAutosuggestProps } from '../figma_app/578955';
import { g as _$$g } from '../figma_app/594353';
import { eP as _$$eP } from '../figma_app/613182';
import { useComponentPropDefinitions, useComponentBackingGUID } from '../figma_app/626952';
import { aO, BY, c6, FG, g1, K8, Me, p3, Ro, tP, zJ } from '../figma_app/631970';
import { ZE } from '../figma_app/689119';
import { useSceneGraphSelector } from '../figma_app/722362';
import { renameNode, setHoveredComponentPropDef } from '../figma_app/741237';
import { y3 } from '../figma_app/741785';
import { iN } from '../figma_app/760428';
import { ComponentPropType, Fullscreen, OperationType, StateHierarchy, VariableDataType, VariableResolvedDataType, VariablesBindings, VariableSetErrorType } from '../figma_app/763686';
import { parsePxInt } from '../figma_app/783094';
import { Ad, fn, oO, Y9 } from '../figma_app/811257';
import { getVariableById, getResolvedVariableValue } from '../figma_app/852050';
import { generateRecordingKey, useHandleInputEvent, useHandleKeyboardEvent, useHandleMouseEvent } from '../figma_app/878298';
import { Og } from '../figma_app/882817';
import { selectSceneGraphSelectionKeys } from '../figma_app/889655';
import { q as _$$q } from '../figma_app/905311';
import { formatList } from '../figma_app/930338';
import { loadSharedVariable } from '../figma_app/933328';
import { dD, DD, Jg } from '../figma_app/941824';
let u = c;
function A({
  autosuggestedValues: e,
  instanceGUID: t,
  sceneGraph: r,
  isLoading: a,
  isHovered: s,
  setIsHovered: o,
  productComponentGUID: l
}) {
  let d = Object.keys(e || {}).length === 0;
  let c = useMemo(() => a ? getI18nString('design_systems.component_properties.auto_suggest_loading') : d ? getI18nString('design_systems.component_properties.auto_suggest_empty') : getI18nString('design_systems.component_properties.auto_suggest_apply'), [s, a, d]);
  if (!getFeatureFlags().anticipation_props || !t) return null;
  let u = a || !a && d;
  return jsx('div', {
    className: 'props_section--autoSuggestButtonWrapper--WRcYQ',
    onMouseEnter: () => o(!0),
    onMouseLeave: () => o(!1),
    children: jsx(ButtonWide, {
      variant: 'secondary',
      disabled: u,
      onClick: () => {
        applyAutoSuggestedProps(t, e, r, l);
      },
      children: jsxs('span', {
        className: 'props_section--autosuggestButtonText--S97lu',
        children: [jsx(_$$V, {
          className: u ? 'props_section--disabledIcon--VzOXX' : void 0
        }), c]
      })
    })
  });
}
let N = createContext({
  isDraggingSomePropDef: !1,
  setIsDraggingSomePropDef: e => {}
});
function C({
  children: e
}) {
  let [t, r] = useState(!1);
  return jsx(N.Provider, {
    value: {
      isDraggingSomePropDef: t,
      setIsDraggingSomePropDef: r
    },
    children: e
  });
}
let w = () => useContext(N);
function eu({
  children: e,
  inputRef: t,
  canEdit: r
}) {
  return r ? jsx('div', {
    className: 'false_input_containing_svg--falseInput--cKug0 raw_components--borderFocusWithin--BaipZ',
    onClick: () => t.current?.focus(),
    role: 'textbox',
    tabIndex: 0,
    children: e
  }) : jsx('div', {
    className: cssBuilderInstance.hFull.wFull.relative.$,
    children: e
  });
}
function eb({
  text: e,
  ...t
}) {
  let r = useDispatch<AppDispatch>();
  let {
    state,
    targetRect,
    position
  } = selectWithShallowEqual(e => e.tooltip);
  let d = useCallback(e => {
    (e.key === ' ' || e.key === 'Enter') && e.stopPropagation();
  }, []);
  let c = useCallback(e => {
    e.stopPropagation();
    let t = e.currentTarget;
    if (state === StatusEnum.SHOWING || state === StatusEnum.PENDING) {
      let e = _$$eP(t);
      if (e && e.position === position && e.targetRect && compareRects(e.targetRect, targetRect)) {
        r(hideTooltip());
        return;
      }
    }
    let n = t.getBoundingClientRect();
    t.dispatchEvent(new MouseEvent('mousemove', {
      clientX: n.x + n.width / 2,
      clientY: n.y + n.height / 2
    }));
  }, [r, position, state, targetRect]);
  return jsx(IconButton, {
    'aria-label': e,
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': e,
    'htmlAttributes': {
      onKeyDown: d,
      onKeyUp: d
    },
    'onClick': c,
    ...t,
    'children': jsx(_$$r, {})
  });
}
let eI = 'component_prop_def_row--ui3ComponentPropRow--Sld-J';
let eS = 'component_prop_def_row--isDraggingOtherRow--WdU8i';
let ev = 'component_prop_def_row--isDraggingRow--p9Tzv';
let eA = 'typed-prop-def-del-dropdown';
let ex = 'variant-prop-def-del-dropdown';
let eN = e => {
  e.stopPropagation();
};
let eC = e => {
  e.stopPropagation();
  e.preventDefault();
};
function ew(e) {
  let {
    index,
    guids,
    componentPropDef,
    isSelected,
    isDragging,
    singletonRow,
    onPropertyMouseDown,
    onPropertyMouseMove,
    onPropertyMouseUp,
    selectRow,
    onKeyDown,
    recordingKey
  } = e;
  let {
    useGrid
  } = useContext(dD);
  let T = useMemo(Pe, []);
  let {
    pickerShown,
    selectedComponentPropDefId,
    componentWithPropDefSelected,
    allStates,
    propertySortOrder
  } = selectWithShallowEqual(e => {
    let t = selectSceneGraphSelectionKeys(e);
    let r = t.length === 1 ? T(e, t[0]) : [];
    return {
      pickerShown: e.pickerShown,
      selectedComponentPropDefId: e.selectedComponentPropDefId,
      componentWithPropDefSelected: componentPropDef.kind === InstanceType.TYPED && r.some(e => e.explicitDefID === componentPropDef.explicitDefID),
      allStates: ow(e) ?? [],
      propertySortOrder: OC(e) ?? []
    };
  });
  let w = useSelector(selectContainingStateGroupId);
  let O = useDispatch<AppDispatch>();
  let R = useCallback(e => {
    V(e.currentTarget.value);
  }, []);
  let {
    inputRef,
    inputProps: {
      onChange,
      onFocus,
      onMouseLeave,
      onMouseUp
    }
  } = _$$X({
    onChange: R
  });
  let [U, B] = useState(!1);
  let [G, V] = useState(null);
  let H = useRef(null);
  let z = useRef(null);
  let W = useRef(null);
  let J = componentPropDef.kind === InstanceType.TYPED ? componentPropDef.explicitDefID : void 0;
  let Z = componentPropDef.kind === InstanceType.TYPED ? componentPropDef.type : void 0;
  let Q = componentPropDef.kind === InstanceType.VARIANT ? componentPropDef.values : void 0;
  let ea = selectedComponentPropDefId && selectedComponentPropDefId === J;
  let es = G !== null;
  let el = useMemo(() => pickerShown?.id === aR && (componentPropDef.kind === InstanceType.TYPED ? pickerShown.data.defID === J : pickerShown.data.name === componentPropDef.name), [componentPropDef, pickerShown, J]);
  useEffect(() => {
    es && inputRef.current?.select();
  }, [es, inputRef]);
  let eu = () => {
    G ? (V(null), componentPropDef.kind === InstanceType.TYPED ? permissionScopeHandler.user('edit-prop-def-name', () => Fullscreen.editComponentPropDefName(componentPropDef.explicitDefID, G)) : componentPropDef.kind === InstanceType.VARIANT && permissionScopeHandler.user('edit-variant-prop-name', () => renameProperty(componentPropDef.name, G, allStates, propertySortOrder))) : V(componentPropDef.name);
  };
  let eg = useCallback(() => {
    O(setSelectedTypedPropDefId({
      propDefId: null
    }));
    O(hideInstanceSwapPicker());
    let e = z.current;
    let t = e ? calculatePickerPositionLeft(e, DROPDOWN_HEIGHT) : {};
    O(showPickerThunk({
      id: aR,
      initialX: t?.x,
      initialY: t?.y,
      data: componentPropDef.kind === InstanceType.TYPED ? {
        defID: J
      } : {
        name: componentPropDef.name
      }
    }));
  }, [O, componentPropDef, J]);
  useEffect(() => {
    ea && componentWithPropDefSelected && !el && eg();
  }, [ea, componentWithPropDefSelected, el, eg]);
  let ef = useCallback(e => {
    pickerShown?.id !== aR || el || O(hidePickerThunk());
    onPropertyMouseUp && !useGrid && onPropertyMouseUp(e);
  }, [O, el, pickerShown?.id, onPropertyMouseUp, useGrid]);
  let eE = useCallback(() => {
    el ? O(hidePickerThunk()) : (eg(), useGrid || selectRow());
  }, [O, el, selectRow, useGrid, eg]);
  let ey = useCallback(() => {
    B(!0);
    J && setHoveredComponentPropDef({
      nodeIDs: guids,
      defID: J
    });
  }, [guids, J]);
  let eb = useCallback(() => {
    B(!1);
    setHoveredComponentPropDef({
      nodeIDs: [],
      defID: ''
    });
  }, []);
  let eI = useCallback(e => {
    if (componentPropDef.kind === InstanceType.VARIANT && singletonRow) {
      O(hideDropdownAction());
      return;
    }
    pickerShown?.id === aR && O(hidePickerThunk());
    O(showDropdownThunk({
      type: componentPropDef.kind === InstanceType.TYPED ? eA : ex,
      data: {
        position: {
          top: e.clientY,
          left: Math.min(e.clientX, window.innerWidth - parsePxInt(uj0) / 2)
        }
      }
    }));
  }, [O, componentPropDef.kind, singletonRow, pickerShown]);
  let eS = useHandleMouseEvent(recordingKey, 'contextmenu', e => {
    eI(e);
  });
  let ev = useHandleMouseEvent(recordingKey, 'mouseenter', e => {
    ey();
  });
  let eN = useHandleMouseEvent(recordingKey, 'mouseleave', e => {
    eb();
  });
  let eC = useHandleMouseEvent(recordingKey, 'mouseup', e => {
    ef(e);
  });
  let ew = useHandleMouseEvent(recordingKey, 'mousedown', e => {
    es && V(null);
    el && O(hidePickerThunk());
    onPropertyMouseDown && !useGrid && onPropertyMouseDown(e);
  });
  let eR = useHandleMouseEvent(recordingKey, 'mousemove', e => {
    onPropertyMouseMove && !useGrid && onPropertyMouseMove(e);
  }, {
    recordMetadata: e => ({
      bounds: e.currentTarget.getBoundingClientRect(),
      pageX: e.pageX,
      pageY: e.pageY
    }),
    playbackMetadata: e => ({
      currentTarget: {
        getBoundingClientRect: () => e.bounds
      },
      pageX: e.pageX,
      pageY: e.pageY
    })
  });
  useHandleMouseEvent(recordingKey, 'dblclick', () => {
    selectRow();
    V(componentPropDef.name);
  });
  let eL = useHandleMouseEvent(recordingKey, 'click', () => {
    useGrid || selectRow();
    V(componentPropDef.name);
  });
  let eP = W.current;
  let eD = !!eP && eP.offsetWidth < eP.scrollWidth;
  let {
    preferredValues
  } = xP(componentPropDef);
  let eM = wS(preferredValues).size > 0;
  let eF = !es && (componentPropDef.error !== VariableSetErrorType.NONE || eM);
  let ej = !es && (U || el);
  return getFeatureFlags().ds_variable_props_number_def || Z !== ComponentPropType.NUMBER ? jsx(eO, {
    isSelected,
    singletonRow,
    isDragging,
    handlePropertyMouseDown: ew,
    handlePropertyMouseMove: eR,
    handlePropertyMouseUp: eC,
    handlePropertyMouseEnter: ev,
    handlePropertyMouseLeave: eN,
    handleContextMenu: eS,
    onDoubleClick: void 0,
    onClick: eL,
    onKeyDown,
    rowRef: H,
    ui3RowRef: z,
    typedPropType: Z,
    isEditingDefName: es,
    defNameInputRef: inputRef,
    componentPropDef,
    defNameInputOnMouseUp: onMouseUp,
    defNameInputOnMouseLeave: onMouseLeave,
    defNameInputOnFocus: onFocus,
    onInputKeyDown: e => {
      e.stopPropagation();
      (e.keyCode === KeyCodes.ESCAPE || e.keyCode === KeyCodes.ENTER) && (eu(), useGrid && KeyCodes.ENTER && e.preventDefault());
    },
    defNameInputOnChange: onChange,
    submitDefName: eu,
    defNameRef: W,
    index,
    isDefNameTruncated: eD,
    variantPropValues: Q,
    shouldShowEditIcons: ej,
    editComponentPropPickerShown: el,
    toggleEditPropPicker: eE,
    onDeleteProp: () => {
      componentPropDef.kind === InstanceType.TYPED ? permissionScopeHandler.user('delete-prop-def', () => Fullscreen.deleteComponentPropDefs([componentPropDef.explicitDefID])) : w && permissionScopeHandler.user('delete-variant-prop', () => deleteProperties([componentPropDef.name], allStates, propertySortOrder, w));
    },
    shouldShowErrorIcon: eF,
    preferredValuesUnpublishedError: eM,
    recordingKey
  }) : jsx(Fragment, {});
}
function eO({
  isSelected: e,
  singletonRow: t,
  isDragging: r,
  handlePropertyMouseDown: a,
  handlePropertyMouseMove: s,
  handlePropertyMouseUp: o,
  handlePropertyMouseEnter: c,
  handlePropertyMouseLeave: p,
  handleContextMenu: g,
  onClick: f,
  onKeyDown: E,
  ui3RowRef: y,
  typedPropType: T,
  isEditingDefName: I,
  defNameInputRef: S,
  componentPropDef: v,
  defNameInputOnMouseUp: A,
  defNameInputOnMouseLeave: N,
  defNameInputOnFocus: C,
  onInputKeyDown: O,
  defNameInputOnChange: R,
  submitDefName: L,
  defNameRef: P,
  index: D,
  isDefNameTruncated: k,
  variantPropValues: M,
  shouldShowEditIcons: F,
  editComponentPropPickerShown: K,
  toggleEditPropPicker: Y,
  onDeleteProp: $,
  shouldShowErrorIcon: X,
  preferredValuesUnpublishedError: ee,
  recordingKey: et
}) {
  let er = useSceneGraphSelector();
  let en = [];
  let ei = I || K;
  let eo = e && !ei && r;
  let {
    isDraggingSomePropDef
  } = w();
  let ec = !eo && isDraggingSomePropDef;
  let {
    useGrid
  } = useContext(dD);
  let eh = useRef(null);
  let [em, eg] = useState(!1);
  let ef = useCallback(e => {
    eg(!0);
    (e.target === S.current && e.relatedTarget === null || e.target === eh.current && e.relatedTarget === null) && e.stopPropagation();
  }, [S]);
  let eE = useCallback(() => {
    eg(!1);
  }, []);
  if (F && !ec || eo || em && !I ? en.push(jsx(DialogTriggerButton, {
    'onClick': Y,
    'aria-label': getI18nString('design_systems.component_properties.edit_property'),
    'recordingKey': 'componentPropEditButton',
    'aria-expanded': K,
    'htmlAttributes': {
      'onDoubleClick': eN,
      'onMouseDown': eN,
      'onContextMenu': eC,
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('design_systems.component_properties.edit_property')
    },
    'children': jsx(_$$A, {})
  }), jsx(IconButton, {
    'onClick': $,
    'recordingKey': 'componentPropDeleteButton',
    'aria-label': getI18nString('design_systems.component_properties.delete_property', {
      numSelected: 1
    }),
    'children': jsx(_$$O2, {})
  })) : useGrid && en.push(null, null), X) {
    let e = getVariableSetErrorMessage(v.error, ee);
    en.push(jsx(eb, {
      'data-testid': `component-prop-error-icon-${D}`,
      'data-tooltip-offset-y': 1,
      'data-tooltip-timeout-delay': 50,
      'text': e
    }));
  }
  en.length || en.push(jsx('div', {
    className: cssBuilderInstance.w24.$
  }));
  let ey = useMemo(() => {
    if (v.kind === InstanceType.VARIANT) {
      if (M) return formatList(M, 'unit');
    } else {
      if (v.varValue.type === VariableDataType.ALIAS) {
        let e = VariableIdHandler.fromString(v.varValue.value);
        if (e) {
          let t = er.getVariableNode(e);
          if (t) {
            return jsx('div', {
              className: 'component_prop_def_row--variablePill--yJald',
              children: t.name
            });
          }
        }
      }
      if (v.varValue.resolvedType === VariableResolvedDataType.BOOLEAN) return v.varValue.value ? getI18nString('design_systems.component_properties.boolean_true') : getI18nString('design_systems.component_properties.boolean_false');
      if (v.varValue.resolvedType === VariableResolvedDataType.SLOT_CONTENT_ID) return null;
      if (v.varValue.resolvedType !== VariableResolvedDataType.SYMBOL_ID) return v.defaultValue;
      {
        let e = computeBackingGUID([v.defaultValue], er);
        if (e) return isInvalidValue(e) ? getI18nString('design_systems.instance_swap_picker.mixed') : getBasename(e.name);
      }
    }
  }, [v, er, M]);
  let eT = ey || T === ComponentPropType.NUMBER && ey === 0;
  let eA = useRef(null);
  let ex = useCallback(e => {
    O(e);
    (e.keyCode === KeyCodes.ESCAPE || e.keyCode === KeyCodes.ENTER) && (eA.current = () => {
      eh.current?.focus();
    });
  }, [O]);
  useLayoutEffect(() => {
    !I && eA.current && (eA.current(), eA.current = null);
  }, [I]);
  let ew = jsxs(eu, {
    inputRef: S,
    canEdit: !0,
    children: [T ? renderComponentPropIcon(T) : jsx(_$$y, {}), jsx(RecordableInput, {
      className: 'component_prop_def_row--input--Heq8r props_panel--input--pkL0- raw_components--base--T7G0z raw_components--input--JB4Ix raw_components--singleRowHeight--dKM4t raw_components--border--SKh2u sf_pro--uiFontWithSFProFallback--m-p9V',
      defaultValue: v.name,
      forwardedRef: S,
      onBlur: L,
      onChange: R,
      onContextMenu: eC,
      onFocus: C,
      onKeyDown: useGrid ? ex : O,
      onMouseDown: e => eN(e),
      onMouseLeave: N,
      onMouseUp: A,
      recordingKey: 'componentPropRowDefNameInput'
    })]
  });
  let [eO, eR] = useState(!1);
  let eL = useMemo(() => ({
    onBlur: () => eR(!0),
    onFocus: () => eR(!1)
  }), []);
  let eP = jsxs(ButtonPrimitive, {
    ref: eh,
    htmlAttributes: eL,
    onClick: f,
    className: u()('component_prop_def_row--ui3ComponentPropDefNameContainer--fBQXq', 'component_prop_def_row--ui3ComponentPropDefNameContainerFocus--ejeB2', {
      'component_prop_def_row--isInGrid--ngO2H': useGrid,
      'component_prop_def_row--ui3ComponentPropDefNameContainerDragging--VELue': eo,
      'component_prop_def_row--isSelectedSecondary--0vLAL': useGrid && e && !eO
    }),
    children: [jsx('span', {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('design_systems.component_properties.property_icon_tooltip', {
        propertyType: getComponentPropDisplayName(T ?? ComponentPropType.VARIANT)
      }),
      'children': T ? renderComponentPropIcon(T) : jsx(_$$y, {})
    }), jsxs('div', {
      className: 'component_prop_def_row--ui3ComponentPropDefNameAndValue--2w-8p',
      children: [jsx('div', {
        'ref': P,
        'className': 'component_prop_def_row--componentPropDefName--bUVTI ellipsis--ellipsis--Tjyfa sf_pro--uiFontWithSFProFallback--m-p9V',
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': k ? v.name : null,
        'children': v.name
      }), eT && jsxs('div', {
        className: 'component_prop_def_row--componentPropVariantValues--mTqSx',
        children: ['\u30FB', ey]
      })]
    })]
  });
  return jsxs(Fragment, {
    children: [useGrid ? jsxs(DD, {
      ref: y,
      appendedClassName: u()(eI, {
        [ev]: eo,
        [eS]: ec
      }),
      hasFocus: r,
      htmlAttributes: {
        onBlur: eE,
        onContextMenu: g,
        onFocus: ef,
        onKeyDown: E,
        onPointerDown: a,
        onPointerEnter: c,
        onPointerLeave: p,
        onPointerMove: s,
        onPointerUp: o
      },
      input: I ? ew : eP,
      recordingKey: et,
      selected: e,
      singletonRow: t,
      children: [...en]
    }) : jsx(Y9, {
      ref: y,
      containerClassName: u()(eI, {
        [ev]: eo,
        [eS]: ec
      }),
      dragging: r,
      hideGrabber: !1,
      onContextMenu: g,
      onKeyDown: E,
      onMouseDown: a,
      onMouseEnter: c,
      onMouseLeave: p,
      onMouseMove: s,
      onMouseUp: o,
      selected: eo,
      singletonRow: t,
      tabIndex: 0,
      children: jsx(_$$S.div, {
        onMouseDown: eN,
        children: jsxs(oO, {
          input: I ? ew : eP,
          children: [...en]
        })
      })
    }), K && jsx(pf, {
      componentPropDef: v
    })]
  });
}
let eR = ms;
let eL = c$;
function eP({
  defs: e,
  guids: t,
  selectedIndices: r,
  onSelectIndices: s,
  recordingKey: o
}) {
  let l = useMemo(() => getFeatureFlags().ds_image_props_sites ? e.filter(e => e.type !== ComponentPropType.IMAGE) : e, [e]);
  let c = useSelector(e => e.dropdownShown);
  let u = c?.type === eA;
  let _ = e => (e?.key === 'Backspace' || e?.key === 'Delete') && (f(), !0);
  let m = useHandleKeyboardEvent(o, 'keydown', e => {
    _(e);
  });
  let g = useHandleInputEvent(`${o}.fullscreen`, 'keydown', e => {
    _(e.event) && e.accept();
  });
  let f = useCallback(() => {
    if (!r.length) return;
    let e = r.map(e => l[e].explicitDefID);
    permissionScopeHandler.user('delete-prop-defs', () => Fullscreen.deleteComponentPropDefs(e));
  }, [l, r]);
  let E = useCallback((e, t, r) => {
    let n = t ? t.explicitDefID : '';
    let i = r ? r.explicitDefID : '';
    permissionScopeHandler.user('reorder-prop-defs', () => e.forEach(e => {
      Fullscreen.insertPropDefBetween(e.explicitDefID, n, i);
      n = e.explicitDefID;
    }));
    fullscreenValue.commit();
  }, []);
  let y = useLabConfiguration(labConfigurations.useGridPart2);
  let b = useRef(null);
  useEffect(() => {
    r.length ? b.current?.focus() : b.current?.blur();
  }, [r]);
  let {
    setIsDraggingSomePropDef
  } = w();
  return jsxs(KeyboardReceiver, {
    handleKeyDown: g,
    ref: b,
    name: 'typed-props-list',
    focusOnMount: !0,
    children: [jsx(dD.Provider, {
      value: {
        useGrid: y
      },
      children: jsx(_$$q, {
        isDragDisabled: !1,
        listItems: l,
        selectedIndices: r,
        updateSelection: s,
        onInsertItemsBetweenValues: E,
        onDragStart: () => setIsDraggingSomePropDef(!0),
        onDragEnd: () => setIsDraggingSomePropDef(!1),
        renderListItem: (e, r, i, a, d, c, u) => jsx(ew, {
          componentPropDef: e,
          guids: t,
          index: r,
          isDragging: a,
          isSelected: i,
          onKeyDown: m,
          onPropertyMouseDown: d,
          onPropertyMouseMove: c,
          onPropertyMouseUp: u,
          recordingKey: generateRecordingKey(o, 'row', r),
          selectRow: () => s([r]),
          singletonRow: l.length === 1
        }, y ? void 0 : r),
        recordingKey: o
      })
    }), u && jsx(eR, {
      style: c.data.position,
      positionFixed: !0,
      children: jsx(eL, {
        onClick: f,
        recordingKey: 'deleteProp',
        children: renderI18nText('design_systems.component_properties.delete_property', {
          numSelected: r.length
        })
      })
    })]
  });
}
let e8 = {
  format: e => e || EM_DASH
};
function $$e6(e) {
  let {
    guids,
    index,
    variantPropDef,
    stateGroupGUID,
    allStateVariantProps,
    backingStateVariantProps,
    statePropertyValues,
    forBubbledProps,
    containerWidth,
    viewOnly,
    hideIcon,
    selectedPropertyValueHistory,
    sceneGraph,
    updateHistory
  } = e;
  let I = useDispatch<AppDispatch>();
  let v = useSelector(e => e.instanceSwapPickerShown);
  let A = hg();
  let x = D5(variantPropDef.name, variantPropDef.values);
  let N = useMemoStable(() => groupInstancesByState(guids, sceneGraph), [guids, sceneGraph]);
  let C = useRef(null);
  let w = useRef(null);
  let O = useId();
  let {
    isBound,
    setBinding,
    boundVariableId,
    onExpressionSubmitted,
    variableConsumptionMapValue
  } = function (e, t) {
    let r = useDispatch<AppDispatch>();
    let {
      consumedVariable,
      variantProperties,
      setVariantProperties
    } = function (e) {
      let {
        variantProperties: _variantProperties,
        setVariantProperties: _setVariantProperties
      } = mY(e);
      let n = normalizeValue(_variantProperties);
      let {
        variableConsumptionMap,
        setVariableConsumptionMap
      } = R1();
      let {
        consumedVariable: _consumedVariable
      } = u3(['VARIANT_PROPERTIES']);
      let l = useCallback(e => {
        setVariableConsumptionMap({
          VARIANT_PROPERTIES: e
        });
      }, [setVariableConsumptionMap]);
      return getFeatureFlags().ds_nivb_fix_bubbled_props ? {
        consumedVariable: n,
        setVariantProperties: _setVariantProperties,
        variantProperties: _variantProperties
      } : {
        consumedVariable: _consumedVariable,
        setVariantProperties: l,
        variantProperties: variableConsumptionMap.VARIANT_PROPERTIES
      };
    }(t);
    let l = useSelector(e => e.fileVersion);
    let c = useCallback(t => {
      let i = consumedVariable && isValidValue(consumedVariable) && !('isMixed' in consumedVariable && consumedVariable.isMixed) && consumedVariable.type === VariableDataType.EXPRESSION ? consumedVariable.value.expressionArguments[0] : {
        type: VariableDataType.MAP,
        resolvedType: VariableResolvedDataType.MAP,
        value: {}
      };
      t ? r(loadSharedVariable({
        item: t,
        callback: r => {
          let n = checkCondition(l, getFeatureFlags().ds_variant_props_write) ? e.uguid : void 0;
          t.resolvedType === VariableResolvedDataType.STRING ? i.value[e.name] = {
            type: VariableDataType.ALIAS,
            resolvedType: VariableResolvedDataType.STRING,
            value: r,
            uguid: n
          } : (t.resolvedType === VariableResolvedDataType.BOOLEAN || t.resolvedType === VariableResolvedDataType.FLOAT) && (i.value[e.name] = {
            type: VariableDataType.EXPRESSION,
            resolvedType: VariableResolvedDataType.STRING,
            value: {
              expressionFunction: OperationType.STRINGIFY,
              expressionArguments: [y$(t.resolvedType, r)]
            },
            uguid: n
          });
          setVariantProperties({
            type: VariableDataType.EXPRESSION,
            resolvedType: VariableResolvedDataType.SYMBOL_ID,
            value: {
              expressionArguments: [i],
              expressionFunction: OperationType.RESOLVE_VARIANT
            }
          });
          _$$ty(r, t.resolvedType);
        }
      })) : (delete i.value[e.name], setVariantProperties(Object.keys(i.value).length === 0 ? null : {
        type: VariableDataType.EXPRESSION,
        resolvedType: VariableResolvedDataType.SYMBOL_ID,
        value: {
          expressionArguments: [i],
          expressionFunction: OperationType.RESOLVE_VARIANT
        }
      }));
    }, [consumedVariable, setVariantProperties, r, e, l]);
    let u = useMemo(() => {
      if (consumedVariable && isValidValue(consumedVariable)) {
        try {
          let t = consumedVariable.value.expressionArguments[0].value[e.name];
          if (!t) return null;
          if (t.type === VariableDataType.EXPRESSION && t.value.expressionFunction === OperationType.STRINGIFY && (t = t.value.expressionArguments[0]), t?.type === VariableDataType.ALIAS) return t.value;
        } catch (e) {
          logError('variables', 'error checking variant binding map', {
            message: e.message
          }, {
            reportAsSentryError: !0
          });
        }
      }
      return null;
    }, [consumedVariable, e]);
    return {
      isBound: !!u,
      setBinding: c,
      boundVariableId: u,
      onExpressionSubmitted: void 0,
      variableConsumptionMapValue: variantProperties
    };
  }(e.variantPropDef, guids);
  let [F, j] = useVariablePickerForFields(['VARIANT_PROPERTIES'], onExpressionSubmitted && x.type === 'TOGGLE' ? VariableResolvedDataType.BOOLEAN : VariableResolvedDataType.STRING, setBinding, {
    requestedTypes: x.type === 'TOGGLE' ? [VariableResolvedDataType.BOOLEAN] : [VariableResolvedDataType.STRING, VariableResolvedDataType.FLOAT],
    metadata: e.variantPropDef.name
  }, onExpressionSubmitted);
  function U(e, t) {
    let r = Tj(selectedPropertyValueHistory, e, t);
    if (t === getI18nString('proto.assign_variant')) {
      j(w.current);
      return;
    }
    let n = {};
    for (let i of backingStateVariantProps) {
      let {
        propertyValues
      } = i;
      let s = {
        ...propertyValues,
        [e]: t
      };
      let o = findBestMatchingState(s, r, allStateVariantProps);
      o !== null && (n[i.guid] = o);
    }
    let i = {};
    for (let e of Object.keys(n)) {
      let t = n[e].guid;
      i[t] = (i[t] || []).concat(N[e]);
    }
    if (A) {
      Fullscreen.replaceSymbolBackingInstancesInPlayground(i);
      updateHistory(r);
      v?.isShown && I(hideInstanceSwapPicker());
      return;
    }
    Object.keys(i).length !== 0 && (trackStateGroupAnalytics('Swapping A Variant', stateGroupGUID ?? '', {
      source: forBubbledProps ? 'bubbled_sidebar' : 'sidebar'
    }), permissionScopeHandler.user('change-variant-prop', () => Aw(i)));
    updateHistory(r);
  }
  let G = statePropertyValues.hasOwnProperty(x.property) ? statePropertyValues[x.property] : void 0;
  let V = variantPropDef.values;
  function H() {
    setBinding(void 0);
  }
  let z = getVariableById(boundVariableId ?? void 0);
  let W = Px();
  let K = useMemo(() => VariablesBindings.getVariableSetKeyForPublish(z?.variableSetId ?? '') ?? '', [z?.variableSetId]);
  let Y = K in W ? W[yG(K)] : void 0;
  let $ = useMemo(() => Y ? {
    [yG(K)]: Y
  } : void 0, [Y, K]);
  let X = getResolvedVariableValue(boundVariableId ?? void 0, $);
  let {
    assignmentValue,
    iconButton
  } = (() => {
    if (isBound && z && isNotNullish(X)) {
      let t;
      isNotNullish(X) && X !== 'MIXED' && (V.some(e => e.toLowerCase() === X.value.toString().toLowerCase()) ? G?.toString().toLowerCase() !== X.value.toString().toLowerCase() && (t = getI18nString('design_systems.component_properties.invalid_variant_binding_state')) : t = getI18nString('design_systems.component_properties.invalid_variant_binding'));
      return {
        assignmentValue: onExpressionSubmitted && variableConsumptionMapValue ? jsx(y3, {
          targetVariableData: variableConsumptionMapValue.isMixed ? void 0 : variableConsumptionMapValue,
          onClick: () => {
            j(w.current);
          },
          isNarrowPanel: !0,
          isInCell: !1,
          showVariableThumbnails: !0,
          isInConditional: !1,
          isMixed: variableConsumptionMapValue.isMixed,
          variantProperty: e.variantPropDef.name
        }) : z && jsx('div', {
          className: K8,
          children: jsx(_$$P, {
            classNameOverride: cssBuilderInstance.wFull.$,
            fullWidth: !0,
            invalid: void 0 !== t,
            isDeleted: isLocallySoftDeleted(z),
            isStandalone: !0,
            thumbnailValue: X === 'MIXED' || t ? void 0 : X,
            tooltipOverride: t,
            value: isInvalidValue(G) ? getI18nString('design_systems.component_properties.mixed') : z.name,
            variableId: isInvalidValue(G) ? void 0 : boundVariableId ?? void 0,
            variablePillContainerClassName: Ro
          })
        }),
        iconButton: jsx('span', {
          className: c6,
          children: jsx(IconButton, {
            'onClick': H,
            'aria-label': getI18nString('design_systems.component_properties.detach_property'),
            'recordingKey': generateRecordingKey(e.recordingKey, 'detachVariantProp'),
            'htmlAttributes': {
              'data-tooltip': getI18nString('design_systems.component_properties.detach_property'),
              'data-tooltip-type': KindEnum.TEXT
            },
            'children': jsx(_$$U, {})
          })
        })
      };
    }
    {
      let r = G ? x.type === 'TOGGLE' ? jsx(e7, {
        entry: x,
        selectedOption: G,
        viewOnly,
        recordingKey: e.recordingKey,
        onSelectProperty: U
      }) : jsx(e9, {
        ariaLabelledBy: O,
        containerWidth,
        allPropertyOptions: V,
        entry: x,
        guids,
        onSelectProperty: U,
        recordingKey: e.recordingKey,
        selectedOption: G,
        viewOnly
      }) : null;
      let i = jsx(_$$K2, {
        isPickerShowing: F,
        onClick: () => U(x.property, getI18nString('proto.assign_variant')),
        recordingKey: generateRecordingKey(e.recordingKey, 'assignVariantProp'),
        tooltip: getI18nString('proto.apply_variant_unified')
      });
      return {
        assignmentValue: r,
        iconButton: A ? void 0 : i
      };
    }
  })();
  let Z = jsx('div', {
    className: zJ,
    children: jsx('p', {
      'id': O,
      'ref': C,
      'className': BY,
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': C.current && C.current.offsetWidth < C.current.scrollWidth ? x.property : null,
      'children': x.label
    })
  });
  return hideIcon ? jsx(_$$g, {
    ref: w,
    leftLabel: null,
    leftInput: Z,
    rightLabel: null,
    rightInput: assignmentValue
  }, `componentPropertyRow.${index}`) : jsx(fn, {
    appendedClassName: FG,
    ref: w,
    leftLabel: null,
    leftInput: Z,
    rightLabel: null,
    rightInput: assignmentValue,
    icon: iconButton
  }, `componentPropertyRow.${index}`);
}
function e7({
  entry: e,
  selectedOption: t,
  onSelectProperty: r,
  viewOnly: i,
  recordingKey: a
}) {
  return jsx(_$$d2, {
    mixed: isInvalidValue(t),
    checked: t === e.toggleTokenPair[0],
    label: jsx(HiddenLabel, {
      children: e.label
    }),
    onChange: t => {
      r(e.property, e.toggleTokenPair[t ? 0 : 1]);
    },
    disabled: i,
    recordingKey: generateRecordingKey(a, `toggle-${e.property}`)
  });
}
function e9({
  entry: e,
  selectedOption: t,
  onSelectProperty: r,
  viewOnly: i,
  recordingKey: s,
  containerWidth: o,
  allPropertyOptions: l,
  guids: d,
  ariaLabelledBy: c
}) {
  let _ = useDispatch<AppDispatch>();
  let m = useSelector(e => e.dropdownShown);
  return jsx('div', {
    className: u()(tP, {
      [g1]: o === PanelWidth.WIDE,
      [aO]: i
    }),
    children: i ? jsx('p', {
      className: Me,
      children: isInvalidValue(t) ? getI18nString('design_systems.component_properties.mixed') : t
    }) : jsx(l6, {
      ariaLabelledBy: c,
      className: ZE,
      dispatch: _,
      dropdownAlignment: 'right',
      dropdownShown: m,
      dropdownWidth: 200,
      fill: o === PanelWidth.UNBOUNDED,
      formatter: e8,
      id: `states-property-select-${d.join('-')}-${e.property}`,
      inputClassName: p3,
      onChange: t => {
        r(e.property, t);
      },
      onMouseDown: () => _(hideAllPickersAndPreviews),
      property: t,
      recordingKey: generateRecordingKey(s, `select-${e.property}`),
      children: [...l].map(t => jsx(_$$c$, {
        value: t,
        recordingKey: generateRecordingKey(s, `select-${e.property}-option-${t}`)
      }, t))
    })
  });
}
function te({
  variantPropDefs: e,
  guids: t,
  allStateVariantProps: r,
  backingStateVariantProps: a,
  statePropertyValues: s,
  stateGroupGUID: o,
  forBubbledProps: l,
  containerWidth: d,
  viewOnly: c,
  hideIcon: u,
  sceneGraph: _,
  recordingKey: h,
  onSelectedPropertyValueHistoryChange: m
}) {
  let [g, f] = useState([]);
  useEffect(() => {
    f([]);
  }, [t]);
  useEffect(() => {
    m?.(g, t, l);
  }, [g, m, t, l]);
  return jsx(_$$q, {
    listItems: e,
    updateSelection: void 0,
    isDragDisabled: !0,
    renderListItem: (e, i) => jsx($$e6, {
      allStateVariantProps: r,
      backingStateVariantProps: a,
      containerWidth: d,
      forBubbledProps: l,
      guids: t,
      hideIcon: u,
      index: i,
      recordingKey: generateRecordingKey(h, 'row', t.join('-'), i),
      sceneGraph: _,
      selectedPropertyValueHistory: g,
      stateGroupGUID: o,
      statePropertyValues: s,
      updateHistory: f,
      variantPropDef: e,
      viewOnly: c
    }, i),
    recordingKey: h
  });
}
let ti = {
  __addNewValue__: !0
};
class ta extends a3 {}
class ts extends _$$c$ {}
let to = e => {
  let t = {};
  for (let r of e) {
    if (r.stateInfo.propertyValues) {
      for (let [e, n] of Object.entries(r.stateInfo.propertyValues)) {
        t[e] = t[e] || {};
        t[e][n] = (t[e][n] || 0) + 1;
      }
    }
  }
  return t;
};
function tl({
  OriginalComponent: e,
  ...t
}) {
  return jsx(e, {
    ...t,
    className: 'variant_prop_authoring_row--ui3ComboBoxInput--WyPgd ellipsis--ellipsis--Tjyfa'
  });
}
function td({
  variantPropDef: e,
  recordingKey: t
}) {
  let r;
  let {
    dropdownShown,
    allStates,
    propertySortOrder,
    propertyToFocusFullscreen,
    selectedStates,
    selectedStatesPropertyValues
  } = selectWithShallowEqual(e => ({
    dropdownShown: e.dropdownShown,
    allStates: ow(e),
    propertySortOrder: OC(e),
    propertyToFocusFullscreen: e.mirror.appModel.statePropertyToFocus,
    selectedStates: _f(e),
    selectedStatesPropertyValues: D1(e)
  }));
  let m = useDispatch<AppDispatch>();
  let {
    useGrid
  } = useContext(dD);
  let f = useRef(null);
  let E = useRef(null);
  let [T, I] = useState(null);
  let S = T != null;
  let v = useRef({});
  Object.keys(selectedStatesPropertyValues ?? {}).forEach(e => {
    v.current[e] = v.current[e] || createRef();
  });
  let [A, x] = useState('');
  let N = propertyToFocusFullscreen || A;
  useEffect(() => {
    if (dropdownShown || !N) return;
    let e = v.current?.[N]?.current;
    e && (e.select(), fullscreenValue.updateAppModel({
      statePropertyToFocus: ''
    }));
    x('');
  }, [N, dropdownShown]);
  let C = useCallback(e => {
    e.target === E.current && e.relatedTarget === null && e.stopPropagation();
  }, []);
  let w = useRef(null);
  function O(e, t) {
    (t = t.trim()) !== '' && selectedStates && (permissionScopeHandler.user('rename-variant-prop', () => {
      Fullscreen && withDeferredVariantPropDefBackfill(() => {
        for (let r of selectedStates) {
          let n = r.stateInfo.propertyValues || {};
          renameNode(r.symbol.node_id, formatPropertyValues({
            ...n,
            [e]: t
          }, propertySortOrder || []));
        }
      }, Fullscreen);
    }), fullscreenValue.commit());
  }
  useEffect(() => {
    S && f.current && (f.current.focus(), f.current.select());
    !S && w.current && (w.current(), w.current = null);
  }, [S]);
  let R = useMemo(() => to(allStates ?? []), [allStates]);
  let P = useMemo(() => to(selectedStates ?? []), [selectedStates]);
  let k = e.values;
  let M = useMemo(() => [...k, ti], [k]);
  let [F, U] = useState(void 0);
  let B = useCallback(e => U(Math.min(222, e)), [U]);
  if (!selectedStatesPropertyValues) return null;
  let G = e.name;
  let V = !selectedStatesPropertyValues[G];
  let H = !!E.current && E.current.offsetWidth < E.current.scrollWidth;
  let z = S ? jsx(RecordableInput, {
    'aria-label': getI18nString('design_systems.component_properties.property_name_edit', {
      propertyName: G
    }),
    'className': 'variant_prop_authoring_row--selectPropertyNameInput--T02iO variant_prop_authoring_row--selectPropertyName--g8Tfp raw_components--base--T7G0z raw_components--input--JB4Ix raw_components--singleRowHeight--dKM4t raw_components--border--SKh2u',
    'defaultValue': G,
    'forwardedRef': f,
    'onBlur': () => {
      T && (I(null), permissionScopeHandler.user('rename-variant-property', () => renameProperty(G, T, allStates ?? [], propertySortOrder ?? [])));
    },
    'onChange': e => I(e.currentTarget.value),
    'onContextMenu': e => {
      e.stopPropagation();
      e.preventDefault();
    },
    'onFocus': () => {
      f.current && (I(G), f.current.select());
    },
    'onKeyDown': e => {
      e.stopPropagation();
      (e.keyCode === KeyCodes.ESCAPE || e.keyCode === KeyCodes.ENTER) && (e.currentTarget.blur(), e.preventDefault(), useGrid && (w.current = () => {
        E.current?.focus();
      }));
    },
    'recordingKey': generateRecordingKey(t, `componentPropRowDefNameInput-${G}`)
  }) : jsx(RecordableButton, {
    'aria-label': getI18nString('design_systems.component_properties.property_name_edit', {
      propertyName: G
    }),
    'forwardedRef': E,
    'onClick': () => I(G),
    'className': 'variant_prop_authoring_row--selectPropertyName--g8Tfp',
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': H ? G : null,
    'recordingKey': generateRecordingKey(t, `componentPropRowDefName-${G}`),
    'children': jsx('div', {
      className: 'variant_prop_authoring_row--ui3SelectPropertyNameInner--eJnxr ellipsis--ellipsis--Tjyfa',
      children: G
    })
  });
  r = Object.keys(P[G] || {}).some(e => P[G][e] === R[G][e]);
  let W = {
    format: e => e !== ti ? e || EM_DASH : r ? getI18nString('design_systems.component_properties.rename_prompt') : getI18nString('design_systems.component_properties.add_new_prompt'),
    parse: e => e,
    autocomplete: e => {
      for (let t of k.sort((e, t) => e.length - t.length)) {
        if (t && t.startsWith(e)) return t;
      }
      return null;
    }
  };
  let K = jsxs(_$$ow, {
    value: {
      inputComponent: tl
    },
    children: [jsxs(ta, {
      ariaLabel: getI18nString('design_systems.component_properties.property_value_edit', {
        propertyName: G
      }),
      className: V ? 'variant_prop_authoring_row--missingPropertyComboBox--9wy-0' : 'variant_prop_authoring_row--propertyComboBox--7f6TZ',
      dispatch: m,
      dropdownShown,
      formatter: W,
      forwardedRef: v.current[G],
      icon: jsx(_$$r3, {}),
      id: `states-property-select-${G}`,
      onChange: e => {
        permissionScopeHandler.user('add-variant-property', () => {
          e !== ti ? O(G, e) : (O(G, getI18nString('design_systems.component_properties.new_value')), x(G));
        });
      },
      property: selectedStatesPropertyValues[G] || '',
      recordingKey: generateRecordingKey(t, `propertyComboBox-${G}`),
      ...(F && F > 0 ? {
        dropdownWidth: F,
        dropdownAlignment: 'right'
      } : {}),
      children: [k.map(e => jsx(ts, {
        value: e,
        recordingKey: generateRecordingKey(t, `value-${e}`)
      }, e)), jsx(sK, {}), jsx(ts, {
        value: ti,
        recordingKey: generateRecordingKey(t, 'value-AddNewValue')
      }, 'add-new-value')]
    }), jsx(_$$Q, {
      getIcon: () => void 0,
      setMaxWidth: B,
      options: M,
      formatOption: W.format
    })]
  });
  let Y = getI18nString('design_systems.component_properties.missing_property');
  let $ = V ? jsx(eb, {
    'data-tooltip-show-left': !0,
    'text': Y
  }) : null;
  return useGrid ? jsx(Jg, {
    hideGrabber: !0,
    htmlAttributes: {
      onFocus: C
    },
    icon: $,
    leftInput: z,
    rightInput: K
  }) : jsx(fn, {
    appendedClassName: 'variant_prop_authoring_row--ui3PropertyRow--Ouo2e',
    leftLabel: null,
    leftInput: z,
    rightLabel: null,
    rightInput: K,
    icon: $
  }, G);
}
let tc = ms;
let tu = c$;
function tp({
  defs: e,
  guids: t,
  selectedIndices: r,
  onSelectIndices: s,
  isInStateAuthoringView: o,
  recordingKey: l
}) {
  let d = useSelector(e => ow(e) ?? []);
  let c = useSelector(selectContainingStateGroupId);
  let u = useSelector(e => OC(e) ?? []);
  let _ = useSelector(e => e.dropdownShown);
  let m = _?.type === ex;
  let g = r.length === e.length;
  let f = e => !g && (e?.key === 'Backspace' || e?.key === 'Delete') && (T(), !0);
  let E = useHandleKeyboardEvent(l, 'keydown', e => {
    f(e);
  });
  let b = useHandleInputEvent(`${l}.fullscreen`, 'keydown', e => {
    f(e.event) && e.accept();
  });
  let T = useCallback(() => {
    if (!r.length || !c) return;
    let t = r.map(t => e[t].name);
    permissionScopeHandler.user('delete-variant-props', () => deleteProperties(t, d, u, c));
  }, [d, c, e, u, r]);
  let I = useCallback(e => {
    let t = e.map(e => e.name);
    permissionScopeHandler.user('reorder-variant-props', () => {
      d.forEach(e => {
        let r = e.stateInfo.propertyValues;
        r && renameNode(e.symbol.node_id, formatPropertyValues(r, t));
      });
    });
    fullscreenValue.commit();
  }, [d]);
  let S = useRef(null);
  useEffect(() => {
    r.length ? S.current?.focus() : S.current?.blur();
  }, [r]);
  let {
    setIsDraggingSomePropDef
  } = w();
  let A = useLabConfiguration(labConfigurations.useGridPart2);
  return jsxs(KeyboardReceiver, {
    handleKeyDown: b,
    ref: S,
    name: 'variant-props-list',
    focusOnMount: !0,
    children: [jsx(dD.Provider, {
      value: {
        useGrid: A
      },
      children: jsx(_$$q, {
        listItems: e,
        selectedIndices: r,
        updateSelection: s,
        isDragDisabled: o,
        onChange: I,
        onDragStart: () => setIsDraggingSomePropDef(!0),
        onDragEnd: () => setIsDraggingSomePropDef(!1),
        renderListItem: (r, i, a, d, c, u, _) => o ? jsx(td, {
          variantPropDef: r,
          recordingKey: generateRecordingKey(l, 'row', i)
        }, A ? void 0 : i) : jsx(ew, {
          componentPropDef: r,
          guids: t,
          index: i,
          isDragging: d,
          isSelected: a,
          onKeyDown: E,
          onPropertyMouseDown: c,
          onPropertyMouseMove: u,
          onPropertyMouseUp: _,
          recordingKey: generateRecordingKey(l, 'row', i),
          selectRow: () => s([i]),
          singletonRow: e.length === 1
        }, A ? void 0 : i),
        recordingKey: l
      })
    }), m && !!r.length && !g && jsx(tc, {
      style: _.data.position,
      positionFixed: !0,
      children: jsx(tu, {
        onClick: T,
        recordingKey: 'deleteProp',
        children: renderI18nText('design_systems.component_properties.delete_property', {
          numSelected: r.length
        })
      })
    })]
  });
}
export let $$th0 = 20;
export function $$tm3({
  guids: e,
  propDimension: t,
  containerWidth: r,
  shouldHideInstanceTitleButtons: i,
  viewOnlyMode: a,
  hideIcon: s,
  highlightNodesOnHover: o,
  hideErrors: l,
  resettableInstanceOverrides: d,
  instanceNameDisplayOverride: c,
  forBubbledProps: u,
  recordingKey: _,
  errorBoxFlushWithContainer: h,
  entrypointForInstanceSwapPicker: g
}) {
  let {
    typedPropDefsExcludingHidden,
    variantPropDefs,
    assignmentValuesByDefId,
    allStateVariantProps,
    backingStateVariantProps,
    statePropertyValues,
    productComponentGUID
  } = useComponentPropDefinitions(e, t);
  let A = useSceneGraphSelector();
  if (!typedPropDefsExcludingHidden.length && !variantPropDefs.length) return null;
  let N = jsx(iN, {
    containerWide: r === PanelWidth.WIDE,
    canCollapse: u,
    resettableInstanceOverrides: d,
    instanceAndSublayerGUIDs: e,
    instanceNameDisplayOverride: c,
    shouldHideButtons: i,
    highlightNodesOnHover: o,
    recordingKey: _
  });
  let C = jsx($$tE2, {
    allStateVariantProps,
    assignmentValues: assignmentValuesByDefId,
    backingStateVariantProps,
    containerWidth: r,
    entrypointForInstanceSwapPicker: g,
    errorBoxFlushWithContainer: h,
    forBubbledProps: !!u,
    guids: e,
    hideErrors: l,
    hideIcon: s,
    productComponentGUID,
    propDimension: t,
    recordingKey: _,
    sceneGraph: A,
    statePropertyValues,
    typedPropDefs: typedPropDefsExcludingHidden,
    variantPropDefs,
    viewOnlyMode: a
  });
  return u ? jsx($$tT4, {
    row: N,
    isChevronAlwaysVisible: !0,
    recordingKey: generateRecordingKey(_, 'instancePanelTitleCollapsibleRow', e.join('-')),
    children: jsx('div', {
      className: Og,
      children: C
    })
  }) : jsxs('div', {
    children: [N, jsx('div', {
      className: Og,
      children: C
    })]
  });
}
export var $$tg6 = (e => (e[e.ALL_PROPS = 0] = 'ALL_PROPS', e[e.VARIANT_PROPS = 1] = 'VARIANT_PROPS', e[e.TYPED_PROPS = 2] = 'TYPED_PROPS', e))($$tg6 || {});
export function $$tf1({
  propDimension: e,
  guids: t,
  containerWidth: r,
  viewOnlyMode: i,
  hideIcon: a,
  hideErrors: s,
  forBubbledProps: o,
  recordingKey: l,
  errorBoxFlushWithContainer: d,
  splitVariantAndTypedProps: c,
  enableHidingOverflowRowsInUI3: u,
  entrypointForInstanceSwapPicker: p,
  canAutoSuggestProps: _ = !1,
  onSelectedPropertyValueHistoryChange: h,
  onTypedPropChange: g
}) {
  let {
    typedPropDefsExcludingHidden,
    variantPropDefs,
    assignmentValuesByDefId,
    allStateVariantProps,
    backingStateVariantProps,
    statePropertyValues,
    productComponentGUID
  } = useComponentPropDefinitions(t, e);
  let v = useSceneGraphSelector();
  return jsx($$tE2, {
    allStateVariantProps,
    assignmentValues: assignmentValuesByDefId,
    backingStateVariantProps,
    canAutoSuggestProps: _,
    containerWidth: r,
    enableHidingOverflowRowsInUI3: u,
    entrypointForInstanceSwapPicker: p,
    errorBoxFlushWithContainer: d,
    forBubbledProps: !!o,
    guids: t,
    hideErrors: s,
    hideIcon: a,
    onSelectedPropertyValueHistoryChange: h,
    onTypedPropChange: g,
    productComponentGUID,
    propDimension: e,
    recordingKey: l,
    sceneGraph: v,
    splitVariantAndTypedProps: c,
    statePropertyValues,
    typedPropDefs: typedPropDefsExcludingHidden,
    variantPropDefs,
    viewOnlyMode: i
  });
}
export function $$tE2({
  typedPropDefs: e,
  variantPropDefs: t,
  propDimension: r,
  enableHidingOverflowRowsInUI3: s,
  ...o
}) {
  let [l, c] = useState(void 0);
  let [u, p] = useState([]);
  let [_, m] = useState(!1);
  let g = useSelector(i$) === StateHierarchy.STATE && r === DefinitionAssignment.DEFINITION;
  useEffect(() => {
    c(void 0);
    p([]);
  }, [t, e]);
  let f = !!t.length;
  let E = !!e.length && !g;
  let b = {
    shouldShowVariantProps: f,
    shouldShowTypedProps: E,
    selectedSection: l,
    selectedPropIndices: u,
    onSelectProps: (e, t) => {
      c(e);
      p(t);
    },
    isInStateAuthoringView: g
  };
  if (s) {
    let {
      numHiddenRows,
      variantPropDefsToShow,
      typedPropDefsToShow
    } = function (e, t, r, n, i) {
      let a = (t ? n.length : 0) + (r ? i.length : 0);
      if (e || a <= 5) {
        return {
          numHiddenRows: 0,
          variantPropDefsToShow: t ? n : [],
          typedPropDefsToShow: r ? i : []
        };
      }
      let s = 4;
      let o = n;
      t ? s -= (o = n.slice(0, 4)).length : o = [];
      return {
        numHiddenRows: a - 4,
        variantPropDefsToShow: o,
        typedPropDefsToShow: r ? i.slice(0, s) : []
      };
    }(_, f, E, t, e);
    return jsxs(Fragment, {
      children: [jsx(ty, {
        variantPropDefs: variantPropDefsToShow,
        typedPropDefs: typedPropDefsToShow,
        propDimension: r,
        ...b,
        ...o
      }), numHiddenRows > 0 && !_ && jsx($$tb5, {
        label: getI18nString('design_systems.component_properties.show_more_property_rows', {
          count: numHiddenRows
        }),
        onClick: () => m(!0)
      })]
    });
  }
  return jsx(ty, {
    variantPropDefs: t,
    typedPropDefs: e,
    propDimension: r,
    ...b,
    ...o
  });
}
function ty({
  shouldShowVariantProps: e,
  shouldShowTypedProps: t,
  selectedSection: r,
  selectedPropIndices: a,
  onSelectProps: s,
  isInStateAuthoringView: o,
  propDimension: d,
  variantPropDefs: c,
  typedPropDefs: u,
  guids: _,
  assignmentValues: h,
  allStateVariantProps: m,
  backingStateVariantProps: f,
  statePropertyValues: y,
  productComponentGUID: b,
  forBubbledProps: T,
  hideErrors: I,
  containerWidth: S,
  viewOnlyMode: N,
  hideIcon: w,
  recordingKey: L,
  errorBoxFlushWithContainer: P,
  splitVariantAndTypedProps: D,
  sceneGraph: k,
  inPlayground: M,
  instanceSwapPickerInitialHeight: F,
  instanceSwapPickerInitialPosition: j,
  entrypointForInstanceSwapPicker: U,
  canAutoSuggestProps: B = !1,
  onSelectedPropertyValueHistoryChange: G,
  onTypedPropChange: V
}) {
  let H = findSingleInstanceId(_, k);
  let z = useComponentBackingGUID([H], d);
  let {
    autosuggestedValues,
    isLoading
  } = useAutosuggestProps(H, z, B, k);
  let [Y, $] = useState(!1);
  return jsx(C, {
    children: jsxs(Fragment, {
      children: [e && d === DefinitionAssignment.DEFINITION && jsx(tp, {
        defs: c,
        guids: _,
        selectedIndices: r === InstanceType.VARIANT ? a : [],
        onSelectIndices: e => s(InstanceType.VARIANT, e),
        isInStateAuthoringView: o,
        recordingKey: generateRecordingKey(L, 'propDefs', InstanceType.VARIANT)
      }), e && b && d === DefinitionAssignment.ASSIGNMENT && jsx(te, {
        allStateVariantProps: m,
        backingStateVariantProps: f,
        containerWidth: S,
        forBubbledProps: T,
        guids: _,
        hideIcon: w,
        onSelectedPropertyValueHistoryChange: G,
        recordingKey: generateRecordingKey(L, 'propDefs', InstanceType.VARIANT),
        sceneGraph: k,
        stateGroupGUID: b,
        statePropertyValues: y,
        variantPropDefs: c,
        viewOnly: N === 0 || N === 1
      }), e && t && D && jsx('div', {
        className: 'props_section--divider--5xEyL'
      }), t && d === DefinitionAssignment.DEFINITION && jsx(eP, {
        defs: u,
        guids: _,
        selectedIndices: r === InstanceType.TYPED ? a : [],
        onSelectIndices: e => s(InstanceType.TYPED, e),
        recordingKey: generateRecordingKey(L, 'propDefs', InstanceType.TYPED)
      }), t && d === DefinitionAssignment.ASSIGNMENT && jsx(_$$c, {
        assignmentValues: h,
        containerWidth: S,
        entrypointForInstanceSwapPicker: U,
        forBubbledProps: T,
        guids: _,
        hideIcon: w,
        inPlayground: M,
        instanceSwapPickerInitialHeight: F,
        instanceSwapPickerInitialPosition: j,
        onChange: V,
        recordingKey: generateRecordingKey(L, 'propDefs', InstanceType.TYPED),
        sceneGraph: k,
        typedPropDefs: u,
        viewOnly: N === 0 || N === 2
      }), !I && jsx(aq, {
        flushWithContainer: P
      }), B && H && jsx(A, {
        autosuggestedValues,
        instanceGUID: H,
        sceneGraph: k,
        isLoading,
        isHovered: Y,
        setIsHovered: $,
        productComponentGUID: z
      })]
    })
  });
}
export function $$tb5({
  label: e,
  onClick: t
}) {
  return jsx('button', {
    'onClick': t,
    'aria-label': e,
    'children': jsx(Ad, {
      label: null,
      input: jsx('div', {
        className: 'props_section--ui3ShowMoreText--9ZaYD',
        children: e
      })
    })
  });
}
export function $$tT4({
  row: e,
  isCollapsedByDefault: t,
  isChevronAlwaysVisible: r,
  children: a
}) {
  let [l, d] = useState(t ?? !1);
  let c = jsxs(_$$S.div, {
    className: 'props_section--ui3CollapsibleRowWrapper--0eG4n',
    onMouseDown: () => d(!l),
    children: [jsx('div', {
      className: u()('props_section--ui3CollapsibleRowIcon--AMo-v', {
        'props_section--ui3CollapsibleRowIconAlwaysVisible--BPU5Y': r
      }),
      children: l ? jsx(_$$k, {}) : jsx(_$$O, {})
    }), e]
  });
  return l ? c : jsxs(Fragment, {
    children: [c, a]
  });
}
export const qC = $$th0;
export const e6 = $$tf1;
export const tO = $$tE2;
export const ME = $$tm3;
export const R$ = $$tT4;
export const t8 = $$tb5;
export const BK = $$tg6;