import { l as _$$l } from "../905/716947";
import { tT } from "../905/663269";
import { VI } from "../figma_app/687776";
import { FPlanFeatureType, FPlanAccessType, FPlanRestrictionType } from "../figma_app/191312";
export function $$o0(e, t) {
  let i = {
    key: e.key,
    isAbandonedDraftFile: !1,
    teamId: e.team_id,
    folderId: e.folder_id,
    clientMeta: e.client_meta,
    parentOrgId: e.parent_org_id || null,
    fileRepoId: e.file_repo_id,
    sourceFileKey: e.source_file_key,
    linkAccess: e.link_access,
    hasFileLinkPassword: e.has_file_link_password,
    hasProtoLinkPassword: e.has_proto_link_password,
    updatedAt: new Date(e.updated_at || e.created_at),
    trashedAt: e.trashed_at ? new Date(e.trashed_at) : null,
    deletedAt: e.deleted_at ? new Date(e.deleted_at) : null,
    creatorId: e.creator_id,
    createdAt: new Date(e.created_at),
    name: e.name,
    _name: e.name,
    editorType: e.editor_type || "design",
    orgBrowsable: e.org_browsable || null,
    thumbnailGuid: e.thumbnail_guid || null,
    sourceCheckpointId: e.source_checkpoint_id || null,
    license: e.license,
    isTeamTemplate: !!e.is_team_template,
    isPublishedSite: !!e.is_published_site,
    isFavorited: !!e?.is_favorited,
    isTryFile: e.is_try_file,
    votingSessions: null,
    template: null,
    canPublishTemplate: !1,
    viewerExportRestricted: !!e.viewer_export_restricted,
    publishedHubFile: null,
    ownerRole: null,
    trackTags: {
      isTemplate: e.is_template || null,
      isDuplicatedFromDevModeDemoFile: e.track_tags?.is_duplicated_from_dev_mode_demo_file || null,
      isDuplicatedFromSupabaseConnectedFile: e.track_tags?.is_duplicated_from_supabase_connected_file || null
    },
    libraryKey: e.library_key ?? "",
    plan: null,
    planPublicInfo: null,
    sharedContainerSetting: {
      status: tT.Loaded,
      data: null
    }
  };
  if (!t) return i;
  let {
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
    teamUser
  } = t;
  return {
    ...i,
    team: function (e, t = !1) {
      return e ? {
        id: e.id,
        name: e.name,
        orgId: e.org_id,
        subscription: e.subscription,
        imgUrl: e.img_url || null,
        restrictionsList: e.restrictions_list || [],
        studentTeamAt: e.student_team_at ? new Date(e.student_team_at) : e.student_team ? new Date() : null,
        trialPeriodEnd: null,
        gracePeriodEnd: e.grace_period_end ? new Date(e.grace_period_end) : null,
        deletedAt: e.deleted_at ? new Date(e.deleted_at) : null,
        createdAt: new Date(e.created_at),
        eduGracePeriod: {
          id: "",
          isValid: t
        },
        licenseGroupId: e.license_group_id,
        licenseGroup: e.license_group,
        workspaceId: e.workspace_id,
        orgAccess: e.org_access,
        studentTeamState: e.student_team_state,
        canEdit: !1,
        canView: !1
      } : null;
    }(team, hasEduGracePeriod),
    project: folder ? function (e, t = {}, i = !0, n = !0) {
      return {
        id: e.id,
        name: e.name,
        orgId: e.org_id || null,
        teamId: e.team_id,
        path: e.path,
        inviteOnlyAt: e.is_invite_only ? new Date() : null,
        viewOnlyAt: e.is_view_only ? new Date() : null,
        trashedAt: e.trashed_at ? new Date(e.trashed_at) : null,
        subscription: e.is_subscribed ? {} : null,
        activeProjectResourceConnections: [],
        description: e.description,
        canEdit: i,
        canRename: n,
        team: null,
        isEditingLockedForUser: !1,
        ...VI(e),
        ...t
      };
    }(folder) : null,
    repo: repo ? {
      id: repo.id,
      name: repo.name,
      folderId: repo.folder_id,
      teamId: repo.team_id,
      defaultFileKey: repo.default_file_key,
      canEdit: !0
    } : null,
    sourceFile: sourceFile ? {
      key: sourceFile.key,
      name: sourceFile.name,
      libraryKey: _$$l(sourceFile.library_key ?? ""),
      fileRepoId: sourceFile.file_repo_id,
      canManage: sourceFile.can_manage,
      canView: sourceFile.can_view
    } : null,
    canDelete: can_delete,
    canEdit: can_edit,
    canEditCanvas: can_edit_canvas,
    canAccessDevModeEntryPoint: can_access_dev_mode_entry_point,
    canAccessFullDevMode: can_access_full_dev_mode,
    canManage: can_manage,
    canView: can_view,
    canExport: can_export,
    org: org ? {
      figjamDisabledAt: org.figjam_disabled_at,
      inviteWhitelist: {
        guestInviteSetting: org.invite_whitelist_guest_invite_setting
      },
      name: org.name,
      isSlidesDisabled: !!org.is_slides_disabled,
      sitesPublishingDisabled: !1,
      supabaseDisabled: !1,
      isSitesDisabled: !1,
      isCooperDisabled: !1
    } : null,
    currentPartialOrgUser: orgUser ? {
      draftsFolderId: orgUser.drafts_folder_id,
      designPaidStatus: orgUser.design_paid_status,
      whiteboardPaidStatus: orgUser.whiteboard_paid_status,
      accountType: orgUser.design_paid_status,
      designAccountTypeRequest: null,
      whiteboardAccountTypeRequest: null,
      devModeAccountTypeRequest: null
    } : null,
    currentTeamUser: teamUser ? {
      whiteboardPaidStatus: teamUser.whiteboard_paid_status,
      designPaidStatus: teamUser.design_paid_status,
      designAccountTypeRequest: null,
      whiteboardAccountTypeRequest: null
    } : null,
    currentPlanUser: orgUser ? {
      draftsFolderId: orgUser.drafts_folder_id,
      designPaidStatus: l[orgUser.design_paid_status],
      whiteboardPaidStatus: l[orgUser.whiteboard_paid_status],
      seatTypeLicenseTypes: [],
      designAccountTypeRequest: null,
      whiteboardAccountTypeRequest: null,
      devModeAccountTypeRequest: null
    } : teamUser ? {
      draftsFolderId: teamUser.drafts_folder_id ?? null,
      designPaidStatus: d[teamUser.design_paid_status],
      whiteboardPaidStatus: d[teamUser.whiteboard_paid_status],
      seatTypeLicenseTypes: [],
      designAccountTypeRequest: null,
      whiteboardAccountTypeRequest: null,
      devModeAccountTypeRequest: null
    } : null
  };
}
let l = {
  [FPlanFeatureType.STARTER]: FPlanAccessType.STARTER,
  [FPlanFeatureType.RESTRICTED]: FPlanAccessType.RESTRICTED,
  [FPlanFeatureType.FULL]: FPlanAccessType.FULL
};
let d = {
  [FPlanRestrictionType.STARTER]: FPlanAccessType.STARTER,
  [FPlanRestrictionType.RESTRICTED]: FPlanAccessType.RESTRICTED,
  [FPlanRestrictionType.FULL]: FPlanAccessType.FULL
};
export function $$c1(e) {
  return e ? {
    id: e.id,
    name: e.name,
    org_id: e.orgId,
    img_url: e.imgUrl ?? void 0,
    subscription: e.subscription,
    restrictions_list: e.restrictionsList,
    student_team_at: e.studentTeamAt ? e.studentTeamAt.toString() : null,
    grace_period_end: e.gracePeriodEnd ? e.gracePeriodEnd.toString() : null,
    deleted_at: e.deletedAt ? e.deletedAt.toString() : null,
    created_at: e.createdAt.toString(),
    student_team: !!e.studentTeamAt
  } : null;
}
export const UE = $$o0;
export const Ws = $$c1;