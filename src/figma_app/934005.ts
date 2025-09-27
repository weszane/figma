import { z } from 'zod'
import { reportError } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { getI18nString } from '../905/303541'
import { createProductAccessSchema } from '../905/513035'
import { dayjs } from '../905/920142'
import { CurrencySchema } from '../905/962956'
import { FLicenseType, FOrganizationLevelType } from '../figma_app/191312'
import { BillingCycle } from '../figma_app/831101'
import { toTitleCase } from '../figma_app/930338'


// Original: g
export enum CardBrand {
  AMEX = 'amex',
  DINERS = 'diners',
  DISCOVER = 'discover',
  EFTPOS_AU = 'eftpos_au',
  JCB = 'jcb',
  MASTERCARD = 'mastercard',
  UNIONPAY = 'unionpay',
  VISA = 'visa',
  UNKNOWN = 'unknown',
}

// Original: f
export const achDebitSchema = z.object({
  type: z.literal('ach_debit'),
  last4: z.string().nullable(),
})

// Original: E
export const cardSchema = z.object({
  type: z.literal('card'),
  brand: z.nativeEnum(CardBrand).nullable(),
  last4: z.string().nullable(),
})

// Original: y
export const sepaDebitSchema = z.object({
  type: z.literal('sepa_debit'),
  last4: z.string().nullable(),
})

// Original: b
export const unknownPaymentSchema = z.object({
  type: z.literal('unknown'),
  stripe_type: z.string(),
})

// Original: T
export const paymentMethodSchema = z.union([achDebitSchema, cardSchema, sepaDebitSchema, unknownPaymentSchema])

// Original: $$I2
export enum InvoiceState {
  PENDING = 'pending',
  OPEN = 'open',
  PAID = 'paid',
  UNCOLLECTIBLE = 'uncollectible',
  VOID = 'void',
}

// Original: $$S3
export enum InvoiceSubtype {
  MANUAL = 'manual',
  SUBSCRIPTION_CREATED = 'subscription_created',
  SUBSCRIPTION_RENEWED = 'subscription_renewed',
  CATCH_UP = 'catch_up',
  TRUE_UP = 'true_up',
}

// Original: v
export enum PaymentStatus {
  OPEN = 'open',
  PAID = 'paid',
  CANCELED = 'canceled',
}

// Original: A
export const paymentSchema = z.object({
  status: z.nativeEnum(PaymentStatus),
  payment_method: paymentMethodSchema.nullable(),
})

// Original: $$x0
export enum BillingMechanics {
  LEGACY = 'legacy',
  PRORATED = 'prorated',
}

// Original: N
export const seatsBreakdownSchema = createProductAccessSchema(z.object({
  net_quantity: z.number(),
  amount: z.number(),
  seats_quantity: z.number(),
  seats_amount: z.number(),
  adjustments_quantity: z.number(),
  adjustments_amount: z.number(),
  charges_quantity: z.number(),
  charges_amount: z.number(),
  credits_quantity: z.number(),
  credits_amount: z.number(),
}))

// Original: $$C1
export const invoiceSchema = z.object({
  id: z.string(),
  issued_at: z.string(),
  paid_at: z.string().nullable(),
  period_starts_at: z.string(),
  period_ends_at: z.string(),
  past_due_at: z.string(),
  plan_parent_type: z.nativeEnum(FOrganizationLevelType),
  billing_interval: z.nativeEnum(BillingCycle),
  total: z.number(),
  state: z.nativeEnum(InvoiceState),
  subtype: z.nativeEnum(InvoiceSubtype),
  currency: CurrencySchema,
  hosted_invoice_url: z.string().nullable(),
  invoice_pdf_url: z.string().nullable(),
  number: z.string().nullable(),
  total_tax_amount: z.number(),
  subtotal: z.number(),
  payments: paymentSchema.array(),
  billing_mechanics: z.nativeEnum(BillingMechanics),
  billable_products_kind: z.nativeEnum(FLicenseType),
  org_invoice_details: z.object({
    is_locked: z.boolean().nullable(),
    is_skipped_trueup: z.boolean().nullable(),
    multiyear_contract_id: z.string().nullish(),
    billing_period_is_stub: z.boolean().nullish(),
  }).nullish(),
  is_empty: z.boolean(),
  invalid_amounts_or_quantities: z.boolean().optional(),
  seats_breakdown: seatsBreakdownSchema,
})


// Original: O
export const manualSubtypes = ['manual']

// Original: R
export const excludedStates = ['uncollectible', 'void']

// Original: L
export const pendingExcludedStates = [...excludedStates, 'pending']

// Original: $$P4
export enum InvoiceReviewState {
  REVIEW = 'review',
  LOCKED = 'locked',
}

/**
 * Checks if an invoice is overdue based on the current date.
 * @param invoice - The invoice object.
 * @param currentDate - The current date string.
 * @returns True if the invoice is open and past due.
 */
export function isOverdue(invoice: z.infer<typeof invoiceSchema>, currentDate: string): boolean {
  return invoice.state === 'open' && dayjs(currentDate).isAfter(getPastDueDate(invoice))
}

/**
 * Gets the issued date of an invoice as a Date object.
 * @param invoice - The invoice object.
 * @returns The issued date.
 */
export function getIssuedDate(invoice: z.infer<typeof invoiceSchema>): Date {
  return dayjs(invoice.issued_at).toDate()
}

/**
 * Gets the paid date of an invoice as a Date object, or null if not paid.
 * @param invoice - The invoice object.
 * @returns The paid date or null.
 */
export function getPaidDate(invoice: z.infer<typeof invoiceSchema>): Date | null {
  return invoice.paid_at ? dayjs(invoice.paid_at).toDate() : null
}

/**
 * Gets the past due date of an invoice as a Date object.
 * @param invoice - The invoice object.
 * @returns The past due date.
 */
export function getPastDueDate(invoice: z.infer<typeof invoiceSchema>): Date {
  return dayjs(invoice.past_due_at).toDate()
}

/**
 * Gets the formatted past due date string for an invoice.
 * @param invoice - The invoice object.
 * @returns The formatted date string.
 */
export function getFormattedPastDueDate(invoice: z.infer<typeof invoiceSchema>): string {
  return getI18nString('plan_invoices.date_long', {
    date: getPastDueDate(invoice),
  })
}

/**
 * Gets the description for an invoice based on its type and subtype.
 * @param invoice - The invoice object.
 * @returns The description string.
 */
export function getInvoiceDescription(invoice: z.infer<typeof invoiceSchema>): string {
  const defaultDescription = () => toTitleCase(invoice.subtype)
  switch (invoice.plan_parent_type) {
    case FOrganizationLevelType.TEAM:
      switch (invoice.billing_interval) {
        case BillingCycle.YEAR:
          return getI18nString('plan_invoices.description.plan_subscription')
        case BillingCycle.MONTH:
          return getI18nString('plan_invoices.description.monthly_invoice')
        default:
          return defaultDescription()
      }
    case FOrganizationLevelType.ORG:
      if (invoice.billing_interval === BillingCycle.YEAR) {
        switch (invoice.subtype) {
          case 'subscription_renewed':
          case 'subscription_created':
            return getI18nString('plan_invoices.description.plan_subscription')
          case 'true_up':
            return getI18nString('org_admin_settings.cost_breakdown.quarterly_true_up')
          case 'catch_up':
            return getI18nString('plan_invoices.description.quarterly_invoice')
          default:
            reportError(ServiceCategories.BILLING_EXPERIENCE, new Error('unexpected subtype for org year invoice'), {
              extra: { subtype: invoice.subtype },
            })
            return defaultDescription()
        }
      }
      reportError(ServiceCategories.BILLING_EXPERIENCE, new Error('unexpected billing interval for org invoice'), {
        extra: { billing_interval: invoice.billing_interval },
      })
      return defaultDescription()
    default:
      return defaultDescription()
  }
}

/**
 * Gets the invoice number or a default string if none.
 * @param invoice - The invoice object.
 * @returns The invoice number string.
 */
export function getInvoiceNumber(invoice: z.infer<typeof invoiceSchema>): string {
  return invoice.number || getI18nString('plan_invoices.empty_details')
}

/**
 * Gets the payment method description for an invoice.
 * @param invoice - The invoice object.
 * @returns The payment method string or null.
 */
export function getPaymentMethod(invoice: z.infer<typeof invoiceSchema>): string | null {
  const uniquePayments = new Map<string, any>()
  invoice.payments.forEach((payment) => {
    if (payment.status === 'paid' && payment.payment_method) {
      try {
        const key = JSON.stringify({
          type: payment.payment_method.type,
          last4: payment.payment_method.last4,
          stripe_type: payment.payment_method.stripe_type,
          brand: payment.payment_method.brand,
        })
        if (key) uniquePayments.set(key, payment.payment_method)
      } catch {
        reportError(ServiceCategories.BILLING_EXPERIENCE, new Error('failed to stringify payment method'))
      }
    }
  })
  const methods = Array.from(uniquePayments.values())
  if (methods.length > 1) return getI18nString('plan_invoices.payment_method.multiple')
  const method = methods[0]
  if (!method) return null
  return formatPaymentMethod(method)
}

/**
 * Formats a payment method object into a string.
 * @param method - The payment method object.
 * @param options - Optional formatting options.
 * @returns The formatted payment method string.
 */
function formatPaymentMethod(method: z.infer<typeof paymentMethodSchema>, options: { inline?: boolean } = {}): string {
  switch (method.type) {
    case 'card': {
      const { last4, brand } = method
      if (last4 && brand) return `${getI18nString(`plan_invoices.payment_method.card.${brand}`)} ${last4}`
      if (last4 && !brand) {
        return options.inline
          ? getI18nString('plan_invoices.payment_method.card.unknown.inline', { last4 })
          : getI18nString('plan_invoices.payment_method.card.unknown', { last4 })
      }
      if (!last4 && brand) return getI18nString(`plan_invoices.payment_method.card.${brand}`)
      return options.inline
        ? getI18nString('plan_invoices.payment_method.card.unknown.no_last_4.inline')
        : getI18nString('plan_invoices.payment_method.card.unknown.no_last_4')
    }
    case 'ach_debit':
    case 'sepa_debit': {
      const { last4 } = method
      return last4
        ? `${getI18nString(`plan_invoices.payment_method.${method.type}.unknown`)} ${last4}`
        : getI18nString(`plan_invoices.payment_method.${method.type}.unknown`)
    }
    case 'unknown':
      return toTitleCase(method.stripe_type)
    default:
      reportError(ServiceCategories.BILLING_EXPERIENCE, new Error('unknown payment method'), {
        extra: { type: method?.type },
      })
      return getI18nString('plan_invoices.payment_method.unknown')
  }
}

// Original: V
const subscriptionSubtypes = new Set(['subscription_created', 'subscription_renewed'])

/**
 * Checks if an invoice is an org true-up or catch-up.
 * @param invoice - The invoice object.
 * @returns True if it's an org true-up or catch-up.
 */
export function isOrgTrueUpOrCatchUp(invoice: z.infer<typeof invoiceSchema>): boolean {
  return invoice.plan_parent_type === FOrganizationLevelType.ORG && ['catch_up', 'true_up'].includes(invoice.subtype)
}

/**
 * Checks if an invoice is a team monthly catch-up.
 * @param invoice - The invoice object.
 * @returns True if it's a team monthly catch-up.
 */
export function isTeamMonthlyCatchUp(invoice: z.infer<typeof invoiceSchema>): boolean {
  return invoice.plan_parent_type === FOrganizationLevelType.TEAM && invoice.billing_interval === BillingCycle.MONTH && invoice.subtype === 'catch_up'
}

/**
 * Checks if an invoice is for a bundle license.
 * @param invoice - The invoice object.
 * @returns True if it's for a bundle.
 */
export function isBundleInvoice(invoice: z.infer<typeof invoiceSchema>): boolean {
  return invoice.billable_products_kind === FLicenseType.BUNDLE
}

/**
 * Compares two invoices by issued date.
 * @param a - First invoice.
 * @param b - Second invoice.
 * @param options - Sort options.
 * @returns Comparison result.
 */
function compareByIssuedDate(a: z.infer<typeof invoiceSchema>, b: z.infer<typeof invoiceSchema>, options?: { reverse?: boolean }): number {
  const dateA = getIssuedDate(a)
  const dateB = getIssuedDate(b)
  const diff = dayjs(dateA).isAfter(dateB) ? -1 : dayjs(dateB).isAfter(dateA) ? 1 : 0
  return options?.reverse ? -diff : diff
}

/**
 * Compares two invoices by billing type.
 * @param a - First invoice.
 * @param b - Second invoice.
 * @returns Comparison result.
 */
function compareByBillingType(a: z.infer<typeof invoiceSchema>, b: z.infer<typeof invoiceSchema>): number {
  const yearA = a.billing_interval === BillingCycle.YEAR ? 1 : 0
  const yearB = b.billing_interval === BillingCycle.YEAR ? 1 : 0
  const yearDiff = yearB - yearA
  if (yearDiff !== 0) return yearDiff
  const trueUpA = isOrgTrueUpOrCatchUp(a) ? 0 : 1
  const trueUpB = isOrgTrueUpOrCatchUp(b) ? 0 : 1
  return trueUpB - trueUpA
}

/**
 * Filters invoices to include only valid ones.
 * @param invoices - Array of invoices.
 * @returns Filtered array.
 */
export function filterValidInvoices(invoices: z.infer<typeof invoiceSchema>[]): z.infer<typeof invoiceSchema>[] {
  return invoices.filter(isValidInvoice)
}

/**
 * Checks if an invoice is valid (not excluded).
 * @param invoice - The invoice object.
 * @returns True if valid.
 */
function isValidInvoice(invoice: z.infer<typeof invoiceSchema>): boolean {
  return !(excludedStates.includes(invoice.state) || manualSubtypes.includes(invoice.subtype))
}

/**
 * Checks if an invoice is payable.
 * @param invoice - The invoice object.
 * @returns True if payable.
 */
function isPayableInvoice(invoice: z.infer<typeof invoiceSchema>): boolean {
  return !(pendingExcludedStates.includes(invoice.state) || manualSubtypes.includes(invoice.subtype))
}

/**
 * Groups invoices issued within 1 day of each other.
 * @param invoices - Array of invoices.
 * @returns Grouped array.
 */
function groupNearbyInvoices(invoices: z.infer<typeof invoiceSchema>[]): z.infer<typeof invoiceSchema>[] {
  if (!invoices.length) return []
  const reference = invoices[0]
  return invoices.filter(inv => Math.abs(dayjs(getIssuedDate(reference)).diff(getIssuedDate(inv), 'days')) <= 1)
}

/**
 * Gets the latest valid pending invoice, with options for legacy/prorated org annual.
 * @param invoices - Array of invoices.
 * @param options - Filter options.
 * @returns The invoice or null.
 */
export function getLatestValidPendingInvoice(invoices: z.infer<typeof invoiceSchema>[], options?: { allowLegacyOrgAnnual?: boolean; allowProratedOrgAnnual?: boolean }): z.infer<typeof invoiceSchema> | null {
  const valid = invoices.filter(isValidInvoice).filter(inv => !(inv.state !== 'pending' || (isAnnualSubscription(inv) && !(inv.plan_parent_type === FOrganizationLevelType.ORG && ((options?.allowLegacyOrgAnnual && inv.billing_mechanics === 'legacy') || (options?.allowProratedOrgAnnual && inv.billing_mechanics === 'prorated'))))))
  const sortedByDate = groupNearbyInvoices(valid.sort((a, b) => compareByIssuedDate(b, a)))
  const sortedByType = sortedByDate.sort((a, b) => compareByBillingType(b, a))
  return sortedByType[0] ?? null
}

/**
 * Gets the latest payable invoice.
 * @param invoices - Array of invoices.
 * @returns The invoice or null.
 */
export function getLatestPayableInvoice(invoices: z.infer<typeof invoiceSchema>[]): z.infer<typeof invoiceSchema> | null {
  const payable = invoices.filter(isPayableInvoice)
  const sortedByDate = groupNearbyInvoices(payable.sort(compareByIssuedDate))
  const sortedByType = sortedByDate.sort(compareByBillingType)
  return sortedByType[0] ?? null
}

/**
 * Checks if an invoice uses legacy billing mechanics.
 * @param invoice - The invoice object.
 * @returns True if legacy.
 */
export function isLegacyBilling(invoice: z.infer<typeof invoiceSchema>): boolean {
  return !invoice.billing_mechanics || invoice.billing_mechanics === 'legacy' || invoice.subtype === 'true_up'
}

/**
 * Checks if an invoice is an annual subscription.
 * @param invoice - The invoice object.
 * @returns True if annual subscription.
 */
export function isAnnualSubscription(invoice: z.infer<typeof invoiceSchema>): boolean {
  return invoice.billing_interval === BillingCycle.YEAR && subscriptionSubtypes.has(invoice.subtype)
}

/**
 * Gets the latest annual subscription invoice.
 * @param invoices - Array of invoices.
 * @returns The invoice or null.
 */
export function getLatestAnnualSubscription(invoices: z.infer<typeof invoiceSchema>[]): z.infer<typeof invoiceSchema> | null {
  let latest: z.infer<typeof invoiceSchema> | null = null
  for (const inv of invoices) {
    if (isPayableInvoice(inv) && isAnnualSubscription(inv) && (!latest || dayjs(inv.issued_at).isAfter(latest.issued_at))) {
      latest = inv
    }
  }
  return latest
}

/**
 * Gets the first pending annual subscription invoice.
 * @param invoices - Array of invoices.
 * @returns The invoice or null.
 */
export function getFirstPendingAnnualSubscription(invoices: z.infer<typeof invoiceSchema>[]): z.infer<typeof invoiceSchema> | null {
  for (const inv of invoices) {
    if (inv.state === 'pending' && isValidInvoice(inv) && isAnnualSubscription(inv)) {
      return inv
    }
  }
  return null
}

// Refactored exports with meaningful names
export const fA = BillingMechanics
export const ar = invoiceSchema
export const qH = InvoiceState
export const ly = InvoiceSubtype
export const fx = InvoiceReviewState
export const TQ = filterValidInvoices
export const $b = getInvoiceNumber
export const zz = getInvoiceDescription
export const nm = getFormattedPastDueDate
export const gL = getPaymentMethod
export const tB = getIssuedDate
export const iv = getLatestAnnualSubscription
export const YO = getLatestPayableInvoice
export const Z4 = getPastDueDate
export const W8 = getPaidDate
export const RK = getFirstPendingAnnualSubscription
export const gl = getLatestValidPendingInvoice
export const zU = isLegacyBilling
export const _k = isOrgTrueUpOrCatchUp
export const z7 = isAnnualSubscription
export const dp = isBundleInvoice
export const Jv = isOverdue
export const _8 = isTeamMonthlyCatchUp
