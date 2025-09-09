import { useState, useCallback, useEffect } from "react";
import { ViewType, DesignWorkspace, DesignGraphElements } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import { ZC } from "../figma_app/39751";
import { uh as _$$uh, Kh } from "../figma_app/370763";
import { rM } from "../figma_app/241541";
import { _I } from "../figma_app/473493";
import { hA } from "../figma_app/88239";
import { m0, vn, E3 } from "../figma_app/976749";
import { k as _$$k } from "../figma_app/564183";
import { setPropertiesPanelTab } from "../figma_app/741237";
import { T } from "../905/858738";
import { p8 } from "../figma_app/722362";
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
  let t = ZC(e);
  return void 0 !== t && t !== e;
}
export function $$A3() {
  let e = _$$k();
  let t = _I();
  let r = !!hA() && t;
  return !e && (r || T() && getFeatureFlags().dt_vscode_ready_for_dev);
}
export function $$x4() {
  let e = m0();
  let t = vn();
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
  let i = E3();
  let a = ZC(i);
  let [l, d] = useState(null);
  let c = p8("isReadOnly");
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