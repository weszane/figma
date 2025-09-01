import { jsxs, jsx } from "react/jsx-runtime";
import { generateRecordingKey } from "../figma_app/878298";
import { Uz, xH } from "../905/63728";
import { SX, Q0 } from "../905/487011";
import { NI } from "../905/278499";
import { r as _$$r } from "../905/189361";
import { B } from "../905/222272";
import { XG } from "../figma_app/360824";
export function $$u0({
  action: e,
  prompt: t,
  onChangePrompt: i,
  onRun: u,
  submitLabel: p,
  extraFooter: m,
  recordingKey: h,
  aiTrackingContext: g,
  minLength: f = 1,
  ariaLabel: _,
  disableSubmit: A,
  ...y
}) {
  return jsxs("div", {
    className: "x1hmxfdi x9f619",
    children: [jsx(XG, {
      ariaLabel: _,
      action: e,
      value: t,
      onChange: i,
      recordingKey: h,
      minLength: f,
      ...y
    }), jsxs(B, {
      fullWidth: !0,
      justify: "space-between",
      children: [jsx("div", {
        children: m
      }), jsx(_$$r, {
        shortcuts: [{
          key: Uz.ENTER,
          modifier: [xH.META]
        }],
        onAction: e => {
          g && SX({
            ...g,
            ...Q0(e),
            interaction: NI.GENERATE
          });
          u();
        },
        disabled: t.trim().length < f || A,
        recordingKey: generateRecordingKey(h, "enter"),
        children: p
      })]
    })]
  });
}
export const A = $$u0;