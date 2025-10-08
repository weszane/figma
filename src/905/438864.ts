import { folderChannelHandler, teamMembersChannelHandler } from "../905/25169"
import { RealtimeSubscriptionManager } from "../905/715533"
import { componentDeleteForFile } from "../905/879323"
import { ProjectByIdForRealtimeShim, ProjectsForTeam } from "../figma_app/43951"
import { clearActiveFileUsersAction } from "../figma_app/78808"
import { randomBetween } from "../figma_app/492908"
import { folderDeleteAction, folderDeleteLgShimAction, folderPostAction, folderPutAction } from "../figma_app/598926"
import { getFalseValue } from "../figma_app/897289"

// --- Type Definitions ---

interface Folder {
  id: string
  created_at?: string
  updated_at?: string
  path?: string
  team_id?: string
  org_id?: string
  trashed_at?: string | null
  deleted_at?: string | null
  description?: string
  name?: string
  is_invite_only?: boolean
  is_view_only?: boolean
  is_subscribed?: boolean
}

interface FolderUpdate {
  method: "put" | "post" | "delete"
  type: "folder"
  folder: Folder
}

interface StoreState {
  folders: Record<string, Folder>
  fileKeysByFolderId: Record<string, string[]>
  selectedView: {
    view: string
  }
}

interface Store {
  getState: () => StoreState
  dispatch: (action: any) => void
}



interface FolderDeletePayload {
  folderIds: string[]
}

// --- Utility Function ---

/**
 * Converts a raw folder/project object to the Folder interface.
 */
export function convertToFolder(obj: any): Folder {
  return {
    id: obj.id,
    created_at: obj.createdAt?.toISOString(),
    updated_at: obj.updatedAt?.toISOString(),
    path: obj.path,
    team_id: obj.teamId,
    org_id: obj.orgId,
    trashed_at: obj.trashedAt?.toISOString() || null,
    deleted_at: obj.deletedAt?.toISOString() || null,
    description: obj.description,
    name: obj.name,
    is_invite_only: obj.isInviteOnly,
    is_view_only: obj.isViewOnly,
    is_subscribed: obj.isSubscribed,
  }
}

// --- Folder Update Handler ---

/**
 * Handles folder updates based on the provided method.
 * - Renamed variables for clarity.
 * - Added type safety.
 * - Added comments for key logic.
 */
export function handleFolderUpdate(
  store: Store,
  update: { folder?: Folder, method?: "put" | "post" | "delete" },
  useLargeDeleteShim: boolean = false,
): void {
  if (!update.folder)
    return

  const { folder, method } = update

  switch (method) {
    case "put": {
      const currentState = store.getState()
      const existingFolder = currentState.folders[folder.id]

      // Update folder
      if (existingFolder) {
        store.dispatch(folderPutAction({ folder }))

        // If team_id changed, delete related file components and clear active users
        if (existingFolder.team_id !== folder.team_id) {
          const fileKeys
            = currentState.fileKeysByFolderId[existingFolder.id] || []
          for (const fileKey of fileKeys) {
            store.dispatch(componentDeleteForFile({ fileKey }))
            store.dispatch(clearActiveFileUsersAction({ fileKey }))
          }
        }
      }
      break
    }
    case "post": {
      const folderExists = folder.id in store.getState().folders
      if (folderExists) {
        store.dispatch(folderPutAction({ folder }))
      }
      else {
        store.dispatch(folderPostAction(folder))
      }
      break
    }
    case "delete": {
      const payload: FolderDeletePayload = {
        folderIds: [folder.id],
      }
      if (useLargeDeleteShim) {
        store.dispatch(folderDeleteLgShimAction(payload))
      }
      else {
        store.dispatch(folderDeleteAction(payload))
      }
      break
    }
    default:
      // Unknown method; do nothing
      break
  }
}

// --- Realtime Subscription Managers ---

// Used for team-level folder updates
export const teamChannelFoldersShim = new RealtimeSubscriptionManager({
  name: "TeamChannelFoldersShim",
  ...teamMembersChannelHandler,
  livegraphView: ProjectsForTeam,
  livegraphArgs: (teamId: string, updatedAtTimestamp: Date) => ({
    teamId,
    updatedAtTimestamp,
  }),
  convertLivegraphMessage: (
    message: any,
    teamUpdate: any,
    _unused: any = {},
    context: { store: Store },
  ) => {
    // Collect folder updates based on incoming project updates
    const updates: FolderUpdate[] = []
    const folders = context.store.getState().folders
    const seenIds = new Map<string, any>()

    // NOTE: 'm' is a global timestamp used for comparison
    for (const project of teamUpdate.team?.projectUpdates || []) {
      const existingFolder = folders[project.id]
      if (
        existingFolder
        && existingFolder.updated_at
        && existingFolder.updated_at < project.updatedAt.toISOString()
      ) {
        updates.push({
          method: "put",
          type: "folder",
          folder: convertToFolder(project),
        })
      }
      else if (
        !existingFolder
        && project.updatedAt > globalTimestamp
      ) {
        updates.push({
          method: "post",
          type: "folder",
          folder: convertToFolder(project),
        })
      }
      seenIds.set(project.id, project)
    }
    return updates
  },
  periodicallyResubscribe: false,
  delaySubscribeMs: () => randomBetween(500, 2000),
  darkReadEnabled: ({ store }: { store: Store }) =>
    store.getState().selectedView.view !== "communityHub",
  fullReadEnabled: ({ store }: { store: Store }) =>
    store.getState().selectedView.view !== "communityHub",
})

// Used for folder-level updates (by project)
export const folderChannelFoldersShim = new RealtimeSubscriptionManager({
  name: "FolderChannelFoldersShim",
  ...folderChannelHandler,
  livegraphView: ProjectByIdForRealtimeShim,
  livegraphArgs: (projectId: string) => ({
    projectId,
  }),
  convertLivegraphMessage: (
    message: any,
    projectUpdate: any,
    { projectId }: { projectId: string },
    context: { store: Store },
  ) => {
    // Handles single project update or deletion
    const folders = context.store.getState().folders
    const project = projectUpdate.project

    let result: FolderUpdate | null = null

    if (project) {
      const existingFolder = folders[project.id]
      if (
        existingFolder
        && existingFolder.updated_at
        && existingFolder.updated_at < project.updatedAt.toISOString()
      ) {
        result = {
          method: "put",
          type: "folder",
          folder: convertToFolder(project),
        }
      }
      else {
        result = {
          method: "post",
          type: "folder",
          folder: convertToFolder(project),
        }
      }
    }
    else if (folders[projectId]) {
      // Project deleted
      result = {
        method: "delete",
        type: "folder",
        folder: convertToFolder({ id: projectId }),
      }
    }

    return result ? [result] : []
  },
  periodicallyResubscribe: false,
  delaySubscribeMs: () => randomBetween(500, 2000),
  darkReadEnabled: () => true,
  fullReadEnabled: () => true,
})

// --- Global Timestamp for Comparison ---
// NOTE: This is used to compare update times for folders/projects.
// Potential bug: If getFalseValue() changes at runtime, 'globalTimestamp' may become stale.
const globalTimestamp: Date = getFalseValue()
  ? new Date("1970-01-01T00:00:00.000Z")
  : new Date()

// --- Exports ---

export const Y7 = convertToFolder
export const _O = folderChannelFoldersShim
export const vf = handleFolderUpdate
export const z$ = teamChannelFoldersShim
