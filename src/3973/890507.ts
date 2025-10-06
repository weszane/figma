// File: /Users/allen/sigma-main/src/3973/890507.ts
// Refactored for better readability, maintainability, and logical grouping.
// Original obfuscated names are preserved in comments for traceability.
// Added JSDoc-style documentation, types, and simplified logic where possible.
// Grouped related functionality: constants, utilities, analytics tracking, timer class, error reporting, and performance logging.
// Ensured same functionality and behavior as original.

import { reportError } from '../905/11';
import { ServiceCategories } from '../905/165054';
import { analyticsEventManager, getAnonymousId, trackEventAnalytics } from '../905/449184';
import { PerfTimer } from '../905/609396';
import { customHistory } from '../905/612521';
import { normalizePathname } from '../3973/348894';
import { ActionType, BootstrapType, ErrorType, TimeoutError } from '../3973/473379';
import { getInitialOptions } from '../figma_app/169182';
import { isFigmaMirrorAndroidApp, isFigmaMobileIOSApp } from '../figma_app/778880';
import { isInteractionPathCheck } from '../figma_app/897289';

// Constants
export const EXPERIMENT_NAME_FULLSCREEN_VIEW = 'exp_aa_test_fullscreen_view'; // Original: $$p13

// Utilities
/**
 * Checks if a value is sampled at 10% probability.
 * @returns {boolean} True if sampled.
 */
export const isSampled10Percent = () => Math.random() < 0.1; // Original: $$h9

/**
 * Compares two values, considering null, undefined, or empty strings as equal.
 * @param {any} value1 - First value.
 * @param {any} value2 - Second value.
 * @returns {boolean} True if values are equal or both empty/null.
 */
export function areValuesEqualOrEmpty(value1: any, value2: any): boolean {
  return value1 == null || value1 === '' || value1 === undefined ? value2 == null || value2 === '' || value2 === undefined : value1 === value2;
} // Original: $$b12

/**
 * Retrieves a string value from an object or returns a default.
 * @param {any} obj - Object to check.
 * @param {string} key - Key to retrieve.
 * @param {string} defaultValue - Default value if not found or not a string.
 * @returns {string} The string value or default.
 */
export function getStringValueOrDefault(obj: any, key: string, defaultValue: string): string {
  if (obj == null || typeof obj !== 'object') return defaultValue;
  const value = obj[key];
  return typeof value !== 'string' ? defaultValue : value;
} // Original: $$w1

/**
 * Checks if the current session is an E2E test for Statsig.
 * @returns {boolean} True if it's a relevant E2E test.
 */
function isE2eTestForStatsig(): boolean {
  const testName = getInitialOptions().e2e_test_name;
  return testName != null && ['statsig_init', 'statsig_context_switch'].includes(testName);
} // Original: C

/**
 * Checks if a value is sampled at 5% probability.
 * @returns {boolean} True if sampled.
 */
const isSampled5Percent = (): boolean => Math.random() <= 0.05; // Original: O

// Performance Logging
/**
 * Logs a performance metric if conditions are met.
 * @param {string} metricName - Name of the metric.
 * @param {number} value - Metric value.
 */
export function logPerformanceMetric(metricName: string, value: number): void {
  if (getInitialOptions().is_second_page_for_perf_tests || isE2eTestForStatsig()) {
    if (window.STATSIG_PERF === undefined) window.STATSIG_PERF = {};
    window.STATSIG_PERF[metricName] = value;
  }
} // Original: $$m11

// Analytics Tracking Functions
/**
 * Tracks experiment evaluation events.
 * @param {string} experiment - Experiment name.
 * @param {number} timeMs - Evaluation time in ms.
 * @param {string} method - Evaluation method.
 * @param {string} reason - Evaluation reason.
 * @param {string} ruleId - Rule ID.
 * @param {any} user - Statsig user object.
 */
export function trackExperimentEvaluation(experiment: string, timeMs: number, method: string, reason: string, ruleId: string, user: any): void {
  trackEventAnalytics('statsig_client_exp_eval', {
    eval_reason: reason,
    eval_method: method,
    experiment,
    client_exp_eval_time_ms: timeMs,
    entry_point: window.ENTRY_POINT,
    rule_id: ruleId,
    statsig_user: user == null ? null : JSON.stringify(user)
  }, {
    forwardToDatadog: true,
    batchRequest: true
  });
} // Original: $$f15

/**
 * Tracks user values bootstrap mismatch.
 * @param {string} reason - Mismatch reason.
 * @param {any} bootstrapValue - Bootstrap value.
 * @param {any} userKeyValue - User key value.
 */
export function trackUserValuesBootstrapMismatch(reason: string, bootstrapValue: any, userKeyValue: any): void {
  trackEventAnalytics('user_values_bootstrap_mismatch', {
    mismatch_reason: reason,
    bootstrap_value: bootstrapValue,
    user_key_value: userKeyValue
  }, {
    forwardToDatadog: true,
    batchRequest: true
  });
} // Original: $$v0

/**
 * Tracks invalid bootstrap info.
 * @param {string} experimentName - Experiment name.
 * @param {string} bootstrapUserId - Bootstrap user ID.
 * @param {any} bootstrapCustomIds - Bootstrap custom IDs.
 * @param {string} statsigUserId - Statsig user ID.
 * @param {any} statsigCustomIds - Statsig custom IDs.
 */
export function trackInvalidBootstrapInfo(experimentName: string, bootstrapUserId: string, bootstrapCustomIds: any, statsigUserId: string, statsigCustomIds: any): void {
  analyticsEventManager.trackDefinedEvent('application_platform.invalid_bootstrap_info', {
    experiment_name: experimentName,
    bootstrap_user_id: bootstrapUserId,
    bootstrap_custom_ids: bootstrapCustomIds,
    statsig_user_user_id: statsigUserId,
    statsig_user_custom_ids: statsigCustomIds
  });
} // Original: $$y2

/**
 * Tracks Statsig plan key bootstrap.
 * @param {any} featureFlagValue - Feature flag value.
 * @param {string} planKey - Initial options plan key.
 * @param {string} orgId - Initial options org ID.
 * @param {string} sidebarOrgId - Sidebar or open file org ID.
 * @param {string} sidebarTeamId - Sidebar or open file team ID.
 * @param {boolean} useTeamIdHook - Use team ID hook.
 * @param {string} selectedView - Selected view.
 * @param {string} usedPlanKey - Used plan key.
 * @param {string} usedOrgId - Used org ID.
 * @param {string} usedUserId - Used user ID.
 */
export function trackStatsigPlanKeyBootstrap(featureFlagValue: any, planKey: string, orgId: string, sidebarOrgId: string, sidebarTeamId: string, useTeamIdHook: boolean, selectedView: string, usedPlanKey: string, usedOrgId: string, usedUserId: string): void {
  analyticsEventManager.trackDefinedEvent('application_platform.statsig_plan_key_bootstrap', {
    statsig_feature_flag_value: featureFlagValue,
    initial_options_plan_key: planKey,
    initial_options_org_id: orgId,
    sidebar_or_open_file_org_id: sidebarOrgId,
    sidebar_or_open_file_team_id: sidebarTeamId,
    use_team_id_hook: useTeamIdHook,
    selected_view: selectedView,
    used_plan_key: usedPlanKey,
    used_org_id: usedOrgId,
    used_user_id: usedUserId
  });
} // Original: $$T3

/**
 * Tracks Statsig client init time.
 * @param {boolean} isProvider - If it's a provider.
 * @param {BootstrapType} bootstrapType - Bootstrap type.
 * @param {boolean} success - Success flag.
 * @param {number} initTimeMs - Init time in ms.
 * @param {string} message - Message.
 * @param {ErrorType | null} errorCause - Error cause.
 * @param {any} user - User object.
 * @param {any} bootstrap - Bootstrap object.
 * @param {string} hookLocation - Hook location.
 */
export function trackStatsigClientInitTime(isProvider: boolean, bootstrapType: BootstrapType, success: boolean, initTimeMs: number, message: string, errorCause: ErrorType | null, user: any, bootstrap: any, hookLocation: string = ''): void {
  if (isInteractionPathCheck() || isE2eTestForStatsig()) {
    logPerformanceMetric('INIT_TIME', initTimeMs);
  }
  const isMobile = isFigmaMirrorAndroidApp() || isFigmaMobileIOSApp();
  const userIds = user ? [user.userId, user.teamId, user.orgId, getAnonymousId(), user.planKey].map(id => id || '') : [];
  const bootstrapValues = getInitialOptions().statsig_bootstrap_values;
  const bootstrapObj = Array.isArray(bootstrapValues) ? bootstrapValues[0] : bootstrapValues;
  const bootstrapIds = (bootstrapObj => {
    if (bootstrapObj && bootstrapObj.evaluated_keys !== null && typeof bootstrapObj.evaluated_keys === 'object') {
      const keys = bootstrapObj.evaluated_keys;
      const customIds = keys.customIDs ?? {};
      return [getStringValueOrDefault(keys, 'userID', ''), getStringValueOrDefault(customIds, 'teamID', ''), getStringValueOrDefault(customIds, 'orgID', ''), getStringValueOrDefault(customIds, 'stableID', ''), getStringValueOrDefault(customIds, 'planKey', '')];
    }
    return [];
  })(bootstrap ?? bootstrapObj);
  const entryRoute = normalizePathname(customHistory.location.pathname);
  const userKeyComparison = (() => {
    const keys = ['user_id', 'team_id', 'org_id', 'stable_id', 'plan_key'];
    if (userIds.length !== keys.length || bootstrapIds.length !== keys.length) return 'n/a';
    return keys.map((key, index) => areValuesEqualOrEmpty(userIds[index], bootstrapIds[index]) ? null : `mismatch ${key}`).find(Boolean) || 'valid';
  })();
  trackEventAnalytics('Statsig Client Init Time', {
    client_init_time: initTimeMs,
    userId: getInitialOptions().user_data?.id,
    source: 'figma_app',
    source_type: isProvider ? 'provider' : 'singleton',
    errored: !success,
    error_cause: errorCause === null ? null : ErrorType[errorCause],
    entry_route: entryRoute,
    entry_point: window.ENTRY_POINT,
    bootstrapped: bootstrapType === BootstrapType.BOOTSTRAP,
    client_bootstrap_enabled: !isMobile,
    received_bootstrap: !!getInitialOptions().statsig_bootstrap_values,
    message,
    has_user_id: !!getInitialOptions().user_data?.id,
    client_user_team_org_stable_ids: userIds,
    bootstrap_user_team_org_stable_ids: bootstrapIds,
    user_key_comparison: userKeyComparison,
    statsig_api_enabled: true,
    calling_hook_location: hookLocation
  }, {
    forwardToDatadog: true
  });
} // Original: $$E10

/**
 * Tracks client values network call.
 * @param {StatsigTimer} timer - Timer instance.
 * @param {string} endpoint - Endpoint.
 * @param {ActionType} actionType - Action type.
 */
export function trackClientValuesNetworkCall(timer: StatsigTimer, endpoint: string, actionType: ActionType): void {
  trackEventAnalytics('Statsig Client Values Network Call', {
    client_values_network_call_latency_ms: timer.getElapsedTimeMs(),
    entry_point: window.ENTRY_POINT,
    reason: ActionType[actionType],
    success: !timer.getCaughtError(),
    end_point: endpoint,
    timed_out: timer.getTimedOut(),
    statsig_api_enabled: false,
    error_message: timer.getError()?.message
  }, {
    forwardToDatadog: true
  });
} // Original: $$k7

/**
 * Tracks context switch cache miss.
 * @param {any[]} keys - Keys.
 * @param {string} cachedKeys - Cached keys.
 * @param {number} cachedKeyCount - Cached key count.
 */
export function trackContextSwitchCacheMiss(keys: any[], cachedKeys: any, cachedKeyCount: number): void {
  trackEventAnalytics('Statsig Client Context Switch Cache Miss', {
    keys: JSON.stringify(keys),
    cached_keys: cachedKeys,
    cached_key_count: cachedKeyCount,
    entry_point: window.ENTRY_POINT
  }, {
    forwardToDatadog: true
  });
} // Original: $$R6

/**
 * Tracks prefetch calls.
 * @param {number} userCount - Number of users.
 * @param {number} cacheHits - Cache hits.
 * @param {string | null} errorMessage - Error message.
 */
export function trackPrefetchCalls(userCount: number, cacheHits: number, errorMessage: string | null): void {
  trackEventAnalytics('Statsig prefetch calls', {
    nb_users: userCount,
    cache_hits: cacheHits,
    error_message: errorMessage,
    success: errorMessage === null,
    statsig_api_enabled: true
  }, {
    forwardToDatadog: true
  });
} // Original: $$I4

/**
 * Tracks client update user time.
 * @param {number} updateTimeMs - Update time in ms.
 * @param {boolean} success - Success flag.
 * @param {boolean} cacheHit - Cache hit flag.
 * @param {string} message - Message.
 */
export function trackClientUpdateUserTime(updateTimeMs: number, success: boolean, cacheHit: boolean, message: string): void {
  trackEventAnalytics('Statsig Client Update User Time', {
    client_update_user_time_ms: updateTimeMs,
    userId: getInitialOptions().user_data?.id,
    entry_point: window.ENTRY_POINT,
    source: 'figma_app',
    cache_hit: cacheHit,
    errored: !success,
    message,
    statsig_api_enabled: true
  }, {
    forwardToDatadog: true
  });
  if (success && isE2eTestForStatsig()) {
    logPerformanceMetric('CONTEXT_SWITCH_TIME', updateTimeMs);
  }
} // Original: $$D8

// Timer Class
/**
 * Timer class for Statsig operations.
 */
export class StatsigTimer {
  caughtError: boolean = false;
  elapsedTimeMs: number = 0;
  error: Error | null = null;
  timer: PerfTimer;
  constructor(label: string) {
    this.timer = new PerfTimer(label, {});
  }
  startTimer(): void {
    this.timer.start();
  }
  isTimerRunning(): boolean {
    return this.timer.isRunning;
  }
  stopTimer(): void {
    this.elapsedTimeMs = this.timer.stop();
  }
  setCaughtError(error: Error): void {
    this.caughtError = true;
    if (error instanceof Error) {
      this.error = error;
    }
  }
  getCaughtError(): boolean {
    return this.caughtError;
  }
  getTimedOut(): boolean {
    return this.error instanceof TimeoutError;
  }
  getError(): Error | null {
    return this.error;
  }
  getElapsedTimeMs(): number {
    return this.elapsedTimeMs;
  }
} // Original: $$S14

// Error Reporting
/**
 * Reports a Statsig error if sampled.
 * @param {string} message - Error message.
 */
export function reportStatsigError(message: string): void {
  if (message && isSampled5Percent()) {
    const error = new Error(message);
    reportError(ServiceCategories.GROWTH_PLATFORM, error, {
      tags: {
        statsig_sdk: true
      }
    });
  }
} // Original: $$x5

// Exported Aliases (updated to match refactored names)
export const AQ = trackUserValuesBootstrapMismatch;
export const B7 = getStringValueOrDefault;
export const Dr = trackInvalidBootstrapInfo;
export const N6 = trackStatsigPlanKeyBootstrap;
export const Tr = trackPrefetchCalls;
export const Us = reportStatsigError;
export const Vj = trackContextSwitchCacheMiss;
export const _q = trackClientValuesNetworkCall;
export const bz = trackClientUpdateUserTime;
export const cP = isSampled10Percent;
export const kX = trackStatsigClientInitTime;
export const pk = logPerformanceMetric;
export const q3 = areValuesEqualOrEmpty;
export const su = EXPERIMENT_NAME_FULLSCREEN_VIEW;
export const yY = StatsigTimer;
export const zz = trackExperimentEvaluation;
