import { jsx, jsxs } from "react/jsx-runtime";
import { getI18nString, renderI18nText } from "../905/303541";
import { TrackingProvider } from "../figma_app/831799";
import { TrackingKeyEnum } from "../905/696396";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { ConfirmationModal2 } from "../figma_app/918700";
import { Vq } from "../figma_app/639088";
function c(e) {
  return jsx(TrackingProvider, {
    name: TrackingKeyEnum.BRANCH_DELETE_CONFIRM_MODAL,
    children: jsxs(ConfirmationModal2, {
      destructive: !0,
      confirmationTitle: getI18nString("file_browser.delete_branch_forever.title"),
      confirmText: getI18nString("file_browser.delete_branch_forever.confirm_text"),
      onConfirm: e.onConfirm,
      children: [renderI18nText("file_browser.delete_forever.warning", {
        fileName: jsx("span", {
          className: Vq,
          children: e.fileName
        })
      }), jsx("br", {}), " ", jsx("br", {}), renderI18nText("file_browser.cant_undo")]
    })
  });
}
c.displayName = "BranchDeleteConfirmModal";
export let $$u0 = registerModal(c, "BranchDeleteConfirmModal", ModalSupportsBackground.YES);
export const e = $$u0;