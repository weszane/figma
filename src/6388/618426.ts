import { jsxs, jsx } from "react/jsx-runtime";
import { memo, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { c$ } from "../905/867927";
import { f as _$$f } from "../905/335032";
import { generateRecordingKey } from "../figma_app/878298";
import { AutoInteractableWrapper } from "../905/277716";
import { k } from "../905/582200";
import { renderI18nText, getI18nString } from "../905/303541";
import { isInvalidValue, MIXED_MARKER, isValidValue } from "../905/216495";
import { useSelectionProperty } from "../905/275640";
import { useOnSelectionChange } from "../figma_app/722362";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { r as _$$r } from "../figma_app/711157";
import { tR } from "../6388/410011";
import { Y } from "../6388/262412";
import { M } from "../6388/719644";
import { K } from "../6388/893524";
let a = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M14.5 8h-6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5m-6-1A1.5 1.5 0 0 0 7 8.5v6A1.5 1.5 0 0 0 8.5 16h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 14.5 7z",
      clipRule: "evenodd"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      fillRule: "evenodd",
      d: "M8.064 15.936A1.5 1.5 0 0 0 9.5 17h6a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.064-1.436A1.5 1.5 0 0 1 16 8.5v6a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-.436-.064",
      clipRule: "evenodd"
    })]
  });
});
let d = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M14.5 8h-6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5m-6-1A1.5 1.5 0 0 0 7 8.5v6A1.5 1.5 0 0 0 8.5 16h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 14.5 7z",
      clipRule: "evenodd"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      fillRule: "evenodd",
      d: "M9 16v.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 16.5 9H16v5.5a1.5 1.5 0 0 1-1.5 1.5z",
      clipRule: "evenodd"
    })]
  });
});
let c = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M13.5 7h-6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5m-6-1A1.5 1.5 0 0 0 6 7.5v6A1.5 1.5 0 0 0 7.5 15h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 13.5 6z",
      clipRule: "evenodd"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      fillRule: "evenodd",
      d: "M9 15v1.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 16.5 9H15v4.5a1.5 1.5 0 0 1-1.5 1.5z",
      clipRule: "evenodd"
    })]
  });
});
let S = ["NONE", "LIGHT", "MEDIUM", "STRONG"];
export function $$I0({
  recordingKey: e
}) {
  let t = useDispatch();
  let {
    shadowStylePresetOptions,
    selectedShadowStyle,
    shadowOpacity,
    showShadowOpacityControl,
    onChangeShadowStyleControl,
    onChangeShadowOpacity
  } = $$T1();
  return jsx(k, {
    name: "slides_shadow_panel",
    children: jsxs(tR, {
      children: [jsx(_$$r, {
        titleTx: renderI18nText("slides.properties_panel.shadow")
      }), jsx(M, {
        legend: renderI18nText("slides.properties_panel.shadow.legend"),
        value: selectedShadowStyle,
        onChange: onChangeShadowStyleControl,
        recordingKey: generateRecordingKey(e, "shadowStyle"),
        children: S.map(e => jsx(c$, {
          value: e,
          icon: shadowStylePresetOptions[e].icon,
          "aria-label": shadowStylePresetOptions[e].displayText,
          htmlAttributes: {
            "data-onboarding-key": shadowStylePresetOptions[e].displayText
          }
        }, e))
      }), showShadowOpacityControl && jsx(K, {
        ariaLabel: getI18nString("slides.properties_panel.shadow_opacity"),
        bigStep: .1,
        max: 1,
        min: 0,
        numberInput: jsx(AutoInteractableWrapper, {
          name: "slides_shadow_opacity_input",
          children: jsx(Y, {
            "data-tooltip": getI18nString("slides.properties_panel.shadow_opacity"),
            value: shadowOpacity,
            onValueChange: onChangeShadowOpacity,
            recordingKey: generateRecordingKey(e, "shadowOpacity", "input"),
            dispatch: t
          })
        }),
        onChange: onChangeShadowOpacity,
        recordingKey: generateRecordingKey(e, "shadowOpacity"),
        sliderTrackableName: "slides_shadow_opacity_slider",
        step: .01,
        value: shadowOpacity
      })]
    })
  });
}
export function $$T1() {
  let [e, t] = useSelectionProperty("shadow");
  let l = useMemo(() => ({
    NONE: {
      value: null,
      legacyValue: null,
      displayText: getI18nString("slides.properties_panel.shadow_style_none"),
      icon: jsx(_$$f, {})
    },
    LIGHT: {
      value: [{
        radius: 7,
        x: 0,
        y: 5,
        opacityMultiplier: .4
      }],
      legacyValue: [{
        radius: 3,
        x: 0,
        y: 1
      }],
      displayText: getI18nString("slides.properties_panel.shadow_style_light"),
      icon: jsx(a, {})
    },
    MEDIUM: {
      value: [{
        radius: 56,
        x: 0,
        y: 18,
        opacityMultiplier: .4
      }, {
        radius: 18,
        x: 0,
        y: 10,
        opacityMultiplier: .2
      }, {
        radius: 6,
        y: 4,
        x: 0,
        opacityMultiplier: .16
      }],
      legacyValue: [{
        radius: 16,
        x: 0,
        y: 5
      }],
      displayText: getI18nString("slides.properties_panel.shadow_style_medium"),
      icon: jsx(d, {})
    },
    STRONG: {
      value: [{
        radius: 80,
        x: 0,
        y: 26,
        opacityMultiplier: .64
      }, {
        radius: 40,
        x: 0,
        y: 12,
        opacityMultiplier: .28
      }, {
        radius: 8,
        x: 0,
        y: 5,
        opacityMultiplier: .2
      }],
      legacyValue: [{
        radius: 40,
        x: 0,
        y: 10
      }],
      displayText: getI18nString("slides.properties_panel.shadow_style_strong"),
      icon: jsx(c, {})
    }
  }), []);
  let [s, r] = useState(() => C(e, l));
  let u = isInvalidValue(e) ? MIXED_MARKER : e?.[0]?.opacity ?? 0;
  isValidValue(u) && s && l[s] && (u /= l[s]?.value?.[0]?.opacityMultiplier || 1);
  useOnSelectionChange(() => r(C(e, l)));
  return {
    shadowStylePresetOptions: l,
    selectedShadowStyle: s,
    shadowOpacity: u,
    showShadowOpacityControl: !!e,
    onChangeShadowStyleControl: e => {
      let o = l[e].value;
      let n = isValidValue(u) && u || .25;
      t(o ? o.map(e => ({
        offset: {
          x: e.x,
          y: e.y
        },
        radius: e.radius,
        spread: 0,
        opacity: n * (e.opacityMultiplier || 1)
      })) : null, yesNoTrackingEnum.YES);
      r(e);
    },
    onChangeShadowOpacity: o => {
      if (isValidValue(e) && e) {
        let n = s && l[s];
        t(e.map((e, t) => ({
          ...e,
          opacity: n?.value?.[t]?.opacityMultiplier ? o * (n?.value?.[t]?.opacityMultiplier || 1) : o
        })), yesNoTrackingEnum.YES);
      }
    }
  };
}
function C(e, t) {
  if (!isInvalidValue(e)) {
    if (!e) return "NONE";
    if (N(e, t.LIGHT.value) || N(e, t.LIGHT.legacyValue)) return "LIGHT";
    if (N(e, t.MEDIUM.value) || N(e, t.MEDIUM.legacyValue)) return "MEDIUM";
    if (N(e, t.STRONG.value) || N(e, t.STRONG.legacyValue)) return "STRONG";
  }
}
function N(e, t) {
  return !e && !t || !!e && !!t && e.length === t.length && e.every((e, l) => e.radius === t[l]?.radius && e.offset.x === t[l]?.x && e.offset.y === t[l]?.y);
}
export const J = $$I0;
export const F = $$T1;