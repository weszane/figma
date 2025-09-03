import { throwTypeError } from "../figma_app/465776";
import { K } from "../905/807535";
import { t } from "../905/303541";
import { RM } from "../905/441038";
import { J7 } from "../figma_app/650409";
export function $$l0(e) {
  if (e === RM.MEMBERS) return t("license_group_admin_tab.members");
  throwTypeError(e);
}
let $$d1 = "originTab";
let c = [J7.BILLING];
export function $$u2(e) {
  let t = K(J7, e);
  if (t) return c.includes(t) ? t : void 0;
}
export const o9 = $$l0;
export const u5 = $$d1;
export const vQ = $$u2;