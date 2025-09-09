import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { hS } from "../905/437088";
import { bL, Rq } from "../905/38914";
import { Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { SM } from "../figma_app/153916";
import { s as _$$s } from "../cssbuilder/589278";
import { s as _$$s2 } from "../905/573154";
import { $z } from "../figma_app/617427";
import { R as _$$R } from "../c5e2cae0/276031";
import { getI18nString, renderI18nText } from "../905/303541";
import { J } from "../905/231762";
import { Be } from "../figma_app/920435";
import { E as _$$E } from "../905/712094";
import { createEmptyAddress, isAddressEmpty } from "../figma_app/831101";
import { Eh } from "../figma_app/617654";
import { $ } from "../905/834575";
import { registerModal } from "../905/102752";
let y = memo(function ({
  canSeeBillingAddressExp: e,
  shippingAddress: t,
  legalCompanyName: a,
  teamId: j,
  orgId: y,
  onClose: w,
  open: k
}) {
  let E = useDispatch();
  let C = hS({
    open: k,
    onClose: w
  });
  let {
    isLoading,
    withLoading
  } = _$$R();
  let [I, T] = useState(t || createEmptyAddress());
  let [A, R] = useState(a || "");
  let O = SM(y || "");
  let L = async t => {
    t.preventDefault();
    await withLoading(async () => {
      try {
        if (j) {
          if (!I || isAddressEmpty(I) || !A || "" === A.trim()) throw Error(getI18nString("team_view.settings_table.update_invoice_details.error.legal_name_and_shipping_address_required"));
          await $.updateShippingAddress({
            teamId: j,
            shippingAddress: I,
            updatedLegalName: A
          });
          E(_$$s2.flash(e ? getI18nString("update_company_details_modal.update_legal_name_and_shipping_address.success") : getI18nString("update_company_details_modal.update_team_name.success")));
          w();
          E(Be({
            teamId: j
          }));
        } else if (y) {
          if (!I || isAddressEmpty(I)) throw Error(getI18nString("org_admin_settings.settings_tab.billing.update_invoice_details.shipping_address_required_error"));
          await Eh.changeShippingAddress({
            orgId: y,
            shippingAddress: I
          });
          E(_$$s2.flash(getI18nString("org_admin_settings.settings_tab.billing.update_invoice_details.success")));
          w();
          O();
        }
      } catch (t) {
        j ? E(_$$s2.error(J(t) || t.message || (e ? getI18nString("update_company_details_modal.update_legal_name_and_shipping_address.error") : getI18nString("update_company_details_modal.update_team_name.error")))) : y && E(_$$s2.error(J(t) || t.message || getI18nString("update_company_details_modal.updateshipping_address.error")));
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
          children: getI18nString("team_view.settings_table.update_invoice_details.modal_title")
        })
      }), jsx(nB, {
        children: jsxs("div", {
          className: _$$s.mt12.$,
          children: [jsx("div", {
            className: _$$s.mb16.$,
            children: jsx("label", {
              htmlFor: "shippingAddress",
              className: _$$s.colorTextSecondary.$,
              children: renderI18nText("team_view.settings_table.update_invoice_details.modal_description")
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
            children: renderI18nText("pro_cart.review.edit_details.cancel")
          }), jsx($z, {
            disabled: isLoading,
            type: "submit",
            children: renderI18nText("pro_cart.review.edit_details.save")
          })]
        })
      })]
    })
  });
});
let $$w0 = registerModal(y, "UpdateShippingAddressModal");
export const u = $$w0;
