import { jsx } from "react/jsx-runtime";
import { createContext, useState, useRef, useEffect, useCallback, useMemo, useContext } from "react";
import { isNotNullish, assertNotNullish } from "../figma_app/95419";
import { t as _$$t } from "../905/150656";
import { Qw, H as _$$H } from "../905/989992";
import { A as _$$A } from "../vendor/850789";
import { ZC } from "../figma_app/39751";
import { Rs } from "../figma_app/288654";
import { Xm, gB } from "../905/723791";
import { g as _$$g } from "../905/880308";
import { n1 } from "../figma_app/657017";
import { LH } from "../905/872904";
import { saW } from "../figma_app/43951";
import { Wv } from "../figma_app/633080";
import { F as _$$F, r as _$$r } from "../905/336143";
import { l as _$$l } from "../905/716947";
import { az } from "../905/449184";
import { IT } from "../figma_app/566371";
import { tS } from "../figma_app/516028";
import { XD } from "../905/842072";
import { Q_ } from "../905/570707";
import { ol } from "../figma_app/598018";
import { mG, Qj, ry } from "../905/825399";
import { S as _$$S } from "../905/612212";
let w = Qw.loading();
let C = Qw.disabled();
let k = createContext(null);
export function $$R1(e) {
  switch (e) {
    case Wv.UPDATES:
      return "updates";
    case Wv.TEAM_LIBRARIES:
      return "teams";
    case Wv.RECOMMENDED:
      return "recommended";
    default:
      return "thisFile";
  }
}
export function $$N0({
  entrypoint: e,
  initialUpdatesModalScope: t,
  initialTab: i,
  sessionId: f,
  modalRef: N,
  children: P
}) {
  let O = _$$F();
  let {
    hasProAccess,
    hasOrgAccess
  } = mG();
  let F = n1();
  let [M] = useState(() => f ?? _$$g());
  let [j, U, B] = _$$t.useTabs({
    thisFile: !0,
    updates: !0,
    teams: !0,
    recommended: hasProAccess,
    search: !0,
    org: hasOrgAccess,
    uiKits: F
  }, {
    orientation: "vertical",
    defaultActive: $$R1(i)
  });
  let V = function (e) {
    let t = useRef("thisFile");
    useEffect(() => {
      "search" !== e.activeTab && (t.current = e.activeTab);
    }, [e.activeTab]);
    return t.current;
  }(B);
  let G = function (e) {
    let t = ZC(e.activeTab);
    let [i, n] = useState(!1);
    useEffect(() => {
      t && e.activeTab !== t && n(!0);
    }, [e.activeTab, t]);
    return i;
  }(B);
  let [z, H, W, K, Y, q, $, Z] = function (e, t, i) {
    let [n, s] = useState("");
    let [c, u] = useState(void 0);
    let g = useCallback(i => {
      s(i);
      "" === i ? (_$$S.setLastAction(_$$S.NavAction.CLEAR_SEARCH), t.setActiveTab(e)) : t.setActiveTab("search");
    }, [t, e]);
    let f = useCallback(() => {
      s("");
      t.setActiveTab(e);
      _$$S.setLastAction(_$$S.NavAction.CLEAR_SEARCH);
    }, [t, e]);
    let _ = useCallback(() => {
      n && t.setActiveTab("search");
    }, [n, t]);
    let [k] = _$$A(n, 100);
    let {
      results,
      queryId
    } = function (e, t, i) {
      let n = function (e) {
        let [t] = IT(Q_(e), {
          enabled: !!e
        });
        let i = Qj({
          includeLocalLibrary: !0
        });
        return useMemo(() => {
          if ("disabled" === t.status) return C;
          if ("loaded" !== t.status || "loaded" !== i.status) return w;
          let e = t.data.components;
          let n = t.data.styles;
          let r = t.data.stateGroups;
          let a = t.data.variableSets;
          let s = t.data.variables;
          let l = [e.filteredByTeamId, n.filteredByTeamId, r.filteredByTeamId, a?.filteredByTeamId ?? {}, s?.filteredByTeamId ?? {}];
          let d = [];
          let c = new Set();
          for (let e of l) for (let n in e) for (let r in e[n]) {
            let e = _$$l(r);
            if (c.has(e)) continue;
            let n = i.result.find(t => t.library_key === e);
            if (n) {
              let i = Math.max(t.data?.components.maxScorePerLibrary[e] || -1 / 0, t.data?.styles.maxScorePerLibrary[e] || -1 / 0, t.data?.stateGroups.maxScorePerLibrary[e] || -1 / 0, t.data?.variableSets?.maxScorePerLibrary[e] || -1 / 0, t.data?.variables?.maxScorePerLibrary[e] || -1 / 0);
              d.push({
                library: n,
                score: i
              });
              c.add(e);
            }
          }
          d.sort((e, t) => t.score - e.score);
          return Qw.loaded(d.map(e => e.library));
        }, [i, t]);
      }(e);
      let s = function (e) {
        let t = ry();
        let i = n1();
        let [n] = IT(XD({
          query: e
        }), {
          enabled: !!e && i
        });
        return useMemo(() => {
          if ("disabled" === n.status) return C;
          if ("disabled" === t.status || "errors" === t.status || "errors" === n.status) return Qw.loaded([]);
          if ("loaded" !== n.status || "loaded" !== t.status) return Qw.loading();
          let e = n.data.libraries.map(e => t.result.find(t => t.hub_file_id === e.id)).filter(isNotNullish);
          return Qw.loaded(e);
        }, [t, n]);
      }(e);
      let l = useMemo(() => {
        if ("disabled" === n.status && "disabled" === s.status) return C;
        if ("loading" === n.status || "loading" === s.status) return w;
        let e = "loaded" === n.status ? n.data : [];
        let t = "loaded" === s.status ? s.data : [];
        return Qw.loaded([...e, ...t]);
      }, [n.status, n.data, s.status, s.data]);
      let d = function (e, t, i, n) {
        let [a, s] = useState(void 0);
        let [o, l] = useState(!0);
        let d = tS() ?? void 0;
        let c = ol()?.id;
        let u = LH() ?? void 0;
        useEffect(function () {
          t ? (s(_$$g()), l(!1)) : (s(void 0), l(!0));
        }, [t]);
        let m = "loaded" === e.status;
        useEffect(function () {
          t && a && !o && m && (az.trackDefinedEvent("library_modal.search_result", {
            fileKey: d,
            teamId: c,
            orgId: u,
            queryId: a,
            query: t,
            numResults: e.data.length,
            libraryModalSessionId: i,
            searchSessionId: n
          }), l(!0));
        }, [t, o, i, m, d, u, a, e.data?.length, n, l, c]);
        return a;
      }(l, e, t, i);
      return {
        results: l,
        queryId: d
      };
    }(k, i, c);
    let P = ZC(t.activeTab);
    useEffect(function () {
      "search" === P && "search" !== t.activeTab ? u(void 0) : "search" !== P && "search" === t.activeTab && u(_$$g());
    }, [P, t.activeTab]);
    return [n, k, g, f, _, results, c, queryId];
  }(V, B, M);
  let X = function () {
    let e = LH();
    let {
      hasEntAccess
    } = mG();
    let i = Rs(saW, {
      orgId: e
    }, {
      enabled: hasEntAccess
    });
    return useMemo(() => i.status === _$$H.LOADING ? Xm() : gB(i.data?.org?.workspaces ?? []), [i.data?.org?.workspaces, i.status]);
  }();
  let Q = useMemo(() => ({
    sessionId: M,
    tabPropsMap: j,
    tabPanelPropsMap: U,
    tabManager: B,
    searchQuery: z,
    debouncedSearchQuery: H,
    setSearchQuery: W,
    clearSearchQuery: K,
    searchResults: q,
    searchSessionId: $,
    queryId: Z,
    onFocusSearchBar: Y,
    entrypoint: e,
    hasSwitchedTabs: G,
    initialUpdatesModalScope: t,
    workspaces: X,
    modalRef: N
  }), [M, j, U, B, z, H, W, K, q, $, Z, Y, e, G, t, X, N]);
  return jsx(k.Provider, {
    value: Q,
    children: jsx(_$$r.Provider, {
      value: O,
      children: P
    })
  });
}
export function $$P3() {
  return assertNotNullish(useContext(k), "useLibraryModalContext must be used within a LibraryModalContextProvider");
}
export function $$O4() {
  return useContext(k);
}
export function $$D2() {
  return !!$$O4();
}
export const Tp = $$N0;
export const FX = $$R1;
export const er = $$D2;
export const zm = $$P3;
export const sz = $$O4;