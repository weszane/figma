// Original file: /Users/allen/github/fig/src/905/82315.ts
// Refactored to use ES6 module syntax, add types, and improve readability while maintaining original functionality.

/**
 * Array of API features with names and version numbers.
 * Original: i
 */
const API_FEATURES_LIST: [string, number][] = [
  ["addFCMUserId", 152],
  ["addInitializeFCM", 151],
  ["addMcpStreamableHttpSupport", 150],
  ["globalEyedropper", 149],
  ["webErrorPageType", 148],
  ["addMcpUpdateSupport", 147],
  ["addMcpWrites", 146],
  ["addMcpImageSupport", 145],
  ["addSupportForEsLaLocale", 144],
  ["removeIsFigJamEnabled", 143],
  ["enhancedContrast", 142],
  ["removeWorkspaceName", 141],
  ["floatingWindowsV2", 140],
  ["addWindowStateChangeMessage", 139],
  ["addCodegenMCPStartupBinding", 138],
  ["addCodegenMCPBindings", 137],
  ["addUpdateColorProfile", 136],
  ["addAllPlansToInitLivegraphBinding", 135],
  ["addVersionCheckForDesktopLGClient", 134],
  ["addWindowStateChangeMessageV0", 133.1],
  ["removePageLoadTokenFromInitLivegraphBinding", 133],
  ["addSupportForPtBrLocale", 132],
  ["addSupportForKoKrLocale", 131],
  ["addInitLivegraphBinding", 130],
  ["improveCloseBehaviorForFloatingWindows", 129],
  ["addPageLoadTokenToSetInitialOptions", 128],
  ["addInitialFloatingWindowImplementation", 127],
  ["addOsVersion", 126],
  ["addSupportForEsEsLocale", 125],
  ["uncoupleFigjamTimerFromTabTitle", 124],
];

/**
 * Backported API features array.
 * Original: n
 */
export const BACKPORTED_API_FEATURES: [string, number][] = [];

/**
 * API features for testing.
 * Original: r
 */
export const __API_FEATURES_FOR_TESTING: [string, number][] = API_FEATURES_LIST;

/**
 * Desktop API features as an object.
 * Original: a
 */
export const DESKTOP_API_FEATURES: Record<string, number> = Object.fromEntries(API_FEATURES_LIST);

/**
 * Desktop API version (first feature's version).
 * Original: s
 */
export const DESKTOP_API_VERSION: number = API_FEATURES_LIST[0][1];
