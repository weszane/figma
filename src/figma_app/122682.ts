import { useState, useEffect } from "react";
import { useSelector } from "../vendor/514228";
import { eD } from "../figma_app/876459";
import { ZC } from "../figma_app/39751";
import { wg, o4 } from "../figma_app/778880";
import { Gq } from "../figma_app/363242";
import { t7 } from "../905/989765";
import { q5 } from "../figma_app/516028";
import { PS } from "../figma_app/598018";
import { MK } from "../figma_app/120529";
let _ = () => !(wg() || o4());
export function $$h1() {
  let e = q5();
  let t = useSelector(e => e.orgById);
  let r = useSelector(e => e.teams);
  let a = e?.key;
  let o = useSelector(e => a && !!e.voice.activeCall[a]);
  let [l, d] = useState(!1);
  let u = ZC(l);
  useEffect(() => {
    let n = _() && 4 === $$g5({
      openFile: e,
      teams: r,
      orgById: t
    });
    !0 === u && !n && o || d(n);
  }, [e, t, r, u, o]);
  return l;
}
export var $$m6 = (e => (e[e.FEATURE_DISABLED = 0] = "FEATURE_DISABLED", e[e.DISABLED_BY_ORG = 1] = "DISABLED_BY_ORG", e[e.INELIGIBLE_FILE_IN_PERSONAL_SPACE = 2] = "INELIGIBLE_FILE_IN_PERSONAL_SPACE", e[e.ELIGIBLE_WITH_UPGRADE = 3] = "ELIGIBLE_WITH_UPGRADE", e[e.ELIGIBLE = 4] = "ELIGIBLE", e))($$m6 || {});
export function $$g5(e) {
  if ("gov" === window.INITIAL_OPTIONS.cluster_name) return 0;
  let t = e.openFile;
  if (!t || !t.parentOrgId && !t.teamId) return 0;
  if (t.parentOrgId) {
    let r = e.orgById[t.parentOrgId];
    return r ? r.voice_enabled ? 4 : 1 : 0;
  }
  if (t.teamId) {
    let r = e.teams[t.teamId];
    return r ? PS(r) ? 4 : 3 : 0;
  }
  return 2;
}
export function $$f4() {
  return Gq()?.getPrimaryLocale(!0) === "en";
}
export function $$E3() {
  return !!eD;
}
export function $$y2(e) {
  return e >= MK.STARTED && e < MK.DONE;
}
export function $$b7(e) {
  return e < MK.NOT_STARTED;
}
export function $$T0(e, t) {
  eD?.setCaptionsEnabled(t);
  e(t7(t));
}
export const HJ = $$T0;
export const Lk = $$h1;
export const Mw = $$y2;
export const WO = $$E3;
export const X0 = $$f4;
export const YL = $$g5;
export const gW = $$m6;
export const nN = $$b7;