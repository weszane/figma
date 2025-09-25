import { jsx } from "react/jsx-runtime";
import { preventDefaultAndStopPropagation } from "../figma_app/753501";
export function $$a0({
  children: e,
  dataOnboardingKey: t
}) {
  return jsx("div", {
    className: "header_text--headerText--ZXIeN",
    onContextMenu: preventDefaultAndStopPropagation,
    "data-onboarding-key": t,
    children: e
  });
}
export const H = $$a0;