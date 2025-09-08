import { memo } from "react";
import { jsxs, jsx } from "react/jsx-runtime";
import { bL, c$ } from "../905/867927";
import { q } from "../905/932270";
import { H } from "../905/740869";
import { m } from "../905/822676";
import { getI18nString } from "../905/303541";
import { isInvalidValue } from "../905/216495";
let o = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M6.5 6a.5.5 0 0 0 0 1h5.793L17 11.707V17.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.146-.354l-5-5A.5.5 0 0 0 12.5 6z",
      clipRule: "evenodd"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      fillRule: "evenodd",
      d: "M11 16.429V17.5a.5.5 0 0 0 1 0v-1.071a.5.5 0 0 0-1 0M11 13v.571a.5.5 0 0 0 1 0V12.5a.5.5 0 0 0-.4-.49l-.1-.01h-1.071a.5.5 0 0 0 0 1zm-3.328-.99-.1-.01H6.5a.5.5 0 0 0 0 1h1.071l.1-.01a.5.5 0 0 0 0-.98",
      clipRule: "evenodd"
    })]
  });
});
export function $$u0(e) {
  return jsxs(bL, {
    value: e.disabled && !e.showValueinDisabledStrokeJoin || isInvalidValue(e.value) ? void 0 : e.value,
    onChange: e.onChange,
    legend: jsx(q, {
      children: getI18nString("fullscreen.properties_panel.stroke_settings.join")
    }),
    readonly: e.disabled,
    recordingKey: e.recordingKey,
    children: [jsx(c$, {
      icon: jsx(H, {}),
      value: "MITER",
      "aria-label": getI18nString("fullscreen.properties_panel.stroke_settings.miter")
    }), jsx(c$, {
      icon: jsx(o, {}),
      value: "BEVEL",
      "aria-label": getI18nString("fullscreen.properties_panel.stroke_settings.bevel")
    }), jsx(c$, {
      icon: jsx(m, {}),
      value: "ROUND",
      "aria-label": getI18nString("fullscreen.properties_panel.stroke_settings.round_join")
    })]
  });
}
export const M = $$u0;