import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { bL, c$ } from "../905/867927";
import { q } from "../905/932270";
import { f as _$$f } from "../905/335032";
import { r as _$$r } from "../905/11924";
import { getI18nString } from "../905/303541";
import { gl } from "../905/216495";
import { L } from "../905/158054";
export function $$p0({
  label: e,
  property: t,
  disabled: i,
  onChange: p,
  onHover: m,
  onFocus: h,
  recordingKey: g,
  labelInactive: f,
  ..._
}) {
  let A = gl(t) ? "MIXED" : t ? "ON" : "OFF";
  let y = gl(t) ? void 0 : t ? "ON" : "OFF";
  let b = useCallback(e => {
    m?.("ON" === A, "mouseenter" === e.type ? "ENTER" : "LEAVE");
  }, [A, m]);
  let v = useCallback(e => {
    p("ON" === e);
  }, [p]);
  let I = useCallback((e, t) => {
    "ENTER" === t && m?.("ON" === e, t);
  }, [m]);
  return jsx(L, {
    label: e,
    labelInactive: f,
    labelAriaHidden: !0,
    disabled: i,
    onMouseEnter: b,
    onMouseLeave: b,
    "data-tooltip": _["data-tooltip"],
    "data-tooltip-type": _["data-tooltip-type"],
    children: jsx("span", {
      className: _.segmentedControlClassName,
      children: jsxs(bL, {
        value: y,
        readonly: i,
        onChange: v,
        recordingKey: g,
        legend: jsx(q, {
          children: e
        }),
        htmlAttributes: {
          onFocus: h
        },
        children: [jsx(c$, {
          icon: jsx(_$$f, {}),
          value: "OFF",
          "aria-label": getI18nString("settings_tab.disabled"),
          htmlAttributes: {
            onMouseEnter: () => I("OFF", "ENTER"),
            onMouseLeave: () => I("OFF", "LEAVE")
          }
        }), jsx(c$, {
          icon: jsx(_$$r, {}),
          value: "ON",
          "aria-label": getI18nString("settings_tab.enabled"),
          htmlAttributes: {
            onMouseEnter: () => I("ON", "ENTER"),
            onMouseLeave: () => I("ON", "LEAVE")
          }
        })]
      })
    })
  });
}
export const k = $$p0;