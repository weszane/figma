import { atomStoreManager } from "../figma_app/27355";
import { consentAllowedAtom, consentMarketingAtom, consentFunctionalAtom } from "../905/18800";
let a = {
  product_locale: "functional"
};
export function $$s0(e) {
  switch (a[e]) {
    case "analytics":
      return atomStoreManager.get(consentAllowedAtom);
    case "marketing":
      return atomStoreManager.get(consentMarketingAtom);
    case "functional":
      return atomStoreManager.get(consentFunctionalAtom);
    case "essential":
      return !0;
  }
}
export const j = $$s0;