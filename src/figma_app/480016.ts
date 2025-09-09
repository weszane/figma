import { jsx } from "react/jsx-runtime";
import { createElement } from "react";
import a from "classnames";
import { generateRecordingKey } from "../figma_app/878298";
import { K0 } from "../figma_app/778125";
var s = a;
export function $$d0(e) {
  let {
    controls
  } = e;
  return jsx("div", {
    className: "segmented_button--root--BlK0T",
    children: controls.map((t, r) => {
      let {
        children,
        ...d
      } = t;
      return createElement(K0, {
        ...d,
        key: r,
        className: s()("segmented_button--button--HF0rV", {
          "segmented_button--disabled--Iawr-": d.disabled
        }),
        recordingKey: generateRecordingKey(e, d.recordingKey || "")
      }, jsx("span", {
        children
      }));
    })
  });
}
export const t = $$d0;