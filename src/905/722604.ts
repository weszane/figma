import { PrimaryWorkflowEnum } from "src/905/497152";
import { AssetParams, getLocalAsset, getSubscribedAsset } from "src/905/808701";

/**
 * Constant for full page block identifier.
 * @original a
 */
const FULL_PAGE_BLOCK = "full-page-block";

/**
 * Checks if the asset name includes the full page block identifier.
 * @param name - The asset name to check.
 * @returns True if the name includes the full page block identifier.
 * @original $$d3
 */
export function isFullPageBlock(name: string): boolean {
  return name.includes(FULL_PAGE_BLOCK);
}

/**
 * Transforms the asset object by marking it as fullPage if its name includes the full page block identifier.
 * @param asset - The asset object.
 * @returns The transformed asset object or null.
 * @original l
 */
function transformAsset<T extends { name: string }>(asset: T | null): (T & { fullPage?: boolean }) | null {
  if (!asset) return null;
  if (isFullPageBlock(asset.name)) {
    return { ...asset, fullPage: true };
  }
  return asset;
}

/**
 * Gets the local asset and transforms it.
 * @param id - The asset identifier.
 * @returns The transformed local asset.
 * @original $$s1
 */
export function getTransformedLocalAsset(id: AssetParams) {
  return transformAsset(getLocalAsset(PrimaryWorkflowEnum.RESPONSIVE_SET, id));
}

/**
 * Gets the subscribed asset and transforms it.
 * @param id - The asset identifier.
 * @returns The transformed subscribed asset.
 * @original $$o2
 */
export function getTransformedSubscribedAsset(id: AssetParams) {
  return transformAsset(getSubscribedAsset(PrimaryWorkflowEnum.RESPONSIVE_SET, id));
}

/**
 * Cleans up the asset name by removing the full page block identifier and formatting.
 * @param name - The asset name to clean.
 * @returns The cleaned and formatted asset name.
 * @original $$c0
 */
export function cleanAssetName(name: string): string {
  return name
    .replace(FULL_PAGE_BLOCK, "")
    .replace(/-+/g, " ")
    .trim()
    .replace(/\b\w/g, char => char.toUpperCase());
}

// Exported aliases for refactored functions
export const NR = cleanAssetName;
export const X1 = getTransformedLocalAsset;
export const _t = getTransformedSubscribedAsset;
export const dl = isFullPageBlock;
