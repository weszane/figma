import { d4 } from "../vendor/514228";
import { l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { FPlanNameType } from "../figma_app/191312";
export function $$o1(e, t) {
  let r = [FPlanNameType.ORG, FPlanNameType.ENTERPRISE];
  let n = e?.plan?.tier;
  let i = (getFeatureFlags().dt_component_browser ?? !1) && t && !!e?.canAccessFullDevMode;
  let o = !!n && r.includes(n);
  return i && o;
}
export function $$l0(e) {
  let t = function (e) {
    let t = d4(e => e.library.publishedByLibraryKey);
    if (!e) return !1;
    let r = e.teamId;
    let a = e.libraryKey;
    return !!r && !!a && Object.keys(t.components[r]?.[l(a)] ?? []).length > 0;
  }(e);
  return $$o1(e, t);
}
export const Dl = $$l0;
export const wm = $$o1;