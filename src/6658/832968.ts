import { useMemo } from "react";
import { getFeatureFlags } from "../905/601108";
import { IT } from "../figma_app/566371";
import { af } from "../1250/218868";
import { Mo, wP } from "../1250/51387";
import { jb } from "../1250/807901";
export function $$d1(e) {
  let {
    planType,
    planId
  } = jb();
  let d = useMemo(() => e.map(e => e.assetKey).join(","), [e]);
  let l = useMemo(() => e.map(({
    component: e,
    assetKey: n
  }) => ({
    type: e.type,
    key: n,
    library_key: e.library_key
  })), [d]);
  let p = getFeatureFlags().dt_component_browser_bulk_mapping || getFeatureFlags().dt_component_browser_inline_suggestions || getFeatureFlags().dt_component_browser_suggestions_debug;
  let m = useMemo(() => ({
    assets: l,
    plan_parent_id: planId,
    plan_parent_type: planType,
    num_results_per_asset: 5
  }), [d, planId, planType]);
  let u = l.length > 0 && p;
  let _ = useMemo(() => u ? af() : "", [m, u]);
  let [g] = IT(Mo({
    ...m,
    query_id: _,
    session_id: _
  }), {
    enabled: u
  });
  return {
    suggestions: g.data?.results ?? {},
    searchSessionId: _,
    isLoadingSuggestions: "loading" === g.status
  };
}
export function $$l0(e) {
  let [n] = IT(wP(e), {
    enabled: !!e
  });
  return {
    ingestionStatus: n.data?.ingestion_status,
    hasLoaded: "loaded" === n.status,
    errors: n.errors
  };
}
export const K = $$l0;
export const P = $$d1;