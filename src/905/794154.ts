import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useDropdownState } from '../905/848862'
import { atomStoreManager, useAtomValueAndSetter } from '../figma_app/27355'
import { jD } from '../figma_app/322845'
import { hw, jh, YH } from '../figma_app/604494'

export function useNavigationStack() {
  const [stack, setStack] = useAtomValueAndSetter(YH)
  const resetSearchQuery = hw()
  const closeDropdown = jh()
  const dispatch = useDispatch()
  const dropdownState = useDropdownState()

  return useMemo(() => {
    function handleClose(forceClose: boolean) {
      jD(dispatch, dropdownState, {
        forceClose,
      }) && closeDropdown()
    }

    return {
      /**
       * Push a new item to the navigation stack
       * @param item - The item to push
       * @param options - Configuration options
       * @param options.shouldResetSearchQuery - Whether to reset search query (default: true)
       */
      push(
        item: unknown,
        { shouldResetSearchQuery = true }: { shouldResetSearchQuery?: boolean } = {},
      ) {
        setStack([item, ...stack])
        shouldResetSearchQuery && resetSearchQuery()
      },

      /**
       * Pop the top item from the navigation stack
       */
      pop() {
        if (stack.length !== 0) {
          setStack(stack.slice(1))
        }
      },

      /**
       * Replace the top item in the navigation stack
       * @param item - The item to replace with
       */
      replace(item: unknown) {
        setStack([item, ...stack.slice(1)])
      },

      /**
       * Close the navigation stack automatically
       */
      autoClose() {
        handleClose(false)
      },

      /**
       * Force close the navigation stack
       */
      close() {
        handleClose(true)
      },

      /**
       * The current item in the navigation stack
       */
      current: stack[0],

      /**
       * Whether the navigation stack is at root level
       */
      isRoot: stack.length === 0,
    }
  }, [dispatch, dropdownState, stack, resetSearchQuery, closeDropdown, setStack])
}

/**
 * Check if the navigation stack is empty
 * @returns True if the navigation stack is empty
 */
export function useIsNavigationStackEmpty() {
  return atomStoreManager.get(YH).length === 0
}

/**
 * Get the current item in the navigation stack
 * @returns The current item in the navigation stack
 */
export function useCurrentNavigationItem() {
  return atomStoreManager.get(YH)[0]
}

// Export aliases for backward compatibility
export const cq = useNavigationStack
export const i8 = useCurrentNavigationItem
export const jX = useIsNavigationStackEmpty
