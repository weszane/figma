import { jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { getI18nString } from "../905/303541";
import { ub } from "../figma_app/598926";
import { c } from "../4452/815584";
export function $$l0({
  folder: e
}) {
  let t = useDispatch();
  return jsx(c, {
    initialName: e.description ?? "",
    title: getI18nString("resource_rename_modal.edit_description"),
    placeholder: "",
    submitText: getI18nString("resource_rename_modal.save"),
    onRename: r => t(ub({
      folderId: e.id,
      description: r.trim()
    })),
    allowEmptyString: !0,
    maxLength: 200
  });
}
export const FolderUpdateDescriptionModal = $$l0;
