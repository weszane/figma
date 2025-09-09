import { isExternalRestricted } from "../figma_app/12796";
var r = (e => (e.ORG_UPGRADE = "ORG_UPGRADE", e.PRO_TEAM_UPGRADE = "PRO_TEAM_UPGRADE", e.VIEW_RESTRICTED_FILE = "VIEW_RESTRICTED_FILE", e))(r || {});
export function $$a0({
  file: e,
  user: t,
  orgUser: i,
  orgDraftsOwner: r,
  teamUser: a
}) {
  let s = e.parent_org_id;
  let o = e.team_id;
  return s && i ? function ({
    file: e,
    orgId: t,
    user: i,
    orgUser: r,
    orgDraftsOwner: a
  }) {
    if (!a || !e.mustUpgradeToShareDraft) return null;
    let s = a.user_id === i.id;
    return isExternalRestricted(i, t) || !s ? {
      type: "VIEW_RESTRICTED_FILE",
      draftOwnerUser: a.user
    } : {
      type: "ORG_UPGRADE",
      orgId: t,
      orgUser: r
    };
  }({
    file: e,
    orgId: s,
    user: t,
    orgUser: i,
    orgDraftsOwner: r
  }) : o && a ? function ({
    file: e,
    teamId: t,
    teamUser: i
  }) {
    return e.folder_id === i.drafts_folder_id && e.mustUpgradeToShareDraft && e.editor_type ? {
      type: "PRO_TEAM_UPGRADE",
      teamId: t
    } : null;
  }({
    file: e,
    teamId: o,
    teamUser: a
  }) : null;
}
export const l = $$a0;