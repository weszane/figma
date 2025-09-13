import { getI18nString } from '../905/303541';
import { J } from '../905/491186';
import { AccessLevelEnum } from '../905/557142';
import { getFeatureFlags } from '../905/601108';
import { findTeamById } from '../905/613917';
import { mapUserRoleToOrgUserRoleAlias, isExternalRestricted } from '../figma_app/12796';
import { OrgUserRoleEnum } from '../figma_app/35887';
import { cn, GU } from '../figma_app/141320';
import { FAccessLevelType, FBasicPermissionType, FOrganizationRoleType, FPermissionLevelType, FResourceCategoryType } from '../figma_app/191312';
import { oq } from '../figma_app/528509';
import { memoizeByArgs } from '../figma_app/815945';
function h(e, t, r, n, i, a, s, o, l, d, c, u, p, _, h) {
  return {
    currentUserOrgId: e,
    user: t,
    fileByKey: r,
    repos: n,
    folders: i,
    teams: a,
    roles: s,
    orgById: o,
    orgUsersByOrgId: l,
    teamUserByTeamId: d,
    userEduGracePeriods: c,
    licenseGroups: u,
    orgTeams: p,
    openFile: _,
    currentTeamId: h
  };
}
let m = memoizeByArgs(h);
export function $$g10(e) {
  return h(e.currentUserOrgId, e.user, e.fileByKey, e.repos, e.folders, e.teams, e.roles, e.orgById, e.orgUsersByOrgId, e.teamUserByTeamId, e.userEduGracePeriods, e.licenseGroups, e.orgTeams, e.openFile, e.currentTeamId);
}
export function $$f11(e) {
  return m(e.currentUserOrgId, e.user, e.fileByKey, e.repos, e.folders, e.teams, e.roles, e.orgById, e.orgUsersByOrgId, e.teamUserByTeamId, e.userEduGracePeriods, e.licenseGroups, e.orgTeams, e.openFile, e.currentTeamId);
}
export function $$E13(e, t) {
  switch (e.resource_type) {
    case FResourceCategoryType.FILE:
      let r = t.fileByKey[e.resource_id_or_key];
      return r && r.team_id;
    case FResourceCategoryType.FILE_REPO:
      let n = t.repos[e.resource_id_or_key];
      let i = t.folders[n?.folder_id];
      return i?.team_id ?? null;
    case FResourceCategoryType.FOLDER:
      let a = t.folders[e.resource_id_or_key];
      return a?.team_id ?? null;
    case FResourceCategoryType.TEAM:
      return e.resource_id_or_key;
  }
}
export function $$y20(e, t) {
  for (let r of e) {
    if (r.level >= t) return !0;
  }
  return !1;
}
export function $$b15(e, t) {
  let r = t.user?.id;
  let n = t.roles;
  return e in n.byTeamId && r && r in n.byTeamId[e] ? [n.byTeamId[e][r]] : [];
}
function T(e, t) {
  let r = t.user && t.user.id;
  let n = [];
  let i = t.roles;
  e in i.byFolderId && r && r in i.byFolderId[e] && n.push(i.byFolderId[e][r]);
  let a = t.folders[e];
  a && a.team_id && !a.is_invite_only && (n = n.concat($$b15(a.team_id, t)));
  return n;
}
function I(e, t) {
  let r = t.user && t.user.id;
  let n = t.roles;
  let i = [];
  e in n.byRepoId && r && r in n.byRepoId[e] && i.push(n.byRepoId[e][r]);
  let a = t.repos[e];
  a && (i = [...i, ...T(a.folder_id, t)]);
  return i;
}
export function $$S9(e, t) {
  let r = t.user && t.user.id;
  let n = t.roles;
  return e in n.byFileKey && r && r in n.byFileKey[e] ? n.byFileKey[e][r] : null;
}
export function $$v14(e, t, r) {
  switch (e) {
    case FResourceCategoryType.FILE:
      return function (e, t) {
        let r = [];
        let n = $$S9(e, t);
        n !== null && r.push(n);
        let i = t.fileByKey[e];
        i && i.folder_id && (r = r.concat(T(i.folder_id, t)));
        i && i.file_repo_id && (r = [...r, ...I(i.file_repo_id, t)]);
        return r;
      }(t, r);
    case FResourceCategoryType.FILE_REPO:
      return I(t, r);
    case FResourceCategoryType.FOLDER:
      return T(t, r);
    case FResourceCategoryType.TEAM:
      return $$b15(t, r);
  }
}
function A(e, t, r) {
  if (r.user && !cn(r.user)) return !1;
  let n = findTeamById(e, r);
  if (!n) return !1;
  let i = !!r.user && GU(r.userEduGracePeriods, cn(r.user), n.id, n.student_team).showAccessRestricted;
  return t > AccessLevelEnum.VIEWER && i;
}
function x(e, t, r) {
  let i = findTeamById(e, r);
  if (!i) return !1;
  let a = r.user?.id;
  let s = i.org_id;
  let o = getFeatureFlags().sc_open_team_deprecation;
  let l = i.sharing_audience_control;
  if (s) {
    let n = !o && t <= AccessLevelEnum.EDITOR && $$U5(s, r) && i.org_access === FAccessLevelType.PUBLIC && i.default_permission === FBasicPermissionType.EDIT;
    let c = $$y20($$b15(e, r), t);
    let u = t <= AccessLevelEnum.ADMIN && (c || $$V4(i, r, a));
    let _ = !o && t <= AccessLevelEnum.VIEWER && $$U5(s, r) && i.org_access === FAccessLevelType.PUBLIC;
    let h = $$U5(s, r) && (t <= AccessLevelEnum.VIEWER && l === FPermissionLevelType.ORG_VIEW || t <= AccessLevelEnum.EDITOR && l === FPermissionLevelType.ORG_EDIT);
    return (u || _ || c || n || h) && $$j3(s, r);
  }
  return N(e, t, r);
}
function N(e, t, r) {
  return $$y20($$b15(e, r), t) && !A(e, t, r);
}
export function $$C7(e, t) {
  return function (e, t, r) {
    let i;
    let a = r.user && r.user.id;
    let s = r.folders[e];
    if (!a || !s) return !1;
    let o = oq(s.id, r);
    if (o && !$$j3(o, r)) return !1;
    let c = s.team_id && r.teams[s.team_id];
    let u = getFeatureFlags().sc_open_team_deprecation;
    let _ = s.sharing_audience_control;
    if (!u && o && $$U5(o, r) && t <= AccessLevelEnum.VIEWER && c && c.org_access === FAccessLevelType.PUBLIC && !s.is_invite_only || !u && o && $$U5(o, r) && t <= AccessLevelEnum.EDITOR && c && c.org_access === FAccessLevelType.PUBLIC && !s.is_invite_only && !s.is_view_only && c.default_permission === FBasicPermissionType.EDIT || o && $$U5(o, r) && (t <= AccessLevelEnum.EDITOR && _ === FPermissionLevelType.ORG_EDIT || t <= AccessLevelEnum.VIEWER && _ === FPermissionLevelType.ORG_VIEW)) return !0;
    let h = T(e, r);
    return (h.forEach(e => {
      e.resource_type === FResourceCategoryType.FOLDER && (i = e);
    }), !s.team_id || s.is_invite_only || s.is_view_only && t >= AccessLevelEnum.EDITOR) ? !!i && i.level >= t : $$y20(h, t);
  }(e, AccessLevelEnum.VIEWER, t);
}
export function $$w8(e, t) {
  return x(e, AccessLevelEnum.VIEWER, t);
}
export function $$O2(e, t) {
  return x(e, AccessLevelEnum.EDITOR, t);
}
export function $$R1(e, t) {
  return x(e, AccessLevelEnum.ADMIN, t);
}
export function $$L6(e, t) {
  return x(e, AccessLevelEnum.OWNER, t);
}
export function $$P22(e, t) {
  return N(e, AccessLevelEnum.VIEWER, t);
}
export function $$D19(e, t) {
  return N(e, AccessLevelEnum.EDITOR, t);
}
export function $$k18(e, t, r) {
  let n;
  n = AccessLevelEnum.ADMIN;
  return $$y20(function (e, t, r) {
    let n = t.roles;
    return e in n.byTeamId && r && r in n.byTeamId[e] ? [n.byTeamId[e][r]] : [];
  }(e, t, r), n) && !A(e, n, t);
}
export function $$M17(e, t) {
  return N(e, AccessLevelEnum.ADMIN, t);
}
function F(e, t, r) {
  return r ? e.orgUsersByOrgId[t]?.[r] ?? J(e, 'org_user', t) : null;
}
export function $$j3(e, t) {
  let r = t.user;
  if (!e || !r) return !1;
  let n = t.orgById[e] ?? J(t, 'org', e);
  return $$G21(F(t, e, r.id), n, OrgUserRoleEnum.GUEST);
}
export function $$U5(e, t, r) {
  if (!e) return !1;
  r = r || t.user?.id;
  let n = t.orgById[e] ?? J(t, 'org', e);
  return $$G21(F(t, e, r), n, OrgUserRoleEnum.MEMBER);
}
export function $$B0(e, t, r) {
  if (!e) return !1;
  let n = t.orgById[e] ?? J(t, 'org', e);
  r = r || t.user?.id;
  return $$G21(F(t, e, r), n, OrgUserRoleEnum.ADMIN);
}
export function $$G21(e, t, r) {
  return !!t && !!e && mapUserRoleToOrgUserRoleAlias(e.permission) >= r;
}
export function $$V4(e, t, r) {
  return e.org_access !== FAccessLevelType.SECRET && function (e, t, r) {
    if (!(r = r || t.user?.id) || !e || !t.currentUserOrgId) return !1;
    let n = t.currentUserOrgId && t.user && t.orgUsersByOrgId[t.currentUserOrgId] ? t.orgUsersByOrgId[t.currentUserOrgId][r] : null;
    n === null && (n = J(t, 'org_user', t.currentUserOrgId));
    let i = findTeamById(e, t);
    if (!i || !n || t.currentUserOrgId !== i.org_id) return !1;
    if ($$M17(e, t)) return !0;
    let s = $$B0(t.currentUserOrgId, t, r);
    return i.org_access !== FAccessLevelType.SECRET && (s || !!(i.workspace_id && function (e, t, r) {
      r = r || t.user?.id;
      let n = t.currentUserOrgId;
      return !!(e && r && n && t.orgUsersByOrgId?.[n]?.[r].workspace_users?.find(t => t.permission === FOrganizationRoleType.ADMIN && t.workspace_id === e));
    }(i.workspace_id, t, r)));
  }(e.id, t, r);
}
export function $$H23(e) {
  return isExternalRestricted(e.user, e.currentUserOrgId);
}
export function $$z16(e, t) {
  return !!t && Object.entries(e.teamUserByTeamId ?? {}).find(([r, n]) => {
    let i = e.teams[r];
    return !!i?.student_team_at && n[t] != null;
  }) != null;
}
export function $$W12(e, t) {
  if (e.level !== AccessLevelEnum.VIEWER && e.level !== AccessLevelEnum.VIEW_PROTOTYPES) return null;
  let r = t.folders[e.resource_id_or_key];
  if (!r) return null;
  let n = e.user_id && r.team_id && t.roles.byTeamId[r.team_id] && t.roles.byTeamId[r.team_id][e.user_id];
  let i = !r.is_invite_only && !r.is_view_only;
  return n && n.level > AccessLevelEnum.VIEWER && i ? getI18nString('permissions.can_still_edit_team_project_is_in') : null;
}
export const canAdminOrg = $$B0;
export const canAdminTeam = $$R1;
export const canEditTeam = $$O2;
export const canGuestOrg = $$j3;
export const canManageNonSecretOrgTeam = $$V4;
export const canMemberOrg = $$U5;
export const canOwnTeam = $$L6;
export const canViewFolder_DEPRECATED = $$C7;
export const canViewTeam = $$w8;
export const getExplicitRoleForUserAndFile = $$S9;
export const getPermissionsState = $$g10;
export const getPermissionsStateMemoized = $$f11;
export const getReadOnlyOverrideMessageForFolder = $$W12;
export const getResourceTeamId = $$E13;
export const getRolesForResource = $$v14;
export const getRolesForUserAndTeam = $$b15;
export const hasActiveEduTeam = $$z16;
export const hasAdminRoleAccessOnTeam = $$M17;
export const hasAdminRoleAccessOnTeam__DEPRECATED = $$k18;
export const hasEditorRoleAccessOnTeam = $$D19;
export const hasMinRole = $$y20;
export const hasOrgAccess = $$G21;
export const hasViewerRoleAccessOnTeam = $$P22;
export const isOrgUserExternallyRestrictedFromState = $$H23;