import { getI18nString } from "../905/303541";
import { FPlanFeatureType } from "../figma_app/191312";
export function $$a0(e) {
  switch (e) {
    case FPlanFeatureType.FULL:
      return getI18nString("general.editor.seat_rename");
    case FPlanFeatureType.STARTER:
      return getI18nString("general.viewer");
    case FPlanFeatureType.RESTRICTED:
      return getI18nString("general.viewer_restricted");
  }
}
export const t = $$a0;