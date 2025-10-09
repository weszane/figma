import { isShareableAssetType } from "../905/566074"
import { getFeatureFlags } from "../905/601108"
import { hasTeamPaidAccess } from "../figma_app/345997"
import { throwError } from "../figma_app/465776"
import { PrimaryWorkflowEnum, PublishStatusEnum, StagingStatusEnum } from "../figma_app/633080"
import { hasAssetError, isActiveStagingStatus, isNewOrChangedOrDeleted, mapAssetsToKeys } from "../figma_app/646357"
import { Fullscreen } from "../figma_app/763686"

// Origin: 576221.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability, and noted assumed dependencies.

// Assumed external dependencies (from imports):
// - isShareableAssetType
// - getFeatureFlags
// - hasTeamPaidAccess
// - throwError
// - PrimaryWorkflowEnum, PublishStatusEnum, StagingStatusEnum
// - hasAssetError, isActiveStagingStatus, isNewOrChangedOrDeleted, mapAssetsToKeys
// - Fullscreen

// Type definitions inferred from usage
export interface Asset {
  node_id: string
  type: PrimaryWorkflowEnum
  status: StagingStatusEnum
  component_key?: string
  key?: string
  variableSetId?: string
  deletedFromSceneGraph?: boolean
  containing_frame?: {
    containingStateGroup?: {
      nodeId?: string
    }
  }
}

interface PendingLibraryUpdatesOptions {
  itemsToPublish?: Set<string>
  overridePublishPermissions?: boolean
  unpublishAll?: boolean
  moveRemappings?: Record<string, unknown>
  forcePublish?: boolean
}

interface TeamAccessMap {
  [teamId: string]: any
}

interface _PendingLibraryUpdatesParams {
  assets: Record<string, Asset>
  publishedAssets: Record<string, Asset>
  stagedAssets: Record<string, Asset>
  responsiveAssets: Record<string, Asset>
  moduleAssets: Record<string, Asset>
  variableAssets: Record<string, Asset>
  variableSetAssets: Record<string, Asset>
  managedStringAssets: Record<string, Asset>
  teamInfo: { team_id?: string } | null
  teamAccessMap: TeamAccessMap
  options?: PendingLibraryUpdatesOptions
}

// Helper to check if asset is in itemsToPublish set
function isAssetInPublishSet(asset: Asset, itemsToPublish?: Set<string>): boolean {
  return itemsToPublish?.has(asset.node_id) ?? false
}

// Main class for managing library updates
class LibraryUpdateManager {
  shouldReturnEarlyOnUpdate: boolean

  constructor(options?: { shouldReturnEarlyOnUpdate?: boolean }) {
    this.shouldReturnEarlyOnUpdate = !!options?.shouldReturnEarlyOnUpdate
  }

  // Adds an asset to the correct workflow/status bucket
  addItem(asset: Asset, updates: LibraryUpdates, status: PublishStatusEnum): boolean {
    if (updates[asset.type] && updates[asset.type][status]) {
      updates[asset.type][status].push(asset)
      return this.shouldReturnEarlyOnUpdate
    }
    throwError(`Unexpected library item type: ${asset.type}`)
    return false
  }

  publishItem(asset: Asset, updates: LibraryUpdates): boolean {
    return this.addItem(asset, updates, PublishStatusEnum.PUBLISH)
  }

  unpublishItem(asset: Asset, updates: LibraryUpdates): boolean {
    return this.addItem(asset, updates, PublishStatusEnum.UNPUBLISH)
  }

  // Main logic for determining pending library updates
  getPendingLibraryUpdates(
    assets: Record<string, Asset>,
    publishedAssets: Record<string, Asset>,
    stagedAssets: Record<string, Asset>,
    responsiveAssets: Record<string, Asset>,
    moduleAssets: Record<string, Asset>,
    variableAssets: Record<string, Asset>,
    variableSetAssets: Record<string, Asset>,
    managedStringAssets: Record<string, Asset>,
    teamInfo: { team_id?: string } | null,
    teamAccessMap: TeamAccessMap,
    options?: PendingLibraryUpdatesOptions,
  ): LibraryUpdates {
    // Initialize update buckets for each workflow/status
    const updates = {
      [PrimaryWorkflowEnum.STATE_GROUP]: {
        [PublishStatusEnum.PUBLISH]: [],
        [PublishStatusEnum.UNPUBLISH]: [],
      },
      [PrimaryWorkflowEnum.COMPONENT]: {
        [PublishStatusEnum.PUBLISH]: [],
        [PublishStatusEnum.UNPUBLISH]: [],
      },
      [PrimaryWorkflowEnum.STYLE]: {
        [PublishStatusEnum.PUBLISH]: [],
        [PublishStatusEnum.UNPUBLISH]: [],
      },
      [PrimaryWorkflowEnum.VARIABLE]: {
        [PublishStatusEnum.PUBLISH]: [],
        [PublishStatusEnum.UNPUBLISH]: [],
      },
      [PrimaryWorkflowEnum.VARIABLE_SET]: {
        [PublishStatusEnum.PUBLISH]: [],
        [PublishStatusEnum.UNPUBLISH]: [],
      },
      [PrimaryWorkflowEnum.MODULE]: {
        [PublishStatusEnum.PUBLISH]: [],
        [PublishStatusEnum.UNPUBLISH]: [],
      },
      [PrimaryWorkflowEnum.RESPONSIVE_SET]: {
        [PublishStatusEnum.PUBLISH]: [],
        [PublishStatusEnum.UNPUBLISH]: [],
      },
      [PrimaryWorkflowEnum.CODE_COMPONENT]: {
        [PublishStatusEnum.PUBLISH]: [],
        [PublishStatusEnum.UNPUBLISH]: [],
      },
      [PrimaryWorkflowEnum.MANAGED_STRING]: {
        [PublishStatusEnum.PUBLISH]: [],
        [PublishStatusEnum.UNPUBLISH]: [],
      },
    } as LibraryUpdates

    if (!teamInfo)
      return updates

    // Helper to filter shareable assets in a record
    const filterShareableAssets = (assetRecord: Record<string, Asset>): Asset[] =>
      Object.values(assetRecord).filter(
        asset => isShareableAssetType(asset.type) && isAssetInPublishSet(asset, options?.itemsToPublish),
      )

    // Determine if team has paid access or override
    const hasPublishPermission
      = options?.overridePublishPermissions
        || hasTeamPaidAccess(teamInfo.team_id ? teamAccessMap[teamInfo.team_id] : null)

    // Collect asset lists for each workflow
    const publishableAssets = filterShareableAssets(hasPublishPermission ? publishedAssets : {})
    const publishableCurrentAssets = filterShareableAssets(hasPublishPermission ? assets : {})
    const stagedShareableAssets = filterShareableAssets(stagedAssets)
    const responsiveShareableAssets = filterShareableAssets(responsiveAssets)
    const moduleShareableAssets = getFeatureFlags().dse_module_publish
      ? filterShareableAssets(moduleAssets)
      : []
    const managedStringShareableAssets = filterShareableAssets(managedStringAssets)

    // Handle unpublishAll option
    if (options?.unpublishAll) {
      for (const asset of [
        ...publishableAssets,
        ...publishableCurrentAssets,
        ...stagedShareableAssets,
        ...responsiveShareableAssets,
        ...moduleShareableAssets,
        ...managedStringShareableAssets,
      ]) {
        if (
          asset.status === StagingStatusEnum.NOT_STAGED
          || asset.status === StagingStatusEnum.NEW
          || (asset.type === PrimaryWorkflowEnum.COMPONENT
            && asset.containing_frame?.containingStateGroup?.nodeId)
        ) {
          this.unpublishItem(asset, updates)
        }
      }
      return updates
    }

    // Move remappings and force publish logic
    const moveRemappingsSet = new Set(Object.keys(options?.moveRemappings || {}))

    // Helper for move logic (see below)
    // function shouldSkipAsset(asset: Asset, moveSet: Set<string>, forcePublish?: boolean): boolean {
    //   return (
    //     !forcePublish &&
    //     asset.status === StagingStatusEnum.CURRENT &&
    //     !moveSet.has(asset.node_id) &&
    //     (Fullscreen.clearLibraryMoveInfo(asset.node_id), true)
    //   );
    // }

    // Process staged assets
    for (const asset of stagedShareableAssets) {
      if (shouldSkipAsset(asset, moveRemappingsSet, options?.forcePublish))
        continue
      if (asset.status === StagingStatusEnum.DELETED) {
        if (this.unpublishItem(asset, updates))
          return updates
      }
      else if (isNewOrChangedOrDeleted(asset.status) && this.publishItem(asset, updates)) {
        return updates
      }
    }

    // Group published assets by containing state group nodeId
    const publishedByStateGroup = groupAssetsByStateGroup(Object.values(publishedAssets))

    // Group variable assets by variableSetId
    const variableAssetsBySet = groupByVariableSetId(Object.values(variableAssets))

    // Process current publishable assets
    for (const asset of publishableCurrentAssets) {
      if (shouldSkipAsset(asset, moveRemappingsSet, options?.forcePublish))
        continue
      const assetStatus = asset.status
      const assetNodeId = asset.node_id
      const relatedAssets = publishedByStateGroup.get(assetNodeId) ?? []

      if (!isActiveStagingStatus(assetStatus)) {
        if (assetStatus === StagingStatusEnum.DELETED && this.unpublishItem(asset, updates)) {
          return updates
        }
        for (const related of relatedAssets) {
          const shouldUnpublish
            = related.component_key
              && related.status !== StagingStatusEnum.NOT_STAGED
              && related.status !== StagingStatusEnum.NEW
          if (shouldUnpublish && this.unpublishItem(related, updates)) {
            return updates
          }
        }
        continue
      }

      if (hasAssetError(asset))
        continue

      const relatedNodeIds = new Set(relatedAssets.map(a => a.node_id))
      for (const related of relatedAssets) {
        if (
          !shouldSkipAsset(related, moveRemappingsSet, options?.forcePublish)
          && relatedNodeIds.has(related.node_id)
          && this.publishItem(related, updates)
        ) {
          return updates
        }
      }
      if (this.publishItem(asset, updates))
        return updates
    }

    // Process publishable assets
    for (const asset of publishableAssets) {
      if (
        asset.status !== StagingStatusEnum.NOT_STAGED
        && !shouldSkipAsset(asset, moveRemappingsSet, options?.forcePublish)
        && !asset.containing_frame?.containingStateGroup?.nodeId
      ) {
        if (asset.component_key && asset.status === StagingStatusEnum.DELETED) {
          if (this.unpublishItem(asset, updates))
            return updates
          continue
        }
        if (this.publishItem(asset, updates))
          return updates
      }
    }

    // Track published/unpublished component keys
    // const publishedComponentKeys = new Set(
    //   mapAssetsToKeys(updates[PrimaryWorkflowEnum.COMPONENT][PublishStatusEnum.PUBLISH]).filter(Boolean),
    // )
    // const unpublishedComponentKeys = new Set(
    //   mapAssetsToKeys(updates[PrimaryWorkflowEnum.COMPONENT][PublishStatusEnum.UNPUBLISH]).filter(Boolean),
    // )

    // Placeholder for additional logic (original code had an empty array)
    // for (const asset of []) {
    //   if (
    //     !publishedComponentKeys.has(asset.component_key) &&
    //     !unpublishedComponentKeys.has(asset.component_key) &&
    //     this.unpublishItem(publishedAssets[asset.node_id], updates)
    //   ) {
    //     return updates;
    //   }
    // }

    // Process responsive assets
    for (const asset of responsiveShareableAssets) {
      if (asset.status !== StagingStatusEnum.NOT_STAGED) {
        if (asset.key && asset.status === StagingStatusEnum.DELETED) {
          if (this.unpublishItem(asset, updates))
            return updates
          continue
        }
        for (const related of variableAssetsBySet[asset.node_id] ?? []) {
          if (
            related.status !== StagingStatusEnum.NOT_STAGED
            && related.status !== StagingStatusEnum.CURRENT
          ) {
            if (related.key && related.status === StagingStatusEnum.DELETED) {
              if (this.unpublishItem(related, updates))
                return updates
              continue
            }
            if (this.publishItem(related, updates))
              return updates
          }
        }
        if (this.publishItem(asset, updates))
          return updates
      }
    }

    // Process module assets
    for (const asset of moduleShareableAssets) {
      if (asset.key && asset.status === StagingStatusEnum.DELETED) {
        if (this.unpublishItem(asset, updates))
          return updates
        continue
      }
      if (this.publishItem(asset, updates))
        return updates
    }

    // Process managed string assets
    for (const asset of managedStringShareableAssets) {
      if (isShareableAssetType(asset.type)) {
        if (asset.status === StagingStatusEnum.DELETED) {
          if (this.unpublishItem(asset, updates))
            break
        }
        else if (isNewOrChangedOrDeleted(asset.status) && this.publishItem(asset, updates)) {
          break
        }
      }
    }

    return updates 
  }
}

// Helper types for update buckets
type LibraryUpdates = {
  [workflow in PrimaryWorkflowEnum]: {
    [status in PublishStatusEnum]: Asset[];
  };
}

// Helper: group assets by containing state group nodeId
function groupAssetsByStateGroup(assets: Asset[]): Map<string, Asset[]> {
  const map = new Map<string, Asset[]>()
  for (const asset of assets) {
    if (asset.deletedFromSceneGraph)
      continue
    const nodeId = asset.containing_frame?.containingStateGroup?.nodeId
    if (!nodeId)
      continue
    if (!map.has(nodeId))
      map.set(nodeId, [])
    map.get(nodeId)!.push(asset)
  }
  return map
}

// Helper: group assets by variableSetId
function groupByVariableSetId(assets: Asset[]): Record<string, Asset[]> {
  const grouped: Record<string, Asset[]> = {}
  for (const asset of assets) {
    if (!asset.variableSetId)
      continue
    if (!grouped[asset.variableSetId])
      grouped[asset.variableSetId] = []
    grouped[asset.variableSetId].push(asset)
  }
  return grouped
}

// Refactored export function for pending library updates
export function getPendingLibraryUpdates(
  assets: Record<string, Asset>,
  publishedAssets: Record<string, Asset>,
  stagedAssets: Record<string, Asset>,
  responsiveAssets: Record<string, Asset>,
  moduleAssets: Record<string, Asset>,
  variableAssets: Record<string, Asset>,
  variableSetAssets: Record<string, Asset>,
  managedStringAssets: Record<string, Asset>,
  teamInfo: { team_id?: string } | null,
  teamAccessMap: TeamAccessMap,
  options?: PendingLibraryUpdatesOptions,
): LibraryUpdates {
  return new LibraryUpdateManager().getPendingLibraryUpdates(
    assets,
    publishedAssets,
    stagedAssets,
    responsiveAssets,
    moduleAssets,
    variableAssets,
    variableSetAssets,
    managedStringAssets,
    teamInfo,
    teamAccessMap,
    options,
  )
}

// Helper for move logic (used in LibraryUpdateManager)
function shouldSkipAsset(
  asset: Asset,
  moveSet: Set<string>,
  forcePublish?: boolean,
): boolean {
  return (
    !forcePublish
    && asset.status === StagingStatusEnum.CURRENT
    && !moveSet.has(asset.node_id)
    && (Fullscreen.clearLibraryMoveInfo(asset.node_id), true)
  )
}

// Utility: checks if all assets are not in CURRENT/CHANGED/NEW status
export function areAllAssetsNotCurrentOrChangedOrNew(assets: Asset[]): boolean {
  return !assets.some(asset =>
    [
      StagingStatusEnum.CURRENT,
      StagingStatusEnum.CHANGED,
      StagingStatusEnum.NEW,
    ].includes(asset.status),
  )
}

// Utility: checks if all assets in a record are not active staging status
export function areAllAssetsInactive(
  assetRecord: Record<string, Asset>,
  itemsToPublish?: Set<string>,
): boolean {
  return Object.values(assetRecord)
    .filter(asset => isAssetInPublishSet(asset, itemsToPublish))
    .every(asset => !isActiveStagingStatus(asset.status))
}

// Export aliases (keep original code names)
export const Ol = areAllAssetsNotCurrentOrChangedOrNew
export const aB = areAllAssetsInactive
export const jx = getPendingLibraryUpdates
