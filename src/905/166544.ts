import { jsx } from "react/jsx-runtime";
import { t, tx } from "../905/303541";
import { Ce } from "../905/156213";
import { Ju } from "../905/102752";
import { yX } from "../figma_app/918700";
export let $$l0 = Ju(function () {
  return jsx(yX, {
    confirmationTitle: t("community.publishing.verifying_seller_status"),
    confirmText: t("community.publishing.got_it"),
    hideOnConfirm: !0,
    hideCancel: !0,
    onConfirm: () => {
      Ce();
    },
    children: jsx("p", {
      children: tx("community.publishing.publishing_using_our_payments_api")
    })
  });
}, "RepublishPendingVisualComplianceModal");
export const O = $$l0;