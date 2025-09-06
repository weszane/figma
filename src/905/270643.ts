import { atomStoreManager } from "../figma_app/27355";
import { EA, cQ, Zu } from "../905/18800";
let a = {
  product_locale: "functional"
};
export function $$s0(e) {
  switch (a[e]) {
    case "analytics":
      return atomStoreManager.get(EA);
    case "marketing":
      return atomStoreManager.get(cQ);
    case "functional":
      return atomStoreManager.get(Zu);
    case "essential":
      return !0;
  }
}
export const j = $$s0;