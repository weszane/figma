import { t as _$$t } from "../905/303541";
import { FPlanFeatureType } from "../figma_app/191312";
export function $$a0(e) {
  switch (e) {
    case FPlanFeatureType.FULL:
      return _$$t("general.editor.seat_rename");
    case FPlanFeatureType.STARTER:
      return _$$t("general.viewer");
    case FPlanFeatureType.RESTRICTED:
      return _$$t("general.viewer_restricted");
  }
}
export const t = $$a0;