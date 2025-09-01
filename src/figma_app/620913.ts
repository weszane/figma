import { eD } from "../figma_app/876459";
import { sx } from "../905/449184";
export function $$$$a0() {
  eD && (eD.setLoading(!1), eD.showFileBrowser(), console.error("Not signed in, aborting init!"), sx("Desktop Logged Out Page Load"));
}
export function $$s1() {
  eD && (eD.showFileBrowser(), eD.close({
    suppressReopening: !0,
    shouldForceClose: !0
  }));
}
export const a = $$$$a0;
export const k = $$s1;