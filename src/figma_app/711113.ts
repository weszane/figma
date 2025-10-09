import { FUserRoleType } from "../figma_app/191312"
import { getCurrentUserOrgUser } from "../figma_app/951233"

/**
 * Enum representing the publisher status for a plugin
 * NONE = 0 - No relationship
 * PENDING = 1 - Pending approval
 * ACCEPTED = 2 - Accepted as publisher
 * ADMIN = 3 - Admin privileges
 */
enum PublisherStatus {
  NONE = 0,
  PENDING = 1,
  ACCEPTED = 2,
  ADMIN = 3,
}

/**
 * Determines the publisher status of a user for a specific plugin
 * @param context - Object containing user information
 * @param pluginData - Object containing plugin publisher data
 * @returns PublisherStatus - The status of the user regarding the plugin
 */
export function getPluginPublisherStatus(
  context: any,
  pluginData: {
    plugin_publishers?: {
      accepted: Array<{ id: string }>
      pending?: Array<{ id: string }>
    }
    org_id?: string
  },
): PublisherStatus {
  const { user } = context
  const { plugin_publishers } = pluginData

  // Return NONE if no publishers or user data
  if (!plugin_publishers || !user) {
    return PublisherStatus.NONE
  }

  const { accepted, pending } = plugin_publishers

  // Check if user is an accepted publisher
  if (accepted.some(publisher => publisher.id === user.id)) {
    return PublisherStatus.ACCEPTED
  }

  // Check if user has a pending publisher request
  if (pending && pending.some(publisher => publisher.id === user.id)) {
    return PublisherStatus.PENDING
  }

  // Check if user is an admin of the organization
  const orgUser = getCurrentUserOrgUser(context)
  if (orgUser && orgUser.permission === FUserRoleType.ADMIN && orgUser.org_id === pluginData.org_id) {
    return PublisherStatus.ADMIN
  }

  // Default to no status
  return PublisherStatus.NONE
}

/**
 * Checks if the publisher status is PENDING
 * @param status - The publisher status to check
 * @returns boolean - True if status is PENDING
 */
export function isPublisherPending(status: PublisherStatus): boolean {
  return status === PublisherStatus.PENDING
}

/**
 * Checks if the publisher status is ACCEPTED or ADMIN
 * @param status - The publisher status to check
 * @returns boolean - True if status is ACCEPTED or ADMIN
 */
export function isPublisherAcceptedOrAdmin(status: PublisherStatus): boolean {
  return status === PublisherStatus.ACCEPTED || status === PublisherStatus.ADMIN
}

// Export aliases for backward compatibility
export const A = getPluginPublisherStatus
export const E3 = isPublisherAcceptedOrAdmin
export const jT = isPublisherPending
