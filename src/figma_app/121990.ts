import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { BannerInset } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { O } from "../905/969533";
import { WithTrackedPopupButtonPrimitive } from "../figma_app/617427";
import { TrackedLink } from "../905/160095";
import { getI18nString, renderI18nText } from "../905/303541";
import { JT } from "../figma_app/847597";
import { Z } from "../figma_app/903114";
import { UpgradeAction } from "../905/370443";
export function $$h0({
  seatType: e,
  userInfo: t,
  priceString: r
}) {
  let [h, m] = useState(!1);
  let g = jsx("div", {
    className: "x1g2dr8m xiqqdae xkezfkh x14kxzw3 x1giz659",
    children: getI18nString("file_permissions_modal.update_seat_tab.this_may_impact_your_costs")
  });
  let f = () => m(!h);
  let E = jsx(TrackedLink, {
    href: Z,
    trusted: !0,
    newTab: !0,
    trackingProperties: {
      trackingDescriptor: UpgradeAction.LEARN_MORE
    },
    children: getI18nString("file_permissions_modal.update_seat_tab.learn_more")
  });
  let y = r ? renderI18nText("file_permissions_modal.update_seat_tab.if_there_is_an_available_seat_proration_enabled", {
    userString: t,
    seatType: JT(e),
    priceString: r,
    learnMoreLink: E
  }) : renderI18nText("file_permissions_modal.update_seat_tab.if_there_is_an_available_seat_proration_not_enabled", {
    userString: t,
    seatType: JT(e),
    learnMoreLink: E
  });
  return jsx(BannerInset, {
    variant: "default",
    children: h ? jsxs(BannerMessage, {
      children: [jsxs(WithTrackedPopupButtonPrimitive, {
        onClick: f,
        trackingProperties: {
          trackingDescriptor: UpgradeAction.SEAT_COST_MESSAGING
        },
        className: "x78zum5 x1q0g3np x1qughib xh8yej3",
        children: [g, jsx(O, {
          className: "x19jd1h0"
        })]
      }), jsx("div", {
        className: "x1rmmofs",
        children: y
      })]
    }) : jsxs(WithTrackedPopupButtonPrimitive, {
      onClick: f,
      trackingProperties: {
        trackingDescriptor: UpgradeAction.SEAT_COST_MESSAGING
      },
      className: "x78zum5 x1q0g3np x1qughib xh8yej3",
      children: [jsx(BannerMessage, {
        children: g
      }), jsx(O, {})]
    })
  });
}
export const k = $$h0;