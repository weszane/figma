import { getFeatureFlags } from '../905/601108'
import { serializeQuery } from '../905/634134'
import { normalizeVariableId, replaceColonWithDash } from '../905/691205'
import { FFileType } from '../figma_app/191312'
import { isEmptyObject } from '../figma_app/493477'
import { encodeUri } from '../figma_app/930338'
/**
 * Generates a community file URL.
 * @param fileKey - The file key.
 * @returns The community file URL.
 * (Original: $$d1)
 */
export function getCommunityFileUrl(fileKey: string): string {
  return `/community/file/${fileKey}`
}

/**
 * Generates a design file URL with defaulting allowed.
 * @param file - The file object.
 * @returns The design file URL.
 * (Original: $$c4)
 */
export function getDesignFileUrl(file: any): string {
  return buildFileUrl({
    file,
    allowDefaulting: true,
  })
}

/**
 * Generates a design file URL with defaulting allowed and additional options.
 * @param file - The file object.
 * @param options - Additional options.
 * @returns The design file URL.
 * (Original: $$u5)
 */
export function getDesignFileUrlWithOptions(file: any, options: Record<string, any> = {}): string {
  return buildFileUrl({
    file,
    allowDefaulting: true,
    ...options,
  })
}

/**
 * Generates a design file URL with conditional defaulting.
 * @param file - The file object.
 * @param disableDefaulting - If true, disables defaulting.
 * @returns The design file URL.
 * (Original: $$p3)
 */
export function getDesignFileUrlConditional(file: any, disableDefaulting?: boolean): string {
  return buildFileUrl({
    file,
    allowDefaulting: !disableDefaulting,
  })
}

/**
 * Builds a file URL based on provided options.
 * @param options - File URL options.
 * @returns The file URL.
 * (Original: $$m2)
 */
export function buildFileUrl(options: {
  file: any
  nodeId?: string
  base?: string
  attributionContext?: string
  isDevHandoff?: boolean
  isDrawMode?: boolean
  isReadOnly?: boolean
  isFigJam?: boolean
  isDevModeVarsTable?: boolean
  devModeVarsTableSelection?: string
  isDevModeOverview?: boolean
  devModeFocusId?: string
  allowDefaulting?: boolean
  commentId?: string
  compareLatest?: boolean
  mainComponent?: boolean
  stateGroupId?: string
  isFigmakeFullscreenPreview?: boolean
  isDevModeComponentBrowser?: boolean
  componentKey?: string
  cmsItemId?: string
}): string {
  return buildFileUrlInternal(options)
}

/**
 * Internal function to build a file URL.
 * @param options - File URL options.
 * @returns The file URL.
 * (Original: $$h0)
 */
export function buildFileUrlInternal(options: {
  file: any
  nodeId?: string
  base?: string
  attributionContext?: string
  isDevHandoff?: boolean
  isDrawMode?: boolean
  isReadOnly?: boolean
  isFigJam?: boolean
  isDevModeVarsTable?: boolean
  devModeVarsTableSelection?: string
  isDevModeOverview?: boolean
  devModeFocusId?: string
  allowDefaulting?: boolean
  commentId?: string
  compareLatest?: boolean
  mainComponent?: boolean
  stateGroupId?: string
  isFigmakeFullscreenPreview?: boolean
  isDevModeComponentBrowser?: boolean
  componentKey?: string
  cmsItemId?: string
}): string {
  let query: Record<string, any> = {}
  const editorType
    = options.file.editorType
      || options.file.editor_type
      || (options.isFigJam ? FFileType.WHITEBOARD : FFileType.DESIGN)

  let baseType: string
  if (options.base === 'file') {
    baseType = getBaseTypeForFile(editorType)
  }
  else if (options.base === 'proto') {
    baseType = getBaseTypeForProto(editorType)
  }
  else {
    baseType = options.base || 'file'
  }

  let hash = ''
  if (options.nodeId)
    query['node-id'] = replaceColonWithDash(options.nodeId)
  if (options.mainComponent)
    query['main-component'] = 1
  if (options.stateGroupId)
    query['state-group-id'] = replaceColonWithDash(options.stateGroupId)

  if (options.allowDefaulting) {
    if (baseType === 'design')
      query.m = 'auto'
  }
  else {
    let mode: string | undefined
    if (options.isDevHandoff)
      mode = 'dev'
    else if (options.isDrawMode)
      mode = 'draw'
    else if (!options.isFigJam)
      mode = 'design'
    if (baseType === 'design' && (mode === 'dev' || mode === 'draw'))
      query.m = mode
  }

  if ((options.base === 'file' || options.base === 'proto') && options.attributionContext) {
    query.t = options.attributionContext
  }
  if ((options.base === 'file' || options.base === 'proto') && options.commentId) {
    hash = `#${options.commentId}`
  }
  if (options.compareLatest)
    query['compare-latest'] = 1

  if (options.isDevModeVarsTable) {
    query.vars = 1
    if (options.devModeVarsTableSelection) {
      query['var-id'] = normalizeVariableId(options.devModeVarsTableSelection)
    }
  }
  else if (options.isDevModeOverview) {
    query['ready-for-dev'] = 1
  }
  else if (options.devModeFocusId) {
    query['focus-id'] = replaceColonWithDash(options.devModeFocusId)
  }
  else if (options.isDevModeComponentBrowser) {
    query['component-browser'] = 1
    if (options.componentKey)
      query['component-key'] = options.componentKey
  }

  if (getFeatureFlags().dakota && options.cmsItemId) {
    query['cms-item-id'] = options.cmsItemId
  }
  if (options.isFigmakeFullscreenPreview) {
    query.fullscreen = 1
  }

  const queryString = isEmptyObject(query) ? '' : `?${serializeQuery(query)}`
  const encodedName = encodeUri(options.file.name || '')
  return `${location.origin}/${baseType}/${options.file.key}${encodedName.length > 0 ? `/${encodedName}` : ''}${queryString}${hash}`
}

/**
 * Maps editor type to base type for 'file' base.
 * (Original: inline switch in $$h0)
 */
function getBaseTypeForFile(editorType: FFileType): string {
  switch (editorType) {
    case FFileType.WHITEBOARD:
      return 'board'
    case FFileType.DESIGN:
      return 'design'
    case FFileType.SLIDES:
      return 'slides'
    case FFileType.SITES:
      return 'site'
    case FFileType.COOPER:
      return 'buzz'
    case FFileType.FIGMAKE:
      return 'make'
    default:
      return 'design'
  }
}

/**
 * Maps editor type to base type for 'proto' base.
 * (Original: inline switch in $$h0)
 */
function getBaseTypeForProto(editorType: FFileType): string {
  switch (editorType) {
    case FFileType.SLIDES:
      return 'deck'
    case FFileType.DESIGN:
      return 'proto'
    default:
      return 'proto'
  }
}

// Exported names refactored for clarity and traceability
export const Kw = buildFileUrlInternal // $$h0
export const X$ = getCommunityFileUrl // $$d1
export const jN = buildFileUrl // $$m2
export const r1 = getDesignFileUrlConditional // $$p3
export const rl = getDesignFileUrl // $$c4
export const to = getDesignFileUrlWithOptions // $$u5
