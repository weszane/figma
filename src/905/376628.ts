import { jsx } from "react/jsx-runtime";
import { tx } from "../905/303541";
import { E } from "../905/984674";
import { c } from "../905/370443";
import { Ho } from "../figma_app/236178";
import { rq } from "../905/425180";
import { R } from "../905/11928";
export function $$c0(e) {
  let t = Ho(e.libraryKey) ? jsx(E, {
    children: tx("design_systems.libraries_modal.confirm_override.description_org")
  }) : jsx(E, {
    children: tx("design_systems.libraries_modal.confirm_override.description_workspace")
  });
  return jsx(rq, {
    clickOutsideToHide: !0,
    description: t,
    disableHighlight: !0,
    fixedPosition: !1,
    isShowing: e.isShowing,
    onClose: e.onCancel,
    primaryCta: {
      label: jsx(E, {
        children: tx("design_systems.libraries_modal.confirm_override.button_confirm")
      }),
      ctaTrackingDescriptor: c.CONFIRM_LIBRARY_OVERRIDE,
      type: "button",
      onClick: e.onConfirm
    },
    secondaryCta: {
      label: jsx(E, {
        children: tx("design_systems.libraries_modal.confirm_override.button_cancel")
      }),
      ctaTrackingDescriptor: c.CANCEL_LIBRARY_OVERRIDE,
      type: "button",
      onClick: e.onCancel
    },
    targetKey: e.targetKey,
    title: jsx(E, {
      children: tx("design_systems.libraries_modal.confirm_override.title")
    }),
    trackingContextName: "confirm_library_override_callout",
    zIndex: R.MODAL
  });
}
export const X = $$c0;