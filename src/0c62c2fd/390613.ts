import { jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { trackEventAnalytics } from "../905/449184";
import { getAtomMutate } from "../figma_app/566371";
import { FlashActions } from "../905/573154";
import { getI18nString, renderI18nText } from "../905/303541";
import { U } from "../figma_app/199513";
import { ConfirmationModal2 } from "../figma_app/918700";
export function $$u0({
  folders: e
}) {
  let t = useDispatch();
  let r = getAtomMutate(U);
  let u = e => {
    e.forEach(e => {
      trackEventAnalytics("Folder Batch Abandoned Draft Delete Confirmation Click", {
        folderId: e.id,
        teamId: e.teamId,
        orgId: e.orgId
      });
    });
    r({
      folderIds: e.map(e => e.id)
    }).catch(() => {
      t(FlashActions.error(getI18nString("file_browser.api_folder.error_when_deleting")));
    });
  };
  return jsx(ConfirmationModal2, {
    confirmationTitle: getI18nString("file_browser.delete_project.title"),
    destructive: !0,
    confirmText: getI18nString("file_browser.batch_delete_project.generic_confirm_label"),
    onConfirm: () => {
      u(e);
    },
    children: renderI18nText("file_browser.batch_delete_projects.confirm_text_trash_section", {
      numProjects: e.length
    })
  });
}
export const FolderBatchAbandonedDraftDeleteConfirmModal = $$u0;
