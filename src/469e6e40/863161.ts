import { jsx } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { t as _$$t } from "../905/303541";
import { ub } from "../figma_app/240735";
import { c } from "../4452/815584";
export function $$o0({
  team: e
}) {
  let t = useDispatch();
  return jsx(c, {
    title: _$$t("resource_rename_modal.team_description.title"),
    initialName: e.description ?? "",
    placeholder: _$$t("resource_rename_modal.team_description.placeholder"),
    submitText: _$$t("resource_rename_modal.team_description.submit"),
    onRename: a => t(ub({
      teamId: e.id,
      description: a
    }))
  });
}
export const UpdateTeamDescriptionModal = $$o0;