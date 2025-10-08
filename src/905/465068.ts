import { bindWithIgnore } from "../905/115338"
import { filePermissionsPutAction, filePutAction, postFileAction } from "../figma_app/78808"
import { FPermissionLevelType } from "../figma_app/191312"
import { folderDeleteAction } from "../figma_app/598926"
// Origin: /Users/allen/github/fig/src/905/465068.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments for clarity and potential issues.

// Assumed dependencies:
// - bindWithIgnore: Higher-order reducer utility
// - filePutAction, postFileAction, filePermissionsPutAction, folderDeleteAction: Action creators with .matches and .payload
// - FPermissionLevelType: Enum for permission levels

// Type definitions for file/folder objects and actions

export interface FileObject {
  key: string
  folder_id?: string | null
  org_browsable?: boolean
  link_access?: FPermissionLevelType
  // Other possible file properties...
}

export interface FolderDeletePayload {
  folderIds: string[]
}

export interface FileActionPayload {
  file?: Partial<FileObject>
}

export interface Action<T = any> {
  type: string
  payload?: T
  // .matches is a custom method for action type checking
  matches: (action: Action) => boolean
}

// Utility function to check if a file is org-browsable with specific link access
export function isOrgBrowsableFile(file: FileObject | undefined): boolean {
  // Returns true if file is org_browsable and link_access is ORG_EDIT or ORG_VIEW
  return !!(
    file
    && file.org_browsable
    && (file.link_access === FPermissionLevelType.ORG_EDIT
      || file.link_access === FPermissionLevelType.ORG_VIEW)
  )
}

// Reducer for file object updates based on actions
export const fileReducer = bindWithIgnore(
  (file, action) => {
    // Handle folder deletion: if file's folder_id is deleted, set folder_id to null
    if (folderDeleteAction.matches(action)) {
      const payload = action.payload as FolderDeletePayload
      if (file?.folder_id && payload.folderIds.includes(file.folder_id)) {
        return {
          ...file,
          folder_id: null,
        }
      }
    }
    // Handle file updates: merge file properties if keys match
    else if (
      filePutAction.matches(action)
      || postFileAction.matches(action)
      || filePermissionsPutAction.matches(action)
    ) {
      const payload = action.payload as FileActionPayload
      if (
        payload?.file
        && file
        && payload.file.key === file.key
      ) {
        return {
          ...file,
          ...payload.file,
        }
      }
      // If no matching file, return original
      return file
    }
    // Default: return original file object
    return file
  },
  {
    // Ignore unrelated actions for performance
    shouldIgnoreAction: (action: Action) =>
      !(
        folderDeleteAction.matches(action)
        || filePutAction.matches(action)
        || filePermissionsPutAction.matches(action)
        || postFileAction.matches(action)
      ),
  },
)

// Export aliases for compatibility with original code
export const N = fileReducer
export const Y = isOrgBrowsableFile
