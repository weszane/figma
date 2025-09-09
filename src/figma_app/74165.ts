import { useRef, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { AppStateTsApi, DesignGraphElements, UserActionState } from "../figma_app/763686";
import { useLatestRef } from "../figma_app/922077";
import { L3 } from "../figma_app/385215";
import { clearSelection } from "../figma_app/741237";
import { aV, ax, dH } from "../figma_app/722362";
import { getObservableOrFallback, getObservableValue } from "../figma_app/84367";
import { Ye } from "../figma_app/32128";
import { sO } from "../figma_app/21029";
import { ow } from "../figma_app/976749";
export function $$h1() {
  !function (e) {
    let t = sO();
    let r = getObservableOrFallback(AppStateTsApi.singleSlideView().isInFocusedNodeView);
    let {
      isPropertiesPanelCollapsed,
      setPropertiesPanelCollapsed,
      togglePropertiesPanelCollapsed
    } = $$m0();
    let u = useLatestRef(e);
    let _ = useLatestRef(r);
    let h = useRef();
    useEffect(() => {
      if ((e !== u || r !== _) && void 0 !== u) {
        if (e) {
          if (t) {
            let e = !r;
            setPropertiesPanelCollapsed(e);
            h.current = e;
          } else {
            clearSelection();
            isPropertiesPanelCollapsed ? h.current = !1 : (togglePropertiesPanelCollapsed(), h.current = !0);
          }
        } else h.current && isPropertiesPanelCollapsed && togglePropertiesPanelCollapsed();
      }
    }, [e, u, isPropertiesPanelCollapsed, togglePropertiesPanelCollapsed, setPropertiesPanelCollapsed, t, r, _]);
  }(useSelector(e => L3(e.multiplayer)));
}
export function $$m0() {
  let e = !getObservableValue(AppStateTsApi?.uiState()?.showPropertiesPanel, !0);
  let t = $$g2();
  let r = e || t;
  let i = useCallback(t => {
    e !== t && AppStateTsApi?.uiState().showPropertiesPanel.set(!t);
  }, [e]);
  let s = useCallback(() => {
    i(!r);
  }, [r, i]);
  return {
    isPropertiesPanelCollapsed: r,
    setPropertiesPanelCollapsed: i,
    togglePropertiesPanelCollapsed: s
  };
}
export function $$g2() {
  let e = ow();
  let t = Ye();
  let r = aV();
  let n = ax();
  let s = dH();
  let o = s === DesignGraphElements.FRAME || s === DesignGraphElements.COMMENTS || s === DesignGraphElements.VECTOR_PENCIL;
  return !!useSelector(e => e.mirror.appModel.activeUserAction === UserActionState.DEFAULT) && !!t && !r && !e && !n && !o;
}
export const iT = $$m0;
export const tt = $$h1;
export const ys = $$g2;