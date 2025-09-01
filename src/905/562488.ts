import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { CY } from "../figma_app/637027";
import { tx } from "../905/303541";
import { bD } from "../figma_app/45218";
import { A as _$$A } from "../905/118358";
export function $$l0({
  resourceType: e,
  hasBeenPublishedAsPaid: t,
  isSubscription: i
}) {
  let l;
  if (t ? t && i && (l = tx("community.seller.price_can_only_be_increased_by_50_percent_once_every_30_days")) : l = e === bD.WIDGET ? tx("community.seller.when_you_publish_a_paid_resource_you_cant_make_it_free_again") : tx("community.seller.publish_disclaimer_for_paid_plugins"), !l) return jsx(Fragment, {});
  let d = jsxs(Fragment, {
    children: [l, " ", jsx(CY, {
      href: "https://help.figma.com/hc/articles/12067637274519",
      target: "_blank",
      trusted: !0,
      children: tx("community.seller.why_link")
    })]
  });
  return jsx(_$$A, {
    bannerContent: d
  });
}
export const A = $$l0;