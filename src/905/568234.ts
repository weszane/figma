import { jsx } from "react/jsx-runtime";
import { CY } from "../figma_app/637027";
import { tx, t as _$$t } from "../905/303541";
import { aY } from "../figma_app/350203";
import { bD } from "../figma_app/45218";
import { A as _$$A } from "../905/794518";
import { Jm } from "../905/599844";
function c({
  link: e
}) {
  return jsx(CY, {
    href: e,
    target: "_blank",
    className: Jm,
    trusted: !0,
    children: tx("community.learn_more")
  });
}
export function $$u0({
  resourceType: e,
  isPaid: t = !1
}) {
  return jsx(_$$A, {
    label: _$$t("community.publishing.license"),
    children: jsx("div", {
      children: t ? tx("community.publishing.community_paid_resource_license", {
        learnMoreLink: jsx(c, {
          link: aY.PAID_RESOURCE_LICENSE
        })
      }) : e === bD.HUB_FILE ? tx("community.publishing.creative_commons_license", {
        learnMoreLink: jsx(c, {
          link: aY.FREE_HUB_FILE_LICENSE
        })
      }) : tx("community.publishing.community_free_resource_license", {
        learnMoreLink: jsx(c, {
          link: aY.FREE_PLUGIN_LICENSE
        })
      })
    })
  });
}
export const A = $$u0;