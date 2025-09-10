import { PrimaryWorkflowEnum } from "../905/497152";
import { getLocalAsset, getSubscribedAsset } from "../905/808701";

/**
 * Represents the result of processing a managed string content.
 * @param content - The content to process.
 * @returns An object with success and value properties.
 * (Original function name: r)
 */
const processContent = (content: unknown): { success: boolean; value: unknown } => ({
  success: false,
  value: null
});

/**
 * Extracts managed string data from the given asset.
 * @param asset - The asset object containing managedStringFields.
 * @returns The managed string data or null if not available.
 * (Original function name: l)
 */
function extractManagedStringData(asset: any): {
  context?: string;
  key?: string;
  locale?: string;
  textContent?: string;
  content: unknown;
} | null {
  if (!asset.managedStringFields) return null;
  const {
    context,
    key,
    locale,
    textContent,
    content
  } = asset.managedStringFields;
  const processed = processContent(content);
  return {
    context,
    key,
    locale,
    textContent,
    content: processed.success ? processed.value : null
  };
}

/**
 * Retrieves a local managed string asset and attaches its managed string data.
 * @param asset - The asset to retrieve.
 * @returns The asset with managedStringData or null.
 * (Original function name: $$s0)
 */
export function getLocalManagedStringAsset(asset: any): any | null {
  const localAsset = getLocalAsset(PrimaryWorkflowEnum.MANAGED_STRING, asset);
  if (!localAsset) return null;
  const managedStringData = extractManagedStringData(asset);
  return managedStringData ? {
    ...localAsset,
    managedStringData
  } : null;
}

/**
 * Retrieves a subscribed managed string asset and attaches its managed string data.
 * @param asset - The asset to retrieve.
 * @returns The asset with managedStringData or null.
 * (Original function name: $$o1)
 */
export function getSubscribedManagedStringAsset(asset: any): any | null {
  const subscribedAsset = getSubscribedAsset(PrimaryWorkflowEnum.MANAGED_STRING, asset);
  if (!subscribedAsset) return null;
  const managedStringData = extractManagedStringData(asset);
  return managedStringData ? {
    ...subscribedAsset,
    managedStringData
  } : null;
}

// Exported variables renamed to match refactored function names
export const fA = getLocalManagedStringAsset;
export const cx = getSubscribedManagedStringAsset;
