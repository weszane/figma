import { CancellationReason, isSubscription } from '../905/54385'
import { SubscriptionStatus, SubscriptionStatusList } from '../905/272080'
import { getI18nString } from '../905/303541'
import { partitionByPredicate } from '../905/918929'
import { hasClientMeta, hasFreemiumCode, hasMonetizedResourceMetadata, isPlugin, isThirdPartyMonetized, isWidget } from '../figma_app/45218'
import { CurrencyFormatter } from '../figma_app/514043'
import { collectPublisherUserIds } from '../figma_app/690075'

/**
 * Minimum price constant (original: $$c15)
 */
export const MIN_PRICE = 2

/**
 * Maximum price constant (original: $$u19)
 */
export const MAX_PRICE = 1000

/**
 * Converts cents to dollars (original: $$p17)
 * @param item - Object with price in cents
 * @returns Price in dollars
 */
export function centsToDollars(item: { price?: number }) {
  if (item?.price) {
    return 0.01 * item.price
  }
}

/**
 * Converts a decimal to percentage (original: $$_13)
 * @param value - Decimal value
 * @returns Percentage value
 */
export const decimalToPercent = (value?: number) => (value ? 100 * value : 0)

/**
 * Checks if a number is not an integer (original: $$h1)
 * @param value - Number to check
 * @returns True if not integer
 */
export const isNotInteger = (value: number) => value % 1 !== 0

/**
 * Checks if t is greater than e (original: $$m7)
 * @param e - First number
 * @param t - Second number
 * @returns True if t > e
 */
export const isGreater = (e: number, t: number) => t > e

/**
 * Checks if t/e ratio is greater than 1.5 (original: $$g3)
 * @param e - Denominator
 * @param t - Numerator
 * @returns True if ratio > 1.5
 */
export const isRatioHigh = (e: number, t: number) => t / e > 1.5

/**
 * Checks if value is out of allowed price range (original: $$f11)
 * @param value - Price value
 * @returns True if out of range
 */
export const isPriceOutOfRange = (value: number) => value < MIN_PRICE || value >= MAX_PRICE

/**
 * Returns formatted annual price string (original: $$E21)
 * @param price - Price value
 * @param discount - Discount percentage
 * @returns Localized price string
 */
export function getAnnualPriceString(price: number, discount: number) {
  if (!price || !discount)
    return ''
  const discounted = 1200 * price * (1 - discount / 100)
  return getI18nString('community.buyer.price_per_year', {
    priceString: formatCurrency(discounted, discounted % 100 !== 0),
  })
}

/**
 * Returns formatted price string for a product (original: $$y14)
 * @param item - Product object
 * @param showAnnual - Show annual price if subscription
 * @returns Localized price string
 */
export function getProductPriceString(item: { price: number, is_subscription?: boolean, annual_price?: number }, showAnnual = false) {
  const { price, is_subscription } = item
  if (!is_subscription)
    return formatCurrency(price, false)
  if (showAnnual) {
    const annualPrice = item.annual_price || 0
    return getI18nString('community.buyer.price_per_year', {
      priceString: formatCurrency(annualPrice, annualPrice % 100 !== 0),
    })
  }
  return getI18nString('community.buyer.price_per_month', {
    priceString: formatCurrency(price, price % 100 !== 0),
  })
}

/**
 * Returns buy/subscribe label with price (original: $$b10)
 * @param item - Product object
 * @returns Localized label string
 */
export function getBuyOrSubscribeLabel(item: any) {
  const priceStr = getProductPriceString(item)
  const label = isSubscription(item)
    ? getI18nString('community.buyer.subscribe')
    : getI18nString('community.buyer.buy')
  return `${label} ${priceStr}`
}

/**
 * Returns formatted subscription price string (original: $$T9)
 * @param item - Product object
 * @returns Localized price string
 */
export function getSubscriptionPriceString(item: { price: number, is_subscription?: boolean }) {
  const { price, is_subscription } = item
  const formatted = formatCurrency(price, price % 100 !== 0)
  return is_subscription
    ? getI18nString('community.buyer.price_per_month_subscription', { priceString: formatted })
    : getI18nString('community.buyer.price_one_time_payment', { priceString: formatted })
}

/**
 * Formats currency (original: $$I16)
 * @param value - Amount in cents
 * @param showCents - Whether to show cents
 * @returns Formatted string
 */
export function formatCurrency(value: number, showCents = false) {
  return new CurrencyFormatter('usd').formatMoney(value, { showCents })
}

/**
 * Returns localized refund reason string (original: $$S18)
 * @param reason - Cancellation reason
 * @returns Localized string
 */
export function getRefundReasonString(reason: CancellationReason) {
  switch (reason) {
    case CancellationReason.DOESNT_MEET_NEEDS:
      return getI18nString('community.buyer.refund_reason.doesnt_meet_needs')
    case CancellationReason.TECHNICAL_ISSUES:
      return getI18nString('community.buyer.refund_reason.technical_issues')
    case CancellationReason.TOO_EXPENSIVE:
      return getI18nString('community.buyer.refund_reason.too_expensive')
    case CancellationReason.FOUND_ALTERNATIVE:
      return getI18nString('community.buyer.refund_reason.found_alternative')
    case CancellationReason.OTHER:
      return getI18nString('community.buyer.refund_reason.other')
    default:
      return ''
  }
}

/**
 * Checks if subscription expiration date is valid (original: v)
 * @param payment - Payment object
 * @returns True if valid date
 */
function hasValidSubscriptionExpiry(payment: any) {
  return !!(payment.subscription_expires_at && !isNaN(Date.parse(payment.subscription_expires_at)))
}

/**
 * Checks if subscription is active (original: $$A4)
 * @param payment - Payment object
 * @returns True if active
 */
export function isSubscriptionActive(payment: any) {
  return !!payment
    && (hasValidSubscriptionExpiry(payment)
      ? new Date(payment.subscription_expires_at).getTime() + 864e5 > Date.now()
      && !isStatus(payment, SubscriptionStatus.DISPUTED)
      : isStatus(payment, SubscriptionStatus.SUCCEEDED))
}

/**
 * Checks if payment status matches (original: $$x8)
 * @param payment - Payment object
 * @param status - Status to check
 * @returns True if matches
 */
export function isStatus(payment: any, status: any) {
  return !!payment.status && payment.status === status
}

/**
 * Checks if payment failed (original: $$N5)
 * @param payment - Payment object
 * @returns True if failed
 */
export function isPaymentFailed(payment: any) {
  return payment.status === SubscriptionStatus.SUBSCRIPTION_PAYMENT_FAILED
    || payment.status === SubscriptionStatus.INVOICE_FINALIZATION_FAILED
}

/**
 * Checks if purchase is recent and active (original: $$$$C0)
 * @param payment - Payment object
 * @returns True if recent and active
 */
export function isRecentActivePurchase(payment: any) {
  const oneDayAgo = Date.now() - 864e5
  return isSubscriptionActive(payment) && !hasValidSubscriptionExpiry(payment) && new Date(payment.purchased_at).getTime() >= oneDayAgo
}

/**
 * Partitions users by purchase eligibility (original: $$w6)
 * @param users - Array of user objects
 * @param resource - Resource object
 * @returns Partitioned users
 */
export function partitionUsersByPurchaseEligibility(users: any[], resource: any) {
  if (isPlugin(resource) || isWidget(resource)) {
    const accepted = (resource.plugin_publishers?.accepted || []).map((u: any) => u.id)
    const pending = (resource.plugin_publishers?.pending || []).map((u: any) => u.id)
    const publisherIds = new Set([...accepted, ...pending])
    const { pass, fail } = partitionByPredicate(users, u => publisherIds.has(u.id) || u.id === resource.creator.id)
    return { usersCanPurchase: fail, publishers: pass }
  }
  else {
    const publisherIds = new Set(collectPublisherUserIds(resource))
    const { pass, fail } = partitionByPredicate(users, u => publisherIds.has(u.id))
    return { usersCanPurchase: fail, publishers: pass }
  }
}

/**
 * Checks if resource has trial available (original: $$O2)
 * @param params - Object with resource and payment
 * @returns True if trial available
 */
export function hasTrialAvailable({
  resource,
  payment,
}: {
  resource: any
  payment: any
}) {
  const meta = resource.monetized_resource_metadata
  return !!(meta && isSubscription(meta)) && !!meta.trial_length_in_days && (!payment || !payment.subscription_expires_at)
}

/**
 * Checks if resource is eligible for purchase (original: $$R12)
 * @param resource - Resource object
 * @param payment - Payment object
 * @returns True if eligible
 */
export function isResourceEligibleForPurchase(resource: any, payment: any) {
  const hasMeta = hasMonetizedResourceMetadata(resource)
  const isThirdParty = isThirdPartyMonetized(resource) && hasClientMeta(resource)
  const hasFreemium = hasMeta && hasFreemiumCode(resource)
  const isActive = isSubscriptionActive(payment)
  return (hasMeta && !hasFreemium && !isActive) || isThirdParty
}

/**
 * Maps payment object to API format (original: $$L20)
 * @param payment - Payment object
 * @returns API payment object
 */
export function mapPaymentToApiFormat(payment: any) {
  return {
    status: SubscriptionStatusList[payment.status],
    purchased_at: payment.purchasedAt ? new Date(payment.purchasedAt).toISOString() : null,
    subscription_expires_at: payment.subscriptionExpiresAt ? new Date(payment.subscriptionExpiresAt).toISOString() : null,
    subscription_canceled_at: payment.subscriptionCanceledAt ? new Date(payment.subscriptionCanceledAt).toISOString() : null,
    refund_reason: payment.refundReason,
    monetized_resource_metadata_id: payment.monetizedResourceMetadataId,
    subscription_interval: payment.subscriptionInterval,
  }
}

// Export aliases for backward compatibility
export const C = isRecentActivePurchase
export const F8 = isNotInteger
export const Lt = hasTrialAvailable
export const Mj = isRatioHigh
export const QQ = isSubscriptionActive
export const UO = isPaymentFailed
export const V4 = partitionUsersByPurchaseEligibility
export const WD = isGreater
export const WJ = isStatus
export const X2 = getSubscriptionPriceString
export const XR = getBuyOrSubscribeLabel
export const Yp = isPriceOutOfRange
export const _K = isResourceEligibleForPurchase
export const ae = decimalToPercent
export const bV = getProductPriceString
export const mZ = MIN_PRICE
export const up = formatCurrency
export const vf = centsToDollars
export const vi = getRefundReasonString
export const wF = MAX_PRICE
export const xs = mapPaymentToApiFormat
export const zt = getAnnualPriceString
