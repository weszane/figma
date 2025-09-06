import { useSelector } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
import { desktopAPIInstance } from "../figma_app/876459";
export function $$s0() {
  let e = useSelector(e => e.plans);
  let t = useSelector(e => e.openFile);
  let r = e.find(e => e.plan_id === t?.parentOrgId);
  return r?.is_dev_mode_mcp_disabled === !0;
}
export function $$o2(e) {
  let t = e.plans;
  let r = e.openFile;
  let n = t.find(e => e.plan_id === r?.parentOrgId);
  return n?.is_dev_mode_mcp_disabled === !0;
}
export function $$l1() {
  return !!(desktopAPIInstance?.hasFeature("addMcpWrites") && getFeatureFlags().dt_mcp_write_assets_locally);
}
export const $k = $$s0;
export const As = $$l1;
export const uT = $$o2;