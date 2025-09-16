import { useEffect, useMemo, useCallback } from "react";
import { useSelector, useStore, useDispatch } from "react-redux";
import { AppStateTsApi, HandoffBindingsCpp, AutosaveEventType } from "../figma_app/763686";
import { useAtomValueAndSetter } from "../figma_app/27355";
import o from "../vendor/523035";
import { trackFileEventWithStore } from "../figma_app/901889";
import { selectWithShallowEqual } from "../905/103090";
import { useCanAccessDevModeEntryPoint } from "../figma_app/473493";
import { useHasParentOrgId } from "../905/882262";
import { Ym } from "../figma_app/806075";
import { selectViewAction } from "../905/929976";
import { subscribeToGuidsAndTrack } from "../figma_app/582924";
import { aV } from "../figma_app/722362";
import { getObservableOrFallback } from "../figma_app/84367";
import { FEditorType } from "../figma_app/53721";
import { SelectorType } from "../figma_app/707808";
import { isFullscreenDevHandoffView } from "../905/782918";
import { gk } from "../figma_app/715641";
import { _o } from "../figma_app/879363";
var l = o;
export function $$S12() {
  return useSelector(e => $$C4(e.selectedView));
}
export function $$v8() {
  return useSelector(e => {
    var t;
    return !!(t = e.selectedView) && t?.view === "fullscreen" && t?.showDevModeComponentBrowser === !0;
  });
}
export function $$A1() {
  return useSelector(e => function (e) {
    if (e) return e?.view === "fullscreen" ? e?.componentKey : void 0;
  }(e.selectedView));
}
export function $$x14() {
  return useSelector(e => e.selectedView?.view === "fullscreen" && e.selectedView?.showDevModeComponentBrowser === !0 && e.selectedView?.githubRepositorySelectorMode !== void 0 && e.selectedView?.githubRepositorySelectorMode !== SelectorType.NONE);
}
export function $$N11() {
  return useSelector(e => e.selectedView?.view === "fullscreen" && e.selectedView?.showDevModeComponentBrowser === !0 ? e.selectedView?.githubRepositorySelectorMode ?? SelectorType.NONE : SelectorType.NONE);
}
export function $$C4(e) {
  return !!e && e?.view === "fullscreen" && e?.showOverview === !0;
}
export function $$w9() {
  return useSelector(e => $$O13(e.selectedView) ?? null);
}
export function $$O13(e) {
  if (e) return isFullscreenDevHandoffView(e) ? e.devModeFocusId : void 0;
}
export function $$R3() {
  let e = aV();
  let t = getObservableOrFallback(AppStateTsApi.currentSceneState().nodesWithStatusLoaded);
  useEffect(() => {
    if (e || t) return;
    let r = HandoffBindingsCpp.getAllNodesWithStatusesByPage();
    let n = new Set();
    r.forEach(e => {
      e.forEach(e => {
        n.add(e);
      });
    });
    subscribeToGuidsAndTrack(n, AutosaveEventType.DEV_HANDOFF_STATUS).then(() => {
      HandoffBindingsCpp.onAllNodesWithStatusesLoaded(r);
    });
  }, [e, t]);
  return t;
}
export function $$L7() {
  let e = getObservableOrFallback(AppStateTsApi.currentSceneState().numReadyNodesByPage);
  let t = getObservableOrFallback(AppStateTsApi.currentSceneState().numCompletedNodesByPage);
  return useMemo(() => l()([...e.values(), ...t.values()]), [e, t]);
}
export function $$P5() {
  let e = useHasParentOrgId();
  let t = $$L7();
  return e && t > 0;
}
export function $$D2() {
  let e = useSelector(e => e.mirror.appModel.currentPage);
  return selectWithShallowEqual(t => "fullscreen" === t.selectedView.view ? {
    ...t.selectedView,
    showOverview: !0,
    overviewBackButtonTargetNodeId: e
  } : t.selectedView);
}
export function $$k6() {
  let e = useStore();
  let t = trackFileEventWithStore();
  let r = !useCanAccessDevModeEntryPoint();
  let [, a] = useAtomValueAndSetter(_o);
  let o = useDispatch();
  let [l, c] = useAtomValueAndSetter(gk);
  let p = $$D2();
  return useCallback(() => {
    if (r) return;
    t("Dev Mode Overview Entry Clicked");
    let n = e.getState();
    "editorType" in n.selectedView && n.selectedView.editorType === FEditorType.Design && Ym(n, FEditorType.DevHandoff, "overview_entry");
    a("entry_clicked");
    c(void 0);
    o(selectViewAction(p));
  }, [r, o, p, c, a, e, t]);
}
export function $$M10(e) {
  let t = useDispatch();
  let r = function (e) {
    let t = useSelector(e => e.mirror.appModel.currentPage);
    return selectWithShallowEqual(r => "fullscreen" === r.selectedView.view ? {
      ...r.selectedView,
      showDevModeComponentBrowser: !0,
      componentBrowserBackButtonTargetNodeId: t,
      componentBrowserEntrypoint: e
    } : r.selectedView);
  }(e);
  return useCallback(() => {
    t(selectViewAction(r));
  }, [t, r]);
}
export function $$F0() {
  let e = useDispatch();
  let t = useSelector(e => e.selectedView);
  return useCallback(r => {
    "fullscreen" === t.view && e(selectViewAction({
      ...t,
      githubRepositorySelectorMode: r
    }));
  }, [e, t]);
}
export const Bt = $$F0;
export const NZ = $$A1;
export const U0 = $$D2;
export const US = $$R3;
export const Wl = $$C4;
export const X0 = $$P5;
export const Xd = $$k6;
export const ZI = $$L7;
export const ZO = $$v8;
export const hA = $$w9;
export const ju = $$M10;
export const kZ = $$N11;
export const l7 = $$S12;
export const s4 = $$O13;
export const xV = $$x14;