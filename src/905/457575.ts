import { atom, createRemovableAtomFamily } from '../figma_app/27355'
import { setupRemovableAtomFamily } from '../figma_app/615482'
/**
 * Creates a removable atom family for managing scoped state values
 * Original: o, $$a0, $$s1
 */
interface ScopedStateOptions<T> {
  defaultValue?: T
}

/**
 * Factory function to create a scoped state atom family
 * Original: o
 */
function createScopedStateAtomFamily<T>(options?: ScopedStateOptions<T>) {
  const defaultValue = options?.defaultValue

  // Setup the base atom family for storing scoped values
  const baseAtomFamily = setupRemovableAtomFamily(() => atom<Record<string, T>>({}))

  return createRemovableAtomFamily((scopeId: string | undefined) =>
    atom(
      // Getter - retrieves value for specific scope
      (get) => {
        const scopedValues = get(baseAtomFamily)
        const key = scopeId || ''
        const value = scopedValues[key]
        return value === undefined ? defaultValue : value
      },

      // Setter - updates value for specific scope
      (_get, set, newValue: T | undefined) => {
        set(baseAtomFamily, (prevScopedValues) => {
          const key = scopeId || ''

          // Remove key if new value is undefined
          if (newValue === undefined) {
            const { [key]: removedValue, ...rest } = prevScopedValues
            return rest
          }

          // Update with new value
          return {
            ...prevScopedValues,
            [key]: newValue,
          }
        })
      },
    ),
  )
}

/**
 * Creates a scoped state atom family with a default value
 * Original: $$a0
 */
export function createScopedStateWithDefault<T>(defaultValue: T) {
  return createScopedStateAtomFamily({ defaultValue })
}

/**
 * Creates a scoped state atom family with undefined as default
 * Original: $$s1
 */
export function createScopedState() {
  return createScopedStateAtomFamily()
}

// Export aliases for backward compatibility
export const H = createScopedStateWithDefault
export const q = createScopedState
