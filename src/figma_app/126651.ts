import { xb } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { t } from "../905/303541";
import { FProductAccessType } from "../figma_app/191312";
export function $$o1(e) {
  switch (e) {
    case FProductAccessType.DESIGN:
      return t("general.figma_design");
    case FProductAccessType.WHITEBOARD:
      return t("general.figjam");
    case FProductAccessType.DEV_MODE:
      return t("general.dev_mode");
    case FProductAccessType.SLIDES:
      return t("general.figma_slides");
    case FProductAccessType.SITES:
      return t("general.figma_sites");
    case FProductAccessType.FIGMAKE:
      return t("general.figma_rev");
    case FProductAccessType.COOPER:
      return t("general.figma_buzz");
    default:
      xb(e);
  }
}
export function $$l0(e) {
  switch (e) {
    case FProductAccessType.DESIGN:
      return t("general.figma_design_short");
    case FProductAccessType.SLIDES:
      return t("general.figma_slides_short");
    case FProductAccessType.WHITEBOARD:
      return t("general.figjam");
    case FProductAccessType.DEV_MODE:
      return t("general.dev_mode");
    case FProductAccessType.SITES:
      return t("general.sites");
    case FProductAccessType.FIGMAKE:
      return getFeatureFlags().product_trials_figmake ? t("general.figma_rev_short") : t("general.figma_rev");
    case FProductAccessType.COOPER:
      return t("general.figma_buzz");
    default:
      xb(e);
  }
}
export const $ = $$l0;
export const E = $$o1;