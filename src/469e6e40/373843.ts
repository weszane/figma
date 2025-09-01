import { jsx } from "react/jsx-runtime";
import { CY } from "../figma_app/637027";
import { tx, t as _$$t } from "../905/303541";
import { jQ } from "../5430/920085";
var l = (e => (e.FREE_HUB_FILE_LICENSE = "https://creativecommons.org/licenses/by/4.0/", e.FREE_RESOURCE_LICENSE = "https://www.figma.com/community-free-resource-license/", e.PAID_RESOURCE_LICENSE = "https://www.figma.com/community-paid-resource-license/", e.APPLE_RESOURCE_LICENSE = "https://developer.apple.com/apple-design-resources-license/", e))(l || {});
export function $$o0({
  isMonetizedResource: e,
  isHubFile: t,
  isAppleResource: a,
  isFigmaResource: s
}) {
  return s ? null : jsx("div", {
    className: jQ,
    children: tx("community.detail_view.licensed_under_license_type", {
      licenseType: jsx($$d1, {
        isMonetizedResource: e,
        isHubFile: t,
        isAppleResource: a
      })
    })
  });
}
export function $$d1({
  isMonetizedResource: e,
  isHubFile: t,
  isAppleResource: a
}) {
  let r;
  let l = {
    "https://creativecommons.org/licenses/by/4.0/": "CC BY 4.0",
    "https://www.figma.com/community-free-resource-license/": _$$t("community.detail_view.free_plugin_license"),
    "https://www.figma.com/community-paid-resource-license/": _$$t("community.detail_view.paid_resource_license"),
    "https://developer.apple.com/apple-design-resources-license/": _$$t("community.detail_view.apple_resource_license")
  };
  r = a ? "https://developer.apple.com/apple-design-resources-license/" : e ? "https://www.figma.com/community-paid-resource-license/" : t ? "https://creativecommons.org/licenses/by/4.0/" : "https://www.figma.com/community-free-resource-license/";
  return jsx(CY, {
    href: r,
    trusted: !0,
    children: l[r]
  });
}
export const F = $$o0;
export const x = $$d1;