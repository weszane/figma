import { mapUserRoleToOrgUserRole } from '../905/66460';
import { getI18nString } from '../905/303541';
import { AccessLevelEnum } from '../905/557142';
import { isFullscreenSitesView } from '../905/561485';
import { getFeatureFlags } from '../905/601108';
import { getEntityType } from '../905/760074';
import { isFullscreenDevHandoffView } from '../905/782918';
import { isValidWorkshopModeExpiration } from '../figma_app/789';
import { FAccessLevelType, FPermissionLevelType, FPlanNameType, FUserRoleType } from '../figma_app/191312';
import { getFeatureTypeLabel } from '../figma_app/326667';
import { isZoomIntegration } from '../figma_app/469876';
import { canAccessFullDevMode } from '../figma_app/473493';
import { isFigmakeFullscreenView } from '../figma_app/552876';
import { teamVisibilityEnum } from '../figma_app/630077';
import { isFullscreenCooper } from '../figma_app/828186';
import { isInteractionPathCheck } from '../figma_app/897289';

// Original code from $$E7 - Checks if Zoom integration allows running widgets/plugins
/**
 * Determines if widgets/plugins can run based on Zoom integration settings.
 * @returns {Object} An object with canRun boolean and optional message.
 */
export function checkZoomWidgetAccess() {
  return isZoomIntegration() && !getFeatureFlags().integ_zoom_allow_extensions ? {
    canRun: false,
    message: getI18nString('widgets.no_zoom_widgets_plugins')
  } : {
    canRun: true
  };
}

// Original code from $$y10 - Checks if copy/export is not restricted
/**
 * Checks if copy/export is allowed based on provided arguments.
 * @param {Object} params - The parameters object.
 * @param {Object} params.copyExportRestrictedArgs - Arguments for copy/export restriction check.
 * @returns {boolean} True if not restricted, false otherwise.
 */
export function isCopyExportAllowed({
  copyExportRestrictedArgs: e
}) {
  return !(e && isExportRestricted(e));
}

// Original code from $$b6 - Main permission check for various views
/**
 * Checks if the user can perform actions based on selected view and other conditions.
 * @param {Object} params - The parameters object.
 * @returns {boolean} True if allowed, false otherwise.
 */
export function canPerformAction(e) {
  if (isFullscreenDevHandoffView(e.selectedView)) {
    return canAccessFullDevMode(e) && isCopyExportAllowed({
      copyExportRestrictedArgs: e.openFile
    });
  }
  return !(isZoomIntegration() && !getFeatureFlags().integ_zoom_allow_extensions || isFullscreenSitesView(e.selectedView) && !getFeatureFlags().sites_plugin_api || isFullscreenCooper(e.selectedView) && !getFeatureFlags().buzz_plugins || isFigmakeFullscreenView(e.selectedView)) && (!getFeatureFlags().ext_require_appropriate_seat || !!isInteractionPathCheck() || !!e.openFile?.teamId || !!e.openFile?.parentOrgId) && !e.mirror.appModel.isReadOnly;
}

// Original code from $$T15 - Checks if extensions can run
/**
 * Determines if extensions can run based on user, file, and feature flags.
 * @param {Object} params - The parameters object.
 * @returns {boolean} True if extensions can run, false otherwise.
 */
export function canRunExtensions(e) {
  if (isInteractionPathCheck() || !getFeatureFlags().ext_require_appropriate_seat) {
    return true;
  }
  if (!e.user?.id) {
    return !!isValidWorkshopModeExpiration(e.openFile);
  }
  if (!e.openFile) {
    return false;
  }
  const {
    canRunExtensions,
    canAccessFullDevMode
  } = e.openFile;
  return isFullscreenDevHandoffView(e.selectedView) ? canAccessFullDevMode : canRunExtensions;
}

// Original code from $$I9 - Checks if export is restricted
/**
 * Checks if export is restricted for the given entity.
 * @param {Object} e - The entity to check.
 * @returns {boolean} True if export is restricted, false otherwise.
 */
export function isExportRestricted(e) {
  return !e.canExport;
}

// Original code from $$S1 - Maps user role to org user role
export const mapUserRoleToOrgUserRoleAlias = mapUserRoleToOrgUserRole;

// Original code from $$v19 - Gets localized string for user role
/**
 * Returns the localized string for a given user role.
 * @param {FUserRoleType} e - The user role.
 * @returns {string} The localized role name.
 */
export function getUserRoleLabel(e) {
  switch (e) {
    case FUserRoleType.GUEST:
      return getI18nString('general.guest');
    case FUserRoleType.MEMBER:
      return getI18nString('general.member');
    case FUserRoleType.ADMIN:
      return getI18nString('general.admin');
  }
}

// Original code from $$A0 - Gets feature type label
/**
 * Returns the label for a given feature type.
 * @param {any} e - The feature type.
 * @returns {string} The feature type label.
 */
export function getFeatureTypeLabelAlias(e) {
  return getFeatureTypeLabel(e);
}

// Original code from $$x13 - Checks if external restriction applies
/**
 * Checks if there is an external restriction for the org.
 * @param {Object} e - The entity.
 * @param {string} t - The org ID to compare.
 * @returns {boolean} True if restricted, false otherwise.
 */
export function isExternalRestricted(e, t) {
  return !!(e && e.external_restricted_org_id && e.external_restricted_org_id !== t);
}

// Original code from $$N17 - Checks if has external restricted org ID
/**
 * Checks if the entity has an external restricted org ID.
 * @param {Object} e - The entity.
 * @returns {boolean} True if has restricted org ID, false otherwise.
 */
export function hasExternalRestrictedOrgId(e) {
  return !!(e && e.external_restricted_org_id);
}

// Original code from $$C5 - Gets access level labels for org
/**
 * Returns localized access level labels for an org.
 * @param {string} e - The org name.
 * @returns {Object} Object with access level labels.
 */
export function getOrgAccessLevelLabels(e) {
  return {
    [FAccessLevelType.PUBLIC]: getI18nString('org_access_strings.anyone_at', {
      orgName: e
    }),
    [FAccessLevelType.PRIVATE]: getI18nString('org_access_strings.invite_only'),
    [FAccessLevelType.SECRET]: getI18nString('org_access_strings.hidden')
  };
}

// Original code from $$w14 - Gets access level labels
/**
 * Returns localized access level labels.
 * @returns {Object} Object with access level labels.
 */
export function getAccessLevelLabels() {
  return {
    [FAccessLevelType.PUBLIC]: getI18nString('org_access_strings.open'),
    [FAccessLevelType.PRIVATE]: getI18nString('org_access_strings.closed'),
    [FAccessLevelType.SECRET]: getI18nString('org_access_strings.secret')
  };
}

// Original code from $$O16 - Gets team visibility labels
/**
 * Returns localized team visibility labels.
 * @returns {Object} Object with visibility labels.
 */
export function getTeamVisibilityLabels() {
  return {
    [teamVisibilityEnum.ORG_BROWSABLE]: getI18nString('team_creation.visible'),
    [teamVisibilityEnum.HIDDEN]: getI18nString('team_creation.hidden')
  };
}

// Original code from $$R11 - Gets permission level name (capitalized)
/**
 * Returns the capitalized permission level name.
 * @param {AccessLevelEnum} e - The access level.
 * @returns {string} The capitalized level name.
 */
export function getPermissionLevelNameCapitalized(e) {
  switch (e) {
    case AccessLevelEnum.OWNER:
      return getI18nString('permissions.level_name_capitalized.owner');
    case AccessLevelEnum.ADMIN:
      return getI18nString('permissions.level_name_capitalized.admin');
    case AccessLevelEnum.EDITOR:
      return getI18nString('permissions.level_name_capitalized.can_edit');
    case AccessLevelEnum.VIEWER:
      return getI18nString('permissions.level_name_capitalized.can_view');
    case AccessLevelEnum.VIEW_PROTOTYPES:
      return getI18nString('permissions.level_name_capitalized.can_view_prototypes');
    default:
      return getI18nString('permissions.level_name_capitalized.none');
  }
}

// Original code from $$L2 - Gets permission level name
/**
 * Returns the permission level name, considering branch context.
 * @param {AccessLevelEnum} e - The access level.
 * @param {boolean} t - Whether it's a branch.
 * @returns {string} The level name.
 */
export function getPermissionLevelName(e, t?: any) {
  switch (e) {
    case AccessLevelEnum.OWNER:
      return t ? getI18nString('permissions.level_name.branch_owner') : getI18nString('permissions.level_name.owner');
    case AccessLevelEnum.ADMIN:
      return getI18nString('permissions.level_name.admin');
    case AccessLevelEnum.EDITOR:
      return getI18nString('permissions.level_name.can_edit');
    case AccessLevelEnum.VIEWER:
      return getI18nString('permissions.level_name.can_view');
    case AccessLevelEnum.VIEW_PROTOTYPES:
      return getI18nString('permissions.level_name.can_view_prototypes');
    default:
      return getI18nString('permissions.level_name.none');
  }
}

// Original code from $$P18 - Gets permission level role name
/**
 * Returns the role name for the permission level.
 * @param {AccessLevelEnum} e - The access level.
 * @returns {string} The role name.
 */
export function getPermissionLevelRoleName(e) {
  switch (e) {
    case AccessLevelEnum.OWNER:
      return getI18nString('permissions.level_role_name.owner');
    case AccessLevelEnum.ADMIN:
      return getI18nString('permissions.level_role_name.admin');
    case AccessLevelEnum.EDITOR:
      return getI18nString('permissions.level_role_name.editor');
    case AccessLevelEnum.VIEWER:
      return getI18nString('permissions.level_role_name.viewer');
    case AccessLevelEnum.VIEW_PROTOTYPES:
      return getI18nString('permissions.level_role_name.prototype_viewer');
    default:
      return '';
  }
}

// Original code from $$D4 - Complex permission logic for viewers
/**
 * Determines additional permissions or messages for viewer-level access.
 * @param {Object} params - The parameters object.
 * @returns {string|null} A message or null.
 */
export function getViewerPermissionMessage({
  role: e,
  file: t,
  folder: r = null,
  isInDraftsFolder: n = false
}) {
  if (e.level !== AccessLevelEnum.VIEWER && e.level !== AccessLevelEnum.VIEW_PROTOTYPES) {
    return null;
  }
  const i = getEntityType(t);
  switch (e.level) {
    case AccessLevelEnum.VIEWER:
      {
        if (t.link_access === FPermissionLevelType.EDIT) {
          return getI18nString('permissions.can_still_edit_anybody_with_the_link', {
            noun: i
          });
        }
        if (t.link_access === FPermissionLevelType.ORG_EDIT && e.org_user && e.org_user.permission !== FUserRoleType.GUEST) {
          return getI18nString('permissions.can_still_edit_org_member_with_link', {
            noun: i
          });
        }
        if (e.pending) {
          break;
        }
        const s = !!r && !r.is_invite_only && !r.is_view_only;
        return getCombinedPermissionMessage(!!e.teamLevel && !n && e.teamLevel > AccessLevelEnum.VIEWER && (!r || s), !!e.folderLevel && e.folderLevel > AccessLevelEnum.VIEWER, !!e.repoLevel && e.repoLevel > AccessLevelEnum.VIEWER);
      }
    case AccessLevelEnum.VIEW_PROTOTYPES:
      {
        if (t.link_access === FPermissionLevelType.EDIT) {
          return getI18nString('permissions.can_still_see_and_edit_anybody_with_the_link_noun', {
            noun: i
          });
        }
        if (t.link_access === FPermissionLevelType.ORG_EDIT && e.org_user && e.org_user.permission !== FUserRoleType.GUEST) {
          return getI18nString('permissions.can_still_see_and_edit_allow_editing_by_org_members_with_link', {
            noun: i
          });
        }
        if (e.pending) {
          break;
        }
        const n = r && !r.is_invite_only && !r.is_view_only;
        if (e.teamLevel && e.teamLevel > AccessLevelEnum.VIEWER && (!r || n)) {
          return getI18nString('permissions.can_still_see_and_edit_permission_team_file_is_in', {
            noun: i
          });
        }
        if (e.folderLevel && e.folderLevel > AccessLevelEnum.VIEWER) {
          return getI18nString('permissions.can_still_see_and_edit_permission_team_project_is_in', {
            noun: i
          });
        }
        if (e.repoLevel && e.repoLevel > AccessLevelEnum.VIEWER) {
          return getI18nString('permissions.can_still_see_and_edit_permission_main_file', {
            noun: i
          });
        }
        if (t.link_access === FPermissionLevelType.VIEW) {
          return getI18nString('permissions.can_still_edit_allow_view_anybody_with_link', {
            noun: i
          });
        }
        if (t.link_access === FPermissionLevelType.ORG_VIEW && e.org_user && e.org_user.permission !== FUserRoleType.GUEST) {
          return getI18nString('permissions.can_still_edit_allow_edit_anybody_with_link', {
            noun: i
          });
        }
        if (e.teamLevel && e.teamLevel >= AccessLevelEnum.VIEWER && (!r || n)) {
          return getI18nString('permissions.can_still_see_permission_team_file_is_on', {
            noun: i
          });
        }
        if (e.folderLevel && e.folderLevel >= AccessLevelEnum.VIEWER) {
          return getI18nString('permissions.can_still_see_permission_project_file_is_on', {
            noun: i
          });
        }
        if (e.repoLevel && e.repoLevel >= AccessLevelEnum.VIEWER) {
          return getI18nString('permissions.can_still_see_edit_permission_on_main_file', {
            noun: i
          });
        }
      }
  }
  return null;
}

// Original code from $$k3 - Permission message for seen state
/**
 * Gets permission message based on file and seen state.
 * @param {Object} params - The parameters object.
 * @returns {string|null} A message or null.
 */
export function getPermissionMessageForSeenState({
  file: e,
  seenState: t,
  folder: r = null,
  isInDraftsFolder: n
}) {
  const i = getEntityType(e);
  if (e.link_access === FPermissionLevelType.EDIT) {
    return getI18nString('permissions.can_still_edit_anybody_with_the_link', {
      noun: i
    });
  }
  const s = !!r && !r.is_invite_only && !r.is_view_only;
  return getCombinedPermissionMessage(!!t.teamLevel && !n && t.teamLevel > AccessLevelEnum.VIEWER && (!r || s), !!t.folderLevel && t.folderLevel > AccessLevelEnum.VIEWER, !!t.repoLevel && t.repoLevel > AccessLevelEnum.VIEWER);
}

// Original helper function M - Combines permission messages
/**
 * Combines permission messages based on conditions.
 * @param {boolean} e - Team condition.
 * @param {boolean} t - Folder condition.
 * @param {boolean} r - Repo condition.
 * @returns {string|null} The combined message or null.
 */
function getCombinedPermissionMessage(e, t, r) {
  return e ? getI18nString('permissions.can_still_edit_team_permissions') : t ? getI18nString('permissions.can_still_edit_folder_permissions') : r ? getI18nString('permissions.can_still_edit_edit_permissions') : null;
}

// Original code from $$F8 - Checks if can perform action based on level
/**
 * Checks if the user can perform an action based on their level.
 * @param {Object} e - The role object.
 * @param {boolean} t - Admin condition.
 * @param {boolean} r - Other condition.
 * @returns {boolean} True if can perform, false otherwise.
 */
export function canPerformActionBasedOnLevel(e, t, r) {
  return e.level !== AccessLevelEnum.OWNER && (e.level === AccessLevelEnum.ADMIN ? t : r);
}

// Original code from $$j12 - Checks if can edit based on plan
/**
 * Checks if the user can edit based on their plan.
 * @param {Object} e - The user or entity with plan info.
 * @returns {boolean} True if can edit, false otherwise.
 */
export function canEditBasedOnPlan(e) {
  return !!e && !!e.canEdit && !!e.plan && ![FPlanNameType.STARTER].includes(e.plan.tier);
}

// Updated exports to match refactored function names
export const $K = getFeatureTypeLabelAlias;
export const Ay = mapUserRoleToOrgUserRoleAlias;
export const C1 = getPermissionLevelName;
export const D8 = getPermissionMessageForSeenState;
export const DN = getViewerPermissionMessage;
export const Db = getOrgAccessLevelLabels;
export const Eh = canPerformAction;
export const F1 = checkZoomWidgetAccess;
export const OL = canPerformActionBasedOnLevel;
export const Pe = isExportRestricted;
export const Pq = isCopyExportAllowed;
export const QN = getPermissionLevelNameCapitalized;
export const Qn = canEditBasedOnPlan;
export const R$ = isExternalRestricted;
export const ZP = getAccessLevelLabels;
export const cb = canRunExtensions;
export const e$ = getTeamVisibilityLabels;
export const nx = hasExternalRestrictedOrgId;
export const q9 = getPermissionLevelRoleName;
export const z5 = getUserRoleLabel;
