import { BillingSections, DashboardSections, MemberSections } from '../905/548208'
import { findMatchingValue } from '../905/807535'

/**
 * Returns the matching billing section or the default overview section.
 * @param sectionKey - The key to match in BillingSections.
 * @returns The matched billing section.
 * (Original: $$a2)
 */
export function getBillingSection(sectionKey: string): BillingSections {
  if (sectionKey) {
    const matched = findMatchingValue(BillingSections, sectionKey)
    if (matched)
      return matched
  }
  return BillingSections.OVERVIEW
}

/**
 * Returns the matching member section or the default abandoned drafts section.
 * @param sectionKey - The key to match in MemberSections.
 * @returns The matched member section.
 * (Original: $$s0)
 */
export function getMemberSection(sectionKey: string): MemberSections {
  if (sectionKey) {
    const matched = findMatchingValue(MemberSections, sectionKey)
    if (matched)
      return matched
  }
  return MemberSections.ABANDONED_DRAFTS
}

/**
 * Determines the dashboard section based on the provided parameters.
 * @param dashboardSection - The dashboard section type.
 * @param sectionKey - The section key.
 * @param resourceState - The resource state object.
 * @returns The resolved section.
 * (Original: $$o1)
 */
export function resolveDashboardSection(dashboardSection: DashboardSections, sectionKey: string, resourceState: { showResourceConnectionInviteModal?: boolean, showResourceConnectionFlyout?: boolean }): BillingSections | MemberSections | string {
  if (dashboardSection === DashboardSections.BILLING) {
    return getBillingSection(sectionKey)
  }
  if (dashboardSection === DashboardSections.CONTENT) {
    if (resourceState.showResourceConnectionInviteModal || resourceState.showResourceConnectionFlyout) {
      return MemberSections.CONNECTED_PROJECTS
    }
    return getMemberSection(sectionKey)
  }
  return sectionKey
}

// Export aliases for backward compatibility
export const J = getMemberSection
export const X$ = resolveDashboardSection
export const nc = getBillingSection
