import { setupLazyComponentFactory } from "../905/992467";
import _require from "../8316/638316";
import { jsx } from "react/jsx-runtime";
let a = setupLazyComponentFactory("lazy_cmty_purchase_button", {
  isCodesplit: !0,
  ComponentFactory: async () => ({
    default: (await _require).$$default
  })
});
export function $$n0({
  resource: e,
  context: t,
  payment: s,
  enableWideButtonForStickyFooter: n,
  enableCondensedWideButtonForStickyFooter: i,
  thirdPartyM10nUrl: l
}) {
  return jsx(a, {
    fallback: null,
    errorFallback: null,
    resource: e,
    context: t,
    payment: s,
    enableWideButtonForStickyFooter: n,
    enableCondensedWideButtonForStickyFooter: i,
    thirdPartyM10nUrl: l
  });
}
export const I = $$n0;