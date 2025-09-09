import { f as _$$f } from "../905/412913";
import { useState, useEffect, useMemo } from "react";
import { atom, createRemovableAtomFamily } from "../figma_app/27355";
import { A as _$$A } from "../vendor/850789";
import { trackEventAnalytics } from "../905/449184";
import { handleAtomEvent } from "../905/502364";
import { openFileAtom } from "../figma_app/516028";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { eD } from "../figma_app/646357";
import { M4 } from "../905/713695";
import { h as _$$h } from "../figma_app/198885";
import { k1, vx } from "../905/91038";
import { kb } from "../figma_app/502247";
import { Yu, cX } from "../figma_app/633080";
import { $W, yX, YQ as _$$YQ } from "../905/144933";
var n;
let A = _$$f();
function y(e, t, i) {
  let n = {};
  let r = {};
  for (let t of e) {
    let e = A(t);
    if (!(e in i)) {
      trackEventAnalytics("library_modal_search_inconsistency");
      continue;
    }
    e in r && !(t.score > r[e]) || (r[e] = t.score);
    let a = t.team_id || Yu;
    n[a] = n[a] || {};
    n[a][e] = n[a][e] || {};
    n[a][e][t.node_id] = t;
  }
  return {
    filteredByTeamId: n,
    maxScorePerFile: r,
    numAssetsByFileKey: t
  };
}
function b(e, t) {
  let i = {};
  let n = {};
  for (let t of e) {
    let e = t.library_key;
    let r = n[e];
    (!r || t.score > r) && (n[e] = t.score);
    let a = t.team_id || Yu;
    i[a] = i[a] || {};
    i[a][e] ??= {};
    i[a][e][t.node_id] = t;
  }
  return {
    filteredByTeamId: i,
    maxScorePerLibrary: n,
    numAssetsByLibraryKey: t
  };
}
export function $$v2() {
  let [e, t] = useState("");
  let [i] = _$$A(e, 100);
  useEffect(() => {
    handleAtomEvent({
      id: "Library Search Query Changed",
      properties: {
        text: i
      }
    });
  }, [i]);
  return useMemo(() => ({
    searchQuery: e,
    debouncedSearchQuery: i,
    setSearchQuery: t
  }), [e, i, t]);
}
(e => {
  e.livestoreQuery = M4.Query({
    fetch: async ({
      query: e,
      fileVersion: t,
      currentOrgId: i,
      teamId: n
    }) => {
      let r = Date.now();
      await kb.promise;
      let a = await $W.getLibraryAssets({
        query: e,
        fv: t || 0,
        orgId: i || void 0,
        teamId: n || void 0
      });
      trackEventAnalytics("library-preferences-modal-search-time", {
        useSSS: !0,
        elapsedTime: Date.now() - r
      });
      return a.data.meta;
    },
    enabled: ({
      query: e
    }) => null != e && e.trim().length > 0,
    output: ({
      data: e,
      get: t
    }) => {
      let i = t(k1);
      return {
        components: y(e.components, e.num_components_by_file, i),
        stateGroups: y(e.state_groups, e.num_state_groups_by_file, i),
        styles: y(e.styles, e.num_styles_by_file, i),
        variables: y(e.variables ? e.variables.map(e => yX(e)) : [], e.num_variables_by_file ?? {}, i),
        variableSets: y(e.variable_sets ? e.variable_sets.map(e => _$$YQ(e)) : [], e.num_variable_sets_by_file ?? {}, i)
      };
    }
  });
  e.libraryKeyLivestoreQuery = M4.Query({
    fetch: async ({
      query: e,
      fileVersion: t,
      currentOrgId: i,
      teamId: n
    }) => {
      let r = Date.now();
      await kb.promise;
      let a = await $W.getLibraryAssetsByLibraryKey({
        query: e,
        fv: t || 0,
        orgId: i || void 0,
        teamId: n || void 0
      });
      trackEventAnalytics("library-preferences-modal-search-time", {
        useSSS: !0,
        elapsedTime: Date.now() - r
      });
      return a.data.meta;
    },
    enabled: ({
      query: e
    }) => null != e && e.trim().length > 0,
    output: ({
      data: e
    }) => ({
      components: b(e.components, e.num_components_by_library_key),
      stateGroups: b(e.state_groups, e.num_state_groups_by_library_key),
      styles: b(e.styles, e.num_styles_by_library_key),
      variables: b(e.variables ? e.variables.map(e => yX(e)) : [], e.num_variables_by_library_key ?? {}),
      variableSets: b(e.variable_sets ? e.variable_sets.map(e => _$$YQ(e)) : [], e.num_variable_sets_by_library_key ?? {})
    })
  });
})(n || (n = {}));
let I = createReduxSubscriptionAtomWithState(eD);
let E = createReduxSubscriptionAtomWithState(_$$h);
let x = createReduxSubscriptionAtomWithState(e => e.modalShown);
let S = atom(e => {
  let t = e(E);
  let i = e(x);
  return "team" === t.view && i?.type === cX ? t.teamId : null;
});
let w = createReduxSubscriptionAtomWithState(vx);
let $$C1 = createRemovableAtomFamily(e => atom(t => {
  let i = t(I);
  let r = t(S);
  let a = t(openFileAtom);
  let s = a?.editorType;
  return t(n.livestoreQuery({
    query: e,
    fileVersion: t(w),
    currentOrgId: i,
    teamId: r,
    editorType: s
  }));
}));
let $$T0 = createRemovableAtomFamily(e => atom(t => {
  let i = t(I);
  let r = t(S);
  let a = t(openFileAtom);
  let s = a?.editorType;
  return t(n.libraryKeyLivestoreQuery({
    query: e,
    fileVersion: t(w),
    currentOrgId: i,
    teamId: r,
    editorType: s
  }));
}));
export const Q_ = $$T0;
export const HK = $$C1;
export const PG = $$v2;