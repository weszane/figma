import { jsx } from "react/jsx-runtime";
import { memo, useCallback } from "react";
import { setupToggleButton } from "../905/167712";
import { useAtomWithSubscription } from "../figma_app/27355";
import { y } from "../1156/673497";
import { getI18nString } from "../905/303541";
let a = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M11.293 11.293a1 1 0 0 1 1.059-.23l8 3 .146.07a1 1 0 0 1-.102 1.785l-.154.052-3.418.854-.854 3.418a1 1 0 0 1-1.906.11l-3-8a1 1 0 0 1 .23-1.06m-2.11 5.968a.49.49 0 0 1 .642-.25c.248.103.385.386.282.634L9.16 19.93a.5.5 0 0 1-.923-.384zM15 20l1-4 4-1-8-3zm-8.782-6.242c.248-.103.53.032.634.28a.49.49 0 0 1-.25.643l-2.282.946a.5.5 0 0 1-.382-.924zm-2.552-5.25a.5.5 0 0 1 .654-.27l2.279.944a.49.49 0 0 1 .25.643c-.104.248-.386.383-.634.28l-2.278-.943a.5.5 0 0 1-.27-.653m15.88-.27a.5.5 0 0 1 .382.924l-2.28.944c-.248.103-.53-.033-.634-.28a.49.49 0 0 1 .25-.644zM8.508 3.668a.5.5 0 0 1 .653.27l.943 2.277c.102.248-.033.53-.28.633a.49.49 0 0 1-.643-.25L8.238 4.32a.5.5 0 0 1 .271-.653m6.193.27a.5.5 0 0 1 .924.382l-.944 2.278a.49.49 0 0 1-.643.25c-.248-.103-.383-.385-.28-.633z"
    })
  });
});
export function $$d0({
  disabled: e,
  componentPreview: t,
  asLargeVariant: n,
  onboardingKey: d,
  showTooltipAbove: u,
  codeInstanceGuid: x
}) {
  let m = useAtomWithSubscription(t.directManipulationEditor.directManipulationEnabledAtom);
  let h = useCallback(() => {
    t.setDirectManipulationEnabled({
      enabled: !m,
      codeInstanceGuid: x
    });
  }, [t, m, x]);
  let g = n ? y : setupToggleButton;
  let p = jsx(a, {});
  return jsx(g, {
    "aria-label": getI18nString("figmake.chat.click_to_inspect.label"),
    checked: m,
    disabled: e,
    htmlAttributes: {
      "data-onboarding-key": d,
      "data-tooltip-show-above": u || void 0,
      "data-tooltip-show-below": !u || void 0
    },
    offIcon: p,
    onChange: h,
    onIcon: p,
    variant: "highlighted"
  });
}
export const l = $$d0;