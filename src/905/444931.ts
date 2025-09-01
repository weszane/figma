import { MJ } from "../figma_app/657017";
import { HE } from "../905/967587";
import { R$ } from "../figma_app/12796";
export function $$s0(e, t, i, s, o) {
  let {
    userId,
    orgId,
    teamId
  } = e;
  let u = i.authedUsers.byId[userId];
  let p = s ? s.orgs.reduce((e, t) => ({
    ...e,
    [t.id]: t
  }), {}) : i.orgById;
  let m = s ? s.teams.reduce((e, t) => ({
    ...e,
    [t.id]: t
  }), {}) : i.teams;
  let h = HE(i, e, p, m);
  let g = R$(u, orgId);
  let f = !!o && !MJ(orgId ? p[orgId] : null, teamId ? m[teamId] : null, null);
  if (!orgId) {
    let t = s?.plansByUserId[userId]?.find(e => e.plan_id === teamId);
    let i = t?.is_plan_locked;
    let n = t?.draft_folder_id;
    return {
      ...e,
      user: u,
      workspaceName: h,
      isDisabledDueToECC: g,
      isDsePresetsDisabled: f,
      isPlanLocked: i,
      draftFolderId: n
    };
  }
  let _ = i.orgById[orgId];
  let A = !!_?.figjam_disabled_at && "whiteboard" === t;
  let y = !!_?.is_slides_disabled && "slides" === t;
  let b = s?.plansByUserId[userId]?.find(e => e.plan_id === orgId);
  let v = (b?.is_sites_disabled ?? !0) && "sites" === t;
  let I = (b?.is_cooper_disabled ?? !0) && "cooper" === t;
  let E = (b?.is_figmake_disabled ?? !0) && "figmake" === t;
  let x = b?.is_plan_locked;
  let S = b?.draft_folder_id;
  return {
    ...e,
    user: u,
    workspaceName: h,
    isFigJamDisabled: A,
    isDisabledDueToECC: g,
    isDsePresetsDisabled: f,
    isSlidesDisabled: y,
    isSitesDisabled: v,
    isCooperDisabled: I,
    isFigmakeDisabled: E,
    isPlanLocked: x,
    draftFolderId: S
  };
}
export const y = $$s0;