import { jsxs, jsx } from "react/jsx-runtime";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { bL, c$ } from "../905/867927";
import { q } from "../905/932270";
import { Q } from "../905/730680";
import { J } from "../905/525097";
import { E } from "../905/267344";
import { DrawingElementType } from "../figma_app/763686";
import { generateRecordingKey } from "../figma_app/878298";
import { o as _$$o } from "../905/96108";
import { getI18nString } from "../905/303541";
import { isInvalidValue } from "../905/216495";
import { bC } from "../figma_app/789050";
import { sK } from "../905/794875";
import { cS } from "../figma_app/334459";
import { OH, EN, NC, Sp, SO, Gp, yh } from "../905/149861";
import { Z6, qv, O1, $r } from "../905/859070";
let v = new OH();
let I = new EN();
export function $$E0(e) {
  return jsxs(bL, {
    value: isInvalidValue(e.value) ? void 0 : e.value,
    onChange: e.onChange,
    legend: jsx(q, {
      children: e.label
    }),
    readonly: e.disabled,
    recordingKey: e.recordingKey,
    children: [jsx(c$, {
      icon: jsx(Q, {}),
      value: "NONE",
      "aria-label": "dashCap" === e.kind ? getI18nString("fullscreen.properties_panel.stroke_settings.dash_cap_none.tooltip") : getI18nString("fullscreen.properties_panel.stroke_settings.end_cap_none.tooltip")
    }), jsx(c$, {
      icon: jsx(J, {}),
      value: "SQUARE",
      "aria-label": "dashCap" === e.kind ? getI18nString("fullscreen.properties_panel.stroke_settings.dash_cap_square.tooltip") : getI18nString("fullscreen.properties_panel.stroke_settings.end_cap_square.tooltip")
    }), jsx(c$, {
      icon: jsx(E, {}),
      value: "ROUND",
      "aria-label": "dashCap" === e.kind ? getI18nString("fullscreen.properties_panel.stroke_settings.dash_cap_round.tooltip") : getI18nString("fullscreen.properties_panel.stroke_settings.end_cap_round.tooltip")
    })]
  });
}
export function $$$$x1(e) {
  let t = useDispatch();
  let i = e.strokePanelMode === DrawingElementType.ENDPOINT;
  let s = 1 === e.strokePanelTerminalPointCount || i;
  let o = bC();
  let l = useId();
  let d = t => jsx(NC, {
    value: t,
    recordingKey: generateRecordingKey(e, t),
    children: jsxs("span", {
      className: Z6,
      children: [Sp(t), jsx(_$$o, {
        text: v.format(t)
      })]
    })
  }, t);
  let c = jsxs(SO, {
    ariaLabelledBy: l,
    blurOnChange: !0,
    disabled: e.disabled,
    dispatch: t,
    dropdownOverride: isInvalidValue(e.endPoint) ? void 0 : I.format(e.endPoint),
    dropdownShown: e.dropdownShown,
    dropdownWidth: 200,
    formatter: v,
    icon: Sp(e.endPoint),
    iconClassName: e.disabled ? qv : O1,
    id: "end-point-select",
    onChange: t => {
      e.onChange({
        terminalCap: t
      });
      e.onChange({
        strokeCap: t
      });
    },
    property: e.endPoint,
    recordingKey: e.recordingKey,
    children: [Gp.map(d), o && jsx(sK, {}), o && yh.map(d)]
  });
  return jsx("span", {
    "data-testid": "end-point-settings-row",
    children: jsx(cS, {
      label: s ? getI18nString("fullscreen.properties_panel.stroke_settings.end_point") : getI18nString("fullscreen.properties_panel.stroke_settings.end_points"),
      appendedClassName: $r,
      input: c
    })
  });
}
$$$$x1.displayName = "EndPointSettings";
export const o = $$E0;
export const x = $$$$x1;
