import { setupRemovableAtomFamily } from "../figma_app/615482";
import { useCallback } from "react";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
let l = setupRemovableAtomFamily(() => atom(null));
export var $$s1 = (e => (e.CORNERS = "corners", e.AI_ACTION_OVERFLOW = "ai_action_overflow", e.MORE_ACTION_OVERFLOW = "more_action_overflow", e.EFFECTS = "effects", e.FILL = "fill", e.STROKE = "stroke", e.FONT_FAMILY = "font_family", e.FONT_SPACING = "font_spacing", e.IMAGE_CROP = "image_crop", e.LAYOUT_ALIGNMENT = "layout_alignment", e.TEMPLATE_TYPE = "template_type", e.TEXT_ALIGNMENT = "text_alignment", e.VOLUME_CONTROL = "volume_control", e))($$s1 || {});
export function $$o0(e) {
  let [t, n] = useAtomValueAndSetter(l);
  return {
    isPopoverOpen: t === e,
    togglePopover: useCallback(() => {
      n(t === e ? null : e);
    }, [t, e, n]),
    closePopover: useCallback(() => {
      n(t => t === e ? null : t);
    }, [e, n])
  };
}
export const j = $$o0;
export const p = $$s1;