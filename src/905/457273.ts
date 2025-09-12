import { preventAndStopEvent } from '../905/955878'

/**
 * Handles keyboard navigation for a list, triggering the provided callback with the new index.
 * Original function name: $$r0
 *
 * @param onNavigate - Callback to handle navigation, receives the new index.
 * @returns A keyboard event handler function.
 */
export function setupKeyboardNavigationHandler(onNavigate: (newIndex: number) => void) {
  return (
    currentIndex: number | null,
    _unused: unknown, // original parameter 't', not used in logic
    event: React.SyntheticEvent,
  ) => {
  // Handle Ctrl+N for next navigation
    if (event.key === 'n' && event.ctrlKey) {
      if (currentIndex === null) {
        onNavigate(0)
      }
      else if (currentIndex !== null && currentIndex !== undefined) {
        onNavigate(currentIndex + 1)
      }
      preventAndStopEvent(event)
      return
    }

    // Handle Ctrl+P for previous navigation
    if (event.key === 'p' && event.ctrlKey) {
      if (currentIndex === null) {
        onNavigate(0)
      }
      else if (currentIndex !== 0 && currentIndex !== null && currentIndex !== undefined) {
        onNavigate(currentIndex - 1)
      }
      preventAndStopEvent(event)
    }
  }
}

// Export with refactored name
export const R = setupKeyboardNavigationHandler
