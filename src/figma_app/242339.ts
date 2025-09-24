// Original file: /Users/allen/sigma-main/src/figma_app/242339.ts
// Refactored to improve readability, maintainability, and type safety.
// Grouped related functionality: user access checks, onboarding logic, UI utilities.
// Added TypeScript types, converted to named arrow functions, simplified conditionals with early returns.
// Comments include original function/variable names for traceability.
// TS documentation added for functions and classes.

import type { UserFlag } from '../../types/app'
import { selectCurrentUser } from '../905/372672'
import { selectUserFlag } from '../905/940356'
import { useOpenFileObjectWithSinatraType } from '../figma_app/516028'

interface FileObject {
  track_tags?: { figma_basics_experiment: string }
  trashed_at?: any
  deleted_at?: any
  is_template?: boolean
  creator_id: string
}

interface OnboardingFlags {
  editor_onboarded?: UserFlag
  figma_basics_tooltips_onboarding?: UserFlag
  no_figma_basics_tooltips_onboarding?: UserFlag
  cursor_bot_v2__basics_onboarded?: UserFlag
  cursor_bot_v2__no_basics_onboarded?: UserFlag
  seen_starting_points_tooltips_onboarding?: UserFlag
}

// User access and file validation group

/**
 * Checks if the current user has access to perform an action based on user ID, file object, and experiment tags.
 * Original: $$o0
 * @param experimentTags - Array of experiment tags to check against.
 * @returns boolean indicating access.
 */
export function checkUserAccess(experimentTags: string[]): boolean {
  const currentUser = selectCurrentUser()
  const fileObject = useOpenFileObjectWithSinatraType({ useSinatraType: true })
  return validateUserFileAccess(currentUser?.id, fileObject, experimentTags)
}

/**
 * Validates user access to a file based on user ID, file properties, and experiment tags.
 * Original: $$l3
 * @param userId - The user's ID.
 * @param fileObject - The file object to validate.
 * @param experimentTags - Array of experiment tags.
 * @returns boolean indicating if access is valid.
 */
export function validateUserFileAccess(userId: string | undefined, fileObject: FileObject | null, experimentTags: string[]): boolean {
  if (!userId || !fileObject)
    return false
  if (!fileObject.track_tags || fileObject.trashed_at || fileObject.deleted_at || !fileObject.is_template)
    return false
  if (!experimentTags.includes(fileObject.track_tags.figma_basics_experiment))
    return false
  return userId === fileObject.creator_id
}

// UI utilities group

/**
 * Enum-like object for UI panel identifiers.
 * Original: $$d1
 */
export const PanelIdentifiers = (() => {
  const obj: Record<string, string> = {}
  obj.PROPERTIES_PANEL_TITLE = 'properties-panel-title'
  obj.SCRUBBABLE_CONTROL = 'scrubbable-control'
  obj.PAINT_PANEL_ROW = 'paint-panel-row'
  obj.TEXT_PANEL = 'text-panel'
  return obj
})()

/**
 * Generates a slug by combining a prefix and a string, converting to lowercase and replacing spaces with hyphens.
 * Original: $$c2
 * @param prefix - The prefix string.
 * @param text - The text to slugify.
 * @returns The generated slug.
 */
export function generateSlug(prefix: string, text: string): string {
  return `${prefix}-${text.toLowerCase().replace(/ /g, '-')}`
}

// Onboarding logic group

/**
 * Checks if the user has completed various onboarding steps, including basics tooltips and cursor bot.
 * Original: $$u6
 * @returns boolean indicating if onboarding is complete.
 */
export function isOnboardingComplete(): boolean {
  const flags: OnboardingFlags = {
    editor_onboarded: selectUserFlag('editor_onboarded'),
    figma_basics_tooltips_onboarding: selectUserFlag('figma_basics_tooltips_onboarding'),
    no_figma_basics_tooltips_onboarding: selectUserFlag('no_figma_basics_tooltips_onboarding'),
    cursor_bot_v2__basics_onboarded: selectUserFlag('cursor_bot_v2__basics_onboarded'),
    cursor_bot_v2__no_basics_onboarded: selectUserFlag('cursor_bot_v2__no_basics_onboarded'),
    seen_starting_points_tooltips_onboarding: selectUserFlag('seen_starting_points_tooltips_onboarding'),
  }
  return hasAnyOnboardingFlag(flags)
}

/**
 * Checks if the user has completed basic onboarding steps, excluding cursor bot specifics.
 * Original: $$p4
 * @returns boolean indicating if basic onboarding is complete.
 */
export function isBasicOnboardingComplete(): boolean {
  const flags: OnboardingFlags = {
    editor_onboarded: selectUserFlag('editor_onboarded'),
    figma_basics_tooltips_onboarding: selectUserFlag('figma_basics_tooltips_onboarding'),
    no_figma_basics_tooltips_onboarding: selectUserFlag('no_figma_basics_tooltips_onboarding'),
    seen_starting_points_tooltips_onboarding: selectUserFlag('seen_starting_points_tooltips_onboarding'),
  }
  return hasAnyOnboardingFlag(flags)
}

/**
 * Checks cursor bot onboarding status based on flags and a condition.
 * Original: $$_7
 * @param condition - A boolean condition to evaluate.
 * @returns boolean indicating cursor bot onboarding status.
 */
export function checkCursorBotOnboarding(condition: boolean): boolean {
  const basicsOnboarded = !!selectUserFlag('cursor_bot_v2__basics_onboarded')
  const noBasicsOnboarded = !!selectUserFlag('cursor_bot_v2__no_basics_onboarded')
  return basicsOnboarded || (!condition && noBasicsOnboarded)
}

/**
 * Determines if any onboarding flag is set to true.
 * Original: $$h5
 * @param flags - Object containing onboarding flags.
 * @returns boolean indicating if any flag is true.
 */
export function hasAnyOnboardingFlag(flags: OnboardingFlags): boolean {
  return !!(
    flags.editor_onboarded
    || flags.figma_basics_tooltips_onboarding
    || flags.no_figma_basics_tooltips_onboarding
    || flags.cursor_bot_v2__basics_onboarded
    || flags.cursor_bot_v2__no_basics_onboarded
    || flags.seen_starting_points_tooltips_onboarding
  )
}

// Updated exports to match refactored names (original export names retained for compatibility if needed elsewhere)
export const Ai = checkUserAccess
export const D8 = PanelIdentifiers
export const Lh = generateSlug
export const WO = validateUserFileAccess
export const Y3 = isBasicOnboardingComplete
export const _q = hasAnyOnboardingFlag
export const jO = isOnboardingComplete
export const jm = checkCursorBotOnboarding
