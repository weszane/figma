import { jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { getI18nString } from "../905/303541";
import { ub } from "../figma_app/240735";
import { c } from "../4452/815584";
export function $$o0({
  team: e
}) {
  let t = useDispatch();
  return jsx(c, {
    title: getI18nString("resource_rename_modal.team_description.title"),
    initialName: e.description ?? "",
    placeholder: getI18nString("resource_rename_modal.team_description.placeholder"),
    submitText: getI18nString("resource_rename_modal.team_description.submit"),
    onRename: a => t(ub({
      teamId: e.id,
      description: a
    }))
  });
}
export const UpdateTeamDescriptionModal = $$o0;
