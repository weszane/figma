import { sendWithRetry } from '../905/910117'
import { getResourceTypeLabel } from '../figma_app/471982'
/**
 * Checks if a user is a pending plugin publisher.
 * @param plugin - The plugin object.
 * @param userId - The user ID to check.
 * @returns True if the user is a pending publisher, false otherwise.
 * (Original: $$isPendingPublisher)
 */
export function isPendingPublisher(plugin: any, userId: string): boolean {
  return !!plugin && !!plugin.plugin_publishers?.pending?.some((publisher: any) => publisher.id === userId)
}

/**
 * Checks if a user is an accepted plugin publisher.
 * @param plugin - The plugin object.
 * @param userId - The user ID to check.
 * @returns True if the user is an accepted publisher, false otherwise.
 * (Original: $$isAcceptedPublisher)
 */
export function isAcceptedPublisher(plugin: any, userId: string): boolean {
  return !!plugin && !!plugin.plugin_publishers?.accepted?.some((publisher: any) => publisher.id === userId)
}

/**
 * Checks if a user is either a pending or accepted plugin publisher.
 * @param plugin - The plugin object.
 * @param userId - The user ID to check.
 * @returns True if the user is a publisher, false otherwise.
 * (Original: $$isAnyPublisher)
 */
export function isAnyPublisher(plugin: any, userId: string): boolean {
  return isPendingPublisher(plugin, userId) || isAcceptedPublisher(plugin, userId)
}

/**
 * Sends publisher invites for a plugin.
 * @param plugin - The plugin object.
 * @param emails - Array of emails to invite.
 * @returns An object containing the updated plugin resource and any errors.
 * (Original: $$sendPublisherInvites)
 */
export async function sendPublisherInvites(plugin: any, emails: string[]): Promise<{ resource: any, errors: any }> {
  const { data } = await sendWithRetry.post(
    `/api/${getResourceTypeLabel(plugin, { pluralized: true })}/${plugin.id}/publisher_invites`,
    { emails },
  )
  return {
    resource: data.meta.plugin,
    errors: data.meta.errors,
  }
}

// Export aliases for backward compatibility
export const Ro = isAcceptedPublisher // (Original: Ro)
export const dN = isPendingPublisher // (Original: dN)
export const jY = isAnyPublisher // (Original: jY)
export const o0 = sendPublisherInvites// (Original: o0)
