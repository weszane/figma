import { z } from 'zod'
import { reportError } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { getInitialDynamicConfig } from '../3973/389215'

/**
 * Enum for config groups (original: $$o2)
 */
export const ConfigGroups = {
  GROUP_3: 'GROUP_3',
  GROUP_4: 'GROUP_4',
  GROUP_6: 'GROUP_6',
  GROUP_7: 'GROUP_7',
} as const

/**
 * Enum for legacy config groups (original: $$l5)
 */
export const LegacyConfigGroups = {
  GROUP_1: 'GROUP_1',
  GROUP_2: 'GROUP_2',
  GROUP_3: 'GROUP_3',
} as const

/**
 * Mapping of config keys to service categories (original: d)
 */
const configServiceCategoryMap: Record<string, ServiceCategories> = {
  redux_deprecation: ServiceCategories.FRONTEND_PLATFORM,
  migrate_team_data_to_livegraph: ServiceCategories.SCALE,
  test_config: ServiceCategories.FRONTEND_PLATFORM,
}

/**
 * Zod enum for config values (original: c)
 */
const configValueEnum = z.enum(['passthrough', 'shadowread', 'cutover'])

/**
 * Returns the config value for a given key and group, or 'passthrough' if invalid.
 * Reports error if value is invalid.
 * @param key - Config key
 * @param group - Config group
 * @returns Config value
 * (original: m)
 */
function getConfigValue(key: string, group: string): 'passthrough' | 'shadowread' | 'cutover' {
  const value = getInitialDynamicConfig(key).get(group, 'passthrough')
  const { success, data } = configValueEnum.safeParse(value)
  if (success)
    return data
  reportError(configServiceCategoryMap[key], new Error(`Invalid value for configGroup ${group}: ${value}`))
  return 'passthrough'
}

/**
 * Checks if the config value for the given key and group is 'shadowread' or 'cutover'.
 * @param key - Config key
 * @param group - Config group
 * @returns True if value is 'shadowread' or 'cutover'
 * (original: $$u4)
 */
export function isShadowreadOrCutover(key: string, group: string): boolean {
  const value = getConfigValue(key, group)
  return value === 'shadowread' || value === 'cutover'
}

/**
 * Checks if the config value for the given key and group is 'cutover'.
 * @param key - Config key
 * @param group - Config group
 * @returns True if value is 'cutover'
 * (original: $$p1)
 */
export function isCutover(key: string, group: string): boolean {
  return getConfigValue(key, group) === 'cutover'
}

/**
 * Checks if 'redux_deprecation' config is 'shadowread' or 'cutover' for the given group.
 * @param group - Config group
 * @returns True if value is 'shadowread' or 'cutover'
 * (original: $$_3)
 */
export function isReduxDeprecationShadowreadOrCutover(group: string): boolean {
  return isShadowreadOrCutover('redux_deprecation', group)
}

/**
 * Checks if 'redux_deprecation' config is 'cutover' for the given group.
 * @param group - Config group
 * @returns True if value is 'cutover'
 * (original: $$h0)
 */
export function isReduxDeprecationCutover(group: string): boolean {
  return isCutover('redux_deprecation', group)
}

// Exported aliases (refactored to match new names)
export const DQ = isReduxDeprecationCutover
export const If = isCutover
export const Pw = ConfigGroups
export const _X = isReduxDeprecationShadowreadOrCutover
export const pw = isShadowreadOrCutover
export const wv = LegacyConfigGroups
