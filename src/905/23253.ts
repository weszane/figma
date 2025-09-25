import { useEffect, useState } from 'react'
import { jsx } from 'react/jsx-runtime'
import { bytesToHex } from '../905/125019'
import { permissionScopeHandler } from '../905/189185'
import { getI18nString } from '../905/303541'
import { debugState } from '../905/407919'
import { getResourceDataOrFallback } from '../905/663269'
import { getSingletonSceneGraph } from '../905/700578'
import { WB } from '../905/761735'
import { BaseCustomError } from '../905/843553'
import { getMatchingNodesToUpdateForQuery } from '../905/913055'
import { generateShimmerOverlay } from '../905/929620'
import { ErrorType } from '../905/969273'
import { AiMeterUsageView } from '../figma_app/43951'
import { showPickerThunk } from '../figma_app/91703'
import { trackFileEvent } from '../figma_app/314264'
import { paintManager } from '../figma_app/385874'
import { fullscreenValue } from '../figma_app/455680'
import { getImageManager, processImageWithThumbnail } from '../figma_app/624361'
import { Fullscreen, NodePropertyCategory, TextModificationAction } from '../figma_app/763686'
import { ks, Vm } from '../figma_app/838407'
import { qy } from '../figma_app/862289'
import { base64ToUint8Array, uint8ArrayToBase64 } from '../figma_app/930338'
import { sZ } from '../figma_app/948389'

/**
 * Returns a status message for long-running AI image processing.
 * Original: $$C6
 */
export function getImageProcessingStatus(status: typeof qy[keyof typeof qy]) {
  const [message, setMessage] = useState('')
  useEffect(() => {
    if (status === qy.RUNNING) {
      const longTimeout = setTimeout(() => setMessage(getI18nString('image_ai.processing.long_loading_time')), 10000)
      const extraLongTimeout = setTimeout(() => setMessage(getI18nString('image_ai.processing.extra_long_loading_time')), 20000)
      return () => {
        clearTimeout(longTimeout)
        clearTimeout(extraLongTimeout)
      }
    }
    setMessage('')
  }, [status])
  return message
}

/**
 * Custom error for general image modification errors.
 * Original: $$T5
 */
export class ImageModificationError extends BaseCustomError {
  constructor(message: string, options?: { reportToSentry?: boolean }) {
    super(options?.reportToSentry)
    this.name = this.constructor.name
    this.message = message
  }
}

/**
 * Custom error for exceeded AI meter usage.
 * Original: $$k1
 */
export class MeterExceededError extends BaseCustomError {
  remaining: number
  constructor(message: string, remaining: number) {
    super(false)
    this.name = this.constructor.name
    this.message = message
    this.remaining = remaining
  }
}

/**
 * Custom error for image too large.
 * Original: $$R7
 */
export class ImageTooLargeError extends BaseCustomError {
  constructor(message: string) {
    super(false)
    this.name = this.constructor.name
    this.message = message
  }
}

/**
 * Custom error for image too small.
 * Original: $$N9
 */
export class ImageTooSmallError extends BaseCustomError {
  constructor(message: string) {
    super(false)
    this.name = this.constructor.name
    this.message = message
  }
}

/**
 * Custom error for already max upscaled image.
 * Original: $$P2
 */
export class AlreadyMaxUpscaledError extends BaseCustomError {
  constructor(message: string) {
    super(false)
    this.name = this.constructor.name
    this.message = message
  }
}

/**
 * Finds the image fill in a node matching the given hash.
 * Throws ImageModificationError if not found.
 * Original: $$O4
 */
export function findImageFillByHash({
  node,
  hash,
}: {
  node: any
  hash: string
}) {
  const fill = node.fills.find(
    (f: any) => f.image && f.image.hash && uint8ArrayToBase64(f.image.hash) === hash,
  )
  if (!fill) {
    throw new ImageModificationError('No image paint matching target', {
      reportToSentry: true,
    })
  }
  return fill
}

/**
 * Gets a signed URL for the image paint.
 * Throws ImageModificationError if not available.
 * Original: $$D3
 */
export async function getImagePaintSignedUrl(paint: any) {
  if (!paint || !paint.image || !paint.image.hash) {
    throw new ImageModificationError('No image paint available', {
      reportToSentry: true,
    })
  }
  const hashHex = bytesToHex(paint.image.hash)
  await getImageManager().imageUploadPromise()
  let signedUrls = getImageManager().getSignedUrls([hashHex])
  let url = signedUrls.get(hashHex)
  if (
    !url
    && (await new Promise(resolve => setTimeout(resolve, 1000)),
    !(url = (signedUrls = getImageManager().getSignedUrls([hashHex])).get(hashHex)))
  ) {
    throw new ImageModificationError('No image URL available', {
      reportToSentry: true,
    })
  }
  return url
}

const aiMeterNameMap = {
  upscale_image: 'upscale_image',
  bg_removal: 'remove_background',
}

/**
 * Checks if enough AI meter usages remain for the given operation.
 * Throws MeterExceededError if not enough usages.
 * Original: F
 */
async function checkAiMeterUsage({
  name,
  needed,
}: {
  name: keyof typeof aiMeterNameMap
  needed: number
}) {
  const wbInstance = WB()
  const state = debugState.getState()
  const fileKey = state.openFile?.key
  if (wbInstance && fileKey) {
    await new Promise<void>((resolve, reject) => {
      const unsubscribe = wbInstance.subscribe(
        AiMeterUsageView,
        { fileKey },
        (result: any) => {
          if (result.status === 'loaded') {
            unsubscribe?.()
            const usageData = getResourceDataOrFallback(result.data.aiMeterUsage)
            const meterName = aiMeterNameMap[name]
            for (const usage of usageData?.filter((u: any) => u.name === meterName) ?? []) {
              const remaining = Number(usage.remaining)
              if (remaining < needed) {
                reject(new MeterExceededError('Not enough usages remaining', remaining))
                return
              }
            }
            resolve()
          }
          else if (result.status !== 'loading') {
            unsubscribe?.()
            resolve()
          }
        },
      )
    })
  }
}

/**
 * Main image modification handler.
 * Original: $$M0
 */
export async function modifyImages({
  source,
  targets,
  name,
  suffix,
  action,
  modifyPaint,
}: {
  source: any
  targets: Array<{ guid: string, hash: string }>
  name: keyof typeof aiMeterNameMap
  suffix: string
  action: (args: { hash: string, nodes: any[], isBatch: boolean }) => Promise<string>
  modifyPaint?: (paint: any) => void
}) {
  const state = debugState.getState()
  const nodeMap = new Map<string, any[]>()
  for (const target of targets) {
    const node = getSingletonSceneGraph().get(target.guid)
    if (node) {
      nodeMap.set(target.hash, [...(nodeMap.get(target.hash) || []), node])
    }
  }
  const eventMeta = {
    source,
    node_count: targets.length,
    image_count: nodeMap.size,
  }
  const errorCounts = {
    too_large_error_count: 0,
    too_small_error_count: 0,
    already_max_upscaled_error_count: 0,
    total_error_count: 0,
  }
  trackFileEvent(`${name}_started`, state.openFile?.key, state, eventMeta)
  const startTime = performance.now()
  const cleanupMap: Record<string, () => void> = {}
  const modifiedNodes: Array<{ guid: string, error?: Error }> = []
  try {
    if (nodeMap.size > 1) {
      await checkAiMeterUsage({ name, needed: nodeMap.size })
    }
    await Promise.allSettled(
      Array.from(nodeMap.entries()).map(async ([hash, nodes]) => {
        try {
          nodes.forEach((node) => {
            cleanupMap[node.guid] = setupPlaybackHandler(node)
          })
          const resultBase64 = await action({
            hash,
            nodes,
            isBatch: targets.length > 1,
          })
          const imageData = base64ToUint8Array(resultBase64)
          const processedImage = await processImageWithThumbnail(imageData, 'image/png', `${name} ${suffix}`)
          nodes.forEach((node) => {
            // Original logic for updating node paint
            updateNodePaint({
              node,
              image: processedImage,
              previousHash: hash,
              modifyPaint,
            })
            modifiedNodes.push({ guid: node.guid })
          })
        }
        catch (error) {
          if (error instanceof ImageTooLargeError)
            errorCounts.too_large_error_count++
          else if (error instanceof ImageTooSmallError)
            errorCounts.too_small_error_count++
          else if (error instanceof AlreadyMaxUpscaledError)
            errorCounts.already_max_upscaled_error_count++
          errorCounts.total_error_count++
          nodes.forEach((node) => {
            modifiedNodes.push({ guid: node.guid, error })
          })
        }
        finally {
          nodes.forEach((node) => {
            cleanupMap[node.guid]?.()
          })
        }
      }),
    )
    if (modifiedNodes.every(n => n.error)) {
      const firstError = modifiedNodes[0]?.error
      if (modifiedNodes.every(n => n.error?.message === firstError?.message))
        throw firstError
      throw new ImageModificationError('All images failed to modify', { reportToSentry: true })
    }
    trackFileEvent(`${name}_completed`, state.openFile?.key, state, {
      total_time_ms: performance.now() - startTime,
      ...eventMeta,
      ...errorCounts,
    })
    return { modifiedNodes }
  }
  catch (error) {
    let reason = sZ(error)
    if (error instanceof MeterExceededError)
      reason = ErrorType.METER_EXCEEDED
    trackFileEvent(`${name}_failed`, state.openFile?.key, state, {
      total_time_ms: performance.now() - startTime,
      reason,
      ...eventMeta,
      ...errorCounts,
    })
    return error
  }
  finally {
    Object.values(cleanupMap).forEach(cleanup => cleanup())
  }
}

/**
 * Sets up shimmer overlay for nodes and returns a cleanup function.
 * Original: $$j8
 */
export function setupPlaybackHandler(node: any) {
  const nodesToUpdate = getMatchingNodesToUpdateForQuery(node, 'fill-paint-data')
  nodesToUpdate.forEach((n) => {
    Vm(n.guid, jsx(generateShimmerOverlay, {}))
  })
  return () => {
    nodesToUpdate.forEach((n) => {
      ks(n.guid)
    })
  }
}

/**
 * Updates node paint with new image and handles UI logic.
 * Original: inline in $$M0
 */
function updateNodePaint({
  node,
  image,
  previousHash,
  modifyPaint,
}: {
  node: any
  image: any
  previousHash: string
  modifyPaint?: (paint: any) => void
}) {
  if (!node.isAlive)
    return
  permissionScopeHandler.ai('image-modification', () => {
    const fillIndex = node.fills.findIndex(
      (f: any) => f.type === 'IMAGE' && f.image?.hash && uint8ArrayToBase64(f.image.hash) === previousHash,
    )
    getMatchingNodesToUpdateForQuery(node, 'fill-paint-data').forEach((n: any) => {
      if (fillIndex !== -1) {
        const newPaint = { ...n.fills[fillIndex] }
        const fills = [...n.fills]
        if (modifyPaint)
          modifyPaint(newPaint)
        fills.splice(fillIndex + 1, 0, newPaint)
        n.fills = fills
        fullscreenValue.updateAppModel({
          currentSelectedProperty: {
            type: NodePropertyCategory.FILL,
            indices: [fillIndex + 1],
          },
        })
        n.setFillPaintEnabled(fillIndex, false)
        n.setImageInFillPaint(image, fillIndex + 1)
        handlePickerShown(paintManager.getId(fillIndex + 1, NodePropertyCategory.FILL, 'paint'))
      }
      else {
        n.insertImageInFillPaint(image)
      }
    })
  })
  if (Fullscreen) {
    Fullscreen.requestNextCommitMergeWithPrevious(TextModificationAction.AI_IMAGE_MODIFICATION)
    Fullscreen.triggerAction('commit', {})
  }
}

/**
 * Handles picker UI logic after paint update.
 * Original: inline in $$M0
 */
function handlePickerShown(paintId: string) {
  const state = debugState.getState()
  if (state.mirror.appModel.currentSelectedProperty.type !== NodePropertyCategory.FILL)
    return
  const pickerShown = state.pickerShown
  if (!pickerShown)
    return
  const { initialX, initialY } = pickerShown
  if (initialX !== undefined && initialY !== undefined) {
    debugState.dispatch(
      showPickerThunk({
        id: paintId,
        initialX,
        initialY,
        data: { isInStyleModal: false },
      }),
    )
  }
}

// Export refactored names

export const Cj = modifyImages
export const ME = MeterExceededError
export const PE = AlreadyMaxUpscaledError
export const VG = getImagePaintSignedUrl
export const XJ = findImageFillByHash
export const fk = ImageModificationError
export const gg = getImageProcessingStatus
export const jM = ImageTooLargeError
export const qY = setupPlaybackHandler
export const zs = ImageTooSmallError
