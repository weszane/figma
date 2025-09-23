import { permissionScopeHandler } from '../905/189185'
import { convertStringToFacetType } from '../905/497152'
import { teamLibraryCache } from '../figma_app/80990'
import { Confirmation, LibraryPubSub, SceneIdentifier } from '../figma_app/763686'

// Original function name: $$o0
// Original export name: e

/**
 * Processes a library asset by checking subscription status and upserting it if necessary.
 * @param assetInfo - The asset information object containing subscription details and metadata.
 * @returns The asset ID.
 * @throws Error if the asset insertion fails due to permission issues.
 */
export async function insertSharedLibraryAsset(assetInfo: {
  subscriptionStatus: string
  assetId: string
  canvasUrl: string
  type: string
  key: string
  version: string
  sourceLibraryKey: string
}): Promise<string> {
  // Early return if not a library subscription
  if (assetInfo.subscriptionStatus !== 'LIBRARY') {
    return assetInfo.assetId
  }

  // Retrieve the canvas from the team library cache
  const canvas = await teamLibraryCache.getCanvas({
    canvas_url: assetInfo.canvasUrl,
  })

  // Attempt to upsert the shared library asset with permission check
  const permissionResult = permissionScopeHandler.system(
    'upsert-shared-library-asset',
    () => LibraryPubSub.upsertSharedLibraryAsset(
      convertStringToFacetType(assetInfo.type),
      assetInfo.key,
      assetInfo.version,
      assetInfo.sourceLibraryKey,
      Confirmation.NO,
      canvas,
      SceneIdentifier.ACTIVE_SCENE,
    ),
  )

  if (!permissionResult.success) {
    throw new Error('An error occurred while inserting this asset.')
  }

  return assetInfo.assetId
}

// Original export: export const e = $$o0
export const e = insertSharedLibraryAsset
