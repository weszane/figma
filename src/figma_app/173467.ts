import { getI18nString } from '../905/303541'
import { GroupType } from '../905/441038'
import { findMatchingValue } from '../905/807535'
import { throwTypeError } from '../figma_app/465776'
import { DashboardSection } from '../figma_app/650409'

/**
 * Returns the i18n string for the given group type.
 * Throws a type error if the group type is not MEMBERS.
 * @param groupType - The group type to get the string for.
 * @returns The i18n string for MEMBERS group type.
 * @throws {TypeError} If groupType is not MEMBERS.
 * (Original function: $$l0)
 */
export function getGroupTypeLabel(groupType: GroupType): string {
  if (groupType === GroupType.MEMBERS) {
    return getI18nString('license_group_admin_tab.members')
  }
  throwTypeError(groupType)
}

/**
 * The origin tab identifier.
 * (Original variable: $$d1)
 */
export const originTab: string = 'originTab'

/**
 * Allowed dashboard sections for matching.
 * (Original variable: c)
 */
const allowedSections: DashboardSection[] = [DashboardSection.BILLING]

/**
 * Finds a matching dashboard section if it is allowed.
 * @param section - The section to match.
 * @returns The matched section if allowed, otherwise undefined.
 * (Original function: $$u2)
 */
export function getAllowedDashboardSection(section: DashboardSection): DashboardSection | undefined {
  const matchedSection = findMatchingValue(DashboardSection, section)
  if (!matchedSection)
    return undefined
  return allowedSections.includes(matchedSection) ? matchedSection : undefined
}

// Export aliases for backward compatibility with original names
export const o9 = getGroupTypeLabel
export const u5 = originTab
export const vQ = getAllowedDashboardSection
