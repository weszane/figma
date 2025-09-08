import { useMemo } from "react";
import { gB, Xm, e1 } from "../905/723791";
import { D, n as _$$n } from "../905/347702";
import { useSelector } from "../vendor/514228";
import { isNotNullish } from "../figma_app/95419";
import { IT } from "../figma_app/566371";
import { j } from "../905/918929";
import { ZA } from "../figma_app/633080";
import { bj } from "../905/420347";
import { e6, _x, qE } from "../905/404538";
import { dK } from "../figma_app/889655";
import { C9, jf, MH } from "../figma_app/141508";
import { Fullscreen } from "../figma_app/763686";
import { p as _$$p } from "../figma_app/288654";
import { tS } from "../figma_app/516028";
import { L } from "../905/348758";
import { LH } from "../905/872904";
import { yFE } from "../figma_app/43951";
let g = e => useMemo(() => "loaded" === e.status ? new Set(e.data) : new Set(), [e]);
let f = D(() => {
  let e = useSelector(dK);
  let t = useSelector(C9);
  let i = useSelector(jf);
  return useMemo(() => {
    let n = new Set();
    for (let r of [...t, ...i].map(e.get).filter(isNotNullish)) r.isState || n.add(r.sourceLibraryKey);
    return Array.from(n);
  }, [e, t, i]);
});
let E = D(() => {
  let e = useSelector(dK);
  let t = useSelector(MH);
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
    let t = bj(e);
    let i = t.data;
    let [a] = IT(e6.EverPublishedLibraryQuery({
      libraryKeys: e
    }));
    let s = g(a);
    let o = useMemo(() => i.filter(e => s.has(e.library_key)), [i, s]);
    let [m, h] = useMemo(() => {
      let {
        pass,
        fail
      } = j(o, ZA);
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
    let y = useMemo(() => gB({
      publishedLibraries: m,
      unpublishedLibraries: h,
      missingLibraries: A
    }), [m, h, A]);
    return "loading" === a.status || "loading" === t.status ? Xm() : y;
  }();
  let t = function () {
    let e = LH();
    let t = tS();
    let i = E();
    let a = useMemo(() => Array.from(i), [i]);
    let s = useMemo(() => a.map(e => ({
      key: e,
      openFileKey: t
    })), [a, t]);
    let m = _$$p(yFE, s);
    let h = useMemo(() => m.map(e => {
      let t = L(e.result).result;
      return "loaded" === t.status ? t.data : null;
    }).filter(isNotNullish), [m]);
    let [g] = IT(_x.UnpublishedStylesQuery({
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
    let [S] = IT(qE.MissingStyleKeyToLibraryKeyQuery({
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
    let C = bj(w);
    let T = useMemo(() => new Set(C.data?.map(e => e.library_key)), [C]);
    let k = useMemo(() => Array.from(new Set([...Object.keys(S.data ?? {}), ...w.filter(e => !T.has(e))])), [S, w, T]);
    let [R, N] = useMemo(() => {
      let {
        pass,
        fail
      } = j(C.data, ZA);
      return [pass, fail];
    }, [C]);
    let P = useMemo(() => gB({
      publishedLibraries: R,
      unpublishedLibraries: N,
      missingLibraries: k
    }), [R, N, k]);
    return m.some(e => "loading" === e.result.status) || "loading" === g.status || "loading" === S.status || "loading" === C.status ? Xm() : P;
  }();
  return useMemo(() => S(e, t), [e, t]);
});
let S = (e, t) => {
  if ("errors" === e.status || "errors" === t.status) return e1([...(e.errors ?? []), ...(t.errors ?? [])]);
  if ("disabled" === e.status || "disabled" === t.status) return {
    status: "disabled",
    data: null,
    errors: null
  };
  if ("loading" === e.status || "loading" === t.status) return Xm();
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
  return gB({
    publishedLibraries: n,
    unpublishedLibraries: a,
    missingLibraries: s
  });
};
export const e = $$x0;