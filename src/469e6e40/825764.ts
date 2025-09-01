import { jsx } from "react/jsx-runtime";
import { gY } from "../figma_app/566371";
import { wG } from "../figma_app/637027";
import { t as _$$t } from "../905/303541";
import { mq } from "../figma_app/199513";
import { c } from "../4452/815584";
export function $$d0({
  folder: e
}) {
  let t = gY(mq);
  return jsx(c, {
    initialName: e.name,
    placeholder: _$$t("resource_rename_modal.project.placeholder"),
    submitText: _$$t("resource_rename_modal.project.submit"),
    onRename: a => {
      t({
        folderId: e.id,
        folderName: a
      });
    },
    maxLength: wG
  });
}
export const FolderRenameModal = $$d0;