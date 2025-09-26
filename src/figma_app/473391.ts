import { hasAssetId, PrimaryWorkflowEnum } from '../figma_app/633080'
import { getAssetKey, getAssetUniqueId } from '../figma_app/646357'
/**
 * Determines the appropriate asset key based on the asset's properties.
 *
 * @param asset - The asset object to evaluate
 * @returns The appropriate key for the asset
 *
 * Original function name: $$a0
 */
export function getAssetKeyForSubscription(asset: any): string {
  if (hasAssetId(asset)) {
    // If asset has an ID, check subscription status
    return asset.subscriptionStatus === 'LOCAL' ? asset.keyForPublish : asset.key
  }
  else {
    // If no asset ID, use local or remote key logic
    return asset.isLocal ? getAssetUniqueId(asset) : getAssetKey(asset) ?? getAssetUniqueId(asset)
  }
}

/**
 * Maps a workflow value to a valid primary workflow enum value.
 *
 * @param workflow - The workflow value to evaluate
 * @returns The corresponding PrimaryWorkflowEnum value or undefined
 *
 * Original function name: $$s1
 */
export function mapToPrimaryWorkflow(workflow: PrimaryWorkflowEnum): PrimaryWorkflowEnum | undefined {
  switch (workflow) {
    case PrimaryWorkflowEnum.COMPONENT:
    case PrimaryWorkflowEnum.STATE_GROUP:
    case PrimaryWorkflowEnum.MODULE:
      return workflow
    default:
      return undefined
  }
}

// Export aliases for backward compatibility
export const V = getAssetKeyForSubscription
export const q = mapToPrimaryWorkflow
