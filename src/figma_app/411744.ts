import { fM } from "../905/312028";
import { generateUniqueKey } from "../905/383708";
import { FEntityType } from "../figma_app/191312";
import { tT } from "../905/723791";
export function $$o1(e) {
  return e.file && e.file.repo ? {
    id: e.file.fileRepoId ?? "",
    name: e.file.name,
    folder_id: e.file.folderId ?? "",
    default_file_key: e.file.key,
    deleted_at: e.file.repo.deletedAt && e.file.repo.deletedAt.toString(),
    trashed_at: e.file.repo.trashedAt && e.file.repo.trashedAt.toString(),
    created_at: e.file.repo.createdAt.toString(),
    updated_at: e.file.repo.updatedAt.toString(),
    team_id: e.file.teamId,
    link_access: e.file.repo.linkAccess,
    proto_link_access: e.file.repo.protoLinkAccess,
    has_file_link_password: e.file.repo.hasFileLinkPassword,
    has_proto_link_password: e.file.repo.hasProtoLinkPassword,
    org_audience: e.file.repo.orgAudience,
    org_browsable: e.file.repo.orgBrowsable,
    parent_org_id: e.orgId,
    has_active_branches: e.file.repo.hasActiveBranches
  } : null;
}
export function $$l5(e) {
  return {
    id: e.key,
    key: e.key,
    libraryKey: e.library_key || generateUniqueKey(e.key),
    name: e.name,
    fileRepoId: e.file_repo_id,
    editorType: e.editor_type,
    folderId: e.folder_id,
    teamId: e.team_id,
    hasFileLinkPassword: !1,
    thumbnailUrl: e.thumbnail_url || "",
    thumbnailUrlOverride: e.thumbnail_url_override || "",
    thumbnailGuid: e.thumbnail_guid || null,
    clientMeta: e.client_meta,
    touchedAt: e.touched_at,
    lastPublishedAt: e.last_published_at ?? "",
    canView: !0,
    linkAccess: e.link_access,
    repo: {
      id: e.file_repo_id || "",
      name: "",
      createdAt: new Date(),
      deletedAt: new Date(),
      trashedAt: null,
      updatedAt: new Date(),
      linkAccess: e.link_access,
      protoLinkAccess: e.proto_link_access,
      hasFileLinkPassword: !1,
      hasProtoLinkPassword: !1,
      orgAudience: null,
      orgBrowsable: !0,
      hasActiveBranches: !1
    },
    project: null,
    isTeamTemplate: e.is_team_template || !1
  };
}
export function $$d3(e, t, r, n) {
  return {
    userId: t,
    resourceType: FEntityType.FOLDER,
    orgId: r ?? null,
    teamId: e.team_id ?? null,
    sidebarSectionId: n ?? null,
    createdAt: new Date(),
    updatedAt: new Date(),
    resourceId: e.id,
    project: {
      id: e.id,
      path: e.path,
      orgId: r,
      teamId: e.team_id,
      updatedAt: new Date(e.updated_at),
      createdAt: new Date(e.created_at),
      deletedAt: null != e.deleted_at ? new Date(e.deleted_at) : null,
      trashedAt: null != e.trashed_at ? new Date(e.trashed_at) : null,
      viewOnlyAt: e.is_view_only ? new Date() : null,
      inviteOnlyAt: e.is_invite_only ? new Date() : null,
      canEdit: !1,
      description: e.description,
      team: {
        id: e.team_id ?? "",
        orgId: r,
        name: ""
      }
    }
  };
}
export function $$c2(e, t, r, n) {
  return {
    userId: t,
    orgId: r ?? null,
    teamId: e.fig_file?.team_id ?? null,
    sidebarSectionId: n ?? null,
    createdAt: new Date(),
    updatedAt: new Date(),
    resourceId: e.id ?? "",
    resourceType: FEntityType.PROTOTYPE,
    prototype: {
      id: e.id || "unknown",
      name: e.name,
      fileKey: e.fig_file.key,
      pageId: e.page_id,
      thumbnailUrl: e.thumbnail_url,
      file: {
        parentOrgId: e.fig_file.parent_org_id || null,
        key: e.fig_file.key,
        folderId: e.fig_file.folder_id,
        teamId: e.fig_file.team_id,
        fileRepoId: e.fig_file.file_repo_id,
        hasProtoLinkPassword: e.fig_file.has_proto_link_password,
        name: e.fig_file.name,
        editorType: e.fig_file.editor_type,
        protoLinkAccess: e.fig_file.proto_link_access,
        createdAt: new Date(e.fig_file.created_at),
        trashedAt: e.fig_file.trashed_at ? new Date(e.fig_file.trashed_at) : null,
        prototypeUrl: {
          status: tT.Loaded,
          data: e.fig_file.prototype_url
        }
      }
    }
  };
}
export function $$u6(e, t, r, n) {
  return {
    userId: t,
    orgId: r ?? null,
    sidebarSectionId: n ?? null,
    createdAt: new Date(),
    updatedAt: new Date(),
    resourceId: e.id,
    resourceType: FEntityType.TEAM,
    teamId: null,
    team: {
      id: e.id,
      orgId: e.org_id,
      name: e.name,
      deletedAt: null,
      imgUrl: null,
      licenseGroup: null
    }
  };
}
export function $$p4(e, t, r, n) {
  return {
    userId: t,
    orgId: r ?? null,
    teamId: e.team_id ?? null,
    sidebarSectionId: n ?? null,
    createdAt: new Date(),
    updatedAt: new Date(),
    resourceId: e.key,
    resourceType: FEntityType.FILE,
    file: $$l5(e)
  };
}
export function $$_0(e, t, r, i) {
  return {
    userId: t,
    orgId: r ?? null,
    createdAt: new Date(),
    updatedAt: new Date(),
    resourceId: e.id,
    sidebarSectionId: i ?? null,
    resourceType: FEntityType.WORKSPACE,
    teamId: null,
    workspace: {
      ...e,
      orgId: r,
      colorConfig: null,
      description: null,
      orgAccess: "",
      createdAt: new Date(),
      publicLinkControlsSetting: "",
      publicLinkControlsMaxExpiration: "",
      hasCustomPublicLinkControlsSetting: !1,
      fileExportSetting: null,
      isPluginAllowlisted: !1,
      canRead: !1,
      imgUrlTransformed: e.imgUrl,
      ...fM
    }
  };
}
export const Nc = $$_0;
export const QJ = $$o1;
export const XJ = $$c2;
export const ad = $$d3;
export const f2 = $$p4;
export const h7 = $$l5;
export const zb = $$u6;