import { selectWithShallowEqual } from "../905/103090";
import { selectPermissionsState } from "../figma_app/212807";
export function $$a0() {
  let e = selectPermissionsState();
  let t = selectWithShallowEqual(e => ({
    selectedView: e.selectedView,
    currentOrgId: e.currentUserOrgId,
    orgById: e.orgById,
    currentTeamId: e.currentTeamId,
    teams: e.teams
  }));
  return {
    ...e,
    ...t
  };
}
export const B = $$a0;