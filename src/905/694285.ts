import { isEqual } from 'lodash-es'
import { parseQuerySimple } from '../905/634134'
import { noop } from '../figma_app/465776'

/**
 * Types for Figmascope view parameters and URL params.
 */
export type FigmascopeUrlParams
  = | {
    type: 'server_file'
    key: string
    diffKey?: string
    backend?: string
  }
  | {
    type: 'server_file_validation_checkpoint'
    key: string
    prefix?: string
    locality?: string
    diffPrefix?: string
    backend?: string
  }
  | {
    type: 'server_file_validation_checkpoint_diff'
    key: string
    prefix?: string
    locality?: string
  }
  | {
    type: 'server_checkpoint'
    key: string
    diffKey?: string
    backend?: string
  }
  | {
    type: 'server_checkpoint_diff'
    key: string
  }
  | {
    type: 'multiplayer_journal_browser'
    fileKey: string
    startSequenceNumber?: string
    endSequenceNumber?: string
  }
  | {
    type: 'multiplayer_journal_diff'
    fileKey: string
    endSequenceNumber: string
  }

export interface FigmascopeView {
  view: 'figmascope'
  selection?: string
  urlParams?: FigmascopeUrlParams | null
}

/**
 * Checks if the given view is a Figmascope view.
 * @param view - The view object to check.
 * @returns True if the view is Figmascope, false otherwise.
 * (Original: $$l0)
 */
export function isFigmascopeView(view: any): view is FigmascopeView {
  return view?.view === 'figmascope'
}

/**
 * Converts a path and query params to a FigmascopeView object.
 * @param _unused - Unused parameter.
 * @param pathParts - Array of path segments.
 * @param queryString - Query string from URL.
 * @returns FigmascopeView or null.
 * (Original: $$o1.pathToSelectedView)
 */
export function pathToFigmascopeView(
  _unused: any,
  pathParts: string[],
  queryString?: string,
): FigmascopeView | null {
  const [, role, app, resource, key] = pathParts
  if (role !== 'admin' || app !== 'figmascope')
    return null

  const query = queryString ? parseQuerySimple(queryString) : {}
  const selection = query.selection
  const backend = query.backend === 'fullscreen' ? 'fullscreen' : 'kiwi'
  const diffKey = query.diffKey

  const urlParams: FigmascopeUrlParams | null = (() => {
    if (!resource || !key)
      return null
    switch (resource) {
      case 'file':
        return {
          type: 'server_file',
          key,
          diffKey,
          backend,
        }
      case 'file_validation':
        return {
          type: 'server_file_validation_checkpoint',
          key,
          prefix: query.prefix || '',
          locality: query.locality || 'US',
          diffPrefix: query.diffPrefix ?? query.diff_prefix,
          backend,
        }
      case 'file_validation_diff':
        return {
          type: 'server_file_validation_checkpoint_diff',
          key,
          prefix: query.prefix || '',
          locality: query.locality || 'US',
        }
      case 'checkpoint':
        return {
          type: 'server_checkpoint',
          key,
          diffKey,
          backend,
        }
      case 'diff':
        return {
          type: 'server_checkpoint_diff',
          key,
        }
      case 'multiplayer_journal':
      case 'multiplayer_journals':
        return {
          type: 'multiplayer_journal_browser',
          fileKey: key,
          startSequenceNumber: query.start_sequence_number,
          endSequenceNumber: query.end_sequence_number,
        }
      case 'multiplayer_journal_diff':
        if (query.end_sequence_number == null)
          return null
        return {
          type: 'multiplayer_journal_diff',
          fileKey: key,
          endSequenceNumber: query.end_sequence_number,
        }
      default:
        return null
    }
  })()

  return {
    view: 'figmascope',
    selection,
    urlParams,
  }
}

/**
 * Converts a FigmascopeView object to a path string.
 * @param view - The FigmascopeView object.
 * @returns Path string or null.
 * (Original: $$o1.selectedViewToPath)
 */
export function figmascopeViewToPath(view: FigmascopeView): string | null {
  if (!isFigmascopeView(view))
    return null

  let path = '/admin/figmascope'
  const params = new URLSearchParams(document.location.search)

  if (view.urlParams) {
    const r = view.urlParams
    switch (r.type) {
      case 'server_file':
        path += `/file/${r.key}`
        break
      case 'server_file_validation_checkpoint':
        path += `/file_validation/${r.key}`
        break
      case 'server_file_validation_checkpoint_diff':
        path += `/file_validation_diff/${r.key}`
        break
      case 'server_checkpoint':
        path += `/checkpoint/${r.key}`
        break
      case 'server_checkpoint_diff':
        path += `/diff/${r.key}`
        break
      case 'multiplayer_journal_browser':
        path += `/multiplayer_journals/${r.fileKey}`
        break
      case 'multiplayer_journal_diff':
        path += `/multiplayer_journal_diff/${r.fileKey}`
        break
      default:
        noop(r)
    }
    if ('backend' in r && r.backend)
      params.set('backend', r.backend)
    if ('diffKey' in r && r.diffKey)
      params.set('diffKey', r.diffKey)
    if (
      r.type === 'server_file_validation_checkpoint'
      || r.type === 'server_file_validation_checkpoint_diff'
    ) {
      if ('prefix' in r && r.prefix)
        params.set('prefix', r.prefix)
      if ('locality' in r && r.locality)
        params.set('locality', r.locality)
      if (r.type === 'server_file_validation_checkpoint' && 'diffPrefix' in r && r.diffPrefix)
        params.set('diffPrefix', r.diffPrefix)
    }
    if (r.type === 'multiplayer_journal_browser') {
      if (r.startSequenceNumber)
        params.set('start_sequence_number', r.startSequenceNumber)
      if (r.endSequenceNumber)
        params.set('end_sequence_number', r.endSequenceNumber)
    }
    if (r.type === 'multiplayer_journal_diff') {
      params.set('end_sequence_number', r.endSequenceNumber)
    }
  }
  if (view.selection)
    params.set('selection', view.selection)
  const queryString = params.toString()
  if (queryString)
    path += `?${queryString}`
  return path
}

/**
 * Determines if a history change is required between two FigmascopeView objects.
 * @param a - First FigmascopeView.
 * @param b - Second FigmascopeView.
 * @returns True if history change is required.
 * (Original: $$o1.requireHistoryChange)
 */
export function requireFigmascopeHistoryChange(a: FigmascopeView, b: FigmascopeView): boolean {
  return (
    isFigmascopeView(a) !== isFigmascopeView(b)
    || (!!isFigmascopeView(a) && !!isFigmascopeView(b) && !isEqual(a.urlParams, b.urlParams))
  )
}

/**
 * Returns a human-readable name for the selected Figmascope view.
 * @param view - The FigmascopeView object.
 * @returns Name string or null.
 * (Original: $$o1.selectedViewName)
 */
export function figmascopeViewName(view: FigmascopeView): string | null {
  if (isFigmascopeView(view)) {
    if (view.urlParams) {
      switch (view.urlParams.type) {
        case 'server_file':
          return `FigmaScope (File ${view.urlParams.key})`
        case 'server_file_validation_checkpoint':
          return `FigmaScope (File Validation Checkpoint ${view.urlParams.key})`
        case 'server_file_validation_checkpoint_diff':
          return `FigmaScope (File Validation Diff ${view.urlParams.key})`
        case 'server_checkpoint':
          return `FigmaScope (Checkpoint ${view.urlParams.key})`
        case 'server_checkpoint_diff':
          return `FigmaScope (Diff ${view.urlParams.key})`
        case 'multiplayer_journal_browser':
          return `FigmaScope (Journals for ${view.urlParams.fileKey})`
        case 'multiplayer_journal_diff':
          return `FigmaScope (Journal Diff for ${view.urlParams.fileKey})`
        default:
          noop(view.urlParams)
      }
    }
    return 'FigmaScope'
  }
  return null
}

export class FigmascopeNavigator {
  pathToSelectedView = pathToFigmascopeView
  selectedViewToPath = figmascopeViewToPath
  requireHistoryChange = requireFigmascopeHistoryChange
  selectedViewName = figmascopeViewName
}
// Export aliases for compatibility with original exports
export const E = isFigmascopeView
export const N = FigmascopeNavigator
