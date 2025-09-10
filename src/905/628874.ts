import { ResourceStatus } from '../905/663269'
import { FPlanAccessType, FPlanFeatureType, FPlanRestrictionType } from '../figma_app/191312'
import { getFileCreationPermissions } from '../figma_app/687776'

/**
 * Types for file, team, folder, repo, org, and user structures.
 */

/**
 * Maps FPlanFeatureType to FPlanAccessType.
 * @original l
 */
const featureTypeToAccessType: Record<FPlanFeatureType, FPlanAccessType> = {
  [FPlanFeatureType.STARTER]: FPlanAccessType.STARTER,
  [FPlanFeatureType.RESTRICTED]: FPlanAccessType.RESTRICTED,
  [FPlanFeatureType.FULL]: FPlanAccessType.FULL,
}

/**
 * Maps FPlanRestrictionType to FPlanAccessType.
 * @original d
 */
const restrictionTypeToAccessType: Record<FPlanRestrictionType, FPlanAccessType> = {
  [FPlanRestrictionType.STARTER]: FPlanAccessType.STARTER,
  [FPlanRestrictionType.RESTRICTED]: FPlanAccessType.RESTRICTED,
  [FPlanRestrictionType.FULL]: FPlanAccessType.FULL,
}

/**
 * Converts raw file and related entities into a normalized file object.
 * @param file Raw file object
 * @param context Related entities and permissions
 * @returns Normalized file object
 * @original $$o0
 */
export function setupFileObject(
  file: any,
  context?: {
    team?: any
    folder?: any
    repo?: any
    sourceFile?: any
    can_delete?: boolean
    can_edit?: boolean
    can_edit_canvas?: boolean
    can_access_dev_mode_entry_point?: boolean
    can_access_full_dev_mode?: boolean
    can_manage?: boolean
    can_view?: boolean
    can_export?: boolean
    hasEduGracePeriod?: boolean
    org?: any
    orgUser?: any
    teamUser?: any
  },
) {
  const base = {
    key: file.key,
    isAbandonedDraftFile: false,
    teamId: file.team_id,
    folderId: file.folder_id,
    clientMeta: file.client_meta,
    parentOrgId: file.parent_org_id || null,
    fileRepoId: file.file_repo_id,
    sourceFileKey: file.source_file_key,
    linkAccess: file.link_access,
    hasFileLinkPassword: file.has_file_link_password,
    hasProtoLinkPassword: file.has_proto_link_password,
    updatedAt: new Date(file.updated_at || file.created_at),
    trashedAt: file.trashed_at ? new Date(file.trashed_at) : null,
    deletedAt: file.deleted_at ? new Date(file.deleted_at) : null,
    creatorId: file.creator_id,
    createdAt: new Date(file.created_at),
    name: file.name,
    _name: file.name,
    editorType: file.editor_type || 'design',
    orgBrowsable: file.org_browsable || null,
    thumbnailGuid: file.thumbnail_guid || null,
    sourceCheckpointId: file.source_checkpoint_id || null,
    license: file.license,
    isTeamTemplate: !!file.is_team_template,
    isPublishedSite: !!file.is_published_site,
    isFavorited: !!file?.is_favorited,
    isTryFile: file.is_try_file,
    votingSessions: null,
    template: null,
    canPublishTemplate: false,
    viewerExportRestricted: !!file.viewer_export_restricted,
    publishedHubFile: null,
    ownerRole: null,
    trackTags: {
      isTemplate: file.is_template || null,
      isDuplicatedFromDevModeDemoFile: file.track_tags?.is_duplicated_from_dev_mode_demo_file || null,
      isDuplicatedFromSupabaseConnectedFile: file.track_tags?.is_duplicated_from_supabase_connected_file || null,
    },
    libraryKey: file.library_key ?? '',
    plan: null,
    planPublicInfo: null,
    sharedContainerSetting: {
      status: ResourceStatus.Loaded,
      data: null,
    },
  }

  if (!context)
    return base

  const {
    team,
    folder,
    repo,
    sourceFile,
    can_delete,
    can_edit,
    can_edit_canvas,
    can_access_dev_mode_entry_point,
    can_access_full_dev_mode,
    can_manage,
    can_view,
    can_export,
    hasEduGracePeriod,
    org,
    orgUser,
    teamUser,
  } = context

  /**
   * Normalizes team object.
   * @original inline team mapping in $$o0
   */
  function normalizeTeam(teamObj: any, eduGrace: boolean = false) {
    if (!teamObj)
      return null
    return {
      id: teamObj.id,
      name: teamObj.name,
      orgId: teamObj.org_id,
      subscription: teamObj.subscription,
      imgUrl: teamObj.img_url || null,
      restrictionsList: teamObj.restrictions_list || [],
      studentTeamAt: teamObj.student_team_at
        ? new Date(teamObj.student_team_at)
        : teamObj.student_team
          ? new Date()
          : null,
      trialPeriodEnd: null,
      gracePeriodEnd: teamObj.grace_period_end ? new Date(teamObj.grace_period_end) : null,
      deletedAt: teamObj.deleted_at ? new Date(teamObj.deleted_at) : null,
      createdAt: new Date(teamObj.created_at),
      eduGracePeriod: {
        id: '',
        isValid: eduGrace,
      },
      licenseGroupId: teamObj.license_group_id,
      licenseGroup: teamObj.license_group,
      workspaceId: teamObj.workspace_id,
      orgAccess: teamObj.org_access,
      studentTeamState: teamObj.student_team_state,
      canEdit: false,
      canView: false,
    }
  }

  /**
   * Normalizes folder/project object.
   * @original inline folder mapping in $$o0
   */
  function normalizeProject(
    folderObj: any,
    extra: object = {},
    canEdit: boolean = true,
    canRename: boolean = true,
  ) {
    return {
      id: folderObj.id,
      name: folderObj.name,
      orgId: folderObj.org_id || null,
      teamId: folderObj.team_id,
      path: folderObj.path,
      inviteOnlyAt: folderObj.is_invite_only ? new Date() : null,
      viewOnlyAt: folderObj.is_view_only ? new Date() : null,
      trashedAt: folderObj.trashed_at ? new Date(folderObj.trashed_at) : null,
      subscription: folderObj.is_subscribed ? {} : null,
      activeProjectResourceConnections: [],
      description: folderObj.description,
      canEdit,
      canRename,
      team: null,
      isEditingLockedForUser: false,
      ...getFileCreationPermissions(folderObj),
      ...extra,
    }
  }

  /**
   * Normalizes repo object.
   * @original inline repo mapping in $$o0
   */
  function normalizeRepo(repoObj: any) {
    return {
      id: repoObj.id,
      name: repoObj.name,
      folderId: repoObj.folder_id,
      teamId: repoObj.team_id,
      defaultFileKey: repoObj.default_file_key,
      canEdit: true,
    }
  }

  /**
   * Normalizes source file object.
   * @original inline sourceFile mapping in $$o0
   */
  function normalizeSourceFile(sourceObj: any) {
    return {
      key: sourceObj.key,
      name: sourceObj.name,
      libraryKey: sourceObj.library_key ?? '',
      fileRepoId: sourceObj.file_repo_id,
      canManage: sourceObj.can_manage,
      canView: sourceObj.can_view,
    }
  }

  /**
   * Normalizes org object.
   * @original inline org mapping in $$o0
   */
  function normalizeOrg(orgObj: any) {
    return {
      figjamDisabledAt: orgObj.figjam_disabled_at,
      inviteWhitelist: {
        guestInviteSetting: orgObj.invite_whitelist_guest_invite_setting,
      },
      name: orgObj.name,
      isSlidesDisabled: !!orgObj.is_slides_disabled,
      sitesPublishingDisabled: false,
      supabaseDisabled: false,
      isSitesDisabled: false,
      isCooperDisabled: false,
    }
  }

  /**
   * Normalizes org user object.
   * @original inline orgUser mapping in $$o0
   */
  function normalizeOrgUser(userObj: any) {
    return {
      draftsFolderId: userObj.drafts_folder_id,
      designPaidStatus: userObj.design_paid_status,
      whiteboardPaidStatus: userObj.whiteboard_paid_status,
      accountType: userObj.design_paid_status,
      designAccountTypeRequest: null,
      whiteboardAccountTypeRequest: null,
      devModeAccountTypeRequest: null,
    }
  }

  /**
   * Normalizes team user object.
   * @original inline teamUser mapping in $$o0
   */
  function normalizeTeamUser(userObj: any) {
    return {
      whiteboardPaidStatus: userObj.whiteboard_paid_status,
      designPaidStatus: userObj.design_paid_status,
      designAccountTypeRequest: null,
      whiteboardAccountTypeRequest: null,
    }
  }

  /**
   * Normalizes current plan user object.
   * @original inline currentPlanUser mapping in $$o0
   */
  function normalizeCurrentPlanUser(orgUserObj: any, teamUserObj: any) {
    if (orgUserObj) {
      return {
        draftsFolderId: orgUserObj.drafts_folder_id,
        designPaidStatus: featureTypeToAccessType[orgUserObj.design_paid_status],
        whiteboardPaidStatus: featureTypeToAccessType[orgUserObj.whiteboard_paid_status],
        seatTypeLicenseTypes: [],
        designAccountTypeRequest: null,
        whiteboardAccountTypeRequest: null,
        devModeAccountTypeRequest: null,
      }
    }
    if (teamUserObj) {
      return {
        draftsFolderId: teamUserObj.drafts_folder_id ?? null,
        designPaidStatus: restrictionTypeToAccessType[teamUserObj.design_paid_status],
        whiteboardPaidStatus: restrictionTypeToAccessType[teamUserObj.whiteboard_paid_status],
        seatTypeLicenseTypes: [],
        designAccountTypeRequest: null,
        whiteboardAccountTypeRequest: null,
        devModeAccountTypeRequest: null,
      }
    }
    return null
  }

  return {
    ...base,
    team: normalizeTeam(team, hasEduGracePeriod),
    project: folder ? normalizeProject(folder) : null,
    repo: repo ? normalizeRepo(repo) : null,
    sourceFile: sourceFile ? normalizeSourceFile(sourceFile) : null,
    canDelete: can_delete,
    canEdit: can_edit,
    canEditCanvas: can_edit_canvas,
    canAccessDevModeEntryPoint: can_access_dev_mode_entry_point,
    canAccessFullDevMode: can_access_full_dev_mode,
    canManage: can_manage,
    canView: can_view,
    canExport: can_export,
    org: org ? normalizeOrg(org) : null,
    currentPartialOrgUser: orgUser ? normalizeOrgUser(orgUser) : null,
    currentTeamUser: teamUser ? normalizeTeamUser(teamUser) : null,
    currentPlanUser: normalizeCurrentPlanUser(orgUser, teamUser),
  }
}

/**
 * Converts normalized team object to raw team object for API or storage.
 * @param team Normalized team object
 * @returns Raw team object
 * @original $$c1
 */
export function convertTeamToRaw(team: any) {
  return team
    ? {
      id: team.id,
      name: team.name,
      org_id: team.orgId,
      img_url: team.imgUrl ?? undefined,
      subscription: team.subscription,
      restrictions_list: team.restrictionsList,
      student_team_at: team.studentTeamAt ? team.studentTeamAt.toString() : null,
      grace_period_end: team.gracePeriodEnd ? team.gracePeriodEnd.toString() : null,
      deleted_at: team.deletedAt ? team.deletedAt.toString() : null,
      created_at: team.createdAt.toString(),
      student_team: !!team.studentTeamAt,
    }
    : null
}

// Export refactored names
export const UE = setupFileObject
export const Ws = convertTeamToRaw
