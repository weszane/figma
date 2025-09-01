import { jsx } from "react/jsx-runtime";
import { lQ } from "../905/934246";
import { t, tx } from "../905/303541";
import { Ju } from "../905/102752";
import { yX } from "../figma_app/918700";
import { jE } from "../figma_app/639088";
export let $$d0 = Ju(function () {
  return jsx(yX, {
    destructive: !1,
    confirmationTitle: t("file_browser.modal.cant_transfer_ownership_title"),
    confirmText: t("file_browser.modal.got_it"),
    hideCancel: !0,
    onConfirm: lQ,
    popStack: !0,
    children: jsx("div", {
      className: jE,
      children: tx("file_browser.modal.this_resource_is_for_sale_on_community_so_you_cant_change_ownership")
    })
  });
}, "RejectOwnershipTransferModal");
export const K = $$d0;