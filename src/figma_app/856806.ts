import { useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { l as _$$l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, atomStoreManager } from "../figma_app/27355";
import { Rs } from "../figma_app/288654";
import { s9 } from "../figma_app/913823";
import { Xh, M7 } from "../figma_app/933328";
import { eY } from "../figma_app/722362";
import { _S, tS } from "../figma_app/516028";
import { bj } from "../905/420347";
import { PreloadCodeConnectLk } from "../figma_app/43951";
import { M4, IT } from "../905/713695";
import { MH } from "../figma_app/803787";
import { Th, WH } from "../figma_app/645694";
import { BA } from "../figma_app/889655";
import { aD } from "../figma_app/141508";
import { Q } from "../905/577205";
import { zV, Af, mO } from "../figma_app/410317";
import { HX, zi } from "../figma_app/97042";
function S(e, t, r, n) {
  if (!e) return new Set();
  let i = new Set();
  for (let a of e.childrenNodes) {
    if ("SYMBOL" === a.type || a.isStateGroup || "INSTANCE" === a.type) {
      let {
        backingNodeId,
        backingLibraryKey
      } = HX(a.guid, t, n);
      backingLibraryKey && backingNodeId && i.add(`${backingLibraryKey},${backingNodeId}`);
    }
    a.childCount > 0 && S(a, t, r, n).forEach(e => i.add(e));
  }
  return i;
}
function v(e, t, r, n, i) {
  if (!e) return new Set();
  let a = new Set();
  for (let s of e.childrenNodes) {
    if ("SYMBOL" === s.type || s.isStateGroup || "INSTANCE" === s.type) {
      let {
        backingStateGroupKey,
        backingComponentKey
      } = HX(s.id, t, r);
      let l = backingStateGroupKey || backingComponentKey || null;
      !l && s.symbolId && n && i && (l = A(s.symbolId, n, i));
      l && a.add(l);
    }
    s.childCount > 0 && v(s, t, r, n, i).forEach(e => a.add(e));
  }
  return a;
}
function A(e, t, r) {
  let n = t.find(t => t.node_id === e);
  if (n) {
    if (n.containing_frame?.containingStateGroup?.nodeId) {
      let e = n.containing_frame.containingStateGroup.nodeId;
      let t = r.find(t => t.node_id === e);
      if (t?.key) return t.key;
    }
    if (n.component_key) return n.component_key;
  }
  let i = r.find(t => t.node_id === e);
  return i?.key ? i.key : null;
}
function x(e, t) {
  let r = useAtomWithSubscription(_S);
  let a = eY();
  let l = useSelector(aD);
  let d = useSelector(BA);
  let c = function (e) {
    let t = useSelector(MH);
    let r = useSelector(e => e.mirror.appModel.currentPage);
    let a = useAtomWithSubscription(_S);
    return useMemo(() => {
      let n = new Set();
      if (!e) return n;
      for (let [e, i] of Object.entries(t)) i.containing_frame?.pageId === r && (i.containing_frame?.containingStateGroup?.nodeId ? n.add(zi(a, i.containing_frame?.containingStateGroup.nodeId)) : n.add(zi(a, e)));
      return n;
    }, [r, t]);
  }(e);
  let _ = !t && l.length + d.size > (getFeatureFlags().dt_preload_code_connect_increase_limit ? 100 : 50);
  return useMemo(() => {
    if (_) return new Set();
    let t = new Set();
    for (let n of l) {
      let i = S(a.get(n.nodeId), a, e, r);
      let {
        backingNodeId,
        backingLibraryKey
      } = HX(n.nodeId, a, r);
      if (backingLibraryKey && backingNodeId) for (let e of (t.add(`${backingLibraryKey},${backingNodeId}`), i)) t.add(e);
    }
    let n = new Set();
    for (let i of d) {
      let s = a.get(i);
      let o = i;
      if (s?.containingStateGroupId && (o = s.containingStateGroupId), n.has(o)) continue;
      let l = S(s, a, e, r);
      if (r && o) for (let e of (t.add(`${r},${o}`), n.add(o), l)) t.add(e);
    }
    for (let e of c) t.add(e);
    return t;
  }, [c, d, l, _]);
}
export function $$N3() {
  let e = useAtomWithSubscription(_S);
  let t = eY();
  let r = useSelector(e => e.mirror.appModel.currentPage);
  let l = useSelector(aD);
  let d = useSelector(Th);
  let c = useSelector(WH);
  let h = useSelector(BA);
  let m = useMemo(() => {
    let r = new Set();
    let n = new Map();
    for (let i of l) {
      let {
        backingLibraryKey
      } = HX(i.nodeId, t, e);
      if (backingLibraryKey) {
        let e = _$$l(backingLibraryKey);
        r.add(e);
        n.set(i.key, e);
      }
    }
    return {
      libraryKeys: Array.from(r),
      componentToLibraryKeyMap: n
    };
  }, [l, t, e]);
  let g = bj(m.libraryKeys);
  let b = useMemo(() => {
    if ("loaded" !== g.status) return l;
    let e = new Set(g.data.filter(e => "library_type" in e && "community" !== e.library_type).map(e => e.library_key));
    return l.filter(t => {
      let r = m.componentToLibraryKeyMap.get(t.key);
      return r && e.has(r);
    });
  }, [l, g, m.componentToLibraryKeyMap]);
  return useMemo(() => {
    if (!getFeatureFlags().dt_component_browser_in_context) return new Set();
    let n = new Set();
    for (let r of b) {
      let i = v(t.get(r.nodeId), t, e, d, c);
      let {
        backingComponentKey,
        backingStateGroupKey
      } = HX(r.nodeId, t, e);
      if (backingComponentKey || backingStateGroupKey) {
        let e = backingStateGroupKey || backingComponentKey;
        e && n.add(e);
        i.forEach(e => n.add(e));
      }
    }
    let i = new Set();
    for (let r of h) {
      let a = t.get(r);
      let s = A(r, d, c);
      if (!s || i.has(s)) continue;
      let o = v(a, t, e, d, c);
      if (s) for (let e of (n.add(s), i.add(s), o)) n.add(e);
    }
    for (let e of c) e.key && e.containing_frame?.pageId === r && n.add(e.key);
    for (let e of d) e.component_key && !e.containing_frame?.containingStateGroup && e.containing_frame?.pageId === r && n.add(e.component_key);
    return n;
  }, [b, c, d, r]);
}
export function $$C4() {
  let e = useSelector(e => e.mirror.appModel.currentPage);
  let t = tS();
  let r = x(t, !1);
  useEffect(() => {
    atomStoreManager.set(zV, null);
  }, [e]);
  let a = Rs(PreloadCodeConnectLk, {
    nodes: Array.from(r),
    openFileKey: t ?? ""
  }, {
    enabled: getFeatureFlags().dt_preload_code_connect_increase_limit ? r.size < 100 : r.size < 50
  });
  useEffect(() => {
    if ("loaded" === a.status && a.data.file?.preload_code_connect_lk) {
      let e = a.data.file.preload_code_connect_lk;
      atomStoreManager.set(zV, {
        ...e,
        nodesWithCodeConnect: new Set(e.nodesWithCodeConnect)
      });
    }
    return () => atomStoreManager.set(zV, null);
  }, [e, a.status]);
}
export function $$w0(e, t = !0) {
  let r = tS();
  let n = Rs(PreloadCodeConnectLk, {
    nodes: e,
    openFileKey: r ?? ""
  }, {
    enabled: e.length < 20 && t
  });
  if ("loaded" === n.status && n.data.file?.preload_code_connect_lk) {
    let e = n.data.file.preload_code_connect_lk;
    return {
      status: "loaded",
      nodesWithCodeConnect: new Set(e.nodesWithCodeConnect),
      docsById: e.docsById
    };
  }
  return {
    status: n.status,
    nodesWithCodeConnect: new Set(),
    docsById: {}
  };
}
export function $$O2() {
  return atomStoreManager.get(zV)?.nodesWithCodeConnect;
}
let R = M4.Query({
  fetch: async ({
    nodes: e
  }) => 0 === e.length ? {} : (await Q.getComponentNames(e)).data.meta.componentsById,
  stalenessPolicy: "never"
});
export function $$L5() {
  let e = useSelector(e => e.mirror.appModel.currentPage);
  useEffect(() => {
    atomStoreManager.set(Af, null);
  }, [e]);
  let t = x(tS(), !0);
  let [r] = IT(R({
    nodes: Array.from(t)
  }), {
    enabled: !!getFeatureFlags().dt_code_connect_preload_component_names_endpoint && t.size > 0
  });
  useEffect(() => ("loaded" === r.status && r.data && atomStoreManager.set(Af, {
    componentsById: r.data
  }), () => atomStoreManager.set(Af, null)), [e, r.status]);
}
let P = M4.Query({
  fetch: async ({
    assetKeys: e
  }) => 0 === e.length ? {
    status: {}
  } : (await Q.getInContextPublishedComponentsStatus(e)).data.meta,
  stalenessPolicy: "never"
});
export function $$D1() {
  let e = useSelector(e => e.mirror.appModel.currentPage);
  useEffect(() => {
    atomStoreManager.set(mO, null);
  }, [e]);
  let t = $$N3();
  let r = useAtomWithSubscription(Xh);
  let a = useAtomWithSubscription(s9);
  let l = useAtomWithSubscription(M7);
  let [u] = IT(P({
    assetKeys: Array.from(t)
  }), {
    enabled: !!getFeatureFlags().dt_component_browser_in_context && t.size > 0
  });
  useEffect(() => {
    let e = "loading" === r || "loading" === a || "loading" === l || "loading" === u.status && t.size > 0;
    e ? atomStoreManager.set(mO, {
      status: {},
      loadingStatus: "loading"
    }) : 0 === t.size ? atomStoreManager.set(mO, {
      status: {},
      loadingStatus: "loaded"
    }) : "loaded" === u.status && u.data && !e && atomStoreManager.set(mO, {
      status: u.data.status,
      loadingStatus: "loaded"
    });
    return () => atomStoreManager.set(mO, null);
  }, [e, u.status, t.size, r, a, l]);
}
export const QU = $$w0;
export const SI = $$D1;
export const bf = $$O2;
export const oA = $$N3;
export const uj = $$C4;
export const vy = $$L5;