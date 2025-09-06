import type { Atom, WritableAtom } from 'jotai'
import { atom } from 'jotai'
import { atomStoreManager } from '../905/490038'

/**
 * Creates a Jotai atom with custom mount logic for managing state and subscriptions.
 *
 * @param target - The target object, may have a 'write' property.
 * @param onMountHandler - Function called on atom mount, receives {target, setSelf, onSet}.
 * @returns A Jotai atom with custom onMount behavior.
 *
 * Original function name: $$a0
 */
export function setupAtomWithMount<T>(target: Atom<T> | WritableAtom<T, unknown[], void>, onMountHandler: (params: {
  target: any
  setSelf: (value: any) => void
  onSet: (value: any) => void
}) => (() => void) | void) {
  let onSetCallback: ((value: any) => void) | null = null

  // Create atom depending on whether 'write' exists in target
  const jotaiAtom = 'write' in target
    ? atom(
      get => get(target),
      (get, set, ...args) => set(target, ...args),
    )
    : atom(get => get(target)) as WritableAtom<unknown, unknown[], void>

  // Attach custom onMount logic
  jotaiAtom.onMount = (setSelf: (...value: any[]) => any): () => void => {
    let cleanup: (() => void) | void
    try {
      cleanup = onMountHandler({
        target,
        setSelf,
        onSet: (value) => {
          onSetCallback = value
        },
      })
    }
    catch (err: any) {
      console.error(err)
      return err
    }

    // Initial set from atomStoreManager
    onSetCallback?.(atomStoreManager.get(target))

    // Subscribe to atomStoreManager updates
    const unsubscribe = atomStoreManager.sub(target, () => {
      onSetCallback?.(atomStoreManager.get(target))
    })

    // Cleanup function for unmount
    return () => {
      cleanup?.()
      unsubscribe()
    }
  }

  return jotaiAtom
}

// Export with original name for traceability
export const y = setupAtomWithMount
