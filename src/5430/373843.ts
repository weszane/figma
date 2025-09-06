import { jsx } from "react/jsx-runtime";
import { CY } from "../figma_app/637027";
import { renderI18nText, getI18nString } from "../905/303541";
import { jQ } from "../5430/920085";
var a = (e => (e.FREE_HUB_FILE_LICENSE = "https://creativecommons.org/licenses/by/4.0/", e.FREE_RESOURCE_LICENSE = "https://www.figma.com/community-free-resource-license/", e.PAID_RESOURCE_LICENSE = "https://www.figma.com/community-paid-resource-license/", e.APPLE_RESOURCE_LICENSE = "https://developer.apple.com/apple-design-resources-license/", e))(a || {});
export function $$l0({
  isMonetizedResource: e,
  isHubFile: t,
  isAppleResource: r,
  isFigmaResource: i
}) {
  return i ? null : jsx("div", {
    className: jQ,
    children: renderI18nText("community.detail_view.licensed_under_license_type", {
      licenseType: jsx($$c1, {
        isMonetizedResource: e,
        isHubFile: t,
        isAppleResource: r
      })
    })
  });
}
export function $$c1({
  isMonetizedResource: e,
  isHubFile: t,
  isAppleResource: r
}) {
  let o;
  let a = {
    "https://creativecommons.org/licenses/by/4.0/": "CC BY 4.0",
    "https://www.figma.com/community-free-resource-license/": getI18nString("community.detail_view.free_plugin_license"),
    "https://www.figma.com/community-paid-resource-license/": getI18nString("community.detail_view.paid_resource_license"),
    "https://developer.apple.com/apple-design-resources-license/": getI18nString("community.detail_view.apple_resource_license")
  };
  o = r ? "https://developer.apple.com/apple-design-resources-license/" : e ? "https://www.figma.com/community-paid-resource-license/" : t ? "https://creativecommons.org/licenses/by/4.0/" : "https://www.figma.com/community-free-resource-license/";
  return jsx(CY, {
    href: o,
    trusted: !0,
    children: a[o]
  });
}
export const F = $$l0;
export const x = $$c1;