import { jsx } from "react/jsx-runtime";
import { useState, useEffect, useCallback, memo } from "react";
import { d as _$$d } from "../905/976845";
import { Q } from "../figma_app/447352";
import { Fullscreen } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { selectWithShallowEqual } from "../905/103090";
import { Pt } from "../figma_app/806412";
import { E } from "../905/277716";
import { getI18nString } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { kG } from "../figma_app/482495";
import { Sh } from "../figma_app/889655";
import { E as _$$E } from "../642/160266";
import { Jo, Df } from "../figma_app/98483";
export function $$_0({
  recordingKey: e,
  rowRef: t
}) {
  let {
    selectedGUIDs
  } = selectWithShallowEqual(e => ({
    selectedGUIDs: Sh(e)
  }));
  let i = Jo();
  let l = Df();
  let o = kG("corner-smoothing");
  let [d, p] = useState(!1);
  let h = l.cornerRadius;
  let _ = l.rectangleCornerRadii;
  let C = i.cornerRadius;
  let j = i.rectangleCornerRadii;
  useEffect(() => {
    p(!!Fullscreen && Fullscreen.getCornerRadiusToolPreferencesForFile() && h && _ && C && j);
  }, [selectedGUIDs, h, _, C, j]);
  let v = useCallback(() => {
    o.hide();
    fullscreenValue.deselectProperty();
  }, [o]);
  let S = null;
  h && _ ? S = jsx($$b1, {
    recordingKey: e,
    disabled: !C || !j,
    rectangleCornerToolIndependentActive: d,
    setRectangleCornerToolIndependentActive: p
  }) : h && !_ && (S = jsx(_$$E, {
    recordingKey: Pt(e, "cornerSmoothingToggle"),
    rowRef: t
  }));
  return {
    cornerRadiusEnabled: h && C,
    cornerControlIconButton: S,
    independentCornerControlEnabled: d,
    hideCornerSmoothing: v,
    cornerSmoothingPicker: o
  };
}
export let $$b1 = memo(function ({
  rectangleCornerToolIndependentActive: e,
  setRectangleCornerToolIndependentActive: t,
  disabled: s,
  recordingKey: n
}) {
  return jsx(E, {
    name: "independent_corner_radius_toggle",
    children: jsx(_$$d, {
      actionOnPointerDown: !0,
      "aria-expanded": e,
      onClick: () => {
        Fullscreen && Fullscreen.setCornerRadiusToolPreferencesForFile(!e);
        t(!e);
        getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor-transform-panel-change", {
          key: "rectangleCornerRadiiIndependent",
          value: e
        });
      },
      "aria-label": getI18nString("fullscreen.properties_panel.transform_panel.independent_corners"),
      disabled: s,
      htmlAttributes: {
        "data-testid": "individual-corners-toggle-button"
      },
      recordingKey: Pt(n, "rectangleCornerToolIndependentToggle"),
      children: jsx(Q, {})
    })
  });
});
export const ei = $$_0;
export const j2 = $$b1;