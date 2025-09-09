import { throwTypeError } from "../figma_app/465776";
import { getResourceDataOrFallback } from "../905/663269";
import a from "../vendor/961736";
import { A } from "../905/920142";
import { encodeUri } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { Zx } from "../figma_app/217457";
import { fileEntityDataMapper } from "../905/943101";
import { FTeamAccessPermissionType, FPlanFeatureType, FPermissionLevelType } from "../figma_app/191312";
import { Um, Nl, aU, WP, Xs, vy, uk } from "../figma_app/349248";
import { mapFileTypeToEditorType } from "../figma_app/53721";
import { v } from "../figma_app/995722";
import { zb } from "../905/862913";
import { VA } from "../figma_app/528509";
var s = a;
var $$E6 = (e => (e.fileBrowserContextMenu = "file_browser_context_menu", e.fileBrowserFavoritedContextMenu = "file_browser_favorited_context_menu", e.fileBrowserTileActionMenu = "file_browser_tile_action_menu", e.prototypeHeader = "prototype_header", e.fullscreenToolbar = "fullscreen_toolbar", e.expFigJamOnboardingShareVariant = "exp_figjam_onboarding_share_variant", e.fullscreenCopyLinkButtonVisualBell = "fullscreen_copy_link_button_visual_bell", e.prototypeCopyLinkButtonVisualBell = "prototype_copy_link_button_visual_bell", e.customTemplatePublishNudge = "custom_template_publish_nudge", e.editRequestTooltip = "edit_request_tooltip", e.editRequestExternal = "edit_request_external", e.shareToGoogleClassroomOnboarding = "share_to_google_classroom_onboarding", e.googleClassroomIntegration = "google_classroom_integration", e))($$E6 || {});
export function $$y4(e) {
  return {
    ...e,
    canEdit: !1,
    canEditCanvas: !1,
    hasEditRole: !1,
    hasViewRole: !1,
    canView: !1,
    canViewPrototype: !1,
    canViewPrototypeLinks: !1,
    canMove: !1,
    isOwner: !1,
    mainFileLinkExpirationConfig: null,
    passwordSetAt: null,
    passwordSetByUser: null,
    isPublishedHubFile: !1,
    folderAccessEnabled: !0,
    isDraftFileLG: !1,
    isAbandonedDraftFile: !1,
    mustUpgradeToShareDraft: !1
  };
}
function b(e) {
  return {
    file: $$y4(e),
    repo: null,
    rolesByUserId: {},
    fileRoleRequests: [],
    folder: null,
    folderRoles: [],
    isInDraftsFolder: !1,
    orgDraftsOwner: null,
    org: null,
    orgUser: null,
    currentOrg: null,
    team: null,
    workspace: null,
    orgs: {},
    dataLoaded: !1,
    fileSeenStatesByUserId: {},
    currentUser: null,
    sharedContainerSetting: null,
    editorType: mapFileTypeToEditorType(e.editor_type),
    numProjectTeamMembersWithAccess: 0,
    planTier: null,
    planRecordId: null
  };
}
function T(e) {
  return e.fileLinkExpirationConfig || e.sourceFileLinkExpirationConfig;
}
function I(e) {
  return e.repo?.defaultFileKey === e.key;
}
export function $$S3(e) {
  let t = T(e);
  let r = I(e);
  let n = e.pwdConfig?.updatedAt || null;
  let a = e.pwdConfig?.setByUser ? Um(e.pwdConfig.setByUser) : null;
  let s = {
    ...fileEntityDataMapper.toSinatra(e),
    client_meta: e.clientMeta || "",
    created_at: e.createdAt?.toString() || "",
    creator_id: e.creator.id,
    description: e.description || "",
    is_template: !!e.trackTags?.isTemplate,
    last_published_at: e.lastPublishedAt,
    library_publish_scope_type: e.libraryKeyToFile?.libraryPublishScope?.publishScopeType,
    org_audience: !!e.orgAudience,
    starter_library_src_file_key: e.trackTags?.starterLibrarySrcFileKey,
    touched_at: "",
    trashed_at: e.trashedAt ? e.trashedAt.toString() : null,
    trashed_user_id: e.trashedUser ? e.trashedUser.id : null,
    updated_at: e.updatedAt.toString(),
    checkpoint_token: "",
    edit_url: "",
    prototype_url: `${window.location.origin}/proto/${e.key}/${encodeUri(e.name || "")}`,
    track_tags: "",
    url: `${window.location.origin}/file/${e.key}/${encodeUri(e.name || "")}`
  };
  return {
    canEdit: e.canEdit,
    canEditCanvas: e.canEditCanvas,
    hasEditRole: e.hasEditRole,
    hasViewRole: e.hasViewRole,
    canView: e.canView,
    canViewPrototype: e.canViewPrototype,
    canViewPrototypeLinks: e.hasViewPrototypeRole,
    canMove: e.canMove,
    passwordSetAt: n,
    passwordSetByUser: a,
    isOwner: r ? !!e.repo?.roleOnObjectForUser?.isOwnerOfResource : !!e.roleOnObjectForUser?.isOwnerOfResource,
    isPublishedHubFile: !!e.publishedHubFile && !e.publishedHubFile.unpublishedAt,
    mainFileLinkExpirationConfig: Nl(t),
    folderAccessEnabled: e.folderAccessEnabled && getResourceDataOrFallback(e.folderAccessEnabled) || !1,
    isDraftFileLG: e.isDraftFile && getResourceDataOrFallback(e.isDraftFile) || !1,
    isAbandonedDraftFile: e.isAbandonedDraftFile || !1,
    mustUpgradeToShareDraft: getResourceDataOrFallback(e.mustUpgradeToShareDraft) || !1,
    ...s
  };
}
export function $$v5(e, t) {
  if ("loaded" !== e.status) return b(t);
  let r = e.data.file;
  if (!r) return b(t);
  let n = T(r);
  let a = I(r);
  let s = "loaded" === e.status && e.data.file ? $$S3(e.data.file) : $$y4(t);
  let o = {};
  r.repo && r.repo.roles.forEach(e => {
    e.userId && (o[e.userId] = e);
  });
  let l = r.project;
  let d = null;
  l && (d = l.teamAccess);
  let c = new Set();
  let u = {};
  r.project && r.project.roles.forEach(e => {
    e.userId && (u[e.userId] = e, c.add(e.userId));
  });
  let m = {};
  r.team && r.team.roles.forEach(e => {
    e.userId && (m[e.userId] = e, d && d !== FTeamAccessPermissionType.TEAM_ACCESS_DISABLED && c.add(e.userId));
  });
  let E = {};
  (a ? r.repo.roles : r.roles).forEach(e => {
    let t = e.user ? Um(e.user) : null;
    if (t) {
      let r = e.user?.orgUser || e.user?.guestOrgUser;
      let n = o[t.id];
      let i = m[t.id];
      let a = u[t.id];
      let s = e.user?.teamUser ? {
        ...e.user.teamUser,
        designPaidStatus: e.user.teamUser.designPaidStatus,
        whiteboardPaidStatus: e.user.teamUser.whiteboardPaidStatus
      } : null;
      let l = aU(e, t, r || null, s || null);
      E[t.id] = l.pending ? {
        ...l,
        invite: w(e.invite)
      } : {
        ...l,
        folderLevel: a?.level || null,
        teamLevel: i?.level || null,
        repoLevel: n?.level || null
      };
    } else if (e.pending) {
      let t = aU(e, null, null, null);
      E[`pending-${e.id}`] = {
        ...t,
        invite: w(e.invite)
      };
    }
  });
  let v = {};
  zb(t) && r.fileSeenStates.forEach(e => {
    let t = e.user ? Um(e.user) : null;
    if (t) {
      let r = o[t.id];
      let n = m[t.id];
      let i = u[t.id];
      let a = WP(e, t);
      v[a.user_id] = {
        ...a,
        folderLevel: i?.level || null,
        teamLevel: n?.level || null,
        repoLevel: r?.level || null
      };
    }
  });
  let A = {};
  e.data.currentUser?.allBaseOrgUsers && e.data.currentUser.allBaseOrgUsers.forEach(e => {
    e.org && (A[e.org.id] = {});
  });
  let N = r.repo ? {
    ...Xs(r.repo),
    canEdit: r.repo.canEdit,
    mainFileLinkExpirationConfig: Nl(n)
  } : null;
  if (x(n)) {
    let e = {
      link_access: n.prevPrivateLinkAccess,
      proto_link_access: n.prevPrivateProtoLinkAccess,
      org_browsable: n.prevOrgBrowsable
    };
    s = {
      ...s,
      ...e
    };
    N && (N = {
      ...N,
      ...e
    });
  }
  let C = r.project?.orgDraftsFolderOwnerBaseOrgUser ? {
    id: r.project.orgDraftsFolderOwnerBaseOrgUser.id,
    design_paid_status: r.project.orgDraftsFolderOwnerBaseOrgUser.accountType,
    whiteboard_paid_status: r.project.orgDraftsFolderOwnerBaseOrgUser.whiteboardPaidStatus || FPlanFeatureType.STARTER,
    user_id: r.project.orgDraftsFolderOwnerBaseOrgUser.userId,
    user: Um(r.project.orgDraftsFolderOwnerBaseOrgUser.user)
  } : null;
  var O = void 0;
  r.org && null !== r.org.imgUrl && (O = r.org.imgUrl);
  let R = r.org && r.org.k12GoogleOrg && getResourceDataOrFallback(r.org.k12GoogleOrg);
  return {
    file: s,
    repo: N,
    rolesByUserId: E,
    fileSeenStatesByUserId: v,
    fileRoleRequests: r.fileRoleRequests,
    folder: l && {
      name: l.path,
      is_view_only: !!l.viewOnlyAt,
      is_invite_only: !!l.inviteOnlyAt,
      team_id: l.teamId,
      team_access: d,
      canRead: l.canRead && getResourceDataOrFallback(l.canRead) || !1
    },
    folderRoles: l && l.roles || [],
    isInDraftsFolder: VA(l),
    orgDraftsOwner: C,
    org: r.org ? {
      id: r.org.id,
      name: r.org.name,
      img_url: O,
      domain_capture: !!r.org.domainCapture,
      workshop_enabled: !r.org.workshopDisabledAt,
      invite_whitelist_guest_invite_setting: r.org.inviteWhitelist?.guestInviteSetting,
      figjam_disabled_at: r.org.figjamDisabledAt,
      org_domains: vy(r.org.orgDomains),
      bigma_enabled: !!r.org.bigmaEnabledAt,
      k12_google_org: !!R
    } : null,
    orgUser: r.org?.currentBaseOrgUser ? {
      id: r.org.currentBaseOrgUser.id,
      org_id: r.org.id,
      user_id: e.data.currentUser?.id,
      permission: r.org.currentBaseOrgUser.permission,
      license_group_member: r.org.currentBaseOrgUser.licenseGroupMember ? {
        license_group_id: r.org.currentBaseOrgUser.licenseGroupMember.licenseGroupId
      } : void 0,
      design_paid_status: r.org.currentBaseOrgUser.designPaidStatus,
      whiteboard_paid_status: r.org.currentBaseOrgUser.whiteboardPaidStatus
    } : null,
    currentOrg: e.data.org ? {
      domain_capture: !!e.data.org.domainCapture,
      id: e.data.org.id,
      invite_whitelist_guest_invite_setting: e.data.org.inviteWhitelist?.guestInviteSetting || null,
      figjam_disabled_at: e.data.org.figjamDisabledAt
    } : null,
    team: r.team ? {
      id: r.team.id,
      name: r.team.name,
      img_url: r.team.imgUrl ?? void 0,
      subscription: r.team.subscription,
      student_team: !!r.team.studentTeamAt,
      grace_period_end: r.team.gracePeriodEnd ? r.team.gracePeriodEnd.toISOString() : null,
      canRead: r.team.canRead,
      org_access: r.team.orgAccess
    } : null,
    workspace: r.team?.workspace ?? null,
    orgs: A,
    dataLoaded: !0,
    currentUser: e.data.currentUser,
    sharedContainerSetting: uk(r.org ? {
      id: r.org.id,
      bigma_enabled: !!r.org?.bigmaEnabledAt
    } : null, r.org?.orgSharedSetting ?? e.data.org?.orgSharedSetting, r.team?.workspaceSharedSetting),
    editorType: mapFileTypeToEditorType(s.editor_type),
    numProjectTeamMembersWithAccess: c.size,
    activeProjectConnection: r.activeProjectResourceConnections?.[0],
    planTier: r.planPublicInfo?.tier || null,
    planRecordId: getResourceDataOrFallback(r.planRecordId) || null
  };
}
export function $$A0(e, t) {
  let r;
  let n = null;
  let i = null;
  "loaded" === e.status && "loaded" === t.status ? (r = "loaded", n = s()(e.data, t.data)) : "errors" === e.status || "errors" === t.status ? (r = "errors", i = s()(e.errors || [], t.errors || [])) : r = "loading";
  return {
    status: r,
    data: n,
    errors: i
  };
}
let x = e => {
  if (!e) return !1;
  let {
    accessReverted,
    expiresAt
  } = e;
  return !accessReverted && !!expiresAt && A().isAfter(expiresAt);
};
export function $$N2(e) {
  return !!(!e.canEdit && e.viewer_export_restricted && e.link_access === FPermissionLevelType.INHERIT);
}
export function $$C1(e, t) {
  let r = function (e, t) {
    let {
      audience
    } = v(e);
    switch (audience) {
      case "inherit":
        return getI18nString("file_access_row.only_people_invited_to_this_noun", {
          noun: getI18nString("file_info_row.file")
        });
      case "public":
        return getI18nString("file_access_row.anyone_with_the_link");
      case "public-password":
        return getI18nString("file_access_row.anyone_with_the_link_and_password");
      case "org":
        return getI18nString("file_access_row.anyone_at_org_name_with_the_link", {
          orgName: t.name
        });
      case "org-browsable":
        return getI18nString("file_access_row.anyone_at_org_name", {
          orgName: t.name
        });
      default:
        throwTypeError(audience);
    }
  }(e, t);
  let i = function (e) {
    let {
      audience,
      level
    } = v(e);
    if ("inherit" === audience) return getI18nString("file_access_row.can_access");
    switch (level) {
      case "view":
        return getI18nString("file_access_row.can_view");
      case "edit":
        return getI18nString("file_access_row.can_edit");
      case "proto-view-only":
        return getI18nString("file_access_row.can_view_prototypes");
      default:
        throwTypeError(level);
    }
  }(e);
  return `${r} ${i}`;
}
function w(e) {
  return e ? {
    id: e.id,
    redeemedBy: e.redeemedBy,
    billableProductKey: e.billableProductKey ? Zx(e.billableProductKey) : null,
    inviteeUserId: e.inviteeUserId
  } : null;
}
export const Ad = $$A0;
export const Ch = $$C1;
export const Ir = $$N2;
export const Jj = $$S3;
export const bY = $$y4;
export const m1 = $$v5;
export const nk = $$E6;