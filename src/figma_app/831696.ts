import { getFeatureFlags } from '../905/601108'
import { customHistory } from '../905/612521'
import { parseQuery, serializeQuery } from '../905/634134'
import { replaceColonWithDash } from '../905/691205'
import { isValidSessionLocalID, parseSessionLocalID } from '../905/871411'
import { FFileType } from '../figma_app/191312'
import { isEmptyObject } from '../figma_app/493477'
import { PrototypingTsApi } from '../figma_app/763686'

/**
 * Builds a query object for viewer URL parameters.
 * Original: $$u3
 */
export function buildViewerQueryParams(
  params: {
    scalingInfo?: { viewportScalingMode?: string, contentScalingMode?: string }
    pageId?: string
    nodeId?: string
    startingPointNodeId?: string
    prevSelectedView?: { view: string, tab?: string, folderId?: string }
    share?: boolean
    disableDefaultKeyboardNav?: boolean
    hideUI?: boolean
    showProtoSidebar?: boolean
    showHotspots?: boolean
    showDeviceFrame?: boolean
    inlinePreview?: boolean
    versionId?: string
    isAudienceViewPopout?: boolean
  },
  prevPlanId?: string,
  prevPlanType?: string,
  timestamp?: string,
  openPopout?: boolean,
): Record<string, any> {
  /** Parse current query params */
  const queryParams = parseQuery(customHistory.location.search)
  const result: Record<string, any> = {}

  // Copy existing query params except empty keys
  for (const key in queryParams) {
    if (key !== '')
      result[key] = queryParams[key]
  }

  // Add scaling info
  if (params.scalingInfo?.viewportScalingMode) {
    result.scaling = params.scalingInfo.viewportScalingMode
  }
  if (params.scalingInfo?.contentScalingMode) {
    result['content-scaling'] = params.scalingInfo.contentScalingMode
  }

  // Add page/node/starting point IDs if valid
  if (
    params.pageId
    && isValidSessionLocalID(parseSessionLocalID(params.pageId))
  ) {
    result['page-id'] = params.pageId
  }
  if (
    params.nodeId
    && isValidSessionLocalID(parseSessionLocalID(params.nodeId))
  ) {
    result['node-id'] = replaceColonWithDash(params.nodeId)
  }
  if (
    params.startingPointNodeId
    && isValidSessionLocalID(parseSessionLocalID(params.startingPointNodeId))
  ) {
    result['starting-point-node-id'] = params.startingPointNodeId
  }

  // Previous plan info
  if (prevPlanId && prevPlanType) {
    result['prev-plan-id'] = prevPlanId
    result['prev-plan-type'] = prevPlanType
  }

  // Previous selected view
  if (params.prevSelectedView) {
    result['prev-selected-view'] = params.prevSelectedView.view
    if (params.prevSelectedView.view === 'recentsAndSharing') {
      result['prev-tab'] = params.prevSelectedView.tab
    }
    else if (params.prevSelectedView.view === 'folder') {
      result['folder-id'] = params.prevSelectedView.folderId
    }
  }

  // Share
  if (params.share) {
    result.share = '1'
  }

  // Keyboard navigation
  if (params.disableDefaultKeyboardNav) {
    result['disable-default-keyboard-nav'] = '1'
  }
  else {
    delete result['disable-default-keyboard-nav']
  }

  // Hide UI
  if (params.hideUI) {
    result['hide-ui'] = '1'
  }
  else {
    delete result['hide-ui']
  }

  // Proto sidebar
  if (
    params.showProtoSidebar
    || params.showProtoSidebar === undefined
    && PrototypingTsApi?.isViewerSidebarShownByDefault()
  ) {
    result['show-proto-sidebar'] = '1'
  }
  else {
    delete result['show-proto-sidebar']
  }

  // Hotspot hints
  if (params.showHotspots == null || params.showHotspots) {
    delete result['hotspot-hints']
  }
  else {
    result['hotspot-hints'] = '0'
  }

  // Device frame
  if (params.showDeviceFrame == null || params.showDeviceFrame) {
    delete result['device-frame']
  }
  else {
    result['device-frame'] = '0'
  }

  // Inline preview
  if (params.inlinePreview) {
    result['inline-viewer'] = '1'
  }
  else {
    delete result['inline-viewer']
  }

  // Version ID
  if (params.versionId) {
    result['version-id'] = params.versionId
  }

  // Audience view popout
  if (params.isAudienceViewPopout) {
    result.popout = true
  }

  // Remove mode/fuid
  delete result.mode
  delete result.fuid

  // Timestamp
  if (timestamp) {
    result.t = timestamp
  }

  // Open popout
  if (openPopout) {
    result['open-popout'] = 'true'
  }

  return result
}

/**
 * Serializes viewer query params, omitting certain keys.
 * Original: $$p1
 */
export function serializeViewerQueryParams(
  params: Parameters<typeof buildViewerQueryParams>[0],
  prevPlanId?: string,
  prevPlanType?: string,
): string {
  let query = buildViewerQueryParams(params, prevPlanId, prevPlanType)
  const omitKeys: string[] = []

  if (prevPlanId || prevPlanType) {
    omitKeys.push('prev-plan-id', 'prev-plan-type')
  }
  if (params.prevSelectedView) {
    omitKeys.push('prev-selected-view')
    if (params.prevSelectedView.view === 'recentsAndSharing') {
      omitKeys.push('prev-tab')
    }
    else if (params.prevSelectedView.view === 'folder') {
      omitKeys.push('folder-id')
    }
  }
  if (
    getFeatureFlags().slides_pv_av_refresh
      ? !window.opener
      : params.isAudienceViewPopout
  ) {
    omitKeys.push('popout')
  }
  if (params.share) {
    omitKeys.push('share')
  }

  // Remove omitted keys
  for (const key of omitKeys) {
    delete query[key]
  }

  return isEmptyObject(query) ? '' : `?${serializeQuery(query)}`
}

/**
 * Serializes viewer query params with all keys.
 * Original: $$_7
 */
export function serializeFullViewerQueryParams(
  params: Parameters<typeof buildViewerQueryParams>[0],
  prevPlanId?: string,
  prevPlanType?: string,
  timestamp?: string,
  openPopout?: boolean,
): string {
  const query = buildViewerQueryParams(
    params,
    prevPlanId,
    prevPlanType,
    timestamp,
    openPopout,
  )
  return isEmptyObject(query) ? '' : `?${serializeQuery(query)}`
}

/**
 * Encodes a hash fragment.
 * Original: $$h2
 */
export function encodeHashFragment(fragment?: string): string {
  return fragment ? `#${encodeURIComponent(fragment)}` : ''
}

/**
 * Replaces 'proto' with 'deck' for slides file type.
 * Original: $$m5
 */
export function replaceProtoWithDeck(path: string, fileType: FFileType): string {
  return fileType === FFileType.SLIDES ? path.replace(/proto/, 'deck') : path
}

/**
 * Checks if a URL is a valid proto viewer URL.
 * Original: $$g0
 */
export function isProtoViewerUrl(url?: string): boolean {
  if (!url)
    return false
  try {
    // eslint-disable-next-line no-new
    new URL(url)
  }
  catch {
    return false
  }
  const origin = window.location.origin
  return url.startsWith(`${origin}/proto`)
}

/**
 * Extracts the file ID from a proto viewer URL.
 * Original: $$f4
 */
export function extractProtoFileId(url?: string): string | null {
  if (!isProtoViewerUrl(url))
    return null
  const match = url.match(/\/proto\/([^/]+)\/?/)
  return match ? match[1] : null
}

/**
 * Extracts and validates node ID from a proto viewer URL.
 * Original: $$E8
 */
export function extractValidNodeIdFromProtoUrl(url: string): string | null {
  try {
    const nodeId = new URL(url).searchParams.get('node-id')
    if (!nodeId)
      return null
    const decoded = decodeURIComponent(nodeId).replace('-', ':')
    if (!isValidSessionLocalID(parseSessionLocalID(decoded)))
      return null
    return decoded
  }
  catch {
    return null
  }
}

/**
 * Returns the base proto viewer URL for the current origin.
 * Original: $$y6
 */
export function getProtoViewerBaseUrl(): string {
  return `${window.location.origin}/proto/`
}

// Exported aliases for backward compatibility
export const Ik = isProtoViewerUrl
export const LT = serializeViewerQueryParams
export const ZK = encodeHashFragment
export const lD = buildViewerQueryParams
export const pb = extractProtoFileId
export const qI = replaceProtoWithDeck
export const qS = getProtoViewerBaseUrl
export const vp = serializeFullViewerQueryParams
export const zU = extractValidNodeIdFromProtoUrl
