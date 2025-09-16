import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent, ModalFormContents } from "../905/38914";
import { DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { SM } from "../figma_app/153916";
import { s as _$$s } from "../cssbuilder/589278";
import { FlashActions } from "../905/573154";
import { $z } from "../figma_app/617427";
import { R as _$$R } from "../c5e2cae0/276031";
import { getI18nString, renderI18nText } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { Be } from "../figma_app/920435";
import { E as _$$E } from "../905/712094";
import { createEmptyAddress, isAddressEmpty } from "../figma_app/831101";
import { Eh } from "../figma_app/617654";
import { teamAPIClient } from "../905/834575";
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
  let C = useModalManager({
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
          await teamAPIClient.updateShippingAddress({
            teamId: j,
            shippingAddress: I,
            updatedLegalName: A
          });
          E(FlashActions.flash(e ? getI18nString("update_company_details_modal.update_legal_name_and_shipping_address.success") : getI18nString("update_company_details_modal.update_team_name.success")));
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
          E(FlashActions.flash(getI18nString("org_admin_settings.settings_tab.billing.update_invoice_details.success")));
          w();
          O();
        }
      } catch (t) {
        j ? E(FlashActions.error(resolveMessage(t) || t.message || (e ? getI18nString("update_company_details_modal.update_legal_name_and_shipping_address.error") : getI18nString("update_company_details_modal.update_team_name.error")))) : y && E(FlashActions.error(resolveMessage(t) || t.message || getI18nString("update_company_details_modal.updateshipping_address.error")));
      }
    });
  };
  return jsx(ModalRootComponent, {
    width: 448,
    manager: C,
    children: jsxs(ModalFormContents, {
      onSubmit: L,
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString("team_view.settings_table.update_invoice_details.modal_title")
        })
      }), jsx(DialogBody, {
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
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
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