import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { atom, atomStoreManager } from '../figma_app/27355'
import { FileWorkshopMode } from '../figma_app/43951'
import { useSubscription } from '../figma_app/288654'
/**
 * Atom to store workshop mode expiration date.
 * Original name: $$d2
 */
export const workshopModeExpirationAtom = atom(null)

/**
 * Determines the workshop mode status for a given file.
 * Original name: $$c1
 * @param fileKey - The file key to check workshop mode for.
 * @param fallbackEnabled - Whether to fallback to enabled if not loaded.
 * @returns Workshop mode status object.
 */
export function getWorkshopModeStatus(fileKey: string, fallbackEnabled: boolean = false) {
  const subscription = useSubscription(
    FileWorkshopMode,
    { fileKey },
    { enabled: !!fileKey },
  )

  return useMemo(() => {
    if (subscription.status !== 'loaded') {
      return fallbackEnabled
        ? {
            enabled: true,
            until: new Date(),
            id: 'fallback',
          }
        : {
            enabled: false,
          }
    }

    const mode = subscription.data.figFileWorkshopMode
    if (mode && new Date() < mode.expiresAt) {
      return {
        enabled: true,
        until: mode.expiresAt,
        id: mode.id,
      }
    }

    return { enabled: false }
  }, [subscription, fallbackEnabled])
}

/**
 * Hook to get the workshop mode status for the currently open file.
 * Original name: $$u4
 * @param fallbackEnabled - Whether to fallback to enabled if not loaded.
 * @returns Workshop mode status object.
 */
export function useCurrentFileWorkshopModeStatus(fallbackEnabled: boolean = false) {
  const openFile = useSelector((state: any) => state.openFile)
  return getWorkshopModeStatus(openFile?.key || '', fallbackEnabled)
}

/**
 * Hook to check if workshop mode is enabled for the current file.
 * Original name: $$p0
 * @param fallbackEnabled - Whether to fallback to enabled if not loaded.
 * @returns True if workshop mode is enabled.
 */
export function isWorkshopModeEnabled(fallbackEnabled: boolean = false): boolean {
  return useCurrentFileWorkshopModeStatus(fallbackEnabled).enabled
}

/**
 * Checks if the workshop mode expiration is valid and not a try file.
 * Original name: $$_3
 * @param file - The file object to check.
 * @returns True if workshop mode expiration is valid and not a try file.
 */
export function isValidWorkshopModeExpiration(file: any): boolean {
  const expiration = atomStoreManager.get(workshopModeExpirationAtom)
  return !!file && !!expiration && new Date() < expiration && !file.isTryFile
}

// Exported aliases for refactored names
export const $D = isWorkshopModeEnabled
export const DG = getWorkshopModeStatus
export const Kc = workshopModeExpirationAtom
export const dk = isValidWorkshopModeExpiration
export const nF = useCurrentFileWorkshopModeStatus
