import { PROCESS_IDENTIFIER } from "../905/39567"
// Asset management module for handling blob storage and retrieval
const assetsMap = new Map<string, Blob>()

/**
 * Populate the assets map with key-value pairs from an iterable collection
 * Original function: $$a1
 * @param entries - Iterable collection of [key, value] pairs to populate the assets map
 */
export function populateAssetsMap(entries: Iterable<[string, Blob]>): void {
  for (const [key, value] of entries) {
    assetsMap.set(key, value)
  }
}

/**
 * Retrieve and convert a blob asset to Uint8Array by its identifier
 * Original function: $$s0
 * @param assetId - Unique identifier for the asset to retrieve
 * @returns Promise resolving to Uint8Array of the asset data
 * @throws Error when asset is not found or blob is undefined
 */
export async function getAssetById(assetId: string): Promise<Uint8Array> {
  if (!assetsMap.has(assetId)) {
    console.error(`Asset ${assetId} not found in assets map`)
    throw new Error(`Asset ${assetId} not found`)
  }

  const blob = assetsMap.get(assetId)
  if (!blob) {
    throw new Error(`Blob for asset ${assetId} is undefined`)
  }

  return new Uint8Array(await blob.arrayBuffer())
}

/**
 * Base URL for accessing assets on the local server
 * Original variable: $$o2
 */
export const ASSETS_BASE_URL = `http://localhost:${PROCESS_IDENTIFIER}/assets`

// Export aliases for backward compatibility
export const LP = getAssetById
export const Zw = populateAssetsMap
export const fJ = ASSETS_BASE_URL
