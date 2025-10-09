import { getFeatureFlags } from "../905/601108"
import { throwTypeError } from "../figma_app/465776"
import { PrimaryWorkflowEnum } from "../figma_app/633080"

/**
 * Determines if an asset type is publishable.
 *
 * @param assetType - The primary workflow enum value representing the asset type
 * @returns True if the asset type is publishable, false otherwise
 *
 * Original function name: $$s1
 */
export function isPublishableAssetType(assetType: PrimaryWorkflowEnum): boolean {
  // First check if it's a shareable asset type (which implies publishable)
  if (isShareableAssetType(assetType)) {
    return true
  }

  // Handle specific cases for publishable but not shareable asset types
  switch (assetType) {
    case PrimaryWorkflowEnum.MODULE:
      return !!getFeatureFlags().dse_module_publish
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
    case PrimaryWorkflowEnum.COMPONENT:
    case PrimaryWorkflowEnum.STATE_GROUP:
    case PrimaryWorkflowEnum.STYLE:
    case PrimaryWorkflowEnum.VARIABLE:
    case PrimaryWorkflowEnum.VARIABLE_SET:
    case PrimaryWorkflowEnum.VARIABLE_OVERRIDE:
      return true
    case PrimaryWorkflowEnum.CONSTRAINED_TEMPLATE:
      return !!getFeatureFlags().cooper
    case PrimaryWorkflowEnum.MANAGED_STRING:
      return !!getFeatureFlags().cheddar
    case PrimaryWorkflowEnum.CODE_COMPONENT:
    case PrimaryWorkflowEnum.CODE_LIBRARY:
    case PrimaryWorkflowEnum.CODE_FILE:
      return !!getFeatureFlags().sts_code
    default:
      throwTypeError(assetType, "Unhandled asset type")
  }
}

/**
 * Determines if an asset type is shareable.
 *
 * @param assetType - The primary workflow enum value representing the asset type
 * @returns True if the asset type is shareable, false otherwise
 *
 * Original function name: $$o0
 */
export function isShareableAssetType(assetType: PrimaryWorkflowEnum): boolean {
  switch (assetType) {
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
      return !!getFeatureFlags().ds_pubplat_sts
    case PrimaryWorkflowEnum.MODULE:
      return !!getFeatureFlags().dse_module_publish
    case PrimaryWorkflowEnum.COMPONENT:
    case PrimaryWorkflowEnum.STATE_GROUP:
    case PrimaryWorkflowEnum.STYLE:
    case PrimaryWorkflowEnum.VARIABLE:
    case PrimaryWorkflowEnum.VARIABLE_SET:
      return true
    case PrimaryWorkflowEnum.VARIABLE_OVERRIDE:
      return false
    case PrimaryWorkflowEnum.CONSTRAINED_TEMPLATE:
      return !!getFeatureFlags().cooper
    case PrimaryWorkflowEnum.CODE_LIBRARY:
    case PrimaryWorkflowEnum.CODE_FILE:
      return false
    case PrimaryWorkflowEnum.CODE_COMPONENT:
      return !!(getFeatureFlags().sts_code && getFeatureFlags().ds_pubplat_sts_code)
    case PrimaryWorkflowEnum.MANAGED_STRING:
      return false
    default:
      throwTypeError(assetType, "Unhandled asset type")
  }
}

// Export the shareable asset type checker with the original name for backward compatibility
export const O = isShareableAssetType
export const e = isPublishableAssetType
