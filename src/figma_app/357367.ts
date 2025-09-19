import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getResourceDataOrFallback } from '../905/723791'
import { resourceUtils } from '../905/989992'
import { FileCanUseSlidesDesignToggle } from '../figma_app/43951'
import { getObservableValue } from '../figma_app/84367'
import { useSubscription } from '../figma_app/288654'
import { selectOpenFileObject } from '../figma_app/516028'
import { AppStateTsApi, SelfDesignType } from '../figma_app/763686'
import { isInteractionOrEvalMode } from '../figma_app/897289'
/**
 * Checks if the current interop tool mode is SELF.
 * Original: $$_1
 */
export function isSelfDesignMode(): boolean {
  return getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF) === SelfDesignType.SELF
}

/**
 * Checks if design mode can be entered.
 * Original: $$h0
 */
export function canEnterDesignMode(): boolean {
  return getObservableValue(AppStateTsApi?.canEnterDesignMode(), false)
}

/**
 * Syncs the ability to enter design mode with app state.
 * Original: $$m2
 */
export function syncDesignModePermission(): void {
  // Get the currently open file object from Redux store
  const openFile = useSelector(selectOpenFileObject)
  const fileKey = openFile?.key ?? null

  // Subscribe to the slides design toggle resource
  const slidesDesignToggle = useSubscription(
    FileCanUseSlidesDesignToggle,
    { key: fileKey ?? '' },
    { enabled: !!fileKey },
  )

  // Transform the resource data to check for permission
  const hasPermission = resourceUtils.useTransform(
    slidesDesignToggle,
    resource => !!getResourceDataOrFallback(resource.file)?.hasPermission,
  )

  // Determine if design mode should be enabled
  const canDesign = !!isInteractionOrEvalMode() || hasPermission.unwrapOr(false)

  // Sync with app state
  useEffect(() => {
    AppStateTsApi?.canEnterDesignMode().set(canDesign)
  }, [canDesign])
}

// Refactored exports for clarity and traceability
export const Bk = canEnterDesignMode
export const HW = isSelfDesignMode
export const VD = syncDesignModePermission
