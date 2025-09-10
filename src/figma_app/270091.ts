import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useState, useCallback, useRef, useLayoutEffect } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import { debounce } from "../905/915765";
import { isNotNullish } from "../figma_app/95419";
import { Et } from "../figma_app/397267";
import { k as _$$k } from "../905/443820";
import { $n } from "../905/521428";
import { K as _$$K } from "../905/443068";
import { l as _$$l } from "../905/509505";
import { t as _$$t } from "../905/947268";
import { Z as _$$Z } from "../905/498136";
import { l as _$$l2 } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useMemoStable, useStableMemo } from "../905/19536";
import y from "classnames";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { parsePxInt } from "../figma_app/783094";
import { h as _$$h } from "../905/455748";
import { selectWithShallowEqual } from "../905/103090";
import { Uz } from "../905/63728";
import { j as _$$j } from "../905/918929";
import { generateRecordingKey } from "../figma_app/878298";
import { generateUUIDv4 } from "../905/871474";
import { Point } from "../905/736624";
import { xd, uO, qy } from "../905/972515";
import { Zl, iN, Z4, YU, ez as _$$ez, TQ } from "../905/211621";
import { s as _$$s2 } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { j7, oB } from "../905/929976";
import { U8, fG } from "../figma_app/91703";
import { vq, qX } from "../905/8732";
import { fi } from "../figma_app/913823";
import { yH } from "../figma_app/714946";
import { showModalHandler } from "../905/156213";
import { jD } from "../905/765855";
import { b as _$$b } from "../905/985254";
import { dG } from "../figma_app/753501";
import { n1 } from "../figma_app/657017";
import { pi } from "../figma_app/314264";
import { Ui, EF } from "../905/709171";
import { getCommonLibraryKey, memoizedProcessComponentsAndStateGroups, getFullComponentBreadcrumbs, getAssetBackgroundColor } from "../figma_app/80990";
import { Fl } from "../figma_app/236178";
import { FX } from "../figma_app/12491";
import { NX, k9 as _$$k3, sF } from "../figma_app/777207";
import { qp } from "../905/977779";
import { t as _$$t3 } from "../905/511388";
import { P as _$$P } from "../figma_app/582341";
import { u as _$$u } from "../905/290607";
import { g5 } from "../figma_app/178752";
import { useOpenFileLibraryKey, selectOpenFile } from "../figma_app/516028";
import { sZ } from "../905/845253";
import { Gj, X0, Av, fc, El, Mb } from "../figma_app/646357";
import { V as _$$V } from "../905/342732";
import { Cn } from "../905/225265";
import { YG } from "../905/921418";
import { ko } from "../figma_app/807786";
import { VP, D2 } from "../905/18797";
import { Oe } from "../figma_app/336853";
import { Fk } from "../figma_app/167249";
import { He } from "../figma_app/155728";
import { PrimaryWorkflowEnum, LibraryTabEnum } from "../figma_app/633080";
import { $A } from "../905/862883";
import { Ib } from "../905/129884";
import { _A } from "../figma_app/65182";
import { CK } from "../figma_app/517115";
import { j as _$$j2 } from "../figma_app/904819";
import { M as _$$M } from "../905/771870";
import { rp, PI } from "../figma_app/703988";
import { I as _$$I } from "../figma_app/130633";
import { lX } from "../figma_app/588397";
import { K as _$$K2 } from "../905/547934";
import { U as _$$U } from "../figma_app/213525";
import { r6 } from "../905/542608";
import { T as _$$T } from "../figma_app/472024";
import { sK } from "../905/794875";
import { Nv } from "../figma_app/318590";
import { b as _$$b2 } from "../905/635568";
import { Kr } from "../figma_app/201703";
import { Ao } from "../905/748636";
import { x as _$$x } from "../905/580889";
import { Dr, Wx, jB, Xx, Kk, OK, Wu, pf } from "../905/221848";
import { S as _$$S } from "../905/459477";
import { Pk, sX, fn } from "../905/893698";
import { p as _$$p, c as _$$c } from "../905/875042";
import { Ml } from "../905/92359";
import { jkd } from "../figma_app/27776";
import { Tv, B_, kc, Kv, je, FK, k2, _M, y7, uR, qv, Hn, D0 } from "../905/559105";
var b = y;
let eU = parsePxInt(jkd);
let eB = e => {
  switch (e) {
    case rp.SMALL:
      return {
        height: 22,
        width: 22,
        gridClassName: ""
      };
    case rp.NORMAL:
      return {
        height: 72,
        width: 72,
        gridClassName: ""
      };
    case rp.WIDE:
      return {
        height: 52,
        width: 256,
        gridClassName: ""
      };
    case rp.THIN_2_COL:
    case rp.THIN_3_COL:
      return {
        height: 22,
        width: 22,
        gridClassName: ""
      };
  }
};
let eG = (e, t) => {
  let r = eB(t);
  let i = Gj(e);
  return jsx(lX, {
    className: null === t ? Tv : B_,
    displayType: null === t ? "list-compact" : "grid",
    height: r?.height,
    isFigJam: !0,
    isSearch: !1,
    item: e,
    noBackground: !1,
    shouldHideDescription: !0,
    shouldShowNamePopout: !0,
    showName: !1,
    width: r?.width
  }, i);
};
export function $$eV3(e, t) {
  return jsx(_$$M, {
    item: e,
    shouldGenerateLocalThumbnail: !0,
    className: null === t ? Tv : B_,
    draggable: !1
  });
}
let eH = e => ["drilldownItem-productComponent", e.node_id];
let ez = e => e.length > 1;
function eW(e) {
  let {
    openFile,
    onSwapCallback,
    instanceSwapPickerShown,
    multiselect,
    onMultiselectCallback,
    selectedItems,
    selectedLibraryKey,
    scrollContainerHeight,
    isLoadingSubscribedLibraries,
    shouldPerformSwapOnClick,
    itemsToSwap,
    incrementNumSearchesForTracking,
    dropdownAccessory,
    pickerType,
    pickerToggleRef,
    preferredItems,
    overrideDefaultItem,
    showPreferredSectionByDefault,
    preferredValuesErrorComponent,
    sessionId,
    isSearching,
    setIsSearching,
    entrypointForLogging
  } = e;
  let eY = pickerType === Zl.INSTANCE_SWAP_PICKER || pickerType === Zl.PREFERRED_VALUES_PICKER;
  let [e$] = Pk();
  let eq = !e$;
  let {
    library,
    dropdownShown,
    sceneGraphSelection,
    isListView,
    loadingState
  } = selectWithShallowEqual(e => ({
    library: e.library,
    dropdownShown: e.dropdownShown,
    sceneGraphSelection: e.mirror.sceneGraphSelection,
    isListView: e.instanceSwapPickerListLayout,
    loadingState: e.loadingState
  }));
  let e2 = useAtomWithSubscription(qp);
  let e5 = useSelector(e => e.universalInsertModal.showing);
  let e3 = openFile.key;
  let e4 = useOpenFileLibraryKey();
  let e8 = useDispatch();
  let e6 = multiselect ? null : selectedItems[0] ?? null;
  let e7 = useMemo(() => overrideDefaultItem ? overrideDefaultItem.library_key : null, [overrideDefaultItem]);
  let e9 = useMemo(() => e7 ?? getCommonLibraryKey(selectedItems) ?? selectedLibraryKey, [e7, selectedItems, selectedLibraryKey]);
  let te = useMemo(() => Dr(library, Wx.COMPONENTS_FIRST, eq), [eq, library]);
  let {
    libraryMetadataMap,
    libraryMetadataLoading
  } = jB(e9);
  let {
    publishedLibraryItemsByLibraryKey,
    rootDrilldownItemsByLibraryKey
  } = Xx({
    libraryKeyBackingSelectedItems: e9,
    order: Wx.COMPONENTS_FIRST,
    libraryMetadataMap,
    flattenSubpaths: eq
  });
  let ta = g5($A.Design).productComponents.map(Kk);
  let ts = useMemo(() => preferredItems ? preferredItems.map(Kk) : [], [preferredItems]);
  let [to, tl, td] = useMemo(() => {
    if (e9 && (rootDrilldownItemsByLibraryKey[e9]?.length ?? 0) > 0) return [e9, rootDrilldownItemsByLibraryKey[e9], publishedLibraryItemsByLibraryKey[e9]];
    if (te.length > 0) return [_$$l2(openFile.libraryKey), te, X0(memoizedProcessComponentsAndStateGroups(library))];
    if (eY) {
      let e = Object.entries(rootDrilldownItemsByLibraryKey).find(([e, t]) => t.length > 0);
      if (e) {
        let [t, r] = e;
        return [t, r, void 0];
      }
    }
    return [null, [], void 0];
  }, [e9, rootDrilldownItemsByLibraryKey, te, eY, publishedLibraryItemsByLibraryKey, openFile.libraryKey, library]);
  let [tc, tu] = useState(() => showPreferredSectionByDefault ? {
    type: iN.PREFERRED
  } : to && (eY || to !== e4) ? {
    type: iN.FILE,
    libraryKey: to
  } : {
    type: iN.RECENT
  });
  _$$S.useLaunchedEvent({
    pickerType,
    sessionId,
    dropdownSelection: tc,
    entrypoint: entrypointForLogging
  });
  let [tp, t_] = useState(null);
  let th = useStore();
  let tm = Nv(!0);
  let tg = _$$S.useOpenFileProperties();
  let tf = useCallback(e => tc.type === iN.FILE ? tc.libraryKey === e4 ? e.filter(e => "LEAF" === e.type && e.item.isLocal) : e.filter(e => "LEAF" === e.type && Ui(e.item, tc.libraryKey) && Av(e.item)) : tc.type === iN.PREFERRED ? e.filter(e => "LEAF" === e.type && preferredItems && !!preferredItems.find(t => t.node_id === e.item.node_id)) : e, [tc, e4, preferredItems]);
  let tE = useMemo(() => tc.type === iN.FILE ? tc.libraryKey === e4 ? {
    type: _$$I.LOCAL
  } : {
    type: _$$I.FILE,
    libraryKey: tc.libraryKey
  } : {
    type: _$$I.ALL
  }, [tc, e4]);
  let ty = useCallback(async (e, t, r) => {
    if (isLoadingSubscribedLibraries) return [];
    YG.refreshSourcesIfNeeded(th);
    let n = selectedItems.map(e => {
      let {
        type
      } = e;
      let r = type === PrimaryWorkflowEnum.COMPONENT ? e.component_key : e.key;
      if (r) return {
        type,
        key: r
      };
    }).filter(e => void 0 !== e);
    let i = (await _$$V(e, tE, Cn.InstanceSwapper, {
      preferLocal: !0,
      libraryKeyBackingSelectedItems: e9 ?? void 0,
      selectedItems: n,
      queryId: r,
      sessionId: t
    })).normalizedSearchResults.filter(e => e.type !== PrimaryWorkflowEnum.MODULE).map(e => ({
      item: e,
      score: e.score
    }));
    let a = xd(i.map(e => e.item), e => e.name, e => e.library_key + e.node_id);
    if (eY) {
      let n = tf(a).length;
      analyticsEventManager.trackDefinedEvent("instance_swap_picker.search", {
        ...tg,
        sessionId,
        searchSessionId: t,
        query: e,
        queryId: r,
        numResults: a.length,
        numFilteredResults: n,
        aiResultsEnabled: tm,
        dropdownType: Z4(tc, e4),
        libraryKey: tc.type === iN.FILE ? tc.libraryKey : void 0,
        isPreferredValues: pickerType === Zl.PREFERRED_VALUES_PICKER
      });
    } else trackEventAnalytics("Component Insert Search", {
      searchSessionId: t,
      query: e,
      queryId: r,
      numResults: a.length,
      aiResultsEnabled: tm
    });
    incrementNumSearchesForTracking();
    return a;
  }, [isLoadingSubscribedLibraries, th, selectedItems, tE, e9, tm, eY, incrementNumSearchesForTracking, tf, tg, sessionId, tc, e4, pickerType]);
  let tb = useCallback((e, t) => {
    e.preventDefault();
    e.stopPropagation();
    e8(j7({
      type: _$$j2,
      data: {
        component: t.item,
        position: {
          top: e.clientY,
          left: e.clientX
        }
      }
    }));
  }, [e8]);
  let tT = Fk(e => new Set(e.getDirectlySelectedNodes().map(e => e.containingSymbolId || e.containingStateGroupId).filter(e => null !== e)));
  let {
    validDropdownSelection,
    validRootDrilldownItems
  } = useMemo(() => {
    if (tc.type === iN.RECENT && isSearching) return {
      validDropdownSelection: tc,
      validRootDrilldownItems: ta
    };
    let e = [];
    tc.type === iN.PREFERRED && ts.length > 0 ? e = ts : tc.type === iN.RECENT && ta.length > 0 ? e = ta : tc.type === iN.FILE && rootDrilldownItemsByLibraryKey[tc.libraryKey] ? e = rootDrilldownItemsByLibraryKey[tc.libraryKey] : tc.type === iN.FILE && e4 === tc.libraryKey && (e = te);
    let t = !1;
    if (getFeatureFlags().dse_slots && pickerType === Zl.PREFERRED_VALUES_PICKER && (e = e.filter(e => !("LEAF" === e.type && tT.has(e.item.node_id)) || (t = !0, !1))), 0 === e.length && !t) {
      let e;
      let t;
      if (to) {
        e = {
          type: iN.FILE,
          libraryKey: to
        };
        t = tl;
      } else if (ts.length > 0) {
        e = {
          type: iN.PREFERRED
        };
        t = ts;
      } else if (ta.length > 0) {
        e = {
          type: iN.RECENT
        };
        t = ta;
      } else if (Object.keys(rootDrilldownItemsByLibraryKey).length > 0) {
        let r = Object.keys(rootDrilldownItemsByLibraryKey)[0];
        e = {
          type: iN.FILE,
          libraryKey: r
        };
        t = rootDrilldownItemsByLibraryKey[r];
      } else {
        e = {
          type: iN.RECENT
        };
        t = ta;
      }
      return {
        validDropdownSelection: e,
        validRootDrilldownItems: t
      };
    }
    return {
      validDropdownSelection: tc,
      validRootDrilldownItems: e
    };
  }, [tc, isSearching, ts, ta, rootDrilldownItemsByLibraryKey, e4, te, to, tl, tT, pickerType]);
  let tv = useMemo(() => {
    if (multiselect) {
      if (e9 && td) return overrideDefaultItem ? {
        [overrideDefaultItem.library_key]: getFullComponentBreadcrumbs(overrideDefaultItem, td)
      } : {
        [e9]: OK(selectedItems, td)
      };
    } else {
      let e = overrideDefaultItem || e6;
      if (e && td) {
        let t = getFullComponentBreadcrumbs(e, td);
        return {
          [e.library_key]: t
        };
      }
    }
    return {};
  }, [multiselect, e9, td, overrideDefaultItem, selectedItems, e6]);
  let [tA, tx] = useState({});
  let tN = useMemo(() => ({
    ...tv,
    ...tA
  }), [tv, tA]);
  let [tC, tw] = useState({
    index: -1,
    parentId: null
  });
  let tO = useCallback(() => tw({
    index: -1,
    parentId: null
  }), []);
  let tR = useCallback((e, t) => {
    tO();
    validDropdownSelection && validDropdownSelection.type === iN.FILE && (tx({
      [validDropdownSelection.libraryKey]: e
    }), tx({
      [validDropdownSelection.libraryKey]: e
    }), eY && analyticsEventManager.trackDefinedEvent("instance_swap_picker.navigate", {
      ...tg,
      sessionId,
      direction: t,
      path: e.join(" / "),
      libraryKey: validDropdownSelection.libraryKey,
      viewMode: isListView ? "list" : "grid",
      isPreferredValues: pickerType === Zl.PREFERRED_VALUES_PICKER
    }));
  }, [tO, isListView, eY, tg, pickerType, sessionId, tx, validDropdownSelection]);
  let tL = useMemo(() => validDropdownSelection.type === iN.FILE && tN[validDropdownSelection.libraryKey] || [], [validDropdownSelection, tN]);
  let tP = _$$b2({
    hideTooltips: !0
  });
  let tD = n1();
  let tk = useCallback(() => {
    pickerType !== Zl.PREFERRED_VALUES_PICKER && (instanceSwapPickerShown.isShown && instanceSwapPickerShown.modal ? (instanceSwapPickerShown.returnFocusToToggle && pickerToggleRef?.current && pickerToggleRef.current.focus(), e8(jD()), e8(vq())) : pickerType === Zl.RESOURCE_INSERT_MODAL && e5 && (e8(_$$b({
      seen_component_onboarding_modal: !0
    })), tP()));
  }, [instanceSwapPickerShown, pickerToggleRef, e8, pickerType, tP, e5]);
  let tM = useCallback(e => {
    if (isListView) return null;
    let t = e.filter(e => "LEAF" === e.type).map(e => e.item);
    return PI(t);
  }, [isListView]);
  let tF = useCallback(t => {
    let r;
    r = t.type === iN.PREFERRED ? {
      type: iN.PREFERRED
    } : t.type === iN.RECENT ? {
      type: iN.RECENT
    } : {
      type: iN.FILE,
      libraryKey: t.libraryKey
    };
    analyticsEventManager.trackDefinedEvent("asset_search.misc_feature_usage", {
      aiResultsEnabled: tm,
      entryPoint: "instance-swap",
      featureSlug: "library-filter-usage"
    });
    tu(r);
    e.searchBarRef?.current && e.searchBarRef.current.focus();
    eY ? analyticsEventManager.trackDefinedEvent("instance_swap_picker.library_switch", {
      ...tg,
      sessionId,
      dropdownType: Z4(r, e4),
      libraryKey: r.type === iN.FILE ? r.libraryKey : void 0,
      isPreferredValues: pickerType === Zl.PREFERRED_VALUES_PICKER
    }) : trackEventAnalytics("Component Insert Library Switch", {
      isSearching
    });
  }, [tm, e.searchBarRef, eY, tg, sessionId, e4, pickerType, isSearching]);
  let tj = sZ();
  let tU = Oe(tj);
  let tB = tc.type === iN.FILE ? tc.libraryKey : void 0;
  let tG = Fl();
  let tV = useMemo(() => ({
    format: t => t.type === iN.RECENT ? isSearching ? getI18nString("design_systems.instance_swap_picker.all_libraries") : e.pickerType === Zl.RESOURCE_INSERT_MODAL ? getI18nString("universal_insert.recents") : getI18nString("design_systems.instance_swap_picker.recently_used") : t.type === iN.PREFERRED ? getI18nString("design_systems.instance_swap_picker.preferred") : t.type === iN.FILE ? t.libraryKey === e4 ? getI18nString("design_systems.instance_swap_picker.created_in_this_file") : libraryMetadataMap[t.libraryKey]?.name ?? "" : "",
    isEqual: (e, t) => e.type === t.type && (e.type !== iN.FILE || t.type !== iN.FILE || e.libraryKey === t.libraryKey)
  }), [isSearching, e.pickerType, e4, libraryMetadataMap]);
  let tH = useCallback(() => {
    e8(showModalHandler({
      type: _$$T,
      data: {
        initialTab: LibraryTabEnum.LIBRARIES,
        entrypoint: r6.INSTANCE_SWAP_BROWSE_LIBRARIES_LINK
      }
    }));
  }, [e8]);
  let tz = useCallback(e => {
    if ("LEAF" !== e.type || 0 === selectedItems.length) return !1;
    let {
      item
    } = e;
    if (tp && !multiselect) {
      let e = Ml(tp, Object.keys(sceneGraphSelection));
      if (VP(loadingState, e)) return item.node_id === tp.node_id && EF(item, tp);
    }
    return selectedItems.some(e => item.type === PrimaryWorkflowEnum.COMPONENT && e.type === PrimaryWorkflowEnum.COMPONENT ? !!item.component_key && item.component_key === e.component_key || !item.component_key && !e.component_key && item.node_id === e.node_id : item.type === PrimaryWorkflowEnum.STATE_GROUP && e.type === PrimaryWorkflowEnum.STATE_GROUP && (!!item.key && item.key === e.key || !item.key && !e.key && item.node_id === e.node_id));
  }, [tp, sceneGraphSelection, loadingState, multiselect, selectedItems]);
  let tW = useCallback(e => {
    let {
      currentDrilldownItems,
      index,
      parentId
    } = e;
    let i = Math.max(Math.min(tC.index, index), 0);
    let a = Math.min(Math.max(tC.index, index), currentDrilldownItems.length - 1);
    let s = currentDrilldownItems.slice(i, a + 1).filter(e => "LEAF" === e.type);
    onMultiselectCallback?.(s.map(e => e.item), tz(currentDrilldownItems[index]) ? Wu.DESELECT : Wu.SELECT);
    tw({
      index,
      parentId
    });
  }, [tz, onMultiselectCallback, tC.index]);
  let tK = _$$u({
    alwaysSwap: eY,
    canSwap: shouldPerformSwapOnClick,
    itemsToSwap,
    openFileKey: e3,
    onSwap: onSwapCallback,
    sourceForTracking: "Instance Swap Picker"
  });
  let tY = He();
  let t$ = CK();
  let tX = useCallback((e, r, n, i, a) => {
    if (!e3) return;
    if (multiselect && i) {
      if (e.shiftKey && -1 !== tC.index && tC.parentId === i.parentId) {
        tW(i);
        return;
      }
      tw({
        index: i.index,
        parentId: i.parentId
      });
    }
    let s = e.altKey;
    tp && e8(yH({
      key: Ml(tp, Object.keys(sceneGraphSelection))
    }));
    t_(r.item);
    tK({
      altKey: s
    }, r.item, a?.queryId);
    tk();
    let o = r.item.library_key;
    let d = ko(o, e4 ?? _$$l2(""), tY);
    let c = {
      aiResultsEnabled: tm,
      assetKey: Av(r.item),
      position: i?.index,
      reciprocalRank: Et(i?.index) ? 1 / (1 + i?.index) : void 0,
      query: a?.query,
      queryId: a?.queryId,
      scoreAi: r.item.ai_score ?? void 0,
      scoreLexical: r.item.lexical_score ?? void 0,
      sessionId,
      dropdownType: Z4(tc, e4),
      fromSearch: n,
      libraryKey: o,
      libraryType: d,
      viewMode: isListView ? "list" : "grid",
      productType: pi({
        editorType: openFile?.editorType
      })
    };
    let p = {
      ...tg,
      ...c,
      type: r.item.type === PrimaryWorkflowEnum.COMPONENT ? "component" : "state_group",
      searchSessionId: sessionId
    };
    if (pickerType === Zl.INSTANCE_SWAP_PICKER) {
      let e = function (e) {
        return e ? e.type === PrimaryWorkflowEnum.COMPONENT ? e.component_key : e.type === PrimaryWorkflowEnum.STATE_GROUP ? e.key : void 0 : void 0;
      };
      let t = selectedItems[0];
      let n = {
        prevInstanceType: t?.type,
        prevInstanceNodeId: t?.node_id,
        prevInstanceComponentKey: e(t)
      };
      let i = r.item;
      let a = {
        newInstanceItemType: i.type,
        newInstanceNodeId: i.node_id,
        newInstanceComponentKey: e(i)
      };
      analyticsEventManager.trackDefinedEvent("instance_swap_picker.insert_instance", {
        ...p,
        ...n,
        ...a
      });
      analyticsEventManager.trackDefinedEvent("asset_search.result_inserted", {
        ...c,
        assetType: p.type,
        entryPoint: "instance-swap",
        fileKey: tg.fileKey,
        fileOrgId: tg.orgId,
        fileTeamId: tg.teamId,
        userId: tg.userId,
        componentSuggestionSessionId: t$
      });
    } else if (pickerType === Zl.PREFERRED_VALUES_PICKER) {
      let e = tz(r);
      trackEventAnalytics("Preferred Values Picker Toggle Component", {
        ...p,
        action: e ? "deselect" : "select"
      });
    } else trackEventAnalytics("Component Insert Panel Insert Instance", {
      type: r.item.type === PrimaryWorkflowEnum.COMPONENT ? "component" : "state_group",
      fromSearch: n,
      altKey: s,
      viewMode: isListView ? "list" : "grid",
      dropdownType: Z4(tc, e4)
    });
  }, [e3, multiselect, tp, tK, tk, e4, tY, tm, sessionId, tc, isListView, openFile?.editorType, tg, pickerType, tC.index, tC.parentId, tW, e8, sceneGraphSelection, selectedItems, tz, t$]);
  let tq = useRef(null);
  let tJ = useCallback(e => {
    e && setTimeout(() => tq.current?.focus(), 0);
  }, []);
  let tZ = fc();
  let tQ = jsxs(Fragment, {
    children: [jsx(_$$p, {
      ariaLabel: getI18nString("design_systems.instance_panel.swap_instance"),
      className: pickerType === Zl.RESOURCE_INSERT_MODAL ? kc : Kv,
      dataTestId: "instance-swap-picker-library-select",
      dispatch: e8,
      dropdownAlignment: "left",
      dropdownShown,
      dropdownWidth: 230,
      formatter: tV,
      id: YU(pickerType),
      inputClassName: pickerType === Zl.RESOURCE_INSERT_MODAL ? je : void 0,
      inputRef: tq,
      onChange: tF,
      onDropdownHidden: tJ,
      openOnKeyPressed: [Uz.SPACE, Uz.ENTER],
      property: validDropdownSelection,
      rightIcon: jsx(_$$P, {
        libraryKey: tB
      }),
      role: "combobox",
      children: (() => {
        function e(e) {
          return jsx(_$$c, {
            value: e
          }, _$$ez(e));
        }
        function r(e) {
          return jsx(_$$c, {
            value: e,
            removeTextRightPadding: !0,
            rightSettingsIcon: jsx(_$$t3, {})
          }, _$$ez(e));
        }
        function i(e) {
          return jsx(_$$c, {
            value: e,
            removeTextRightPadding: !0,
            rightSettingsIcon: jsx(FX, {})
          }, _$$ez(e));
        }
        if (isLoadingSubscribedLibraries) return jsx(_$$c, {
          value: {
            type: iN.FILE,
            libraryKey: _$$l2("loading")
          },
          disabled: !0,
          children: jsx("div", {
            className: _$$s2.w150.mx12.flex.justifyCenter.$,
            children: jsx(_$$k, {})
          })
        }, "loading");
        let {
          pass,
          fail
        } = _$$j(Object.keys(rootDrilldownItemsByLibraryKey), e => {
          let t = libraryMetadataMap[e];
          return !!t?.isHubFile;
        });
        let l = [];
        if (ts.length && l.push(e({
          type: iN.PREFERRED
        })), e9 && e9 !== e4 && !showPreferredSectionByDefault && !tZ(e9) && e2[e9] && (l.length > 0 && l.push(jsx(sK, {}, "non-subscribed-divider")), l.push(e({
          type: iN.FILE,
          libraryKey: e9
        })), s = fail.filter(e => e !== e9)), tU && NX(tG)) {
          let e = fail.map(e => libraryMetadataMap[e] || null).filter(isNotNullish).map(({
            name: e,
            libraryKey: t
          }) => ({
            name: e,
            library_key: t
          }));
          _$$k3({
            libraries: e,
            approvedLibraryKeysByResourceType: tG
          });
          s = e.map(({
            library_key: e
          }) => e);
        }
        if ((isSearching || ta.length > 0) && (l.length > 0 && l.push(jsx(sK, {}, "recent-divider")), l.push(e({
          type: iN.RECENT
        }))), eY) {
          for (let r of (te.length > 0 && (l.length > 0 && l.push(jsx(sK, {}, "local-divider")), l.push(e({
            type: iN.FILE,
            libraryKey: _$$l2(openFile.libraryKey)
          }))), fail.length > 0 && l.length > 0 && l.push(jsx(sK, {}, "subscribed-divider")), fail)) tU && sF(r) ? l.push(i({
            type: iN.FILE,
            libraryKey: r
          })) : l.push(e({
            type: iN.FILE,
            libraryKey: r
          }));
          if (tD) for (let e of pass) l.push(r({
            type: iN.FILE,
            libraryKey: e
          }));
          return l;
        }
        for (let r of (te.length > 0 && l.push(e({
          type: iN.FILE,
          libraryKey: _$$l2(openFile.libraryKey)
        })), fail.length > 0 && l.push(jsx(sK, {}, "subscribed-divider")), fail)) tU && sF(r) ? l.push(i({
          type: iN.FILE,
          libraryKey: r
        })) : l.push(e({
          type: iN.FILE,
          libraryKey: r
        }));
        if (tD) for (let e of pass) l.push(r({
          type: iN.FILE,
          libraryKey: e
        }));
        return l;
      })()
    }), dropdownAccessory]
  });
  let t0 = useRef(null);
  let t1 = jsxs("div", {
    className: pickerType === Zl.RESOURCE_INSERT_MODAL ? b()(FK, k2) : _M,
    children: [tQ, jsx("div", {
      className: _$$s2.ml4.$,
      children: jsx(sX, {
        pickerType,
        includeFolderSetting: validDropdownSelection.type === iN.FILE && !isSearching,
        ref: t0,
        sessionId,
        queryId: isSearching ? e.queryId : void 0
      })
    })]
  });
  let t2 = useCallback(() => {
    tu({
      type: iN.RECENT
    });
    eY && analyticsEventManager.trackDefinedEvent("instance_swap_picker.search_all_libraries_from_empty", {
      ...tg,
      sessionId,
      query: e.query,
      queryId: e.queryId,
      isPreferredValues: pickerType === Zl.PREFERRED_VALUES_PICKER
    });
  }, [eY, tg, pickerType, e.query, e.queryId, sessionId]);
  let t5 = jsx(eX, {
    onClick: t2,
    type: tc.type
  });
  let t3 = jsxs("div", {
    className: eY ? y7 : uR,
    style: {
      height: scrollContainerHeight + (e.pickerType === Zl.RESOURCE_INSERT_MODAL ? Kr : 0)
    },
    children: [jsx("div", {
      className: eY ? qv : void 0,
      children: renderI18nText("design_systems.instance_swap_picker.no_components")
    }), jsx("div", {
      className: _$$s2.mt8.$$if(!eY, _$$s2.flex.itemsCenter.justifyCenter.mt12).$,
      children: jsx($n, {
        onClick: tH,
        variant: "secondary",
        iconPrefix: jsx(_$$l, {
          className: _$$s2.mr2.$
        }),
        children: renderI18nText("design_systems.instance_swap_picker.browse_libraries")
      })
    })]
  });
  let t4 = useMemo(() => e9 ? publishedLibraryItemsByLibraryKey[e9] ?? null : null, [e9, publishedLibraryItemsByLibraryKey]);
  let t8 = function (e, t, r, n) {
    let a = useAtomWithSubscription(qp);
    let s = useMemoStable(() => t ? new Set(t.map(e => Av(e))) : [], [t]);
    let o = useMemoStable(() => {
      Object.keys(a);
    }, [a]);
    let l = _$$h(e);
    let d = _$$h(o);
    let c = _$$h(s);
    let u = _$$h(r) && !r;
    let p = useStableMemo(useMemo(() => n.map(Av), [n]));
    let _ = _$$h(p);
    return l || d || c || u || _;
  }(e9, t4, isLoadingSubscribedLibraries, selectedItems);
  let t6 = useMemo(() => selectedItems.map(e => e.library_key).filter(e => e !== e4), [e4, selectedItems]);
  _$$K2({
    otherLibraryKeys: t6
  });
  let t7 = useMemo(() => !!libraryMetadataLoading || (validDropdownSelection.type === iN.FILE ? validDropdownSelection.libraryKey !== e4 && !El("INVALID-FILE-KEY-SHOULD-BE-REMOVED", validDropdownSelection.libraryKey) : validDropdownSelection.type === iN.RECENT ? VP(loadingState, fi) : validDropdownSelection.type === iN.PREFERRED ? VP(loadingState, _A(e3)) : isLoadingSubscribedLibraries || VP(loadingState, fi)), [libraryMetadataLoading, isLoadingSubscribedLibraries, loadingState, validDropdownSelection, e3, e4]);
  _$$x(t7);
  let t9 = Object.keys(rootDrilldownItemsByLibraryKey).length > 0;
  return jsx(uO, {
    additionalRowBottomMargin: eY ? qy : 0,
    beforeItems: t1,
    beforeItemsRefs: [tq, t0],
    contextValue: e.drilldownPickerContextValue,
    drilldownItemsKeySupplement: tc.type === iN.FILE ? tc.libraryKey : tc.type,
    drilldownItemsRecordingKey: "instanceSwapDrilldownItems",
    emptyState: t3,
    errorComponent: tc.type === iN.PREFERRED ? preferredValuesErrorComponent : void 0,
    extraHeightOnSearch: eY || e.pickerType === Zl.RESOURCE_INSERT_MODAL ? 0 : eU,
    getBackgroundColorForLeafItemThumbnail: getAssetBackgroundColor,
    getLeafItemRecordingKey: eH,
    getLeafItemThumbnail: eY || isListView ? $$eV3 : eG,
    getLeafItemTooltip: eY ? pf : void 0,
    getThumbnailGridLayoutForItems: tM,
    initialPath: tL,
    isLoading: t7,
    isSelectedItem: tz,
    multiselect,
    onDrilldownPathChange: tR,
    onLeafItemContextMenu: tb,
    onLeafItemDrilldown: tX,
    onMultiselectCallback,
    onSearch: ty,
    pickerToggleRef,
    pickerType: e.pickerType,
    query: e.query,
    recordingKey: e.recordingKey,
    renderLeafItemNames: !!eY || isListView,
    rootDrilldownItems: validRootDrilldownItems,
    scrollContainerHeight,
    searchBarPlaceholderText: (() => {
      if (tc.type === iN.PREFERRED) return getI18nString("design_systems.instance_swap_picker.search_preferred");
      if (tc.type === iN.RECENT) return getI18nString("design_systems.instance_swap_picker.search_all_libraries");
      if (null != tc.libraryKey && libraryMetadataMap[tc.libraryKey]) {
        let e = libraryMetadataMap[tc.libraryKey]?.name ?? "";
        return getI18nString("design_systems.instance_swap_picker.search_filename", {
          filename: e
        });
      }
      return getI18nString("design_systems.instance_swap_picker.search");
    })(),
    searchBarRef: e.searchBarRef,
    searchDebounceTime: e.searchDebounceTime,
    searchEmptyStateCTA: t5,
    searchFilter: tf,
    searchTypeOption: tE,
    sessionId,
    setIsSearching,
    setQuery: e.setQuery,
    shouldUpdateServerResults: t8,
    validLibrariesArePresent: t9
  });
}
export function $$eK1(e) {
  let {
    multiselect,
    onMultiselectCallback,
    selectedItems,
    selectedLibraryKey,
    searchDebounceTime,
    shouldPerformSwapOnClick = !0,
    itemsToSwap,
    onSwapCallback,
    searchBarRef,
    setNumSearchesForTracking,
    scrollContainerHeight,
    pickerToggleRef,
    toggleGridViewButton,
    preferredItems,
    overrideDefaultItem,
    preferredValuesErrorComponent,
    sessionId,
    entrypointForLogging
  } = e;
  let I = useRef(overrideDefaultItem).current;
  let {
    instanceSwapPickerShown,
    loadingState
  } = selectWithShallowEqual(e => ({
    instanceSwapPickerShown: e.instanceSwapPickerShown,
    loadingState: e.loadingState
  }));
  let x = useSelector(selectOpenFile);
  let N = useOpenFileLibraryKey();
  let C = useMemo(() => !!preferredItems && ez(preferredItems), [preferredItems]);
  let w = x?.key || null;
  let O = useMemo(() => I ? I.library_key : null, [I]);
  let L = useMemo(() => O ?? getCommonLibraryKey(selectedItems) ?? selectedLibraryKey, [O, selectedItems, selectedLibraryKey]);
  let P = _$$U();
  let D = fc();
  let k = useMemo(() => {
    if (null == x || null == w) return !0;
    if (L && x && D(L) && !El("INVALID-FILE-KEY-SHOULD-BE-REMOVED", L)) {
      let e = Mb(L);
      return !D2(loadingState, e);
    }
    return C && L && L !== N ? VP(loadingState, _A(w)) : P;
  }, [x, w, L, D, C, N, loadingState, P]);
  let M = useCallback(() => setNumSearchesForTracking?.(e => e + 1), [setNumSearchesForTracking]);
  return (instanceSwapPickerShown.isShown || e.pickerType !== Zl.INSTANCE_SWAP_PICKER) && w && x ? jsx(eW, {
    drilldownPickerContextValue: e.drilldownPickerContextValue,
    dropdownAccessory: e.pickerType === Zl.RESOURCE_INSERT_MODAL ? toggleGridViewButton : null,
    entrypointForLogging,
    incrementNumSearchesForTracking: M,
    instanceSwapPickerShown,
    isLoadingSubscribedLibraries: k,
    isSearching: e.isSearching,
    itemsToSwap,
    multiselect,
    onMultiselectCallback,
    onSwapCallback,
    openFile: x,
    overrideDefaultItem: I,
    pickerToggleRef,
    pickerType: e.pickerType,
    preferredItems,
    preferredValuesErrorComponent,
    query: e.query,
    queryId: e.queryId,
    recordingKey: e.recordingKey,
    scrollContainerHeight,
    searchBarRef,
    searchDebounceTime,
    selectedItems,
    selectedLibraryKey: selectedLibraryKey ?? null,
    sessionId,
    setIsSearching: e.setIsSearching,
    setQuery: e.setQuery,
    shouldPerformSwapOnClick,
    showPreferredSectionByDefault: C
  }) : null;
}
export function $$eY2(e) {
  let {
    pickerType,
    initialWidth,
    initialHeight,
    title,
    pickerToggleRef
  } = e;
  let c = pickerType === Zl.INSTANCE_SWAP_PICKER || pickerType === Zl.PREFERRED_VALUES_PICKER;
  let {
    instanceSwapPickerShown,
    dropdownShown
  } = selectWithShallowEqual(e => ({
    instanceSwapPickerShown: e.instanceSwapPickerShown,
    dropdownShown: e.dropdownShown
  }));
  let _ = useDispatch();
  let h = useRef(null);
  let [m, g] = useState(generateUUIDv4());
  let f = instanceSwapPickerShown.isShown ? new Point(instanceSwapPickerShown.initialX, instanceSwapPickerShown.initialY) : new Point(0, 0);
  let E = useCallback(() => {
    dropdownShown?.type === YU(pickerType) && _(oB());
  }, [_, dropdownShown, pickerType]);
  let y = useCallback(() => {
    instanceSwapPickerShown.isShown && instanceSwapPickerShown.modal && _(qX({
      ...instanceSwapPickerShown,
      modal: !1,
      returnFocusToToggle: !1
    }));
    h.current?.focus();
  }, [_, instanceSwapPickerShown]);
  let [b, I] = useState(0);
  let S = useCallback(() => {
    trackEventAnalytics(`${c ? "Instance Swap Picker" : "Component Insert"} Total Searches`, {
      numSearches: b
    });
    _(vq());
  }, [_, b, c]);
  let A = useRef(null);
  let x = c ? 320 : 428;
  let {
    modalWidth
  } = TQ(pickerType);
  let L = useCallback(() => instanceSwapPickerShown.isShown && initialHeight ? initialHeight : x, [x, initialHeight, instanceSwapPickerShown]);
  let [P, k] = useState(L);
  let F = A.current?.getEl();
  useLayoutEffect(() => {
    let e = debounce(() => {
      if (!F) return;
      let e = F.getBoundingClientRect();
      e.bottom > window.innerHeight && k(P - (e.bottom - window.innerHeight) - 20);
    }, 200);
    window.addEventListener("resize", e);
    return () => {
      window.removeEventListener("resize", e);
    };
  }, [P, k, F]);
  let j = useRef(void 0);
  let [U, B] = useState("");
  let [G, V] = useState(!1);
  let H = jsx($$e$0, {
    isSwapPicker: c,
    searchBarRef: h,
    sessionId: m,
    queryId: G ? j.current : void 0
  });
  let z = jsx("div", {
    className: Hn,
    children: jsx("div", {
      className: D0,
      children: title
    })
  });
  let W = useCallback(() => {
    dropdownShown?.type.includes(fn) && _(oB());
  }, [_, dropdownShown?.type]);
  return jsx(Ao, {
    ref: A,
    autoflowHeight: !0,
    disableHeaderBottomBorder: !0,
    dragHeaderOnly: !0,
    initialHeight: P,
    initialPosition: f,
    initialWidth: initialWidth ?? modalWidth,
    onClick: W,
    onClose: S,
    onDragEnd: y,
    onDragStart: E,
    recordingKey: generateRecordingKey(e.recordingKey, "modal"),
    title: c ? z : title,
    children: jsx($$eK1, {
      ...e,
      drilldownPickerContextValue: {
        queryId: j
      },
      isSearching: G,
      pickerToggleRef,
      query: U,
      queryId: j.current,
      scrollContainerHeight: P,
      searchBarRef: h,
      sessionId: m,
      setIsSearching: V,
      setNumSearchesForTracking: I,
      setQuery: B,
      toggleGridViewButton: H
    })
  });
}
export function $$e$0({
  isSwapPicker: e,
  isPreferredValues: t,
  searchBarRef: r,
  sessionId: s,
  queryId: o
}) {
  let l = useDispatch();
  let d = _$$S.useTrackViewToggle({
    sessionId: s,
    queryId: o,
    isPreferredValues: !!t
  });
  let c = useSelector(e => t ? e.preferredValuesPickerListLayout : e.instanceSwapPickerListLayout);
  let p = t ? U8 : fG;
  let m = useCallback(n => {
    n.stopPropagation();
    l(p({
      isListLayout: !c
    }));
    r?.current && r.current.focus();
    e ? d(!c) : trackEventAnalytics(`${t ? "Preferred Values Picker" : "Component Insert"} View Toggle`, {
      viewMode: c ? "grid" : "list"
    });
  }, [l, p, c, r, e, d, t]);
  return jsx(_$$K, {
    "aria-label": c ? getI18nString("design_systems.instance_swap_picker.show_as_grid") : getI18nString("design_systems.instance_swap_picker.show_as_list"),
    onClick: m,
    recordingKey: generateRecordingKey("toggleGridViewButton", t ? "preferredValues" : "instanceSwapPicker"),
    htmlAttributes: {
      onMouseDown: dG,
      "data-tooltip": c ? getI18nString("design_systems.instance_swap_picker.show_as_grid") : getI18nString("design_systems.instance_swap_picker.show_as_list"),
      "data-tooltip-type": Ib.TEXT
    },
    children: c ? jsx(_$$t, {}) : jsx(_$$Z, {})
  });
}
function eX({
  onClick: e,
  type: t
}) {
  if (t === iN.RECENT) return null;
  let r = renderI18nText("design_systems.instance_swap_picker.search_all_libraries");
  return jsx($n, {
    onClick: e,
    variant: "secondary",
    children: r
  });
}
export const Cc = $$e$0;
export const LL = $$eK1;
export const T = $$eY2;
export const lL = $$eV3;