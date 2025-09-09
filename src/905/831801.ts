import { useEffect, useState, useCallback } from "react";
import { c2 } from "../905/382883";
import { VariableResolvedDataType } from "../figma_app/763686";
import { useLatestRef } from "../figma_app/922077";
import { renderI18nText } from "../905/303541";
import { $d, dB } from "../905/901822";
let $$d3 = -1;
let $$c2 = {
  ALL: {
    label: renderI18nText("variables.authoring_modal.filters.all"),
    type: $$d3
  },
  COLOR: {
    label: renderI18nText("variables.authoring_modal.filters.colors"),
    type: VariableResolvedDataType.COLOR
  },
  FLOAT: {
    label: renderI18nText("variables.authoring_modal.filters.numbers"),
    type: VariableResolvedDataType.FLOAT
  },
  STRING: {
    label: renderI18nText("variables.authoring_modal.filters.strings"),
    type: VariableResolvedDataType.STRING
  },
  BOOLEAN: {
    label: renderI18nText("variables.authoring_modal.filters.booleans"),
    type: VariableResolvedDataType.BOOLEAN
  }
};
let $$u4 = {
  ALL: {
    label: renderI18nText("variables.authoring_modal.filters.all")
  },
  LOCAL_TO_COLLECTION: {
    label: renderI18nText("variables.authoring_modal.filters.local_to_extended_collection")
  },
  OVERRIDES: {
    label: renderI18nText("variables.authoring_modal.filters.overridden_in_extended_collection")
  }
};
let p = {
  query: "",
  filters: {
    typeFilters: ["ALL"],
    collectionFilter: "ALL"
  }
};
export function $$m7(e) {
  return $$h8(e) || e.query !== p.query;
}
export function $$h8(e) {
  return !c2(e.filters, p.filters);
}
export function $$g1({
  resultsCount: e,
  filterState: t,
  emptyReason: i,
  currentVariableSetId: r
}) {
  let a = $d({
    debounce: !0
  });
  let {
    query,
    searchSessionId
  } = t;
  let c = useLatestRef(query);
  useEffect(() => {
    query !== c && "" !== query && a("ds_variables_modal.search_query_result", {
      collection_id: r,
      query,
      search_session_id: searchSessionId,
      filter_state: JSON.stringify(t),
      results_count: e,
      empty_reason: i ?? "not-empty"
    });
  }, [t.query, r, t, e, i, query, searchSessionId, c, a]);
}
export function $$f6() {
  let [e, t] = useState(() => p);
  let i = useCallback(e => {
    t(t => ({
      ...t,
      query: e
    }));
  }, []);
  let r = dB(e.query);
  useEffect(() => {
    t(e => ({
      ...e,
      searchSessionId: r
    }));
  }, [r]);
  let a = useCallback(e => {
    t(t => ({
      ...t,
      filters: {
        ...t.filters,
        typeFilters: e
      }
    }));
  }, []);
  let s = $d();
  let o = useCallback(t => {
    if ("ALL" === t) {
      a(["ALL"]);
      return;
    }
    let i = e.filters.typeFilters.includes(t);
    s("ds_variables_modal.filter_applied", {
      value: t,
      action_type: i ? "removed" : "added",
      filter_state: JSON.stringify(e),
      search_session_id: r
    });
    let n = i ? e.filters.typeFilters.filter(e => e !== t) : [...e.filters.typeFilters, t];
    n.includes("ALL") && n.splice(n.indexOf("ALL"), 1);
    0 === n.length && n.push("ALL");
    a(n);
  }, [e, r, a, s]);
  let d = useCallback(e => {
    t(t => ({
      ...t,
      filters: {
        ...t.filters,
        collectionFilter: e
      }
    }));
  }, []);
  let c = useCallback(e => {
    i(e ?? "");
  }, [i]);
  let u = useCallback(() => {
    s("ds_variables_modal.search_cleared", {
      search_session_id: r
    });
    c("");
  }, [c, r, s]);
  let m = useCallback(e => "" === e ? u() : c(e), [u, c]);
  let h = useCallback(({
    reason: i
  }) => {
    s("ds_variables_modal.remove_filters_clicked", {
      filter_state: JSON.stringify(e),
      search_session_id: r,
      action: i
    });
    t(p);
  }, [e, r, s]);
  return {
    filterState: e,
    setQuery: m,
    clearQuery: u,
    clearFilterState: h,
    toggleTypeFilter: o,
    setCollectionFilter: d
  };
}
export var $$_0 = (e => (e.CollectionChanged = "collection-changed", e.VariableAdded = "variable-added", e.EmptyStateButton = "empty-state-button", e.InputButton = "input-button", e))($$_0 || {});
export function $$A5({
  currentVariableSetId: e,
  unfilteredTableRowCount: t,
  filteredTableRowCount: i,
  clearFilterState: r,
  clearQuery: a
}) {
  let o = useLatestRef(e);
  useEffect(() => {
    void 0 !== e && void 0 !== o && e !== o && (r({
      reason: "collection-changed"
    }), a());
  }, [e, o, r, a]);
  let l = useLatestRef(t);
  let d = useLatestRef(i);
  useEffect(() => {
    void 0 !== t && void 0 !== l && void 0 !== i && void 0 !== d && !(i > d) && t > l && (r({
      reason: "variable-added"
    }), a());
  }, [t, l, r, a, i, d]);
}
export const Z_ = $$_0;
export const _h = $$g1;
export const gX = $$c2;
export const ic = $$d3;
export const oR = $$u4;
export const q7 = $$A5;
export const r$ = $$f6;
export const uC = $$m7;
export const z7 = $$h8;