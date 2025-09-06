import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { getI18nString } from "../905/303541";
import { q } from "../469e6e40/218292";
import { UNASSIGNED } from "../905/247093";
if (443 == require.j) {}
export function $$o0({
  currentWorkspaceId: e,
  disabled: t,
  workspacesCanMoveTo: a,
  onChangeWorkspace: o
}) {
  let d = useMemo(() => [...a, "separator", UNASSIGNED], [a]);
  return jsx(q, {
    ariaLabel: getI18nString("members_table.workspace_cell.aria_label"),
    disabled: t,
    options: d,
    getOptionValue: e => e === UNASSIGNED ? "" : e.id,
    getOptionLabel: t => t === UNASSIGNED ? e ? getI18nString("members_table.workspace_cell.unassign") : getI18nString("workspace.unassigned") : t.name,
    onChange: o,
    value: e ?? ""
  });
}
export const J = $$o0;