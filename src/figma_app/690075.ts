import { getI18nString } from '../905/303541'
import { cV as getPublisherDetails } from '../figma_app/740025'
import { formatList } from '../figma_app/930338'

/**
 * Formats a list of publisher names with internationalization support.
 * Original function name: $$s2
 * @param publishers - Array of publisher objects
 * @param maxDisplay - Maximum number of publishers to display before grouping as "others"
 * @param nameMapper - Function to map publisher object to display name
 * @returns Formatted string of publisher names
 */
export function formatPublisherNames(publishers: any[], maxDisplay: number, nameMapper: (publisher: any) => string): string {
  if (publishers.length === 0)
    return ''

  if (publishers.length === 1)
    return nameMapper(publishers[0])

  let displayed = publishers.slice(0, maxDisplay - 1)
  let remaining = publishers.slice(maxDisplay - 1)

  if (remaining.length === 0) {
    remaining = [displayed[displayed.length - 1]]
    displayed = displayed.slice(0, displayed.length - 1)
  }

  const othersLabel
    = remaining.length === 1
      ? nameMapper(remaining[0])
      : getI18nString('community.resource.by_x_others', {
          numPublishers: remaining.length,
        })

  const names = displayed.map(nameMapper)
  if (othersLabel)
    names.push(othersLabel)

  return formatList(names)
}

/**
 * Gets the display name for a publisher or formats multiple publisher names.
 * Original function name: $$o1
 * @param resource - Resource object containing publisher info
 * @returns Publisher name or formatted publisher names
 */
export function getPublisherDisplayName(resource: any): string {
  const publisherDetails = getPublisherDetails(resource)
  if (publisherDetails)
    return publisherDetails.name

  const acceptedPublishers = resource.community_publishers.accepted
  return formatPublisherNames(acceptedPublishers, acceptedPublishers.length, p => p.name)
}

/**
 * Collects all user IDs associated with accepted and pending publishers.
 * Original function name: $$l0
 * @param resource - Resource object containing publisher info
 * @returns Array of user IDs
 */
export function collectPublisherUserIds(resource: any): string[] {
  let publishers = resource.community_publishers.accepted as any[] || []
  if (resource.community_publishers.pending) {
    publishers = publishers.concat(resource.community_publishers.pending)
  }

  return publishers.reduce<string[]>((userIds, publisher) => {
    const associatedUserIds = publisher.associated_users?.map((u: any) => u.user_id) || []
    if (publisher.primary_user_id)
      userIds.push(publisher.primary_user_id)
    return userIds.concat(associatedUserIds)
  }, [])
}

// Export refactored names for consistency
export const D = collectPublisherUserIds
export const VH = getPublisherDisplayName
export const eg = formatPublisherNames
