import { jsx } from "react/jsx-runtime";
import { s as _$$s } from "../cssbuilder/589278";
import { Ph } from "../905/160095";
import { renderI18nText } from "../905/303541";
import { UR } from "../figma_app/307841";
import { UpgradeAction } from "../905/370443";
export function $$o0() {
  return UR() ? jsx("p", {
    className: _$$s.mt8.colorTextSecondary.$,
    children: renderI18nText("checkout.purchase_summary.price_change.text", {
      link: jsx(Ph, {
        href: "https://help.figma.com/hc/articles/27468498501527#localized-currency",
        trackingProperties: {
          trackingDescriptor: UpgradeAction.UPDATED_PRICING_FOR_FULL_SEATS
        },
        newTab: !0,
        children: renderI18nText("checkout.purchase_summary.price_change.link")
      })
    })
  }) : null;
}
export const _ = $$o0;