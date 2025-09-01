import { jsx } from "react/jsx-runtime";
import { memo } from "react";
import { d as _$$d } from "../905/976845";
import { A } from "../905/891805";
import { getFeatureFlags } from "../905/601108";
import { sx } from "../905/449184";
import { t as _$$t } from "../905/303541";
import { kG } from "../figma_app/482495";
import { Ib } from "../905/129884";
import { cn } from "../905/959568";
export let $$h0 = memo(function ({
  rowRef: e,
  recordingKey: t
}) {
  let s = kG("corner-smoothing");
  return jsx(_$$d, {
    actionOnPointerDown: !0,
    recordingKey: t,
    "aria-label": _$$t("fullscreen.properties_panel.transform_panel.corner_smoothing"),
    "aria-expanded": s.showing,
    onClick: t => {
      t.stopPropagation();
      getFeatureFlags().ce_properties_panel_tracking && sx("editor-transform-panel-change", {
        key: "cornerSmoothing",
        value: s.showing
      });
      s.toggle(() => cn(e.current));
    },
    htmlAttributes: {
      "data-tooltip": _$$t("fullscreen.properties_panel.transform_panel.corner_smoothing"),
      "data-tooltip-type": Ib.TEXT,
      "data-testid": "cornerSmoothingToggle"
    },
    children: jsx(A, {})
  });
});
export const E = $$h0;