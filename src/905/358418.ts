import { jsx, jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { v } from "../905/442517";
import { createLabel } from "../figma_app/637027";
import { renderI18nText } from "../905/303541";
import { KindEnum } from "../905/129884";
import { zm, ad } from "../905/443375";
export function $$c0() {
  return jsx("div", {
    children: renderI18nText("community.seller.pricing")
  });
}
export function $$u1({
  on: e,
  disabled: t,
  onChange: i,
  tooltipText: c,
  tooltipMaxWidth: u = 224,
  toggleClassName: p
}) {
  let m = useId();
  return jsx("div", {
    className: zm,
    children: jsxs(createLabel, {
      className: ad,
      htmlFor: m,
      children: [renderI18nText("community.seller.sell_on_community"), jsx(v, {
        "data-testid": "manually-labeled-switch-checkbox",
        id: m,
        checked: e,
        disabled: t,
        onChange: (e, {
          event: t
        }) => {
          t.stopPropagation();
          i();
        },
        htmlAttributes: {
          "data-tooltip": c,
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip-max-width": u
        },
        className: p
      })]
    })
  });
}
export const Wq = $$c0;
export const nu = $$u1;