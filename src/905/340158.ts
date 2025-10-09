import { keyBy } from "lodash-es"
import { deepEqual } from "../905/382883"
import { propertyMappers } from "../905/395857"
import { FileKeySourceEnum } from "../905/412913"
import { PrimaryWorkflowEnum as _$$PW } from "../905/497152"
import { isShareableAssetType } from "../905/566074"
import { logError } from "../905/714362"
import { createErrorState, createLoadedState, createLoadingState } from "../905/723791"
import { atom, createRemovableAtomFamily } from "../figma_app/27355"
import { AssetAtomMap } from "../figma_app/31188"
import { CodeComponentsInLibrary, LibraryAssetDataOfType } from "../figma_app/43951"
import { isNotNullish } from "../figma_app/95419"
import { conditionalFeatureFlag } from "../figma_app/169182"
import { FComponentType } from "../figma_app/191312"
import { openFileKeyAtom, openFileLibraryKeyAtom } from "../figma_app/516028"
import { PrimaryWorkflowEnum as _$$PW2, LibrarySourceEnum, StagingStatusEnum } from "../figma_app/633080"
import { areFramesEqual } from "../figma_app/646357"
import { libraryPublishingModeAtom, publishedHubFileIdAtom, publishedHubFileLibraryKeyAtom } from "../figma_app/825489"
// Renamed variables, added types, simplified logic, improved readability
// Origin: $$L0 (exported as t)

interface LibraryAssetQueryParams {
  libraryKey: string
  assetType: _$$PW
  livegraphAssetToLibraryAsset: (libraryKey: string, asset: any) => any
}

interface PublishStatusData {
  libraryStatus: StagingStatusEnum
  error: any
  libraryAsset: any
}

interface AssetPublishData {
  type?: _$$PW
  status: StagingStatusEnum
  file_key_source: FileKeySourceEnum
  file_key: string
  library_key: string
  userFacingVersion?: string
  version?: string
  name?: string
  subscriptionStatus?: string
  isPublishable?: boolean
  keyForPublish?: string
  node_id?: string
}

function createLibraryAssetQuery({
  libraryKey,
  assetType,
}: {
  libraryKey: string
  assetType: _$$PW
}) {
  const mapper = propertyMappers[assetType]
  return createLibraryAssetAtomFamily({
    libraryKey,
    assetType,
    livegraphAssetToLibraryAsset: mapper,
  })
}

const localLibraryAssetAtoms = {
  [_$$PW.RESPONSIVE_SET]: createLocalLibraryAssetAtom(_$$PW.RESPONSIVE_SET),
  [_$$PW.CODE_COMPONENT]: createLocalLibraryAssetAtom(_$$PW.CODE_COMPONENT),
}

const publishedHubFileAssetAtoms = {
  [_$$PW.RESPONSIVE_SET]: createPublishedHubFileAssetAtom(_$$PW.RESPONSIVE_SET),
  [_$$PW.CODE_COMPONENT]: createPublishedHubFileAssetAtom(_$$PW.CODE_COMPONENT),
}

function createLocalLibraryAssetAtom(assetType: _$$PW) {
  return atom((get) => {
    const libraryKey = get(openFileLibraryKeyAtom)
    return libraryKey
      ? get(createLibraryAssetQuery({
          libraryKey,
          assetType,
        }))
      : createLoadingState()
  })
}

function createPublishedHubFileAssetAtom(assetType: _$$PW) {
  return atom((get) => {
    const libraryKey = get(publishedHubFileLibraryKeyAtom)
    return libraryKey
      ? get(createLibraryAssetQuery({
          libraryKey,
          assetType,
        }))
      : createLoadingState()
  })
}

const createLibraryAssetAtomFamily = createRemovableAtomFamily(({
  libraryKey,
  assetType,
  livegraphAssetToLibraryAsset,
}: LibraryAssetQueryParams) => atom((get) => {
  if (!get(openFileLibraryKeyAtom))
    return createLoadingState()

  const getQueryFunction = (assetType: _$$PW) => {
    const componentType = (function (assetType: _$$PW) {
      switch (assetType) {
        case _$$PW.CODE_COMPONENT:
          return FComponentType.CODE_COMPONENT
        case _$$PW.RESPONSIVE_SET:
          return FComponentType.RESPONSIVE_SET
        default:
          return null
      }
    })(assetType)

    switch (componentType) {
      case FComponentType.CODE_COMPONENT:
        return (libraryKey: string) => CodeComponentsInLibrary.Query({
          libraryKey,
        })
      case FComponentType.RESPONSIVE_SET:
        return (libraryKey: string) => LibraryAssetDataOfType.Query({
          libraryKey,
          assetType: FComponentType.RESPONSIVE_SET,
        })
      default:
        return null
    }
  }

  const queryFunction = getQueryFunction(assetType)

  if (!queryFunction) {
    logError("design-systems", "unsupported asset type for library asset query", {
      assetType,
    }, {
      reportAsSentryError: true,
    })
    return createLoadedState({})
  }

  const queryResult = get(queryFunction(libraryKey))

  switch (queryResult.status) {
    case "loading":
      return createLoadingState()
    case "errors":
      return createErrorState(queryResult.errors)
  }

  const file = queryResult.data.libraryKeyToFile?.file
  const hubFile = queryResult.data.libraryKeyToFile?.hubFile ?? file

  if (!hubFile) {
    logError("design-systems", "unexpected null file data", {
      libraryKey,
    })
    return createLoadedState({})
  }

  const assets: Record<string, any> = {}
  for (const libraryAsset of hubFile.libraryAssets) {
    const mappedAsset = livegraphAssetToLibraryAsset(libraryKey, libraryAsset)
    if (mappedAsset) {
      assets[mappedAsset.key] = mappedAsset
    }
  }

  return createLoadedState(assets)
}), deepEqual)

const localPublishStatusAtoms = {
  [_$$PW.RESPONSIVE_SET]: createPublishStatusAtom(
    AssetAtomMap[_$$PW.RESPONSIVE_SET].local,
    localLibraryAssetAtoms[_$$PW.RESPONSIVE_SET],
  ),
  [_$$PW.CODE_COMPONENT]: createPublishStatusAtom(
    AssetAtomMap[_$$PW.CODE_COMPONENT].local,
    localLibraryAssetAtoms[_$$PW.CODE_COMPONENT],
  ),
}

const hubFilePublishStatusAtoms = {
  [_$$PW.RESPONSIVE_SET]: createPublishStatusAtom(
    AssetAtomMap[_$$PW.RESPONSIVE_SET].local,
    publishedHubFileAssetAtoms[_$$PW.RESPONSIVE_SET],
  ),
  [_$$PW.CODE_COMPONENT]: createPublishStatusAtom(
    AssetAtomMap[_$$PW.CODE_COMPONENT].local,
    publishedHubFileAssetAtoms[_$$PW.CODE_COMPONENT],
  ),
}

function createPublishStatusAtom(
  localAssetAtom: any,
  libraryAssetAtom: any,
  getStatusFunction = determineStagingStatus,
  errorAtomFactory: ((assetId: string) => any) | null = null,
) {
  return atom((get) => {
    const libraryAssets = get(libraryAssetAtom) as any

    if (libraryAssets.status !== "loaded") {
      return libraryAssets
    }

    const libraryAssetsByKey = keyBy(
      Object.values(libraryAssets.data).filter(isNotNullish),
      "sourceAssetId",
    )

    const localAssets = get(localAssetAtom)
    const localAssetIds = new Set(Object.values(localAssets).map(asset => asset.assetId))

    const result: Record<string, PublishStatusData> = {}
    const unmatchedAssets = new Set<[string, string]>() // [assetId, key]

    // Find unmatched library assets
    for (const libraryAsset of Object.values<any>(libraryAssets.data)) {
      const assetId = libraryAsset.sourceAssetId
      if (!localAssetIds.has(assetId)) {
        unmatchedAssets.add([assetId, libraryAsset.key])
      }
    }

    // Process local assets
    for (const localAsset of Object.values(localAssets)) {
      const assetId = localAsset.assetId
      const errorAtom = errorAtomFactory?.(assetId) ?? atom(null)
      const error = get(errorAtom)
      const libraryAsset = libraryAssetsByKey[assetId] ?? null
      const status = getStatusFunction(localAsset, libraryAsset)

      result[assetId] = {
        libraryStatus: status,
        error,
        libraryAsset,
      }
    }

    // Process unmatched library assets
    for (const [assetId, key] of unmatchedAssets) {
      result[assetId] = {
        libraryStatus: getStatusFunction(null, libraryAssets.data[key] ?? null),
        error: null,
        libraryAsset: libraryAssets.data[key] ?? null,
      }
    }

    return createLoadedState(result)
  })
}

function areAssetsDifferent(localAsset: any, libraryAsset: any): boolean {
  return conditionalFeatureFlag(
    "ds_user_facing_version_publishing",
    localAsset.userFacingVersion !== libraryAsset.userFacingVersion,
    localAsset.version !== libraryAsset.version,
  ) || areFramesEqual(localAsset.containingFrame, libraryAsset.containingFrame)
}

function determineStagingStatus(
  localAsset: any,
  libraryAsset: any,
  compareFunction = areAssetsDifferent,
): StagingStatusEnum {
  if (localAsset && localAsset.isPublishable && !localAsset.isSoftDeleted) {
    if (libraryAsset) {
      return compareFunction(localAsset, libraryAsset)
        ? StagingStatusEnum.CHANGED
        : StagingStatusEnum.CURRENT
    }
    return StagingStatusEnum.NEW
  }

  return libraryAsset
    ? StagingStatusEnum.DELETED
    : StagingStatusEnum.NOT_STAGED
}

const SUPPORTED_ASSET_TYPES = [_$$PW2.RESPONSIVE_SET, _$$PW2.CODE_COMPONENT]

export const libraryAssetsAtom = atom((get) => {
  const publishingMode = get(libraryPublishingModeAtom)
  const isHubFileMode = publishingMode === LibrarySourceEnum.HUBFILE

  const {
    libraryAssetAtoms,
    publishStatusAtoms,
    libraryKey,
    fileKey,
  } = isHubFileMode
    ? {
        libraryAssetAtoms: publishedHubFileAssetAtoms,
        publishStatusAtoms: hubFilePublishStatusAtoms,
        libraryKey: get(publishedHubFileLibraryKeyAtom),
        fileKey: get(publishedHubFileIdAtom),
      }
    : {
        libraryAssetAtoms: localLibraryAssetAtoms,
        publishStatusAtoms: localPublishStatusAtoms,
        libraryKey: get(openFileLibraryKeyAtom),
        fileKey: get(openFileKeyAtom),
      }

  const result: Record<string, AssetPublishData> = {}

  for (const assetType of SUPPORTED_ASSET_TYPES) {
    if (!isShareableAssetType(assetType)) {
      continue
    }

    const localAssets = get(AssetAtomMap[assetType].local) as any
    const libraryAssets = get(libraryAssetAtoms[assetType]) as any
    const publishStatus = get(publishStatusAtoms[assetType]) as any

    // Handle loading/error states
    switch (publishStatus.status) {
      case "loading":
        return createLoadingState()
      case "errors":
        return createErrorState(publishStatus.errors)
      case "disabled":
        return createLoadedState({})
    }

    switch (libraryAssets.status) {
      case "loading":
        return createLoadingState()
      case "errors":
        return createErrorState(libraryAssets.errors)
      case "disabled":
        return createLoadedState({})
    }

    // Process each asset
    for (const [assetId, statusData] of Object.entries<PublishStatusData>(publishStatus.data)) {
      if (!statusData) {
        continue
      }

      const localAsset = localAssets[assetId]
      const libraryAsset = statusData.libraryAsset

      if (localAsset) {
        result[assetId] = {
          ...localAsset,
          status: statusData.libraryStatus,
          userFacingVersion: localAsset.version,
          node_id: localAsset.localGuid,
          file_key_source: FileKeySourceEnum.LOCAL_FILE,
          file_key: fileKey ?? "",
          library_key: libraryKey ?? "",
        }
      }
      else {
        result[assetId] = {
          type: assetType,
          status: statusData.libraryStatus,
          file_key_source: FileKeySourceEnum.LOCAL_FILE,
          file_key: fileKey ?? "",
          library_key: libraryKey ?? "",
          userFacingVersion: libraryAsset?.version ?? "",
          version: libraryAsset?.version ?? "",
          name: libraryAsset?.name ?? "",
          subscriptionStatus: "LOCAL",
          isPublishable: false,
          keyForPublish: libraryAsset?.key ?? "",
          node_id: libraryAsset?.sourceAssetGuid ?? "",
        }
      }
    }
  }

  return createLoadedState(result)
})

export const t = libraryAssetsAtom
