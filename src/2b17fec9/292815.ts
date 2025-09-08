import { setupLazyComponentFactory } from "../905/992467";
import _require from "../8316/638316";
import { jsx } from "react/jsx-runtime";
let r = setupLazyComponentFactory("lazy_cmty_purchase_button", {
  isCodesplit: !0,
  ComponentFactory: async () => ({
    default: (await _require).$$default
  })
});
export function $$a0({
  resource: e,
  context: t,
  payment: i,
  enableWideButtonForStickyFooter: a,
  enableCondensedWideButtonForStickyFooter: s,
  thirdPartyM10nUrl: o
}) {
  return jsx(r, {
    fallback: null,
    errorFallback: null,
    resource: e,
    context: t,
    payment: i,
    enableWideButtonForStickyFooter: a,
    enableCondensedWideButtonForStickyFooter: s,
    thirdPartyM10nUrl: o
  });
}
export const I = $$a0;