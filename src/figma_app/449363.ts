import { jsxs, jsx } from "react/jsx-runtime";
import { SvgComponent } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { X2, Lt } from "../figma_app/808294";
import { hasFreemiumCode, isThirdPartyMonetized } from "../figma_app/45218";
import { KindEnum } from "../905/129884";
import { A } from "../6828/154709";
function p({
  publishedExtension: e,
  showTooltip: t
}) {
  if (!e.monetized_resource_metadata) return null;
  let r = X2(e.monetized_resource_metadata);
  return t ? jsxs("div", {
    "data-testid": "freemium-text",
    className: _$$s.flex.itemsCenter.gap4.$,
    "data-tooltip": r,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip-show-below": !0,
    "data-tooltip-show-immediately": !0,
    children: [jsx(TextWithTruncation, {
      fontSize: 11,
      children: renderI18nText("community.buyer.in_app_purchases")
    }), jsx(SvgComponent, {
      svg: A,
      className: _$$s.colorIconSecondary.$
    })]
  }) : jsx("div", {
    "data-testid": "freemium-text",
    children: jsx(TextWithTruncation, {
      fontSize: 11,
      children: renderI18nText("community.buyer.in_app_purchases")
    })
  });
}
function _({
  publishedExtension: e
}) {
  return e.monetized_resource_metadata ? jsx("div", {
    "data-testid": "free-trial-text",
    children: jsx(TextWithTruncation, {
      fontSize: 11,
      children: renderI18nText("community.resource.free_trial_days", {
        days: e.monetized_resource_metadata.trial_length_in_days
      })
    })
  }) : null;
}
function h({
  showTooltip: e
}) {
  return e ? jsxs("div", {
    "data-testid": "off-platform-text",
    className: _$$s.flex.itemsCenter.gap4.$,
    "data-tooltip": getI18nString("community.detail_view.resource_outside_of_figma"),
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip-show-below": !0,
    "data-tooltip-show-immediately": !0,
    children: [jsx(TextWithTruncation, {
      fontSize: 11,
      children: renderI18nText("community.detail_view.third_party_badge.off_platform")
    }), jsx(SvgComponent, {
      svg: A,
      className: _$$s.colorIconSecondary.$
    })]
  }) : jsx("div", {
    "data-testid": "off-platform-text",
    children: jsx(TextWithTruncation, {
      fontSize: 11,
      children: renderI18nText("community.detail_view.third_party_badge.off_platform")
    })
  });
}
export function $$m0(e) {
  return !!e && (hasFreemiumCode(e) || Lt({
    resource: e,
    payment: e.community_resource_payment
  }) || isThirdPartyMonetized(e));
}
export function $$$$g1({
  publishedExtension: e,
  showTooltip: t
}) {
  return hasFreemiumCode(e) ? jsx(p, {
    publishedExtension: e,
    showTooltip: t
  }) : Lt({
    resource: e,
    payment: e.community_resource_payment
  }) ? jsx(_, {
    publishedExtension: e
  }) : isThirdPartyMonetized(e) ? jsx(h, {
    showTooltip: t
  }) : null;
}
export const g = $$m0;
export const o = $$$$g1;