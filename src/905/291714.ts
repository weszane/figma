import { createContext, memo, useContext, useMemo, useReducer } from 'react'
import { jsx } from 'react/jsx-runtime'
/**
 * Initial state for popover context (a)
 */
const initialPopoverState = {
  isPopoverOpen: false,
}

/**
 * Popover context and provider (s)
 */
type PopoverState = typeof initialPopoverState
interface PopoverAction { type: 'set popover open', payload: boolean }
interface PopoverContextType {
  state: PopoverState
  dispatch: React.Dispatch<PopoverAction>
}

const PopoverContext = createContext<PopoverContextType>({
  state: initialPopoverState,
  dispatch: () => {},
})

/**
 * Popover reducer (o)
 * @param state Current popover state
 * @param action Action to update popover state
 * @returns Updated popover state
 */
function popoverReducer(
  state: PopoverState,
  action: PopoverAction,
): PopoverState {
  if (action.type === 'set popover open') {
    return {
      ...state,
      isPopoverOpen: action.payload,
    }
  }
  return state
}

/**
 * PopoverProvider component ($$l0)
 * Provides popover state and dispatch to children
 */
export const PopoverProvider = memo((
  props: React.PropsWithChildren<unknown>,
) => {
  const [state, dispatch] = useReducer(popoverReducer, initialPopoverState)
  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  )
  return jsx(PopoverContext.Provider, {
    value: contextValue,
    children: props.children,
  })
})

/**
 * usePopoverContext hook ($$d1)
 * @returns Popover context value
 */
export function usePopoverContext() {
  return useContext(PopoverContext)
}

/**
 * useIsPopoverClosed hook ($$c2)
 * @returns True if popover is closed
 */
export function useIsPopoverClosed() {
  return !usePopoverContext().state.isPopoverOpen
}

// Refactored exports
export const IA = PopoverProvider
export const Wv = usePopoverContext
export const _r = useIsPopoverClosed
