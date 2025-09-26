import { getStorage } from '../905/657224'

const STORAGE_KEY = 'sidebar-collapsed-sections'

/**
 * Compares two sidebar section objects for equality.
 * For custom sections, compares type, id, orgId, and sectionId.
 * For other sections, compares type, id, and orgId.
 *
 * @param section1 - First section to compare
 * @param section2 - Second section to compare
 * @returns True if sections are equal, false otherwise
 */
function areSectionsEqual(section1: any, section2: any): boolean {
  if (section1.id === 'custom') {
    return (
      section1.type === section2.type
      && section1.id === section2.id
      && section1.orgId === section2.orgId
      && section1.sectionId === section2.sectionId
    )
  }
  return (
    section1.type === section2.type
    && section1.id === section2.id
    && section1.orgId === section2.orgId
  )
}

/**
 * Gets the list of collapsed sidebar sections from storage.
 *
 * @returns Array of collapsed sections
 */
function getCollapsedSections(): any[] {
  return getStorage().get(STORAGE_KEY) || []
}

/**
 * Toggles the collapsed state of a sidebar section.
 *
 * @param section - The section to toggle
 * @param isCollapsed - Whether the section should be collapsed
 */
export function toggleSidebarSectionCollapsedState(section: any, isCollapsed: boolean): void {
  const storage = getStorage()
  const collapsedSections = getCollapsedSections()

  const isCurrentlyCollapsed = collapsedSections.find(s => areSectionsEqual(s, section))

  if (isCurrentlyCollapsed) {
    if (isCollapsed) {
      // Already collapsed, no change needed
      return
    }
    // Remove from collapsed list
    storage.set(
      STORAGE_KEY,
      collapsedSections.filter(s => !areSectionsEqual(s, section)),
    )
  }
  else {
    if (!isCollapsed) {
      // Already expanded, no change needed
      return
    }
    // Add to collapsed list
    storage.set(STORAGE_KEY, [...collapsedSections, section])
  }
}

/**
 * Gets a set of collapsed section identifiers.
 * For custom sections, uses sectionId; for favorited sections, uses id.
 *
 * @returns Set of collapsed section identifiers
 */
export function getCollapsedSectionIdentifiers(): Set<string> {
  const identifiers = new Set<string>()
  const collapsedSections = getCollapsedSections()

  collapsedSections.forEach((section) => {
    if (section.id === 'custom' && section.sectionId) {
      identifiers.add(section.sectionId)
    }
    else if (section.id === 'favorited') {
      identifiers.add(section.id)
    }
  })

  return identifiers
}

export const CL = getCollapsedSectionIdentifiers
export const Fp = toggleSidebarSectionCollapsedState
