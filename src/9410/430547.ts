import { jsx } from "react/jsx-runtime";
import { $n } from "../905/521428";
import { e as _$$e } from "../905/149844";
import { useAtomWithSubscription } from "../figma_app/27355";
import { o as _$$o } from "../9410/935965";
import { getI18nString, renderI18nText } from "../905/303541";
import { Ib } from "../905/129884";
import { MB } from "../figma_app/835688";
import { uu } from "../7222/396421";
export let $$p1 = "toolbar-add-slide-button";
export function $$h0() {
  let e = useAtomWithSubscription(_$$o);
  let {
    toggleTemplatePicker
  } = uu();
  return e ? null : jsx($n, {
    onClick: toggleTemplatePicker,
    iconPrefix: jsx(_$$e, {}),
    variant: "secondary",
    recordingKey: "toolbar.addSlideButton",
    htmlAttributes: {
      "data-testid": "addSlideButton",
      "data-element-target": $$p1,
      "data-onboarding-key": MB,
      "data-tooltip": getI18nString("slides.carousel.add-slide-from-template"),
      "data-tooltip-type": Ib.TEXT,
      "data-fullscreen-intercept": !0
    },
    children: renderI18nText("slides.carousel.new_slide")
  });
}
export const R = $$h0;
export const l = $$p1;