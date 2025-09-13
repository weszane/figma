import { jsx } from "react/jsx-runtime";
import { getAtomMutate } from "../figma_app/566371";
import { BUTTON_INTERNAL_CONST_Q33 } from "../figma_app/637027";
import { getI18nString } from "../905/303541";
import { mq } from "../figma_app/199513";
import { c } from "../4452/815584";
export function $$d0({
  folder: e
}) {
  let t = getAtomMutate(mq);
  return jsx(c, {
    initialName: e.name,
    placeholder: getI18nString("resource_rename_modal.project.placeholder"),
    submitText: getI18nString("resource_rename_modal.project.submit"),
    onRename: a => {
      t({
        folderId: e.id,
        folderName: a
      });
    },
    maxLength: BUTTON_INTERNAL_CONST_Q33
  });
}
export const FolderRenameModal = $$d0;