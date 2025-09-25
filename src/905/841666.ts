import { useSelector } from 'react-redux'
import { getResourceDataOrFallback } from '../905/663269'
import { CommunityHubLikeForProfile, CommunityHubLikeForProfileFromResourceId } from '../figma_app/43951'
import { ResourceTypeNoComment } from '../figma_app/45218'
import { useSubscription } from '../figma_app/288654'

/**
 * Returns the like status and ID for a community hub profile resource.
 * Original function: $$l1
 */
export function getCommunityHubLikeStatus(resourceId: string, resourceType: ResourceTypeNoComment, enabled: boolean = true) {
  // Get the authenticated active community profile from Redux store
  const profile = useSelector<AppState, AppState['authedActiveCommunityProfile']>(state => state.authedActiveCommunityProfile)

  // Prepare subscription payload
  const subscriptionPayload = {
    profileId: profile?.id || '',
    hubFileId: null as string | null,
    pluginId: null as string | null,
  }

  // Assign resource ID based on resource type
  if (resourceType === ResourceTypeNoComment.HUB_FILE) {
    subscriptionPayload.hubFileId = resourceId || null
  }
  else {
    subscriptionPayload.pluginId = resourceId || null
  }

  // Subscribe to community hub like status
  return useSubscription(CommunityHubLikeForProfile, subscriptionPayload, {
    enabled: !!subscriptionPayload.profileId && enabled,
  }).transform(result => [
    !!result.communityHubLike,
    result.communityHubLike?.id || null,
  ])
}

/**
 * Returns the like status and ID for a community hub profile resource by resource ID.
 * Original function: $$d0
 */
export function getCommunityHubLikeStatusByResourceId(resourceId: string, enabled: boolean = true) {
  // Get the authenticated active community profile from Redux store
  const profile = useSelector<AppState, AppState['authedActiveCommunityProfile']>(state => state.authedActiveCommunityProfile)

  // Subscribe to community hub like status for the given resource ID
  return useSubscription(
    CommunityHubLikeForProfileFromResourceId,
    {
      profileId: profile?.id || '',
      resourceId: resourceId || '',
    },
    {
      enabled: !!profile?.id && enabled,
    },
  ).transform(result => [
    !!getResourceDataOrFallback(result.communityHubLikeForResource),
    getResourceDataOrFallback(result.communityHubLikeForResource)?.id || null,
  ])
}

// Export with refactored names for clarity and maintainability
export const B = getCommunityHubLikeStatusByResourceId
export const W = getCommunityHubLikeStatus
