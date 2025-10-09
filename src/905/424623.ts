import { useContext, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fullscreen } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { compareIgnoringSpaces } from "../figma_app/930338";
import { updateLibraryRemappingProgress, startLibraryRemappingProgress, completeLibraryRemapping, failLibraryRemapping } from "../figma_app/933328";
import { fullscreenValue } from "../figma_app/455680";
import { useCurrentFileKey } from "../figma_app/516028";
import { LibraryDataByLibraryKey } from "../figma_app/43951";
import { mapComponentProperties, mapStateGroupProperties, mapStyleProperties } from "../figma_app/349248";
import { subscribedSymbolsNodeIdsFromLoadedPagesSelector, subscribedStateGroupsNodeIdsFromLoadedPagesSelector } from "../figma_app/141508";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { UsedStylesContext } from "../905/336143";
import { VJ, Kw } from "../905/610995";
import { mergeAssetMaps, separateItemsByType, buildLibraryLookupMap, sortByName, replaceStyleIfContentHash, upsertAndSwapComponentOrStateGroup } from "../905/131786";
export function $$b3() {
  let e = useDispatch<AppDispatch>();
  let t = useSelector(e => e.mirror.sceneGraph);
  let i = useSelector(subscribedSymbolsNodeIdsFromLoadedPagesSelector);
  let a = useSelector(subscribedStateGroupsNodeIdsFromLoadedPagesSelector);
  let s = useSelector(e => e.library);
  let o = useSelector(e => e.fileVersion);
  let l = useContext(UsedStylesContext);
  return useMemo(() => mergeAssetMaps(t, i, a, s.publishedByLibraryKey, o, l?.allUsedStylesByLibraryKey || {}, e), [t, i, a, s.publishedByLibraryKey, o, l, e]);
}
export function $$v1({
  fromLibraryKey: e,
  toLibraryKey: t
}) {
  let i = function (e) {
    let t = $$b3()[e];
    return separateItemsByType(t);
  }(e);
  let n = x(t);
  return buildLibraryLookupMap(i, n);
}
export function $$I2({
  fromLibraryKey: e,
  libraryMapping: t
}) {
  let i = VJ(e);
  return useMemo(() => {
    for (let [e, n] of [...(t.styles?.entries() || []), ...(t.components?.entries() || [])]) if (n && !i.has(e.node_id)) return !0;
    return !1;
  }, [t, i]);
}
export function $$E4(e) {
  return "loaded" === useSubscription(LibraryDataByLibraryKey, {
    libraryKey: e || ""
  }, {
    enabled: !!e
  }).status;
}
function x(e) {
  let t = function (e) {
    let t = useSubscription(LibraryDataByLibraryKey, {
      libraryKey: e || ""
    }, {
      enabled: !!e
    });
    return "loaded" === t.status && t.data.libraryKeyToFile ? t.data.libraryKeyToFile.hubFile ? {
      libraryHierarchyPaths: getResourceDataOrFallback(t.data.libraryKeyToFile.hubFile.libraryHierarchyPaths) ?? [],
      assetFile: {
        type: "hubFile",
        file: t.data.libraryKeyToFile.hubFile
      }
    } : t.data.libraryKeyToFile.file ? {
      libraryHierarchyPaths: t.data.libraryKeyToFile.file.libraryHierarchyPaths ?? [],
      assetFile: {
        type: "team",
        file: t.data.libraryKeyToFile.file
      }
    } : void 0 : void 0;
  }(e);
  return useMemo(() => null == t ? separateItemsByType() : {
    components: sortByName(t.libraryHierarchyPaths.map(e => e.components.map(e => mapComponentProperties(e, t.assetFile))).reduce((e, t) => [...e, ...t], [])),
    stateGroups: sortByName(t.libraryHierarchyPaths.map(e => e.stateGroups.map(e => mapStateGroupProperties(e, t.assetFile))).reduce((e, t) => [...e, ...t], [])),
    styles: sortByName(t.libraryHierarchyPaths.map(e => e.styles.map(e => mapStyleProperties(e, t.assetFile))).reduce((e, t) => [...e, ...t], []))
  }, [t]);
}
export function $$S0(e) {
  let t = useCurrentFileKey();
  let i = VJ(e);
  let o = useDispatch<AppDispatch>();
  let l = Kw(e);
  let {
    styles,
    components,
    stateGroups
  } = x(l);
  return useCallback((n, r) => {
    let p = [];
    let _ = 0;
    let A = 0;
    if (!l) return;
    let b = n[e];
    if (!b) return;
    for (let e of b) {
      if (e.type === PrimaryWorkflowEnum.VARIABLE || e.type === PrimaryWorkflowEnum.VARIABLE_SET || e.type === PrimaryWorkflowEnum.MODULE || i.has(e.node_id)) continue;
      if (e.type === PrimaryWorkflowEnum.STYLE) {
        let t = styles.find(t => compareIgnoringSpaces(t.name, e.name) && t.style_type === e.style_type);
        if (!t) continue;
        let i = Fullscreen.getNumUsagesOfStyle(e.key, r);
        if (0 === i) continue;
        _ += i;
        p.push(replaceStyleIfContentHash(e, t, r, o).then(() => o(updateLibraryRemappingProgress({
          done: i
        }))));
        continue;
      }
      let t = e.type === PrimaryWorkflowEnum.COMPONENT ? components : stateGroups;
      let n = e.type === PrimaryWorkflowEnum.COMPONENT ? stateGroups : components;
      let s = t.find(t => compareIgnoringSpaces(t.name, e.name)) ?? n.find(t => compareIgnoringSpaces(t.name, e.name));
      if (!s) continue;
      let l = e.type === PrimaryWorkflowEnum.COMPONENT ? e.component_key : e.key;
      let u = e.type === PrimaryWorkflowEnum.COMPONENT ? e.content_hash : e.version;
      if (!l || !u) continue;
      let b = Fullscreen.getNumInstancesReferencingProductComponent(l);
      0 !== b && (A += b, p.push(upsertAndSwapComponentOrStateGroup(l, s).then(() => o(updateLibraryRemappingProgress({
        done: b
      })))));
    }
    let v = _ + A;
    if (v > 0) {
      trackEventAnalytics("Swap library starting", {
        editingFileKey: t,
        libraryKeyToSwapFrom: e,
        libraryKeyToSwapTo: l,
        numInstances: A,
        numStyles: _
      });
      let i = window.performance.now();
      o(startLibraryRemappingProgress({
        total: v
      }));
      Promise.all(p).then(() => {
        trackEventAnalytics("Swap library finished", {
          editingFileKey: t,
          libraryKeyToSwapFrom: e,
          libraryKeyToSwapTo: l,
          durationMs: window.performance.now() - i
        });
        fullscreenValue.triggerAction("commit");
        o(completeLibraryRemapping());
      }).catch(() => {
        o(failLibraryRemapping());
      });
    }
  }, [l, e, i, components, stateGroups, styles, o, t]);
}
export const GK = $$S0;
export const LM = $$v1;
export const TK = $$I2;
export const lh = $$b3;
export const nX = $$E4;
