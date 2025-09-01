import { useEffect, useMemo, useCallback } from "react";
import { d4, Pj, wA } from "../vendor/514228";
import { Ez5, w3z, dPJ } from "../figma_app/763686";
import { fp } from "../figma_app/27355";
import o from "../vendor/523035";
import { U } from "../figma_app/901889";
import { R } from "../905/103090";
import { U4 } from "../figma_app/473493";
import { D } from "../905/882262";
import { Ym } from "../figma_app/806075";
import { sf } from "../905/929976";
import { Tj } from "../figma_app/582924";
import { aV } from "../figma_app/722362";
import { J2 } from "../figma_app/84367";
import { nT } from "../figma_app/53721";
import { e6 } from "../figma_app/707808";
import { $A } from "../905/782918";
import { gk } from "../figma_app/715641";
import { _o } from "../figma_app/879363";
var l = o;
export function $$S12() {
  return d4(e => $$C4(e.selectedView));
}
export function $$v8() {
  return d4(e => {
    var t;
    return !!(t = e.selectedView) && t?.view === "fullscreen" && t?.showDevModeComponentBrowser === !0;
  });
}
export function $$A1() {
  return d4(e => function (e) {
    if (e) return e?.view === "fullscreen" ? e?.componentKey : void 0;
  }(e.selectedView));
}
export function $$x14() {
  return d4(e => e.selectedView?.view === "fullscreen" && e.selectedView?.showDevModeComponentBrowser === !0 && e.selectedView?.githubRepositorySelectorMode !== void 0 && e.selectedView?.githubRepositorySelectorMode !== e6.NONE);
}
export function $$N11() {
  return d4(e => e.selectedView?.view === "fullscreen" && e.selectedView?.showDevModeComponentBrowser === !0 ? e.selectedView?.githubRepositorySelectorMode ?? e6.NONE : e6.NONE);
}
export function $$C4(e) {
  return !!e && e?.view === "fullscreen" && e?.showOverview === !0;
}
export function $$w9() {
  return d4(e => $$O13(e.selectedView) ?? null);
}
export function $$O13(e) {
  if (e) return $A(e) ? e.devModeFocusId : void 0;
}
export function $$R3() {
  let e = aV();
  let t = J2(Ez5.currentSceneState().nodesWithStatusLoaded);
  useEffect(() => {
    if (e || t) return;
    let r = w3z.getAllNodesWithStatusesByPage();
    let n = new Set();
    r.forEach(e => {
      e.forEach(e => {
        n.add(e);
      });
    });
    Tj(n, dPJ.DEV_HANDOFF_STATUS).then(() => {
      w3z.onAllNodesWithStatusesLoaded(r);
    });
  }, [e, t]);
  return t;
}
export function $$L7() {
  let e = J2(Ez5.currentSceneState().numReadyNodesByPage);
  let t = J2(Ez5.currentSceneState().numCompletedNodesByPage);
  return useMemo(() => l()([...e.values(), ...t.values()]), [e, t]);
}
export function $$P5() {
  let e = D();
  let t = $$L7();
  return e && t > 0;
}
export function $$D2() {
  let e = d4(e => e.mirror.appModel.currentPage);
  return R(t => "fullscreen" === t.selectedView.view ? {
    ...t.selectedView,
    showOverview: !0,
    overviewBackButtonTargetNodeId: e
  } : t.selectedView);
}
export function $$k6() {
  let e = Pj();
  let t = U();
  let r = !U4();
  let [, a] = fp(_o);
  let o = wA();
  let [l, c] = fp(gk);
  let p = $$D2();
  return useCallback(() => {
    if (r) return;
    t("Dev Mode Overview Entry Clicked");
    let n = e.getState();
    "editorType" in n.selectedView && n.selectedView.editorType === nT.Design && Ym(n, nT.DevHandoff, "overview_entry");
    a("entry_clicked");
    c(void 0);
    o(sf(p));
  }, [r, o, p, c, a, e, t]);
}
export function $$M10(e) {
  let t = wA();
  let r = function (e) {
    let t = d4(e => e.mirror.appModel.currentPage);
    return R(r => "fullscreen" === r.selectedView.view ? {
      ...r.selectedView,
      showDevModeComponentBrowser: !0,
      componentBrowserBackButtonTargetNodeId: t,
      componentBrowserEntrypoint: e
    } : r.selectedView);
  }(e);
  return useCallback(() => {
    t(sf(r));
  }, [t, r]);
}
export function $$F0() {
  let e = wA();
  let t = d4(e => e.selectedView);
  return useCallback(r => {
    "fullscreen" === t.view && e(sf({
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