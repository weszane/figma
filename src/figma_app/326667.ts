import { getI18nString } from '../905/303541'
import { FPlanFeatureType } from '../figma_app/191312'

/**
 * Returns the localized string for a given FPlanFeatureType.
 * @param featureType - The type of plan feature.
 * @returns The i18n string corresponding to the feature type.
 * @see $$a0
 */
export function getFeatureTypeLabel(featureType: FPlanFeatureType): string | undefined {
  switch (featureType) {
    case FPlanFeatureType.FULL:
      return getI18nString('general.editor.seat_rename')
    case FPlanFeatureType.STARTER:
      return getI18nString('general.viewer')
    case FPlanFeatureType.RESTRICTED:
      return getI18nString('general.viewer_restricted')
    default:
      return undefined
  }
}

/** Alias for getFeatureTypeLabel (original: t) */
export const t = getFeatureTypeLabel
