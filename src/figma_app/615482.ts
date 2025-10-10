import type { Atom, WritableAtom } from 'jotai'
import type { AtomFamily } from 'jotai/vanilla/utils/atomFamily'
import { atom } from 'jotai'
import { debugState } from '../905/407919'
import { atomStoreManager } from '../905/490038'
import { createRemovableAtomFamily } from '../figma_app/27355'
import { openFileKeyAtom } from '../figma_app/516028'

/**
 * Options for removable atom family.
 */
interface RemovableAtomOptions {
  preserveValue: boolean
}

/**
 * Default options for removable atom family.
 */
const defaultRemovableAtomOptions: RemovableAtomOptions = {
  preserveValue: false,
}

/**
 * Type for tracked atom references.
 */
interface TrackedAtomReference<T> {
  atomRef: WeakRef<Atom<T>>
  initialValue: T
}

/**
 * Creates a removable atom family with optional preservation of values.
 * @param initializer - Function to initialize atom family.
 * @param options - Options to control preservation behavior.
 * @returns Atom family instance.
 */
export function setupRemovableAtomFamily<T>(
  initializer: () => Atom<T>,
  options: Partial<RemovableAtomOptions> = {},
): AtomFamily<string, Atom<T>> {
  // Merge options with defaults
  const mergedOptions: RemovableAtomOptions = {
    ...defaultRemovableAtomOptions,
    ...options,
  }

  const removableAtomFamily = createRemovableAtomFamily(initializer)

  const resultAtom = atom(
    (get) => {
      const fileKey = debugState ? get(openFileKeyAtom) : 'FILE_KEY'
      if (!mergedOptions.preserveValue) {
        removableAtomFamily.setShouldRemove((_, key) => key !== fileKey)
      }
      return get(removableAtomFamily(fileKey))
    },
    (get, set, ...args: [T]) => set(removableAtomFamily(get(openFileKeyAtom)) as unknown as WritableAtom<T, [T], void>, ...args),
  )

  // Extend the atom with AtomFamily properties
  Object.assign(resultAtom, {
    getParams: () => removableAtomFamily.getParams(),
    remove: (param: string) => removableAtomFamily.remove(param),
    setShouldRemove: (shouldRemove: ((createdAt: number, param: string) => boolean) | null) =>
      removableAtomFamily.setShouldRemove(shouldRemove),
    unstable_listen: (callback: (event: { type: 'CREATE' | 'REMOVE', param: string, atom: Atom<T> }) => void) =>
      removableAtomFamily.unstable_listen(callback as any),
  })

  return resultAtom as unknown as AtomFamily<string, Atom<T>>
}

/**
 * Stores references to created atoms and their initial values.
 */
const atomReferences: TrackedAtomReference<unknown>[] = []

/**
 * Creates an atom and tracks its reference and initial value.
 * @param initialValue - The initial value for the atom.
 * @returns The created atom.
 */
export function createTrackedAtom<T>(initialValue: T): Atom<T> {
  const trackedAtom = atom(initialValue)
  atomReferences.push({
    atomRef: new WeakRef(trackedAtom),
    initialValue,
  })
  return trackedAtom
}

/**
 * Resets all tracked atoms to their initial values, removing any that have been garbage collected.
 */
export function resetTrackedAtoms(): void {
  for (let i = atomReferences.length - 1; i >= 0; i--) {
    const { atomRef, initialValue } = atomReferences[i]
    const atomInstance = atomRef.deref()
    if (atomInstance) {
      atomStoreManager.set(atomInstance as any, initialValue)
    }
    else {
      atomReferences.splice(i, 1)
    }
  }
}

// Export refactored names for external usage
export const Bc = resetTrackedAtoms
export const Wh = setupRemovableAtomFamily
export const rt = createTrackedAtom
