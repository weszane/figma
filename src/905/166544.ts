import { jsx } from "react/jsx-runtime";
import { getI18nString, renderI18nText } from "../905/303541";
import { hideModal } from "../905/156213";
import { registerModal } from "../905/102752";
import { ConfirmationModal2 } from "../figma_app/918700";
export let $$l0 = registerModal(function () {
  return jsx(ConfirmationModal2, {
    confirmationTitle: getI18nString("community.publishing.verifying_seller_status"),
    confirmText: getI18nString("community.publishing.got_it"),
    hideOnConfirm: !0,
    hideCancel: !0,
    onConfirm: () => {
      hideModal();
    },
    children: jsx("p", {
      children: renderI18nText("community.publishing.publishing_using_our_payments_api")
    })
  });
}, "RepublishPendingVisualComplianceModal");
export const O = $$l0;
