import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { getI18nString } from "../905/303541";
import { FProductAccessType } from "../figma_app/191312";
export function $$o1(e) {
  switch (e) {
    case FProductAccessType.DESIGN:
      return getI18nString("general.figma_design");
    case FProductAccessType.WHITEBOARD:
      return getI18nString("general.figjam");
    case FProductAccessType.DEV_MODE:
      return getI18nString("general.dev_mode");
    case FProductAccessType.SLIDES:
      return getI18nString("general.figma_slides");
    case FProductAccessType.SITES:
      return getI18nString("general.figma_sites");
    case FProductAccessType.FIGMAKE:
      return getI18nString("general.figma_rev");
    case FProductAccessType.COOPER:
      return getI18nString("general.figma_buzz");
    default:
      throwTypeError(e);
  }
}
export function $$l0(e) {
  switch (e) {
    case FProductAccessType.DESIGN:
      return getI18nString("general.figma_design_short");
    case FProductAccessType.SLIDES:
      return getI18nString("general.figma_slides_short");
    case FProductAccessType.WHITEBOARD:
      return getI18nString("general.figjam");
    case FProductAccessType.DEV_MODE:
      return getI18nString("general.dev_mode");
    case FProductAccessType.SITES:
      return getI18nString("general.sites");
    case FProductAccessType.FIGMAKE:
      return getFeatureFlags().product_trials_figmake ? getI18nString("general.figma_rev_short") : getI18nString("general.figma_rev");
    case FProductAccessType.COOPER:
      return getI18nString("general.figma_buzz");
    default:
      throwTypeError(e);
  }
}
export const $ = $$l0;
export const E = $$o1;