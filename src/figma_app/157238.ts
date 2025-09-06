import { ServiceCategories as _$$e } from "../905/165054";
import { getInitialOptions } from "../figma_app/169182";
import { oA } from "../905/723791";
import { reportError } from "../905/11";
import { dA } from "../905/513035";
import { TA, Zx } from "../figma_app/217457";
import { FUserRoleType, FCostCenterType, FPlanFeatureType, FProductAccessType, FResourceTargetType } from "../figma_app/191312";
import { L8, QT } from "../figma_app/576636";
import { Wd } from "../figma_app/617654";
export function $$p0(e, t, r = !1, n) {
  var i;
  let s;
  let o = e.user.idpUsersInOrg[0];
  return {
    type: Wd.ORG_USER,
    user: {
      id: e.user.id,
      handle: e.user.handle,
      img_url: e.user.imgUrl,
      email: e.user.email
    },
    account_type: e.accountType,
    is_email_validated: null !== e.user.emailValidatedAt,
    design_paid_status: e.accountType,
    id: e.id,
    org_id: e.orgId,
    user_id: e.user.id,
    permission: e.permission,
    created_at: e.createdAt.toISOString(),
    updated_at: e.updatedAt.toISOString(),
    show_figjam_user_onboarding: e.showFigjamUserOnboarding,
    has_shown_figjam_admin_onboarding: e.hasShownFigjamAdminOnboarding,
    has_shown_figjam_admin_launch_onboarding: e.hasShownFigjamAdminLaunchOnboarding,
    account_type_changed_at: e.accountTypeChangedAt ? e.accountTypeChangedAt.toISOString() : void 0,
    description: e.description,
    user_state_changed_at: e.userStateChangedAt ? e.userStateChangedAt.toISOString() : void 0,
    agreed_to_community_tos_at: e.agreedToCommunityTosAt ? e.agreedToCommunityTosAt.toISOString() : null,
    license_admin: !!e.licenseGroupAdmins?.length,
    license_group_member: e.licenseGroupMember ? {
      id: e.licenseGroupMember.id,
      license_group_id: e.licenseGroupMember?.licenseGroupId,
      org_user_id: e.licenseGroupMember.orgUserId,
      created_at: e.licenseGroupMember.createdAt.toISOString(),
      updated_at: e.licenseGroupMember.updatedAt.toISOString(),
      assigned_at: e.licenseGroupMember.assignedAt ? e.licenseGroupMember.assignedAt.toISOString() : "",
      update_reason: e.licenseGroupMember.updateReason,
      actor_user_id: e.licenseGroupMember.actorUserId,
      idp_group: oA(e.licenseGroupMember.idpGroup, null)
    } : void 0,
    ecc_upgrading_locked: e.permission === FUserRoleType.GUEST && null !== e.user.externalRestrictedOrgId,
    scim_metadata: o ? function (e) {
      let t = {};
      return e ? (e.costCenter && (t[FCostCenterType.COST_CENTER] = e.costCenter), e.department && (t[FCostCenterType.DEPARTMENT] = e.department), e.division && (t[FCostCenterType.DIVISION] = e.division), e.organization && (t[FCostCenterType.ORGANIZATION] = e.organization), t) : {};
    }(o.scim.enterpriseFields) : null,
    last_seen: t?.lastSeen,
    last_design_seen: t?.lastDesignSeen,
    last_whiteboard_seen: t?.lastWhiteboardSeen,
    last_edit: t?.lastEdit,
    last_design_edit: t?.lastDesignEdit,
    last_whiteboard_edit: t?.lastWhiteboardEdit,
    last_dev_mode_seen: t?.lastDevModeSeen,
    whiteboard_paid_status: e.whiteboardPaidStatus || FPlanFeatureType.STARTER,
    drafts_folder_id: e.draftsFolderId,
    disabled_at: e.disabledAt ? e.disabledAt.toISOString() : void 0,
    scim_account_type: o ? m(o.scim, FProductAccessType.DESIGN, r) : null,
    scim_whiteboard_paid_status: o ? m(o.scim, FProductAccessType.WHITEBOARD, r) : null,
    scim_dev_mode_paid_status: o ? m(o.scim, FProductAccessType.DEV_MODE, r) : null,
    scim_is_admin: o ? (i = o.scim, s = null, r && i.figmaEnterpriseFields && (s = i.figmaEnterpriseFields.figmaAdmin), s) : null,
    dev_mode_paid_status: e.devModePaidStatus || FPlanFeatureType.RESTRICTED,
    design_upgrade_reason: g(e.mostRecentDesignUserUpgrade),
    whiteboard_upgrade_reason: g(e.mostRecentWhiteboardUserUpgrade),
    dev_mode_upgrade_reason: g(e.mostRecentDevModeUserUpgrade),
    workspace_users: e.workspaceUsers.map(h),
    is_dev_mode_beta_user: !!e.devModeBetaUsedEvent,
    is_mfa_restricted: !!oA(e.isMfaRestricted, !1),
    active_seat_type: TA(t?.orgUser?.activeSeatTypeUpgrade?.billableProduct),
    scim_seat_type: r ? $$f(o?.seatType) : null,
    active_seat_upgrade_date: E(t?.orgUser?.activeSeatTypeUpgrade, n) || void 0,
    active_seat_upgrade_method: function (e, t) {
      if (!e) return null;
      let r = g(e);
      if (!r) return null;
      let n = E(e, t);
      n && (r.created_at = n);
      return {
        ...r,
        upgrade_method: e.upgradeMethod
      };
    }(t?.orgUser?.activeSeatTypeUpgrade, n),
    job_title: e.user.profile?.jobTitle ?? void 0
  };
}
export function $$_1(e, t) {
  let r = [];
  let n = e.orgAdminUsersInfo.canRoleSetWithScim;
  for (let i of e.orgAdminUsers) switch (i.type) {
    case "org_user":
      let e = i.orgUser;
      if (!e) continue;
      r.push($$p0(e, i, n, t));
      break;
    case "idp_user":
      let s = i.idpUser;
      if (!s) continue;
      let o = n ? $$f(s.seatType) : null;
      r.push({
        id: s.id,
        type: Wd.IDP_USER,
        email: s.userName.toLowerCase(),
        name: function (e) {
          let t = e.scim;
          if (t.displayName) return t.displayName;
          if (t.name) {
            let e = `${t.name.givenName} ${t.name.familyName}`.trim();
            if (e) return e;
          }
          return t.userName ? t.userName : null;
        }(s),
        account_type: m(s.scim, FProductAccessType.DESIGN, n),
        scim_metadata: s.scim.enterpriseFields || {},
        whiteboard_paid_status: m(s.scim, FProductAccessType.WHITEBOARD, n),
        dev_mode_paid_status: m(s.scim, FProductAccessType.DEV_MODE, n),
        seat_type_key: L8(o),
        scim_seat_type: o
      });
      break;
    case "org_invite":
      let _ = i.orgInvite;
      if (!_) continue;
      let h = oA(_.billableProductKey, null);
      r.push({
        type: Wd.ORG_INVITE,
        id: _.id,
        org_id: _.orgId,
        email: _.email,
        account_type: _.accountType,
        billable_product_key: h ? Zx(h) : null,
        created_at: _.createdAt.toISOString(),
        updated_at: _.updatedAt.toISOString(),
        license_group_id: _.licenseGroupId,
        workspace_id: _.workspaceId
      });
  }
  return r;
}
function h(e) {
  return {
    actor_user_id: e.actorUserId,
    assigned_at: e.assignedAt,
    created_at: e.createdAt,
    id: e.id,
    is_main_workspace: e.isMainWorkspace,
    org_user_id: e.orgUserId,
    permission: e.permission,
    update_reason: e.updateReason,
    updated_at: e.updatedAt,
    uuid: e.uuid,
    workspace_id: e.workspaceId,
    idp_group: oA(e.idpGroup, null)
  };
}
function m(e, t, r) {
  let n = null;
  switch (t) {
    case FProductAccessType.DESIGN:
      n = e.figmaEnterpriseFields?.figmaPermission || e.figmaPermission;
      break;
    case FProductAccessType.WHITEBOARD:
      n = e.figmaEnterpriseFields?.figjamPermission || e.figjamPermission;
      break;
    case FProductAccessType.DEV_MODE:
      n = e.figmaEnterpriseFields?.devModePermission || e.devModePermission;
  }
  return n && !r ? null : "editor" === n || "full" === n ? FPlanFeatureType.FULL : "viewerRestricted" === n || "lockLimited" === n ? FPlanFeatureType.RESTRICTED : null;
}
function g(e) {
  if (!e) return null;
  let t = null;
  e.resourceType === FResourceTargetType.FILE ? t = e.resourceFile?.file : e.resourceType === FResourceTargetType.FOLDER ? t = e.resourceProject?.project : e.resourceType === FResourceTargetType.TEAM ? t = e.resourceTeam?.team : e.resourceType === FResourceTargetType.FILE_REPO ? t = e.resourceRepo?.repo : e.resourceType === FResourceTargetType.ORG && (t = e.resourceOrg?.org);
  let r = null;
  t && null !== t.name ? r = t.name : e.resourceId && e.resourceType && (r = `resource ${e.resourceId}`);
  return {
    org_user_id: e.orgUserId,
    reason: e.reason,
    created_at: e.createdAt.toISOString(),
    actor_id: e.actorId,
    actor_name: e.actor?.handle || null,
    resource_type: e.resourceType,
    resource_id_or_key: e.resourceId,
    resource_name: r,
    editor_type: e.licenseType,
    upgrade_method: null
  };
}
function $$f(e) {
  if (!e) return null;
  try {
    return QT.parse(e);
  } catch {
    reportError(_$$e.IAM, Error(`IdpUser has invalid seat type: ${e}`));
  }
  return null;
}
function E(e, t) {
  return e && e.billableProduct ? dA(e.billableProduct?.key) && null === e.upgradeMethod ? t ? new Date(t).toISOString() : getInitialOptions().analyze_data_flow_v2_until || e.createdAt.toISOString() : e.createdAt.toISOString() : null;
}
export const f = $$p0;
export const t = $$_1;