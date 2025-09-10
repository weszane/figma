import { PrimaryWorkflowEnum } from "src/905/497152";
import { AssetParams, getLocalAsset, getSubscribedAsset } from "src/905/808701";

/**
 * Retrieves a local asset from the CODE_LIBRARY workflow.
 * @param assetId - The identifier for the asset.
 * @returns The local asset.
 * @see $$a1
 */
export const getLocalCodeLibraryAsset = (assetId: AssetParams) => {
  return getLocalAsset(PrimaryWorkflowEnum.CODE_LIBRARY, assetId);
};

/**
 * Retrieves a subscribed asset from the CODE_LIBRARY workflow.
 * @param assetId - The identifier for the asset.
 * @returns The subscribed asset.
 * @see $$s0
 */
export const getSubscribedCodeLibraryAsset = (assetId: AssetParams) => {
  return getSubscribedAsset(PrimaryWorkflowEnum.CODE_LIBRARY, assetId);
};

// Export aliases for backward compatibility and clarity
export const Q = getSubscribedCodeLibraryAsset; // $$s0
export const V = getLocalCodeLibraryAsset;      // $$a1
