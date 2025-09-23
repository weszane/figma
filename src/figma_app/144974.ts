import { $7 } from '../905/509613'
import { getFeatureFlags } from '../905/601108'

/**
 * Checks if QA search frecency feature is enabled
 * @returns {boolean} True if qa_search_frecency flag is enabled
 */
export function isQaSearchFrecencyEnabled(): boolean {
  return !!getFeatureFlags().qa_search_frecency
}

/**
 * Checks if first draft make changes feature is enabled
 * @returns {boolean} True if first_draft_make_changes flag and isFirstDraftMakeChangesEnabled are both enabled
 */
export function isFirstDraftMakeChangesEnabled(): boolean {
  return !!getFeatureFlags().first_draft_make_changes && $7('isFirstDraftMakeChangesEnabled')
}

/**
 * Checks if asset suggestions feature is enabled
 * @returns {boolean} True if asset_suggestions flag and isFragmentSearchEnabled are both enabled
 */
export function isAssetSuggestionsEnabled(): boolean {
  return !!getFeatureFlags().asset_suggestions && $7('isFragmentSearchEnabled')
}

/**
 * Checks if actions hide recents feature is enabled
 * @returns {boolean} True if actions_hide_recents flag and shouldHideRecents are both enabled
 */
export function shouldHideRecents(): boolean {
  return !!getFeatureFlags().actions_hide_recents && $7('shouldHideRecents')
}

/**
 * Checks if prototype AI magic link feature is enabled
 * @returns {boolean} True if prototype_ai_magic_link flag and isMagicLinkEnabled are both enabled
 */
export function isMagicLinkEnabled(): boolean {
  return !!getFeatureFlags().prototype_ai_magic_link && $7('isMagicLinkEnabled')
}

/**
 * Checks if auto rename layers feature is enabled
 * @returns {boolean} True if eai_auto_rename_layers flag and isRenameLayersEnabled are both enabled
 */
export function isRenameLayersEnabled(): boolean {
  return !!getFeatureFlags().eai_auto_rename_layers && $7('isRenameLayersEnabled')
}

// Export aliases for backward compatibility
export const C7 = isAssetSuggestionsEnabled
export const Ii = isRenameLayersEnabled
export const KK = isFirstDraftMakeChangesEnabled
export const Ll = isMagicLinkEnabled
export const h8 = isQaSearchFrecencyEnabled
export const kK = shouldHideRecents
