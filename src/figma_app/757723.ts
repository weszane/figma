import { getFeatureFlags } from "../905/601108";
import { isFigmaMobileApp } from "../figma_app/778880";
import { getTrackingSessionId } from "../905/471229";
import { q8 } from "../figma_app/459490";
import { sZ } from "../905/845253";
import { Ph, T0 } from "../figma_app/455620";
export let $$d1 = new Set([Ph, T0]);
export function $$c0(e) {
  let t = e.openFile;
  let r = t ? t.teamId : null;
  return {
    teamId: r,
    orgId: e.currentUserOrgId,
    fileKey: t ? t.key : null,
    userId: e.user?.id || null,
    trackingSessionId: getTrackingSessionId(),
    fileSeq: null
  };
}
export function $$u2() {
  let e = sZ();
  let t = q8();
  return !(getFeatureFlags().figjam_generate_handbrake || isFigmaMobileApp() || t || e?.k12_google_org);
}
export const OU = $$c0;
export const RA = $$d1;
export const tG = $$u2;