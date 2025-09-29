import { useMemo } from "react";
import { createLoadedState, createLoadingState, createErrorState } from "../905/723791";
import { D, n as _$$n } from "../905/347702";
import { useSelector } from "react-redux";
import { isNotNullish } from "../figma_app/95419";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { partitionByPredicate } from "../905/918929";
import { isPublishedLibraryWithAssets } from "../figma_app/633080";
import { useLibraries } from "../905/420347";
import { EverPublishedLibraryQuery, UnpublishedStylesQuery, MissingStyleKeyToLibraryKeyQuery } from "../905/404538";
import { selectSceneGraph } from "../figma_app/889655";
import { subscribedSymbolsNodeIdsFromLoadedPagesSelector, subscribedStateGroupsNodeIdsFromLoadedPagesSelector, allSubscribedStylesNodeIdsFromLoadedPagesSelector } from "../figma_app/141508";
import { Fullscreen } from "../figma_app/763686";
import { useMultiSubscription } from "../figma_app/288654";
import { useCurrentFileKey } from "../figma_app/516028";
import { L } from "../905/348758";
import { getParentOrgId } from "../905/872904";
import { StyleByKey } from "../figma_app/43951";
let g = e => useMemo(() => "loaded" === e.status ? new Set(e.data) : new Set(), [e]);
let f = D(() => {
  let e = useSelector(selectSceneGraph);
  let t = useSelector(subscribedSymbolsNodeIdsFromLoadedPagesSelector);
  let i = useSelector(subscribedStateGroupsNodeIdsFromLoadedPagesSelector);
  return useMemo(() => {
    let n = new Set();
    for (let r of [...t, ...i].map(e.get).filter(isNotNullish)) r.isState || n.add(r.sourceLibraryKey);
    return Array.from(n);
  }, [e, t, i]);
});
let E = D(() => {
  let e = useSelector(selectSceneGraph);
  let t = useSelector(allSubscribedStylesNodeIdsFromLoadedPagesSelector);
  return useMemo(() => {
    let i = new Set();
    t.forEach(t => {
      let n = e.get(t);
      n && n.styleKeyForPublish && 0 !== Fullscreen.getNumUsagesOfStyle(n.styleKeyForPublish, !0) && i.add(n.styleKeyForPublish);
    });
    return i;
  }, [t, e]);
});
let $$x0 = _$$n(() => {
  let e = function () {
    let e = f();
    let t = useLibraries(e);
    let i = t.data;
    let [a] = setupResourceAtomHandler(EverPublishedLibraryQuery.EverPublishedLibraryQuery({
      libraryKeys: e
    }));
    let s = g(a);
    let o = useMemo(() => i.filter(e => s.has(e.library_key)), [i, s]);
    let [m, h] = useMemo(() => {
      let {
        pass,
        fail
      } = partitionByPredicate(o, isPublishedLibraryWithAssets);
      return [pass, fail];
    }, [o]);
    let _ = useMemo(() => {
      let e = new Set();
      i.forEach(t => {
        e.add(t.library_key);
      });
      return e;
    }, [i]);
    let A = useMemo(() => e.filter(e => s.has(e) && !_.has(e)), [e, s, _]);
    let y = useMemo(() => createLoadedState({
      publishedLibraries: m,
      unpublishedLibraries: h,
      missingLibraries: A
    }), [m, h, A]);
    return "loading" === a.status || "loading" === t.status ? createLoadingState() : y;
  }();
  let t = function () {
    let e = getParentOrgId();
    let t = useCurrentFileKey();
    let i = E();
    let a = useMemo(() => Array.from(i), [i]);
    let s = useMemo(() => a.map(e => ({
      key: e,
      openFileKey: t
    })), [a, t]);
    let m = useMultiSubscription(StyleByKey, s);
    let h = useMemo(() => m.map(e => {
      let t = L(e.result).result;
      return "loaded" === t.status ? t.data : null;
    }).filter(isNotNullish), [m]);
    let [g] = setupResourceAtomHandler(UnpublishedStylesQuery.UnpublishedStylesQuery({
      styleKeys: a,
      orgId: e
    }));
    let f = useMemo(() => "loaded" === g.status ? g.data : [], [g]);
    let _ = useMemo(() => {
      let e = new Set();
      h.forEach(t => {
        e.add(t.key);
      });
      f.forEach(t => {
        e.add(t.key);
      });
      return e;
    }, [h, f]);
    let x = useMemo(() => a.filter(e => !_.has(e)), [a, _]);
    let [S] = setupResourceAtomHandler(MissingStyleKeyToLibraryKeyQuery.MissingStyleKeyToLibraryKeyQuery({
      styleKeys: x
    }));
    let w = useMemo(() => {
      let e = new Set();
      h.forEach(t => {
        e.add(t.library_key);
      });
      f.forEach(t => {
        e.add(t.library_key);
      });
      return Array.from(e);
    }, [h, f]);
    let C = useLibraries(w);
    let T = useMemo(() => new Set(C.data?.map(e => e.library_key)), [C]);
    let k = useMemo(() => Array.from(new Set([...Object.keys(S.data ?? {}), ...w.filter(e => !T.has(e))])), [S, w, T]);
    let [R, N] = useMemo(() => {
      let {
        pass,
        fail
      } = partitionByPredicate(C.data, isPublishedLibraryWithAssets);
      return [pass, fail];
    }, [C]);
    let P = useMemo(() => createLoadedState({
      publishedLibraries: R,
      unpublishedLibraries: N,
      missingLibraries: k
    }), [R, N, k]);
    return m.some(e => "loading" === e.result.status) || "loading" === g.status || "loading" === S.status || "loading" === C.status ? createLoadingState() : P;
  }();
  return useMemo(() => S(e, t), [e, t]);
});
let S = (e, t) => {
  if ("errors" === e.status || "errors" === t.status) return createErrorState([...(e.errors ?? []), ...(t.errors ?? [])]);
  if ("disabled" === e.status || "disabled" === t.status) return {
    status: "disabled",
    data: null,
    errors: null
  };
  if ("loading" === e.status || "loading" === t.status) return createLoadingState();
  let i = new Set();
  let n = [];
  let a = [];
  let s = [];
  for (let t of e.data.publishedLibraries) i.has(t.library_key) || (i.add(t.library_key), n.push(t));
  for (let e of t.data.publishedLibraries) i.has(e.library_key) || (i.add(e.library_key), n.push(e));
  for (let t of e.data.unpublishedLibraries) i.has(t.library_key) || (i.add(t.library_key), a.push(t));
  for (let e of t.data.unpublishedLibraries) i.has(e.library_key) || (i.add(e.library_key), a.push(e));
  for (let t of e.data.missingLibraries) i.has(t) || (i.add(t), s.push(t));
  for (let e of t.data.missingLibraries) i.has(e) || (i.add(e), s.push(e));
  return createLoadedState({
    publishedLibraries: n,
    unpublishedLibraries: a,
    missingLibraries: s
  });
};
export const e = $$x0;