import { useState, useCallback, useEffect } from "react";
import { ViewType, DesignWorkspace, DesignGraphElements } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import { useLatestRef } from "../figma_app/922077";
import { uh as _$$uh, Kh } from "../figma_app/370763";
import { rM } from "../figma_app/241541";
import { useCanAccessFullDevMode } from "../figma_app/473493";
import { useDevModeFocusId } from "../figma_app/88239";
import { isDevHandoffEditorType, isIllustrationEditorType, getSelectedEditorType } from "../figma_app/976749";
import { isUserNotLoggedInAndEditorSupported } from "../figma_app/564183";
import { setPropertiesPanelTab } from "../figma_app/741237";
import { isVsCodeEnvironment } from "../905/858738";
import { useAppModelProperty } from "../figma_app/722362";
import { w4, Fj, go } from "../figma_app/927140";
import { N as _$$N, Q } from "../figma_app/287368";
import { U } from "../figma_app/65327";
import { _ as _$$_, u as _$$u } from "../figma_app/110635";
export function $$T5(e) {
  return _$$uh(t => _$$_(t, e));
}
export function $$I6(e) {
  return `ui3_finished_entering_${e}_mode`;
}
export function $$S1(e) {
  let {
    topLevelMode
  } = rM(_$$u);
  let r = _$$N();
  return topLevelMode !== ViewType.DEV_HANDOFF && !e && r === Q.REQUEST_NEEDED;
}
export function $$v0(e) {
  let t = useLatestRef(e);
  return void 0 !== t && t !== e;
}
export function $$A3() {
  let e = isUserNotLoggedInAndEditorSupported();
  let t = useCanAccessFullDevMode();
  let r = !!useDevModeFocusId() && t;
  return !e && (r || isVsCodeEnvironment() && getFeatureFlags().dt_vscode_ready_for_dev);
}
export function $$x4() {
  let e = isDevHandoffEditorType();
  let t = isIllustrationEditorType();
  return e ? "handoff" : t ? "illustration" : "design";
}
function N(e, t) {
  let r;
  if ("design" === e) r = t.isReadOnly ? DesignWorkspace.COMMENT : DesignWorkspace.DESIGN;else {
    if ("illustration" !== e) return;
    r = t.isReadOnly ? DesignWorkspace.COMMENT : DesignWorkspace.ILLUSTRATION;
  }
  atomStoreManager.get(Kh) !== DesignGraphElements.COMMENTS && setPropertiesPanelTab(r);
}
export function $$C2() {
  let e = useAtomWithSubscription(w4);
  let t = useAtomWithSubscription(Fj);
  let r = useAtomWithSubscription(go);
  let i = getSelectedEditorType();
  let a = useLatestRef(i);
  let [l, d] = useState(null);
  let c = useAppModelProperty("isReadOnly");
  let u = U("ui3_toolbelt");
  let _ = useCallback(n => {
    ("design" !== n || e) && ("handoff" !== n || t) && ("illustration" !== n || r) ? (u(n), N(n, {
      isReadOnly: c
    })) : d(n);
  }, [e, t, r, u, c]);
  useEffect(() => {
    ("design" === l && e || "handoff" === l && t || "illustration" === l && r) && (u(l), N(l, {
      isReadOnly: c
    }));
  }, [l, e, t, r, u, c]);
  useEffect(() => {
    void 0 !== a && a !== i && d(null);
  }, [a, i]);
  return {
    onModeSwitch: _,
    newModeWhenLoaded: l,
    isDesignViewLoaded: e,
    isDevHandoffViewLoaded: t,
    isIllustrationViewLoaded: r
  };
}
export const D_ = $$v0;
export const Uv = $$S1;
export const eJ = $$C2;
export const q8 = $$A3;
export const ub = $$x4;
export const uh = $$T5;
export const wX = $$I6;