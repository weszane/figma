import { pickBy } from 'lodash-es'
import { getLocalManagedStringAsset, getSubscribedManagedStringAsset } from '../905/70197'
import { getLocalCodeLibraryAsset, getSubscribedCodeLibraryAsset } from '../905/236003'
import { getLocalCodeFileAsset, getSubscribedCodeFileAsset } from '../905/387014'
import { getLocalCodeComponentAsset, getSubscribedCodeComponentAsset } from '../905/475511'
import { logError } from '../905/714362'
import { getTransformedLocalAsset, getTransformedSubscribedAsset } from '../905/722604'
import { atom, setupCustomAtom } from '../figma_app/27355'
import { fullscreenValue } from '../figma_app/455680'
import { setupRemovableAtomFamily } from '../figma_app/615482'
import { PrimaryWorkflowEnum } from '../figma_app/633080'
import { assetBindings, FacetType, LibraryType } from '../figma_app/763686'
/**
 * AssetMirrorManager - Refactored from class T
 * Manages synchronization and cache for asset mirrors.
 */
export let assetMirrorInstance: AssetMirrorManager | undefined

/**
 * AssetParserMap - Refactored from variable f
 * Maps FacetType and LibraryType to asset parser functions.
 */
export const AssetParserMap = {
  [FacetType.RESPONSIVE_SET]: {
    [LibraryType.LOCAL]: getTransformedLocalAsset,
    [LibraryType.SUBSCRIBED]: getTransformedSubscribedAsset,
  },
  [FacetType.CODE_LIBRARY]: {
    [LibraryType.LOCAL]: getLocalCodeLibraryAsset,
    [LibraryType.SUBSCRIBED]: getSubscribedCodeLibraryAsset,
  },
  [FacetType.CODE_FILE]: {
    [LibraryType.LOCAL]: getLocalCodeFileAsset,
    [LibraryType.SUBSCRIBED]: getSubscribedCodeFileAsset,
  },
  [FacetType.CODE_COMPONENT]: {
    [LibraryType.LOCAL]: getLocalCodeComponentAsset,
    [LibraryType.SUBSCRIBED]: getSubscribedCodeComponentAsset,
  },
  [FacetType.MANAGED_STRING]: {
    [LibraryType.LOCAL]: getLocalManagedStringAsset,
    [LibraryType.SUBSCRIBED]: getSubscribedManagedStringAsset,
  },
}

/**
 * AssetAtomHandlers - Refactored from variable b
 * Stores handlers for asset atom updates.
 */
export const AssetAtomHandlers = {
  [FacetType.RESPONSIVE_SET]: {
    [LibraryType.LOCAL]: null,
    [LibraryType.SUBSCRIBED]: null,
  },
  [FacetType.CODE_LIBRARY]: {
    [LibraryType.LOCAL]: null,
    [LibraryType.SUBSCRIBED]: null,
  },
  [FacetType.CODE_FILE]: {
    [LibraryType.LOCAL]: null,
    [LibraryType.SUBSCRIBED]: null,
  },
  [FacetType.CODE_COMPONENT]: {
    [LibraryType.LOCAL]: null,
    [LibraryType.SUBSCRIBED]: null,
  },
  [FacetType.MANAGED_STRING]: {
    [LibraryType.LOCAL]: null,
    [LibraryType.SUBSCRIBED]: null,
  },
}

/**
 * Creates an asset atom for a given FacetType and LibraryType.
 * Refactored from function y.
 */
function createAssetAtom(facet: FacetType, library: LibraryType) {
  const parser = AssetParserMap[facet][library]
  const removableAtomFamily = setupRemovableAtomFamily(() => atom({}))

  /**
   * Handles asset atom state updates.
   */
  const assetAtom = setupCustomAtom(removableAtomFamily, (state, action) => {
    if ('changed' in action) {
      const changedAssets = action.changed
      return {
        ...state,
        ...changedAssets.reduce((acc, asset) => {
          acc[asset.assetId] = asset
          return acc
        }, {} as Record<string, any>),
      }
    }
    if ('removed' in action) {
      const removedSet = new Set(action.removed)
      return pickBy(state, asset => asset && !removedSet.has(asset.assetId))
    }
    return 'reset' in action ? {} : state
  })

  assetAtom.debugLabel = `assetByKeyAtom(${FacetType[facet]}, ${LibraryType[library]})`

  assetAtom.onMount = (update) => {
    const syncAssets = () => {
      update({
        changed: assetBindings.getAllAssets(facet, library).map(parser).filter(asset => asset !== null),
      })
    }
    if (fullscreenValue.isReady()) {
      syncAssets()
    }
    else {
      fullscreenValue.onReady().then(syncAssets)
    }
    const handler = (payload: any) => update(payload)
    AssetAtomHandlers[facet][library] = handler
    const cleanup = () => {
      AssetAtomHandlers[facet][library] = null
    }
    return () => {
      cleanup()
      update({ reset: true })
    }
  }

  return assetAtom
}

/**
 * AssetAtomMap - Refactored from variable $$E0
 * Maps PrimaryWorkflowEnum to local/subscribed asset atoms.
 */
export const AssetAtomMap = {
  [PrimaryWorkflowEnum.RESPONSIVE_SET]: {
    local: createAssetAtom(FacetType.RESPONSIVE_SET, LibraryType.LOCAL),
    subscribed: createAssetAtom(FacetType.RESPONSIVE_SET, LibraryType.SUBSCRIBED),
  },
  [PrimaryWorkflowEnum.CODE_LIBRARY]: {
    local: createAssetAtom(FacetType.CODE_LIBRARY, LibraryType.LOCAL),
    subscribed: createAssetAtom(FacetType.CODE_LIBRARY, LibraryType.SUBSCRIBED),
  },
  [PrimaryWorkflowEnum.CODE_FILE]: {
    local: createAssetAtom(FacetType.CODE_FILE, LibraryType.LOCAL),
    subscribed: createAssetAtom(FacetType.CODE_FILE, LibraryType.SUBSCRIBED),
  },
  [PrimaryWorkflowEnum.CODE_COMPONENT]: {
    local: createAssetAtom(FacetType.CODE_COMPONENT, LibraryType.LOCAL),
    subscribed: createAssetAtom(FacetType.CODE_COMPONENT, LibraryType.SUBSCRIBED),
  },
  [PrimaryWorkflowEnum.MANAGED_STRING]: {
    local: createAssetAtom(FacetType.MANAGED_STRING, LibraryType.LOCAL),
    subscribed: createAssetAtom(FacetType.MANAGED_STRING, LibraryType.SUBSCRIBED),
  },
}

/**
 * AssetMirrorManager - Refactored from class T
 * Provides methods to sync and reset asset mirror cache.
 */
class AssetMirrorManager {
  /**
   * Synchronizes added or changed assets.
   * @param facet FacetType
   * @param library LibraryType
   * @param assets Array of assets
   */
  syncAddedOrChangedAssets(facet: FacetType, library: LibraryType, assets: any[]) {
    const parser = AssetParserMap[facet]?.[library]
    if (!parser) {
      logError('design-systems', `No parser found for ${facet} and ${library}`)
      return
    }
    AssetAtomHandlers[facet]?.[library]?.({
      changed: assets.map(parser).filter(asset => asset !== null),
    })
  }

  /**
   * Synchronizes removed assets.
   * @param facet FacetType
   * @param library LibraryType
   * @param assetIds Array of asset IDs
   */
  syncRemovedAssets(facet: FacetType, library: LibraryType, assetIds: string[]) {
    AssetAtomHandlers[facet]?.[library]?.({
      removed: assetIds,
    })
  }

  /**
   * Resets the asset mirror cache.
   */
  resetMirrorCache() {
    for (const handlerGroup of Object.values(AssetAtomHandlers)) {
      for (const handler of Object.values(handlerGroup)) {
        handler?.({ reset: true })
      }
    }
  }
}

/**
 * Initializes the asset mirror manager singleton.
 * Refactored from function $$I1.
 */
export function initializeAssetMirrorManager() {
  assetMirrorInstance = new AssetMirrorManager()
}

// Exported names refactored for clarity and traceability
export const Mk = AssetAtomMap // $$E0
export const WY = initializeAssetMirrorManager // $$I1
export const ki = assetMirrorInstance // $$n2
