import { getResourceDataOrFallback } from '../905/723791'
import { FavoritesByResourceId } from '../figma_app/43951'
import { useSubscription } from '../figma_app/288654'
import { eU, tW } from '../figma_app/863319'

interface FavoriteHookResult {
  status: string
  favorite: any
  hasMaxFavorites: boolean
  userSidebarSections: any
  orderedSidebarSections: any[]
}



/**
 * Custom hook to fetch and process favorite resource data
 * Original function name: $$o0
 */
export function useFavoriteResource(
  resourceId: string,
  resourceType: string,
  orgId: string | null = null,
  teamId: string | null = null,
): FavoriteHookResult {
  // Subscribe to favorite resource data
  const subscriptionResult = useSubscription(FavoritesByResourceId, {
    resourceId,
    resourceType,
    orgId,
    teamId: orgId ? null : teamId,
  })

  // Process the favorite data if available
  const favoriteData = subscriptionResult.data
    ? eU(subscriptionResult.data, resourceType)
    : undefined

  // Determine if maximum favorites limit has been reached
  const hasReachedMaxFavorites = !!subscriptionResult.data?.favoritedResources?.numFavorites
    && tW(subscriptionResult.data?.favoritedResources.numFavorites)

  // Get user sidebar sections with fallback
  const userSidebarSections = subscriptionResult.data?.currentUser
    ? getResourceDataOrFallback(subscriptionResult.data.currentUser.userSidebarSections)
    : null

  // Get ordered sidebar sections from user preferences
  const orderedSidebarSections = subscriptionResult.data?.currentUser?.baseOrgUser?.fileBrowserPreferences?.orderedSidebarSections

  return {
    status: subscriptionResult.status,
    favorite: favoriteData,
    hasMaxFavorites: hasReachedMaxFavorites,
    userSidebarSections,
    orderedSidebarSections,
  }
}

// Export alias for backward compatibility
// Original export name: Y
export const Y = useFavoriteResource
