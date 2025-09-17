import { z } from 'zod'
import { DynamicConfigSchema, TeamBootstrapSchema } from '../3973/473379'
import { getInitialOptions } from '../figma_app/169182'
import { APIParameterUtils, createMetaValidator } from '../figma_app/181241'

/**
 * Boolean map schema for StatsigFlagStatusForUserValidator
 */
const StatsigFlagStatusForUserSchema = z.record(z.string(), z.boolean())

/**
 * String map schema for StatsigFlagDescriptionsValidator
 */
const StatsigFlagDescriptionsSchema = z.record(z.string(), z.string())

/**
 * Update overrides response schema for StatsigUpdateOverridesValidator
 */
const StatsigUpdateOverridesSchema = z.object({
  success: z.array(z.string()),
  errors: z.record(z.string(), z.string()).optional(),
})

/**
 * Validators for Statsig API responses
 */
export const StatsigValidators = {
  StatsigInitializeResponseValidator: createMetaValidator(
    'StatsigInitializeResponseValidator',
    DynamicConfigSchema,
    null,
  ),
  StatsigInitializeResponseBatchedValidator: createMetaValidator(
    'StatsigInitializeResponseBatchedValidator',
    TeamBootstrapSchema,
    null,
  ),
  StatsigFlagStatusForUserValidator: createMetaValidator(
    'StatsigFlagStatusForUserValidator',
    StatsigFlagStatusForUserSchema,
    null,
  ),
  StatsigFlagDescriptionsValidator: createMetaValidator(
    'StatsigFlagDescriptionsValidator',
    StatsigFlagDescriptionsSchema,
    null,
  ),
  StatsigUpdateOverridesValidator: createMetaValidator(
    'StatsigUpdateOverridesValidator',
    StatsigUpdateOverridesSchema,
    null,
  ),
}

/**
 * Utility functions for interacting with Statsig API endpoints.
 */
export const StatsigAPI = {
  /**
   * Fetches bootstrap data for Statsig relay proxy.
   * @param params - { orgId, teamId }
   * @param options - { prefetch }
   */
  getStatsigRelayProxyBootstrap(
    params: { orgId?: string, teamId?: string } = {},
    options: { prefetch?: boolean } = {},
  ) {
    const integrationHost = getInitialOptions().integration_host
    const apiParams = APIParameterUtils.toAPIParameters({
      orgId: params.orgId,
      teamId: params.teamId,
      integrationHost,
    })
    const fetchOptions = options.prefetch
      ? { retryCount: 0 }
      : { retryCount: 2 }
    // Original: getStatsigRelayProxyBootstrap
    return StatsigValidators.StatsigInitializeResponseValidator.validate(
      async ({ xr }) => await xr.get('/api/statsig/bootstrap', apiParams, fetchOptions),
    )
  },

  /**
   * Fetches batched bootstrap data for Statsig relay proxy (V2).
   * @param params - { orgId, teamIds }
   * @param options - { prefetch }
   */
  getStatsigRelayProxyBootstrapV2(
    params: { orgId?: string, teamIds?: string[] } = {},
    options: { prefetch?: boolean } = {},
  ) {
    const integrationHost = getInitialOptions().integration_host
    const teamIdsParam
      = params.teamIds != null && params.teamIds.length > 0
        ? params.teamIds.join(',')
        : undefined
    const apiParams = APIParameterUtils.toAPIParameters({
      orgId: params.orgId,
      teamIds: teamIdsParam,
      integrationHost,
    })
    const fetchOptions = options.prefetch
      ? { retryCount: 0 }
      : { retryCount: 2 }
    // Original: getStatsigRelayProxyBootstrapV2
    return StatsigValidators.StatsigInitializeResponseBatchedValidator.validate(
      async ({ xr }) => await xr.get('/api/v2/statsig/bootstrap', apiParams, fetchOptions),
    )
  },

  /**
   * Fetches flag status for user.
   */
  getStatsigFlagStatusForUser() {
    // Original: getStatsigFlagStatusForUser
    return StatsigValidators.StatsigFlagStatusForUserValidator.validate(
      async ({ xr }) => await xr.get('/api/statsig/flag_status_for_user'),
    )
  },

  /**
   * Fetches flag descriptions.
   */
  getStatsigFlagDescriptions() {
    // Original: getStatsigFlagDescriptions
    return StatsigValidators.StatsigFlagDescriptionsValidator.validate(
      async ({ xr }) => await xr.get('/api/statsig/flag_descriptions'),
    )
  },

  /**
   * Posts update overrides.
   * @param data - Payload for update overrides
   */
  postStatsigUpdateOverrides(data: unknown) {
    // Original: postStatsigUpdateOverrides
    return StatsigValidators.StatsigUpdateOverridesValidator.validate(
      async ({ xr }) => await xr.post('/api/statsig/update_overrides', data),
    )
  },
}

// Refactored export name for usage consistency
export const m = StatsigAPI
