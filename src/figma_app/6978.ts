import { jsx, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { generateRecordingKey } from "../figma_app/878298";
import { renderI18nText, getI18nString } from "../905/303541";
import { isInvalidValue } from "../905/216495";
import { lJ, kl } from "../905/275640";
import { Ib } from "../905/129884";
import { Ad } from "../figma_app/811257";
export function $$m0(e) {
  let [t, r] = lJ("frameMaskDisabled");
  let m = kl("marquee");
  let g = isInvalidValue(m) || !!m;
  let f = useCallback(e => {
    getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor-transform-panel-change", {
      key: "clipContent",
      clipContentValue: e
    });
    r(!e);
  }, [r]);
  return jsx(Ad, {
    label: jsx(Fragment, {}),
    input: jsx(Checkbox, {
      muted: !0,
      mixed: isInvalidValue(t),
      checked: !1 === t,
      onChange: f,
      recordingKey: generateRecordingKey(e, "clipContentCheckbox"),
      label: jsx(Label, {
        children: renderI18nText("fullscreen.properties_panel.transform_panel.clip_content")
      }),
      disabled: g,
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": g ? getI18nString("sites.panel.interactions_panel.clip_contents_disabled") : void 0,
        "data-tooltip-show-above": !0,
        "data-testid": "clip-content-checkbox"
      }
    })
  });
}
export const u = $$m0;