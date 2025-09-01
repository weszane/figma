import { jsx } from "react/jsx-runtime";
import { wA, d4 } from "../vendor/514228";
import { bv } from "../figma_app/421401";
import { t as _$$t } from "../905/303541";
import { Um } from "../905/848862";
import { NJ } from "../figma_app/518077";
import { O } from "../905/247093";
if (443 == require.j) {}
export function $$c0({
  selectedWorkspaceId: e,
  onFilterUpdate: t,
  getCount: a
}) {
  let c = wA();
  let _ = Um();
  let u = d4(e => e.currentUserOrgId);
  let m = NJ(u);
  let p = "loading" === m.status ? [] : m.data ?? [];
  let g = {};
  if (p.forEach(e => g[e.id] = e), !d4(({
    selectedView: e
  }) => "orgAdminSettings" === e.view) || !p.length) return null;
  let h = p.map(e => e.id).concat(O);
  return jsx(bv, {
    label: _$$t("members_table.menu_bar_filter.workspace"),
    dispatch: c,
    dropdownShown: _,
    dropdownType: "FILTER_WORKSPACE_DROPDOWN",
    values: h,
    selectedValue: e,
    getCount: a,
    getDisplayText: e => e === O ? _$$t("license_group.unassigned") : g[e]?.name ?? "",
    updateFilter: e => t(e)
  });
}
export const y = $$c0;