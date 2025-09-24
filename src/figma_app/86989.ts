import type { WelcomeUser } from '../../types/app'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAssociatedUserProfiles } from '../905/11536'
import { showModal, showModalHandler } from '../905/156213'
import { CommunityCheckoutModal } from '../905/193918'
import { AUTH_INIT } from '../905/194276'
import { SubscriptionStatus } from '../905/272080'
import { getI18nString } from '../905/303541'
import { selectCurrentUser } from '../905/372672'
import { debugState } from '../905/407919'
import { trackEventAnalytics } from '../905/449184'
import { FlashActions } from '../905/573154'
import { handleStripeManageSubscription } from '../905/581647'
import { getFeatureFlags } from '../905/601108'
import { customHistory } from '../905/612521'
import { logger } from '../905/651849'
import { getStorage } from '../905/657224'
import { AuthModal } from '../905/749159'
import { PrePurchaseUserSelectorModal } from '../905/750915'
import { FreemiumApiPreCheckoutModal, ModalType } from '../905/837980'
import { getCommunityResourcePayment } from '../figma_app/4253'
import { hasClientMeta, hasFreemiumCode, hasMonetizedResourceMetadata, isPlugin, isThirdPartyMonetized, isWidget } from '../figma_app/45218'
import { addResourceToRecentsByEditorType } from '../figma_app/147952'
import { isMigratingPlugin, manifestContainsWidget } from '../figma_app/155287'
import { getPluginMetadata, getPluginVersion } from '../figma_app/300692'
import { mapResourceType } from '../figma_app/471982'
import { isResourcePendingPublishing } from '../figma_app/777551'
import { isPaymentFailed, isStatus, isSubscriptionActive, partitionUsersByPurchaseEligibility } from '../figma_app/808294'
import { usePluginedWidgets, usePublishedPlugins } from '../figma_app/844435'

/**
 * Types for resource and user objects used in payment and checkout logic.
 */
export interface CommunityUser {
  byId: Record<string, { id: string, created_at: string }>
  id: string
  associated_users?: { user_id: string }[]
  primary_user_id?: string
  // Add other relevant user properties as needed
}

export interface MonetizedResourceMetadata {
  id: string
  // Add other relevant resource metadata properties as needed
}

export interface CommunityResource {
  id: string
  monetized_resource_metadata?: MonetizedResourceMetadata
  community_resource_payment?: any
  // Add other relevant resource properties as needed
}

/**
 * Initiates the community checkout modal for a given user and resource.
 * @param user - The user initiating the checkout.
 * @param resource - The resource to be purchased.
 * @param onSuccess - Callback for successful checkout.
 * @param onCancel - Callback for checkout cancellation.
 */
export function setupCommunityCheckoutHandler(user: WelcomeUser, resource: CommunityResource, onSuccess?: () => void, onCancel?: () => void) {
  return (dispatch: any) => {
    dispatch(
      showModal({
        type: CommunityCheckoutModal.type,
        data: {
          userId: user.id,
          resource,
          onSuccess: () => {
            dispatch((innerDispatch: any) => {
              if (isPlugin(resource) || isWidget(resource)) {
                innerDispatch(addResourceToRecentsByEditorType(resource, user.id))
              }
              onSuccess && onSuccess()
            })
          },
          onCancel,
        },
      }),
    )
  }
}

/**
 * Handles the payment flow for a community resource.
 * @param dispatch - Redux dispatch function.
 * @param user - The user initiating the payment.
 * @param resource - The resource to be purchased.
 * @param localResource - Local resource data if any.
 * @param plugin - Plugin data if any.
 * @param modalType - Type of modal to show.
 */
export function handleCommunityResourcePayment(dispatch: any, user: WelcomeUser, resource: CommunityResource, localResource: any, plugin: any, modalType: ModalType) {
  const isAdminPublishing = getFeatureFlags().community_hub_admin && resource && isResourcePendingPublishing(resource)

  return new Promise<void>((resolve) => {
    const proceedCheckout = () => {
      if (user) {
        if (localResource || isAdminPublishing) {
          const onSuccess = () => {
            setLocalResourcePaymentStatus({ type: 'PAID' })
            resolve()
          }
          dispatch((innerDispatch: any) => {
            innerDispatch(
              showModal({
                type: CommunityCheckoutModal.type,
                data: {
                  userId: user.id,
                  resource,
                  localResource,
                  onSuccess,
                  onCancel: resolve,
                  noInteractionMode: true,
                },
              }),
            )
          })
          return
        }
        if (hasMonetizedResourceMetadata(resource)) {
          dispatch(setupCommunityCheckoutHandler(user, resource, resolve, resolve))
        }
        else {
          logger.error('Can only initiate checkout for a monetized or local resource.')
        }
      }
      else {
        dispatch((innerDispatch: any) => {
          innerDispatch(
            AUTH_INIT({
              origin: 'freemium_checkout_modal_in_open_session',
              redirectUrl: customHistory.location.pathname,
              signedUpFromOpenSession: true,
            }),
          )
          innerDispatch(
            showModalHandler({
              type: AuthModal,
              data: {
                headerText: getI18nString('fullscreen.toolbar.log_in_to_do_more_with_figjam'),
              },
            }),
          )
        })
      }
    }

    if (modalType === ModalType.SKIP) {
      proceedCheckout()
    }
    else {
      dispatch(
        showModal({
          type: FreemiumApiPreCheckoutModal.type,
          data: {
            type: user ? modalType || ModalType.PAID_FEATURE : ModalType.LOGGED_OUT,
            onContinue: proceedCheckout,
            onClose: resolve,
            plugin: (resource && getPluginVersion(resource)) || localResource || plugin,
            monetizedResourceMetadata: resource?.monetized_resource_metadata,
          },
        }),
      )
    }
  })
}

/**
 * Initiates the purchase flow for a resource, showing appropriate modals.
 * @param resource - The resource to purchase.
 */
export function initiateResourcePurchaseFlow(resource: CommunityResource) {
  const dispatch = useDispatch<AppDispatch>()
  const activeProfile = useSelector((state: any) => state.authedActiveCommunityProfile)
  const authedUsers = useSelector((state: any) => state.authedUsers)
  const payment = getCommunityResourcePayment(resource)

  return useCallback(() => {
    if (!resource)
      return

    const hasActivePayment = isSubscriptionActive(payment)
    const isMonetized = hasMonetizedResourceMetadata(resource)

    trackEventAnalytics('cmty_resource_usage_action', {
      resourceType: mapResourceType(resource),
      resourceId: resource.id,
      profileId: activeProfile?.id,
      hasActiveCommunityResourcePayment: hasActivePayment,
      isMonetizedResource: isMonetized,
    })

    if (!isMonetized || hasActivePayment || !isUserEligibleForPurchase(activeProfile, authedUsers, resource)) {
      return
    }

    const associatedProfiles = getAssociatedUserProfiles({
      authedActiveCommunityProfile: activeProfile,
      authedUsers,
    })

    const { usersCanPurchase, publishers } = partitionUsersByPurchaseEligibility(associatedProfiles, resource)

    trackEventAnalytics('Checkout Flow Entered', {
      resourceType: mapResourceType(resource),
      resourceId: resource.id,
      numLoggedInAssociatedUsersThatCanPurchase: usersCanPurchase.length,
      numLoggedInAssociatedPublishers: publishers.length,
    })

    if (usersCanPurchase.length === 1 && publishers.length === 0) {
      dispatch(setupCommunityCheckoutHandler(usersCanPurchase[0], resource))
      return
    }

    dispatch(
      showModalHandler({
        type: PrePurchaseUserSelectorModal,
        data: {
          onUserSelect: (selectedUser: WelcomeUser) => {
            trackEventAnalytics('Pre Purchase User Selector Modal - User Selected', {
              resourceType: mapResourceType(resource),
              resourceId: resource.id,
              userIdForPurchase: selectedUser.id,
            })
            dispatch(setupCommunityCheckoutHandler(selectedUser, resource))
          },
          resource,
        },
      }),
    )
  }, [resource, payment, activeProfile, authedUsers, dispatch])
}

/**
 * Checks if a user is eligible to purchase a resource.
 * @param activeProfile - The active community profile.
 * @param authedUsers - List of authenticated users.
 * @param resource - The resource to check.
 */
export function isUserEligibleForPurchase(activeProfile: WelcomeUser, authedUsers: WelcomeUser, resource: CommunityResource): boolean {
  if (!hasMonetizedResourceMetadata(resource))
    return false

  const associatedProfiles = getAssociatedUserProfiles({
    authedActiveCommunityProfile: activeProfile,
    authedUsers,
  })

  const { usersCanPurchase, publishers } = partitionUsersByPurchaseEligibility(associatedProfiles, resource)

  return (
    (usersCanPurchase.length !== 0 || publishers.length !== 0)
    && (usersCanPurchase.length !== 0 || publishers.length === 0)
  )
}

/**
 * Handles redirecting to Stripe for managing subscriptions.
 * @param resource - The resource for which to manage subscription.
 */
export function handleStripeSubscriptionRedirect(resource: CommunityResource) {
  const dispatch = useDispatch<AppDispatch>()
  const payment = getCommunityResourcePayment(resource)

  return useCallback(() => {
    if (resource && isSubscriptionActive(payment)) {
      dispatch(FlashActions.flash(getI18nString('community.buyer.redirecting_to_stripe')))
      dispatch(handleStripeManageSubscription({}))
    }
  }, [resource, payment, dispatch])
}

/**
 * Checks if a resource has an active subscription.
 * @param resource - The resource to check.
 * @param payments - Payment state object.
 */
export function isResourceSubscriptionActive(resource: CommunityResource, payments: Record<string, any>): boolean {
  const payment = payments?.[resource.monetized_resource_metadata?.id] || resource.community_resource_payment
  return isSubscriptionActive(payment)
}

/**
 * Checks if a user is a publisher for a resource.
 * @param resource - The resource to check.
 * @param user - The user to check.
 */
export function isUserPublisherForResource(resource: CommunityResource, user: WelcomeUser): boolean {
  const { publishers } = partitionUsersByPurchaseEligibility([user], resource)
  return publishers.length > 0
}

/**
 * Determines if a resource is eligible for purchase.
 * @param resource - The resource to check.
 * @param payments - Payment state object.
 * @param user - The user to check.
 */
function isResourceEligibleForPurchase(
  resource: CommunityResource,
  payments: Record<string, any>,
  user?: WelcomeUser,
): boolean {
  if (
    !resource
    || !hasMonetizedResourceMetadata(resource)
    || hasFreemiumCode(resource)
    || (!hasClientMeta(resource) && (isMigratingPlugin(resource) || isThirdPartyMonetized(resource)))
    || (user && isUserPublisherForResource(resource, user))
  ) {
    return false
  }

  const hasActiveSubscription = isResourceSubscriptionActive(resource, payments)

  // Check for payment failure
  const paymentFailed = (() => {
    const payment = payments?.[resource.monetized_resource_metadata?.id] || resource.community_resource_payment
    return payment && isPaymentFailed(payment)
  })()

  return !(hasActiveSubscription && !paymentFailed)
}

/**
 * Selects the community payments state from Redux.
 */
export const selectCommunityPayments = () => useSelector((state: any) => state.communityPayments)

/**
 * Checks if a resource is eligible for purchase using Redux state.
 * @param resource - The resource to check.
 */
export function checkResourceEligibility(resource: CommunityResource) {
  return isResourceEligibleForPurchase(resource, selectCommunityPayments(), selectCurrentUser())
}

/**
 * Checks if a resource has an active subscription using Redux state.
 * @param resource - The resource to check.
 */
export function checkResourceSubscriptionActive(resource: CommunityResource) {
  const payments = selectCommunityPayments()
  return hasMonetizedResourceMetadata(resource) && isResourceSubscriptionActive(resource, payments)
}

/**
 * Checks resource eligibility using debug state.
 * @param resource - The resource to check.
 */
export function checkResourceEligibilityDebug(resource: CommunityResource) {
  return isResourceEligibleForPurchase(
    resource,
    debugState && debugState.getState().communityPayments,
    debugState && debugState.getState().user || undefined,
  )
}

const LOCAL_RESOURCE_PAYMENT_KEY = 'local-resource-payment'

/**
 * Enum for local resource payment status.
 */
export enum LocalResourcePaymentStatus {
  PAID = 'PAID',
  UNPAID = 'UNPAID',
  NOT_SUPPORTED = 'NOT_SUPPORTED',
}

/**
 * Gets the local resource payment status from storage.
 */
export const getLocalResourcePaymentStatus = () => getStorage().get(LOCAL_RESOURCE_PAYMENT_KEY)

/**
 * Sets the local resource payment status in storage.
 * @param status - The payment status to set.
 */
export function setLocalResourcePaymentStatus(status: { type: string }) {
  getStorage().set(LOCAL_RESOURCE_PAYMENT_KEY, status)
}

/**
 * Gets the payment object for a resource from payments state.
 * @param payments - Payment state object.
 * @param resource - The resource to check.
 */
function getResourcePayment(payments: Record<string, any>, resource: CommunityResource) {
  if (resource && hasMonetizedResourceMetadata(resource)) {
    return payments?.[resource.monetized_resource_metadata?.id] || resource.community_resource_payment
  }
}

/**
 * Gets the payment object for a resource using Redux state.
 * @param resource - The resource to check.
 */
export function getResourcePaymentFromState(resource: CommunityResource) {
  return getResourcePayment(selectCommunityPayments(), resource)
}

/**
 * Gets plugin metadata and attaches payment info using Redux state.
 * @param pluginId - The plugin ID.
 */
export function getPluginWithPayment(pluginId: string) {
  const plugin = useSelector((state: any) => getPluginMetadata(pluginId, state.publishedPlugins))
  const payment = getResourcePaymentFromState(plugin)

  return useMemo(
    () =>
      plugin
        ? {
            ...plugin,
            community_resource_payment: payment,
          }
        : plugin,
    [payment, plugin],
  )
}

/**
 * Gets resource with payment info for extension, plugins, widgets, and payments state.
 * @param params - Object containing extension, publishedPlugins, publishedWidgets, and communityPaymentsState.
 */
export function getExtensionWithPayment({
  extension,
  publishedPlugins,
  publishedWidgets,
  communityPaymentsState,
}: {
  extension: any
  publishedPlugins: Record<string, any>
  publishedWidgets: Record<string, any>
  communityPaymentsState: Record<string, any>
}) {
  const resource
    = (manifestContainsWidget(extension) ? publishedWidgets : publishedPlugins)[extension.plugin_id]
  if (!resource)
    return
  const payment = getResourcePayment(communityPaymentsState, resource)
  return {
    ...resource,
    community_resource_payment: payment,
  }
}

/**
 * Gets published plugin with payment info using Redux state.
 * @param pluginId - The plugin ID.
 */
export function getPublishedPluginWithPayment(pluginId: string) {
  const plugin = usePublishedPlugins()[pluginId]
  const payment = getResourcePaymentFromState(plugin)

  return useMemo(
    () =>
      plugin
        ? {
            ...plugin,
            community_resource_payment: payment,
          }
        : plugin,
    [payment, plugin],
  )
}

/**
 * Gets published widget with payment info using Redux state.
 * @param widgetId - The widget ID.
 */
export function getPublishedWidgetWithPayment(widgetId: string) {
  const widget = useSelector((state: any) => state.publishedWidgets[widgetId])
  const payment = getResourcePaymentFromState(widget)

  return useMemo(
    () =>
      widget
        ? {
            ...widget,
            community_resource_payment: payment,
          }
        : widget,
    [payment, widget],
  )
}

/**
 * Gets plugined widget with payment info using Redux state.
 * @param widgetId - The widget ID.
 */
export function getPluginedWidgetWithPayment(widgetId: string) {
  const widget = usePluginedWidgets()[widgetId]
  const payment = getResourcePaymentFromState(widget)

  return useMemo(
    () =>
      widget
        ? {
            ...widget,
            community_resource_payment: payment,
          }
        : widget,
    [payment, widget],
  )
}

/**
 * Checks if a resource payment has failed.
 * @param resource - The resource to check.
 */
export function isResourcePaymentFailed(resource: CommunityResource) {
  const payment = getResourcePaymentFromState(resource)
  return !!payment && isPaymentFailed(payment)
}

/**
 * Checks if a resource payment is pending.
 * @param resource - The resource to check.
 */
export function isResourcePaymentPending(resource: CommunityResource) {
  const payment = getResourcePaymentFromState(resource)
  return !!payment && isStatus(payment, SubscriptionStatus.PENDING)
}

// Exported variable mappings for refactored names
export const YJ = setupCommunityCheckoutHandler
export const kA = handleCommunityResourcePayment
export const ej = initiateResourcePurchaseFlow
export const Zk = isUserEligibleForPurchase
export const R$ = handleStripeSubscriptionRedirect
export const vT = isResourceSubscriptionActive
export const vl = isUserPublisherForResource
export const EO = checkResourceEligibility
export const FP = selectCommunityPayments
export const OY = checkResourceSubscriptionActive
export const Qj = setLocalResourcePaymentStatus
export const Rm = checkResourceEligibilityDebug
export const Y8 = getExtensionWithPayment
export const aQ = getPublishedWidgetWithPayment
export const xp = getPluginWithPayment
export const ul = getPublishedPluginWithPayment
export const lt = getResourcePaymentFromState
export const gn = isResourcePaymentFailed
export const tw = isResourcePaymentPending
export const y1 = getLocalResourcePaymentStatus
export const zH = LocalResourcePaymentStatus
export const J$ = getPluginedWidgetWithPayment
