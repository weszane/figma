import { getFeatureFlags } from "../905/601108";
import { GZ } from "../905/508367";
import { S8 } from "../figma_app/876459";
import { getInitialOptions } from "../figma_app/169182";
import { F } from "../905/422355";
import { lZ } from "../figma_app/257275";
export function $$d1(e) {
  return parseInt(F(e).slice(0, 8), 16);
}
function c(e, t) {
  let {
    country,
    region
  } = e;
  return t.some(({
    country: e,
    region: t
  }) => (!e || country === e) && (!t || region === t));
}
export function $$u0(e) {
  var t;
  let {
    geofence,
    canUseCookieForAnalytics
  } = e;
  t = function () {
    let e = getInitialOptions();
    return {
      country: e.iso_code,
      region: e.viewer_region
    };
  }();
  let d = !(void 0 !== geofence.exclude && c(t, geofence.exclude)) && (void 0 === geofence.include || c(t, geofence.include));
  return !GZ() && !lZ() && !getInitialOptions().e2e_traffic && canUseCookieForAnalytics && d && getFeatureFlags().sprig_enabled && !S8;
}
export const $z = $$u0;
export const YZ = $$d1;