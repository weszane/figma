import { debug } from "../figma_app/465776";
import { AppStateTsApi, Fullscreen, ThemeMode } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager, useAtomWithSubscription, useAtomValueAndSetter, Ut } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { R } from "../905/165069";
import { logError } from "../905/714362";
import { handleAtomEvent } from "../905/502364";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { zE } from "../905/738636";
import { u2, $K } from "../figma_app/223206";
import { Kl } from "../905/766303";
import { useCurrentFileKey } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { Me } from "../figma_app/598018";
import { f6, ai } from "../figma_app/915202";
import { R as _$$R } from "../figma_app/53049";
import { EI } from "../figma_app/21029";
import { o as _$$o } from "../905/556276";
import { Bn } from "../figma_app/835688";
export function $$A0(e, t) {
  !function (e, t) {
    let r = atomStoreManager.get(Me);
    let n = debugState.getState();
    let i = Kl(n);
    e(zE({
      state: i,
      from: f6.DESIGN_TO_SLIDES_ENTRYPOINT,
      editorType: FFileType.SLIDES,
      team: r ?? void 0,
      openNewFileIn: ai.NEW_TAB,
      newFileDataLocalStorageKey: t
    }));
  }(e, t);
}
export function $$x2(e, t, r = !1) {
  return new Promise((n, o) => {
    if (null === t || null === e) {
      logError("storeFigmaContentForSlidesCreation", "No openFile or file version", {
        fileKey: e?.key,
        fileVersion: t
      }, {
        reportAsSentryError: !0
      });
      o();
      return;
    }
    let l = getSingletonSceneGraph();
    let c = l.getDirectlySelectedNodes();
    let u = [];
    if (r && c.length) u = l.getDirectlySelectedNodes().filter(e => _$$o(e)).map(e => e.guid);else {
      let e = AppStateTsApi?.slideLikeNodeObserverState();
      e && (u = [...e.slideLikeNodeIdsOnCanvas.getCopy()]);
    }
    let p = l.getCurrentPage()?.guid;
    if (!p || 0 === u.length) {
      logError("storeFigmaContentForSlidesCreation", "No page guid or empty target node ids", {
        pageGuid: p,
        targetNodeIds: u
      }, {
        reportAsSentryError: !0
      });
      o();
      return;
    }
    n(atomStoreManager.set(u2, {
      fileKey: e.key,
      fileVersion: t,
      pageGuid: p,
      selectedNodeIds: u
    }));
  });
}
async function N({
  fileKey: e,
  selectedNodeIds: t = []
}) {
  let r = await _$$R({
    fileKey: e,
    selectedGuids: t
  });
  Fullscreen?.applyNodesFromBuffer(r, e, t, !1);
}
export function $$C1() {
  let e = EI();
  let t = useCurrentFileKey();
  let r = useAtomWithSubscription(u2);
  let [a, d] = useAtomValueAndSetter($K);
  return R(() => {
    debug(!!r, "slideCreationData is undefined. This should never happen");
    AppStateTsApi?.slideThemeLibBindings().insertDefaultLocalTheme(ThemeMode.LIGHT, "Template style");
    AppStateTsApi?.uiState().leftPanelCollapsedUI3.set(!0);
    debugState.dispatch(VisualBellActions.enqueue({
      message: getI18nString("slides.general.copying_slides_over"),
      type: "design-to-slides-load",
      icon: VisualBellIcon.SPINNER,
      timeoutOverride: 3e5
    }));
    N({
      fileKey: r.fileKey,
      selectedNodeIds: r.selectedNodeIds
    }).then(() => {
      d(Ut);
      AppStateTsApi?.uiState().leftPanelCollapsedUI3.set(!1);
      debugState.dispatch(VisualBellActions.dequeue({
        matchType: "design-to-slides-load"
      }));
      debugState.dispatch(VisualBellActions.enqueue({
        message: getI18nString("slides.present_summary.visual_bells.complete"),
        type: "design-to-slides-complete",
        icon: VisualBellIcon.CHECK,
        timeoutOverride: 3e3
      }));
      handleAtomEvent({
        id: Bn
      });
    });
  }, [t, e, r, d], () => !!(t && e && r));
}
export const PF = $$A0;
export const TG = $$C1;
export const fx = $$x2;