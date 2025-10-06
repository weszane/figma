import { useSelector } from "react-redux"
/**
 * Custom hook to determine if the current view is fullscreen and dev mode variables table is shown
 * Original name: $$r0
 */
export function useIsFullscreenWithDevVariables(): boolean {
  return useSelector<AppState, boolean>(state =>
    state.selectedView.view === "fullscreen"
    && !!state.selectedView.showDevModeVariablesTable,
  )
}

/**
 * Alias for useIsFullscreenWithDevVariables hook
 * Original name: e
 */
export const e = useIsFullscreenWithDevVariables
