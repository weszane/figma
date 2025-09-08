import { useCallback, useRef } from "react";
import { useSelector } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
import { am } from "../figma_app/901889";
import { $ } from "../905/455748";
import { isInvalidValue } from "../905/216495";
import { lJ } from "../905/275640";
import { KH } from "../figma_app/722362";
import { _6 } from "../figma_app/386952";
import { Fk } from "../figma_app/167249";
import { Sh } from "../figma_app/889655";
import { zk } from "../figma_app/198712";
import { Tv } from "../figma_app/151869";
import { Vj } from "../905/561485";
import { rO } from "../figma_app/409807";
export function $$E0() {
  let [e, t] = lJ("stackCounterAlignItems");
  let r = am();
  let a = useSelector(Sh);
  let o = T(e, "CENTER", e => !e || isInvalidValue(e) || "BASELINE" === e);
  return useCallback((e, n) => {
    t(e ? "BASELINE" : o);
    r(e ? "Enable baseline alignment" : "Disable baseline alignment", {
      source: n,
      nodeIds: a
    });
  }, [t, r, o, a]);
}
export function $$y2() {
  let e = Tv();
  let t = Fk((e, t) => t ? t.map(t => {
    let r = e.get(t);
    return r ? r.childCount : 0;
  }) : null, e);
  return {
    selection: e ?? [],
    selectedChildCount: t
  };
}
export function $$b1() {
  let [e, t] = lJ("stackPrimaryAlignItems");
  let r = am();
  let {
    selection,
    selectedChildCount
  } = $$y2();
  let c = Vj(_6());
  let p = T(e, "CENTER", e => !e || isInvalidValue(e) || rO(e));
  return useCallback((e, n, s = zk.YES) => {
    let d = getFeatureFlags().ce_stack_justify_space_between || c ? "SPACE_BETWEEN" : "SPACE_EVENLY";
    let u = e ? d : p;
    t(u, s);
    r("Autolayout spacing mode changed", {
      mode: isInvalidValue(u) ? "MIXED" : u,
      source: n,
      selectedGuids: selection,
      selectedCount: selection.length,
      selectionChildCount: selectedChildCount
    });
  }, [t, r, p, selection, selectedChildCount, c]);
}
function T(e, t, r) {
  let i = KH();
  let a = $(i);
  let s = useRef(void 0);
  return r(e) ? (a && (s.current = t), s.current) : (s.current = e, e);
}
export const sR = $$E0;
export const uV = $$b1;
export const wm = $$y2;