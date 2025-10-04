import { sortByWithOptions } from "../figma_app/656233";
import { StateHierarchy, Fullscreen } from "../figma_app/763686";
import { scopeAwareFunction, permissionScopeHandler } from "../905/189185";
import { atomStoreManager } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { swapToSharedComponent } from "../figma_app/933328";
import { memoizedProcessComponentsAndStateGroups, processLocalComponents } from "../figma_app/80990";
import { getPublishedAssetsForLibrary, areNodesEqual } from "../figma_app/646357";
import { getBasename, splitPath, getDirname } from "../905/309735";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { FDocumentType } from "../905/862883";
import { groupInstancesByState } from "../figma_app/335489";
import { processStateHierarchy, findBestMatchingVariantState, trackStateGroupAnalytics } from "../figma_app/264776";
import { compareWithGeneratedKey } from "../905/709171";
import { filesByLibraryKeyAtom } from "../905/977779";
import { extractPublishInfo } from "../905/557338";
export function $$y1(e, t, r, s, o, l, d, c, p = StateHierarchy.NONE, _, g) {
  let f = scopeAwareFunction.user("swap-to-related-symbol", (e, n) => {
    n?.componentOrStateGroup && $$S2(n.componentOrStateGroup, t, r, d, "Related Symbol Dropdown Menu", !1, _);
  });
  let E = [];
  p === StateHierarchy.NONE ? E = function (e, t, r, i) {
    let {
      selectedItem,
      relatedItems
    } = $$T3(e, t, r);
    if (!selectedItem || relatedItems.length < 2) return [];
    let o = relatedItems.map(e => ({
      args: {
        componentOrStateGroup: e
      },
      callback: i,
      displayText: e.name,
      separator: !1,
      recordingKey: e.name,
      isChecked: e.node_id === selectedItem.node_id,
      displayText: getBasename(e.name)
    }));
    sortByWithOptions(o, e => `${e.displayText}-${e.args.componentOrStateGroup?.node_id || ""}`);
    return o;
  }(e, o, l, f) : p === StateHierarchy.STATE_INSTANCE && (E = function (e, t, r, n, s, o, l) {
    let d = processStateHierarchy(e, t, r, o);
    if (!d || d.mode !== StateHierarchy.STATE_INSTANCE) return [];
    let {
      allStates,
      stateGroup,
      stateGroupModel,
      selectedStates,
      selectedStatesPropertyValues
    } = d;
    let f = groupInstancesByState(Object.keys(n), s);
    let E = (e, t) => {
      if (t?.property && t?.value) {
        let e = {};
        let r = [{
          property: t.property,
          value: t.value
        }];
        for (let n of selectedStates) {
          let {
            propertyValues
          } = n.stateInfo;
          let a = {
            ...propertyValues,
            [t.property]: t.value
          };
          let s = findBestMatchingVariantState(a, r, allStates);
          if (null !== s) {
            let t = s.symbol.node_id;
            e[t] = (e[t] || []).concat(f[n.symbol.node_id]);
          }
        }
        0 !== Object.keys(e).length && (trackStateGroupAnalytics("Swapping A Variant", stateGroup.nodeId, {
          source: "context_menu"
        }), permissionScopeHandler.user("swap-related-symbol", () => $$A0(e)));
      }
    };
    let y = stateGroupModel.propertySortOrder || [];
    let b = stateGroupModel.propertyValues;
    return y && b ? y.map(e => {
      let t = selectedStatesPropertyValues[e];
      let r = b[e];
      return {
        displayText: e,
        children: r.map(r => ({
          args: {
            property: e,
            value: r
          },
          callback: E,
          separator: !1,
          recordingKey: r,
          isChecked: r === t,
          displayText: r
        })),
        recordingKey: l ? `${l}.${e}` : e
      };
    }) : [];
  }(g, r, s, d, l, c, "swapVariants"));
  return E;
}
let b = e => null == e || e.type === PrimaryWorkflowEnum.STATE_GROUP ? null : e?.containing_frame?.containingStateGroup?.nodeId || null;
export function $$T3(e, t, r) {
  if (!e) return {
    selectedItem: null,
    selectedLibraryKey: null,
    relatedItems: []
  };
  let n = extractPublishInfo(e, r);
  if (!n) return function (e, t) {
    let r = memoizedProcessComponentsAndStateGroups(t);
    let n = t.local.components[e] ?? t.local.stateGroups[e];
    let i = b(n);
    let a = i ? r[i] : n;
    let s = I(a, Object.values(r ?? {}));
    return {
      selectedItem: a,
      selectedLibraryKey: a?.library_key ?? null,
      relatedItems: s
    };
  }(e, t);
  let {
    publishID,
    libraryKey
  } = n;
  let o = atomStoreManager.get(filesByLibraryKeyAtom)[libraryKey];
  let l = getPublishedAssetsForLibrary(t.publishedByLibraryKey.components, {
    library_key: libraryKey,
    team_id: o?.team_id ?? null
  });
  let u = getPublishedAssetsForLibrary(t.publishedByLibraryKey.stateGroups, {
    library_key: libraryKey,
    team_id: o?.team_id ?? null
  });
  let p = {
    ...processLocalComponents(l),
    ...u
  };
  let _ = function (e, t) {
    let r = b(e);
    return r ? t[r] : e;
  }(l[publishID] ?? u[publishID], p);
  let h = I(_, Object.values(p ?? {}));
  return {
    selectedItem: _,
    selectedLibraryKey: libraryKey,
    relatedItems: h
  };
}
function I(e, t) {
  if (!e || !e.containing_frame?.nodeId && 1 === splitPath(e.name).length) return [];
  let r = getDirname(e.name);
  return t.filter(t => areNodesEqual(t.containing_frame, e?.containing_frame) && getDirname(t.name) === r);
}
export function $$S2(e, t, r, n, i, a, s) {
  $$v4(e, t, r, Object.keys(n), i, a, s);
}
export function $$v4(e, t, r, n, a, s, d, c) {
  if (e) {
    if (compareWithGeneratedKey(e, r)) {
      if (e.type === PrimaryWorkflowEnum.COMPONENT) {
        let t = e.node_id;
        Fullscreen.replaceSymbolBackingInstances({
          [t]: n
        }, s);
      } else {
        let t = Fullscreen.getSimilarStates(n, e.node_id, "");
        Fullscreen.replaceSymbolBackingInstances(t, s);
      }
      trackEventAnalytics("Instance Swapped To Local Component", {
        source: a,
        ...d,
        queryId: c
      });
    } else t(swapToSharedComponent({
      item: e,
      instanceGUIDs: n,
      sourceForTracking: a,
      storeInRecentsKey: FDocumentType.Design,
      usedSwapInstanceKeyboardShortcut: s,
      queryId: c ?? void 0
    }));
  }
}
export function $$A0(e) {
  Fullscreen.replaceSymbolBackingInstances(e, !1);
}
export const Aw = $$A0;
export const SY = $$y1;
export const V4 = $$S2;
export const XV = $$T3;
export const v9 = $$v4;