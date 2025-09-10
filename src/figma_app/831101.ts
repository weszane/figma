// Refactored from /Users/allen/github/fig/src/figma_app/831101.ts

import { UpsellModalType } from '../905/165519'

/**
 * Enum for SubscriptionType (original: $$i10)
 */
export enum SubscriptionType {
  UNSPECIFIED = 0,
  ANNUAL = 1,
  MONTHLY = 2,
  STUDENT = 3,
}

/**
 * Enum for UpsellSourceType (original: $$a6)
 */
export enum UpsellSourceType {
  UNSPECIFIED = 0,
  PLAN_COMPARISON_MODAL = 1,
  NUX = 2,
  CONSUMPTION_MODAL = 3,
  PRICING_PAGE = 4,
  DEV_MODE_MODAL = 5,
  SITES_MODAL = 6,
  RESOURCE_HUB = 7,
  FIGMAKE_MODAL = 8,
  MCP_MODAL = 9,
  PAGE_TRACKER_UPSELL = 10,
  CODE_CHAT_LIBRARY_IMPORT = 11,
  FIGMAKE_METER_LIMIT_TOAST = 12,
  FIGMAKE_PUBLISH_SITE = 13,
  CREATE_NEW_FILE = 14,
  CREATE_NEW_PAGE = 15,
}

/**
 * Maps UpsellModalType to UpsellSourceType value.
 * @param params - Object containing upsellSource and fallbackEntryPoint
 * @returns UpsellSourceType value
 * (original: $$s9)
 */
export function mapUpsellModalTypeToSource({
  upsellSource,
  fallbackEntryPoint = UpsellSourceType.UNSPECIFIED,
}: {
  upsellSource: UpsellModalType | undefined
  fallbackEntryPoint?: UpsellSourceType
}): UpsellSourceType {
  if (!upsellSource)
    return fallbackEntryPoint
  switch (upsellSource) {
    case UpsellModalType.CREATE_NEW_PAGE:
      return UpsellSourceType.CREATE_NEW_PAGE
    case UpsellModalType.CREATE_NEW_FILE:
      return UpsellSourceType.CREATE_NEW_FILE
    case UpsellModalType.FIGMAKE_PUBLISH_SITE:
      return UpsellSourceType.FIGMAKE_PUBLISH_SITE
    case UpsellModalType.FIGMAKE_METER_LIMIT_TOAST:
      return UpsellSourceType.FIGMAKE_METER_LIMIT_TOAST
    case UpsellModalType.CODE_CHAT_LIBRARY_IMPORT:
      return UpsellSourceType.CODE_CHAT_LIBRARY_IMPORT
    case UpsellModalType.PAGE_TRACKER_UPSELL:
      return UpsellSourceType.PAGE_TRACKER_UPSELL
    case UpsellModalType.MCP_MODAL:
      return UpsellSourceType.MCP_MODAL
    default:
      return fallbackEntryPoint
  }
}

/**
 * Enum for BillingCycle (original: $$o4)
 */
export enum BillingCycle {
  MONTH = 'month',
  YEAR = 'year',
}

/**
 * Step names for upgrade flow (original: $$l11)
 */
export const UpgradeSteps = {
  UPGRADE_NEW_TEAM: 'upgrade_new_team',
  PLAN_COMPARISON: 'plan_comparison',
  CREATE_TEAM: 'create_team',
  ADD_COLLABORATORS: 'add_collaborators',
  CHOOSE_PLAN: 'choose_plan',
  PAYMENT_AND_ADDRESS: 'payment_and_address',
  CONFIRM_PAY: 'confirm_pay',
}

/**
 * Enum for PlanType (original: $$d5)
 */
export enum PlanType {
  MONTHLY = 'monthly',
  ANNUAL = 'annual',
}

export const DEFAULT_COUNTRY = 'US' // (original: $$c1)
export const JAPAN_COUNTRY = 'JP' // (original: $$u7)

/**
 * Address type (used in $$p2 and $$_0)
 */
export interface Address {
  line1: string
  line2: string
  country: string
  city: string
  region: string
  postal_code: string
}

/**
 * Creates an empty address object with optional country.
 * @param country - Country code
 * @returns Address object
 * (original: $$p2)
 */
export function createEmptyAddress(country?: string): Address {
  return {
    line1: '',
    line2: '',
    country: country || DEFAULT_COUNTRY,
    city: '',
    region: '',
    postal_code: '',
  }
}

/**
 * Checks if an address is empty.
 * @param address - Address object
 * @returns true if all fields except country are empty
 * (original: $$_0)
 */
export function isAddressEmpty(address: Address): boolean {
  return (
    address.line1 === ''
    && address.line2 === ''
    && address.city === ''
    && address.region === ''
    && address.postal_code === ''
  )
}

/**
 * Product IDs (original: h)
 */
export const ProductIds = {
  PRODUCT_PRO_DESIGN_ANNUAL: 'prod_BTrZbmnROhwnmX',
  PRODUCT_PRO_DESIGN_MONTHLY: 'prod_BUXN0CamqLCsuF',
  PRODUCT_PRO_FIGJAM_ANNUAL: 'figjam_annual_usd_36',
  PRODUCT_PRO_FIGJAM_MONTHLY: 'figjam_monthly_usd_5',
} as const

/**
 * Arrays of product IDs (original: $$m8, $$g3)
 */
export const DesignProductIds = [
  ProductIds.PRODUCT_PRO_DESIGN_ANNUAL,
  ProductIds.PRODUCT_PRO_DESIGN_MONTHLY,
]

export const FigJamProductIds = [
  ProductIds.PRODUCT_PRO_FIGJAM_ANNUAL,
  ProductIds.PRODUCT_PRO_FIGJAM_MONTHLY,
]

// Exported variables with refactored names
export const YJ = mapUpsellModalTypeToSource
export const tY = SubscriptionType
export const TN = UpsellSourceType
export const NW = BillingCycle
export const tn = UpgradeSteps
export const R$ = PlanType
export const CO = DEFAULT_COUNTRY
export const UW = JAPAN_COUNTRY
export const EB = createEmptyAddress
export const $V = isAddressEmpty
export const Ye = DesignProductIds
export const MC = FigJamProductIds
export const oO = mapUpsellModalTypeToSource
