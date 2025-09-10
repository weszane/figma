import { Buffer } from 'node:buffer'
import { deepEqual } from '../905/382883'
import { logError } from '../905/714362'
import { atom, createRemovableAtomFamily, useAtomValueAndSetter } from '../figma_app/27355'
import { AssetAtomMap } from '../figma_app/31188'
import { CodeComponentIdHandler, ResponsiveSetIdHandler } from '../figma_app/243058'
import { assert } from '../figma_app/465776'
import { setupRemovableAtomFamily } from '../figma_app/615482'
import { PrimaryWorkflowEnum } from '../figma_app/633080'
import { Fullscreen, Thumbnail } from '../figma_app/763686'
/**
 * Generates a thumbnail for a node using Fullscreen and Thumbnail utilities.
 * @param node - The node to generate a thumbnail for.
 * @returns The generated thumbnail.
 * (Original: $$m11)
 */
export function generateThumbnail(node: any): any {
  const defaultState = Fullscreen.getDefaultStateForLocalStateGroup(node) || node
  const [, thumbnail] = Thumbnail.generateThumbnailForNode(defaultState, 768, 768, 2, {})
  return thumbnail
}

/**
 * Checks if the style type is valid and if the meta does not have a style_thumbnail.
 * @param asset - The asset to check.
 * @returns True if valid, false otherwise.
 * (Original: $$h7)
 */
export function isValidStyleType(asset: any): boolean {
  return isStyleType(asset.style_type) && !(asset.meta && asset.meta.style_thumbnail)
}

/**
 * Retrieves the style thumbnail from meta if valid.
 * @param asset - The asset to check.
 * @returns The style thumbnail or null.
 * (Original: $$g2)
 */
export function getStyleThumbnail(asset: any): any | null {
  const thumbnail = asset.meta?.style_thumbnail
  return thumbnail && thumbnail.type !== 'INVALID' ? thumbnail : null
}

/**
 * Returns a new asset object with parsed meta.
 * @param asset - The asset to process.
 * @returns The new asset object.
 * (Original: $$f6)
 */
export function withParsedMeta(asset: any): any {
  return {
    ...asset,
    meta: parseMeta(asset.meta),
  }
}

/**
 * Parses meta if it's a string, otherwise returns as is.
 * @param meta - The meta to parse.
 * @returns The parsed meta object.
 * (Original: $$_9)
 */
export function parseMeta(meta: any): any {
  if (typeof meta === 'string') {
    try {
      return JSON.parse(meta)
    }
    catch {
      return {}
    }
  }
  return meta
}

/**
 * Checks if the style type is one of the supported types.
 * @param type - The style type.
 * @returns True if supported, false otherwise.
 * (Original: $$A0)
 */
export function isStyleType(type: string): boolean {
  return type === 'TEXT' || type === 'FILL' || type === 'EFFECT' || type === 'GRID'
}

/**
 * Checks if the style type is EFFECT or GRID.
 * @param type - The style type.
 * @returns True if EFFECT or GRID, false otherwise.
 * (Original: $$y10)
 */
export function isEffectOrGrid(type: string): boolean {
  return type === 'EFFECT' || type === 'GRID'
}

/**
 * Generates a style thumbnail object based on type and asset properties.
 * @param asset - The asset to process.
 * @param type - The style type.
 * @returns The style thumbnail object.
 * (Original: $$b1)
 */
export function createStyleThumbnail(asset: any, type: string): any {
  if (type === 'FILL' && asset.fillPaints) {
    return { type, fillPaints: asset.fillPaints }
  }
  if (type === 'EFFECT' && asset.effects) {
    return { type, effects: asset.effects }
  }
  if (type === 'GRID' && asset.layoutGrids) {
    return { type, layoutGrids: asset.layoutGrids }
  }
  if (type === 'TEXT' && (asset.fontSize || asset.lineHeight)) {
    return {
      type,
      metrics: {
        fontSize: asset.fontSize,
        lineHeight: asset.lineHeight,
      },
    }
  }
  return { type: 'INVALID' }
}

/**
 * Checks if the style thumbnail is a valid solid fill.
 * @param asset - The asset to check.
 * @returns True if valid, false otherwise.
 * (Original: $$v5)
 */
export function isValidSolidFill(asset: any): boolean {
  if (asset.meta && asset.meta.style_thumbnail && asset.meta.style_thumbnail.type === 'FILL') {
    const fills = asset.meta.style_thumbnail.fillPaints
    return fills.length === 1 && fills[0].type === 'SOLID'
  }
  return true
}

/**
 * Checks if the fill style is fully transparent.
 * @param asset - The asset to check.
 * @returns True if fully transparent, false otherwise.
 * (Original: $$I8)
 */
export function isFullyTransparentFill(asset: any): boolean {
  if (asset.style_type !== 'FILL')
    return false
  const thumbnail = asset.meta?.style_thumbnail
  if (!thumbnail || thumbnail.type !== 'FILL')
    return false
  for (const fill of thumbnail.fillPaints) {
    if (!fill.opacity || fill.opacity > 0)
      return false
  }
  return true
}

/**
 * Parses the assetId for thumbnail generation based on workflow type.
 * @param asset - The asset to process.
 * @returns The parsed nodeId or null.
 * (Original: E)
 */
export function parseNodeIdForThumbnail(asset: any): string | null {
  let nodeId: string | null = null
  switch (asset.type) {
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
      nodeId = ResponsiveSetIdHandler.toGuidStrIfLocal(asset.assetId)
      break
    case PrimaryWorkflowEnum.CODE_COMPONENT:
      nodeId = CodeComponentIdHandler.toGuidStrIfLocal(asset.assetId)
      break
  }
  if (!nodeId) {
    logError('thumbnails', 'Could not parse nodeId for thumbnail generation', {
      assetId: asset.assetId,
      type: asset.type,
    })
    return null
  }
  return nodeId
}

/**
 * Atom family for local asset thumbnail state.
 * (Original: x)
 */
export const localAssetThumbnailAtomFamily = createRemovableAtomFamily((asset: any) => {
  const nodeId = parseNodeIdForThumbnail(asset)
  assert(!!nodeId, 'A valid nodeId is required for local asset thumbnail atom')
  return setupRemovableAtomFamily(() => atom(null))
}, deepEqual)

/**
 * Atom family for managing thumbnail generation and caching.
 * (Original: S)
 */
export const thumbnailAtomFamily = createRemovableAtomFamily((asset: any) =>
  atom(
    get => get(localAssetThumbnailAtomFamily(asset)),
    (get, set, _update) => {
      const localAtom = localAssetThumbnailAtomFamily(asset)
      const localAsset = get(AssetAtomMap[asset.type].local)[asset.assetId]
      if (!localAsset) {
        logError('thumbnails', 'Could not find local asset for thumbnail generation', {
          assetId: asset.assetId,
          type: asset.type,
        })
        return null
      }
      const version = localAsset.version
      const cached: any = get(localAtom)
      if ((cached && version !== cached.version) || cached === null) {
        const nodeId = parseNodeIdForThumbnail(asset)
        if (!nodeId)
          return null
        set(localAtom, (() => {
          const thumbnail = generateThumbnail(nodeId)
          return {
            data: Buffer.from(thumbnail).toString('base64'),
            version,
          }
        })())
      }
    },
  ), deepEqual)

/**
 * Retrieves and resets the thumbnail atom value.
 * @param asset - The asset to process.
 * @returns The thumbnail atom value.
 * (Original: $$w3)
 */
export function getAndResetThumbnailAtom(asset: any): any {
  const [value, setter] = useAtomValueAndSetter(thumbnailAtomFamily(asset))
  setter(void 0)
  return value
}

/**
 * Converts a base64 string to a PNG data URL.
 * @param base64 - The base64 string.
 * @returns The PNG data URL.
 * (Original: $$C4)
 */
export function toPngDataUrl(base64: string): string {
  return `data:image/png;base64,${base64}`
}

// Exported aliases for refactored functions
export const Kb = isStyleType
export const No = createStyleThumbnail
export const QH = getStyleThumbnail
export const TJ = getAndResetThumbnailAtom
export const U8 = toPngDataUrl
export const XV = isValidSolidFill
export const aV = withParsedMeta
export const bi = isValidStyleType
export const fP = isFullyTransparentFill
export const iX = parseMeta
export const lP = isEffectOrGrid
export const lQ = generateThumbnail
