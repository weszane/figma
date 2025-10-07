import { flatten, isUndefined } from "lodash-es";
import { useEffect, useMemo } from "react";
import { useMemoShallow, useMemoStable } from "../905/19536";
import { permissionScopeHandler } from "../905/189185";
import { mapAndSortVariableSets, mapVariablePropertiesFromResource, mapVariableSetsFromLibrary, mapVariablesFromLibraryCollections, sortVariableCollections } from "../905/261982";
import { getLibraryNames } from "../905/506188";
import { getFeatureFlags } from "../905/601108";
import { getSingletonSceneGraph } from "../905/700578";
import { logError } from "../905/714362";
import { convertToModeValue } from "../905/782020";
import { hasExtendedCollections } from "../905/850476";
import { ey as _$$ey } from "../905/859698";
import { resourceUtils } from "../905/989992";
import { atom, useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { isNotNullish } from "../figma_app/95419";
import { useSubscribedLibraries } from "../figma_app/155728";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { localOverridesByVariableSetIdAtomFamily, createVariableResolvedValueAtom, subscribedVariablesAtom, localVariablesAtom, libraryVariableCollectionWithVarsByFileKeyAtomFamily, combinedVariableSetByIdAtomFamily, variableByIdAtomFamily, overridesByVariableSetIdAtomFamily, localVariablesGroupedBySetIdAtom, libraryVariableCollectionsByFileKeysAtomFamily, libraryVariableCollectionsWithVarsByLibraryKeysAtomFamily, localVariableByIdAtomFamily, communityLibraryVariableCollectionsWithVarsByHubFileIdsAtomFamily, createExplicitModeNamesAtom, createDisabledResourceAtom, usedLibraryVariableSetsByKeyReduxAtom, subscribedVariablesGroupedBySetIdAtom, usedLibraryVariablesByKeyReduxAtom, variablesByVariableCollectionKeysAtomFamily, localVariableSetsAtom, queryCommunityLibraryVariableCollectionWithVariables, allLocalVariableSetsAtom, createPageLevelModesAtom, sortedLocalVariablesAtom, libraryVariableCollectionsByLibraryKeysAtomFamily, subscribedVariableSetsAtom, variableTableDataForVariableSetAtomFamily, libraryVariableCollectionsWithVarsByFileKeysAtomFamily, combinedVariableSetsAtom, localVariableSetByIdAtomFamily } from "../figma_app/216057";
import { VariableSetIdCompatHandler } from "../figma_app/243058";
import { cn, CS, eF, Io } from "../figma_app/394327";
import { fullscreenValue } from "../figma_app/455680";
import { AQ, iG } from "../figma_app/481279";
import { useCurrentFileKey } from "../figma_app/516028";
import { isValidLibraryKey, useValidLibraryKey } from "../figma_app/630951";
import { getPublishKey, getSubscribedVariableInfo, getSubscribedVariableSetInfo, isExtension } from "../figma_app/633080";
import { HandoffBindingsCpp, VariablesBindings } from "../figma_app/763686";
export function $$P32(e) {
  let t = useAtomWithSubscription(localVariablesGroupedBySetIdAtom);
  return eE(e ? t[e] ?? [] : []);
}
export function $$D12(e) {
  let t = $$P32(e);
  let r = function (e) {
    let t = useAtomWithSubscription(subscribedVariablesGroupedBySetIdAtom);
    return eE(e ? t[e] ?? [] : []);
  }(e);
  return t.length > 0 ? t : r;
}
export function $$k39(e) {
  return useAtomWithSubscription(overridesByVariableSetIdAtomFamily(e));
}
export function $$M31(e) {
  return useAtomWithSubscription(variableTableDataForVariableSetAtomFamily(e));
}
export function $$F25() {
  return useAtomWithSubscription(localVariableSetsAtom);
}
export function $$j11() {
  $$B9();
  $$U40();
  $$G23();
  $$V8();
  $$H26();
  useAtomWithSubscription(usedLibraryVariableSetsByKeyReduxAtom);
}
export function $$U40() {
  let e;
  e = eE(useAtomWithSubscription(allLocalVariableSetsAtom));
  let t = useMemo(() => hasExtendedCollections() ? e : e.filter(e => !isExtension(e)), [e]);
  return sortVariableCollections(t);
}
export function $$B9() {
  return eE(useAtomWithSubscription(sortedLocalVariablesAtom));
}
export function $$G23() {
  return useAtomWithSubscription(subscribedVariableSetsAtom);
}
export function $$V8() {
  return useAtomWithSubscription(subscribedVariablesAtom);
}
export function $$H26() {
  return useAtomWithSubscription(usedLibraryVariablesByKeyReduxAtom);
}
export function $$z22(e) {
  return useAtomWithSubscription(localVariableSetByIdAtomFamily(e));
}
export function $$W3(e) {
  let t = useMemo(() => e ? combinedVariableSetByIdAtomFamily(e) : atom(null), [e]);
  let r = useAtomWithSubscription(t);
  if (r) return r;
  if (!e) return;
  let i = VariablesBindings.getSubscribedVariableSetInfo(e);
  if (i) return getSubscribedVariableSetInfo(i);
}
export function $$K27(e) {
  let t = useMemo(() => createExplicitModeNamesAtom(e), [e]);
  return useAtomWithSubscription(t) ?? null;
}
export function $$Y16() {
  let e = useMemo(() => createPageLevelModesAtom(), []);
  return useAtomWithSubscription(e);
}
export function $$$14(e, t) {
  return $$J35(e)?.modeValues?.[t] ?? void 0;
}
export function $$X38(e) {
  let t = useMemoShallow(() => e, [e]);
  let r = useMemo(() => atom(e => t.map(t => isNotNullish(t) ? e(localVariablesAtom)[t] ?? null : null)), [t]);
  return useAtomWithSubscription(r);
}
export function $$q34(e) {
  return $$J35(e)?.name || (e ? VariablesBindings.getVariableNameInStyleSelection(e) ?? void 0 : void 0);
}
export function $$J35(e) {
  let t = useMemo(() => e ? variableByIdAtomFamily(e) : atom(null), [e]);
  let r = useAtomWithSubscription(t);
  if (r) return r;
  if (!e) return null;
  let i = VariablesBindings.getSubscribedVariableInfo(e);
  return i ? getSubscribedVariableInfo(i) : null;
}
export function $$Z18(e, t) {
  let r = useMemoShallow(() => e, [e]);
  let i = useMemo(() => atom(e => r.map(r => {
    if (!r) return null;
    let n = e(variableByIdAtomFamily(r));
    if (n) return n;
    if (t) {
      let e = VariablesBindings.getSubscribedVariableInfo(r);
      if (e) return getSubscribedVariableInfo(e);
    }
    return null;
  })), [t, r]);
  return useAtomWithSubscription(i);
}
export function $$Q30(e, t) {
  let r = useMemoShallow(() => e, [e]);
  let i = useMemo(() => atom(e => {
    let n = {};
    r.forEach(r => {
      if (!r) return;
      let i = createVariableResolvedValueAtom(r, t ?? {});
      if (i) {
        n[r] = e(i);
        return;
      }
      n[r] = null;
    });
    return n;
  }), [r, t]);
  return useAtomWithSubscription(i);
}
export function $$ee0(e, t) {
  let r = useMemo(() => e ? createVariableResolvedValueAtom(e, t ?? {}) : atom(null), [e, t]);
  return useAtomWithSubscription(r);
}
export function $$et33(e, t) {
  let r = $$ee0(e, t);
  return isNotNullish(r) && r !== "MIXED" ? r : void 0;
}
export function $$er13(e, t) {
  return useMemo(() => {
    if (!e || !t) return null;
    let r = new Map(Object.entries(t));
    return VariablesBindings.getVariableChainForModes(e, r);
  }, [e, t]);
}
export function $$en5(e) {
  let t = $$J35(e);
  let r = $$W3(t?.variableSetId);
  return r ? r.subscriptionStatus === "LOCAL" ? r.keyForPublish : r.key : null;
}
export function $$ei1() {
  let e = useCurrentFileKey();
  let t = useMemo(() => e ? libraryVariableCollectionWithVarsByFileKeyAtomFamily(e) : atom(null), [e]);
  let r = useAtomWithSubscription(t);
  return useMemo(() => {
    let e = r && resourceUtils.from(r);
    return mapVariablePropertiesFromResource({
      type: "team",
      value: e
    }, !0);
  }, [r]);
}
export function $$ea37(e) {
  let t = useMemo(() => variablesByVariableCollectionKeysAtomFamily(e), [e]);
  let r = useAtomWithSubscription(t);
  return useMemoStable(() => {
    let e = {};
    for (let t of Object.values(r)) {
      if (t.status === "loaded") {
        for (let r of t.data.variableCollection?.variables ?? []) e[_$$ey(r.key)] = r;
      }
    }
    return e;
  }, [r]);
}
export function $$es21(e) {
  let t = useMemo(() => !e || isValidLibraryKey(e) ? atom(null) : libraryVariableCollectionWithVarsByFileKeyAtomFamily(e), [e]);
  let r = useValidLibraryKey(e);
  let i = queryCommunityLibraryVariableCollectionWithVariables(r);
  let a = useAtomWithSubscription(t);
  let s = useAtomWithSubscription(i);
  let o = useSubscribedLibraries();
  let l = !!o.data?.find(t => t.fileKey === e);
  return useMemoShallow(() => {
    if (!l || !a && !s) return resourceUtils.loaded([]);
    if (a?.status === "loading" || a?.status === "disabled" || s?.status === "loading") return resourceUtils.loading();
    let e = a && resourceUtils.from(a);
    let t = e ? {
      type: "team",
      value: e
    } : {
      type: "community",
      value: s
    };
    return resourceUtils.loaded(mapVariablePropertiesFromResource(t, !1));
  }, [l, a, s]);
}
export function $$eo17() {
  let e = useCurrentFileKey();
  let t = useMemo(() => e ? libraryVariableCollectionWithVarsByFileKeyAtomFamily(e) : atom(null), [e]);
  let r = useAtomWithSubscription(t);
  return useMemo(() => {
    let e = r && resourceUtils.from(r);
    return mapAndSortVariableSets({
      type: "team",
      value: e
    }, !0);
  }, [r]);
}
export function $$el36(e) {
  let t = useMemo(() => !e || isValidLibraryKey(e) ? atom(null) : libraryVariableCollectionWithVarsByFileKeyAtomFamily(e), [e]);
  let r = useValidLibraryKey(e);
  let i = queryCommunityLibraryVariableCollectionWithVariables(r);
  let a = useAtomWithSubscription(t);
  let s = useAtomWithSubscription(i);
  let o = useSubscribedLibraries();
  let l = o.data?.find(t => t.fileKey === e);
  return useMemoShallow(() => {
    if (!l || !a && !s) return resourceUtils.loaded([]);
    if (a?.status === "loading" || s?.status === "loading") return resourceUtils.loading();
    let e = a && resourceUtils.from(a);
    let t = e ? {
      type: "team",
      value: e
    } : {
      type: "community",
      value: s
    };
    return resourceUtils.loaded(mapAndSortVariableSets(t, !1));
  }, [l, a, s]);
}
export function $$ed20(e = {}) {
  let t = e?.enabled ?? !0;
  let r = !!getFeatureFlags().dse_lk_asset_updates_vars;
  let n = ec({
    enabled: t && !r
  });
  let i = eu({
    enabled: t && r
  });
  return r ? i : n;
}
let ec = (e = {}) => {
  let t = !1 === e.enabled;
  let r = useSubscribedLibraries();
  let i = useMemoShallow(() => r.data?.map(e => e.fileKey) ?? [], [r.data]);
  let a = useMemo(() => t ? createDisabledResourceAtom(i) : libraryVariableCollectionsByFileKeysAtomFamily(i), [t, i]);
  let s = useAtomWithSubscription(a);
  return useMemoShallow(() => {
    let e = resourceUtils.all(Object.values(s));
    return e.status !== "loaded" ? e : resourceUtils.loaded({
      items: flatten()(Object.values(s).map(e => mapAndSortVariableSets({
        type: "team",
        value: e
      }, !1)))
    });
  }, [s]);
};
let eu = (e = {}) => {
  let t = !1 === e.enabled;
  let r = useSubscribedLibraries();
  let i = useMemoShallow(() => r.data?.map(e => e.libraryKey) ?? [], [r.data]);
  let a = useMemo(() => t ? createDisabledResourceAtom(i) : libraryVariableCollectionsByLibraryKeysAtomFamily(i), [t, i]);
  let s = useAtomWithSubscription(a);
  return useMemoShallow(() => {
    let e = resourceUtils.all(Object.values(s));
    return e.status !== "loaded" ? e : resourceUtils.loaded({
      items: Object.values(s).flatMap(e => mapVariableSetsFromLibrary(e, !1))
    });
  }, [s]);
};
let $$ep15 = atom(null);
export function $$e_4({
  enabled: e = !0
}) {
  let t = ey({
    enabled: e
  });
  let [r, i] = useAtomValueAndSetter($$ep15);
  useEffect(() => {
    (r === null || r.status !== t.status) && i(t);
  }, [t, i, r]);
  return t.status === "loaded";
}
export function $$eh29(e) {
  let t = e?.enabled ?? !0;
  let r = !!getFeatureFlags().dse_lk_asset_updates_vars;
  let n = em({
    enabled: t && !r
  });
  let i = eg({
    enabled: t && r
  });
  return r ? i : n;
}
let em = e => {
  let t = useSubscribedLibraries();
  let r = useMemoShallow(() => t.data?.filter(e => !isValidLibraryKey(e.fileKey)).map(e => e.fileKey) ?? [], [t.data]);
  let i = useMemoShallow(() => t.data?.filter(e => isValidLibraryKey(e.fileKey)).map(e => e.fileKey) ?? [], [t.data]);
  let a = e?.enabled === !1;
  let s = useMemo(() => {
    if (a) {
      let e = {};
      r.forEach(t => {
        e[t] = resourceUtils.disabled();
      });
      return atom(e);
    }
    return libraryVariableCollectionsWithVarsByFileKeysAtomFamily(r);
  }, [a, r]);
  let o = useAtomWithSubscription(s);
  let l = useMemo(() => {
    if (a) {
      let e = {};
      i.forEach(t => {
        e[t] = resourceUtils.disabled();
      });
      return atom(e);
    }
    return communityLibraryVariableCollectionsWithVarsByHubFileIdsAtomFamily(i);
  }, [a, i]);
  let d = useAtomWithSubscription(l);
  return useMemoShallow(() => {
    let e = resourceUtils.all(Object.values({
      ...o,
      ...d
    }));
    return e.status !== "loaded" ? e.transform(() => ({
      libraryVariableSets: [],
      libraryVariables: []
    })) : resourceUtils.loaded({
      libraryVariableSets: [...flatten()(Object.values(o).map(e => mapAndSortVariableSets({
        type: "team",
        value: e
      }, !1))), ...flatten()(Object.values(d).map(e => mapAndSortVariableSets({
        type: "community",
        value: e
      }, !1)))],
      libraryVariables: [...flatten()(Object.values(o).map(e => mapVariablePropertiesFromResource({
        type: "team",
        value: e
      }, !1))), ...flatten()(Object.values(d).map(e => mapVariablePropertiesFromResource({
        type: "community",
        value: e
      }, !1)))]
    });
  }, [o, d]);
};
let eg = e => {
  let t = e?.enabled === !1;
  let r = useSubscribedLibraries();
  let i = useMemoShallow(() => r.data?.map(e => e.libraryKey) ?? [], [r.data]);
  let a = useMemo(() => t ? createDisabledResourceAtom(i) : libraryVariableCollectionsWithVarsByLibraryKeysAtomFamily(i), [t, i]);
  let s = useAtomWithSubscription(a);
  return useMemoShallow(() => {
    let e = resourceUtils.all(Object.values(s));
    return e.status !== "loaded" ? e.transform(() => ({
      libraryVariableSets: [],
      libraryVariables: []
    })) : resourceUtils.loaded({
      libraryVariableSets: Object.values(s).flatMap(e => mapVariableSetsFromLibrary(e, !1)),
      libraryVariables: Object.values(s).flatMap(e => mapVariablesFromLibraryCollections(e, !1))
    });
  }, [s]);
};
export function $$ef19(e, t, r) {
  if (e) {
    return HandoffBindingsCpp.getIdsOfVariablesWithValue(e, t, {
      type: r.type,
      value: r.value
    });
  }
}
function eE(e) {
  return useMemo(() => e.filter(e => !eF(e)), [e]);
}
function ey(e) {
  let t = $$B9();
  let r = $$eh29(e);
  return useMemo(() => r?.status !== "loaded" ? r.transform(() => []) : resourceUtils.loaded([...(r.data?.libraryVariables ?? []), ...(t ?? [])]), [t, r]);
}
export function $$eb10(e, t) {
  let r = iG(e);
  let i = ey(t);
  return useMemo(() => {
    if (i.status !== "loaded") return i.transform(() => []);
    let t = i.data?.filter(e => AQ(e, r)) ?? [];
    let n = [];
    for (let r of e) {
      let e = Io[r];
      e && i && (n = n.concat(t.filter(t => e.includes(t.resolvedType))));
    }
    return resourceUtils.loaded([...n]);
  }, [e, i, r]);
}
export function $$eT2(e) {
  let t = e?.subscriptionStatus === "SUBSCRIBED" ? e.library_key : void 0;
  let r = getLibraryNames(t ? [t] : [], {
    enabled: !0
  }).data;
  return t ? r?.[t] : void 0;
}
export function $$eI6(e) {
  let t = e && isExtension(e);
  let r = $$W3(t ? e.rootVariableSetId : void 0);
  return (t ? r : e) ?? null;
}
export function $$eS7() {
  return ($$eb10(["FONT_STYLE"]).data ?? []).length > 0;
}
export function $$ev24() {
  let e = useStore();
  function t(e, r, n, i = yesNoTrackingEnum.YES, a = "set-variable-value-for-mode") {
    let s = permissionScopeHandler.user(a, () => VariablesBindings?.setVariableValueForMode(e, r, n) ?? !1);
    s && i === yesNoTrackingEnum.YES && fullscreenValue.triggerAction("commit");
    return s;
  }
  function r(e, t, n, i, s = yesNoTrackingEnum.YES, o = "set-variable-override-for-mode") {
    let c = VariableSetIdCompatHandler.fromString(e);
    if (!c) {
      logError("variables", "Failed to set variable override. Invalid variable set id.", {
        variableSetId: e
      });
      return;
    }
    let u = getSingletonSceneGraph().getVariableCollectionNode(c);
    if (!u) {
      logError("variables", "Failed to set variable override. Variable collection node not found.", {
        variableCollectionId: c
      });
      return;
    }
    let p = i ? convertToModeValue(i) : null;
    if (isUndefined(p)) {
      logError("variables", "Failed to set variable override. Invalid variable value.", {
        newValue: i
      });
      return;
    }
    permissionScopeHandler.user(o, () => u.setVariableOverrideForMode(t, n, p));
    s === yesNoTrackingEnum.YES && fullscreenValue.triggerAction("commit");
  }
  function n(e, t) {
    permissionScopeHandler.user("clear-variable-alias", () => VariablesBindings?.detachVariableValueForMode(e, t, null)) && fullscreenValue.triggerAction("commit");
  }
  function i(e, t, r) {
    permissionScopeHandler.user("clear-variable-override-alias", () => {
      let n = VariableSetIdCompatHandler.fromString(r);
      return n ? VariablesBindings?.detachVariableValueForMode(e, t, n) : (logError("variables", "Failed to clear variable override alias. Invalid variable set id.", {
        variableSetId: r
      }), !1);
    }) && fullscreenValue.triggerAction("commit");
  }
  return {
    setVariableValueForMode: t,
    setVariableOverrideForMode: r,
    setVariableValueOrOverrideForMode(n, i, a, s, o = yesNoTrackingEnum.YES, l) {
      let d = e.get(localVariableSetByIdAtomFamily(n));
      let c = e.get(localVariableByIdAtomFamily(i));
      if (!d) {
        logError("variables", "Failed to set variable value or override for mode. Variable set not found.", {
          variableSetId: n
        });
        return;
      }
      if (!c) {
        logError("variables", "Failed to set variable value or override for mode. Variable not found.", {
          variableId: i
        });
        return;
      }
      if (isExtension(d) && !CS(c, n)) {
        r(n, i, a, s, o, l);
      } else {
        if (s === null) {
          logError("variables", "Failed to set variable value for mode. Variable value is null.", {
            variableId: i,
            modeId: a
          });
          return;
        }
        t(i, a, s, o, l);
      }
    },
    detachVariableAlias: n,
    detachVariableOverrideAlias: i,
    detachAlias(t, a, s) {
      let l = e.get(localVariableSetByIdAtomFamily(s));
      let d = e.get(localVariableByIdAtomFamily(t));
      let c = e.get(localOverridesByVariableSetIdAtomFamily(s))?.[t];
      if (!l) {
        logError("variables", "Failed to clear variable or variable override alias. Variable set not found.", {
          variableSetId: s
        });
        return;
      }
      if (!d) {
        logError("variables", "Failed to clear variable or variable override alias. Variable not found.", {
          variableId: t
        });
        return;
      }
      if (!e.get(localVariableSetByIdAtomFamily(d.variableSetId))) {
        logError("variables", "Failed to clear variable or variable override alias. Owner variable set not found.", {
          variableId: t
        });
        return;
      }
      if (CS(d, s)) {
        n(t, a);
      } else if (isExtension(l)) {
        if (c) {
          i(t, a, s);
          return;
        }
        let e = VariablesBindings?.getVariableResolvedValue(t, new Map([[cn(l), a]]));
        if (!e) {
          logError("variables", "Failed to resolve alias value for variable in collection ", {
            variableId: t,
            modeId: a,
            variableSetId: s
          });
          return;
        }
        r(s, t, a, e);
      }
      logError("variables", "Failed to clear variable or variable override alias. Variable is not resident of set nor is the variable set an extension.", {
        variableId: t,
        variableSetId: s
      });
    }
  };
}
export function $$eA28() {
  let e = useAtomWithSubscription(combinedVariableSetsAtom);
  return useMemo(() => {
    let t = {};
    for (let r of Object.values(e)) {
      if (!r?.isExtension) continue;
      let n = e[r.backingVariableSetId];
      if (!n) continue;
      let i = getPublishKey(n).toString();
      t[i] || (t[i] = new Set());
      t[i].add(getPublishKey(r).toString());
    }
    return t;
  }, [e]);
}
export const BQ = $$ee0;
export const D1 = $$ei1;
export const EP = $$eT2;
export const G6 = $$W3;
export const JG = $$e_4;
export const Kd = $$en5;
export const L5 = $$eI6;
export const M6 = $$eS7;
export const Pt = $$V8;
export const Rb = $$B9;
export const SG = $$eb10;
export const SR = $$j11;
export const U6 = $$D12;
export const Xv = $$er13;
export const bL = $$$14;
export const e3 = $$ep15;
export const h6 = $$Y16;
export const hE = $$eo17;
export const hg = $$Z18;
export const iC = $$ef19;
export const jI = $$ed20;
export const kf = $$es21;
export const lC = $$z22;
export const lO = $$G23;
export const mm = $$ev24;
export const nN = $$F25;
export const nR = $$H26;
export const o3 = $$K27;
export const ol = $$eA28;
export const pN = $$eh29;
export const qd = $$Q30;
export const rN = $$M31;
export const rW = $$P32;
export const t8 = $$et33;
export const tZ = $$q34;
export const u = $$J35;
export const u5 = $$el36;
export const wM = $$ea37;
export const wX = $$X38;
export const x9 = $$k39;
export const yp = $$U40;