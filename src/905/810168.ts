import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { screenReaderEnableAction } from "../905/193529"
/**
 * Custom hook to check if screen reader is enabled
 * Original name: $$s0
 */
export function useIsScreenReaderEnabled(): boolean {
  return useSelector<AppState, boolean>(state => !!state.screenreader?.enabled)
}

/**
 * Custom hook to manage screen reader state
 * Original name: $$o1
 */
export function useScreenReaderManager(): [
  boolean,
  (enabled: boolean, scope?: string) => void,
] {
  const dispatch = useDispatch()
  const isEnabled = useSelector<AppState, boolean>(state => state.screenreader?.enabled ?? false)
  const user = useSelector<AppState, AppState["user"]>(state => state.user)

  const setScreenReaderEnabled = useCallback((
    enabled: boolean,
    scope?: string,
  ) => {
    dispatch(screenReaderEnableAction({
      enabled,
      scope,
      user,
    }))
  }, [dispatch, user])

  return [isEnabled, setScreenReaderEnabled]
}

// Export aliases for backward compatibility
export const e = useIsScreenReaderEnabled
export const y = useScreenReaderManager
