import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { R } from "../905/82603";
import { Fullscreen } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { AutoInteractableWrapper } from "../905/277716";
import { getI18nString } from "../905/303541";
import { yt } from "../figma_app/292212";
import { R as _$$R } from "../figma_app/930125";
export function $$p0({
  unfocusedInputOverridesClassName: e,
  focusedInputOverridesClassName: t
}) {
  let {
    slotPropertyDefinition,
    numSlots,
    includesInstanceSublayer
  } = yt();
  let h = useMemo(() => slotPropertyDefinition ? slotPropertyDefinition.name : numSlots > 1 ? getI18nString("fullscreen.properties_panel.layer_header.slot_multiple_selected", {
    count: numSlots
  }) : getI18nString("fullscreen.properties_panel.layer_header.slot"), [slotPropertyDefinition, numSlots]);
  return getFeatureFlags().dse_slots ? jsx(AutoInteractableWrapper, {
    name: "slot_name_control",
    children: jsx(_$$R, {
      onSubmit: e => {
        slotPropertyDefinition && Fullscreen?.editComponentPropDefName(slotPropertyDefinition.explicitDefID, e);
      },
      value: h,
      icon: jsx(R, {}),
      shouldHideIcon: !0,
      canEdit: !!slotPropertyDefinition && !includesInstanceSublayer,
      editAction: "rename-slot",
      unfocusedInputOverridesClassName: e,
      focusedInputOverridesClassName: t
    })
  }) : null;
}
export const s = $$p0;