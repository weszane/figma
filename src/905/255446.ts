import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { o5, VariableStyleId } from "../905/859698";
import { Fullscreen, Thumbnail, LibraryPubSub, SceneIdentifier } from "../figma_app/763686";
import { v as _$$v } from "../905/439972";
import { getSingletonSceneGraph } from "../905/700578";
import { LRUCache } from "../905/196201";
import { useHandleInputEvent } from "../figma_app/878298";
import { createInitState, createLoadingState, createSuccessState, createFailureState, isSuccess } from "../figma_app/851625";
import { getThemeBackgroundColor } from "../figma_app/191804";
import { useAsyncEffect } from "../905/931050";
import { selectWithShallowEqual } from "../905/103090";
import { KeyCodes } from "../905/63728";
import { APILoadingStatus } from "../905/520829";
import { loadSharedSymbolOrStateGroup, loadSharedStyle } from "../figma_app/933328";
import { compareWithGeneratedKey } from "../905/709171";
import { Z } from "../905/104740";
import { computeFullscreenViewportForNode } from "../figma_app/62612";
import { useSceneGraphSelector } from "../figma_app/722362";
import { selectOpenFileKey } from "../figma_app/516028";
import { getAssetKey, getAssetVersion, useSubscribedAssets, AssetFilterMode } from "../figma_app/646357";
import { ij } from "../figma_app/745458";
import { isNodeNotVisible, getStylePublishInfoSelector, $4, selectLocalStylesWithUsagesOnLoadedPages } from "../figma_app/889655";
import { createPrimaryInstancesSelector } from "../905/557338";
import { directlySubscribedStylesFromLoadedPagesSelector, directlySubscribedStylesNodeIdsFromLoadedPagesSelector } from "../figma_app/141508";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { se, TM } from "../figma_app/435826";
import { jO, LB, T7, V9, cB } from "../figma_app/524618";
let $$N6 = 800;
let $$P5 = .5;
let $$O7 = [25, 50, 100, 150, 200, 300, 400];
function D(e, t, i) {
  let n = i[e];
  if (!n) return null;
  let r = n.instanceIdsToUpdate[t];
  return r ? {
    assetKey: getAssetKey(n.updateAsset),
    assetVersion: getAssetVersion(n.updateAsset) ?? o5.INVALID,
    instanceId: r,
    name: n.updateAsset.name,
    type: n.updateAsset.type
  } : null;
}
function L(e) {
  let [t, i] = useState(0);
  let {
    outerArrayIndex,
    innerArrayIndex,
    nextInnerArrayStartIndex
  } = useMemo(() => {
    let i = t + 1;
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (r?.length && (i -= r.length) <= 0) {
        let a = r.length - 1 + i;
        let s = t - a + r.length - 1;
        let o = n < e.length - 1 ? s + 1 : null;
        return {
          outerArrayIndex: n,
          innerArrayIndex: a,
          nextInnerArrayStartIndex: o
        };
      }
    }
    return {
      outerArrayIndex: 0,
      innerArrayIndex: 0,
      nextIndexBelongsToDifferentOuterArray: !1,
      nextInnerArrayStartIndex: null
    };
  }, [e, t]);
  let o = e[outerArrayIndex]?.length || 0;
  return {
    decrementIndex: useMemo(() => 0 === innerArrayIndex ? null : () => i(e => e - 1), [innerArrayIndex]),
    incrementIndex: useMemo(() => innerArrayIndex === o - 1 ? null : () => i(e => e + 1), [innerArrayIndex, o]),
    incrementOuterArrayIndex: useMemo(() => null == nextInnerArrayStartIndex ? null : () => {
      i(nextInnerArrayStartIndex);
    }, [nextInnerArrayStartIndex]),
    outerArrayIndex,
    innerArrayIndex,
    innerArrayLength: o
  };
}
export function $$F1(e) {
  let t = Z("update_instance_navigate");
  let i = $$H4(e);
  let {
    componentUpdatesForAllPages,
    stateGroupUpdatesForAllPages
  } = useSelector(ij);
  let c = useSelector(e => e.mirror.appModel.currentPage);
  let u = useMemo(() => [...componentUpdatesForAllPages, ...stateGroupUpdatesForAllPages].reduce((e, t) => (t.type === PrimaryWorkflowEnum.STATE_GROUP ? e[t.key] = {
    updateAsset: t,
    instanceIdsToUpdate: jO(t, c)
  } : t.type === PrimaryWorkflowEnum.COMPONENT && t.component_key && (e[t.component_key] = {
    updateAsset: t,
    instanceIdsToUpdate: LB(t, c)
  }), e), Object.create(null)), [componentUpdatesForAllPages, c, stateGroupUpdatesForAllPages]);
  let p = useRef((() => {
    if (!i) return [];
    let t = [];
    let n = u[getAssetKey(i)];
    t.push(n);
    "INSTANCE_PANEL" === e.source && n.instanceIdsToUpdate.sort((t, i) => {
      let n = e.instanceAndSublayerGUIDs.indexOf(getSingletonSceneGraph().guidFromDeveloperFriendlyId(t));
      let r = e.instanceAndSublayerGUIDs.indexOf(getSingletonSceneGraph().guidFromDeveloperFriendlyId(i));
      return n === r ? 0 : -1 === n ? 1 : -1 === r ? -1 : n - r;
    });
    return Object.entries(u).reduce((e, [t, n]) => (t === getAssetKey(i) || e.push(n), e), t);
  })()).current;
  let {
    innerArrayLength,
    incrementIndex,
    decrementIndex,
    incrementOuterArrayIndex,
    innerArrayIndex,
    outerArrayIndex
  } = L(useMemo(() => p.reduce((e, t) => (e.push(t.instanceIdsToUpdate), e), []), [p]));
  let v = useMemo(() => D(outerArrayIndex, innerArrayIndex, p), [p, outerArrayIndex, innerArrayIndex]);
  let I = useMemo(() => D(outerArrayIndex, innerArrayIndex + 1, p), [p, outerArrayIndex, innerArrayIndex]);
  let w = useMemo(() => D(outerArrayIndex, innerArrayIndex - 1, p), [p, outerArrayIndex, innerArrayIndex]);
  let C = useCallback(() => {
    v && t(computeFullscreenViewportForNode({
      nodeId: getSingletonSceneGraph().guidFromDeveloperFriendlyId(v.instanceId),
      alwaysPan: !1,
      minSizePx: 32,
      noPanViewportMultiplier: 1,
      panJustEnoughViewportMultiplier: 1.5
    }))?.then(() => {
      Fullscreen.selectInstances(getSingletonSceneGraph().guidFromDeveloperFriendlyId(v.instanceId), !1);
    });
  }, [v, t]);
  let k = useSelector(e => {
    let t = getSingletonSceneGraph().guidFromDeveloperFriendlyId(v?.instanceId ?? _$$v.INVALID);
    return isNodeNotVisible(e, t);
  });
  let N = p[outerArrayIndex]?.updateAsset ?? null;
  return {
    currentInstanceInfo: v,
    updateAssetAndInstances: p[outerArrayIndex],
    prevInstanceInfo: w,
    nextInstanceInfo: I,
    currentAsset: N,
    navigationProps: {
      nextHandler: incrementIndex,
      previousHandler: decrementIndex,
      nextAssetHandler: incrementOuterArrayIndex,
      navigateToCurrentInstance: C,
      currentAssetInstanceIndex: innerArrayIndex,
      numCurrentAssetInstances: innerArrayLength
    },
    isHiddenInstance: k
  };
}
export function $$M8(e, t, i, a, o) {
  let l = useSceneGraphSelector();
  let c = useMemo(() => !!t && V(a, Fullscreen.getBackingAssetRef(t.instanceId)), [a, t, l]);
  let p = useMemo(() => !!o && o.instanceIdsToUpdate.map(Fullscreen.getBackingAssetRef).every(e => V(a, e)), [a, o, l]);
  let m = useRef(new LRUCache(100));
  let h = function (e) {
    let t = useDispatch();
    let [i, a] = useState(createInitState());
    let s = useRef(null);
    let o = `${getAssetKey(e)}/${getAssetVersion(e)}`;
    useEffect(() => {
      s.current !== o && (s.current = o, a(createLoadingState()), t(loadSharedSymbolOrStateGroup({
        item: e,
        bufferCallback: e => {
          s.current === o && a(createSuccessState(e));
        },
        errorCallback: () => {
          s.current === o && a(createFailureState());
        },
        alwaysFetch: !0
      })));
    }, [e, o, t]);
    return i;
  }(a);
  let [g, f] = U(a, t, h, m.current);
  U(a, e, h, m.current);
  U(a, i, h, m.current);
  return {
    beforeImage: g,
    afterImage: f,
    isUpdatedInstance: c,
    isUpdatedAsset: p
  };
}
export function $$j2(e) {
  let {
    updateStyle,
    selectedOutdatedStyleGUID
  } = e;
  let o = useSelector(directlySubscribedStylesFromLoadedPagesSelector);
  let l = T7(updateStyle, o);
  let d = useRef(V9(l, updateStyle, selectedOutdatedStyleGUID)).current;
  let {
    innerArrayIndex,
    innerArrayLength,
    incrementIndex,
    decrementIndex,
    incrementOuterArrayIndex
  } = L(useMemo(() => d ? [d.styleGUIDs] : [], [d]));
  let E = d ? d.styleGUIDs[innerArrayIndex] : "";
  let x = useMemo(getStylePublishInfoSelector, []);
  let w = useSelector(e => E ? x(e, E) : null);
  let T = useMemo($4, []);
  let k = useSelector(e => d ? T(e, d.styleGUIDs) : new Map());
  let N = !!d && !!Object.keys(d).length && !!E;
  let P = useSelector(directlySubscribedStylesNodeIdsFromLoadedPagesSelector);
  let O = useSelector(selectLocalStylesWithUsagesOnLoadedPages);
  let D = useMemo(() => !!E && G(updateStyle, P, O, E, w?.version ?? null, w?.key ?? null), [P, O, updateStyle, E, w]);
  let F = useMemo(() => !!d && d.styleGUIDs.every(e => G(d.updateAsset, P, O, e, k?.get(e)?.version ?? null, k?.get(e)?.key ?? null)), [k, d, P, O]);
  let {
    beforeImage,
    afterImage
  } = function (e, t, i, o) {
    let l = useDispatch();
    let d = useSelector(e => e.theme.visibleTheme);
    let c = getThemeBackgroundColor(d);
    let g = selectWithShallowEqual(e => selectOpenFileKey(e) || "");
    let y = compareWithGeneratedKey(e, g);
    let b = useMemo(() => {
      if (null == t || "" === t) return createInitState();
      let [e, i] = Thumbnail.generateThumbnailForNode(t, 0, 0, 2, {
        scale: 2,
        type: "UNCOMPRESSED",
        clearColor: c
      });
      return i.length > 0 ? createSuccessState({
        width: e.width,
        height: e.height,
        image: i
      }) : createFailureState();
    }, [t, c, i, o]);
    let v = useAsyncEffect(() => new Promise((i, n) => {
      if (t) {
        if (y) {
          i(new Uint8Array());
          return;
        }
      } else {
        i(void 0);
        return;
      }
      l(loadSharedStyle({
        style: e,
        bufferCallback: i,
        errorCallback: n
      }));
    }), [t, l, y, e]);
    return {
      beforeImage: b,
      afterImage: useMemo(() => {
        if (v.status !== APILoadingStatus.SUCCESS) return v;
        let t = y ? e.node_id : LibraryPubSub.getOrCreateSubscribedStyleNodeId(e.key, e.content_hash ?? VariableStyleId.INVALID, e.library_key, v.value, SceneIdentifier.ACTIVE_SCENE)?.localGUID ?? "";
        let [i, n] = Thumbnail.generateThumbnailForNode(t, 0, 0, 2, {
          type: "UNCOMPRESSED",
          clearColor: c,
          scale: 2
        });
        return n.length > 0 ? createSuccessState({
          width: i.width,
          height: i.height,
          image: n
        }) : createFailureState();
      }, [i, o, v, y, e, c])
    };
  }(updateStyle, E, D, F);
  return N && E && d ? {
    currentStyleGUID: E,
    beforeImage,
    afterImage,
    navigationProps: {
      nextHandler: incrementIndex,
      previousHandler: decrementIndex,
      nextAssetHandler: incrementOuterArrayIndex,
      navigateToCurrentInstance: void 0,
      currentAssetInstanceIndex: innerArrayIndex,
      numCurrentAssetInstances: innerArrayLength
    },
    isUpdatedStyleVersion: D,
    isUpdatedStyle: F,
    styleUpdateInfo: d
  } : null;
}
function U(e, t, i, a) {
  let o = useSelector(e => e.theme.visibleTheme);
  let l = getThemeBackgroundColor(o);
  let [d, c] = useState([createInitState(), createInitState()]);
  let m = useRef(null);
  useEffect(() => {
    if (!t) return;
    if (!isSuccess(i)) {
      c([i, i]);
      return;
    }
    let n = [t.instanceId, t.assetKey, t.assetVersion, getAssetKey(e), getAssetVersion(e)].join("/");
    if (m.current === n) return;
    m.current = n;
    let r = a.get(n);
    if (r) {
      c([createSuccessState(r[0]), createSuccessState(r[1])]);
      return;
    }
    c([createLoadingState(), createLoadingState()]);
    scheduler.postTask(() => {
      if (m.current !== n) return;
      let {
        beforeThumbnail,
        afterThumbnail
      } = e.type === PrimaryWorkflowEnum.COMPONENT && null != e.component_key ? Fullscreen.generateComponentUpdateInstanceThumbnails(t.instanceId, e.component_key, e.oldSubscribedKeysToUpdate, e.localIdsToUpdate, l, 2, i.value) : e.type === PrimaryWorkflowEnum.STATE_GROUP && null != e.key ? Fullscreen.generateStateUpdateInstanceThumbnails(t.instanceId, e.key, e.newStateKeyToOutdatedItems, l, 2, i.value) : {
        beforeThumbnail: void 0,
        afterThumbnail: void 0
      };
      beforeThumbnail?.image.length && afterThumbnail?.image.length ? (a.set(n, [beforeThumbnail, afterThumbnail]), c([createSuccessState(beforeThumbnail), createSuccessState(afterThumbnail)])) : c([createFailureState(), createFailureState()]);
    }, {
      priority: "background"
    });
  }, [i, l, e, t, a]);
  return d;
}
export function $$B0(e, t, i) {
  let r = useSubscribedAssets(AssetFilterMode.ALL);
  let {
    updateStyle
  } = se(r, void 0, i);
  let {
    updateAllConsumersOfStyleVersion
  } = TM(r, i);
  let o = e.styleGUIDs.length > 1;
  return {
    updateStyleVersionHandler: useCallback(() => {
      t && o ? updateAllConsumersOfStyleVersion(e, t) : updateStyle(e.updateAsset);
    }, [t, o, e, updateAllConsumersOfStyleVersion, updateStyle]),
    updateAllHandler: useCallback(() => {
      o && updateStyle(e.updateAsset);
    }, [o, e.updateAsset, updateStyle]),
    hasMultipleStyleVersions: o
  };
}
function V(e, t) {
  return e.type === PrimaryWorkflowEnum.COMPONENT ? !!t && t.key === e.component_key && t.version === e.content_hash : !!t && t.key === e.key && t.version === e.version;
}
function G(e, t, i, n, r, a) {
  let s = e.content_hash;
  let o = e.key;
  let l = !(i.includes(n) && e.localIdsToUpdate.includes(n)) && !t.includes(n);
  return r === s && a === o || l;
}
export function $$z3(e, t) {
  return useHandleInputEvent("reviewUpdatesModal", "keydown", i => {
    switch (i?.event?.keyCode) {
      case KeyCodes.LEFT_ARROW:
        i.accept();
        e?.();
        break;
      case KeyCodes.RIGHT_ARROW:
        i.accept();
        t?.();
        break;
      case KeyCodes.DOWN_ARROW:
      case KeyCodes.UP_ARROW:
        i.accept();
    }
  });
}
export function $$H4(e) {
  let t = useMemo(createPrimaryInstancesSelector, []);
  let i = useSelector(i => t(i, "INSTANCE_PANEL" === e.source ? e.instanceAndSublayerGUIDs : []));
  let {
    componentUpdatesForAllPages,
    stateGroupUpdatesForAllPages
  } = useSelector(ij);
  let {
    componentInstanceUpdateInfo,
    stateInstanceUpdateInfo
  } = useMemo(() => cB(componentUpdatesForAllPages, stateGroupUpdatesForAllPages, i), [componentUpdatesForAllPages, i, stateGroupUpdatesForAllPages]);
  return useMemo(() => "UPDATES_MODAL" === e.source ? e.asset : 1 === Object.keys(stateInstanceUpdateInfo).length ? Object.values(stateInstanceUpdateInfo)[0].updateAsset : Object.keys(stateInstanceUpdateInfo).length > 1 ? null : 1 === Object.keys(componentInstanceUpdateInfo).length ? Object.values(componentInstanceUpdateInfo)[0].updateAsset : null, [componentInstanceUpdateInfo, e, stateInstanceUpdateInfo]);
}
export const B5 = $$B0;
export const f2 = $$F1;
export const fe = $$j2;
export const gU = $$z3;
export const jX = $$H4;
export const q0 = $$P5;
export const tA = $$N6;
export const uj = $$O7;
export const xq = $$M8;