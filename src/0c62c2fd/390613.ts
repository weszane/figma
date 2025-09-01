import { jsx } from "react/jsx-runtime";
import { wA } from "../vendor/514228";
import { sx } from "../905/449184";
import { gY } from "../figma_app/566371";
import { s as _$$s } from "../905/573154";
import { t as _$$t, tx } from "../905/303541";
import { U } from "../figma_app/199513";
import { yX } from "../figma_app/918700";
export function $$u0({
  folders: e
}) {
  let t = wA();
  let r = gY(U);
  let u = e => {
    e.forEach(e => {
      sx("Folder Batch Abandoned Draft Delete Confirmation Click", {
        folderId: e.id,
        teamId: e.teamId,
        orgId: e.orgId
      });
    });
    r({
      folderIds: e.map(e => e.id)
    }).catch(() => {
      t(_$$s.error(_$$t("file_browser.api_folder.error_when_deleting")));
    });
  };
  return jsx(yX, {
    confirmationTitle: _$$t("file_browser.delete_project.title"),
    destructive: !0,
    confirmText: _$$t("file_browser.batch_delete_project.generic_confirm_label"),
    onConfirm: () => {
      u(e);
    },
    children: tx("file_browser.batch_delete_projects.confirm_text_trash_section", {
      numProjects: e.length
    })
  });
}
export const FolderBatchAbandonedDraftDeleteConfirmModal = $$u0; 
