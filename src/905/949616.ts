import { getCookieManager } from "../905/423575";
import { j } from "../905/270643";
export let $$a1 = 31536e3;
export function $$s0(e, t, i) {
  if (!j(e)) return;
  let a = getCookieManager();
  null != a && a.set(e, t, i);
}
export const T = $$s0;
export const e = $$a1;