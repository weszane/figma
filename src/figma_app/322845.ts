import { qmM, Ez5 } from "../figma_app/763686";
import { UN } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { eU, zl, md } from "../figma_app/27355";
import { az } from "../905/449184";
import { sn } from "../905/542194";
import { debugState } from "../905/407919";
import { g as _$$g } from "../905/880308";
import { F } from "../905/302958";
import { q4 } from "../905/294085";
import { j7, oB } from "../905/929976";
import { JV } from "../figma_app/976749";
import { v5 } from "../figma_app/314264";
import { T as _$$T } from "../905/868547";
import { l as _$$l } from "../905/202425";
import { nT } from "../figma_app/53721";
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
let P = eU(null);
let D = eU(new Set());
export function $$k6() {
  let e = zl.get(dd);
  if (!e) throw Error("Session ID is missing when opening a module in Quick Actions V2.");
  return {
    sessionId: e,
    canvasSelection: UN().getCurrentPage()?.directlySelectedNodes,
    searchQuery: zl.get(Q8)
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
  }) && sn.start(mP);
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
  if (zl.set(zF, e.source), zl.set(rE, s), n) {
    if (zl.set(Bu, !0), zl.set(oh, {
      type: "close",
      source: Yg.ToolSelected
    }), zl.get(dd) || (zl.set(dd, _$$g()), zl.set(q4)), zl.set(P, null), t) {
      if (t.beforeModuleOpen) {
        let e = $$k6();
        t.beforeModuleOpen(e);
      }
      "tab" === t.type ? (zl.set(Lk, t.module), t.filter && zl.set(_$$t, t.filter)) : zl.set(YH, e => [{
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
          timeToShowModal: sn.tryStop(mP) || 0,
          module: Jc.ALL
        });
      }
    }
  }));
}
export function $$F12(e, t, r) {
  if (zl.get(Bu)) {
    if (!r.forceClose && zl.get(ZG)) return !1;
    zl.set(Bu, !1);
    zl.set(dd, null);
    _$$R();
    _$$b();
  } else t?.type === jv && e(oB());
  return !0;
}
export function $$j1(e) {
  return zl.get(Bu) || e?.type === jv;
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
  !zl.get(Bu) && (!(!U(e) || W7()) || zl.get(D).has(e) || (zl.get(dd) || zl.set(dd, _$$g()), zl.set(P, {
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
  if (zl.get(P)) {
    if (actionToClear && actionToClear !== zl.get(P)?.action) return;
    if (zl.set(P, null), dismissedAction) {
      let e = zl.get(D);
      zl.get(D).has(dismissedAction) || zl.set(D, new Set([...e, dismissedAction]));
      az.trackDefinedEvent("ai_productivity.actions_suggestion_dismissed", {
        action: dismissedAction
      });
    }
  }
}
export function $$z8() {
  return md(P);
}
export function $$W9(e) {
  let t = Ez5.uiState().isUI3.getCopy();
  let r = debugState.getState().selectedView;
  let n = JV(r);
  let a = [nT.Figmake];
  getFeatureFlags().figjam_quick_actions_v2 || a.push(nT.Whiteboard);
  return !!(n && !a.includes(n) && (t || e));
}
export let $$K4 = n((e, t) => {
  let r = t?.isUI3 ?? Ez5.uiState().isUI3.getCopy();
  let n = debugState.getState().selectedView;
  let a = t?.editorType ?? JV(n);
  return !!(a && (a === nT.Design || a === nT.Illustration || a === nT.Slides) && (r || e));
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