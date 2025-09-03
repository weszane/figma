import { useCallback } from "react";
import { wA } from "../vendor/514228";
import { isNotNullish } from "../figma_app/95419";
import { h3O, dPJ, CeL, Ez5, glU, Egt } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { AD } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { F } from "../905/302958";
import { _$ } from "../figma_app/379850";
import { to } from "../905/156213";
import { EB, SR } from "../905/784363";
import { Fr } from "../figma_app/297957";
import { J } from "../905/445197";
import { F as _$$F } from "../905/224";
import { Y5 } from "../figma_app/455680";
import { i as _$$i } from "../figma_app/741237";
import { IL } from "../figma_app/582924";
import { QZ } from "../figma_app/62612";
import { p8 } from "../figma_app/722362";
import { P3 } from "../figma_app/952446";
import { q5 } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { KI, J9, LF } from "../figma_app/345997";
import { F as _$$F2 } from "../905/258517";
import { Fk } from "../figma_app/167249";
import { b as _$$b } from "../905/165519";
import { vw, yH } from "../figma_app/841351";
import { vL } from "../905/652992";
import { ZN } from "../figma_app/630077";
import { ob, kh } from "../figma_app/571341";
import { DV } from "../905/739964";
export function $$D5(e, t) {
  return !!e && !!t.match(/^(-+|\u2013+|\u2014+|\*+|\s+)$/);
}
export function $$k9({
  openFile: e,
  loadedPageNode: t,
  pageName: r
}) {
  return !(!t || !e || KI(e)) && !!$$D5(t, r) && t?.childCount === 0;
}
export async function $$M11({
  openFile: e,
  pageNode: t,
  pageName: r
}) {
  return !(!t || !e || KI(e)) && !!$$D5(t, r) && (h3O.isIncrementalSession() && (await IL(t.guid, dPJ.PAGE_DIVIDER_CHECK)), t?.childCount === 0);
}
export function $$F7() {
  let e = q5();
  let t = function () {
    let e = q5();
    let t = p8("pagesList").length;
    let r = $$j3();
    return !!(e && (J9({
      openFile: e,
      pageCount: t
    }) || r({
      openFile: e,
      pageCount: t
    })));
  }();
  let r = wA();
  let s = _$$F.useShouldHideStarterCtaForOpenFile();
  return useCallback(n => {
    if (t && e) {
      r(to({
        type: DV,
        data: {
          team: e.team,
          resource: vL.PAGE,
          action: ZN.CREATE_PAGE,
          editorType: e.editorType,
          currentPlan: _$$F.Plan.STARTER,
          upsellPlan: _$$F.Plan.PRO,
          hideUpsellPlanCta: s,
          upsellSource: _$$b.CREATE_NEW_PAGE
        }
      }));
      return !1;
    }
    let i = isNotNullish(n) ? {
      args: {
        editorType: n
      }
    } : {};
    Y5.triggerActionInUserEditScope("page-new", i);
    Y5.commit();
    return !0;
  }, [e, r, s, t]);
}
export function $$j3() {
  let e = Fr();
  return useCallback(({
    openFile: t,
    pageCount: r
  }) => t.editorType === FFileType.DESIGN && r >= LF[FFileType.DESIGN] && e(t), [e]);
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
  a && r !== n && l7.system("set-is-page-divider", () => a.isPageDivider = s);
  l7.user("set-page-name", () => _$$i(t, r));
  Y5.commit();
  r !== n && i();
}
let B = 0;
export async function $$G0(e, t, r, n, i, a, o, p, h, g) {
  let f;
  if (g && _$(n, g, "overview_set_current_page"), e === t) return;
  let E = performance.now();
  let y = B += 1;
  a("action_page_switch_initiated", {
    pageSwitchId: B,
    oldPageNodeId: t,
    newPageNodeId: e,
    isIncremental: h3O.isIncrementalSession(),
    isAlreadyLoaded: i,
    currentNodeCount: CeL?.getFileNodeCount()
  }, {
    forwardToDatadog: !0
  });
  let T = new Promise(e => {
    f = e;
  });
  Ez5.currentPageState().requestedPageChange.set(e);
  requestAnimationFrame(() => {
    J(async () => {
      if (await getSingletonSceneGraph().setCurrentPageFromNodeAsync(e), t !== e) {
        let i = vw(r);
        let a = P3() >= 75;
        let d = a ? new Set() : r.fetchedPageIds || new Set();
        if (i && (a && n(EB({
          fetchedPageIds: d
        })), n(SR({
          isLoadingPage: !0
        })), n(yH({
          version: i,
          currentPageNodeId: e,
          fetchedPageIds: d,
          eventType: "INCREMENTALLY_LOAD_NEW_PAGE"
        }))), h && o && p) {
          let t = glU.navigateToFirstVisibleOrClosestChangeForPage(e);
          t === AD ? n(F.dequeue({
            matchType: "view_changes"
          })) : (Egt.setSelectedNodeAndCanvas(t, !0), o(QZ({
            nodeId: t,
            ...ob
          }), kh), p(t));
        }
        _$$F2.trackFromFullscreen("action_page_switch", {
          oldPageNodeId: t,
          newPageNodeId: e,
          pageSwitchIdForTracking: y,
          duration: performance.now() - E,
          currentNodeCount: CeL?.getFileNodeCount()
        }, !0);
      }
      Ez5.currentPageState().requestedPageChange.set("");
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
  return Fk(t => {
    if (!e) return "0:1";
    let r = t.getCurrentPage();
    return r ? r.guid : "0:1";
  });
}
export function $$W1(e = !0) {
  return Fk(t => {
    if (!e) return "0:2";
    let r = t.getInternalCanvas();
    return r ? r.guid : "0:2";
  });
}
export function $$K6() {
  return Fk(e => e.getCurrentPage()?.name || null);
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