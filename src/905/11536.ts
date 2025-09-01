export function $$n0(e) {
  let {
    authedActiveCommunityProfile,
    authedUsers
  } = e;
  if (!authedActiveCommunityProfile) return [];
  let n = (authedActiveCommunityProfile.associated_users || []).map(e => authedUsers.byId[e.user_id]).filter(Boolean).sort((e, i) => e.id === authedActiveCommunityProfile.primary_user_id ? -1 : Date.parse(e.created_at) - Date.parse(i.created_at));
  if (!n.length && authedActiveCommunityProfile.primary_user_id) {
    let e = authedUsers.byId[authedActiveCommunityProfile.primary_user_id];
    return e ? [e] : [];
  }
  return n;
}
export const G = $$n0;