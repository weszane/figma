import { reportError } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { isValidAccessType } from '../905/513035'
import { getResourceDataOrFallback } from '../905/723791'
import { getInitialOptions } from '../figma_app/169182'
import { FCostCenterType, FPlanFeatureType, FProductAccessType, FResourceTargetType, FUserRoleType } from '../figma_app/191312'
import { convertLgSeatTypeProduct, getProductAccessTypeByKey } from '../figma_app/217457'
import { AccessLevelSchema, mapAccessLevelToProductType } from '../figma_app/576636'
import { Wd } from '../figma_app/617654'

// Original: $$p0
/**
 * Transforms an organization user object into a standardized user representation.
 * @param orgUser - The organization user data.
 * @param additionalData - Additional user data including last seen timestamps.
 * @param canRoleSetWithScim - Flag indicating if roles can be set with SCIM.
 * @param timestamp - Optional timestamp for upgrade calculations.
 * @returns The transformed user object.
 */
export function transformOrgUser(orgUser, additionalData, canRoleSetWithScim = false, timestamp) {
  const idpUser = orgUser.user.idpUsersInOrg[0];

  // Helper to get SCIM metadata
  const getScimMetadata = (idpUser) => {
    if (!idpUser) return null;
    const fields = idpUser.scim.enterpriseFields;
    if (!fields) return {};
    const metadata = {};
    if (fields.costCenter) metadata[FCostCenterType.COST_CENTER] = fields.costCenter;
    if (fields.department) metadata[FCostCenterType.DEPARTMENT] = fields.department;
    if (fields.division) metadata[FCostCenterType.DIVISION] = fields.division;
    if (fields.organization) metadata[FCostCenterType.ORGANIZATION] = fields.organization;
    return metadata;
  };

  // Helper to get SCIM admin status
  const getScimIsAdmin = (idpUser, canRoleSetWithScim) => {
    if (!idpUser) return null;
    const scim = idpUser.scim;
    let isAdmin = null;
    if (canRoleSetWithScim && scim.figmaEnterpriseFields) {
      isAdmin = scim.figmaEnterpriseFields.figmaAdmin;
    }
    return isAdmin;
  };

  // Helper to get upgrade reason
  const getUpgradeReason = (upgrade) => {
    if (!upgrade) return null;
    let resourceName = null;
    const resource = upgrade.resourceType === FResourceTargetType.FILE ? upgrade.resourceFile?.file :
                     upgrade.resourceType === FResourceTargetType.FOLDER ? upgrade.resourceProject?.project :
                     upgrade.resourceType === FResourceTargetType.TEAM ? upgrade.resourceTeam?.team :
                     upgrade.resourceType === FResourceTargetType.FILE_REPO ? upgrade.resourceRepo?.repo :
                     upgrade.resourceType === FResourceTargetType.ORG ? upgrade.resourceOrg?.org : null;
    if (resource && resource.name !== null) {
      resourceName = resource.name;
    } else if (upgrade.resourceId && upgrade.resourceType) {
      resourceName = `resource ${upgrade.resourceId}`;
    }
    return {
      org_user_id: upgrade.orgUserId,
      reason: upgrade.reason,
      created_at: upgrade.createdAt.toISOString(),
      actor_id: upgrade.actorId,
      actor_name: upgrade.actor?.handle || null,
      resource_type: upgrade.resourceType,
      resource_id_or_key: upgrade.resourceId,
      resource_name: resourceName,
      editor_type: upgrade.licenseType,
      upgrade_method: null,
    };
  };

  // Helper to get active seat upgrade method
  const getActiveSeatUpgradeMethod = (upgrade, timestamp) => {
    if (!upgrade) return null;
    const reason = getUpgradeReason(upgrade);
    if (!reason) return null;
    const date = getUpgradeDate(upgrade, timestamp);
    if (date) reason.created_at = date;
    return {
      ...reason,
      upgrade_method: upgrade.upgradeMethod,
    };
  };

  return {
    type: Wd.ORG_USER,
    user: {
      id: orgUser.user.id,
      handle: orgUser.user.handle,
      img_url: orgUser.user.imgUrl,
      email: orgUser.user.email,
    },
    account_type: orgUser.accountType,
    is_email_validated: orgUser.user.emailValidatedAt !== null,
    design_paid_status: orgUser.accountType,
    id: orgUser.id,
    org_id: orgUser.orgId,
    user_id: orgUser.user.id,
    permission: orgUser.permission,
    created_at: orgUser.createdAt.toISOString(),
    updated_at: orgUser.updatedAt.toISOString(),
    show_figjam_user_onboarding: orgUser.showFigjamUserOnboarding,
    has_shown_figjam_admin_onboarding: orgUser.hasShownFigjamAdminOnboarding,
    has_shown_figjam_admin_launch_onboarding: orgUser.hasShownFigjamAdminLaunchOnboarding,
    account_type_changed_at: orgUser.accountTypeChangedAt ? orgUser.accountTypeChangedAt.toISOString() : undefined,
    description: orgUser.description,
    user_state_changed_at: orgUser.userStateChangedAt ? orgUser.userStateChangedAt.toISOString() : undefined,
    agreed_to_community_tos_at: orgUser.agreedToCommunityTosAt ? orgUser.agreedToCommunityTosAt.toISOString() : null,
    license_admin: !!orgUser.licenseGroupAdmins?.length,
    license_group_member: orgUser.licenseGroupMember ? {
      id: orgUser.licenseGroupMember.id,
      license_group_id: orgUser.licenseGroupMember.licenseGroupId,
      org_user_id: orgUser.licenseGroupMember.orgUserId,
      created_at: orgUser.licenseGroupMember.createdAt.toISOString(),
      updated_at: orgUser.licenseGroupMember.updatedAt.toISOString(),
      assigned_at: orgUser.licenseGroupMember.assignedAt ? orgUser.licenseGroupMember.assignedAt.toISOString() : '',
      update_reason: orgUser.licenseGroupMember.updateReason,
      actor_user_id: orgUser.licenseGroupMember.actorUserId,
      idp_group: getResourceDataOrFallback(orgUser.licenseGroupMember.idpGroup, null),
    } : undefined,
    ecc_upgrading_locked: orgUser.permission === FUserRoleType.GUEST && orgUser.user.externalRestrictedOrgId !== null,
    scim_metadata: getScimMetadata(idpUser),
    last_seen: additionalData?.lastSeen,
    last_design_seen: additionalData?.lastDesignSeen,
    last_whiteboard_seen: additionalData?.lastWhiteboardSeen,
    last_edit: additionalData?.lastEdit,
    last_design_edit: additionalData?.lastDesignEdit,
    last_whiteboard_edit: additionalData?.lastWhiteboardEdit,
    last_dev_mode_seen: additionalData?.lastDevModeSeen,
    whiteboard_paid_status: orgUser.whiteboardPaidStatus || FPlanFeatureType.STARTER,
    drafts_folder_id: orgUser.draftsFolderId,
    disabled_at: orgUser.disabledAt ? orgUser.disabledAt.toISOString() : undefined,
    scim_account_type: idpUser ? mapScimPermissionToPlanFeature(idpUser.scim, FProductAccessType.DESIGN, canRoleSetWithScim) : null,
    scim_whiteboard_paid_status: idpUser ? mapScimPermissionToPlanFeature(idpUser.scim, FProductAccessType.WHITEBOARD, canRoleSetWithScim) : null,
    scim_dev_mode_paid_status: idpUser ? mapScimPermissionToPlanFeature(idpUser.scim, FProductAccessType.DEV_MODE, canRoleSetWithScim) : null,
    scim_is_admin: getScimIsAdmin(idpUser, canRoleSetWithScim),
    dev_mode_paid_status: orgUser.devModePaidStatus || FPlanFeatureType.RESTRICTED,
    design_upgrade_reason: getUpgradeReason(orgUser.mostRecentDesignUserUpgrade),
    whiteboard_upgrade_reason: getUpgradeReason(orgUser.mostRecentWhiteboardUserUpgrade),
    dev_mode_upgrade_reason: getUpgradeReason(orgUser.mostRecentDevModeUserUpgrade),
    workspace_users: orgUser.workspaceUsers.map(transformWorkspaceUser),
    is_dev_mode_beta_user: !!orgUser.devModeBetaUsedEvent,
    is_mfa_restricted: !!getResourceDataOrFallback(orgUser.isMfaRestricted, false),
    active_seat_type: convertLgSeatTypeProduct(additionalData?.orgUser?.activeSeatTypeUpgrade?.billableProduct),
    scim_seat_type: canRoleSetWithScim ? parseSeatType(idpUser?.seatType) : null,
    active_seat_upgrade_date: getUpgradeDate(additionalData?.orgUser?.activeSeatTypeUpgrade, timestamp) || undefined,
    active_seat_upgrade_method: getActiveSeatUpgradeMethod(additionalData?.orgUser?.activeSeatTypeUpgrade, timestamp),
    job_title: orgUser.user.profile?.jobTitle ?? undefined,
  };
}

// Original: $$_1
/**
 * Retrieves and transforms the list of organization users, including org users, IDP users, and invites.
 * @param orgAdminUsersInfo - Information about organization admin users.
 * @param timestamp - Optional timestamp for upgrade calculations.
 * @returns An array of transformed user objects.
 */
export function getOrgUsersList(orgAdminUsersInfo, timestamp) {
  const users = [];
  const canRoleSetWithScim = orgAdminUsersInfo.canRoleSetWithScim;

  for (const adminUser of orgAdminUsersInfo.orgAdminUsers) {
    switch (adminUser.type) {
      case 'org_user': {
        const orgUser = adminUser.orgUser;
        if (!orgUser) continue;
        users.push(transformOrgUser(orgUser, adminUser, canRoleSetWithScim, timestamp));
        break;
      }
      case 'idp_user': {
        const idpUser = adminUser.idpUser;
        if (!idpUser) continue;
        const seatType = canRoleSetWithScim ? parseSeatType(idpUser.seatType) : null;
        // Helper to get display name
        const getDisplayName = (idpUser) => {
          const scim = idpUser.scim;
          if (scim.displayName) return scim.displayName;
          if (scim.name) {
            const fullName = `${scim.name.givenName} ${scim.name.familyName}`.trim();
            if (fullName) return fullName;
          }
          return scim.userName || null;
        };
        users.push({
          id: idpUser.id,
          type: Wd.IDP_USER,
          email: idpUser.userName.toLowerCase(),
          name: getDisplayName(idpUser),
          account_type: mapScimPermissionToPlanFeature(idpUser.scim, FProductAccessType.DESIGN, canRoleSetWithScim),
          scim_metadata: idpUser.scim.enterpriseFields || {},
          whiteboard_paid_status: mapScimPermissionToPlanFeature(idpUser.scim, FProductAccessType.WHITEBOARD, canRoleSetWithScim),
          dev_mode_paid_status: mapScimPermissionToPlanFeature(idpUser.scim, FProductAccessType.DEV_MODE, canRoleSetWithScim),
          seat_type_key: mapAccessLevelToProductType(seatType),
          scim_seat_type: seatType,
        });
        break;
      }
      case 'org_invite': {
        const orgInvite = adminUser.orgInvite;
        if (!orgInvite) continue;
        const billableProductKey = getResourceDataOrFallback(orgInvite.billableProductKey, null);
        users.push({
          type: Wd.ORG_INVITE,
          id: orgInvite.id,
          org_id: orgInvite.orgId,
          email: orgInvite.email,
          account_type: orgInvite.accountType,
          billable_product_key: billableProductKey ? getProductAccessTypeByKey(billableProductKey) : null,
          created_at: orgInvite.createdAt.toISOString(),
          updated_at: orgInvite.updatedAt.toISOString(),
          license_group_id: orgInvite.licenseGroupId,
          workspace_id: orgInvite.workspaceId,
        });
        break;
      }
    }
  }
  return users;
}

// Original: h
/**
 * Transforms a workspace user object.
 * @param workspaceUser - The workspace user data.
 * @returns The transformed workspace user object.
 */
function transformWorkspaceUser(workspaceUser) {
  return {
    actor_user_id: workspaceUser.actorUserId,
    assigned_at: workspaceUser.assignedAt,
    created_at: workspaceUser.createdAt,
    id: workspaceUser.id,
    is_main_workspace: workspaceUser.isMainWorkspace,
    org_user_id: workspaceUser.orgUserId,
    permission: workspaceUser.permission,
    update_reason: workspaceUser.updateReason,
    updated_at: workspaceUser.updatedAt,
    uuid: workspaceUser.uuid,
    workspace_id: workspaceUser.workspaceId,
    idp_group: getResourceDataOrFallback(workspaceUser.idpGroup, null),
  };
}

// Original: m
/**
 * Maps SCIM permissions to plan feature types.
 * @param scim - The SCIM data.
 * @param productAccessType - The product access type.
 * @param canRoleSetWithScim - Flag indicating if roles can be set with SCIM.
 * @returns The mapped plan feature type or null.
 */
function mapScimPermissionToPlanFeature(scim, productAccessType, canRoleSetWithScim) {
  let permission = null;
  switch (productAccessType) {
    case FProductAccessType.DESIGN:
      permission = scim.figmaEnterpriseFields?.figmaPermission || scim.figmaPermission;
      break;
    case FProductAccessType.WHITEBOARD:
      permission = scim.figmaEnterpriseFields?.figjamPermission || scim.figjamPermission;
      break;
    case FProductAccessType.DEV_MODE:
      permission = scim.figmaEnterpriseFields?.devModePermission || scim.devModePermission;
      break;
  }
  if (!permission || !canRoleSetWithScim) return null;
  if (permission === 'editor' || permission === 'full') return FPlanFeatureType.FULL;
  if (permission === 'viewerRestricted' || permission === 'lockLimited') return FPlanFeatureType.RESTRICTED;
  return null;
}

// Original: g (moved to helper in transformOrgUser)

// Original: $$f
/**
 * Parses and validates the seat type using the access level schema.
 * @param seatType - The seat type to parse.
 * @returns The parsed seat type or null if invalid.
 */
function parseSeatType(seatType) {
  if (!seatType) return null;
  try {
    return AccessLevelSchema.parse(seatType);
  } catch {
    reportError(ServiceCategories.IAM, new Error(`IdpUser has invalid seat type: ${seatType}`));
  }
  return null;
}

// Original: E
/**
 * Calculates the upgrade date based on the upgrade data and timestamp.
 * @param upgrade - The upgrade data.
 * @param timestamp - Optional timestamp.
 * @returns The upgrade date as ISO string or null.
 */
function getUpgradeDate(upgrade, timestamp) {
  if (!upgrade || !upgrade.billableProduct) return null;
  if (isValidAccessType(upgrade.billableProduct.key) && upgrade.upgradeMethod === null) {
    return timestamp ? new Date(timestamp).toISOString() : getInitialOptions().analyze_data_flow_v2_until || upgrade.createdAt.toISOString();
  }
  return upgrade.createdAt.toISOString();
}

// Refactored exports (original: f = $$p0, t = $$_1)
export const f = transformOrgUser;
export const t = getOrgUsersList;
