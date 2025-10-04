import { defaultPermissions } from "../905/312028"
import { generateUniqueKey } from "../905/383708"
import { ResourceStatus } from "../905/723791"
import { FEntityType } from "../figma_app/191312"

interface FileRepoData {
  id: string
  name: string
  folder_id: string
  default_file_key: string
  deleted_at: string | null
  trashed_at: string | null
  created_at: string
  updated_at: string
  team_id: string | null
  link_access: string
  proto_link_access: string
  has_file_link_password: boolean
  has_proto_link_password: boolean
  org_audience: any
  org_browsable: boolean
  parent_org_id: string | null
  has_active_branches: boolean
}

interface FileData {
  id: string
  key: string
  libraryKey: string
  name: string
  fileRepoId: string
  editorType: string
  folderId: string
  teamId: string
  hasFileLinkPassword: boolean
  thumbnailUrl: string
  thumbnailUrlOverride: string
  thumbnailGuid: string | null
  clientMeta: any
  touchedAt: string
  lastPublishedAt: string
  canView: boolean
  linkAccess: string
  repo: {
    id: string
    name: string
    createdAt: Date
    deletedAt: Date
    trashedAt: Date | null
    updatedAt: Date
    linkAccess: string
    protoLinkAccess: string
    hasFileLinkPassword: boolean
    hasProtoLinkPassword: boolean
    orgAudience: any
    orgBrowsable: boolean
    hasActiveBranches: boolean
  }
  project: any
  isTeamTemplate: boolean
}

interface FolderResource {
  userId: string
  resourceType: FEntityType
  orgId: string | null
  teamId: string | null
  sidebarSectionId: string | null
  createdAt: Date
  updatedAt: Date
  resourceId: string
  project: {
    id: string
    path: string
    orgId: string | null
    teamId: string | null
    updatedAt: Date
    createdAt: Date
    deletedAt: Date | null
    trashedAt: Date | null
    viewOnlyAt: Date | null
    inviteOnlyAt: Date | null
    canEdit: boolean
    description: string
    team: {
      id: string
      orgId: string | null
      name: string
    }
  }
}

interface PrototypeResource {
  userId: string
  orgId: string | null
  teamId: string | null
  sidebarSectionId: string | null
  createdAt: Date
  updatedAt: Date
  resourceId: string
  resourceType: FEntityType
  prototype: {
    id: string
    name: string
    fileKey: string
    pageId: string
    thumbnailUrl: string
    file: {
      parentOrgId: string | null
      key: string
      folderId: string
      teamId: string
      fileRepoId: string
      hasProtoLinkPassword: boolean
      name: string
      editorType: string
      protoLinkAccess: string
      createdAt: Date
      trashedAt: Date | null
      prototypeUrl: {
        status: ResourceStatus
        data: string
      }
    }
  }
}

interface TeamResource {
  userId: string
  orgId: string | null
  sidebarSectionId: string | null
  createdAt: Date
  updatedAt: Date
  resourceId: string
  resourceType: FEntityType
  teamId: null
  team: {
    id: string
    orgId: string
    name: string
    deletedAt: null
    imgUrl: null
    licenseGroup: null
  }
}

interface FileResource {
  userId: string
  orgId: string | null
  teamId: string | null
  sidebarSectionId: string | null
  createdAt: Date
  updatedAt: Date
  resourceId: string
  resourceType: FEntityType
  file: FileData
}

interface WorkspaceResource {
  userId: string
  orgId: string | null
  createdAt: Date
  updatedAt: Date
  resourceId: string
  sidebarSectionId: string | null
  resourceType: FEntityType
  teamId: null
  workspace: {
    [key: string]: any
    orgId: string | null
    colorConfig: null
    description: null
    orgAccess: string
    createdAt: Date
    publicLinkControlsSetting: string
    publicLinkControlsMaxExpiration: string
    hasCustomPublicLinkControlsSetting: boolean
    fileExportSetting: null
    isPluginAllowlisted: boolean
    canRead: boolean
    imgUrlTransformed: string
  }
}

/**
 * Transforms file repository data from an input object
 * @param input - The input object containing file and repo information
 * @returns Formatted file repository data or null if no file/repo exists
 */
export function transformFileRepoData(input: any): FileRepoData | null {
  // $$o1
  return input.file && input.file.repo
    ? {
        id: input.file.fileRepoId ?? "",
        name: input.file.name,
        folder_id: input.file.folderId ?? "",
        default_file_key: input.file.key,
        deleted_at:
        input.file.repo.deletedAt && input.file.repo.deletedAt.toString(),
        trashed_at:
        input.file.repo.trashedAt && input.file.repo.trashedAt.toString(),
        created_at: input.file.repo.createdAt.toString(),
        updated_at: input.file.repo.updatedAt.toString(),
        team_id: input.file.teamId,
        link_access: input.file.repo.linkAccess,
        proto_link_access: input.file.repo.protoLinkAccess,
        has_file_link_password: input.file.repo.hasFileLinkPassword,
        has_proto_link_password: input.file.repo.hasProtoLinkPassword,
        org_audience: input.file.repo.orgAudience,
        org_browsable: input.file.repo.orgBrowsable,
        parent_org_id: input.orgId,
        has_active_branches: input.file.repo.hasActiveBranches,
      }
    : null
}

/**
 * Transforms raw file data into a structured format
 * @param rawData - The raw file data object
 * @returns Structured file data object
 */
export function transformFileData(rawData: any): FileData {
  // $$l5
  return {
    id: rawData.key,
    key: rawData.key,
    libraryKey: rawData.library_key || generateUniqueKey(rawData.key),
    name: rawData.name,
    fileRepoId: rawData.file_repo_id,
    editorType: rawData.editor_type,
    folderId: rawData.folder_id,
    teamId: rawData.team_id,
    hasFileLinkPassword: false,
    thumbnailUrl: rawData.thumbnail_url || "",
    thumbnailUrlOverride: rawData.thumbnail_url_override || "",
    thumbnailGuid: rawData.thumbnail_guid || null,
    clientMeta: rawData.client_meta,
    touchedAt: rawData.touched_at,
    lastPublishedAt: rawData.last_published_at ?? "",
    canView: true,
    linkAccess: rawData.link_access,
    repo: {
      id: rawData.file_repo_id || "",
      name: "",
      createdAt: new Date(),
      deletedAt: new Date(),
      trashedAt: null,
      updatedAt: new Date(),
      linkAccess: rawData.link_access,
      protoLinkAccess: rawData.proto_link_access,
      hasFileLinkPassword: false,
      hasProtoLinkPassword: false,
      orgAudience: null,
      orgBrowsable: true,
      hasActiveBranches: false,
    },
    project: null,
    isTeamTemplate: rawData.is_team_template || false,
  }
}

/**
 * Creates a folder resource object
 * @param folderData - The folder data
 * @param userId - The user ID
 * @param orgId - The organization ID
 * @param sidebarSectionId - The sidebar section ID
 * @returns Folder resource object
 */
export function createFolderResource(
  folderData: any,
  userId: string,
  orgId: string | null,
  sidebarSectionId: string | null,
): FolderResource {
  // $$d3
  return {
    userId,
    resourceType: FEntityType.FOLDER,
    orgId: orgId ?? null,
    teamId: folderData.team_id ?? null,
    sidebarSectionId: sidebarSectionId ?? null,
    createdAt: new Date(),
    updatedAt: new Date(),
    resourceId: folderData.id,
    project: {
      id: folderData.id,
      path: folderData.path,
      orgId,
      teamId: folderData.team_id,
      updatedAt: new Date(folderData.updated_at),
      createdAt: new Date(folderData.created_at),
      deletedAt:
        folderData.deleted_at != null ? new Date(folderData.deleted_at) : null,
      trashedAt:
        folderData.trashed_at != null ? new Date(folderData.trashed_at) : null,
      viewOnlyAt: folderData.is_view_only ? new Date() : null,
      inviteOnlyAt: folderData.is_invite_only ? new Date() : null,
      canEdit: false,
      description: folderData.description,
      team: {
        id: folderData.team_id ?? "",
        orgId,
        name: "",
      },
    },
  }
}

/**
 * Creates a prototype resource object
 * @param prototypeData - The prototype data
 * @param userId - The user ID
 * @param orgId - The organization ID
 * @param sidebarSectionId - The sidebar section ID
 * @returns Prototype resource object
 */
export function createPrototypeResource(
  prototypeData: any,
  userId: string,
  orgId: string | null,
  sidebarSectionId: string | null,
): PrototypeResource {
  // $$c2
  return {
    userId,
    orgId: orgId ?? null,
    teamId: prototypeData.fig_file?.team_id ?? null,
    sidebarSectionId: sidebarSectionId ?? null,
    createdAt: new Date(),
    updatedAt: new Date(),
    resourceId: prototypeData.id ?? "",
    resourceType: FEntityType.PROTOTYPE,
    prototype: {
      id: prototypeData.id || "unknown",
      name: prototypeData.name,
      fileKey: prototypeData.fig_file.key,
      pageId: prototypeData.page_id,
      thumbnailUrl: prototypeData.thumbnail_url,
      file: {
        parentOrgId: prototypeData.fig_file.parent_org_id || null,
        key: prototypeData.fig_file.key,
        folderId: prototypeData.fig_file.folder_id,
        teamId: prototypeData.fig_file.team_id,
        fileRepoId: prototypeData.fig_file.file_repo_id,
        hasProtoLinkPassword: prototypeData.fig_file.has_proto_link_password,
        name: prototypeData.fig_file.name,
        editorType: prototypeData.fig_file.editor_type,
        protoLinkAccess: prototypeData.fig_file.proto_link_access,
        createdAt: new Date(prototypeData.fig_file.created_at),
        trashedAt: prototypeData.fig_file.trashed_at
          ? new Date(prototypeData.fig_file.trashed_at)
          : null,
        prototypeUrl: {
          status: ResourceStatus.Loaded,
          data: prototypeData.fig_file.prototype_url,
        },
      },
    },
  }
}

/**
 * Creates a team resource object
 * @param teamData - The team data
 * @param userId - The user ID
 * @param orgId - The organization ID
 * @param sidebarSectionId - The sidebar section ID
 * @returns Team resource object
 */
export function createTeamResource(
  teamData: any,
  userId: string,
  orgId: string | null,
  sidebarSectionId: string | null,
): TeamResource {
  // $$u6
  return {
    userId,
    orgId: orgId ?? null,
    sidebarSectionId: sidebarSectionId ?? null,
    createdAt: new Date(),
    updatedAt: new Date(),
    resourceId: teamData.id,
    resourceType: FEntityType.TEAM,
    teamId: null,
    team: {
      id: teamData.id,
      orgId: teamData.org_id,
      name: teamData.name,
      deletedAt: null,
      imgUrl: null,
      licenseGroup: null,
    },
  }
}

/**
 * Creates a file resource object
 * @param fileData - The file data
 * @param userId - The user ID
 * @param orgId - The organization ID
 * @param sidebarSectionId - The sidebar section ID
 * @returns File resource object
 */
export function createFileResource(
  fileData: any,
  userId: string,
  orgId: string | null,
  sidebarSectionId: string | null,
): FileResource {
  // $$p4
  return {
    userId,
    orgId: orgId ?? null,
    teamId: fileData.team_id ?? null,
    sidebarSectionId: sidebarSectionId ?? null,
    createdAt: new Date(),
    updatedAt: new Date(),
    resourceId: fileData.key,
    resourceType: FEntityType.FILE,
    file: transformFileData(fileData),
  }
}

/**
 * Creates a workspace resource object
 * @param workspaceData - The workspace data
 * @param userId - The user ID
 * @param orgId - The organization ID
 * @param sidebarSectionId - The sidebar section ID
 * @returns Workspace resource object
 */
export function createWorkspaceResource(
  workspaceData: any,
  userId: string,
  orgId: string | null,
  sidebarSectionId: string | null,
): WorkspaceResource {
  // $$_0
  return {
    userId,
    orgId: orgId ?? null,
    createdAt: new Date(),
    updatedAt: new Date(),
    resourceId: workspaceData.id,
    sidebarSectionId: sidebarSectionId ?? null,
    resourceType: FEntityType.WORKSPACE,
    teamId: null,
    workspace: {
      ...workspaceData,
      orgId,
      colorConfig: null,
      description: null,
      orgAccess: "",
      createdAt: new Date(),
      publicLinkControlsSetting: "",
      publicLinkControlsMaxExpiration: "",
      hasCustomPublicLinkControlsSetting: false,
      fileExportSetting: null,
      isPluginAllowlisted: false,
      canRead: false,
      imgUrlTransformed: workspaceData.imgUrl,
      ...defaultPermissions,
    },
  }
}

// Export aliases for backward compatibility
export const Nc = createWorkspaceResource
export const QJ = transformFileRepoData
export const XJ = createPrototypeResource
export const ad = createFolderResource
export const f2 = createFileResource
export const h7 = transformFileData
export const zb = createTeamResource
