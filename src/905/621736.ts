import { k0 } from "../figma_app/623293";
let r = null;
export async function $$a0(e = window) {
  return r || (await k0("https://accounts.google.com/gsi/client", {
    cors: !1,
    window: e,
    waitForCondition: () => "google" in e
  }), r = e.google);
}
export const o = $$a0;