import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deepEqual } from "../905/382883";
import { UU } from "../figma_app/397267";
import { VariableDataType, StyleVariableOperation, CopyPasteType, VariablesBindings, VariableResolvedDataType, PropertyScope, HandoffBindingsCpp } from "../figma_app/763686";
import { yG } from "../905/859698";
import { permissionScopeHandler } from "../905/189185";
import { areSessionLocalIDsEqual } from "../905/871411";
import { convertVariableIdToKiwi, convertKiwiToVariableIdString } from "../905/805904";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, atomStoreManager } from "../figma_app/27355";
import { useMemoStable, useMemoShallow } from "../905/19536";
import m from "../vendor/239910";
import f from "../vendor/523035";
import { debugState } from "../905/407919";
import { selectWithShallowEqual } from "../905/103090";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { v4, xv } from "../figma_app/655139";
import { uQ } from "../figma_app/311375";
import { Q } from "../905/217916";
import { useDevModeFocusId } from "../figma_app/88239";
import { showModalHandler } from "../905/156213";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { trackDefinedFileEvent } from "../figma_app/314264";
import { MIXED_MARKER, normalizeValue, isValidValue, isInvalidValue } from "../905/216495";
import { b as _$$b } from "../figma_app/755529";
import { useUpdateSelectionProperty, useSelectionProperty, useSelectionPropertyValue } from "../905/275640";
import { u as _$$u, G6, jI, iC } from "../figma_app/852050";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { I7, P1 } from "../figma_app/745458";
import { selectSceneGraph, $u } from "../figma_app/889655";
import { LibraryTabEnum, getSubscribedVariableInfo, PrimaryWorkflowEnum } from "../figma_app/633080";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { executeWithDSAAction } from "../905/135117";
import { r6 } from "../905/542608";
import { T as _$$T } from "../figma_app/472024";
import { q } from "../905/296913";
import { CP } from "../figma_app/481279";
import { Ip, cn } from "../figma_app/394327";
import { Ev } from "../figma_app/216057";
import { oz } from "../figma_app/406976";
var g = m;
var E = f;
let $$Y8 = "INHERIT";
let $$$10 = "DEFAULT";
let $$X4 = "MIXED";
let $$q12 = "DELETED";
let $$J11 = "https://help.figma.com/hc/articles/15343816063383#conflicts";
export var $$Z19 = (e => (e[e.LEARN_MORE = 0] = "LEARN_MORE", e[e.REVIEW_UPDATES = 1] = "REVIEW_UPDATES", e))($$Z19 || {});
export function $$Q30(e, t) {
  return {
    type: VariableDataType.ALIAS,
    resolvedType: e,
    value: t
  };
}
function ee(e) {
  let t = e[0];
  if (!t) return null;
  if (e.length >= 2) {
    for (let t = 1; t < e.length; t++) if (!deepEqual(e[t], e[0])) return MIXED_MARKER;
  }
  return t.isMixed ? MIXED_MARKER : t;
}
export function $$et7() {
  let e = selectWithShallowEqual(e => {
    let t = e.mirror.selectionProperties.variableConsumptionInfo;
    return normalizeValue(t)?.variableConsumptionMap || {};
  });
  let t = useUpdateSelectionProperty("variableConsumptionInfo");
  return {
    variableConsumptionMap: e,
    setVariableConsumptionMap: useCallback((e, r = yesNoTrackingEnum.YES) => {
      t({
        variableConsumptionMap: e
      }, r);
    }, [t])
  };
}
export function $$er24(e) {
  let t = useSelector(selectSceneGraph);
  let [r] = useSelectionProperty("variableConsumptionInfo");
  let a = useCallback(r => {
    for (let n of e) {
      if (!r) {
        executeWithDSAAction(StyleVariableOperation.VARIABLE_ATTACH, CopyPasteType.DIRECT, () => {
          permissionScopeHandler.user("clear-variant-variable-binding", () => {
            t.get(n)?.clearVariableConsumption("VARIANT_PROPERTIES");
          });
        });
        return;
      }
      executeWithDSAAction(StyleVariableOperation.VARIABLE_DETACH, CopyPasteType.DIRECT, () => {
        permissionScopeHandler.user("set-variant-variable-binding", () => {
          t.get(n)?.updateVariableConsumption("VARIANT_PROPERTIES", r);
        });
      });
    }
  }, [e, t]);
  if (0 === e.length) return {
    variantProperties: void 0,
    setVariantProperties: a
  };
  let s = ee(e.map(e => normalizeValue(r)?.bubbledVariableConsumptionMaps?.[e]?.VARIANT_PROPERTIES ?? null));
  return {
    variantProperties: s === MIXED_MARKER ? {
      isMixed: !0
    } : normalizeValue(s),
    setVariantProperties: a
  };
}
export function $$en2() {
  return normalizeValue(_$$b("variableConsumptionMap")) || {};
}
function ei(e) {
  return useSelectionPropertyValue(1 === e ? "focusNodeVariableConsumptionInfo" : "variableConsumptionInfo");
}
export function $$ea20(e = 0) {
  let t = ei(e);
  let r = useMemoStable(() => normalizeValue(t)?.variableSetKeyToModeData || {}, [t]);
  let n = $$ed15(e);
  let i = $$e_18();
  return useMemoShallow(() => {
    for (let [e, t] of Object.entries(n)) if (!r[e] && i[e]) {
      let n = i[e];
      if (!n?.modes?.find(e => e.id === t)) continue;
      r[e] = function (e, t) {
        return {
          collectionID: e.node_id,
          collectionName: e.name,
          modeOptions: e.modes?.map(t => ({
            modeId: {
              guid: t.id,
              collectionKey: e.key,
              extendedCollectionId: e.isExtension ? e.node_id : null
            },
            name: t.name,
            sortPosition: t.sortPosition,
            isCompatible: !0,
            collectionName: e.name
          })) ?? [],
          explicitMode: t ? {
            guid: t,
            collectionKey: e.key,
            extendedCollectionId: e.isExtension ? e.node_id : null
          } : null,
          inheritMode: null,
          libraryKey: e.library_key
        };
      }(n, t);
    }
    if (!getFeatureFlags().ds_extended_collections) return r;
    let e = {};
    Object.values(i).forEach(t => {
      let r = Ip(t);
      r && (e[r] || (e[r] = []), e[r].push(t));
    });
    Object.entries(e).forEach(([e, t]) => {
      if (e in r) {
        let n = r[e];
        if (!n || !n.modeOptions) return;
        let i = n.modeOptions;
        for (let e of t) if (e.isExtension) {
          let t = i.filter(t => !!t.modeId.extendedCollectionId && (t.modeId.collectionKey === e.key || t.modeId.extendedCollectionId === e.node_id));
          t.length > 0 ? t.forEach(t => {
            t.modeId.extendedCollectionId = e.node_id;
          }) : e.modes?.forEach(t => {
            i.push({
              modeId: {
                guid: t.id,
                collectionKey: e.key,
                extendedCollectionId: e.node_id
              },
              name: t.name,
              sortPosition: t.sortPosition,
              isCompatible: !0,
              collectionName: e.name
            });
          });
        }
      }
    });
    return r;
  }, [i, n, r]);
}
let es = getFeatureFlags().ds_modes_util_include_subtree_by_default;
export function $$eo5({
  includeSubtree: e = es
} = {}) {
  let t = useSelectionPropertyValue("variableConsumptionInfo");
  return useMemoStable(() => (e ? normalizeValue(t)?.variableSetKeyToModeIncludingSubtree : normalizeValue(t)?.variableSetKeyToMode) ?? {}, [t, e]);
}
export function $$el31(e) {
  let t = function (e) {
    let t = _$$u(e);
    let r = $$ea20(0);
    let n = G6(t?.variableSetId);
    if (!t || !n) return null;
    let i = cn(n);
    return r?.[i] ?? null;
  }(e);
  let r = G6(t?.collectionID);
  if (!t || !r) return null;
  let n = t.modeOptions;
  let i = t.explicitMode;
  let a = t.inheritMode;
  let s = i ?? a;
  return "MIXED" === s ? null : n.find(e => s ? e.modeId.guid === s.guid : e.modeId.guid === r.defaultModeID) ?? null;
}
export function $$ed15(e = 0) {
  let t = ei(e);
  return useMemoStable(() => normalizeValue(t)?.variableSetKeyToPageLevelPresetMode || {}, [t]);
}
export function $$ec17(e = 0) {
  let t = useDispatch();
  let r = useSelectionProperty("numSelectedByType")[0];
  let s = function () {
    let e = useDevModeFocusId();
    let t = useDeepEqualSceneValue((e, t) => {
      let r = e.get(t);
      return r ? r.type : null;
    }, e);
    if (t) return {
      [t]: 1
    };
  }();
  let c = 1 === e ? s : r;
  let u = $$ea20(e);
  let p = eR();
  let _ = 1 !== e && p;
  let h = debugState.getState();
  let m = h.openFile?.key;
  return useCallback((r, n, i) => {
    if (n === $$X4 || n === $$q12) return;
    let s = u[yG(r)];
    let p = s?.explicitMode;
    let g = c ? E()(Object.values(c)) : 0;
    permissionScopeHandler.user("set-explicit-variable-mode", () => {
      1 === e ? VariablesBindings.setExplicitVariableModeForDevModeFocusNode(r, n === $$Y8 || n === $$$10 ? null : n) : VariablesBindings.setExplicitVariableModeForSelection(r, n === $$Y8 || n === $$$10 ? null : n, !0);
    });
    let f = s?.modeOptions.find(e => deepEqual(e.modeId, n));
    c && isValidValue(c) && trackDefinedFileEvent("variables.explicit_mode_changed", m ?? "", h, {
      numSelected: g,
      numSelectedFrames: c.FRAME ?? 0,
      numSelectedInstances: c.INSTANCE ?? 0,
      numSelectedRectangles: c.ROUNDED_RECTANGLE ?? 0,
      numSelectedSymbols: c.SYMBOL ?? 0,
      collection_id: s?.collectionID,
      prev_mode_id: p && "MIXED" !== p ? p.guid.toString() : "",
      new_mode_id: f ? f.modeId.guid.toString() : "",
      sort_position: f && f.sortPosition ? f.sortPosition : ""
    });
    Object.values(u).some(e => e.modeOptions.some(e => deepEqual(e.modeId, n) && !e.isCompatible)) && n !== $$Y8 && n !== $$$10 && i && (_ ? t(VisualBellActions.enqueue({
      message: getI18nString("variables.visual_bell.variables_incompatible_modes_needs_updates", {
        modeName: i
      }),
      button: {
        text: getI18nString("variables.modes.option.review_updates"),
        action: () => {
          t(showModalHandler({
            type: _$$T,
            data: {
              initialTab: LibraryTabEnum.UPDATES,
              entrypoint: r6.INCMPATIBLE_MODES_VISUAL_BELL
            }
          }));
        }
      }
    })) : t(VisualBellActions.enqueue({
      message: getI18nString("variables.visual_bell.variables_incompatible_modes_no_updates", {
        modeName: i
      })
    })));
  }, [t, m, _, u, c, h, e]);
}
export function $$eu22(e) {
  let t = $$ea20(e);
  return useMemoShallow(() => Object.fromEntries(Object.entries(t).filter(([e, t]) => !t.libraryKey && t.modeOptions.length > 1)), [t]);
}
export function $$ep1(e) {
  let t = $$ea20(e);
  return useMemoShallow(() => Object.fromEntries(Object.entries(t).filter(([e, t]) => !!t.libraryKey && t.modeOptions.length > 1)), [t]);
}
export function $$e_18() {
  let e = jI();
  return useMemoShallow(() => {
    if ("loaded" === e.status) {
      let t = e.data?.items.filter(e => e.modes && e.modes.length > 1);
      return g()(t, e => e.key);
    }
    return {};
  }, [e]);
}
export var $$eh3 = (e => (e[e.SELECTION = 0] = "SELECTION", e[e.FOCUS_NODE = 1] = "FOCUS_NODE", e))($$eh3 || {});
export function $$em27(e) {
  return Object.keys($$ea20(e)).length > 0;
}
export function $$eg9(e) {
  let t = $$eu22(e);
  let r = $$ep1(e);
  return useMemo(() => Object.values({
    ...t,
    ...r
  }).reduce((e, t) => {
    let r = t.explicitMode ?? t.inheritMode;
    if (!r || r === $$X4) return e;
    let n = t.modeOptions.find(e => e.modeId.guid === r.guid);
    n && e.push(n.name);
    return e;
  }, []), [t, r]);
}
export function $$ef23(e, t) {
  let r = $$eu22(t);
  let n = $$ep1(t);
  let i = $$e_18();
  return Object.values(r).length > 0 || Object.values(n).length > 0 || e && Object.values(i).length > 0;
}
export function $$eE13() {
  let e = eR();
  let t = useAtomWithSubscription(I7);
  let r = useSelector(e => $u(e));
  return r && e ? 1 : !r && t ? 1 : 0;
}
export function $$ey28(e, t, r) {
  let i;
  let {
    variableConsumptionMap,
    setVariableConsumptionMap
  } = $$et7();
  let l = _$$b("guid");
  let d = $$en2();
  let p = _$$b("responsiveTextStyleVariants");
  let _ = p && !isInvalidValue(p) && void 0 !== r ? p[r] : void 0;
  let h = t && isValidValue(l) && areSessionLocalIDsEqual(t, l);
  return {
    consumedVariable: (i = h && _ ? normalizeValue(_.variableConsumptionMap) || {} : h ? d : variableConsumptionMap) && ee(e.map(e => i[e])),
    updateVariableConsumption: useCallback((t, r) => {
      let n = {};
      let a = {
        modeContext: r?.modeContext,
        attachmentSurfaceKey: r?.entryPoint ?? "",
        currentColor: r?.currentColor,
        currentFloat: r?.currentFloat,
        queryId: r?.queryId,
        sessionId: r?.sessionId,
        property: r?.property
      };
      e.forEach(e => {
        let r = i[e];
        if (r && !r?.isMixed && r.type === VariableDataType.ALIAS) {
          let e = convertVariableIdToKiwi(r.value);
          a.previousVariableKey = e?.assetRef?.key;
        }
        n[e] = t;
        oz(e, t, a);
      });
      executeWithDSAAction(StyleVariableOperation.VARIABLE_ATTACH, CopyPasteType.DIRECT, () => {
        setVariableConsumptionMap(n);
      });
    }, [setVariableConsumptionMap, e, i]),
    clearVariableConsumption: useCallback((t = yesNoTrackingEnum.YES) => {
      let r = {};
      e.forEach(e => {
        r[e] = null;
      });
      executeWithDSAAction(StyleVariableOperation.VARIABLE_DETACH, CopyPasteType.DIRECT, () => {
        setVariableConsumptionMap(r, t);
      });
    }, [setVariableConsumptionMap, e])
  };
}
function eb(e) {
  if (e && isValidValue(e)) {
    if (e.type === VariableDataType.EXPRESSION && 1 === e.value.expressionArguments.length) {
      let t = e.value.expressionArguments[0];
      if (t?.type === VariableDataType.ALIAS) return t.value;
    }
    if (e.type === VariableDataType.FONT_STYLE) {
      let t = e.value.asString ?? e.value.asFloat;
      if (t?.type === VariableDataType.ALIAS) return t.value;
    }
    if (e.type === VariableDataType.ALIAS) return e.value;
  }
}
export function $$eT26(e, t, r, n) {
  return $$eS25(e, function (e, t) {
    if (!(void 0 === e || 0 === e && !t || isInvalidValue(e))) return {
      type: VariableDataType.FLOAT,
      resolvedType: VariableResolvedDataType.FLOAT,
      value: e
    };
  }(t, !0), r, n);
}
export function $$eI16(e, t, r, n) {
  return $$eS25(e, function (e) {
    if (e) return {
      type: VariableDataType.STRING,
      resolvedType: VariableResolvedDataType.STRING,
      value: e
    };
  }(t), r, n);
}
export function $$eS25(e, t, r, n) {
  let i = uQ();
  let a = Q();
  let s = isDevHandoffEditorType();
  let l = v4();
  let {
    variableConsumptionMap
  } = $$et7();
  let c = r || variableConsumptionMap;
  let u = eb(c && ee([e].map(e => c[e])) || null);
  let p = CP[e] ?? PropertyScope.ALL_SCOPES;
  let _ = !u && s && i && t && !n ? HandoffBindingsCpp.getIdsOfVariablesWithValue(i, [p], {
    type: t.type,
    value: t.value
  }) : [];
  let h = _$$u(u);
  if (!h) return _.length > 0 && t ? {
    matchingVars: {
      ids: _,
      rawValue: t
    }
  } : {};
  let m = xv(h, l.id);
  let g = s && "code" === a.inspectionMode && m ? m : h?.name;
  return {
    variable: h,
    variableDisplayName: g
  };
}
function ev(e, t, r) {
  if (!e) return {};
  let {
    colorVar,
    color,
    opacity
  } = t;
  if (colorVar?.value?.alias) return {
    boundVar: convertKiwiToVariableIdString(colorVar.value.alias)
  };
  if (!color || !r) return {};
  let s = iC(e, Array.from(r), {
    type: VariableDataType.COLOR,
    resolvedType: VariableResolvedDataType.COLOR,
    value: {
      ...color,
      a: color.a * (opacity ?? 1)
    }
  });
  return s ? {
    matchingVars: {
      ids: s,
      rawValue: {
        type: VariableDataType.COLOR,
        value: {
          ...color,
          a: color.a * (opacity ?? 1)
        }
      }
    }
  } : {};
}
export function $$eA14(e, t) {
  let r = uQ();
  let n = Q();
  let i = v4();
  let a = isDevHandoffEditorType();
  let {
    boundVar,
    matchingVars
  } = ev(r, e, t);
  return eC(_$$u(boundVar), {
    variableId: boundVar,
    matchingVars
  }, i.id, a, n.inspectionMode);
}
export function $$ex29(e, t, r, n, i) {
  let a = function (e, t) {
    let r = function (e, t) {
      let r = e.variableScope ? new Set([e.variableScope]) : void 0;
      let {
        boundVar,
        matchingVars
      } = ev(t, e.paint, r);
      return {
        variableId: boundVar,
        matchingVars
      };
    }(e, t);
    if (!r.variableId) return {
      variable: null,
      variableData: r
    };
    let n = atomStoreManager.get(Ev(r.variableId));
    if (n) return {
      variable: n,
      variableData: r
    };
    let i = VariablesBindings.getSubscribedVariableInfo(r.variableId);
    return i ? {
      variable: getSubscribedVariableInfo(i),
      variableData: r
    } : {
      variable: null,
      variableData: r
    };
  }(e, t);
  let s = eC(a.variable, a.variableData, r, n, i);
  return {
    ...e,
    variable: s
  };
}
export function $$eN6(e, t, r, n, i) {
  return e.map(e => e.type === q.STYLE ? function (e, t, r, n, i) {
    let a = e.paints.map(e => $$ex29(e, t, r, n, i));
    return {
      ...e,
      paints: a
    };
  }(e, t, n.id, i, r) : $$ex29(e, t, n.id, i, r));
}
function eC(e, t, r, n, i) {
  let a = xv(e, r);
  let s = n && "code" === i && a ? a : e?.name;
  return {
    variable: e,
    variableDisplayName: s,
    matchingVars: n ? t.matchingVars : void 0
  };
}
export function $$ew21(e) {
  let {
    consumedVariable
  } = $$ey28([e]);
  let r = eb(consumedVariable);
  return _$$u(r);
}
export function $$eO0(e) {
  return useSelector(t => {
    let r = normalizeValue(t.mirror.selectionProperties.variableConsumptionInfo)?.variableNotMatchingSetValue || {};
    let n = e.map(e => {
      let t = r[e] ?? void 0;
      return UU(t) && "isMixed" in t ? MIXED_MARKER : t;
    });
    return 0 === n.length ? void 0 : 1 === n.length ? n[0] : n.every(e => deepEqual(e, n[0])) ? n[0] : MIXED_MARKER;
  });
}
function eR() {
  let {
    componentUpdatesForSelection,
    stateGroupUpdatesForSelection,
    styleUpdatesForSelection,
    variableSetUpdatesForSelection,
    libraryAssetUpdatesForSelection
  } = function () {
    let {
      componentUpdatesForCurrentPage,
      stateGroupUpdatesForCurrentPage,
      styleUpdatesForCurrentPage,
      variableSetUpdatesForCurrentPage,
      libraryAssetUpdatesForCurrentPage
    } = useAtomWithSubscription(P1);
    let a = useSelectionPropertyValue("directlySubscribedAssetKeys");
    let s = [];
    let o = [];
    let l = [];
    let d = [];
    let c = [];
    if (a && !isInvalidValue(a)) {
      let u = new Set(a);
      s = componentUpdatesForCurrentPage.filter(e => u.has(e.component_key ?? ""));
      o = stateGroupUpdatesForCurrentPage.filter(e => u.has(e.key));
      l = styleUpdatesForCurrentPage.filter(e => u.has(e.key));
      d = variableSetUpdatesForCurrentPage.filter(e => u.has(e.key));
      c = libraryAssetUpdatesForCurrentPage.filter(e => {
        if (e.type === PrimaryWorkflowEnum.CODE_COMPONENT) return u.has(e.key);
      });
    }
    return {
      componentUpdatesForSelection: s,
      stateGroupUpdatesForSelection: o,
      styleUpdatesForSelection: l,
      variableSetUpdatesForSelection: d,
      libraryAssetUpdatesForSelection: c
    };
  }();
  return componentUpdatesForSelection.length > 0 || stateGroupUpdatesForSelection.length > 0 || styleUpdatesForSelection.length > 0 || libraryAssetUpdatesForSelection.length > 0 || variableSetUpdatesForSelection.length > 0;
}
export const Ek = $$eO0;
export const FR = $$ep1;
export const JG = $$en2;
export const Jo = $$eh3;
export const Mo = $$X4;
export const Px = $$eo5;
export const QT = $$eN6;
export const R1 = $$et7;
export const UE = $$Y8;
export const VA = $$eg9;
export const Ws = $$$10;
export const Yc = $$J11;
export const Yn = $$q12;
export const ZP = $$eE13;
export const _B = $$eA14;
export const d2 = $$ed15;
export const e4 = $$eI16;
export const hZ = $$ec17;
export const iR = $$e_18;
export const iw = $$Z19;
export const kN = $$ea20;
export const lC = $$ew21;
export const lk = $$eu22;
export const m5 = $$ef23;
export const mY = $$er24;
export const oU = $$eS25;
export const pc = $$eT26;
export const r1 = $$em27;
export const u3 = $$ey28;
export const uA = $$ex29;
export const y$ = $$Q30;
export const yK = $$el31;