import { atom } from "jotai"
import { debugState } from "../905/407919"
import { atomStoreManager } from "../905/490038"
import { isIframe } from "../905/508367"
import { getFeatureFlags } from "../905/601108"
import { customHistory } from "../905/612521"
import { localStorageRef, sessionStorageRef } from "../905/657224"
import { e as _$$e } from "../905/859735"
import { postUserFlag } from "../905/985254"
import { useAtomWithSubscription } from "../figma_app/27355"
import { UserPreferences } from "../figma_app/43951"
import { getInitialOptions } from "../figma_app/169182"
import { FFileType } from "../figma_app/191312"
import { getNormalizedPath } from "../figma_app/193867"
import { desktopAPIInstance } from "../figma_app/876459"

// Refactored from /Users/allen/github/fig/src/figma_app/814196.ts
// Changes: Renamed minified variables and functions to descriptive names (e.g., g to initialPathName, $$f2 to isEligibleForDesktopAppPrompt), added TypeScript types for parameters and return values, simplified logic with clearer structure, added comments explaining logic, inferred types from usage (e.g., paths as strings, normalized paths as string arrays), noted assumed dependencies like atomStoreManager (likely from a global or unimported module).

// Assumed dependency: atomStoreManager (likely a global or from an unimported module, e.g., jotai or similar state management)
// Assumed dependency: atom (likely from jotai, used for reactive state)

interface PathPredicate {
  (path: string): boolean
}

interface NormalizedPath extends Array<string> {}

// Get the initial path name, preferring sessionStorage if available, otherwise use current pathname
const initialPathName: string = (() => {
  const key = "initialPathName"
  if (sessionStorageRef) {
    if (sessionStorageRef[key]) {
      return sessionStorageRef[key]
    }
    sessionStorageRef[key] = customHistory.location.pathname
  }
  return customHistory.location.pathname
})()

// Check if the app is eligible to prompt for opening in the desktop app
// Conditions: not in iframe, not already in desktop, and either editing a file/link with password or path matches file/feed-post criteria
export function isEligibleForDesktopAppPrompt(): boolean {
  return !isIframe() && !desktopAPIInstance && !!(
    (getInitialOptions().editing_file || getInitialOptions().link_password_input)
    && (isFilePath(initialPathName) || isFeedPostPath(initialPathName))
  )
}

// Helper: Check if a predicate holds for both initial and current pathnames
export function pathMatchesBoth(predicate: PathPredicate): boolean {
  return predicate(initialPathName) && predicate(customHistory.location.pathname)
}

// Check if a path starts with prefixes for file types (design, whiteboard, etc.)
function isFilePath(path: string): boolean {
  const filePrefixes = [
    "/file/",
    "/design/",
    "/board/",
    "/slides/",
    "/site/",
    "/buzz/",
    "/make/",
  ]
  return filePrefixes.some(prefix => path.startsWith(prefix))
}

// Check if a path corresponds to a feed-post (normalized path structure: ['', 'files', 'feed-posts', postId])
function isFeedPostPath(path: string): boolean {
  const normalized: NormalizedPath = getNormalizedPath(path)
  return normalized.length >= 4 && normalized[1] === "files" && normalized[2] === "feed-posts" && !!normalized[3]
}

const autoOpenInDesktopAppKey = "autoOpenInDesktopApp"
const openInDesktopAppMenuModalKey = "openInDesktopAppMenuModal"

// Get the auto-open preference, using atom store if feature flag enabled, otherwise localStorage
export function getAutoOpenPreference(): any {
  if (getFeatureFlags().desktop_use_db_auto_open_pref) {
    // Assumed: atomStoreManager.get(autoOpenPreferenceAtom) returns the atom value
    return (atomStoreManager).get(autoOpenPreferenceAtom)
  }
  return localStorageRef ? localStorageRef[autoOpenInDesktopAppKey] : undefined
}

// Set the auto-open preference in localStorage and optionally in DB if feature flag enabled
export function setAutoOpenPreference(value: any): void {
  if (localStorageRef) {
    localStorageRef[autoOpenInDesktopAppKey] = value
  }
  if (getFeatureFlags().desktop_write_auto_open_pref) {
    _$$e.setPreferenceValue({
      key: "auto_open_in_desktop",
      value,
    })
    debugState.dispatch(postUserFlag({
      user_changed_auto_open_pref: true,
    }))
  }
}

// Get the menu modal preference from localStorage
export function getMenuModalPreference(): any {
  return localStorageRef ? localStorageRef[openInDesktopAppMenuModalKey] : undefined
}

// Set the menu modal preference in localStorage
export function setMenuModalPreference(value: any): void {
  if (localStorageRef) {
    localStorageRef[openInDesktopAppMenuModalKey] = value
  }
}

// Hook to subscribe to the auto-open preference atom
export function useAutoOpenPreferenceAtom(): any {
  return useAtomWithSubscription(autoOpenPreferenceAtom)
}

// Atom for auto-open preference, derived from user preferences or initial options
export const autoOpenPreferenceAtom = atom((get) => {
  const userPrefsQuery = get(UserPreferences.Query({}))
  let autoOpenValue = getInitialOptions().user_data?.auto_open_in_desktop
  if (userPrefsQuery.status === "loaded" && userPrefsQuery.data?.currentUser?.userPreferences?.status === "loaded") {
    autoOpenValue = userPrefsQuery.data.currentUser.userPreferences.data?.preferences.auto_open_in_desktop
  }
  return autoOpenValue
})

// Exports with original left-side names, mapped to refactored right-side names
export const W2 = getMenuModalPreference
export const _A = setMenuModalPreference
export const _p = isEligibleForDesktopAppPrompt
export const hW = setAutoOpenPreference
export const ji = useAutoOpenPreferenceAtom
export const vn = getAutoOpenPreference
