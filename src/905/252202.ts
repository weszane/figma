import { WB } from '../905/761735'
import { LibrarySubscriptionType } from '../figma_app/155728'

/**
 * Updates or creates a library subscription optimistically based on the provided parameters.
 * Original function name: $$a0
 * @param currentSubscription - The current subscription object, if any.
 * @param subscriptionType - The type of subscription (USER or TEAM).
 * @param isSubscribed - Whether the user is subscribed.
 * @param figJamSubscribed - Whether subscribed to FigJam.
 * @param slidesSubscribed - Whether subscribed to Slides.
 * @param buzzSubscribed - Whether subscribed to Buzz.
 * @param additionalData - Additional data for creation.
 * @param documentId - The document ID for the operation.
 */
export function updateSubscriptionOptimistically(
  currentSubscription: any,
  subscriptionType: LibrarySubscriptionType,
  isSubscribed: boolean,
  figJamSubscribed: boolean,
  slidesSubscribed: boolean,
  buzzSubscribed: boolean,
  additionalData: any,
  documentId: any
): void {
  // Helper function to get the subscription key based on type.
  // Original: inline IIFE with switch
  const getSubscriptionKey = (type: LibrarySubscriptionType): string => {
    switch (type) {
      case LibrarySubscriptionType.USER:
        return 'LibraryUserSubscription'
      case LibrarySubscriptionType.TEAM:
        return 'LibraryTeamSubscription'
      default:
        throw new Error('Invalid subscription type')
    }
  }

  const subscriptionKey = getSubscriptionKey(subscriptionType)

  // Early return for update case
  if (currentSubscription?.subscriptionType === subscriptionType && currentSubscription.subscriptionId) {
    WB()?.optimisticallyUpdate({
      [subscriptionKey]: {
        [currentSubscription.subscriptionId]: {
          isSubscribed,
          figJamSubscribed,
          slidesSubscribed,
          buzzSubscribed,
        },
      },
    }, documentId)
    return
  }

  // Create case
  WB().optimisticallyCreate({
    [subscriptionKey]: {
      [`${subscriptionKey}-${performance.now()}`]: {
        ...additionalData,
        isSubscribed,
        figJamSubscribed,
        slidesSubscribed,
        buzzSubscribed,
        canRead: true,
      },
    },
  }, documentId)
}

// Original export name: J
export const J = updateSubscriptionOptimistically
