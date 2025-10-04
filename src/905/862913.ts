import { useSelector } from "react-redux"
import { convertToRgba } from "../905/222694"
import { fileEntityDataMapper } from "../905/943101"
import { FPermissionLevelType, FViewPermissionType } from "../figma_app/191312"
import { hasValidTeamPaymentStatus } from "../figma_app/598018"

/**
 * Check if a file is trashed
 * @param fileId - The ID of the file to check
 * @param state - The state object containing file information
 * @returns True if the file is trashed, false otherwise
 */
function isFileTrashed(fileId: string, state: any): boolean {
  return !!state.fileByKey[fileId]?.trashed_at
}

/**
 * Filter out trashed files and return only active files
 * @param fileIds - Array of file IDs to filter
 * @param state - The state object containing file information
 * @returns Object mapping file IDs to their corresponding file data for active files
 */
export function getActiveFilesById(fileIds: string[], state: any): Record<string, any> {
  const activeFiles: Record<string, any> = {}
  for (const fileId of fileIds) {
    if (!isFileTrashed(fileId, state) && fileId in state.fileByKey) {
      activeFiles[fileId] = state.fileByKey[fileId]
    }
  }
  return activeFiles
}

/**
 * Get trashed files that belong to a folder
 * @param fileIds - Array of file IDs to filter
 * @param state - The state object containing file information
 * @returns Object mapping file IDs to their corresponding file data for trashed files in folders
 */
export function getTrashedFolderFilesById(fileIds: string[], state: any): Record<string, any> {
  const trashedFolderFiles: Record<string, any> = {}
  for (const fileId of fileIds) {
    if (
      fileId in state.fileByKey
      && isFileTrashed(fileId, state)
      && state.fileByKey[fileId].folder_id
    ) {
      trashedFolderFiles[fileId] = state.fileByKey[fileId]
    }
  }
  return trashedFolderFiles
}

/**
 * Check if user has access to a file based on team subscription status
 * @param hasAccess - Whether user initially has access
 * @param teamInfo - Team information object
 * @param shouldCheckSubscription - Whether to check subscription status
 * @returns True if user has access, false otherwise
 */
export function hasFileAccessBasedOnSubscription(
  hasAccess: boolean,
  teamInfo: any,
  shouldCheckSubscription: boolean,
): boolean {
  return (
    (!shouldCheckSubscription
      || !!teamInfo.parent_org_id
      || !teamInfo.parent_team
      || !!teamInfo.parent_team.subscription)
    && (!shouldCheckSubscription
      || !!teamInfo.parent_org_id
      || !!teamInfo.parent_team)
    && hasAccess
  )
}

/**
 * Check if team payment is valid or if checking is not required
 * @param teamInfo - Team information object
 * @param shouldCheckPayment - Whether payment validation is required
 * @returns True if payment is valid or checking is not required
 */
export function isValidTeamPaymentOrNotRequired(teamInfo: any, shouldCheckPayment: boolean): boolean {
  return !!teamInfo && (!!hasValidTeamPaymentStatus(teamInfo) || !shouldCheckPayment)
}

/**
 * Check if file has public link access
 * @param file - File object to check
 * @returns True if file has public view or edit access
 */
export function hasPublicLinkAccess(file: any): boolean {
  return !!file
    && !file.parent_org_id
    && (file.link_access === FPermissionLevelType.VIEW
      || file.link_access === FPermissionLevelType.EDIT)
}

/**
 * Check if file graph has password protection with public access
 * @param fileEntity - File entity to check
 * @returns True if file has password protection and public access
 */
export function hasPasswordProtectedPublicAccessFromEntity(fileEntity: any): boolean {
  return hasPasswordProtectedPublicAccess(fileEntityDataMapper.toLiveGraph(fileEntity))
}

/**
 * Check if file graph has password protection with public access
 * @param fileGraph - File graph object to check
 * @returns True if file has password protection and public access
 */
export function hasPasswordProtectedPublicAccess(fileGraph: any): boolean {
  return !!fileGraph.hasFileLinkPassword
    && (fileGraph.linkAccess === FPermissionLevelType.VIEW
      || fileGraph.linkAccess === FPermissionLevelType.EDIT)
}

/**
 * Check if prototype has password protected view access
 * @param proto - Prototype object to check
 * @returns True if prototype has password protection and view access
 */
export function hasPasswordProtectedProtoViewAccess(proto: any): boolean {
  return !!proto.has_proto_link_password
    && proto.proto_link_access === FViewPermissionType.VIEW
}

/**
 * Get file by key from Redux store
 * @returns File by key mapping from Redux store
 */
export function useFileByKey() {
  return useSelector((state: AppState) => state.fileByKey)
}

// Export renamed functions and constants for backward compatibility
export const Cn = convertToRgba
export const Oi = isValidTeamPaymentOrNotRequired
export const Ph = hasPasswordProtectedPublicAccess
export const QZ = hasFileAccessBasedOnSubscription
export const RD = getActiveFilesById
export const Uj = hasPasswordProtectedProtoViewAccess
export const i4 = hasPasswordProtectedPublicAccessFromEntity
export const sR = getTrashedFolderFilesById
export const ud = useFileByKey
export const zb = hasPublicLinkAccess
