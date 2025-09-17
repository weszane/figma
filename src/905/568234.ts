import { jsx } from "react/jsx-runtime";
import { SecureLink } from "../figma_app/637027";
import { renderI18nText, getI18nString } from "../905/303541";
import { ResourceLicenseUrl } from "../figma_app/350203";
import { HubTypeEnum } from "../figma_app/45218";
import { A as _$$A } from "../905/794518";
import { Jm } from "../905/599844";
function c({
  link: e
}) {
  return jsx(SecureLink, {
    href: e,
    target: "_blank",
    className: Jm,
    trusted: !0,
    children: renderI18nText("community.learn_more")
  });
}
export function $$u0({
  resourceType: e,
  isPaid: t = !1
}) {
  return jsx(_$$A, {
    label: getI18nString("community.publishing.license"),
    children: jsx("div", {
      children: t ? renderI18nText("community.publishing.community_paid_resource_license", {
        learnMoreLink: jsx(c, {
          link: ResourceLicenseUrl.PAID_RESOURCE_LICENSE
        })
      }) : e === HubTypeEnum.HUB_FILE ? renderI18nText("community.publishing.creative_commons_license", {
        learnMoreLink: jsx(c, {
          link: ResourceLicenseUrl.FREE_HUB_FILE_LICENSE
        })
      }) : renderI18nText("community.publishing.community_free_resource_license", {
        learnMoreLink: jsx(c, {
          link: ResourceLicenseUrl.FREE_PLUGIN_LICENSE
        })
      })
    })
  });
}
export const A = $$u0;