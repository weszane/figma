import { GroupType } from '../905/441038'
import { findMatchingValue } from '../905/807535'

/**
 * Returns a matching group value from GroupType, or the default group if not found.
 * @param groupName - The name of the group to find.
 * @returns The matching group value or the default group.
 * (Original function: $$a0)
 */
export function getGroupOrDefault(groupName?: string): string {
  return findMatchingValue(GroupType, groupName || GroupType.MEMBERS) || GroupType.MEMBERS
}

// Export with original alias for backward compatibility (Original export: g)
export const g = getGroupOrDefault
