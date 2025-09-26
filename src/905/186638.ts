import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getAssetKeyForSubscription } from '../figma_app/473391'
import { COMPONENT_FLYOUT_MODAL_TYPE, useComponentFlyoutModal } from '../figma_app/608944'

export function useIsComponentFlyoutModalShownForAsset(asset: any): boolean {
  const modalShown = useSelector((state: any) => state.modalShown)
  const { flyoutProps } = useComponentFlyoutModal()

  return useMemo(() => {
    // Check if modal is not shown or asset is not provided
    if (
      (modalShown?.type !== COMPONENT_FLYOUT_MODAL_TYPE || !modalShown?.data?.asset)
      && !flyoutProps
      || !asset
    ) {
      return false
    }

    // Get the asset from either flyoutProps or modalShown
    const currentAsset = flyoutProps?.asset ?? modalShown?.data?.asset

    try {
      // Compare asset keys for subscription
      return getAssetKeyForSubscription(asset) === getAssetKeyForSubscription(currentAsset)
    }
    catch {
      // Return false if there's an error in comparison
      return false
    }
  }, [asset, flyoutProps, modalShown?.data?.asset, modalShown?.type])
}

export const n = useIsComponentFlyoutModalShownForAsset
