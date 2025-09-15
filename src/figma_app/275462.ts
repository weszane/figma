import { useCallback } from 'react'
import { getFeatureFlags } from '../905/601108'
import { useAtomWithSubscription } from '../figma_app/27355'
import { FFileType } from '../figma_app/191312'
import { selectExperimentConfigHook } from '../figma_app/594947'
import { isStarterUserAtom } from '../figma_app/864723'
/**
 * Feature flag and experiment config utilities for Figma community app.
 * Original function names preserved in comments for traceability.
 */

/**
 * Checks if the current user is a starter user.
 * @returns {() => null}
 * @see $$c4
 */
export function setupStarterUserCallback(): () => null {
  const isStarterUser = useAtomWithSubscription(isStarterUserAtom)
  return useCallback(() => null, [isStarterUser])
}

/**
 * Returns a callback that always returns false.
 * @returns {() => boolean}
 * @see $$u9
 */
export function alwaysFalseCallback(): (() => boolean) {
  return useCallback(() => false, [])
}

/**
 * Returns a callback that always returns false.
 * @returns {() => boolean}
 * @see $$p17
 */
export function alwaysFalseCallback2(): (() => boolean) {
  return useCallback(() => false, [])
}

/**
 * Checks if the cmty_rdp_component_viewer experiment is enabled.
 * @returns {() => boolean}
 * @see $$_16
 */
export function isComponentViewerEnabled(): (() => boolean) {
  const { getConfig } = selectExperimentConfigHook('cmty_rdp_component_viewer')
  return useCallback(() => getConfig().get('enabled', false), [getConfig])
}

/**
 * Checks if admin publish is enabled or file type is SLIDES/COOPER.
 * @param {FFileType} fileType
 * @returns {boolean}
 * @see $$h2
 */
export function canAdminPublish(fileType?: FFileType): boolean {
  return !!getFeatureFlags().cmty_lib_admin_publish
    || (fileType && [FFileType.SLIDES, FFileType.COOPER].includes(fileType))
}

/**
 * Checks if full file publishing is enabled.
 * @returns {boolean}
 * @see $$m7
 */
export function isFullFilePublishingEnabled(): boolean {
  return !!getFeatureFlags().cmty_sites_full_file_publishing
}

/**
 * Checks if resource hub is enabled.
 * @returns {boolean}
 * @see $$g18
 */
export function isResourceHubEnabled(): boolean {
  return !!getFeatureFlags().cmty_resource_hub
}

/**
 * Checks if make publishing is enabled.
 * @returns {boolean}
 * @see $$f10
 */
export function isMakePublishingEnabled(): boolean {
  return !!getFeatureFlags().cmty_make_publishing
}

/**
 * Checks if make publishing updates are enabled.
 * @returns {boolean}
 * @see $$E5
 */
export function isMakePublishingUpdatesEnabled(): boolean {
  return !!getFeatureFlags().cmty_make_publishing_updates
}

/**
 * Checks if make discovery is enabled.
 * @returns {boolean}
 * @see $$y14
 */
export function isMakeDiscoveryEnabled(): boolean {
  return !!getFeatureFlags().cmty_make_discovery
}

/**
 * Checks if template publishing is enabled.
 * @returns {boolean}
 * @see $$b11
 */
export function isTemplatePublishingEnabled(): boolean {
  return !!getFeatureFlags().make_template_publishing
}

/**
 * Checks if resource hub internal search is enabled.
 * @returns {boolean}
 * @see $$T3
 */
export function isResourceHubInternalSearchEnabled(): boolean {
  return !!getFeatureFlags().cmty_resource_hub_internal_search
}

/**
 * Checks if resource hub profiles are enabled.
 * @returns {boolean}
 * @see $$I0
 */
export function isResourceHubProfilesEnabled(): boolean {
  return !!getFeatureFlags().cmty_resource_hub_profiles
}

/**
 * Checks if related content experiments are enabled for logged in/out users.
 * @returns {() => boolean}
 * @see $$S6
 */
export function isRelatedContentExperimentEnabled(): (() => boolean) {
  const loggedInConfig = (() => {
    const { getConfig } = selectExperimentConfigHook('exp_cmty_related_content_logged_in')
    return useCallback(() => getConfig().get('enabled', false), [getConfig])
  })()
  const loggedOutConfig = (() => {
    const { getConfig } = selectExperimentConfigHook('exp_cmty_related_content_logged_out')
    return useCallback(() => getConfig().get('enabled', false), [getConfig])
  })()
  return useCallback(() => loggedInConfig(), [loggedInConfig, loggedOutConfig])
}

/**
 * Checks if buzz import from design experiment is enabled.
 * @returns {() => boolean}
 * @see $$v12
 */
export function isBuzzImportFromDesignEnabled(): (() => boolean) {
  const { getConfig } = selectExperimentConfigHook('exp_buzz_import_from_design')
  return useCallback(() => getConfig().get('enabled', false), [getConfig])
}

/**
 * Checks if workspace selection should be skipped.
 * @returns {boolean}
 * @see $$A8
 */
export function shouldSkipWorkspaceSelection(): boolean {
  return !!getFeatureFlags().cmty_skip_workspace_selection
}

/**
 * Checks if TNT saving is enabled.
 * @returns {boolean}
 * @see $$x15
 */
export function isTntSavingEnabled(): boolean {
  return !!getFeatureFlags().cmty_tnt_saving
}

/**
 * Checks if plugins page is enabled.
 * @returns {boolean}
 * @see $$N13
 */
export function isPluginsPageEnabled(): boolean {
  return !!getFeatureFlags().cmty_plugins_page
}

/**
 * Checks if buzz template picker community shelves are enabled.
 * @returns {boolean}
 * @see $$C1
 */
export function isBuzzTemplatePickerCmtyShelvesEnabled(): boolean {
  return !!getFeatureFlags().buzz_template_picker_cmty_shelves
}

// Export aliases for backward compatibility and usage consistency
export const CS = isResourceHubProfilesEnabled
export const D7 = isBuzzTemplatePickerCmtyShelvesEnabled
export const DU = canAdminPublish
export const Fm = isResourceHubInternalSearchEnabled
export const GM = setupStarterUserCallback
export const QU = isMakePublishingUpdatesEnabled
export const Qd = isRelatedContentExperimentEnabled
export const Su = isFullFilePublishingEnabled
export const YN = shouldSkipWorkspaceSelection
export const _Y = alwaysFalseCallback
export const aP = isMakePublishingEnabled
export const bF = isTemplatePublishingEnabled
export const fi = isBuzzImportFromDesignEnabled
export const gs = isPluginsPageEnabled
export const l$ = isMakeDiscoveryEnabled
export const oi = isTntSavingEnabled
export const qw = isComponentViewerEnabled
export const te = alwaysFalseCallback2
export const yl = isResourceHubEnabled
