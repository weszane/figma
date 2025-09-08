import { HandoffBindingsCpp } from "../figma_app/763686";
import { aH } from "../figma_app/273493";
import { debugState } from "../905/407919";
import { Ym } from "../figma_app/806075";
import { sf } from "../905/929976";
import { F } from "../905/989956";
import { ds } from "../figma_app/314264";
import { FEditorType } from "../figma_app/53721";
import { e6 } from "../figma_app/707808";
export function $$p3(e, t, r) {
  if ("fullscreen" !== t.view) return;
  let n = debugState.getState();
  n.selectedView?.showOverview && "overview_search_clicked" === r && ds("Dev Mode Overview Pages Search Clicked", n.openFile?.key, n, {
    pageId: t.nodeId
  });
  "editorType" in t && t.editorType === FEditorType.Design && Ym(n, FEditorType.Design, r);
  e(sf({
    ...t,
    showOverview: !1,
    overviewBackButtonTargetNodeId: void 0
  }));
}
export function $$_0(e, t) {
  "fullscreen" === t.view && e(sf({
    ...t,
    showDevModeComponentBrowser: !1,
    componentKey: void 0,
    devModeComponentBrowserBackButtonTargetNodeId: void 0,
    githubRepositorySelectorMode: e6.NONE
  }));
}
export function $$h1(e, t, r) {
  let a = function (e, t) {
    let r = e.get(t)?.backgroundColor;
    return r ? F.format(r) : null;
  }(e, r);
  let s = HandoffBindingsCpp.backgroundColorOverride(t);
  return s ? F.format(aH(s)) : a;
}
export const Ep = $$_0;
export const S7 = $$h1;
export const WJ = function e(t, r) {
  return !!r && "CANVAS" !== r.type && (r.guid === t.guid || e(t, r.parentNode));
};
export const _$ = $$p3;