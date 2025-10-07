import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { isNotNullish } from "../figma_app/95419";
import { Multiplayer, AutosaveEventType, FullscreenPerfMetrics, AppStateTsApi, Fullscreen, SceneGraphHelpers } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { defaultSessionLocalIDString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { VisualBellActions } from "../905/302958";
import { handleFullscreenViewTransition } from "../figma_app/379850";
import { showModalHandler } from "../905/156213";
import { UPDATE_FETCHED_PAGE_IDS, VERSION_HISTORY_PAGE_LOADING } from "../905/784363";
import { useDraftsPageLimitExperiment } from "../figma_app/297957";
import { J } from "../905/445197";
import { consumptionPaywallUtils } from "../905/224";
import { fullscreenValue } from "../figma_app/455680";
import { renameNode } from "../figma_app/741237";
import { subscribeToContainingPage } from "../figma_app/582924";
import { computeFullscreenViewportForNode } from "../figma_app/62612";
import { useAppModelProperty } from "../figma_app/722362";
import { P3 } from "../figma_app/952446";
import { selectCurrentFile } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { hasPageLimitations, hasReachedPageLimit, FILE_TYPE_PAGE_LIMITS } from "../figma_app/345997";
import { fullscreenHandler } from "../905/258517";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { UpsellModalType } from "../905/165519";
import { getActiveVersion, loadVersionIncrementally } from "../figma_app/841351";
import { PageFolderFile } from "../905/652992";
import { fileActionEnum } from "../figma_app/630077";
import { ob, kh } from "../figma_app/571341";
import { ConsumptionPaywallModalPlansPricing } from "../905/739964";
export function $$D5(e, t) {
  return !!e && !!t.match(/^(-+|\u2013+|\u2014+|\*+|\s+)$/);
}
export function $$k9({
  openFile: e,
  loadedPageNode: t,
  pageName: r
}) {
  return !(!t || !e || hasPageLimitations(e)) && !!$$D5(t, r) && t?.childCount === 0;
}
export async function $$M11({
  openFile: e,
  pageNode: t,
  pageName: r
}) {
  return !(!t || !e || hasPageLimitations(e)) && !!$$D5(t, r) && (Multiplayer.isIncrementalSession() && (await subscribeToContainingPage(t.guid, AutosaveEventType.PAGE_DIVIDER_CHECK)), t?.childCount === 0);
}
export function $$F7() {
  let e = selectCurrentFile();
  let t = function () {
    let e = selectCurrentFile();
    let t = useAppModelProperty("pagesList").length;
    let r = $$j3();
    return !!(e && (hasReachedPageLimit({
      openFile: e,
      pageCount: t
    }) || r({
      openFile: e,
      pageCount: t
    })));
  }();
  let r = useDispatch();
  let s = consumptionPaywallUtils.useShouldHideStarterCtaForOpenFile();
  return useCallback(n => {
    if (t && e) {
      r(showModalHandler({
        type: ConsumptionPaywallModalPlansPricing,
        data: {
          team: e.team,
          resource: PageFolderFile.PAGE,
          action: fileActionEnum.CREATE_PAGE,
          editorType: e.editorType,
          currentPlan: consumptionPaywallUtils.Plan.STARTER,
          upsellPlan: consumptionPaywallUtils.Plan.PRO,
          hideUpsellPlanCta: s,
          upsellSource: UpsellModalType.CREATE_NEW_PAGE
        }
      }));
      return !1;
    }
    let i = isNotNullish(n) ? {
      args: {
        editorType: n
      }
    } : {};
    fullscreenValue.triggerActionInUserEditScope("page-new", i);
    fullscreenValue.commit();
    return !0;
  }, [e, r, s, t]);
}
export function $$j3() {
  let e = useDraftsPageLimitExperiment();
  return useCallback(({
    openFile: t,
    pageCount: r
  }) => t.editorType === FFileType.DESIGN && r >= FILE_TYPE_PAGE_LIMITS[FFileType.DESIGN] && e(t), [e]);
}
export async function $$U2({
  openFile: e,
  pageId: t,
  newName: r,
  oldName: n,
  trackRenamePage: i
}) {
  let a = getSingletonSceneGraph().get(t);
  let s = await $$M11({
    openFile: e,
    pageNode: a,
    pageName: r
  });
  a && r !== n && permissionScopeHandler.system("set-is-page-divider", () => a.isPageDivider = s);
  permissionScopeHandler.user("set-page-name", () => renameNode(t, r));
  fullscreenValue.commit();
  r !== n && i();
}
let B = 0;
export async function $$G0(e, t, r, n, i, a, o, p, h, g) {
  let f;
  if (g && handleFullscreenViewTransition(n, g, "overview_set_current_page"), e === t) return;
  let E = performance.now();
  let y = B += 1;
  a("action_page_switch_initiated", {
    pageSwitchId: B,
    oldPageNodeId: t,
    newPageNodeId: e,
    isIncremental: Multiplayer.isIncrementalSession(),
    isAlreadyLoaded: i,
    currentNodeCount: FullscreenPerfMetrics?.getFileNodeCount()
  }, {
    forwardToDatadog: !0
  });
  let T = new Promise(e => {
    f = e;
  });
  AppStateTsApi.currentPageState().requestedPageChange.set(e);
  requestAnimationFrame(() => {
    J(async () => {
      if (await getSingletonSceneGraph().setCurrentPageFromNodeAsync(e), t !== e) {
        let i = getActiveVersion(r);
        let a = P3() >= 75;
        let d = a ? new Set() : r.fetchedPageIds || new Set();
        if (i && (a && n(UPDATE_FETCHED_PAGE_IDS({
          fetchedPageIds: d
        })), n(VERSION_HISTORY_PAGE_LOADING({
          isLoadingPage: !0
        })), n(loadVersionIncrementally({
          version: i,
          currentPageNodeId: e,
          fetchedPageIds: d,
          eventType: "INCREMENTALLY_LOAD_NEW_PAGE"
        }))), h && o && p) {
          let t = Fullscreen.navigateToFirstVisibleOrClosestChangeForPage(e);
          t === defaultSessionLocalIDString ? n(VisualBellActions.dequeue({
            matchType: "view_changes"
          })) : (SceneGraphHelpers.setSelectedNodeAndCanvas(t, !0), o(computeFullscreenViewportForNode({
            nodeId: t,
            ...ob
          }), kh), p(t));
        }
        fullscreenHandler.trackFromFullscreen("action_page_switch", {
          oldPageNodeId: t,
          newPageNodeId: e,
          pageSwitchIdForTracking: y,
          duration: performance.now() - E,
          currentNodeCount: FullscreenPerfMetrics?.getFileNodeCount()
        }, !0);
      }
      AppStateTsApi.currentPageState().requestedPageChange.set("");
      f();
    });
  });
  await T;
}
export function $$V8(e, t) {
  let r = e.get(t);
  if (!r) return !1;
  let n = void 0 === r;
  let i = 0 === r.childCount;
  let a = r.childrenAreAllGhosts;
  return !n && !i && a;
}
export function $$H10(e, t) {
  let r = e.get(t);
  let n = void 0 === r;
  return r?.childCount === 0 && !n;
}
export function $$z4(e = !0) {
  return useDeepEqualSceneValue(t => {
    if (!e) return "0:1";
    let r = t.getCurrentPage();
    return r ? r.guid : "0:1";
  });
}
export function $$W1(e = !0) {
  return useDeepEqualSceneValue(t => {
    if (!e) return "0:2";
    let r = t.getInternalCanvas();
    return r ? r.guid : "0:2";
  });
}
export function $$K6() {
  return useDeepEqualSceneValue(e => e.getCurrentPage()?.name || null);
}
export const $P = $$G0;
export const A$ = $$W1;
export const CQ = $$U2;
export const HZ = $$j3;
export const dh = $$z4;
export const i = $$D5;
export const nn = $$K6;
export const rE = $$F7;
export const re = $$V8;
export const uS = $$k9;
export const zC = $$H10;
export const zO = $$M11;