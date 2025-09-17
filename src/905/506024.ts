import { getAnonymousId } from '../905/449184'
import { isWorkshopModeActive } from '../figma_app/193867'
/**
 * Returns the user ID if available, otherwise returns an anonymous ID if workshop mode is active.
 * @param context - The context object containing user and selectedView information.
 * @returns The user ID, anonymous ID, or undefined.
 * (Original function name: $$a0)
 */
export function getUserOrAnonymousId(context: { user?: { id?: string }, selectedView?: any }): string | undefined {
  if (context.user?.id) {
    return context.user.id
  }
  if (context.selectedView && isWorkshopModeActive(context.selectedView)) {
    return getAnonymousId()
  }
  return undefined
}

// Export with a clear alias for usage consistency (original export: s)
export const s = getUserOrAnonymousId
