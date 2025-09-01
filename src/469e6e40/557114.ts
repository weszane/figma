import { EJ } from "../figma_app/930338";
import { t as _$$t } from "../905/303541";
import { Ad } from "../figma_app/951233";
export let $$r0 = 75;
export function $$l1(e, t) {
  return [...t.map(e => ({
    type: "option",
    key: e.id,
    text: EJ(e.name, $$r0)
  })), {
    type: "separator",
    key: "separator"
  }, {
    type: "option",
    key: "",
    text: Ad(e) ? _$$t("members_table.workspace_cell.unassign") : _$$t("workspace.unassigned")
  }];
}
export const A = $$r0;
export const o = $$l1;