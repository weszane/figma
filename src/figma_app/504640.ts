import { isIframe } from "../905/508367"
import { getFeatureFlags } from "../905/601108"
import { DARK_THEME_MEDIA_QUERY } from "../905/658026"
import { getInitialOptions } from "../figma_app/169182"
// Refactored from /Users/allen/github/fig/src/figma_app/504640.ts
// Summary of changes: Renamed minified function names to descriptive ones (e.g., $$o2 to isEmbedContext), added TypeScript interfaces for type safety, improved readability with comments and formatting, preserved original export names.

// Define types based on inferred logic from the code
interface FrameContext {
  type?: string // e.g., "embed" or "integration"
}

interface InitialOptions {
  frame_context?: FrameContext
  embed_theme?: string // e.g., "system", "dark", "light"
}

interface FeatureFlags {
  embedkit_v2: boolean
}

// Original function: $$o2
// Checks if the current context is an iframe embed
export function isEmbedContext(): boolean {
  return isIframe() && (getInitialOptions() as InitialOptions).frame_context?.type === "embed"
}

// Original function: $$l1
// Checks if the current context is an iframe integration
export function isIframeIntegrationContext(): boolean {
  return isIframe() && (getInitialOptions() as InitialOptions).frame_context?.type === "integration"
}

// Original function: $$d0
// Determines the embed theme based on feature flags and system preferences
// Returns the theme string ("dark", "light", or undefined if conditions not met)
function getEmbedTheme(): string | undefined {
  if (isEmbedContext() && (getFeatureFlags() as FeatureFlags).embedkit_v2) {
    const embedTheme = (getInitialOptions() as InitialOptions).embed_theme
    if (embedTheme === "system") {
      // Use system theme: check if dark mode media query matches
      return DARK_THEME_MEDIA_QUERY.matches ? "dark" : "light"
    }
    return embedTheme // Could be "dark", "light", or other string
  }
  // No theme if not in embed context or feature flag is off
  return undefined
}

// Exports with original names, pointing to refactored functions
export const f3 = getEmbedTheme
export const ih = isIframeIntegrationContext
export const l7 = isEmbedContext
