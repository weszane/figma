import { zl } from "../figma_app/27355";
import { EA, cQ, Zu } from "../905/18800";
let a = {
  product_locale: "functional"
};
export function $$s0(e) {
  switch (a[e]) {
    case "analytics":
      return zl.get(EA);
    case "marketing":
      return zl.get(cQ);
    case "functional":
      return zl.get(Zu);
    case "essential":
      return !0;
  }
}
export const j = $$s0;