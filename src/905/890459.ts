export function $$n0(e) {
  let {
    currentUserOrgId,
    currentTeamId
  } = e;
  return currentUserOrgId ? `/${currentUserOrgId}` : currentTeamId ? `/team/${currentTeamId}` : "";
}
export const i = $$n0;