import { fileChannelHandler, fileRepoChannelHandler, folderChannelHandler, teamMembersChannelHandler } from "../905/25169"
import { postRecentBranch } from "../905/466026"
import { getFeatureFlags } from "../905/601108"
import { RealtimeSubscriptionManager } from "../905/715533"
import { componentDeleteForFile } from "../905/879323"
import { deleteFilesOptimistThunk, deleteFilesPermanentlyAction } from "../905/880488"
import { FileByKeyForRealtimeShim, FilesForProject, FilesForRepo, FilesForTeam } from "../figma_app/43951"
import { clearActiveFileUsersAction, filePutAction, postFileAction, removeFileFromProjectAction } from "../figma_app/78808"
import { randomBetween } from "../figma_app/492908"
import { isFigmaMobileWithoutTripleTaps, isIOSUA } from "../figma_app/778880"

interface FileUpdateMessage {
  method: "put" | "post" | "delete"
  type: "file"
  file: any
}

interface LiveGraphFile {
  key: string
  updatedAt?: Date
  touchedAt: string
  isTryFile?: boolean
  isPublishedSite?: boolean
  lastPublishedAt?: string
  thumbnailUrl?: string
  trashedAt?: Date
  checkpointId: string
  checkpointKey: string
  branchCheckpointId: string
  clientMeta: any
  createdAt?: Date
  creatorId: string
  deletedAt?: Date
  description: string
  editUrl: string
  editorType: string
  fileRepoId: string
  folderId: string
  handoffUrl: string
  hasFileLinkPassword: boolean
  hasProtoLinkPassword: boolean
  license: string
  linkAccess: string
  name: string
  orgAudience?: boolean
  orgBrowsable: boolean
  parentOrgId: string
  protoLinkAccess: string
  prototypeUrl: string
  sourceCheckpointId: string
  sourceFileKey: string
  teamId: string
  thumbnailGuid: string
  thumbnailUrlOverride: string
  trackTags?: {
    isTemplate: boolean
    starterLibrarySrcFileKey: string
    figmaBasicsExperiment: string
    source: string
  }
  trashedUserId: string
  url: string
  viewerExportRestricted: boolean
  scheme: string
  libraryKey: string
}

/**
 * Checks if the current environment is mobile without triple taps enabled
 * or if it's iOS prototype view
 * @param store - The application store
 * @returns boolean indicating if mobile restrictions apply
 */
function isMobileWithRestrictions(store: any): boolean {
  const isIOSPrototypeView = isIOSUA && store.getState().selectedView?.view === "prototype"
  return isFigmaMobileWithoutTripleTaps() || isIOSPrototypeView
}

/**
 * Handles file-related realtime updates
 * Processes put, post, and delete operations for files
 * @param store - The application store
 * @param message - The update message containing file data and operation type
 */
export function handleFileUpdate(store: any, message: FileUpdateMessage): void {
  if (!message.file || !message.file.library_key) {
    return
  }

  const file = message.file

  switch (message.method) {
    case "put": {
      const existingFile = store.getState().fileByKey[file.key]

      // Handle trashed files
      if (!existingFile?.trashed_at && file.trashed_at) {
        store.dispatch(deleteFilesOptimistThunk({
          fileKeys: {
            [file.key]: file,
          },
        }))
        break
      }

      // Update the file
      store.dispatch(filePutAction({ file }))

      // Handle team or folder changes
      if (existingFile) {
        if (existingFile.team_id !== file.team_id) {
          store.dispatch(componentDeleteForFile({ fileKey: file.key }))
          store.dispatch(clearActiveFileUsersAction({ fileKey: file.key }))
        }
        else if (existingFile.folder_id !== file.folder_id) {
          store.dispatch(clearActiveFileUsersAction({ fileKey: file.key }))
          if (existingFile.folder_id) {
            store.dispatch(removeFileFromProjectAction({
              file,
              folderId: existingFile.folder_id,
            }))
          }
        }
      }
      break
    }

    case "post": {
      if (file.file_repo_id) {
        store.dispatch(postRecentBranch({ file }))
      }
      store.dispatch(postFileAction({ file }))
      break
    }

    case "delete": {
      store.dispatch(deleteFilesPermanentlyAction({
        fileKeys: {
          [file.key]: true,
        },
      }))
      break
    }
  }
}

/**
 * Determines if a file needs to be updated based on timestamp and property comparisons
 * @param localFile - The file in local state
 * @param remoteFile - The file from livegraph
 * @returns boolean indicating if an update is needed
 */
function shouldUpdateFile(localFile: any, remoteFile: LiveGraphFile): boolean {
  return (
    localFile.updated_at < remoteFile.updatedAt?.toISOString()
    || localFile.touched_at < remoteFile.touchedAt.replace(/\.\d+Z/, "Z")
    || !!localFile.is_try_file !== !!remoteFile.isTryFile
    || !!localFile.is_published_site !== !!remoteFile.isPublishedSite
    || (localFile.last_published_at || "") !== remoteFile.lastPublishedAt
    || (localFile.thumbnail_url || "") !== remoteFile.thumbnailUrl
  )
}

/**
 * Converts LiveGraph file data to internal file format
 * @param liveGraphFile - The file data from LiveGraph
 * @returns Internal file representation
 */
export function convertLiveGraphFile(liveGraphFile: LiveGraphFile): any {
  return {
    checkpoint_id: liveGraphFile.checkpointId,
    checkpoint_key: liveGraphFile.checkpointKey,
    branch_checkpoint_id: liveGraphFile.branchCheckpointId,
    client_meta: liveGraphFile.clientMeta,
    created_at: liveGraphFile.createdAt?.toISOString().replace(/\.\d+Z/, "Z") || "",
    creator_id: liveGraphFile.creatorId,
    deleted_at: liveGraphFile.deletedAt?.toISOString() || null,
    description: liveGraphFile.description,
    edit_url: liveGraphFile.editUrl,
    editor_type: liveGraphFile.editorType,
    file_repo_id: liveGraphFile.fileRepoId,
    folder_id: liveGraphFile.folderId,
    handoff_url: liveGraphFile.handoffUrl,
    has_file_link_password: liveGraphFile.hasFileLinkPassword,
    has_proto_link_password: liveGraphFile.hasProtoLinkPassword,
    is_try_file: liveGraphFile.isTryFile,
    is_published_site: liveGraphFile.isPublishedSite,
    key: liveGraphFile.key,
    license: liveGraphFile.license,
    link_access: liveGraphFile.linkAccess,
    name: liveGraphFile.name,
    org_audience: !!liveGraphFile.orgAudience,
    org_browsable: liveGraphFile.orgBrowsable,
    parent_org_id: liveGraphFile.parentOrgId,
    proto_link_access: liveGraphFile.protoLinkAccess,
    prototype_url: liveGraphFile.prototypeUrl,
    source_checkpoint_id: liveGraphFile.sourceCheckpointId,
    source_file_key: liveGraphFile.sourceFileKey,
    team_id: liveGraphFile.teamId,
    touched_at: liveGraphFile.touchedAt
      ? new Date(liveGraphFile.touchedAt).toISOString().replace(/\.\d+Z/, "Z")
      : liveGraphFile.touchedAt,
    thumbnail_guid: liveGraphFile.thumbnailGuid,
    thumbnail_url: liveGraphFile.thumbnailUrl || "",
    thumbnail_url_override: liveGraphFile.thumbnailUrlOverride,
    track_tags: liveGraphFile.trackTags
      ? {
        is_template: liveGraphFile.trackTags.isTemplate,
        starter_library_src_file_key: liveGraphFile.trackTags.starterLibrarySrcFileKey,
        figma_basics_experiment: liveGraphFile.trackTags.figmaBasicsExperiment,
        source: liveGraphFile.trackTags.source,
      }
      : null,
    trashed_at: liveGraphFile.trashedAt?.toISOString().replace(/\.\d+Z/, "Z") || null,
    trashed_user_id: liveGraphFile.trashedUserId,
    updated_at: liveGraphFile.updatedAt?.toISOString() || "",
    url: liveGraphFile.url,
    viewer_export_restricted: liveGraphFile.viewerExportRestricted,
    scheme: liveGraphFile.scheme,
    last_published_at: liveGraphFile.lastPublishedAt || null,
    library_key: liveGraphFile.libraryKey,
  }
}

/**
 * Creates file update messages from team channel data
 */
function createTeamChannelFileUpdates(store: any, teamData: any): FileUpdateMessage[] {
  const updates: FileUpdateMessage[] = []
  const fileByKey = store.getState().fileByKey

  for (const fileUpdate of teamData.team?.fileUpdates || []) {
    const existingFile = fileByKey[fileUpdate.key]

    if (existingFile && shouldUpdateFile(existingFile, fileUpdate)) {
      updates.push({
        method: "put",
        type: "file",
        file: convertLiveGraphFile(fileUpdate),
      })
    }
    else if (!existingFile) {
      updates.push({
        method: "post",
        type: "file",
        file: convertLiveGraphFile(fileUpdate),
      })
    }
  }

  return updates
}

/**
 * Creates file update messages from project folder data
 */
function createFolderChannelFileUpdates(store: any, projectData: any): FileUpdateMessage[] {
  const updates: FileUpdateMessage[] = []
  const fileByKey = store.getState().fileByKey

  for (const fileUpdate of projectData.project?.fileUpdates || []) {
    const existingFile = fileByKey[fileUpdate.key]

    if (existingFile && shouldUpdateFile(existingFile, fileUpdate)) {
      updates.push({
        method: "put",
        type: "file",
        file: convertLiveGraphFile(fileUpdate),
      })
    }
    else if (!existingFile) {
      updates.push({
        method: "post",
        type: "file",
        file: convertLiveGraphFile(fileUpdate),
      })
    }
  }

  return updates
}

/**
 * Creates file update message from single file data
 */
function createFileChannelFileUpdate(store: any, fileData: any): FileUpdateMessage | null {
  const fileByKey = store.getState().fileByKey
  const liveGraphFile = fileData.file

  if (liveGraphFile) {
    const existingFile = fileByKey[liveGraphFile.key]

    if (existingFile && shouldUpdateFile(existingFile, liveGraphFile)) {
      return {
        method: "put",
        type: "file",
        file: convertLiveGraphFile(liveGraphFile),
      }
    }

    if (!existingFile) {
      return {
        method: "post",
        type: "file",
        file: convertLiveGraphFile(liveGraphFile),
      }
    }
  }

  return null
}

/**
 * Creates file update messages from file repository data
 */
function createFileRepoChannelFileUpdates(store: any, repoData: any): FileUpdateMessage[] {
  const updates: FileUpdateMessage[] = []
  const fileByKey = store.getState().fileByKey

  for (const file of repoData.repo?.files || []) {
    const existingFile = fileByKey[file.key]

    if (existingFile && shouldUpdateFile(existingFile, file)) {
      updates.push({
        method: "put",
        type: "file",
        file: convertLiveGraphFile(file),
      })
    }
    else if (!existingFile) {
      updates.push({
        method: "post",
        type: "file",
        file: convertLiveGraphFile(file),
      })
    }
  }

  return updates
}

// Team Channel Files Shim
export const TeamChannelFilesShim = new RealtimeSubscriptionManager({
  name: "TeamChannelFilesShim",
  ...teamMembersChannelHandler,
  livegraphView: FilesForTeam,
  livegraphArgs: (teamId, updatedAtTimestamp) => ({
    teamId,
    updatedAtTimestamp,
  }),
  convertLivegraphMessage: (store, teamData) =>
    createTeamChannelFileUpdates(store, teamData),
  periodicallyResubscribe: true,
  delaySubscribeMs: () => randomBetween(500, 2000),
  darkReadEnabled: ({ store }) => !isMobileWithRestrictions(store),
  fullReadEnabled: ({ store }) => !isMobileWithRestrictions(store),
})

// Folder Channel Files Shim
export const FolderChannelFilesShim = new RealtimeSubscriptionManager({
  name: "FolderChannelFilesShim",
  ...folderChannelHandler,
  livegraphView: FilesForProject,
  livegraphArgs: (projectId, updatedAtTimestamp) => ({
    projectId,
    updatedAtTimestamp,
  }),
  convertLivegraphMessage: (store, projectData) =>
    createFolderChannelFileUpdates(store, projectData),
  periodicallyResubscribe: true,
  delaySubscribeMs: () => randomBetween(500, 2000),
  darkReadEnabled: ({ store }) => !isMobileWithRestrictions(store),
  fullReadEnabled: ({ store }) => !isMobileWithRestrictions(store),
})

// File Channel Files Shim
export const FileChannelFilesShim = new RealtimeSubscriptionManager({
  name: "FileChannelFilesShim",
  ...fileChannelHandler,
  livegraphView: FileByKeyForRealtimeShim,
  livegraphArgs: fileKey => ({
    fileKey,
  }),
  convertLivegraphMessage: (store, fileData) => {
    const update = createFileChannelFileUpdate(store, fileData)
    return update ? [update] : []
  },
  periodicallyResubscribe: false,
  delaySubscribeMs: () =>
    getFeatureFlags().livegraph_splay_realtime_views
      ? randomBetween(500, 90000)
      : randomBetween(500, 2000),
  darkReadEnabled: ({ store }) => !isMobileWithRestrictions(store),
  fullReadEnabled: ({ store }) => !isMobileWithRestrictions(store),
})

// File Repo Channel Files Shim
export const FileRepoChannelFilesShim = new RealtimeSubscriptionManager({
  name: "FileRepoChannelFilesShim",
  ...fileRepoChannelHandler,
  livegraphView: FilesForRepo,
  livegraphArgs: repoId => ({
    repoId,
  }),
  convertLivegraphMessage: (store, repoData) =>
    createFileRepoChannelFileUpdates(store, repoData),
  periodicallyResubscribe: false,
  delaySubscribeMs: () =>
    getFeatureFlags().livegraph_splay_realtime_views
      ? randomBetween(500, 90000)
      : randomBetween(500, 2000),
  darkReadEnabled: ({ store }) => !isMobileWithRestrictions(store),
  fullReadEnabled: ({ store }) => !isMobileWithRestrictions(store),
})

// Export aliases
export const Dk = handleFileUpdate
export const O9 = FolderChannelFilesShim
export const W$ = convertLiveGraphFile
export const XG = TeamChannelFilesShim
export const qG = FileChannelFilesShim
export const qS = FileRepoChannelFilesShim
