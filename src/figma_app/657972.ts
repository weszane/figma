import { debug } from "../figma_app/465776";
import { Ez5, glU, zMY } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { zl, md, fp, Ut } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { R } from "../905/165069";
import { x1 } from "../905/714362";
import { YQ } from "../905/502364";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { zE } from "../905/738636";
import { u2, $K } from "../figma_app/223206";
import { Kl } from "../905/766303";
import { tS } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { Me } from "../figma_app/598018";
import { f6, ai } from "../figma_app/915202";
import { R as _$$R } from "../figma_app/53049";
import { EI } from "../figma_app/21029";
import { o as _$$o } from "../905/556276";
import { Bn } from "../figma_app/835688";
export function $$A0(e, t) {
  !function (e, t) {
    let r = zl.get(Me);
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
      x1("storeFigmaContentForSlidesCreation", "No openFile or file version", {
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
      let e = Ez5?.slideLikeNodeObserverState();
      e && (u = [...e.slideLikeNodeIdsOnCanvas.getCopy()]);
    }
    let p = l.getCurrentPage()?.guid;
    if (!p || 0 === u.length) {
      x1("storeFigmaContentForSlidesCreation", "No page guid or empty target node ids", {
        pageGuid: p,
        targetNodeIds: u
      }, {
        reportAsSentryError: !0
      });
      o();
      return;
    }
    n(zl.set(u2, {
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
  glU?.applyNodesFromBuffer(r, e, t, !1);
}
export function $$C1() {
  let e = EI();
  let t = tS();
  let r = md(u2);
  let [a, d] = fp($K);
  return R(() => {
    debug(!!r, "slideCreationData is undefined. This should never happen");
    Ez5?.slideThemeLibBindings().insertDefaultLocalTheme(zMY.LIGHT, "Template style");
    Ez5?.uiState().leftPanelCollapsedUI3.set(!0);
    debugState.dispatch(F.enqueue({
      message: _$$t("slides.general.copying_slides_over"),
      type: "design-to-slides-load",
      icon: zX.SPINNER,
      timeoutOverride: 3e5
    }));
    N({
      fileKey: r.fileKey,
      selectedNodeIds: r.selectedNodeIds
    }).then(() => {
      d(Ut);
      Ez5?.uiState().leftPanelCollapsedUI3.set(!1);
      debugState.dispatch(F.dequeue({
        matchType: "design-to-slides-load"
      }));
      debugState.dispatch(F.enqueue({
        message: _$$t("slides.present_summary.visual_bells.complete"),
        type: "design-to-slides-complete",
        icon: zX.CHECK,
        timeoutOverride: 3e3
      }));
      YQ({
        id: Bn
      });
    });
  }, [t, e, r, d], () => !!(t && e && r));
}
export const PF = $$A0;
export const TG = $$C1;
export const fx = $$x2;