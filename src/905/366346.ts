import type { BranchEntity, FileEntity } from '../905/760074'
import { getFeatureFlags } from '../905/601108'
import { customHistory } from '../905/612521'
import { serializeQuery } from '../905/634134'
import { replaceColonWithDash } from '../905/691205'
import { getSingletonSceneGraph } from '../905/700578'
import { buildUrlPath } from '../905/760074'
import { isValidSessionLocalID, parseSessionLocalID } from '../905/871411'
import { SceneGraphUnavailableError } from '../figma_app/518682'
import { PanelType } from '../figma_app/763686'

/**
 * Parses the comment preferences or thread ID from the given string.
 * Original: $$p4
 */
export function parseCommentPreferencesOrThreadId(input: string | undefined, target: any): void {
  const value = input ? input.slice(1) : ''
  if (value) {
    if (value === 'commentPreferences') {
      target.showCommentPreferencesPicker = true
    }
    else {
      target.commentThreadId = value
    }
  }
}

/**
 * Extracts node, version, plugin, and playground info from the query object.
 * Original: $$m8
 */
export function extractQueryParams(query: Record<string, string>, target: any): void {
  if (query['node-id'])
    target.nodeId = query['node-id']
  if (query['version-id'])
    target.versionId = query['version-id']
  if (query['try-plugin-id'])
    target.tryPluginId = query['try-plugin-id']
  if (query['try-plugin-version-id'])
    target.tryPluginVersionId = query['try-plugin-version-id']
  if (query['try-plugin-name'])
    target.tryPluginName = query['try-plugin-name']
  if (query['is-playground-file'] === '1')
    target.isPlaygroundFile = true
}

/**
 * Returns the test view or interactions path based on the flag.
 * Original: $$h7
 */
export function getTestPath(isEvalView: boolean = false): string {
  return isEvalView
    ? `/test/eval/view${customHistory.location.search}`
    : `/test/interactions${customHistory.location.search}`
}

/**
 * Builds a URL path for a file or named resource.
 * Original: $$g3
 */
export function buildResourcePath(
  fileId: string,
  versionId: string,
  name: string | undefined,
  path: FileEntity,
  extra: BranchEntity,
  skipName: boolean = false,
): string {
  if (path) {
    return buildUrlPath(path, extra || null, fileId)
  }
  let url = `/${fileId}/${versionId}`
  if (!skipName) {
    url += name ? `/${name}` : '/Untitled'
  }
  return url
}

/**
 * Adds a valid session local ID to the query object.
 * Original: $$f6
 */
export function addSessionLocalIdToQuery(query: Record<string, string>, sessionId: string | undefined): void {
  if (
    sessionId
    && isValidSessionLocalID(parseSessionLocalID(sessionId))
  ) {
    query['node-id'] = replaceColonWithDash(sessionId)
  }
}

/**
 * Adds a version ID to the query object.
 * Original: $$_2
 */
export function addVersionIdToQuery(query: Record<string, string>, versionId: string | undefined): void {
  if (versionId) {
    query['version-id'] = versionId
  }
}

/**
 * Appends a hash fragment to the URL if provided.
 * Original: $$A9
 */
export function appendHashToUrl(url: string, hash: string | undefined): string {
  return hash ? `${url}#${hash}` : url
}

/**
 * Appends a serialized query string to the URL if the query object is not empty.
 * Original: $$y10
 */
export function appendQueryToUrl(url: string, query: Record<string, string>): string {
  return Object.keys(query).length > 0
    ? `${url}?${serializeQuery(query)}`
    : url
}

/**
 * Sets the 'p' property to 'f' if the session local ID is valid and type is CANVAS or DOCUMENT.
 * Original: $$b0
 */
export function setPageTypeIfCanvasOrDocument(
  target: { p?: string },
  sessionId: string | undefined,
): void {
  if (
    sessionId
    && isValidSessionLocalID(parseSessionLocalID(sessionId))
  ) {
    try {
      const type = getSingletonSceneGraph().get(sessionId)?.type
      if (type && ['CANVAS', 'DOCUMENT'].includes(type)) {
        target.p = 'f'
      }
    }
    catch (err) {
      if (!(err instanceof SceneGraphUnavailableError)) {
        throw err
      }
    }
  }
}

/**
 * Maps PanelType enum to string representation.
 * Original: $$v1
 */
export function panelTypeToString(panelType: PanelType): string | null {
  switch (panelType) {
    case PanelType.CODE:
      return 'code'
    case PanelType.DAKOTA:
      return 'cms'
    case PanelType.SETTINGS:
      return 'settings'
    case PanelType.FILE:
      return null
    default:
      return null
  }
}

/**
 * Maps string to PanelType enum, considering feature flags.
 * Original: $$I5
 */
export function stringToPanelType(panel: string): PanelType {
  if (
    panel === 'code'
    && (getFeatureFlags().sts_code_authoring
      || getFeatureFlags().sts_code_authoring_by_plan)
  ) {
    return PanelType.CODE
  }
  if (panel === 'cms' && getFeatureFlags().dakota) {
    return PanelType.DAKOTA
  }
  if (panel === 'settings') {
    return PanelType.SETTINGS
  }
  return PanelType.FILE
}

// Exported aliases for refactored functions
export const H_ = setPageTypeIfCanvasOrDocument
export const Hz = panelTypeToString
export const Wi = addVersionIdToQuery
export const ZH = buildResourcePath
export const d8 = parseCommentPreferencesOrThreadId
export const eE = stringToPanelType
export const gR = addSessionLocalIdToQuery
export const oU = getTestPath
export const qi = extractQueryParams
export const qr = appendHashToUrl
export const sR = appendQueryToUrl
