import { ServiceCategories as _$$e } from "../905/165054";
import { AD } from "../905/871411";
import { l as _$$l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { md, zl } from "../figma_app/27355";
import { IT } from "../figma_app/566371";
import { $D } from "../905/11";
import { fd } from "../figma_app/255679";
import { gl } from "../905/216495";
import { tS, _S } from "../figma_app/516028";
import { J_J, yUR } from "../figma_app/43951";
import { nD } from "../905/92359";
import { zV } from "../figma_app/410317";
let g = /(#[0-9]+:[0-9]+)/g;
function f(e) {
  if ("string" == typeof e) {
    let t = e.toLowerCase();
    if ("true" === t || "yes" === t || "on" === t) return !0;
    if ("false" === t || "no" === t || "off" === t) return !1;
  }
  return e;
}
function E(e) {
  return e.replace(/\s+/g, " ");
}
function y(e) {
  return e.replace(g, "").replace(/\s+/g, " ").trim();
}
export function $$b3(e) {
  try {
    if ("INSTANCE" === e.type) return Object.entries(e.componentProperties()).reduce((e, [t, r]) => ({
      ...e,
      [y(t)]: r
    }), {});
    if ("SYMBOL" === e.type) {
      if (e.isState) return function (e) {
        if (!e.parentNode) return {};
        let t = Object.entries(e.variantProperties() ?? {}).reduce((e, [t, r]) => ({
          ...e,
          [t]: {
            value: r,
            type: "VARIANT"
          }
        }), {});
        return Object.entries(e.parentNode.componentPropertyDefinitions()).reduce((e, [t, r]) => "VARIANT" === r.type ? e : {
          ...e,
          [y(t)]: {
            value: r.defaultValue,
            type: r.type
          }
        }, {
          ...t
        });
      }(e);
      return Object.entries(e.componentPropertyDefinitions()).reduce((e, [t, r]) => ({
        ...e,
        [y(t)]: {
          value: r.defaultValue,
          type: r.type
        }
      }), {});
    }
  } catch (e) {
    "Component set for node has existing errors" !== e.message && $D(_$$e.DEVELOPER_TOOLS, e);
  }
  return {};
}
export function $$T7(e, t) {
  let r = 0;
  let n = null;
  let i = $$b3(t);
  for (let t of e) {
    let e = 0;
    Object.entries(t.variant ?? {}).every(([t, r]) => {
      let n = E(t);
      let a = Object.entries(i).reduce((e, [t, r]) => ({
        ...e,
        [E(t)]: {
          type: r.type,
          value: f(r.value)
        }
      }), {})[n];
      return a?.value === f(r) ? (e++, !0) : void 0 === a;
    }) && (!n || e > r) && (n = t, r = e);
  }
  return n;
}
export function $$I10(e) {
  return (e?.publishID && e?.publishID !== AD ? e?.publishID : e?.guid) ?? null;
}
export function $$S2(e, t, r) {
  let n = t.get(e);
  if (!n) return {
    backingLibraryKey: null,
    backingNodeId: null
  };
  let {
    backingSymbolGUID,
    backingStateGroupGUID
  } = nD(new Set([(n?.type === "INSTANCE" ? n?.symbolId : n?.guid) ?? ""]), t);
  let s = null;
  let o = null;
  if (gl(backingSymbolGUID) || null === backingSymbolGUID || (s = t.get(backingSymbolGUID)), gl(backingStateGroupGUID) || null === backingStateGroupGUID || (o = t.get(backingStateGroupGUID)), "INSTANCE" === n.type && n.symbolId) {
    let e = t.get(n.symbolId);
    if (e?.isState) {
      let e = o?.sourceLibraryKey;
      return {
        backingNodeId: $$I10(o),
        backingComponentKey: s?.componentKey ?? void 0,
        backingStateGroupKey: o?.stateGroupKey ?? void 0,
        backingLibraryKey: "" !== e ? e : r
      };
    }
    {
      let e = s?.sourceLibraryKey;
      return {
        backingNodeId: $$I10(s),
        backingComponentKey: s?.componentKey ?? void 0,
        backingLibraryKey: "" !== e ? e : r
      };
    }
  }
  return "SYMBOL" === n.type ? n.isState ? {
    backingNodeId: $$I10(n.parentNode),
    backingLibraryKey: n.parentNode?.sourceLibraryKey && n.parentNode?.sourceLibraryKey !== "" ? n.parentNode?.sourceLibraryKey : r,
    backingStateGroupKey: n.parentNode?.stateGroupKey ?? void 0
  } : {
    backingNodeId: $$I10(n),
    backingLibraryKey: "" !== n.sourceLibraryKey ? n.sourceLibraryKey : r,
    backingComponentKey: n.componentKey ?? void 0
  } : {
    backingLibraryKey: null,
    backingNodeId: null
  };
}
export function $$v8(e, t) {
  let r = t.get(e);
  let n = tS();
  let i = md(_S);
  let [d] = IT(J_J({
    key: n ?? ""
  }));
  let {
    backingNodeId,
    backingLibraryKey
  } = $$S2(e, t, i);
  let g = fd(_$$l(backingLibraryKey ?? ""));
  let f = zl.get(zV);
  let E = d.data?.file?.status === "loaded" && !d.data.file?.data?.hasPermission && !g;
  let [y] = IT(yUR({
    libraryKey: backingLibraryKey ?? "",
    nodeId: backingNodeId ?? "",
    instances: [],
    openFileKey: n ?? "",
    isCommunityLibrary: g
  }), {
    enabled: !!backingLibraryKey && !!backingNodeId && !!getFeatureFlags().dt_figmadoc && !E
  });
  if (E || !r || !getFeatureFlags().dt_figmadoc) return !1;
  let b = y.data?.file;
  return f?.nodesWithCodeConnect && b?.status !== "loaded" ? f?.nodesWithCodeConnect.has(`${$$A12(backingLibraryKey, backingNodeId)}`) : !!(b && "loaded" === b.status && b.data && b.data?.code_connect_for_node_lk && b.data?.code_connect_for_node_lk.length > 0);
}
export function $$A12(e, t) {
  return `${e},${t}`;
}
export function $$x11({
  codeConnect: e,
  node: t,
  label: r,
  filePermissionData: i
}) {
  let a = i?.file?.status === "loaded" && !i.file.data?.hasPermission;
  let s = e.map(e => e.label).filter(Boolean).sort((e, t) => e.localeCompare(t)) ?? [];
  let o = $$C4(e, r);
  if (!o || a) return {
    id: null,
    updatedAt: null,
    doc: null,
    loaded: !0,
    availableLabels: s,
    instanceFigmadocs: {},
    disabled: !1
  };
  let l = [];
  let c = {};
  try {
    o.instanceFigmadocs && (c = Object.fromEntries(Object.entries(o.instanceFigmadocs).map(([e, t]) => [e, JSON.parse(t)])));
  } catch {}
  try {
    l = JSON.parse(o.figmadoc);
  } catch (e) {
    $D(_$$e.DEVELOPER_TOOLS, e, {
      extra: {
        figmadoc: o.figmadoc
      }
    });
    return {
      id: null,
      updatedAt: null,
      doc: null,
      loaded: !0,
      availableLabels: s,
      instanceFigmadocs: {},
      disabled: !0
    };
  }
  let {
    id,
    updatedAt
  } = o;
  return (Array.isArray(l) || (l = [l]), "type" in l[0] && "snippet" === l[0].type) ? {
    id,
    updatedAt,
    doc: l[0],
    loaded: !0,
    availableLabels: s,
    instanceFigmadocs: c,
    disabled: !1
  } : "template" in l[0] ? {
    id,
    updatedAt,
    doc: $$T7(l, t),
    instanceFigmadocs: c,
    loaded: !0,
    availableLabels: s,
    disabled: !1
  } : {
    id,
    updatedAt,
    doc: null,
    loaded: !0,
    availableLabels: s,
    instanceFigmadocs: c,
    disabled: !0
  };
}
export function $$N5(e, t, r, i) {
  let u;
  let h = t.get(e);
  let g = tS();
  let f = md(_S);
  let [E] = IT(J_J({
    key: g ?? ""
  }));
  let y = zl.get(zV);
  let {
    backingNodeId,
    backingLibraryKey
  } = $$S2(e, t, f);
  let v = fd(_$$l(backingLibraryKey ?? ""));
  let x = $$L6(e, t, g, !!i, f);
  let N = !!backingLibraryKey && function (e, t, r) {
    if (!e || !t) return !1;
    let n = zl.get(zV);
    if (!n || !n.docsById || !n.docsById[`key-${e},${t}`]) return !1;
    for (let e of r) if (!n.docsById[`key-${e}`]) return !1;
    return !0;
  }(backingLibraryKey, backingNodeId, x);
  let w = null;
  let O = E.data?.file?.status === "loaded" && !E.data.file?.data?.hasPermission && !v;
  let [R] = IT(yUR({
    libraryKey: backingLibraryKey ?? "",
    nodeId: backingNodeId ?? "",
    instances: x,
    openFileKey: g ?? "",
    isCommunityLibrary: v
  }), {
    enabled: !!backingLibraryKey && !!backingNodeId && !!getFeatureFlags().dt_figmadoc && !O
  });
  if (O && !N || !backingLibraryKey || !backingNodeId) return {
    id: null,
    updatedAt: null,
    doc: null,
    loaded: !0,
    availableLabels: [],
    instanceFigmadocs: {},
    disabled: !0,
    isCommunityKey: v,
    isComponentBrowserMapping: !1
  };
  if (N && y?.docsById) try {
    w = JSON.parse(y?.docsById[`key-${backingLibraryKey},${backingNodeId}`]);
  } catch {
    w = null;
  }
  if (!h || !getFeatureFlags().dt_figmadoc) return {
    id: null,
    updatedAt: null,
    doc: null,
    loaded: !0,
    availableLabels: [],
    instanceFigmadocs: {},
    disabled: !0,
    isCommunityKey: v,
    isComponentBrowserMapping: !1
  };
  let P = !1;
  let D = R.data?.file;
  if (D && "loaded" === D.status && D.data && D.data?.code_connect_for_node_lk && D.data?.code_connect_for_node_lk.length > 0) u = D.data?.code_connect_for_node_lk;else {
    if (!w || D?.status === "loaded") return {
      id: null,
      updatedAt: null,
      doc: null,
      loaded: "loading" !== R.status,
      availableLabels: [],
      instanceFigmadocs: {},
      willHaveCodeConnect: ("loading" === R.status && y?.nodesWithCodeConnect.has($$A12(backingLibraryKey, backingNodeId))) ?? !1,
      disabled: D?.status !== "loaded",
      isCommunityKey: v,
      isComponentBrowserMapping: !1
    };
    P = !0;
    u = w;
  }
  let k = u.map(e => e.label).filter(Boolean).sort((e, t) => e.localeCompare(t)) ?? [];
  let M = $$C4(u, r);
  if (!M) return {
    id: null,
    updatedAt: null,
    doc: null,
    loaded: !0,
    availableLabels: k,
    instanceFigmadocs: {},
    disabled: !1,
    isCommunityKey: v,
    isComponentBrowserMapping: !1
  };
  let F = [];
  let j = {};
  try {
    if (w && y?.docsById) for (let e of x) {
      let t = $$C4(JSON.parse(y?.docsById[`key-${e}`]), r);
      j[`key-${e}`] = JSON.parse(t.figmadoc);
    } else M.instanceFigmadocs && (j = Object.fromEntries(Object.entries(M.instanceFigmadocs).map(([e, t]) => [e, JSON.parse(t)])));
  } catch {}
  try {
    F = JSON.parse(M.figmadoc);
  } catch (e) {
    $D(_$$e.DEVELOPER_TOOLS, e, {
      extra: {
        figmadoc: M.figmadoc
      }
    });
    return {
      id: null,
      updatedAt: null,
      doc: null,
      loaded: !0,
      availableLabels: k,
      instanceFigmadocs: {},
      disabled: !0,
      isCommunityKey: v,
      isComponentBrowserMapping: !1
    };
  }
  let {
    id,
    updatedAt
  } = M;
  Array.isArray(F) || (F = [F]);
  let G = "component_browser" === M.type;
  return "type" in F[0] && "snippet" === F[0].type ? {
    id,
    updatedAt,
    doc: F[0],
    loaded: !0,
    availableLabels: k,
    instanceFigmadocs: j,
    disabled: !1,
    isCommunityKey: v,
    isComponentBrowserMapping: G
  } : "template" in F[0] ? {
    id,
    updatedAt,
    doc: $$T7(F, i ?? h),
    instanceFigmadocs: j,
    loaded: !0,
    availableLabels: k,
    disabled: !1,
    isCommunityKey: v,
    isPreLoaded: P,
    isComponentBrowserMapping: G
  } : {
    id,
    updatedAt,
    doc: null,
    loaded: !0,
    availableLabels: k,
    instanceFigmadocs: j,
    disabled: !0,
    isCommunityKey: v,
    isComponentBrowserMapping: !1
  };
}
export function $$C4(e, t) {
  let r = [e => "figmadoc" === e.type && "React" === e.label, e => "figmadoc" === e.type && "Storybook" === e.label, e => "figmadoc" === e.type && "SwiftUI" === e.label, e => "snippet" === e.type];
  for (let n of (t && r.unshift(e => e.label === t), r)) {
    let t = e.find(n);
    if (t) return t;
  }
  return e[0];
}
export function $$w1(e, t, r) {
  if ("INSTANCE" !== e.type) return null;
  let n = e.symbolId;
  if (!n) return null;
  let i = function (e, t, r) {
    let {
      backingSymbolGUID,
      backingStateGroupGUID
    } = nD(new Set([e]), t);
    if (gl(backingSymbolGUID) || null === backingSymbolGUID) return null;
    let a = t.get(backingSymbolGUID);
    let s = gl(backingStateGroupGUID) || null === backingStateGroupGUID ? null : t.get(backingStateGroupGUID);
    return s ? {
      backingNodeId: $$I10(s),
      backingLibraryKey: "" !== s.sourceLibraryKey ? s.sourceLibraryKey : r
    } : a ? {
      backingNodeId: $$I10(a),
      backingLibraryKey: "" !== a.sourceLibraryKey ? a.sourceLibraryKey : r
    } : null;
  }(n, t, r);
  if (!i) return null;
  let {
    backingNodeId,
    backingLibraryKey
  } = i;
  return backingLibraryKey + "," + backingNodeId;
}
export var $$O0 = (e => (e[e.Continue = 0] = "Continue", e[e.SkipChildren = 1] = "SkipChildren", e[e.Stop = 2] = "Stop", e))($$O0 || {});
export function $$R9(e, t, r, n) {
  let i = [e];
  for (; i.length > 0;) {
    let e = i.pop();
    if (e) {
      let a = r(e);
      if (2 === a) return;
      if (1 === a) continue;
      for (let r of n ? e.visibleChildren : e.childrenGuids) {
        let e = t.get(r);
        e && i.push(e);
      }
    }
  }
}
export function $$L6(e, t, r, n, i) {
  if (!r) return [];
  let a = new Set();
  let s = t.get(e);
  return s ? ($$R9(s, t, e => {
    if ("INSTANCE" === e.type) {
      let r = $$w1(e, t, i);
      r && a.add(r);
    }
  }, !n), Array.from(a.values())) : [];
}
export const Bn = $$O0;
export const Gl = $$w1;
export const HX = $$S2;
export const Ji = $$b3;
export const Xe = $$C4;
export const _3 = $$N5;
export const ad = $$L6;
export const kN = $$T7;
export const mr = $$v8;
export const ph = $$R9;
export const te = $$I10;
export const xQ = $$x11;
export const zi = $$A12;