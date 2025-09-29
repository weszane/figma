import type { PrimitiveAtom } from 'jotai'
import { useSetAtom } from 'jotai'
import { useSingleEffect } from '../905/791079'
import { generateUUIDv4 } from '../905/871474'
import { atom, useAtomWithSubscription } from '../figma_app/27355'
/**
 * Atom for storing a unique ID (string or undefined).
 */
const uniqueIdAtom = atom<string | undefined>(undefined) as PrimitiveAtom<string | undefined>

/**
 * Hook to initialize a unique ID on mount and clear it on unmount.
 * Uses useSingleEffect to set a generated UUID and provide cleanup.
 */
export function useInitializeUniqueId(): void {
  const setUniqueId = useSetAtom(uniqueIdAtom)
  useSingleEffect(() => {
    setUniqueId(generateUUIDv4())
    return () => setUniqueId(undefined)
  })
}

/**
 * Hook to subscribe to the unique ID atom and return its current value.
 * @returns The current unique ID (string or undefined).
 */
export function useUniqueId(): string | undefined {
  return useAtomWithSubscription(uniqueIdAtom)
}

// Aliases for backward compatibility (original exports T and X)
export const T = useInitializeUniqueId
export const X = useUniqueId
