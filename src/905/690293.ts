import { jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { createRecordingCallback } from "../figma_app/878298";
import { getI18nString, renderI18nText } from "../905/303541";
import { isInvalidValue, MIXED_MARKER } from "../905/216495";
import { KindEnum } from "../905/129884";
import { $j } from "../figma_app/178475";
import { Xs } from "../figma_app/98483";
import { fn } from "../figma_app/811257";
import { Yq, sI } from "../figma_app/183248";
import { hF, QK } from "../figma_app/100987";
import { z } from "../905/282554";
let g = {
  smallNudgeAmount: .01,
  bigNudgeAmount: .1,
  scrubMultiplier: 1,
  wheelMultiplier: 1,
  postScrubMultiplier: .01,
  postBigNudgeAmount: 1,
  postWheelMultiplier: .1,
  resolution: .01
};
function f({
  disabled: e,
  widthOrHeight: t,
  scale: i,
  property: u,
  onScaleChange: f,
  onWidthOrHeightChange: _,
  recordingKey: A,
  forwardedRef: y,
  onKeyDown: b
}) {
  let v = "width" === u ? Yq.Width : Yq.Height;
  let I = useDispatch();
  let E = Xs();
  let x = isInvalidValue(t) ? g : {};
  let S = createRecordingCallback(A);
  return jsx($j, {
    className: z,
    "data-tooltip": "width" === u ? getI18nString("fullscreen.properties_panel.transform_panel.width") : getI18nString("fullscreen.properties_panel.transform_panel.height"),
    "data-tooltip-type": KindEnum.TEXT,
    dataTestId: `scale_panel.${u}`,
    disabled: e,
    dispatch: I,
    floatingPointFormat: void 0,
    forwardedRef: y,
    inputClassName: hF,
    min: isInvalidValue(t) ? sI : 1,
    mixedMathHandler: {
      getValue: () => i,
      onChange: (e, t, i) => {
        let n = t(e);
        Number.isNaN(n) || f(n, v, i);
      }
    },
    noBorderOnHover: !0,
    onKeyDown: b,
    onValueChange: (e, i) => {
      !Number.isNaN(e) && t && t !== MIXED_MARKER && _(e, i);
    },
    recordingKey: S(`${u}Input.input`),
    tooltipForScreenReadersOnly: !0,
    value: t || 0,
    ...E,
    ...x,
    children: jsx("span", {
      className: `${QK} svg`,
      children: "width" === u ? renderI18nText("fullscreen.properties_panel.transform_panel.w") : renderI18nText("fullscreen.properties_panel.transform_panel.h")
    })
  });
}
function _(e) {
  let {
    widthInputRef,
    onWidthInputKeyDown,
    width,
    onWidthChange,
    ...s
  } = e;
  return jsx(f, {
    ...s,
    property: "width",
    widthOrHeight: width,
    onWidthOrHeightChange: onWidthChange,
    onKeyDown: onWidthInputKeyDown,
    forwardedRef: widthInputRef
  });
}
function A(e) {
  let {
    heightInputRef,
    onHeightInputKeyDown,
    height,
    onHeightChange,
    ...s
  } = e;
  return jsx(f, {
    ...s,
    property: "height",
    widthOrHeight: height,
    onWidthOrHeightChange: onHeightChange,
    onKeyDown: onHeightInputKeyDown,
    forwardedRef: heightInputRef
  });
}
export function $$y0(e) {
  return jsx(fn, {
    leftLabel: getI18nString("fullscreen.properties_panel.transform_panel.width"),
    leftInput: jsx(_, {
      ...e
    }),
    rightLabel: getI18nString("fullscreen.properties_panel.transform_panel.height"),
    rightInput: jsx(A, {
      ...e
    }),
    icon: null
  });
}
export const f4 = $$y0;