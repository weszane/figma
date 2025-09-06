import { jsx } from "react/jsx-runtime";
import { a as _$$a } from "../905/558168";
import { Q } from "../figma_app/447352";
import { getI18nString } from "../905/303541";
import { lJ } from "../905/275640";
import { Xs } from "../figma_app/98483";
import { S2 } from "../figma_app/328423";
import { EX } from "../figma_app/709323";
import { eN } from "../905/331848";
export function $$p0({
  disabled: e,
  forwardedRef: t,
  useSingleRadiusIcon: r
}) {
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = Xs();
  let [h, m] = lJ("cornerRadius");
  let g = eN({
    min: 0,
    max: 200
  });
  return jsx(EX, {
    ariaLabel: getI18nString("fullscreen.properties_panel.transform_panel.corner_radius"),
    bigStep: bigNudgeAmount,
    dataTooltip: getI18nString("fullscreen.properties_panel.transform_panel.corner_radius"),
    disabled: e || void 0 === h,
    forwardedRef: t,
    fullWidth: !0,
    icon: r ? jsx(_$$a, {}) : jsx(Q, {}),
    isTokenizable: !0,
    min: 0,
    mixedMathHandler: S2,
    onValueChange: m,
    sliderMax: 200,
    sliderValueTransform: g,
    step: smallNudgeAmount,
    value: h ?? 0
  });
}
export const U = $$p0;