import { jsx, jsxs } from "react/jsx-runtime";
import { getI18nString, renderI18nText } from "../905/303541";
import { fu } from "../figma_app/831799";
import { e0 } from "../905/696396";
import { Ju, ZU } from "../905/102752";
import { yX } from "../figma_app/918700";
import { Vq } from "../figma_app/639088";
function c(e) {
  return jsx(fu, {
    name: e0.BRANCH_DELETE_CONFIRM_MODAL,
    children: jsxs(yX, {
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
export let $$u0 = Ju(c, "BranchDeleteConfirmModal", ZU.YES);
export const e = $$u0;