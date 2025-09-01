import { jsx, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { S } from "../905/274480";
import { J } from "../905/270045";
import { getFeatureFlags } from "../905/601108";
import { sx } from "../905/449184";
import { Pt } from "../figma_app/806412";
import { tx, t as _$$t } from "../905/303541";
import { gl } from "../905/216495";
import { lJ, kl } from "../905/275640";
import { Ib } from "../905/129884";
import { Ad } from "../figma_app/811257";
export function $$m0(e) {
  let [t, r] = lJ("frameMaskDisabled");
  let m = kl("marquee");
  let g = gl(m) || !!m;
  let f = useCallback(e => {
    getFeatureFlags().ce_properties_panel_tracking && sx("editor-transform-panel-change", {
      key: "clipContent",
      clipContentValue: e
    });
    r(!e);
  }, [r]);
  return jsx(Ad, {
    label: jsx(Fragment, {}),
    input: jsx(S, {
      muted: !0,
      mixed: gl(t),
      checked: !1 === t,
      onChange: f,
      recordingKey: Pt(e, "clipContentCheckbox"),
      label: jsx(J, {
        children: tx("fullscreen.properties_panel.transform_panel.clip_content")
      }),
      disabled: g,
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": g ? _$$t("sites.panel.interactions_panel.clip_contents_disabled") : void 0,
        "data-tooltip-show-above": !0,
        "data-testid": "clip-content-checkbox"
      }
    })
  });
}
export const u = $$m0;