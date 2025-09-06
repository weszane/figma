import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { trackEventAnalytics } from "../905/449184";
import { PerfTimer } from "../905/609396";
import { getI18nString } from "../905/303541";
import { pY, MZ, Dy } from "../figma_app/925970";
import { F } from "../905/302958";
import { mk } from "../figma_app/999312";
import { yl } from "../figma_app/777551";
import { L as _$$L } from "../905/178090";
import { S as _$$S } from "../figma_app/277543";
import { zs } from "../figma_app/773663";
import { w2, eK } from "../905/977218";
import { M5 } from "../figma_app/350203";
import { Ei } from "../905/574958";
import { $W } from "../905/144933";
import { Jm } from "../figma_app/387599";
function v(e) {
  return 0 === e.length ? [] : e.map(e => e.model);
}
function b() {
  return {
    files: !1,
    plugins: !1,
    widgets: !1
  };
}
export function $$j1() {
  return {
    resources: [],
    totalHits: 0
  };
}
function w() {
  return {
    mixed: $$j1(),
    files: $$j1(),
    plugins: $$j1(),
    widgets: $$j1(),
    profiles: []
  };
}
let C = (e, t) => null === e ? $$j1() : t === _$$L.SearchResourceTypes.PLUGINS ? T(e) : L(e);
let L = e => {
  let t = v(e.data.meta.results);
  return {
    resources: t,
    totalHits: e.data.meta.total_hits ?? t.length
  };
};
let T = e => {
  let t = function (e) {
    return 0 === e.length ? [] : e.map(e => e.model.content.plugin);
  }(e.data.meta.results);
  return {
    resources: t,
    totalHits: e.data.meta.total_hits ?? t.length
  };
};
let I = (e, t) => {
  e(F.enqueue({
    message: t.message || getI18nString("community.error.search_request_failed"),
    error: !0,
    type: "community-search-error",
    timeoutOverride: 2e3
  }));
};
let N = (e, t) => {
  "unattributed" !== t && e(pY());
};
let E = async (e, t, r, s, i) => {
  try {
    let n = !!(t.org_id || t.team_id);
    let {
      editor_type,
      ...a
    } = t;
    let {
      editorType,
      resourceType
    } = zs(editor_type, e, n);
    if (editorType !== editor_type || resourceType !== e) return null;
    let m = yl(e, editor_type);
    let h = {
      ...a,
      resource_type: m,
      session_id: r,
      query_id: MZ(),
      include_content: i,
      resource_editor_type: _$$S(t.editor_type)
    };
    let x = $W.getResources(h);
    N(s, r);
    return await x;
  } catch (e) {
    throw e;
  }
};
let S = async (e, t, r, s, i) => {
  try {
    let n = E(e, t, r, s, i);
    return await n;
  } catch (e) {
    I(s, e);
    return null;
  }
};
let R = async (e, t, r, s) => {
  let i = new PerfTimer("searchResourcesAndProfiles", {});
  let a = null;
  i.start();
  try {
    let i = await Promise.all([E(_$$L.SearchResourceTypes.MIXED, e, t, s), $W.getHubProfiles({
      query: e.query,
      sessionId: t,
      queryId: r,
      maxNumResults: 50
    })]);
    a = {
      resourcesResponse: i[0],
      profilesResponse: i[1]
    };
  } catch (e) {
    I(s, e);
  } finally {
    let s = i.stop();
    trackEventAnalytics(M5.SEARCH_QUERY_RESULT, {
      elapsedMs: s,
      mixed: a?.resourcesResponse?.data.meta.results.length,
      profiles: a?.profilesResponse?.data.meta.results.length,
      query: e.query,
      is_preview: !1,
      search_session_id: t,
      query_id: r
    }, {
      forwardToDatadog: !0
    });
  }
  return a;
};
let k = async (e, t, r, s, i) => {
  try {
    let [n, o, a] = await Promise.all([s !== _$$L.SearchResourceTypes.FILES ? E(_$$L.SearchResourceTypes.FILES, e, t, r, i) : null, s !== _$$L.SearchResourceTypes.PLUGINS ? E(_$$L.SearchResourceTypes.PLUGINS, e, t, r, !0) : null, s !== _$$L.SearchResourceTypes.WIDGETS ? E(_$$L.SearchResourceTypes.WIDGETS, e, t, r, i) : null]);
    return {
      filesResponse: n,
      pluginsResponse: o,
      widgetsResponse: a
    };
  } catch (e) {
    I(r, e);
    return null;
  }
};
export function $$A0(e) {
  let [t, r] = useState(w());
  let [o, a] = useState(!0);
  let [c, d] = useState(!0);
  let u = Jm() ?? "unattributed";
  let _ = useDispatch();
  useEffect(() => {
    "unattributed" === u && _(Dy({
      entryPoint: "community"
    }));
  }, [u, _]);
  let p = useSelector(e => e.search.queryId);
  let y = useSelector(e => e.search.lastLoadedQuery);
  let b = useRef(null);
  useEffect(() => {
    (async () => {
      let t = new URLSearchParams(e).toString();
      if (b.current && b.current === t) return;
      b.current = t;
      a(!0);
      d(!0);
      let s = y?.query !== e.query ? Ei() : p;
      y?.query !== e.query && (_(w2({
        sessionId: u,
        query: e.query,
        queryId: s
      })), _(eK({
        queryId: s
      })));
      let i = await R(e, u, s || "", _);
      let o = $$j1();
      let l = [];
      if (i && (o = i.resourcesResponse ? L(i.resourcesResponse) : $$j1(), l = i.profilesResponse.data.meta.results), t !== b.current) return;
      r(e => ({
        ...e,
        [_$$L.SearchResourceTypes.MIXED]: o,
        [_$$L.SearchResourceTypes.PROFILES]: l
      }));
      a(!1);
      let c = await k(e, u, _);
      let g = $$j1();
      let w = $$j1();
      let T = $$j1();
      if (c) {
        let e = [c.filesResponse?.data.meta, c.pluginsResponse?.data.meta, c.widgetsResponse?.data.meta].filter(e => void 0 !== e);
        o = function (e, ...t) {
          let r = new Set(e.resources.map(e => `${e.id}`));
          let s = [];
          let i = 0;
          for (let e of t) {
            i += e.total_hits ?? e.results.length;
            e.results.forEach(e => {
              r.has(e.model.id) ? i -= 1 : s.push(e);
            });
          }
          let n = s.sort((e, t) => t.score - e.score);
          return {
            resources: [...e.resources, ...v(n)],
            totalHits: e.totalHits + i
          };
        }(o, ...e);
        g = C(c.filesResponse, _$$L.SearchResourceTypes.FILES);
        w = C(c.pluginsResponse, _$$L.SearchResourceTypes.PLUGINS);
        T = C(c.widgetsResponse, _$$L.SearchResourceTypes.WIDGETS);
      }
      t === b.current && (r(e => ({
        ...e,
        [_$$L.SearchResourceTypes.MIXED]: o,
        [_$$L.SearchResourceTypes.FILES]: g,
        [_$$L.SearchResourceTypes.PLUGINS]: w,
        [_$$L.SearchResourceTypes.WIDGETS]: T
      })), d(!1), trackEventAnalytics(M5.SEARCH_QUERY_RESULT, {
        query: e.query,
        mixed: o.resources.length,
        entry_point: "community",
        context: "searchView",
        search_session_id: u,
        query_id: s,
        files: g.resources.length,
        plugins: w.resources.length,
        widgets: T.resources.length
      }));
    })();
  }, [e, _, u, b, y?.query, p]);
  return {
    resultsByType: t,
    isLoading: o,
    isLoadingAdditionalResources: c
  };
}
export function $$P2(e, t) {
  let [r, o] = useState(w());
  let [a, c] = useState(b());
  let u = useDispatch();
  let _ = useSelector(e => e.search.sessionId) || "unattributed";
  useEffect(() => {
    "unattributed" === _ && u(Dy({
      entryPoint: "resource_hub"
    }));
  }, [_, u]);
  let p = useSelector(e => e.search.queryId);
  let y = useSelector(e => e.search.lastLoadedQuery);
  let g = useRef(null);
  let v = !!(e.org_id || e.team_id);
  useEffect(() => {
    (async () => {
      let r = new URLSearchParams(e).toString();
      if (g.current && g.current === r) return;
      g.current = r;
      c(b());
      let s = C(await S(t, e, _, u, v || t === _$$L.SearchResourceTypes.PLUGINS), t);
      if (r !== g.current) return;
      let i = y.query !== e.query ? Ei() : p;
      y.query !== e.query && (u(w2({
        sessionId: _,
        query: e.query,
        queryId: i
      })), u(eK({
        queryId: i
      })));
      o(e => ({
        ...e,
        [t]: s
      }));
      c(e => ({
        ...e,
        [t]: !0
      }));
      let a = await k(e, _, u, t, v);
      let l = $$j1();
      let w = $$j1();
      let L = $$j1();
      a && (l = t === _$$L.SearchResourceTypes.FILES ? s : C(a.filesResponse, _$$L.SearchResourceTypes.FILES), w = t === _$$L.SearchResourceTypes.PLUGINS ? s : C(a.pluginsResponse, _$$L.SearchResourceTypes.PLUGINS), L = t === _$$L.SearchResourceTypes.WIDGETS ? s : C(a.widgetsResponse, _$$L.SearchResourceTypes.WIDGETS));
      r === g.current && (o(e => ({
        ...e,
        [_$$L.SearchResourceTypes.FILES]: l,
        [_$$L.SearchResourceTypes.PLUGINS]: w,
        [_$$L.SearchResourceTypes.WIDGETS]: L
      })), c({
        files: !0,
        plugins: !0,
        widgets: !0
      }), trackEventAnalytics(M5.SEARCH_QUERY_RESULT, {
        query: e.query,
        scope: mk.RESOURCE_HUB,
        entry_point: mk.RESOURCE_HUB,
        context: "searchView",
        search_session_id: _,
        query_id: i,
        files: l.resources.length,
        plugins: w.resources.length,
        widgets: L.resources.length,
        is_preview: !1,
        org_id: e.org_id,
        team_id: e.team_id
      }));
    })();
  }, [e, u, _, g, t, p, y, v]);
  return {
    resultsByType: r,
    loadedStatusByType: a
  };
}
export const Dz = $$A0;
export const E4 = $$j1;
export const _w = $$P2;