import { useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { trackFileEventWithUser } from "../figma_app/901889";
import { $ } from "../905/455748";
import { isInvalidValue } from "../905/216495";
import { useSelectionProperty } from "../905/275640";
import { useSceneGraphSelection } from "../figma_app/722362";
import { getSelectedView } from "../figma_app/386952";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { selectSceneGraphSelectionKeys } from "../figma_app/889655";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { Tv } from "../figma_app/151869";
import { isFullscreenSitesView } from "../905/561485";
import { rO } from "../figma_app/409807";
export function $$E0() {
  let [e, t] = useSelectionProperty("stackCounterAlignItems");
  let r = trackFileEventWithUser();
  let a = useSelector(selectSceneGraphSelectionKeys);
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
  let t = useDeepEqualSceneValue((e, t) => t ? t.map(t => {
    let r = e.get(t);
    return r ? r.childCount : 0;
  }) : null, e);
  return {
    selection: e ?? [],
    selectedChildCount: t
  };
}
export function $$b1() {
  let [e, t] = useSelectionProperty("stackPrimaryAlignItems");
  let r = trackFileEventWithUser();
  let {
    selection,
    selectedChildCount
  } = $$y2();
  let c = isFullscreenSitesView(getSelectedView());
  let p = T(e, "CENTER", e => !e || isInvalidValue(e) || rO(e));
  return useCallback((e, n, s = yesNoTrackingEnum.YES) => {
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
  let i = useSceneGraphSelection();
  let a = $(i);
  let s = useRef(void 0);
  return r(e) ? (a && (s.current = t), s.current) : (s.current = e, e);
}
export const sR = $$E0;
export const uV = $$b1;
export const wm = $$y2;