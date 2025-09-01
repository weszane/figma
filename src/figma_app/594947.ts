import { useContext, useRef, useCallback, useMemo } from "react";
import { wA } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
import { zl, md, Iz, eU } from "../figma_app/27355";
import { ZC } from "../figma_app/39751";
import { b as _$$b } from "../905/985254";
import { r1 } from "../figma_app/545877";
import { Tq } from "../3973/663243";
import { B } from "../905/749933";
import { ZJ, u_, gR } from "../3973/697935";
import _ from "../3973/473379";
import { EvaluationReason, DynamicConfig } from "../vendor/625526";
import m from "../3973/389215";
import { w } from "../905/669698";
import { B as _$$B } from "../3973/298076";
export async function $$E7(e, t, r, n = !1) {
  let i = zl.get(ZJ);
  (r || getFeatureFlags().statsig_suspend) && (await i.initCompletedPromise);
  return Tq(zl.get(ZJ), e, "getExperiment", t, n);
}
export function $$y10(e, t, r) {
  return $$E7(e, t, r, !0);
}
function b(e, t, r) {
  let {
    userVersion
  } = useContext(B);
  let a = ZC(userVersion);
  let l = md(ZJ);
  let d = useRef(null);
  return {
    getConfig: useCallback(() => ((a !== userVersion || null == d.current) && (d.current = Tq(l, e, "useExperiment", t, r)), d.current), [e, t, a, l, userVersion, r])
  };
}
export let $$T2 = getFeatureFlags().statsig_suspend ? function (e, t, r) {
  md(u_);
  return b(e, t, r);
} : b;
export function $$I3(e, t, r) {
  let a = useMemo(() => r1(e), [e]);
  let {
    getConfig
  } = $$T2(t, r, md(a).data || !1);
  let c = wA();
  return {
    getConfig: useCallback(() => (c(_$$b({
      [e]: !0
    })), getConfig()), [c, e, getConfig])
  };
}
getFeatureFlags().statsig_suspend;
Iz(({
  experimentName: e,
  keepDeviceValue: t,
  disableExposureLogging: r
}) => eU(async n => {
  await n(u_);
  n(gR);
  let i = n(ZJ);
  let a = null;
  return () => (null == a && (a = Tq(i, e, "getExperiment", t, r)), a);
}), (e, t) => e.experimentName === t.experimentName && e.disableExposureLogging === t.disableExposureLogging && e.keepDeviceValue === t.keepDeviceValue);
export { Fj, gP, w0 } from "../3973/389215";
export { aH, sq } from "../3973/473379";
export const Bf = _$$B;
export const I7 = $$T2;
export const XV = $$I3;
export const f6 = EvaluationReason;
export const hW = $$E7;
export const iO = DynamicConfig;
export const vs = $$y10;
export const w$ = w;