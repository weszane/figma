import { CI } from "../figma_app/528509";
import { e6 } from "../905/557142";
export function $$a0(e, t) {
  let i = t.team_id && e.teams[t.team_id];
  let a = e.roles.byFolderId[t.id] || {};
  let s = Object.keys(a).map(e => a[e]).find(e => e.level === e6.OWNER);
  return {
    folderName: CI(t),
    folderTeamName: t.parent_team?.name ?? (i ? i.name : null),
    folderOwnerName: s ? s.user.handle : null,
    folderLastUpdated: new Date(t.touched_at),
    folderSharedAt: t.shared_at ? new Date(t.shared_at) : null
  };
}
export const Z = $$a0;