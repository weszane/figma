import { CommunityPayment } from '../figma_app/43951'
import { hasMonetizedResourceMetadata } from '../figma_app/45218'
import { useSubscription } from '../figma_app/288654'
import { isSubscriptionActive, mapPaymentToApiFormat } from '../figma_app/808294'
/**
 * Retrieves the payment information for a community resource, prioritizing subscription data if available.
 * @param resource - The community resource object.
 * @returns The payment information in API format or the original payment data.
 * (Original function: $$o0)
 */
export function getCommunityResourcePayment(resource: ObjectOf): any {
  const subscription = useSubscription(
    CommunityPayment,
    {
      monetizedResourceMetadataId: resource?.monetized_resource_metadata?.id ?? '',
    },
    {
      enabled: hasMonetizedResourceMetadata(resource),
    },
  )

  if (subscription.status === 'loaded' && subscription.data.communityResourcePayment) {
    return mapPaymentToApiFormat(subscription.data.communityResourcePayment)
  }
  return resource?.community_resource_payment
}

/**
 * Checks if the community resource payment is an active subscription.
 * @param resource - The community resource object.
 * @returns True if the subscription is active, false otherwise.
 * (Original function: $$l1)
 */
export function isCommunityResourceSubscriptionActive(resource: ObjectOf): boolean {
  const payment = getCommunityResourcePayment(resource)
  return isSubscriptionActive(payment)
}

// Refactored exports for clarity and traceability
export const I = getCommunityResourcePayment // Original: $$o0
export const _ = isCommunityResourceSubscriptionActive // Original: $$l1
