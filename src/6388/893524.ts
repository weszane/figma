import { jsxs, jsx } from "react/jsx-runtime";
import { A } from "../905/920165";
import { generateRecordingKey } from "../figma_app/878298";
import { AutoInteractableWrapper } from "../905/277716";
import { isInvalidValue, isValidValue } from "../905/216495";
export function $$a0({
  value: e,
  min: t,
  max: l,
  step: a,
  bigStep: d,
  hints: c,
  onChange: u,
  ariaLabel: x,
  numberInput: h,
  sliderTrackableName: p,
  recordingKey: g
}) {
  return jsxs("div", {
    className: "slides_slider_input_row--sliderInputRow--Z9EzC ui3_rows--_row--DnZFk ui3_rows--_grid--cP2Wu",
    children: [jsx("div", {
      className: "slides_slider_input_row--slider--M8t1y",
      children: jsx(AutoInteractableWrapper, {
        name: p,
        children: jsx(A, {
          "aria-label": x,
          bigStep: d,
          hints: c,
          max: l,
          min: t,
          mixed: isInvalidValue(e),
          onChange: u,
          rangeAnchor: t,
          recordingKey: generateRecordingKey(g, "slider"),
          step: a,
          value: isValidValue(e) ? e : 0
        })
      })
    }), jsx("div", {
      className: "slides_slider_input_row--input--E4qTs",
      children: h
    })]
  });
}
export const K = $$a0;