// Original file: /Users/allen/github/fig/src/905/18613.ts

interface FileInput {
  orgId: any
  editorType: any
  name: string
  fileKey: any
}

interface FileConfig {
  folder_id: null
  org_id: any
  openNewFileIn: any
  trackingInfo: null
  editorType: any
  fileName: string
  localFileKey: any
}

/**
 * Creates a file configuration object.
 * @param input - The input object containing file details.
 * @param openNewFileIn - The location to open the new file in.
 * @returns The file configuration object.
 */
export function createFileConfig(input: FileInput, openNewFileIn: any): FileConfig {
  // Original: $$n0
  return {
    folder_id: null,
    org_id: input.orgId,
    openNewFileIn,
    trackingInfo: null,
    editorType: input.editorType,
    fileName: input.name,
    localFileKey: input.fileKey,
  }
}

/**
 * Enum for notification types.
 */
// Original: $$r1
export enum NotificationType {
  OFFLINE_FILE_TILE = 'OFFLINE_FILE_TILE',
  AUTOSAVE_NOTIFICATION = 'AUTOSAVE_NOTIFICATION',
  AUTOSAVE_MODAL = 'AUTOSAVE_MODAL',
}

export const B = createFileConfig
export const U = NotificationType
