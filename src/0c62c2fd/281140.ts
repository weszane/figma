import { jsx } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { t as _$$t } from "../905/303541";
import { IA } from "../figma_app/475472";
import { qg } from "../figma_app/630077";
import { c } from "../4452/815584";
export function $$d0({
  team: e
}) {
  let t = useDispatch();
  return jsx(c, {
    initialName: e.name,
    maxLength: qg,
    placeholder: _$$t("resource_rename_modal.team.placeholder"),
    submitText: _$$t("resource_rename_modal.team.submit"),
    onRename: r => t(IA({
      team: e,
      name: r
    }))
  });
}
export const TeamRenameModal = $$d0;