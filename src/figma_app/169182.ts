// /Users/allen/sigma-main/src/figma_app/169182.ts

// Imports from other modules

import type { InitialOptions } from '../../types/global'
import { getFeatureFlags } from '../905/601108'
import { parseQuerySimple } from '../905/634134'
import { getCurrentSearch, getLanguageFallbacks, getParentPathname, getParentSearch } from '../905/806865'
import { allLanguages, defaultLanguage } from '../905/816253'

// Types for better type safety
interface UserConfig {
  disable_personal: boolean
  teams: any[]
  team_users: any[]
  roles: any[]
  orgs: any[]
  org_drafts_owners: any[]
  user_favorite_fonts: any[]
  is_free_user: boolean
  is_starter_user: boolean
}

// Original: $$c17 - Default user configuration
export const defaultUserConfig: UserConfig = {
  disable_personal: true,
  teams: [],
  team_users: [],
  roles: [],
  orgs: [],
  org_drafts_owners: [],
  user_favorite_fonts: [],
  is_free_user: true,
  is_starter_user: true,
}

// Original: u - Feature flag rules (converted from IIFE to named function)
/**
 * Gets the feature flag rules from initial options.
 * @returns {Record<string, any>} The feature flag rules with hash function.
 */
function getFeatureFlagRules(): Record<string, any> {
  const rules = JSON.parse(JSON.stringify(getInitialOptions().feature_flag_rules || {}))
  rules.hash_function = getInitialOptions().feature_flags_hash_function || 'md5'
  return rules
}

// Original: p - LaunchDarkly client flags (converted from IIFE to named function)
/**
 * Gets the LaunchDarkly client flags from initial options.
 * @returns {Record<string, any>} The frozen LaunchDarkly client flags.
 */
function getLaunchDarklyFlags(): Record<string, any> {
  const flags = JSON.parse(JSON.stringify(getInitialOptions().launchdarkly_client_flags || {}))
  Object.freeze(flags)
  return flags
}

// Original: zoom_client_user_agent override logic
const { zoom_client_user_agent } = getInitialOptions()
if (zoom_client_user_agent) {
  (function overrideUserAgent(global: Window, newUserAgent: string) {
    if (global.navigator.userAgent !== newUserAgent) {
      const descriptor = {
        get() {
          return newUserAgent
        },
      }
      try {
        Object.defineProperty(global.navigator, 'userAgent', descriptor)
      }
      catch {
        (global as any).navigator = Object.create(navigator, {
          userAgent: descriptor,
        })
      }
    }
  })(window, zoom_client_user_agent)
}

// Original: $$m24 - Empty object
export const emptyObject = {}

export function getFeatureFlagRulesExport() {
  return getFeatureFlagRules()
}

export function getLaunchDarklyFlagsExport() {
  return getLaunchDarklyFlags()
}

/**
 * Original: $$f25 - Conditional based on feature flag.
 * @param {string} flag - The feature flag key.
 * @param {any} ifTrue - Value if flag is true.
 * @param {any} ifFalse - Value if flag is false.
 * @returns {any} The conditional value.
 */
export function conditionalFeatureFlag(flag: string, ifTrue: any, ifFalse: any): any {
  return getFeatureFlags()[flag] ? ifTrue : ifFalse
}

// Original: i.withFeatureFlag - Feature flag conditional component
// const FeatureFlagUtils = {
//   withFeatureFlag(flag: string, Component: any) {
//     if (getFeatureFlags()[flag]) {
//       return Component
//     }
//     const NullComponent = () => null
//     NullComponent.displayName = ''
//     return NullComponent
//   },
// }

// Initial Options and Configuration Functions

/**
 * Original: $$E3 - Sets editing file in initial options.
 * @param {any} file - The editing file.
 */
export function setEditingFile(file: any) {
  (self).INITIAL_OPTIONS = {
    ...(self).INITIAL_OPTIONS,
    editing_file: file,
  }
}

/**
 * Original: $$y22 - Clears payment flow data in initial options.
 */
function clearPaymentFlowData() {
  (self as any).INITIAL_OPTIONS = {
    ...(self as any).INITIAL_OPTIONS,
    payment_flow_data: null,
  }
}

/**
 * Original: $$b2 - Gets payment flow data.
 * @returns {any} Payment flow data.
 */
export function getPaymentFlowData() {
  return getInitialOptions().payment_flow_data
}

/**
 * Original: $$T23 - Gets initial options.
 * @returns {InitialOptions} Initial options.
 */
export function getInitialOptions(): InitialOptions {
  return window.INITIAL_OPTIONS || {} as InitialOptions
}

/**
 * Original: $$I10 - Gets slides default blank template.
 * @returns {string} Default blank template.
 */
export function getSlidesDefaultBlankTemplate() {
  return getInitialOptions().slides_default_blank_template || ''
}

// Environment and Cluster Functions

/**
 * Original: $$S4 - Checks if cluster is local.
 * @returns {boolean} True if local.
 */
export function isLocalCluster() {
  return getInitialOptions().cluster_name === 'local'
}

/**
 * Original: $$v11 - Checks if cluster is staging.
 * @returns {boolean} True if staging.
 */
export function isStagingCluster() {
  return getInitialOptions().cluster_name === 'staging'
}

/**
 * Original: $$A7 - Checks if cluster is prod.
 * @returns {boolean} True if prod.
 */
export function isProdCluster() {
  return getInitialOptions().cluster_name === 'prod'
}

/**
 * Original: $$x19 - Checks if local dev on cluster.
 * @returns {boolean} True if local dev on staging.
 */
export function isLocalDevOnCluster() {
  return (getInitialOptions().local_dev_on_cluster || false) && document.domain === 'staging.figma.com'
}

/**
 * Original: $$N13 - Checks if development environment.
 * @returns {boolean} True if dev env.
 */
export function isDevEnvironment() {
  return isLocalCluster() || isStagingCluster() || getInitialOptions().cluster_name?.startsWith('devenv') || getInitialOptions().cluster_name === 'gov-staging'
}

// Original: n - Property for campfire model
const campfireModelProperty = 'campfire_model_enabled'
Object.defineProperty(getInitialOptions(), campfireModelProperty, {
  writable: false,
  configurable: false,
})

/**
 * Original: $$C21 - Checks if government cluster.
 * @returns {boolean} True if gov.
 */
export function isGovCluster() {
  const cluster = getInitialOptions().cluster_name
  return cluster ? cluster === 'gov' : window.location.hostname === 'figma-gov.com'
}

/**
 * Original: $$w9 - Gets support email based on cluster.
 * @returns {string} Support email.
 */
export function getSupportEmail() {
  return isGovCluster() ? 'support-figgov@figma.com' : 'support@figma.com'
}

/**
 * Original: $$O12 - Checks if URL includes figma-gov.com.
 * @param {string} url - The URL to check.
 * @returns {boolean} True if includes.
 */
export function includesGovDomain(url: string) {
  return url.includes('figma-gov.com')
}

/**
 * Original: $$R16 - Gets static domain.
 * @returns {string} Static domain.
 */
export function getStaticDomain() {
  return isGovCluster() ? 'static.figma-gov.com' : 'static.figma.com'
}

/**
 * Original: $$L1 - Builds full static URL.
 * @param {string} path - The path.
 * @returns {string} Full URL.
 */
export function buildStaticUrl(path: string = '') {
  if (path.startsWith('/')) {
    path = path.slice(1)
  }
  return `https://${getStaticDomain()}/${path}`
}

/**
 * Original: $$P15 - Builds upload URL.
 * @param {string} path - The path.
 * @returns {string} Upload URL.
 */
export function buildUploadUrl(path: string = '') {
  if (path.startsWith('/')) {
    path = path.slice(1)
  }
  return buildStaticUrl(`uploads/${path}`)
}

/**
 * Original: $$D14 - Gets consent region.
 * @returns {string | undefined} Consent region.
 */
export function getConsentRegion() {
  return getInitialOptions().consent_region
}

/**
 * Original: $$k8 - Gets environment name.
 * @returns {string} Environment name.
 */
export function getEnvironmentName() {
  const cluster = getInitialOptions().cluster_name || ''
  switch (cluster) {
    case 'staging':
      return cluster
    case 'prod':
      return 'production'
    case 'gov':
      return 'gov-prod'
    case 'gov-staging':
      return 'gov-staging'
    default:
      return 'development'
  }
}

// Original: $$M0 - Alias for getInitialOptions

// Original: $$F6 - Fake path constant
export const fakePath = 'https://fakepath.figma.com'

// User and Locale Functions

/**
 * Original: $$U18 - Gets locale fallbacks.
 * @returns {string[]} Locale fallbacks.
 */
export function getLocaleFallbacks(): string[] {
  const searches = [getParentSearch(), getCurrentSearch()]
  for (const search of searches) {
    if (search) {
      const params = parseQuerySimple(search)
      if (params.locale) {
        updateUserLocaleIfNeeded(params)
        return getLanguageFallbacks(params.locale)
      }
    }
  }
  const pathname = getParentPathname()
  if (pathname) {
    const lang = pathname.split('/')[1]
    if (lang && allLanguages.includes(lang)) {
      return getLanguageFallbacks(lang)
    }
  }
  const { user_data } = getInitialOptions()
  if (user_data?.locale && user_data.locale !== defaultLanguage) {
    return [user_data.locale, defaultLanguage]
  }
  if (!user_data) {
    const productLocale = document.documentElement.getAttribute('data-product-locale')
    if (productLocale && allLanguages.includes(productLocale)) {
      return [productLocale, defaultLanguage]
    }
  }
  return [defaultLanguage]
}

/**
 * Helper function to update user locale if needed.
 * @param {any} params - Query params.
 */
function updateUserLocaleIfNeeded(params: any) {
  const locale = params.locale
  const persist = !!params.persistLocale
  if (!locale || !persist)
    return
  const userData = getInitialOptions().user_data
  if (!userData)
    return
  const { id, locale: currentLocale } = userData
  if (allLanguages.includes(locale) && currentLocale !== locale) {
    fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify({ id, locale }),
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

/**
 * Original: $$B20 - Checks if e2e traffic.
 * @returns {boolean} True if e2e traffic.
 */
export function isE2ETraffic() {
  return !!getInitialOptions().e2e_traffic
}

// Updated exports with meaningful names (refactored from original obfuscated names)
export const Ay = getInitialOptions
export const CZ = buildStaticUrl
export const DC = getPaymentFlowData
export const Hk = setEditingFile
export const IX = isLocalCluster
export const KI = getFeatureFlagRulesExport
export const Lz = fakePath
export const O_ = isProdCluster
export const Uv = getEnvironmentName
export const W4 = getSupportEmail
export const Xg = getSlidesDefaultBlankTemplate
export const YG = isStagingCluster
export const aW = includesGovDomain
export const b5 = isDevEnvironment
export const bg = getConsentRegion
export const ck = buildUploadUrl
export const fO = getStaticDomain
export const gq = defaultUserConfig
export const mm = getLocaleFallbacks
export const pT = isLocalDevOnCluster
export const rd = isE2ETraffic
export const sL = isGovCluster
export const sj = clearPaymentFlowData
export const tl = getInitialOptions
export const u3 = emptyObject
export const u4 = conditionalFeatureFlag
export const w0 = getLaunchDarklyFlagsExport
