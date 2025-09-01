import { jsx } from "react/jsx-runtime";
import n from "classnames";
import { e6 } from "../figma_app/617427";
import { HM } from "../905/190597";
var a = n;
export function $$l0({
  onClick: e,
  autoFocus: t,
  children: i,
  trackingEventName: n,
  trackingProperties: l,
  large: d
}) {
  return jsx(e6, {
    className: a()({
      [HM]: !0,
      "connector_modal_cta_button--button--mhvSu text--fontPos12Whyte---tkNx text--_fontBaseWhyte--efAjI": !0,
      "connector_modal_cta_button--buttonLarge--4RXeh text--fontPos14Whyte--pEiDq text--_fontBaseWhyte--efAjI": d
    }),
    onClick: e,
    htmlAttributes: {
      autoFocus: t
    },
    trackingEventName: n,
    trackingProperties: l,
    children: i
  });
}
export const J = $$l0;