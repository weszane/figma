import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState, useCallback, useMemo, useLayoutEffect, memo } from "react";
import { useDispatch } from "react-redux";
import { assertNotNullish } from "../figma_app/95419";
import { l as _$$l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { memoizeWeak } from "../figma_app/815945";
import u from "../vendor/983401";
import _ from "../vendor/239910";
import m from "../vendor/626715";
import { useSubscriptionAnalytics, useSubscription } from "../figma_app/288654";
import { Xm, e1, gB } from "../905/723791";
import { componentReplaceOpenFilePublishedLivegraph } from "../905/879323";
import { Nf } from "../figma_app/864378";
import { useFigmaLibrariesEnabled } from "../figma_app/657017";
import { useCurrentFileKey } from "../figma_app/516028";
import { eM } from "../figma_app/646357";
import { CommunityLibraryStyleData, LibraryStyleData, LibraryData } from "../figma_app/43951";
import { mapStyleProperties, mapComponentProperties, mapStateGroupProperties } from "../figma_app/349248";
import { jz } from "../figma_app/825489";
import { Ns } from "../figma_app/409131";
import { wJ } from "../figma_app/630951";
import { createFileLibraryKeys } from "../905/651613";
import { hE, D1 } from "../figma_app/852050";
var p = u;
var h = _;
var g = m;
let R = createContext(null);
export function $$L0(e) {
  let {
    subscriptions,
    requestLibraryItems,
    releaseLibraryItems
  } = assertNotNullish(useContext(R), "Must call `useLibraryData` from within <LibraryDataProvider>");
  let a = e?.fileKey;
  useEffect(() => {
    if (a) {
      requestLibraryItems(a);
      return () => releaseLibraryItems(a);
    }
  }, [requestLibraryItems, releaseLibraryItems, a]);
  return a && subscriptions[a] || Xm();
}
export function $$P3() {
  let {
    subscriptions
  } = assertNotNullish(useContext(R), "Must call `useLibraryDataSubscriptions` from within <LibraryDataProvider>");
  return subscriptions;
}
export function $$D2() {
  let {
    subscriptionsByLibraryKey
  } = assertNotNullish(useContext(R), "Must call `useLibraryDataSubscriptionsByLibraryKey` from within <LibraryDataProvider>");
  return subscriptionsByLibraryKey;
}
export function $$k1({
  fileKey: e,
  libraryKey: t
}) {
  $$L0(createFileLibraryKeys(e, t));
  return null;
}
export function $$M4({
  children: e,
  maxSubscriptionsBeforeCleanup: t = 20
}) {
  let r = useCurrentFileKey();
  useAtomValueAndSetter(jz);
  let [s, o] = useState({});
  let c = useCallback((e, t) => {
    o(r => ({
      ...r,
      [e]: t
    }));
  }, []);
  let u = useMemo(() => {
    let e = {};
    for (let t of Object.keys(s)) {
      let r = s[t];
      null != r && (e[t] = U(r));
    }
    return e;
  }, [s]);
  let _ = useMemo(() => {
    let e = {};
    Object.values(s).forEach(t => {
      if (null == t) return;
      let r = U(t);
      r.data && (e[r.data.libraryKey] = r);
    });
    return e;
  }, [s]);
  let [m, f] = useState({});
  useEffect(() => {
    r && f(e => ({
      ...e,
      [r]: (e[r] || 0) + 1
    }));
  }, [r]);
  let [E, T] = useState({});
  !function (e) {
    let t = useMemo(() => e?.status === "loaded" ? $$G6(e) : [], [e]);
    let r = useMemo(() => h()(t, e => e.node_id), [t]);
    let n = useMemo(() => e?.status === "loaded" ? function (e) {
      let t = [];
      for (let r of e.data.libraryHierarchyPaths) for (let e of r.components) t.push(e);
      return t;
    }(e) : [], [e]);
    let s = useMemo(() => h()(n, "node_id"), [n]);
    let o = useMemo(() => e?.status === "loaded" ? function (e) {
      let t = [];
      for (let r of e.data.libraryHierarchyPaths) for (let e of r.stateGroups) t.push(e);
      return t;
    }(e) : [], [e]);
    let d = useMemo(() => h()(o, e => e.node_id), [o]);
    let c = hE();
    let u = useMemo(() => h()(c, e => e.node_id), [c]);
    let p = D1();
    let _ = useMemo(() => h()(p, e => e.node_id), [p]);
    let m = Ns();
    let g = useMemo(() => getFeatureFlags().dse_module_publish ? h()(m, e => e.node_id) : {}, [m]);
    let f = useDispatch();
    useLayoutEffect(() => {
      f(componentReplaceOpenFilePublishedLivegraph({
        components: s,
        styles: r,
        stateGroups: d,
        variableSets: u,
        variables: _,
        modules: g
      }));
      f(Nf());
    }, [f, s, d, r, u, _, g]);
    useEffect(() => {
      (e?.status === "loaded" || e?.status === "errors") && eM();
    }, [e]);
  }(r ? u[r] : null);
  let v = useCallback(e => {
    f(t => {
      let r = t[e] ?? 0;
      return {
        ...t,
        [e]: r + 1
      };
    });
    T(t => ({
      ...t,
      [e]: Date.now()
    }));
  }, []);
  let A = useCallback(e => {
    f(t => {
      let r = (t[e] ?? 0) - 1;
      if (r > 0) return {
        ...t,
        [e]: r
      };
      {
        r < 0 && console.error("Tried to release subscription for library items that doesn't exist");
        let n = {
          ...t
        };
        delete n[e];
        return n;
      }
    });
  }, []);
  let C = Object.keys(m);
  let w = Object.keys(s);
  let L = g()([...C, ...w]);
  let P = p()(L, C);
  useEffect(() => {
    let e = L.length;
    let r = P.length;
    e > t && r > 0 && o(r => {
      let n = [...P].sort((e, t) => {
        let r = E[e];
        let n = E[t];
        return null == r ? -1 : null == n ? 1 : null == r && null == n ? 0 : r - n;
      }).slice(0, e - t);
      let i = {
        ...r
      };
      for (let e of n) delete i[e];
      return i;
    });
  });
  let D = useMemo(() => ({
    requestLibraryItems: v,
    releaseLibraryItems: A,
    fetchedFileKeys: L,
    subscriptions: u,
    subscriptionsByLibraryKey: _
  }), [v, A, L, u, _]);
  return jsxs(Fragment, {
    children: [jsx(R.Provider, {
      value: D,
      children: e
    }), L.map(e => jsx(j, {
      fileKey: e,
      onChange: c
    }, e)), Object.entries(u).map(([e, t]) => t && jsx(F, {
      subscription: t,
      fileKey: e
    }, e))]
  });
}
function F({
  subscription: e,
  fileKey: t
}) {
  useSubscriptionAnalytics(e, "Library Data Subscription Load Time", {
    fileKey: t,
    numStyles: "loaded" === e.status ? e.data.numStyles : 0
  });
  return null;
}
let j = memo(function ({
  fileKey: e,
  onChange: t
}) {
  let r = e !== useCurrentFileKey();
  let n = wJ(e);
  let a = useFigmaLibrariesEnabled();
  let {
    view,
    args,
    options
  } = n ? {
    view: CommunityLibraryStyleData,
    args: {
      hubFileId: e
    },
    options: {
      enabled: a
    }
  } : {
    view: r ? LibraryStyleData : LibraryData,
    args: {
      fileKey: e
    },
    options: void 0
  };
  let d = useSubscription(view, args, options);
  useEffect(() => {
    t(e, d);
  }, [t, e, d]);
  return null;
});
let U = memoizeWeak(function (e) {
  if ("loaded" !== e.status) return e;
  let t = e.data;
  if ("communityLibraryByHubFileId" in t) {
    let e = t.communityLibraryByHubFileId;
    if (!e) return e1([]);
    let r = e.libraryHierarchyPaths.map(t => {
      let r = t.styles.map(t => mapStyleProperties(t, {
        type: "hubFile",
        file: {
          id: e.hubFileId,
          libraryKey: e.libraryKey
        }
      }));
      return {
        pageName: t.pageName ?? void 0,
        containingFrameName: t.containingFrameName ?? void 0,
        nameHierarchyPath: t.nameHierarchyPath ?? void 0,
        components: [],
        stateGroups: [],
        styles: r
      };
    });
    return gB({
      fileKey: e.hubFileId,
      libraryKey: _$$l(e.libraryKey),
      name: e.name,
      numComponents: 0,
      numStateGroups: 0,
      numStyles: e.numStyles ?? 0,
      libraryHierarchyPaths: r
    });
  }
  let r = "libraryKeyToFile" in t ? t.libraryKeyToFile?.file : t.file;
  if (!r) return e1([]);
  let n = r.libraryHierarchyPaths.map(e => ({
    components: "components" in e ? e.components.map(e => mapComponentProperties(e, {
      type: "team",
      file: r
    })) : [],
    stateGroups: "stateGroups" in e ? e.stateGroups.map(e => mapStateGroupProperties(e, {
      type: "team",
      file: r
    })) : [],
    styles: e.styles.map(e => mapStyleProperties(e, {
      type: "team",
      file: r
    }))
  }));
  return gB({
    fileKey: r.key,
    libraryKey: _$$l(r.libraryKey),
    name: r.name,
    numComponents: r.library && "numComponents" in r.library && r.library.numComponents || 0,
    numStateGroups: r.library && "numStateGroups" in r.library && r.library.numStateGroups || 0,
    numStyles: r.library?.numStyles ?? 0,
    libraryHierarchyPaths: n
  });
});
export function $$B5(e, t) {
  let r = [];
  for (let n of e.libraryHierarchyPaths) for (let e of n.styles) t ? e.style_type === t && r.push(e) : r.push(e);
  return r;
}
export function $$G6(e, t) {
  return $$B5(e.data, t);
}
export const Bh = $$L0;
export const SS = $$k1;
export const _Y = $$D2;
export const bO = $$P3;
export const fN = $$M4;
export const oz = $$B5;
export const z5 = $$G6;