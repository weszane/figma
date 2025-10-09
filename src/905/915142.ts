import { ServiceCategories } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { isValidEmail } from "../figma_app/416935";
import { reportError } from "../905/11";
import { getI18nString } from "../905/303541";
import { FMemberRoleType } from "../figma_app/191312";
import { checkOrgUserPermission } from "../figma_app/465071";
import { baseErrorSeverity } from "../905/44199";
import { AccessLevelEnum } from "../905/557142";
import { mapOrgDomainProperties, mapUserProperties, mapResourceAccess } from "../figma_app/349248";
import { isEmailAllowed } from "../figma_app/336853";
export function $$h5(e, t, i) {
  return {
    state: t && isEmailAllowed(i, e) ? baseErrorSeverity.WARN : baseErrorSeverity.OK,
    content: e
  };
}
export function $$g6(e, t, i, n, r, s = null) {
  let l;
  let d = "";
  isValidEmail(e) ? i && isEmailAllowed(n, e) ? s ? (l = baseErrorSeverity.ERROR, d = s) : l = baseErrorSeverity.WARN : r && r === e ? (l = baseErrorSeverity.ERROR, d = getI18nString("team_view.team_permissions_modal.youre_not_able_to_send_an_invite_to_yourself")) : l = baseErrorSeverity.OK : l = baseErrorSeverity.ERROR;
  return {
    state: l,
    content: t,
    errorMessage: d
  };
}
export var $$f2 = (e => (e.DEV_MODE = "dev", e.DESIGN = "design", e.AUTO = "auto", e.SLIDES = "slides", e))($$f2 || {});
export function $$_4() {
  return getFeatureFlags().sc_file_folder_access;
}
export function $$A1(e) {
  let t = e.team;
  if (!t) return null;
  let i = t.org && {
    id: t.org.id,
    name: t.org.name,
    domain_capture: t.org.domainCapture,
    invite_whitelist_guest_invite_setting: t.org.inviteWhitelist?.guestInviteSetting,
    org_domains: mapOrgDomainProperties(t.org.orgDomains),
    figjam_disabled_at: t.org.figjamDisabledAt,
    img_url: t.org.imgUrl
  };
  let n = {
    sharingAudienceControl: t.sharingAudienceControl,
    orgBrowsable: t.orgBrowsable,
    hidden: t.hidden
  };
  let r = t.workspace;
  let a = t.pendingTeamRoleRequests || [];
  return {
    org: i,
    teamSharingSettings: n,
    workspace: r,
    canEdit: t.canEdit,
    canRead: t.canRead,
    canAdmin: t.canAdmin,
    canAdminOrg: !!(t?.currentPlanUser && checkOrgUserPermission(t.currentPlanUser, FMemberRoleType.ADMIN)),
    canDelete: t.canDelete,
    isOwner: t.isOwner,
    isInTeam: !!(t.roleOnObjectForUser && t.roleOnObjectForUser.level >= AccessLevelEnum.VIEWER),
    pendingTeamRoleRequests: a,
    currentPlanUser: t.currentPlanUser
  };
}
export function $$y0(e) {
  let t = e.team;
  return t ? t.roles?.map(e => {
    let t = e.user ? mapUserProperties(e.user) : null;
    e.pending || t || (reportError(ServiceCategories.FRONTEND_PLATFORM, Error("Non-pending role has no user"), {
      extra: {
        role: e
      }
    }), t = {
      id: "id",
      handle: "",
      img_url: ""
    });
    return mapResourceAccess(e, t, null, null);
  }) : null;
}
export function $$b3(e) {
  if ("loaded" !== e.status) return null;
  let t = e.data.project;
  if (!t) return null;
  let i = null;
  let a = t.teamPublicInfo?.orgForGuests ?? t.orgInfoForDraftProjects;
  i = a && {
    id: a.id,
    name: a.name,
    domain_capture: !!a.domainCapture,
    invite_whitelist_guest_invite_setting: a.inviteWhitelist?.guestInviteSetting,
    figjam_disabled_at: a.figjamDisabledAt,
    org_domains: mapOrgDomainProperties(a.orgDomains),
    img_url: a.imgUrl
  };
  let o = t.roles.map(e => {
    let t = e.user ? mapUserProperties(e.user) : null;
    e.pending || t || (reportError(ServiceCategories.FRONTEND_PLATFORM, Error("Non-pending role has no user"), {
      extra: {
        role: e
      }
    }), t = {
      id: "id",
      handle: "",
      img_url: ""
    });
    return mapResourceAccess(e, t, null, null);
  });
  return {
    org: i,
    workspace: getFeatureFlags().sc_workspace_audience && t.computedWorkspace?.workspace || null,
    sharingAudienceControl: t.sharingAudienceControl,
    teamAccess: t.teamAccess,
    team: t.teamPermissioned,
    canRead: t.canRead,
    canEdit: t.canEdit,
    canModifyRoles: t.canModifyRoles,
    isOwner: t.isOwner,
    roles: o,
    resourceConnection: t.activeProjectResourceConnections?.[0] || null,
    currentPlanUser: t.currentPlanUser,
    planPublicInfo: t.planPublicInfo
  };
}
export const SN = $$y0;
export const X = $$A1;
export const iO = $$f2;
export const ob = $$b3;
export const s5 = $$_4;
export const t9 = $$h5;
export const yI = $$g6;