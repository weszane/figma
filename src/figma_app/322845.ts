import { qmM, Ez5 } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atom, atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { globalPerfTimer } from "../905/542194";
import { debugState } from "../905/407919";
import { g as _$$g } from "../905/880308";
import { F } from "../905/302958";
import { q4 } from "../905/294085";
import { j7, oB } from "../905/929976";
import { JV } from "../figma_app/976749";
import { v5 } from "../figma_app/314264";
import { T as _$$T } from "../905/868547";
import { l as _$$l } from "../905/202425";
import { FEditorType } from "../figma_app/53721";
import { jv } from "../figma_app/357047";
import { Ig } from "../figma_app/350332";
import { W7 } from "../figma_app/251115";
import { n } from "../905/347702";
import { oh, Yg } from "../905/526509";
import { JT } from "../figma_app/632248";
import { mP, U3 } from "../figma_app/737746";
import { Fi, WZ, zF, Mq } from "../figma_app/297822";
import { Jc } from "../905/946805";
import { dd, Q8, rE, Bu, Lk, YH, ZG } from "../figma_app/604494";
import { b as _$$b } from "../905/825224";
import { t as _$$t } from "../905/572040";
import { R as _$$R } from "../905/423086";
export let $$n5;
let P = atom(null);
let D = atom(new Set());
export function $$k6() {
  let e = atomStoreManager.get(dd);
  if (!e) throw Error("Session ID is missing when opening a module in Quick Actions V2.");
  return {
    sessionId: e,
    canvasSelection: getSingletonSceneGraph().getCurrentPage()?.directlySelectedNodes,
    searchQuery: atomStoreManager.get(Q8)
  };
}
export function $$M0({
  trackingData: e,
  moduleToOpen: t
}) {
  let r = debugState.dispatch;
  if (_$$T(debugState.getState().progressBarState.mode) || "fullscreen" !== debugState.getState().selectedView.view) return;
  let n = $$W9(t);
  Fi({
    isQAV2: n,
    moduleToOpen: t
  }) && globalPerfTimer.start(mP);
  let a = debugState.getState();
  let s = {
    keyboardShortcut: "",
    currentSelection: _$$l(a),
    fileKey: a.openFile?.key ?? "",
    productType: v5(a.selectedView, null),
    role: WZ(),
    hasAiFeatureAccess: W7(),
    ...e
  };
  if (atomStoreManager.set(zF, e.source), atomStoreManager.set(rE, s), n) {
    if (atomStoreManager.set(Bu, !0), atomStoreManager.set(oh, {
      type: "close",
      source: Yg.ToolSelected
    }), atomStoreManager.get(dd) || (atomStoreManager.set(dd, _$$g()), atomStoreManager.set(q4)), atomStoreManager.set(P, null), t) {
      if (t.beforeModuleOpen) {
        let e = $$k6();
        t.beforeModuleOpen(e);
      }
      "tab" === t.type ? (atomStoreManager.set(Lk, t.module), t.filter && atomStoreManager.set(_$$t, t.filter)) : atomStoreManager.set(YH, e => [{
        module: t.module,
        name: t.name
      }, ...e]);
    }
    qmM.setDefaultTool();
    r(F.dequeue({
      matchTimeout: "ephemeral"
    }));
  } else r(j7({
    type: jv,
    hasOwnEscKeyHandler: !0,
    data: {
      fireQuickActionsTrackingEvent: e => {
        Mq({
          ...s,
          qaVersion: U3,
          quickActionsSessionId: e,
          timeToShowModal: globalPerfTimer.tryStop(mP) || 0,
          module: Jc.ALL
        });
      }
    }
  }));
}
export function $$F12(e, t, r) {
  if (atomStoreManager.get(Bu)) {
    if (!r.forceClose && atomStoreManager.get(ZG)) return !1;
    atomStoreManager.set(Bu, !1);
    atomStoreManager.set(dd, null);
    _$$R();
    _$$b();
  } else t?.type === jv && e(oB());
  return !0;
}
export function $$j1(e) {
  return atomStoreManager.get(Bu) || e?.type === jv;
}
function U(e) {
  for (let t of Object.values(JT)) if (e === t) return t;
  return null;
}
export function $$B7(e) {
  let t = U(e?.action);
  let {
    withinMeter,
    noDataLoaded
  } = Ig(t);
  return !!(!noDataLoaded && withinMeter);
}
export function $$G3(e) {
  let t = U(e);
  let {
    withinMeter,
    noDataLoaded
  } = Ig(t);
  return !!(!noDataLoaded && withinMeter);
}
export function $$V11(e, t = {}, r) {
  !atomStoreManager.get(Bu) && (!(!U(e) || W7()) || atomStoreManager.get(D).has(e) || (atomStoreManager.get(dd) || atomStoreManager.set(dd, _$$g()), atomStoreManager.set(P, {
    action: e,
    payload: t,
    guid: r
  })));
}
export function $$H2(e = {}) {
  let {
    dismissedAction,
    actionToClear
  } = e;
  if (atomStoreManager.get(P)) {
    if (actionToClear && actionToClear !== atomStoreManager.get(P)?.action) return;
    if (atomStoreManager.set(P, null), dismissedAction) {
      let e = atomStoreManager.get(D);
      atomStoreManager.get(D).has(dismissedAction) || atomStoreManager.set(D, new Set([...e, dismissedAction]));
      analyticsEventManager.trackDefinedEvent("ai_productivity.actions_suggestion_dismissed", {
        action: dismissedAction
      });
    }
  }
}
export function $$z8() {
  return useAtomWithSubscription(P);
}
export function $$W9(e) {
  let t = Ez5.uiState().isUI3.getCopy();
  let r = debugState.getState().selectedView;
  let n = JV(r);
  let a = [FEditorType.Figmake];
  getFeatureFlags().figjam_quick_actions_v2 || a.push(FEditorType.Whiteboard);
  return !!(n && !a.includes(n) && (t || e));
}
export let $$K4 = n((e, t) => {
  let r = t?.isUI3 ?? Ez5.uiState().isUI3.getCopy();
  let n = debugState.getState().selectedView;
  let a = t?.editorType ?? JV(n);
  return !!(a && (a === FEditorType.Design || a === FEditorType.Illustration || a === FEditorType.Slides) && (r || e));
});
class Y {
  isQuickActionsShown() {
    return $$j1(debugState.getState().dropdownShown);
  }
}
export function $$$10() {
  $$n5 = new Y();
}
export const $I = $$M0;
export const Jf = $$j1;
export const KY = $$H2;
export const MK = $$G3;
export const RM = $$K4;
export const ZO = $$n5;
export const _V = $$k6;
export const dL = $$B7;
export const el = $$z8;
export const gn = $$W9;
export const h$ = $$$10;
export const iP = $$V11;
export const jD = $$F12;