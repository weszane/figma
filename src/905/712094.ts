import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Lf } from "../figma_app/637027";
import { t as _$$t } from "../905/303541";
import { EB } from "../figma_app/831101";
import { X } from "../905/33014";
export function $$l0({
  canSeeBillingAddressExp: e,
  shippingAddress: t,
  updateShippingAddress: i,
  legalCompanyName: l,
  updateLegalCompanyName: d
}) {
  return jsxs(Fragment, {
    children: [!!d && jsx(Lf, {
      value: l || "",
      htmlName: "legal_company_name",
      label: _$$t("pro_cart.payment.legal_company_name_label"),
      placeholder: _$$t("pro_cart.payment.legal_company_name_placeholder"),
      onChange: e => {
        d(e.target.value.trim());
      },
      autoCompleteName: "legal company name",
      trackingFieldName: "Legal Company Name",
      dataTestId: "legal-company-name"
    }), !!i && jsx(X, {
      address: t || EB(),
      updateAddress: i,
      canSeeBillingAddressExp: e,
      isBillingAddress: !1
    })]
  });
}
export const E = $$l0;