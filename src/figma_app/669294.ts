import { zl } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { ds } from "../figma_app/314264";
import { h1, wm, LQ } from "../905/77316";
export function $$o1(e, t) {
  let r = zl.get(h1);
  let i = zl.get(wm);
  return d(e, r, zl.get(LQ)?.index ?? null, t, i);
}
export function $$l0(e, t, r, n) {
  let s = debugState.getState();
  let o = d(t, e, r, debugState, n);
  ds("canvas_mention_search_cancelled", s.openFile?.key, s, o);
}
function d(e, t, r, n, i) {
  return {
    search_session_id: i,
    node_id: e,
    node_type: function (e, t) {
      if (!e) return null;
      let r = t.getState().mirror.sceneGraph.get(e);
      return r?.type || null;
    }(e, n),
    query_length: t?.length,
    contains_at_symbol: t?.includes("@"),
    result_row_index: r
  };
}
export const W = $$l0;
export const x = $$o1;