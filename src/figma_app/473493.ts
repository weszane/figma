import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../905/372672'
import { getFeatureFlags } from '../905/601108'
import { FileCanAccessFullDevMode, FileCanAccessFullDevModeOrgPlus, FileCanExport, FileCanUseDevModeDemoFile, FileDevModeTrialRequestPending, FileIsEligibleForDevModeTrial, FileIsInDevModeTrial } from '../figma_app/43951'
import { getInitialOptions } from '../figma_app/169182'
import { useSubscription } from '../figma_app/288654'
import { useCurrentFileKey } from '../figma_app/516028'

/**
 * Checks if the current file can access full Dev Mode.
 * @param state - Redux state
 * @returns boolean
 * @originalName $$u5
 */
export function canAccessFullDevMode(state: any): boolean {
  return state.openFile?.canAccessFullDevMode ?? true
}

/**
 * Checks if the current file can access Dev Mode entry point.
 * @param state - Redux state
 * @returns boolean
 * @originalName $$p0
 */
export function canAccessDevModeEntryPoint(state: any): boolean {
  return state.openFile?.canAccessDevModeEntryPoint ?? true
}

/**
 * React hook to select if the file can access full Dev Mode.
 * @returns boolean
 * @originalName $$_2
 */
export function useCanAccessFullDevMode(): boolean {
  return useSelector(canAccessFullDevMode)
}

/**
 * React hook to select if the file can access Dev Mode entry point.
 * @returns boolean
 * @originalName $$h1
 */
export function useCanAccessDevModeEntryPoint(): boolean {
  return useSelector(canAccessDevModeEntryPoint)
}

/**
 * Determines if the current file is a logged out Dev Mode demo file.
 * @returns boolean
 * @originalName $$m3
 */
export function useIsLoggedOutDevModeDemoFile(): boolean {
  const currentUser = selectCurrentUser()
  const currentFileKey = useCurrentFileKey()
  const isDemoFile = currentFileKey === getInitialOptions().dev_mode_demo_file_key
  return !!getFeatureFlags().logged_out_dev_mode_demo_file && !!currentFileKey && !currentUser && isDemoFile
}

/**
 * Checks if the current file can use Dev Mode demo file.
 * @returns boolean
 * @originalName $$g6
 */
export function useCanUseDevModeDemoFile(): boolean {
  const fileKey = useCurrentFileKey()
  const { data } = useSubscription(FileCanUseDevModeDemoFile, {
    key: fileKey || '',
  }, {
    enabled: !!fileKey,
  })
  if (data?.file && data.file.status !== 'error') {
    return data?.file?.data?.hasPermission ?? false
  }
  return fileKey === getInitialOptions().dev_mode_demo_file_key
}

/**
 * Subscribes to all Dev Mode related permissions for a file.
 * @param fileKey - The file key
 * @originalName $$f4
 */
export function subscribeDevModePermissions(fileKey: string): void {
  useSubscription(FileCanAccessFullDevMode, { key: fileKey })
  useSubscription(FileIsEligibleForDevModeTrial, { key: fileKey })
  useSubscription(FileIsInDevModeTrial, { key: fileKey })
  useSubscription(FileDevModeTrialRequestPending, { key: fileKey })
  useSubscription(FileCanAccessFullDevModeOrgPlus, { key: fileKey })
  useSubscription(FileCanExport, { key: fileKey })
}

// Exported aliases for backward compatibility and refactored names
export const Nc = canAccessDevModeEntryPoint // $$p0
export const U4 = useCanAccessDevModeEntryPoint // $$h1
export const _I = useCanAccessFullDevMode // $$_2
export const l7 = useIsLoggedOutDevModeDemoFile // $$m3
export const lF = subscribeDevModePermissions // $$f4
export const tn = canAccessFullDevMode // $$u5
export const xo = useCanUseDevModeDemoFile // $$g6
