import type { StatsigUser } from 'statsig-js'
import { delay } from '../905/236856'
import { getAnonymousId } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { TimeoutError } from '../3973/473379'
import { normalizeJobRole } from '../3973/538504'
import { booleanFlagAtom } from '../3973/697935'
import { areValuesEqualOrEmpty, getStringValueOrDefault, reportStatsigError, trackUserValuesBootstrapMismatch } from '../3973/890507'
import { atomStoreManager } from '../figma_app/27355'
import { isStudentValidated } from '../figma_app/141320'
import { getEnvironmentName, getInitialOptions, getLaunchDarklyFlagsExport, isGovCluster } from '../figma_app/169182'
import { getI18nState } from '../figma_app/363242'
import { getEmailDomain, isFigmaEmail } from '../figma_app/416935'
import { Rf as getFigmaMobile } from '../figma_app/546509'
import { desktopAPIInstance } from '../figma_app/876459'
import { isInteractionPathCheck } from '../figma_app/897289'

export let RETRY_COUNT = 8
export let TIMEOUT_MS = 4e3
export let UNKNOWN = 'unknown'
export let SUPPORTED_COUNTRIES = new Set(['AT', 'AU', 'BE', 'CA', 'CH', 'CY', 'CZ', 'DE', 'DK', 'FI', 'GB', 'GR', 'GT', 'HU', 'IE', 'IS', 'LU', 'NL', 'NO', 'NZ', 'PA', 'PT', 'SE', 'US'])
export let hasBootstrapValues = () => !!getInitialOptions().statsig_bootstrap_values
export let hasStatsigClientApiKey = () => !!getInitialOptions().statsig_figma_app_client_api_key
export let shouldSkipPerfCheck = () => getInitialOptions().is_second_page_for_perf_tests || !isInteractionPathCheck()
export let isProductionMirrorEnabled = () => getLaunchDarklyFlagsExport().statsig_enable_production_mirror ?? false

export function getBootstrapValue(e) {
  if (!hasBootstrapValues())
    return null
  let t = getInitialOptions().statsig_bootstrap_values
  if (t == null)
    return null
  if (!Array.isArray(t))
    return validateBootstrapValue(t, e) ? t : null
  for (let i of t) {
    if (validateBootstrapValue(i, e))
      return i
  }
  return null
}

export function isPlanKeyTargetingEnabled() {
  return getFeatureFlags().enable_plan_key_targeting_in_web_and_sinatra ?? false
}

export function validateBootstrapValue(e, t) {
  if (e == null || e.evaluated_keys == null || typeof e.evaluated_keys != 'object')
    return false
  let i = e.evaluated_keys
  let r = i.customIDs ?? {}
  if (getStringValueOrDefault(i, 'userID', '') !== t.userId)
    return false
  let s = getStringValueOrDefault(r, 'teamID', null)
  let o = areValuesEqualOrEmpty(s, t.teamId)
  let l = getStringValueOrDefault(r, 'orgID', null)
  let d = areValuesEqualOrEmpty(l, t.orgId)
  let c = true
  if (isPlanKeyTargetingEnabled()) {
    let e = getStringValueOrDefault(r, 'planKey', null);
    (c = areValuesEqualOrEmpty(e, t.planKey)) || trackUserValuesBootstrapMismatch('plan_key', e, t.planKey)
  }
  let u = getStringValueOrDefault(r, 'stableID', null)
  let p = getAnonymousId() ?? null
  let m = areValuesEqualOrEmpty(u, p)
  o || trackUserValuesBootstrapMismatch('team_id', s, t.teamId)
  d || trackUserValuesBootstrapMismatch('org_id', l, t.orgId)
  m || trackUserValuesBootstrapMismatch('stable_id', u, p)
  return o && d && m && c
}

export function getStatsigConfig(e: any, t?: any) {
  let i = getTimeoutForCountry(getInitialOptions().iso_code)
  return {
    environment: {
      tier: getEnvironmentName(),
    },
    disableCurrentPageLogging: true,
    disableAutoMetricsLogging: true,
    disableErrorLogging: true,
    initTimeoutMs: i,
    overrideStableID: getAnonymousId(),
    initCompletionCallback: e,
    updateUserCompletionCallback: t,
    fetchMode: 'cache-or-network',
    localMode: isGovCluster() || isProductionMirrorEnabled(),
    disableDiagnosticsLogging: isGovCluster(),
  }
}

export function getStatsigUser(e, t, i, s): StatsigUser {
  let u = getInitialOptions()
  let m = getAnonymousId()
  e || t || i || m || s || reportStatsigError('No userId, nor teamId, nor orgId, not planKey, nor analytics anonymous ID supplied to getStatsigUser.')
  let h = getBootstrapValue({
    userId: e,
    teamId: t,
    orgId: i,
    planKey: s,
  })
  let g = h?.evaluated_keys
  let {
    userFigmateEmail,
  } = g?.customIDs || {}
  return {
    custom: {
      cluster_name: u.cluster_name || UNKNOWN,
      developer_id: u.employee_email || UNKNOWN,
      figma_service: 'figma_app',
      integration_host: getInitialOptions().integration_host || UNKNOWN,
      page_app_type: (function () {
        if (desktopAPIInstance)
          return desktopAPIInstance.beta ? 'desktop_beta' : 'desktop'
        let e = getFigmaMobile()
        return e ? e.appName || 'mobile_unknown' : 'web'
      }()),
      page_app_version: (function () {
        if (desktopAPIInstance)
          return desktopAPIInstance.getInformationalVersion()
        let e = getFigmaMobile()
        return e?.marketingNumber ? e.marketingNumber : UNKNOWN
      }()),
      page_locale: getI18nState()?.getPrimaryLocale(false) || UNKNOWN,
      release_git_tag: u.release_git_tag || UNKNOWN,
      release_manifest_git_commit: u.release_manifest_git_commit || UNKNOWN,
      release_server_git_commit: u.release_server_git_commit || UNKNOWN,
      user_created_at: u.user_data?.created_at || UNKNOWN,
      user_email_domain: u.user_data?.email && getEmailDomain(u.user_data.email) || UNKNOWN,
      user_is_figma_employee: isFigmaEmail(u.user_data?.email),
      user_is_student: u.user_data?.student_validated_at ? isStudentValidated(u.user_data) : UNKNOWN,
      user_job_title: normalizeJobRole(u.user_data?.profile?.job_title) || UNKNOWN,
      user_locale: getInitialOptions().user_data?.locale || UNKNOWN,
    },
    customIDs: {
      ...(t && {
        teamID: t,
      }),
      ...(i && {
        orgID: i,
      }),
      ...(m && {
        stableID: m,
      }),
      ...(u.employee_email && {
        developerID: u.employee_email,
      }),
      ...(s && {
        planKey: s,
      }),
      ...(userFigmateEmail && {
        userFigmateEmail,
      }),
    },
    ip: u.user_ip,
    userAgent: navigator.userAgent,
    ...(e && {
      userID: e,
    }),
  }
}

export function getTimeoutForCountry(e) {
  return e == null ? 2000 : SUPPORTED_COUNTRIES.has(e) ? 1000 : 2000
}

export function withTimeout(e, t) {
  let i = typeof t == 'number'
    ? {
        timeout: t,
      }
    : t
  return Promise.race([delay(i.timeout).then(() => Promise.reject(new TimeoutError(i.label))), e])
}

export function getUserKey(e) {
  return JSON.stringify([e.userId, e.teamId, e.orgId, e.planKey])
}

export function setEnvironmentFlag(e) {
  (e === 'local' || e === 'staging') && atomStoreManager.set(booleanFlagAtom, true)
}

export function withDelay(e) {
  return atomStoreManager.get(booleanFlagAtom) ? Promise.all([e, delay(3000)]).then(e => e[0]) : e
}

export const Cj = getBootstrapValue
export const Xu = withDelay
export const cZ = setEnvironmentFlag
export const et = getUserKey
export const fU = getTimeoutForCountry
export const l2 = shouldSkipPerfCheck
export const me = getStatsigConfig
export const nK = TIMEOUT_MS
export const oM = RETRY_COUNT
export const pF = hasStatsigClientApiKey
export const tU = isPlanKeyTargetingEnabled
export const vl = getStatsigUser
export const wj = withTimeout
