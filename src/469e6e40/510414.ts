import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useState } from "react";
import { wA } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL, Rq } from "../905/38914";
import { Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { SM } from "../figma_app/153916";
import { s as _$$s } from "../cssbuilder/589278";
import { s as _$$s2 } from "../905/573154";
import { $z } from "../figma_app/617427";
import { R as _$$R } from "../c5e2cae0/276031";
import { t as _$$t, tx } from "../905/303541";
import { J } from "../905/231762";
import { Be } from "../figma_app/920435";
import { E as _$$E } from "../905/712094";
import { EB, $V } from "../figma_app/831101";
import { Eh } from "../figma_app/617654";
import { $ } from "../905/834575";
import { Ju } from "../905/102752";
let y = memo(function ({
  canSeeBillingAddressExp: e,
  shippingAddress: t,
  legalCompanyName: a,
  teamId: j,
  orgId: y,
  onClose: w,
  open: k
}) {
  let E = wA();
  let C = hS({
    open: k,
    onClose: w
  });
  let {
    isLoading,
    withLoading
  } = _$$R();
  let [I, T] = useState(t || EB());
  let [A, R] = useState(a || "");
  let O = SM(y || "");
  let L = async t => {
    t.preventDefault();
    await withLoading(async () => {
      try {
        if (j) {
          if (!I || $V(I) || !A || "" === A.trim()) throw Error(_$$t("team_view.settings_table.update_invoice_details.error.legal_name_and_shipping_address_required"));
          await $.updateShippingAddress({
            teamId: j,
            shippingAddress: I,
            updatedLegalName: A
          });
          E(_$$s2.flash(e ? _$$t("update_company_details_modal.update_legal_name_and_shipping_address.success") : _$$t("update_company_details_modal.update_team_name.success")));
          w();
          E(Be({
            teamId: j
          }));
        } else if (y) {
          if (!I || $V(I)) throw Error(_$$t("org_admin_settings.settings_tab.billing.update_invoice_details.shipping_address_required_error"));
          await Eh.changeShippingAddress({
            orgId: y,
            shippingAddress: I
          });
          E(_$$s2.flash(_$$t("org_admin_settings.settings_tab.billing.update_invoice_details.success")));
          w();
          O();
        }
      } catch (t) {
        j ? E(_$$s2.error(J(t) || t.message || (e ? _$$t("update_company_details_modal.update_legal_name_and_shipping_address.error") : _$$t("update_company_details_modal.update_team_name.error")))) : y && E(_$$s2.error(J(t) || t.message || _$$t("update_company_details_modal.updateshipping_address.error")));
      }
    });
  };
  return jsx(bL, {
    width: 448,
    manager: C,
    children: jsxs(Rq, {
      onSubmit: L,
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: _$$t("team_view.settings_table.update_invoice_details.modal_title")
        })
      }), jsx(nB, {
        children: jsxs("div", {
          className: _$$s.mt12.$,
          children: [jsx("div", {
            className: _$$s.mb16.$,
            children: jsx("label", {
              htmlFor: "shippingAddress",
              className: _$$s.colorTextSecondary.$,
              children: tx("team_view.settings_table.update_invoice_details.modal_description")
            })
          }), jsx(_$$E, {
            canSeeBillingAddressExp: e,
            shippingAddress: I,
            updateShippingAddress: T,
            legalCompanyName: A,
            updateLegalCompanyName: j ? R : null
          })]
        })
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($z, {
            variant: "secondary",
            onClick: () => w(),
            disabled: isLoading,
            children: tx("pro_cart.review.edit_details.cancel")
          }), jsx($z, {
            disabled: isLoading,
            type: "submit",
            children: tx("pro_cart.review.edit_details.save")
          })]
        })
      })]
    })
  });
});
let $$w0 = Ju(y, "UpdateShippingAddressModal");
export const u = $$w0;