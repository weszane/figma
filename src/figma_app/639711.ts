import { useAtomWithSubscription } from '../figma_app/27355'
import { isFullscreenAndInFocusedNodeView } from '../figma_app/327588'
import { createTrackedAtom } from '../figma_app/615482'
import { useIsSelectedViewFullscreenCooper } from '../figma_app/828186'

/**
 * Enum representing asset categories.
 * Original variable: $$o2
 */
export enum AssetCategoryEnum {
  ASSETS = 'ASSETS',
  TEMPLATES = 'TEMPLATES',
  TEXT = 'TEXT',
  MEDIA = 'MEDIA',
  SHAPES = 'SHAPES',
  INSERTS = 'INSERTS',
  FIELDS = 'FIELDS',
  BULK_CREATE = 'BULK_CREATE',
  FIND = 'FIND',
  PLUGINS = 'PLUGINS',
}

/**
 * Tracked atom for asset category.
 * Original variable: $$l0
 */
export const assetCategoryAtom = createTrackedAtom(AssetCategoryEnum.ASSETS)

/**
 * Determines if the selected view is fullscreen or in focused node view,
 * or if the current atom value is not 'ASSETS'.
 * Original function: $$d1
 * @returns {boolean}
 */
export function isAssetViewActive(): boolean {
  const isFullscreen = useIsSelectedViewFullscreenCooper()
  const isFocusedNodeView = isFullscreenAndInFocusedNodeView()
  const atomValue = useAtomWithSubscription(assetCategoryAtom)
  return !!isFullscreen && (!!isFocusedNodeView || atomValue !== AssetCategoryEnum.ASSETS)
}

// Exported aliases for backward compatibility
export const Lk = assetCategoryAtom // Original: Lk
export const gN = isAssetViewActive // Original: gN
export const x = AssetCategoryEnum // Original: x
