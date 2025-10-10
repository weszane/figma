// Refactored from /Users/allen/github/fig/src/905/658026.ts
// Changes: Renamed minified variables (e.g., 'i' to 'darkThemeMediaQuery', 'n' to 'getVisibleTheme'), added TypeScript types for theme handling, simplified the IIFE export structure to direct ES module exports, added comments for clarity, and ensured type safety. No functionality changes; potential issue: 'window' may not be available in non-browser environments.

type Theme = "system" | "dark" | "light";

// MediaQueryList for detecting dark theme preference
const darkThemeMediaQuery: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * Determines the visible theme based on the input theme preference.
 * If "system", uses the media query to check for dark mode; otherwise, returns the specified theme.
 * @param theme - The theme preference ("system", "dark", or "light")
 * @returns The resolved visible theme ("dark" or "light")
 */
export function getVisibleTheme(theme: Theme): "dark" | "light" {
  if (theme === "system") {
    return darkThemeMediaQuery.matches ? "dark" : "light";
  } else if (theme === "dark") {
    return "dark";
  } else {
    return "light";
  }
}

// Export the media query object
export const DARK_THEME_MEDIA_QUERY = darkThemeMediaQuery;

