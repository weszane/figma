import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { hideDropdownAction, showDropdownThunk } from '../905/929976'

interface DropdownState {
  type?: string
  [key: string]: any
}

interface DropdownControls {
  showing: boolean
  hide: () => void
  show: (options?: Record<string, any>) => void
  toggle: (options?: Record<string, any>) => void
  [key: string]: any
}

/**
 * Hook to get the current dropdown state from Redux store
 */
export function useDropdownState(): DropdownState | null {
  return useSelector((state: any) => state.dropdownShown)
}

/**
 * Hook to manage dropdown visibility and actions for a specific dropdown type
 * @param dropdownType - The type of dropdown to manage
 */
export function useDropdown(dropdownType: string): DropdownControls {
  const dispatch = useDispatch<AppDispatch>()
  const dropdownState = useDropdownState()

  return useMemo(() => {
    const {
      type,
      ...otherProps
    } = dropdownState || {}

    const isShowing = type === dropdownType

    function hideDropdown() {
      dispatch(hideDropdownAction())
    }

    function showDropdown(options: Record<string, any> = {}) {
      dispatch(showDropdownThunk({
        ...options,
        type: dropdownType,
      }))
    }

    return {
      ...otherProps,
      showing: isShowing,
      hide: hideDropdown,
      show: showDropdown,
      toggle(options: Record<string, any> = {}) {
        isShowing ? hideDropdown() : showDropdown(options)
      },
    }
  }, [dispatch, dropdownState, dropdownType])
}

/**
 * Atom for subscribing to dropdown state changes
 */
export const dropdownStateAtom = createReduxSubscriptionAtomWithState((state: any) => state.dropdownShown)

// Legacy exports for backward compatibility
export const BK = useDropdown
export const Um = useDropdownState
export const xc = dropdownStateAtom
