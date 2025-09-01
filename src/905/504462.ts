import { O } from "../905/539306";
export function $$r0(e, t, i) {
  let {
    authedUsers,
    authedActiveCommunityProfile
  } = e;
  let s = [];
  let o = [];
  if (authedActiveCommunityProfile?.associated_users) for (let e of authedActiveCommunityProfile.associated_users) {
    let t = authedUsers.byId[e.user_id];
    t && (s.push(e.user_id), o.push(t));
  }
  return authedActiveCommunityProfile?.team_id && e.teams[authedActiveCommunityProfile.team_id]?.org_id ? [{
    teamId: null,
    orgId: e.teams[authedActiveCommunityProfile.team_id].org_id,
    userId: e.user.id
  }] : authedActiveCommunityProfile?.org_id || authedActiveCommunityProfile?.team_id ? [{
    teamId: authedActiveCommunityProfile?.team_id ?? null,
    orgId: authedActiveCommunityProfile?.org_id ?? null,
    userId: e.user.id
  }] : o.reduce((e, t) => {
    let r = i.plansByUserId[t.id] || [];
    return e.concat(r.map(e => O(e, t.id)) || []);
  }, []);
}
export const F = $$r0;