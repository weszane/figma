import { useAtomWithSubscription } from "../figma_app/27355";
import { editorTypeAtom } from "../figma_app/976749";
import { OC } from "../figma_app/386952";
import { FEditorType } from "../figma_app/53721";
import { isIncludedView } from "../figma_app/707808";
var $$n0;
(e => {
  function t() {
    let e = useAtomWithSubscription(OC);
    let t = useAtomWithSubscription(editorTypeAtom);
    return isIncludedView(e) ? {
      monetization_surface: "file_browser"
    } : t === FEditorType.Whiteboard ? {
      monetization_surface: "figjam_editor"
    } : t === FEditorType.Design ? {
      monetization_surface: "design_editor"
    } : {
      monetization_surface: "unclassified"
    };
  }
  (e => {
    e.UNCLASSIFIED = "unclassified";
    e.FILE_BROWSER = "file_browser";
    e.DESIGN_EDITOR = "design_editor";
    e.FIGJAM_EDITOR = "figjam_editor";
    e.SLIDES_EDITOR = "slides_editor";
    e.SUBSCRIPTION_CHECKOUT = "subscription_checkout";
    e.ADMIN_PAGE = "admin_page";
    e.NUX = "nux";
  })(e.MonetizationSurface || (e.MonetizationSurface = {}));
  (e.MonetizationTriggerBase || (e.MonetizationTriggerBase = {})).UNCLASSIFIED = "unclassified";
  (e => {
    e.UNCLASSIFIED = "unclassified";
    e.PLAN_COMPARISON_MODAL = "plan_comparison_modal";
    e.CONSUMPTION_UPSELL_MODAL = "consumption_upsell_modal";
  })(e.MonetizationUpgradePoint || (e.MonetizationUpgradePoint = {}));
  (e.TrackedModals || (e.TrackedModals = {})).TEAM_SETTINGS_MODAL = "team_settings_modal";
  e.generateTrackingContext = function (...e) {
    let [t, i, n] = e;
    return {
      monetization_surface: t,
      monetization_trigger: i,
      monetization_upgrade_point: n
    };
  };
  e.useImpliedTrackingSurface = t;
  e.useTrackingContext = function ({
    trigger: e,
    upgradePoint: i
  }) {
    return {
      ...t(),
      ...(e && {
        monetization_trigger: e
      }),
      ...(i && {
        monetization_upgrade_point: i
      })
    };
  };
})($$n0 || ($$n0 = {}));
export const h = $$n0;