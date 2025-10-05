import { jsx } from "react/jsx-runtime";
import { memo } from "react";
import { DialogTriggerButton } from "../905/976845";
import { A } from "../905/891805";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { getI18nString } from "../905/303541";
import { kG } from "../figma_app/482495";
import { KindEnum } from "../905/129884";
import { calculatePickerPositionLeft } from "../905/959568";
export let $$h0 = memo(function ({
  rowRef: e,
  recordingKey: t
}) {
  let s = kG("corner-smoothing");
  return jsx(DialogTriggerButton, {
    actionOnPointerDown: !0,
    recordingKey: t,
    "aria-label": getI18nString("fullscreen.properties_panel.transform_panel.corner_smoothing"),
    "aria-expanded": s.showing,
    onClick: t => {
      t.stopPropagation();
      getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor-transform-panel-change", {
        key: "cornerSmoothing",
        value: s.showing
      });
      s.toggle(() => calculatePickerPositionLeft(e.current));
    },
    htmlAttributes: {
      "data-tooltip": getI18nString("fullscreen.properties_panel.transform_panel.corner_smoothing"),
      "data-tooltip-type": KindEnum.TEXT,
      "data-testid": "cornerSmoothingToggle"
    },
    children: jsx(A, {})
  });
});
export const E = $$h0;