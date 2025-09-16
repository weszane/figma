import { BuyerAPIHandler } from '../905/180'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { setupLoadingStateHandler } from '../905/696711'
import { logError } from '../905/714362'
import { RK } from '../figma_app/815170'

/**
 * Handles the Stripe manage subscription flow for the buyer portal.
 * Initiates loading state, dispatches meta info, and handles errors.
 * @param e - Redux-like dispatch context
 * @param t - Callback handlers (onSuccess, etc.)
 * @param options - Contains loadingKey for UI state
 */
// Original export let $$c0
export const handleStripeManageSubscription = createOptimistThunk(
  (e, t, { loadingKey }) => {
    // Get buyer portal with current URL as return
    const buyerPortalPromise = BuyerAPIHandler.getBuyerPortal({
      returnUrl: window.location.href,
    })

    // Setup loading state for async operation
    setupLoadingStateHandler(buyerPortalPromise, e, loadingKey)

    buyerPortalPromise
      .then(({ data }) => {
        // Dispatch meta info from response
        e.dispatch(
          RK({
            rawInput: data.meta,
          }),
        )
        // Call success handler if provided
        t.onSuccess?.()
      })
      .catch((error) => {
        // Log error for diagnostics
        logError('community', 'Failed to get buyer portal', {
          reason: error,
        })
        // Notify user of error via visual bell
        e.dispatch(
          VisualBellActions.enqueue({
            message: getI18nString(
              'community.actions.an_error_occured_while_trying_to_purchase_please_contact_support',
            ),
            error: true,
          }),
        )
      })
  },
  () => 'M10N_STRIPE_MANAGE_SUBSCRIPTION',
)

// Export with refactored name for clarity
export const v = handleStripeManageSubscription
