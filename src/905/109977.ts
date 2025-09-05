import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useSelector, useDispatch } from "../vendor/514228";
import { tx } from "../905/303541";
import { Q_ } from "../905/570707";
import { IT } from "../905/713695";
import { h as _$$h } from "../figma_app/198885";
import { Nf } from "../figma_app/633080";
import { We } from "../905/909811";
import { c as _$$c } from "../905/511370";
import { useMemo } from "react";
import { isNotNullish } from "../figma_app/95419";
import { Rs } from "../figma_app/288654";
import { Lbw } from "../figma_app/43951";
import { RV } from "../figma_app/214643";
function p(e, t) {
  let i = t && Nf(t) && t?.team_id;
  let n = t?.library_key;
  if (i && n) return e?.[i]?.[n];
}
function A({
  publishedLibrary: e,
  searchResults: t
}) {
  let i = Rs(Lbw, {
    libraryKey: e?.library_key ?? ""
  }, {
    enabled: !!e?.library_key
  });
  let r = useMemo(() => {
    let i = p(t?.variables?.filteredByTeamId ?? {}, e);
    return i ? Object.values(i).reduce((e, t) => {
      let i = e[t.variableSetId];
      return {
        ...e,
        [t.variableSetId]: {
          count: (i?.count ?? 0) + 1,
          minScore: Math.min(i?.minScore, t.score)
        }
      };
    }, {}) : {};
  }, [t?.variables?.filteredByTeamId, e]);
  let a = useMemo(() => p(t?.variableSets?.filteredByTeamId ?? {}, e), [t?.variableSets?.filteredByTeamId, e]);
  let s = useMemo(() => {
    if ("loaded" !== i.status) return [];
    let e = i.data?.libraryKeyToFile?.file?.variableCollections;
    let t = e?.map(e => {
      let t = r[e.id];
      return t ? {
        ...e,
        numVariableMatches: t.count,
        score: t.minScore
      } : a?.[e.nodeId] ? {
        ...e,
        score: a?.[e.nodeId]?.score ?? 0
      } : void 0;
    });
    return t?.filter(isNotNullish).sort((e, t) => t.score - e.score).slice(0, 4) ?? [];
  }, [i, r, a]);
  return jsx(RV, {
    forBestMatches: !0,
    variableSets: s
  });
}
export function $$y0(e) {
  let {
    publishedLibrary,
    inline,
    onItemClick,
    width,
    searchQuery,
    maxShownItems = 8,
    showLibraryModalUiRefresh = !1
  } = e;
  let _ = useSelector(_$$h);
  let y = useSelector(e => e.dropdownShown);
  let [b] = IT(Q_(searchQuery));
  let E = useDispatch();
  if (!searchQuery || "loaded" !== b.status) return null;
  let x = I(b.data?.components.filteredByTeamId, maxShownItems, publishedLibrary);
  let S = x.length > 0;
  let w = I(b.data?.stateGroups.filteredByTeamId, maxShownItems, publishedLibrary);
  let C = w.length > 0;
  let T = inline ? null : I(b.data?.styles.filteredByTeamId, 14, publishedLibrary)?.sort((e, t) => t.score - e.score);
  let k = T && T.length > 0;
  let R = !inline && function (e, t, i) {
    if (!e || !t) return !1;
    let n = p(e.filteredByTeamId, i);
    return Object.keys(p(t.filteredByTeamId, i) ?? {}).length > 0 || Object.keys(n ?? {}).length > 0;
  }(b.data?.variableSets, b.data?.variables, publishedLibrary);
  if (!S && !k && !C && !R) return inline ? jsx(v, {
    v2: !0
  }) : null;
  let N = [...x, ...w];
  N.sort((e, t) => t.score - e.score);
  N.length > maxShownItems && N.splice(maxShownItems, N.length);
  return jsxs("div", {
    className: inline ? "" : "best_matches--bestMatches--8TC5A",
    children: [!inline && jsx("div", {
      className: "best_matches--header--7vka4",
      children: tx("design_systems.libraries_modal.search_query_best_matches", {
        searchQuery
      })
    }), R && jsx(A, {
      publishedLibrary,
      searchResults: b.data
    }), inline && jsx(v, {
      v2: showLibraryModalUiRefresh
    }), T && jsx(_$$c, {
      styleList: T
    }), T && jsx("div", {
      style: {
        height: 12
      }
    }), N && jsx(We, {
      dispatch: E,
      dropdownShown: y,
      items: N,
      onItemClick,
      recordingKey: "bestMatchesTiles",
      selectedView: _,
      showLibraryModalUiRefresh,
      sourceForTracking: "Library Modal",
      ui3Compact: !0,
      width
    }), inline && jsx(v, {
      v2: !0
    })]
  });
}
export function $$b1({
  libraryFile: e,
  width: t,
  inTeamLibrarySettingsModal: i,
  maxShownItems: a = 8
}) {
  let s = useDispatch();
  let o = e.components;
  let d = e.stateGroups;
  let u = useSelector(_$$h);
  let p = useSelector(e => e.dropdownShown);
  let m = [...o, ...d].sort((e, t) => e.score < t.score ? 1 : -1).slice(0, a);
  return m.length ? jsxs(Fragment, {
    children: [jsx(v, {
      v2: !0
    }), jsx(We, {
      items: m,
      sourceForTracking: "Library Modal",
      width: t,
      dispatch: s,
      selectedView: u,
      dropdownShown: p,
      recordingKey: "bestMatchesTiles",
      showLibraryModalUiRefresh: !i,
      ui3Compact: !0
    }), jsx(v, {
      v2: !0
    })]
  }) : null;
}
function v({
  v2: e
}) {
  return jsx("div", {
    className: e ? "best_matches--bestMatchesSpacer_v2--XCkPE" : "best_matches--bestMatchesSpacer--W2Yff"
  });
}
function I(e, t, i) {
  let n = i && Nf(i) ? i.team_id : null;
  if (!n) return [];
  let r = i?.library_key;
  if (r && e?.[n]?.[r]) {
    let i = e?.[n][r];
    return (i ? Object.values(i) : []).slice(0, t);
  }
  return [];
}
export const C = $$y0;
export const y = $$b1;