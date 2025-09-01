import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { t as _$$t } from "../905/303541";
import { q } from "../469e6e40/218292";
import { O } from "../905/247093";
if (443 == require.j) {}
export function $$o0({
  currentWorkspaceId: e,
  disabled: t,
  workspacesCanMoveTo: a,
  onChangeWorkspace: o
}) {
  let d = useMemo(() => [...a, "separator", O], [a]);
  return jsx(q, {
    ariaLabel: _$$t("members_table.workspace_cell.aria_label"),
    disabled: t,
    options: d,
    getOptionValue: e => e === O ? "" : e.id,
    getOptionLabel: t => t === O ? e ? _$$t("members_table.workspace_cell.unassign") : _$$t("workspace.unassigned") : t.name,
    onChange: o,
    value: e ?? ""
  });
}
export const J = $$o0;