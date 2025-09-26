import type { Color } from '../905/types'
import { kiwiCodec } from '../905/5147'
import { permissionScopeHandler } from '../905/189185'
import { LRUCache } from '../905/196201'

import { splitPath } from '../905/309735'
import { createStyleThumbnail, generateThumbnail, isStyleType } from '../905/405710'
import { trackEventAnalytics } from '../905/449184'
import { convertKiwiToString, convertRefToString, convertStringToKiwi } from '../905/537777'
import { logWarning } from '../905/714362'
import { createVariableIdStringFromRef } from '../905/805904'
import { generateFileVersionUrl, loadCanvasData } from '../905/815475'
import { getRequest, sendWithRetry } from '../905/910117'
import { parseColor, setAlpha } from '../figma_app/191804'
import { hasAssetId, PrimaryWorkflowEnum, StagingStatusEnum } from '../figma_app/633080'
import { sortByPropertyWithOptions } from '../figma_app/656233'
import { Confirmation, LibraryPubSub, SceneIdentifier, Thumbnail } from '../figma_app/763686'
import { memoizeByArgs } from '../figma_app/815945'

let thumbnailBlobCache = Object.create(null)

/**
 * Generate thumbnail for a node
 * @param node - The node to generate thumbnail for
 * @returns Thumbnail URL or null
 */
export function generateNodeThumbnail(node: any) {
  return createObjectUrlFromBuffer(generateThumbnail(node))
}

export let FAILED_THUMBNAIL = 'FAILED_THUMBNAIL'
export let LOADING_THUMBNAIL = 'LOADING_THUMBNAIL'

/**
 * Check if thumbnail is valid
 * @param thumbnail - The thumbnail to validate
 * @returns True if valid, false otherwise
 */
export function isValidThumbnail(thumbnail: string | null) {
  return !(!thumbnail || thumbnail === FAILED_THUMBNAIL || thumbnail === LOADING_THUMBNAIL || thumbnail.startsWith('blob:') && !thumbnailBlobCache[thumbnail])
}

/**
 * Generate thumbnail from style master
 * @param node - The node to generate thumbnail for
 * @param style - The style to use
 * @returns Thumbnail URL or status
 */
export function generateThumbnailFromStyleMaster(node: any, style: any) {
  let [result, buffer] = Thumbnail.generateThumbnailFromStyleMaster(node, style, 18, 18, 2)
  if (result && result.status === LOADING_THUMBNAIL) {
    return LOADING_THUMBNAIL
  }
  const url = createObjectUrlFromBuffer(buffer)
  if (url) {
    return url
  }
  else {
    console.error(`failed to generate thumbnail for node ${node}`)
    return FAILED_THUMBNAIL
  }
}

/**
 * Generate thumbnail from style consumer
 * @param node - The node to generate thumbnail for
 * @param style - The style to use
 * @returns Thumbnail URL or status
 */
export function generateThumbnailFromStyleConsumer(node: any, style: any) {
  let [, buffer] = Thumbnail.generateThumbnailFromStyleConsumer(node, style, 18, 18)
  const url = createObjectUrlFromBuffer(buffer)
  if (url) {
    return url
  }
  else {
    console.error(`failed to generate thumbnail for node ${node}`)
    return FAILED_THUMBNAIL
  }
}

/**
 * Generate serializable thumbnail for style
 * @param node - The node to generate thumbnail for
 * @param styleType - The style type
 * @param styleId - The style ID
 * @returns Style thumbnail or invalid object
 */
export function generateSerializableStyleThumbnail(node: any, styleType: any, styleId?: string) {
  if (!isStyleType(styleType)) {
    return {
      type: 'INVALID',
    }
  }
  let serializableThumbnail = Thumbnail.generateSerializableThumbnailForStyle(styleId || '', styleType, node || '')
  let decodedMessage = serializableThumbnail.length > 0 ? kiwiCodec.decodeMessage(serializableThumbnail) : null
  let nodeChange = decodedMessage && decodedMessage.nodeChanges && decodedMessage.nodeChanges[0] || null
  if (nodeChange) {
    return createStyleThumbnail(nodeChange, styleType)
  }
  else {
    console.error(`failed to generate serializable thumbnail for node ${styleId}`)
    return {
      type: 'INVALID',
    }
  }
}

/**
 * Check if fill color is valid
 * @param fill - The fill to check
 * @returns True if valid, false otherwise
 */
export function hasValidFillColor(fill: any) {
  return !!getFillColor(fill)
}

/**
 * Get fill color from fill object
 * @param fill - The fill object
 * @returns Color object or null
 */
export function getFillColor(fill: any) {
  if (fill.type !== 'FILL')
    return null
  let fillPaints = fill.fillPaints
  if (!fillPaints || fillPaints.length !== 1)
    return null
  let paint = fillPaints[0]
  return paint.type !== 'SOLID' || paint.color == null || paint.opacity == null
    ? null
    : {
      ...paint.color,
      a: paint.opacity,
    }
}

/**
 * Create object URL from buffer
 * @param buffer - The buffer to create URL from
 * @returns Object URL or null
 */
export function createObjectUrlFromBuffer(buffer: Uint8Array<any>) {
  if (buffer.length > 0) {
    let url = URL.createObjectURL(new Blob([buffer]))
    thumbnailBlobCache[url] = buffer
    return url
  }
  return null
}

/**
 * Get buffer from thumbnail URL
 * @param thumbnailUrl - The thumbnail URL
 * @returns Buffer data
 */
export function getBufferFromThumbnailUrl(thumbnailUrl: string) {
  let buffer = thumbnailBlobCache[thumbnailUrl]
  if (!buffer)
    throw new Error(`No buffer in cache for thumbnail url ${thumbnailUrl}`)
  return buffer
}

/**
 * Revoke thumbnail URL
 * @param thumbnailUrl - The thumbnail URL to revoke
 */
export function revokeThumbnailUrl(thumbnailUrl: string) {
  if (thumbnailBlobCache[thumbnailUrl]) {
    URL.revokeObjectURL(thumbnailUrl)
    delete thumbnailBlobCache[thumbnailUrl]
  }
}

let defaultPlaceholderThumbnail = null;

(() => {
  if (!document)
    return
  let canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  canvas.toBlob && canvas.toBlob((blob) => {
    if (!blob)
      return
    let reader = new FileReader()
    reader.onload = () => {
      defaultPlaceholderThumbnail = createObjectUrlFromBuffer(new Uint8Array(reader.result as ArrayBuffer))
    }
    reader.readAsArrayBuffer(blob)
  }, 'image/png')
})()

/**
 * Get default placeholder thumbnail
 * @returns Default placeholder thumbnail
 */
export let getDefaultPlaceholderThumbnail = () => defaultPlaceholderThumbnail

/**
 * Format font metrics
 * @param textNode - The text node with metrics
 * @returns Formatted metrics string
 */
export function formatFontMetrics(textNode: any) {
  let formatNumber = (num: number) => {
    let formatted = num.toFixed(1)
    return formatted.slice(-1) === '0' ? num.toFixed(0) : formatted
  }
  if (!(textNode.metrics && textNode.metrics.fontSize && textNode.metrics.lineHeight))
    return ''
  let fontSizePart = ` \xB7 ${formatNumber(textNode.metrics.fontSize)}`
  let lineHeight = textNode.metrics.lineHeight
  return lineHeight.units === 'PERCENT' && lineHeight.value === 100 ? `${fontSizePart}/Auto` : lineHeight.units === 'RAW' ? `${fontSizePart}/${formatNumber(100 * lineHeight.value)}` : `${fontSizePart}/${formatNumber(lineHeight.value)}`
}

/**
 * Filter and sort published items
 * @param items - The items to filter and sort
 * @returns Filtered and sorted items
 */
export function filterAndSortPublishedItems(items: any) {
  let publishedItems = Object.keys(items).map(key => items[key]).filter(item => !item.unpublished_at)
  sortByPropertyWithOptions(publishedItems, 'name')
  return publishedItems
}

let isCurrentStagingStatus = (status: StagingStatusEnum) => status === StagingStatusEnum.CURRENT || status === StagingStatusEnum.CHANGED || status === StagingStatusEnum.DELETED

let memoizedProcessLocalComponents = memoizeByArgs((components: any) => {
  let processedComponents: any = {}
  Object.keys(components).forEach((key) => {
    processedComponents[key] = processLocalComponents(components[key] ?? {})
  })
  return processedComponents
})

/**
 * Process local components
 * @param components - The components to process
 * @returns Processed components
 */
export function processLocalComponents(components: any) {
  let processedComponents: any = {}
  for (let key in components) {
    let component = components[key]
    component.containing_frame?.containingStateGroup == null && (processedComponents[key] = {
      ...component,
    })
  }
  return processedComponents
}

/**
 * Memoized process components and state groups
 */
export let memoizedProcessComponentsAndStateGroups = memoizeByArgs((data: any) => {
  let processedComponents = processLocalComponents(data.local.components)
  for (let key in data.local.stateGroups) processedComponents[key] = data.local.stateGroups[key]
  return processedComponents
})

/**
 * Split and join path
 * @param path - The path to process
 * @returns Joined path
 */
export function splitAndJoinPath(path: string) {
  return splitPath(path).join('/')
}

/**
 * Get component breadcrumbs
 * @param component - The component
 * @param allComponents - All components
 * @returns Breadcrumb array
 */
export function getComponentBreadcrumbs(component: any, allComponents: any[]) {
  let hasSamePageDifferentFrame = allComponents.some(other => other.containing_frame?.pageId === component.containing_frame?.pageId && other.containing_frame?.nodeId !== component.containing_frame?.nodeId)
  let breadcrumbs: string[] = []
  hasSamePageDifferentFrame && component.containing_frame?.name?.trim().length && breadcrumbs.push(component.containing_frame.name)
  let pathParts = splitPath(component.name).map(part => part.trim()).filter(part => part !== '')
  pathParts.pop()
  breadcrumbs.push(...pathParts)
  return breadcrumbs
}

/**
 * Get full component breadcrumbs
 * @param component - The component
 * @param allComponents - All components
 * @returns Full breadcrumb array
 */
export function getFullComponentBreadcrumbs(component: any, allComponents: any[]) {
  let breadcrumbs = getComponentBreadcrumbs(component, allComponents)
  allComponents.some(other => other.containing_frame?.pageName?.trim() !== component.containing_frame?.pageName?.trim()) && component.containing_frame?.pageName?.trim().length && breadcrumbs.unshift(component.containing_frame?.pageName?.trim())
  return breadcrumbs
}

async function fetchComponentLogData(components: any[], fileVersion: number) {
  return await fetchLogData(components, fileVersion, PrimaryWorkflowEnum.COMPONENT)
}

async function fetchStateGroupLogData(stateGroups: any[], fileVersion: number) {
  return await fetchLogData(stateGroups, fileVersion, PrimaryWorkflowEnum.STATE_GROUP)
}

async function fetchVariableLogData(variables: any[], fileVersion: number) {
  return await fetchLogData(variables, fileVersion, PrimaryWorkflowEnum.VARIABLE)
}

async function fetchVariableSetLogData(variableSets: any[], fileVersion: number) {
  return await fetchLogData(variableSets, fileVersion, PrimaryWorkflowEnum.VARIABLE_SET)
}

async function fetchLogData(items: any[], fileVersion: number, workflowType: PrimaryWorkflowEnum) {
  let endpoint = ''
  let itemType = ''
  switch (workflowType) {
    case PrimaryWorkflowEnum.VARIABLE:
      endpoint = '/api/variable_log_data'
      itemType = 'variables'
      break
    case PrimaryWorkflowEnum.VARIABLE_SET:
      endpoint = '/api/variable_set_log_data'
      itemType = 'variable_sets'
      break
    case PrimaryWorkflowEnum.STATE_GROUP:
      endpoint = '/api/state_group_log_data'
      itemType = 'state_groups'
      break
    case PrimaryWorkflowEnum.COMPONENT:
      endpoint = '/api/component_log_data'
      itemType = 'components'
  }
  let validItems: any[] = []
  let responseItems = (await sendWithRetry.post(endpoint, {
    [itemType]: items,
    fv: fileVersion.toString(),
  })).data.meta[itemType]
  if (responseItems.length < items.length) {
    for (let item of items) {
      const foundItem = workflowType === PrimaryWorkflowEnum.COMPONENT
        ? responseItems.find((resItem: any) => resItem.component_key === item.key && resItem.content_hash === item.version)
        : responseItems.find((resItem: any) => resItem.key === item.key && resItem.version === item.version)

      if (!foundItem) {
        console.error(`Asset data for ${workflowType} key ${item.key} version ${item.version} is missing. Does the user have proper access to the asset?`)
      }
    }
  }

  for (let item of responseItems) {
    if (workflowType !== PrimaryWorkflowEnum.VARIABLE_OVERRIDE
      && workflowType !== PrimaryWorkflowEnum.CODE_LIBRARY
      && workflowType !== PrimaryWorkflowEnum.CODE_FILE
      && workflowType !== PrimaryWorkflowEnum.CODE_COMPONENT
      && workflowType !== PrimaryWorkflowEnum.MANAGED_STRING) {
      item.type = workflowType

      if (item.canvas_url && item.canvas_url.length !== 0) {
        validItems.push(item)
      }
      else {
        if (item.type === PrimaryWorkflowEnum.COMPONENT) {
          console.error(`Canvas URL missing from ${workflowType} ${item.component_key} version ${item.content_hash}.`)
        }
        else {
          console.error(`Canvas URL missing from ${workflowType} ${item.key} version ${item.version}.`)
        }
      }
    }
  }
  return validItems
}

function getResponseStatus(response: any) {
  let status = response && response.status
  return Number.isInteger(status) && status >= 0 ? status : -1
}

function isClientError(response: any) {
  let status = getResponseStatus(response)
  return status >= 400 && status < 500
}

let formatErrorMessage = (error: any) => {
  let message = (function (err: any, defaultMessage: string) {
    let errorMsg = err && err.data && err.data.message
    return typeof errorMsg == 'string' && errorMsg.length > 0 ? errorMsg : defaultMessage
  }(error, 'please try again later'))
  let status = getResponseStatus(error)
  status > 0 ? message += ` (status ${error.data.status})` : status === 0 && (message += ' (must be online)')
  return message
}

function getItemPath(item: any) {
  switch (item.type) {
    case PrimaryWorkflowEnum.COMPONENT:
      return `component/${item.component_key}/${item.content_hash}`
    case PrimaryWorkflowEnum.STATE_GROUP:
      return `state_groups/${item.key}/${item.version}`
    case PrimaryWorkflowEnum.VARIABLE:
    case PrimaryWorkflowEnum.VARIABLE_SET:
      return `variable_set/${item.key}/${item.version}`
  }
}

async function processAssetUpsert(asset: any, fileVersion: number, scene: any) {
  try {
    let buffer
    try {
      buffer = await teamLibraryCache.getCanvas({
        canvas_url: (function (assetItem: any, version: number) {
          switch (assetItem.type) {
            case PrimaryWorkflowEnum.COMPONENT:
              return `${assetItem.canvas_url}&fv=${version.toString()}`
            case PrimaryWorkflowEnum.STATE_GROUP:
              return `/state_group/${assetItem.key}/version/${assetItem.version}/canvas?fv=${version}`
            case PrimaryWorkflowEnum.VARIABLE:
            case PrimaryWorkflowEnum.VARIABLE_SET:
              return assetItem.canvas_url
          }
        }(asset, fileVersion)),
      })
    }
    catch (error) {
      if (isClientError(error)) {
        console.warn('Permanent error', error, 'status', getResponseStatus(error), 'for entry', getItemPath(asset))
        return {
          resultType: 'permanent-error',
        }
      }
      console.warn('Transient error', error, 'status', getResponseStatus(error), 'for entry', getItemPath(asset))
      return {
        resultType: 'transient-error',
        transientError: error,
      }
    }
    return {
      resultType: permissionScopeHandler.system('upsert-asset-from-log', () => (function (assetItem: any, sceneData: any, bufferData: any) {
        let upsertResult
        let errorType
        switch (assetItem.type) {
          case PrimaryWorkflowEnum.COMPONENT:
            upsertResult = LibraryPubSub.upsertSharedSymbol(assetItem.component_key, assetItem.content_hash, assetItem.library_key, sceneData, bufferData, SceneIdentifier.ACTIVE_SCENE)
            errorType = 'shared-symbol-error'
            break
          case PrimaryWorkflowEnum.STATE_GROUP:
            upsertResult = LibraryPubSub.upsertSharedStateGroup(assetItem.key, assetItem.version, assetItem.library_key, sceneData, bufferData, SceneIdentifier.ACTIVE_SCENE)
            errorType = 'shared-state-group-error'
            break
          case PrimaryWorkflowEnum.VARIABLE:
            upsertResult = LibraryPubSub.upsertSharedVariable(createVariableIdStringFromRef(assetItem.key, assetItem.version), sceneData, bufferData)
            errorType = 'shared-variable-error'
            break
          case PrimaryWorkflowEnum.VARIABLE_SET:
            upsertResult = LibraryPubSub?.upsertSharedRootVariableSet(convertRefToString(assetItem.key, assetItem.version), assetItem.library_key, sceneData, Confirmation.NO, bufferData)
            errorType = 'shared-variable-set-error'
        }
        if (!upsertResult || upsertResult.fileUpdateRequired)
          return errorType
        if (!upsertResult.localGUID) {
          if (assetItem.type === PrimaryWorkflowEnum.COMPONENT) {
            console.error(`Couldn't upsert shared component in scene for key ${assetItem.component_key} version ${assetItem.content_hash}.`)
            return errorType
          }
          if (assetItem.type === PrimaryWorkflowEnum.STATE_GROUP) {
            console.error(`Couldn't upsert shared state group in scene for key ${assetItem.key} version ${assetItem.version}.`)
            return errorType
          }
        }
        return 'success'
      }(asset, scene, buffer))),
      bytesAdded: buffer.byteLength,
    }
  }
  catch (error) {
    console.error('Uncaught error', error, 'during buffer processing of', getItemPath(asset))
    return {
      resultType: 'uncaught-error',
    }
  }
}

/**
 * Fetch and process component publishing buffers
 * @param components - Components to process
 * @param stateGroups - State groups to process
 * @param scene - Scene data
 * @param fileVersion - File version
 * @returns Promise resolving to success status
 */
export async function fetchAndProcessComponentPublishingBuffers(components: any[], stateGroups: any[], scene: any, fileVersion: number) {
  try {
    let lastError
    let startTime = Date.now()
    let totalBytes = 0
    let resultCounts = {
      'permanent-error': 0,
      'transient-error': 0,
      'shared-symbol-error': 0,
      'shared-state-group-error': 0,
      'uncaught-error': 0,
      'success': 0,
      'shared-variable-error': 0,
      'shared-variable-set-error': 0,
      'shared-module-error': 0,
    }
    let errorStatus = -1
    let componentData: any[] = []
    if (components.length > 0) {
      try {
        componentData = await fetchComponentLogData(components, fileVersion)
      }
      catch (error) {
        if (isClientError(error)) {
          resultCounts['permanent-error']++
        }
        else {
          resultCounts['transient-error']++
          lastError = error
        }
        errorStatus = getResponseStatus(error)
        componentData = []
      }
    }
    for (let item of componentData) {
      let {
        resultType,
        bytesAdded,
        transientError,
      } = await processAssetUpsert(item, fileVersion, scene)
      resultCounts[resultType]++
      totalBytes += bytesAdded ?? 0
      transientError && (lastError = transientError)
    }
    let stateGroupData: any[] = []
    if (stateGroups.length > 0) {
      try {
        stateGroupData = await fetchStateGroupLogData(stateGroups, fileVersion)
      }
      catch (error) {
        if (isClientError(error)) {
          resultCounts['permanent-error']++
        }
        else {
          resultCounts['transient-error']++
          lastError = error
        }
        errorStatus = getResponseStatus(error)
        stateGroupData = []
      }
    }
    for (let item of stateGroupData) {
      let {
        resultType,
        bytesAdded,
        transientError,
      } = await processAssetUpsert(item, fileVersion, scene)
      resultCounts[resultType]++
      totalBytes += bytesAdded ?? 0
      transientError && (lastError = transientError)
    }
    trackEventAnalytics('publishing_buffer_fetch', {
      latency: Date.now() - startTime,
      num_versions_fetched: componentData.length + stateGroupData.length,
      num_success: resultCounts.success,
      total_bytes: totalBytes,
      failed_to_upsert_in_scene: resultCounts['shared-symbol-error'] + resultCounts['shared-state-group-error'],
      permanent_errors: resultCounts['permanent-error'],
      transient_errors: resultCounts['transient-error'],
      uncaught_errors: resultCounts['uncaught-error'],
      log_data_error_status: errorStatus,
    })
    if (resultCounts['transient-error'] > 0) {
      return Promise.reject(new Error(formatErrorMessage(lastError)))
    }
    return Promise.resolve(true)
  }
  catch (error) {
    return Promise.reject(new Error(formatErrorMessage(error)))
  }
}

/**
 * Fetch and process variable publishing buffers
 * @param variableSets - Variable sets to process
 * @param variables - Variables to process
 * @param scene - Scene data
 * @param fileVersion - File version
 * @returns Promise resolving to success status
 */
export async function fetchAndProcessVariablePublishingBuffers(variableSets: any[], variables: any[], scene: any, fileVersion: number) {
  try {
    let lastError
    let startTime = Date.now()
    let totalBytes = 0
    let resultCounts = {
      'permanent-error': 0,
      'transient-error': 0,
      'shared-variable-error': 0,
      'shared-variable-set-error': 0,
      'uncaught-error': 0,
      'success': 0,
      'shared-symbol-error': 0,
      'shared-state-group-error': 0,
      'shared-module-error': 0,
    }
    let errorStatus = -1
    let variableSetData: any[] = []
    if (variableSets.length > 0) {
      try {
        variableSetData = await fetchVariableSetLogData(variableSets, fileVersion)
      }
      catch (error) {
        if (isClientError(error)) {
          resultCounts['permanent-error']++
        }
        else {
          resultCounts['transient-error']++
          lastError = error
        }
        errorStatus = getResponseStatus(error)
        variableSetData = []
      }
    }
    for (let item of variableSetData) {
      let {
        resultType,
        bytesAdded,
        transientError,
      } = await processAssetUpsert(item, fileVersion, scene)
      resultCounts[resultType]++
      totalBytes += bytesAdded ?? 0
      transientError && (lastError = transientError)
    }
    let variableData: any[] = []
    if (variables.length > 0) {
      try {
        variableData = await fetchVariableLogData(variables, fileVersion)
      }
      catch (error) {
        if (isClientError(error)) {
          resultCounts['permanent-error']++
        }
        else {
          resultCounts['transient-error']++
          lastError = error
        }
        errorStatus = getResponseStatus(error)
        variableData = []
      }
    }
    for (let item of variableData) {
      let {
        resultType,
        bytesAdded,
        transientError,
      } = await processAssetUpsert(item, fileVersion, scene)
      resultCounts[resultType]++
      totalBytes += bytesAdded ?? 0
      transientError && (lastError = transientError)
    }
    trackEventAnalytics('variable_publishing_buffer_fetch', {
      latency: Date.now() - startTime,
      num_versions_fetched: variableSetData.length + variableData.length,
      num_success: resultCounts.success,
      total_bytes: totalBytes,
      failed_to_upsert_in_scene: resultCounts['shared-variable-set-error'] + resultCounts['shared-variable-error'],
      permanent_errors: resultCounts['permanent-error'],
      transient_errors: resultCounts['transient-error'],
      uncaught_errors: resultCounts['uncaught-error'],
      log_data_error_status: errorStatus,
    })
    if (resultCounts['transient-error'] > 0) {
      return Promise.reject(new Error(formatErrorMessage(lastError)))
    }
    return Promise.resolve(true)
  }
  catch (error) {
    return Promise.reject(new Error(formatErrorMessage(error)))
  }
}

let TeamLibraryCache = class TeamLibraryCacheClass {
  static MAX_VARIABLE_SET_THUMBNAILS = 20
  canvasCache: Record<string, any>
  canvasRequestsInFlight: Record<string, Promise<[any, string]>>
  thumbnailCache: LRUCache<any, any>
  thumbnailRequestsInFlight: Record<string, Promise<any>>

  constructor() {
    this.canvasCache = Object.create(null)
    this.canvasRequestsInFlight = Object.create(null)
    this.thumbnailCache = new LRUCache(TeamLibraryCacheClass.MAX_VARIABLE_SET_THUMBNAILS)
    this.thumbnailRequestsInFlight = Object.create(null)
    this.getCanvas = async ({
      canvas_url: url,
    }: {
      canvas_url: string
    }): Promise<any> => {
      if (!url)
        throw new Error('No canvas URL')
      let {
        url: processedUrl,
      } = generateFileVersionUrl(url)
      let cachedCanvas = this.canvasCache[processedUrl]
      if (cachedCanvas)
        return cachedCanvas
      let inFlightRequest = this.canvasRequestsInFlight[processedUrl]
      if (inFlightRequest)
        return inFlightRequest.then((result: [any, string]) => result[0])
      try {
        let loadDataPromise: Promise<any> = loadCanvasData(processedUrl)
        this.canvasRequestsInFlight[processedUrl] = loadDataPromise
        let [canvasData, finalUrl] = await loadDataPromise as [any, string]
        this.canvasCache[finalUrl] = canvasData
        return canvasData
      }
      catch (error) {
        console.warn('Team library cache error on get() with status', getResponseStatus(error), 'with error', error)
        throw error
      }
      finally {
        delete this.canvasRequestsInFlight[processedUrl]
      }
    }
    this.getVariableSetThumbnails = (thumbnailUrl: string): Promise<any> => {
      if (!thumbnailUrl)
        return Promise.reject(new Error('No canvas URL'))
      if (this.thumbnailCache.has(thumbnailUrl))
        return Promise.resolve(this.thumbnailCache.get(thumbnailUrl))
      if (thumbnailUrl in this.thumbnailRequestsInFlight)
        return this.thumbnailRequestsInFlight[thumbnailUrl]
      {
        let decodedData: string | undefined
        let requestStatus: number | undefined
        let requestPromise = getRequest(thumbnailUrl, null, {
          responseType: 'arraybuffer',
        }).then(({
          data: responseData,
          status: responseStatus,
        }) => {
          decodedData = new TextDecoder('utf-8').decode(responseData as any)
          requestStatus = responseStatus
          let parsedThumbnails = (function (data: any) {
            let thumbnails: any = {}
            for (let key of Object.keys(data)) {
              let convertedKey = convertStringToKiwi(key)
              convertedKey ? thumbnails[convertKiwiToString(convertedKey as any)] = data[key] : console.error(`Received invalid collection ID in thumbnails response: ${key}`)
            }
            return thumbnails
          }(JSON.parse(decodedData)))
          this.thumbnailCache.set(thumbnailUrl, parsedThumbnails)
          return parsedThumbnails
        }).catch((error) => {
          console.warn('Team library cache error on get() with status', getResponseStatus(error), 'with error', error)
          logWarning('teamLibraryItemSeceneGraphCache', 'unable to get variable set thumbnails', {
            decodedData,
            thumbnailUrl,
            requestStatus,
          })
          throw error
        }).finally(() => {
          delete this.thumbnailRequestsInFlight[thumbnailUrl]
        })
        this.thumbnailRequestsInFlight[thumbnailUrl] = requestPromise
        return requestPromise
      }
    }
    this.putCanvas = (url: string, canvasData: any): void => {
      this.canvasCache[url] = canvasData
    }
    this.hasKeyInCache = (key: string): boolean => key in this.canvasCache || this.thumbnailCache.has(key)
    this.clearCache = (): void => {
      this.canvasCache = Object.create(null)
      this.thumbnailCache.reset()
      this.canvasRequestsInFlight = Object.create(null)
      this.thumbnailRequestsInFlight = Object.create(null)
    }
    this.getCacheValueOrNull = (key: string): any => this.thumbnailCache.get(key) ?? null
    this.clearCache()
  }

  getCanvas: (params: { canvas_url: string }) => Promise<any>
  getVariableSetThumbnails: (thumbnailUrl: string) => Promise<any>
  putCanvas: (url: string, canvasData: any) => void
  hasKeyInCache: (key: string) => boolean
  clearCache: () => void
  getCacheValueOrNull: (key: string) => any
}

export let teamLibraryCache = new TeamLibraryCache()

export function getAssetBackgroundColor(asset: any, defaultColor: string | null = null): Color | null {
  let backgroundColor = (hasAssetId(asset) ? asset.containingFrame?.backgroundColor : asset.type === PrimaryWorkflowEnum.COMPONENT && asset.containing_frame?.backgroundColor ? asset.containing_frame.backgroundColor : asset.type === PrimaryWorkflowEnum.STATE_GROUP && asset.fill_color ? asset.fill_color : asset.type === PrimaryWorkflowEnum.STATE_GROUP && asset.containing_frame?.backgroundColor ? asset.containing_frame.backgroundColor : void 0) ?? defaultColor
  if (!backgroundColor)
    return null
  let parsedColor = parseColor(backgroundColor)
  return parsedColor && parsedColor.a !== 0 ? setAlpha(parsedColor, 1) : null
}

/**
 * Get common library key
 * @param assets - Assets to check
 * @returns Common library key or null
 */
export function getCommonLibraryKey(assets: any[]) {
  let commonKey: string | null = null
  assets.every((asset) => {
    if (commonKey === null) {
      commonKey = asset.library_key
    }
    else if (commonKey !== asset.library_key) {
      commonKey = null
      return false
    }
    return true
  })
  return commonKey
}

export const $X = createObjectUrlFromBuffer
export const Eo = teamLibraryCache
export const F1 = fetchAndProcessComponentPublishingBuffers
export const J_ = splitAndJoinPath
export const Jl = processLocalComponents
export const MJ = getFillColor
export const O9 = getFullComponentBreadcrumbs
export const OM = isValidThumbnail
export const P$ = formatFontMetrics
export const Qx = memoizedProcessComponentsAndStateGroups
export const R8 = getComponentBreadcrumbs
export const UB = isCurrentStagingStatus
export const UE = hasValidFillColor
export const Vu = getBufferFromThumbnailUrl
export const aV = generateThumbnailFromStyleMaster
export const ah = generateThumbnailFromStyleConsumer
export const cO = memoizedProcessLocalComponents
export const g4 = fetchAndProcessVariablePublishingBuffers
export const jh = getDefaultPlaceholderThumbnail
export const oU = generateSerializableStyleThumbnail
export const qv = revokeThumbnailUrl
export const r2 = generateNodeThumbnail
export const r8 = FAILED_THUMBNAIL
export const u0 = LOADING_THUMBNAIL
export const uj = getCommonLibraryKey
export const y3 = filterAndSortPublishedItems
export const zR = getAssetBackgroundColor
