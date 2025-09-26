import type { IPermissionsState } from '../figma_app/642025'
import { ModelTypeConfigs, PublicModelType, SpaceAccessType } from '../figma_app/162807'
import { canMemberOrg } from '../figma_app/642025'
import { isCommunitySearchView } from '../figma_app/740025'
import { FileType } from '../figma_app/756995'

/**
 * Filters out specified model types from the ModelTypeConfigs.
 * Original function: $$o0
 * @param excludeType - The model type to exclude.
 * @param configKey - The key to access ModelTypeConfigs.
 * @param includePlugins - Whether to include plugin types in exclusion.
 * @returns Filtered array of model types.
 */
export function filterModelTypes(excludeType: string, configKey: string, includePlugins?: boolean): string[] {
  let excludedTypes = [excludeType]
  if (!includePlugins) {
    excludedTypes = [
      excludeType,
      PublicModelType.PUBLIC_PLUGINS,
      PublicModelType.PRIVATE_PLUGINS,
    ]
  }
  return ModelTypeConfigs[configKey].modelTypes.filter(
    type => !excludedTypes.includes(type),
  )
}

/**
 * Highlights matching segments in a string based on a search query.
 * Original function: $$l2
 * @param text - The text to search within.
 * @param query - The search query.
 * @returns Array of tuples: [segment, highlightLength]
 */
export function highlightMatches(text: string, query: string): [string, number][] {
  const nonWordRegex = /[^\p{L}\p{Nd}\p{S}]+/gu
  let match = nonWordRegex.exec(text)
  let lastIndex = 0
  const segments: [string, number][] = []

  while (match !== null) {
    segments.push([text.substring(lastIndex, match.index + match[0].length), 0])
    lastIndex = match.index + match[0].length
    match = nonWordRegex.exec(text)
  }
  if (lastIndex < text.length) {
    segments.push([text.substring(lastIndex, text.length), 0])
  }

  query
    .toLowerCase()
    .split(/[\p{Z}\p{P}]/u)
    .filter(q => q !== '')
    .forEach((q) => {
      for (let i = 0; i < segments.length; i++) {
        const [segment, highlightLength] = segments[i]
        if (
          highlightLength === 0
          && segment.toLowerCase().startsWith(q)
        ) {
          segments[i] = [segment, q.length]
          break
        }
      }
    })

  return segments
}

/**
 * Parses search parameters and determines search scope and file filter.
 * Original function: $$d1
 * @param params - URL search parameters as string.
 * @param context - Context object containing currentUserOrgId.
 * @param view - View identifier for community search.
 * @returns Object containing query, searchModelType, searchScope, and fileFilter.
 */
export function parseSearchParams(params: string, context: IPermissionsState, view: unknown): {
  query: string | null
  searchModelType: string | null
  searchScope: SpaceAccessType
  fileFilter: FileType
} {
  const searchParams = new URLSearchParams(params)
  const query = searchParams.get('q')
  const searchModelType = searchParams.get('model_type')
  const fileTypeValue = parseInt(searchParams.get('file_type') ?? '', 10)
  let fileFilter = FileType.ANY
  if (!isNaN(fileTypeValue)) {
    fileFilter = fileTypeValue
  }

  let searchScope = SpaceAccessType.PERSONAL
  if (isCommunitySearchView(view)) {
    searchScope = SpaceAccessType.COMMUNITY
  }
  else if (context.currentUserOrgId) {
    searchScope = canMemberOrg(context.currentUserOrgId, context)
      ? SpaceAccessType.ORG
      : SpaceAccessType.ORG_GUEST
  }

  return {
    query,
    searchModelType,
    searchScope,
    fileFilter,
  }
}

// Export refactored names for clarity and traceability
export const L4 = filterModelTypes
export const jr = parseSearchParams
export const mV = highlightMatches
