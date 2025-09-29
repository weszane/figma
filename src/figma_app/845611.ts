import { useMemo } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { j } from '../905/206476'
import { getI18nString } from '../905/303541'
import { AutoLayout } from '../905/470281'
import { H } from '../905/507464'
import { P } from '../905/697522'
import { ResourceStatus } from '../905/723791'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { AdminRequestDashboardRowIds } from '../figma_app/43951'
import { useSubscription } from '../figma_app/288654'
import { selectExperimentConfigHook } from '../figma_app/594947'
import { ProductAccessMap } from '../figma_app/765689'
import { LoadingSpinner } from '../figma_app/858013'

// Constants
export const productDropdownId = 'UPGRADE_REQUESTS_PRODUCT_DROPDOWN'
export const billingGroupDropdownId = 'UPGRADE_REQUESTS_BILLING_GROUP_DROPDOWN'
export const sortDropdownId = 'UPGRADE_REQUESTS_SORT_DROPDOWN'
export const userTypeDropdownId = 'UPGRADE_REQUESTS_USER_TYPE_DROPDOWN'
export const requestString = 'request'
export const emDash = '\u2013'
export const maxTextLength = 50
export const adminRequestsDashboard = 'admin_requests_dashboard'
export const billingGroupAdminRequestsDashboard = 'billing_group_admin_requests_dashboard'

// Enums
export enum TeamOrg {
  TEAM = 'Team',
  ORG = 'Org',
}

export enum RequestFilterType {
  ALL_UNASSIGNED_REQUESTS = 'all_unassigned_requests',
  ALL_MANAGED_REQUESTS = 'all_managed_requests',
  ALL_ORG_REQUESTS = 'all_org_requests',
  INDIVIDUAL_BILLING_GROUP_REQUESTS = 'individual_billing_group_requests',
}

export enum MemberGuest {
  MEMBERS = 'members',
  GUESTS = 'guests',
}

export enum InvitedByType {
  APPROVE_ALL = 'APPROVE_ALL',
  BULK_SELECT = 'BULK_SELECT',
  SINGLE = 'SINGLE',
  EMAIL = 'EMAIL',
  DEEPLINK = 'DEEPLINK',
}

export enum FirstSortOrder {
  NEWEST_FIRST = 'NEWEST_FIRST',
  OLDEST_FIRST = 'OLDEST_FIRST',
}

// Objects
export const sortLabels = {
  NEWEST_FIRST: () => getI18nString('admin_dashboard.requests.sort.newest_first'),
  OLDEST_FIRST: () => getI18nString('admin_dashboard.requests.sort.oldest_first'),
}

export const productInfo = {
  [ProductAccessMap.DESIGN]: {
    name: () => getI18nString('admin_dashboard.requests.design_seat'),
    icon: jsx(H, {}),
  },
  [ProductAccessMap.WHITEBOARD]: {
    name: () => getI18nString('admin_dashboard.requests.figjam_seat'),
    icon: jsx(j, {}),
  },
  [ProductAccessMap.DEV_MODE]: {
    name: () => getI18nString('admin_dashboard.requests.devmode_seat'),
    icon: jsx(P, {}),
  },
}

// Functions
/**
 * Renders an icon and name for a given license type.
 * @param licenseType - The type of product license.
 * @returns JSX element displaying the product icon and name.
 */
export function renderProductIcon({
  licenseType,
}: {
  licenseType: keyof typeof productInfo
}) {
  const info = productInfo[licenseType]
  return jsxs(AutoLayout, {
    spacing: 8,
    children: [info.icon, jsx('div', {
      children: info.name(),
    })],
  })
}

/**
 * Truncates text to a maximum length and trims whitespace.
 * @param text - The input text to truncate.
 * @returns The truncated and trimmed text.
 */
export function truncateText(text: string): string {
  return text.trim().slice(0, maxTextLength)
}

/**
 * Displays text with an optional loading spinner.
 * @param text - The text to display.
 * @param showSpinner - Whether to show the loading spinner.
 * @returns JSX element with text and spinner.
 */
export function TextWithSpinner({
  text,
  showSpinner,
}: {
  text: string
  showSpinner: boolean
}) {
  return jsxs('div', {
    className: cssBuilderInstance.flex.itemsCenter.justifyCenter.$,
    children: [jsx('span', {
      className: showSpinner ? cssBuilderInstance.invisible.$ : '',
      children: text,
    }), showSpinner && jsx(LoadingSpinner, {
      className: cssBuilderInstance.absolute.$,
      shouldMatchTextColor: true,
      size: 'small',
    })],
  })
}

/**
 * Hook to get filtered request IDs based on subscription data.
 * @param planType - The type of plan.
 * @param planId - The plan ID.
 * @param filterParams - Parameters for filtering.
 * @param processedRequestIds - Set of already processed request IDs.
 * @returns Array of filtered request IDs or null if not loaded.
 */
export function useFilteredRequestIds({
  planType,
  planId,
  filterParams,
  processedRequestIds,
}: {
  planType: TeamOrg
  planId: string
  filterParams: any
  processedRequestIds: Set<string>
}) {
  const subscription = useSubscription(AdminRequestDashboardRowIds, {
    planType,
    planId,
    filterParams,
  })
  return useMemo(() => {
    const ids = subscription.status === 'loaded' && subscription.data?.adminDashboardRequestIds?.status === ResourceStatus.Loaded
      ? subscription.data?.adminDashboardRequestIds?.data?.map(item => item.id) ?? []
      : null
    return ids !== null ? ids.filter(id => !processedRequestIds.has(id)) : null
  }, [subscription, processedRequestIds])
}

/**
 * Checks if the billing group admin request dashboard is enabled for the intended audience.
 * @param isIntendedAudience - Whether the user is in the intended audience.
 * @returns True if enabled, false otherwise.
 */
export function isBillingGroupAdminEnabled(isIntendedAudience?: boolean): boolean {
  const experiment = selectExperimentConfigHook('exp_billing_group_admin_request_dash')
  return isIntendedAudience !== undefined && isIntendedAudience && experiment.getConfig().get('enabled', false)
}

// Exports (refactored to use new names)
export const Bk = truncateText
export const L8 = userTypeDropdownId
export const Lv = emDash
export const MI = maxTextLength
export const OL = billingGroupDropdownId
export const V7 = RequestFilterType
export const Xv = InvitedByType
export const YC = productDropdownId
export const ZY = isBillingGroupAdminEnabled
export const Zm = TextWithSpinner
export const dC = sortDropdownId
export const i5 = FirstSortOrder
export const k_ = requestString
export const lJ = sortLabels
export const oc = billingGroupAdminRequestsDashboard
export const ps = TeamOrg
export const r1 = MemberGuest
export const uH = adminRequestsDashboard
export const yz = renderProductIcon
export const z7 = useFilteredRequestIds
