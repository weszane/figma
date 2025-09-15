import { communityPagePaths } from '../905/528121'
import { customHistory } from '../905/612521'
import { languageCodes } from '../905/816253'

/**
 * Generates community page paths with a suffix from the input path.
 * @param path - The original path string.
 * @returns Array of community page paths with the suffix.
 * (Original function: $$s1)
 */
export function generateCommunityPagePaths(path: string): string[] {
  const suffix = path.slice(10)
  return Object.values(communityPagePaths).map(basePath => `${basePath}${suffix}`)
}

/**
 * Parses a given path to extract locale, basePath, and remainingPath.
 * @param path - The path to parse.
 * @returns Object containing locale, basePath, and remainingPath.
 * (Original function: $$o2)
 */
export function parseCommunityPath(path: string): {
  locale: string
  basePath: string
  remainingPath: string
} {
  for (const [locale, basePath] of Object.entries(communityPagePaths)) {
    if (path === basePath || path.startsWith(`${basePath}/`)) {
      return {
        locale,
        basePath,
        remainingPath: path.slice(basePath.length),
      }
    }
  }
  return {
    locale: languageCodes.EN,
    basePath: '',
    remainingPath: path,
  }
}

/**
 * Gets the current locale from the custom history pathname.
 * @returns The locale string.
 * (Original function: $$l3)
 */
export function getCurrentLocale(): string {
  return parseCommunityPath(customHistory.location.pathname)?.locale
}

/**
 * Gets the current community base path from the custom history pathname.
 * @returns The base path string, defaults to "/community" if not found.
 * (Original function: $$d0)
 */
export function getCurrentCommunityBasePath(): string {
  const basePath = parseCommunityPath(customHistory.location.pathname).basePath
  return basePath === '' ? '/community' : basePath
}

// Export refactored names for external usage
export const iY = getCurrentCommunityBasePath
export const p_ = generateCommunityPagePaths
export const po = parseCommunityPath
export const zq = getCurrentLocale
