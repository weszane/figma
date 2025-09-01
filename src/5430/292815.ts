import { kf } from "../905/992467";
import _require from "../8316/638316";
import { jsx } from "react/jsx-runtime";
let i = kf("lazy_cmty_purchase_button", {
  isCodesplit: !0,
  ComponentFactory: async () => ({
    default: (await _require).$$default
  })
});
export function $$n0({
  resource: e,
  context: t,
  payment: r,
  enableWideButtonForStickyFooter: n,
  enableCondensedWideButtonForStickyFooter: o,
  thirdPartyM10nUrl: a
}) {
  return jsx(i, {
    fallback: null,
    errorFallback: null,
    resource: e,
    context: t,
    payment: r,
    enableWideButtonForStickyFooter: n,
    enableCondensedWideButtonForStickyFooter: o,
    thirdPartyM10nUrl: a
  });
}
export const I = $$n0;