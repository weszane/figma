import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { EJ } from "../figma_app/930338";
import { t as _$$t } from "../905/303541";
import { q } from "../469e6e40/218292";
import { s as _$$s } from "../905/82276";
import { A } from "../469e6e40/557114";
export function $$c1(e, t) {
  return [...t.map(e => ({
    type: "option",
    key: e.id,
    text: EJ(e.name, A)
  })), {
    type: "separator",
    key: "separator"
  }, {
    type: "option",
    key: "",
    text: e.license_group_member?.license_group_id ? _$$t("members_table.license_group_cell.unassign") : _$$t("license_group.unassigned")
  }];
}
export function $$_0({
  orgUser: e,
  disabled: t,
  groupsCanMoveUserTo: a,
  onChangeLicenseGroup: i
}) {
  let d = useMemo(() => [...a, "separator", _$$s], [a]);
  let c = e.license_group_member?.license_group_id;
  return jsx(q, {
    ariaLabel: _$$t("members_table.license_group_cell.aria_label"),
    disabled: t,
    options: d,
    getOptionValue: e => e === _$$s ? "" : e.id,
    getOptionLabel: e => e === _$$s ? c ? _$$t("members_table.license_group_cell.unassign") : _$$t("license_group.unassigned") : e.name,
    onChange: t => i([e.id], t),
    value: c ?? ""
  });
}
export const Y = $$_0;
export const f = $$c1;