import { jsx } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { bv } from "../figma_app/421401";
import { getI18nString } from "../905/303541";
import { useDropdownState } from "../905/848862";
import { NJ } from "../figma_app/518077";
import { UNASSIGNED } from "../905/247093";
if (443 == require.j) {}
export function $$c0({
  selectedWorkspaceId: e,
  onFilterUpdate: t,
  getCount: a
}) {
  let c = useDispatch();
  let _ = useDropdownState();
  let u = useSelector(e => e.currentUserOrgId);
  let m = NJ(u);
  let p = "loading" === m.status ? [] : m.data ?? [];
  let g = {};
  if (p.forEach(e => g[e.id] = e), !useSelector(({
    selectedView: e
  }) => "orgAdminSettings" === e.view) || !p.length) return null;
  let h = p.map(e => e.id).concat(UNASSIGNED);
  return jsx(bv, {
    label: getI18nString("members_table.menu_bar_filter.workspace"),
    dispatch: c,
    dropdownShown: _,
    dropdownType: "FILTER_WORKSPACE_DROPDOWN",
    values: h,
    selectedValue: e,
    getCount: a,
    getDisplayText: e => e === UNASSIGNED ? getI18nString("license_group.unassigned") : g[e]?.name ?? "",
    updateFilter: e => t(e)
  });
}
export const y = $$c0;