import { jsx } from "react/jsx-runtime";
import { useAtomWithSubscription } from "../figma_app/27355";
import { h } from "../905/791079";
import { renderI18nText } from "../905/303541";
import { e as _$$e } from "../905/621515";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { KI } from "../figma_app/797994";
import { N } from "../figma_app/268271";
import { rq } from "../905/425180";
import { V86 } from "../figma_app/6204";
export let $$_0 = "new_text_row_location_callout";
export function $$h1() {
  let e = userFlagExistsAtomFamily("seen_text_row_location_callout");
  let t = useAtomWithSubscription(e);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: V86,
    priority: N.SECONDARY_MODAL
  }, [t]);
  h(() => {
    KI($$_0) && show();
  });
  return jsx(rq, {
    isShowing,
    clickOutsideToHide: !0,
    trackingContextName: "New Text Location Callout",
    onClose: complete,
    title: renderI18nText("design_systems.component_properties.new_text_binding_location_callout_title"),
    description: renderI18nText("design_systems.component_properties.new_text_binding_location_callout_description"),
    emphasized: !0,
    isCanvasNode: !1,
    targetKey: $$_0
  });
}
export const FX = $$_0;
export const R3 = $$h1;
