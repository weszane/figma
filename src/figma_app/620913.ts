import { desktopAPIInstance } from "../figma_app/876459";
import { trackEventAnalytics } from "../905/449184";
export function $$$$a0() {
  desktopAPIInstance && (desktopAPIInstance.setLoading(!1), desktopAPIInstance.showFileBrowser(), console.error("Not signed in, aborting init!"), trackEventAnalytics("Desktop Logged Out Page Load"));
}
export function $$s1() {
  desktopAPIInstance && (desktopAPIInstance.showFileBrowser(), desktopAPIInstance.close({
    suppressReopening: !0,
    shouldForceClose: !0
  }));
}
export const a = $$$$a0;
export const k = $$s1;