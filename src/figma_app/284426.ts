import { jsx, jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { SelectGroupLabel, SelectSeparator, SelectContainer, SelectOptionReset } from "../905/493196";
import { HiddenLabel } from "../905/270045";
import { ColorFormatEnum } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import d from "classnames";
import { generateRecordingKey } from "../figma_app/878298";
import { getI18nString } from "../905/303541";
import { l6, c$ as _$$c$ } from "../905/794875";
import { NC, DW, O4, Hi, jS } from "../905/698732";
var c = d;
export let $$m0 = {
  format: e => e === ColorFormatEnum.HEX ? "Hex" : ColorFormatEnum[e]
};
export function $$g1(e) {
  return getFeatureFlags().eu_fpl_migration_styles_picker_selects ? jsx(E, {
    colorFormat: e.colorFormat,
    onColorFormatChange: e.onColorFormatChange,
    selectClassName: e.selectClassName,
    recordingKey: e.recordingKey
  }) : jsx(f, {
    ...e
  });
}
function f({
  dispatch: e,
  dropdownShown: t,
  colorFormat: r,
  onColorFormatChange: a,
  containerRef: s,
  recordingKey: l,
  showNewUI: d,
  selectClassName: g
}) {
  let f = useId();
  return jsxs(l6, {
    ariaLabel: getI18nString("fullscreen.properties_panel.color_picker.color_format.aria_label"),
    className: c()(NC, {
      [DW]: d
    }, g),
    dispatch: e,
    dropdownClassName: O4,
    dropdownShown: t,
    formatter: $$m0,
    id: f,
    inputClassName: Hi,
    neverConstrain: !!s?.current,
    onChange: a,
    property: r,
    recordingKey: generateRecordingKey(l, "colorFormatSelect"),
    targetDomNode: s?.current,
    children: [jsx(_$$c$, {
      value: ColorFormatEnum.HEX,
      recordingKey: generateRecordingKey(l, "hexOption")
    }), jsx(_$$c$, {
      value: ColorFormatEnum.RGB,
      recordingKey: generateRecordingKey(l, "rgbOption")
    }), jsx(_$$c$, {
      value: ColorFormatEnum.CSS,
      recordingKey: generateRecordingKey(l, "cssOption")
    }), jsx(_$$c$, {
      value: ColorFormatEnum.HSL,
      recordingKey: generateRecordingKey(l, "hslOption")
    }), jsx(_$$c$, {
      value: ColorFormatEnum.HSB,
      recordingKey: generateRecordingKey(l, "hsvOption")
    })]
  });
}
function E({
  colorFormat: e,
  onColorFormatChange: t,
  selectClassName: r,
  recordingKey: i
}) {
  let l = [ColorFormatEnum.HEX, ColorFormatEnum.RGB, ColorFormatEnum.CSS, ColorFormatEnum.HSL, ColorFormatEnum.HSB].map(e => jsx(y, {
    colorFormat: e
  }, e));
  return jsx("div", {
    className: c()(NC, jS, r),
    children: jsxs(SelectGroupLabel, {
      value: String(e),
      onChange: e => t(Number(e)),
      recordingKey: generateRecordingKey(i, "colorFormatSelect"),
      children: [jsx(SelectSeparator, {
        label: jsx(HiddenLabel, {
          children: $$m0.format(e)
        }),
        "aria-label": getI18nString("fullscreen.properties_panel.color_picker.color_format.aria_label")
      }), jsx(SelectContainer, {
        children: l
      })]
    })
  });
}
function y({
  colorFormat: e
}) {
  return jsx(SelectOptionReset, {
    value: String(e),
    children: $$m0.format(e)
  });
}
export const F = $$m0;
export const p = $$g1;