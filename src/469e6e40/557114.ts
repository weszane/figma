import { truncate } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { findMainWorkspaceUser } from "../figma_app/951233";
export let $$r0 = 75;
export function $$l1(e, t) {
  return [...t.map(e => ({
    type: "option",
    key: e.id,
    text: truncate(e.name, $$r0)
  })), {
    type: "separator",
    key: "separator"
  }, {
    type: "option",
    key: "",
    text: findMainWorkspaceUser(e) ? getI18nString("members_table.workspace_cell.unassign") : getI18nString("workspace.unassigned")
  }];
}
export const A = $$r0;
export const o = $$l1;