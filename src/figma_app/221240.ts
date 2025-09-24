import { createContext, useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { jsx } from 'react/jsx-runtime';
import { ReduxSceneGraph } from '../905/700578';
import { liveStoreInstance } from '../905/713695';
import { sg } from '../905/859698';
import { defaultSessionLocalIDString } from '../905/871411';
import { librariesAPI } from '../905/939602';
import { teamLibraryCache } from '../figma_app/80990';
import { findCommonStateGroupId } from '../figma_app/164212';
import { useDeepEqualSceneValue } from '../figma_app/167249';
import { uQ } from '../figma_app/311375';
import { getContainingStateGroupId } from '../figma_app/505098';
import { selectOpenFileKey, useOpenFileLibraryKey } from '../figma_app/516028';
import { setupResourceAtomHandler } from '../figma_app/566371';
import { useSceneGraphSelector } from '../figma_app/722362';
import { FileSourceType, Fullscreen, HandoffBindingsCpp } from '../figma_app/763686';
import { Bx } from '../figma_app/967154';
let T = liveStoreInstance.Query({
  fetch: async ({
    componentKey: e
  }) => {
    try {
      let t = await librariesAPI.getLibraryComponentV2Destination({
        componentKey: e
      });
      if (!t || !t.data || !t.data.meta) return null;
      return {
        nodeId: t.data.meta.node_id,
        fileKey: t.data.meta.file_key,
        component: t.data.meta.component,
        componentSet: t.data.meta.component_set
      };
    } catch (e) {
      return null;
    }
  },
  enabled: e => e.enabled
});
let I = liveStoreInstance.Query({
  fetch: async ({
    statusResult: e
  }) => {
    if (!e || !e.componentKey || !e.canvasUrl) return {};
    let t = e.isVariant ? e.dataStateGroupId : e.dataComponentId;
    let r = e.dataStateGroupId ?? null;
    let n = e.dataStorageKey;
    let i = await teamLibraryCache.getCanvas({
      canvas_url: e.canvasUrl
    });
    if (!i) return {};
    let a = Fullscreen.loadDetachedComponent(t ?? '', n, i, r);
    return a ? {
      result: {
        ...e,
        dataLocation: 'temp-scene',
        dataComponentId: a
      }
    } : {};
  },
  enabled: e => e.enabled
});
let S = createContext({
  status: 'loading'
});
export function $$v3({
  children: e
}) {
  let t = function (e) {
    let t = useSelector(selectOpenFileKey);
    let r = useOpenFileLibraryKey();
    let n = useDeepEqualSceneValue((e, t) => {
      let r = e?.get(t ?? '');
      return r?.type === 'SYMBOL' || r?.type === 'INSTANCE' ? void 0 : r?.detachedInfo;
    }, e);
    let d = !!n;
    let u = !!n?.componentKey;
    let p = u ? {
      componentKey: sg(n.componentKey),
      enabled: !0
    } : {
      componentKey: sg(''),
      enabled: !1
    };
    let [h] = setupResourceAtomHandler(T(p));
    let g = h?.data;
    let f = d && u && h.status === 'loaded' && g && g.component;
    let E = g?.nodeId ?? defaultSessionLocalIDString;
    let y = g?.fileKey ?? '';
    let b = y !== t;
    let S = g?.component;
    let v = g?.componentSet;
    let A = S?.component_key ?? n?.componentKey ?? '';
    let x = v?.key ?? A ?? '';
    let N = !!n?.isVariant || !!g?.componentSet;
    let C = b ? HandoffBindingsCpp.getGuidByComponentKey(x, A) : {
      nodeId: g?.nodeId,
      parentId: v ? v.node_id ?? defaultSessionLocalIDString : defaultSessionLocalIDString,
      inDetachedComponentsScene: !1
    };
    let w = f && b && C?.nodeId === defaultSessionLocalIDString;
    let O = {
      nodeId: E,
      fileKey: y,
      libraryKey: S?.library_key,
      componentKey: A,
      isVariant: N,
      isExternal: b,
      thumbnailUrl: S?.thumbnail_url,
      descriptionComponent: S?.description_rt ?? S?.description,
      descriptionStateGroup: v?.description_rt ?? v?.description,
      dataLocation: w || C?.inDetachedComponentsScene ? 'temp-scene' : 'scene',
      dataComponentId: w ? S?.node_id ?? '' : C.nodeId ?? '',
      dataStateGroupId: w ? v?.node_id : C.parentId,
      dataStorageKey: x,
      canvasUrl: N ? v?.canvas_url : S?.canvas_url
    };
    let R = w && O && O.canvasUrl ? {
      statusResult: O,
      enabled: !0
    } : {
      enabled: !1
    };
    let [L] = setupResourceAtomHandler(I(R));
    return useMemo(() => d ? u ? h.status === 'errors' || w && L.status === 'errors' ? {
      status: 'errors'
    } : f ? {
      status: w ? 'downloading' : 'loaded',
      result: O
    } : h.status !== 'loaded' || g && g.component ? {
      status: 'loading'
    } : {
      status: 'disabled'
    } : {
      status: 'loaded',
      result: {
        nodeId: n.symbolId,
        fileKey: t || '',
        libraryKey: r,
        isVariant: N,
        dataLocation: 'scene',
        dataComponentId: n.symbolId,
        dataStorageKey: '',
        isExternal: !1,
        componentKey: n.componentKey
      }
    } : {
      status: 'disabled'
    }, [d, n?.symbolId, n?.componentKey, N, t, u, h.status, w, L.status, g, f]);
  }(uQ());
  return jsx(S.Provider, {
    value: t,
    children: e
  });
}
export function $$A4() {
  return useContext(S) || {
    status: 'errors'
  };
}
export function $$x0(e, t) {
  let r = $$A4();
  return function (e, t) {
    if (t.status === 'loaded') {
      let r = t.result.dataLocation === 'temp-scene';
      let n = t.result.dataComponentId ?? '';
      let i = r ? t.result.dataStateGroupId : findCommonStateGroupId([n], e) ?? getContainingStateGroupId(e, [n]);
      let a = r ? $$N5(n) : e.get(n);
      return t.result.isVariant && i ? {
        backingSymbol: a,
        backingStateGroup: r ? $$N5(i) : e.get(i)
      } : {
        backingSymbol: a,
        backingStateGroup: null
      };
    }
  }(useSceneGraphSelector(), r) || {
    backingSymbol: e,
    backingStateGroup: t
  };
}
export function $$N5(e) {
  return new ReduxSceneGraph(FileSourceType.DETACHED_COMPONENTS).get(e);
}
export function $$C2(e, t) {
  let r = $$A4();
  return {
    backingSymbolDescription: (r.status === 'loaded' && r.result.isExternal && r.result.descriptionComponent ? r.result.descriptionComponent : void 0) ?? e,
    parentDescription: (r.status === 'loaded' && r.result.isExternal && r.result.descriptionStateGroup ? r.result.descriptionStateGroup : void 0) ?? t
  };
}
export function $$w1() {
  let e = useSceneGraphSelector();
  let t = $$A4();
  let [r, n] = Bx();
  if (t.status === 'loaded') {
    let r = t.result.dataComponentId;
    let n = t.result.dataStateGroupId;
    return t.result.dataLocation === 'temp-scene' ? [$$N5(r), n ? $$N5(n) : null] : [e.get(r), n ? e.get(n) : null];
  }
  return [r, n];
}
export const Bv = $$x0;
export const g$ = $$w1;
export const iX = $$C2;
export const si = $$v3;
export const wS = $$A4;
export const x9 = $$N5;