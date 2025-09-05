import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { CY } from "../figma_app/637027";
import { T } from "../figma_app/257703";
import { t, tx } from "../905/303541";
import { sf } from "../905/929976";
import { g } from "../905/817247";
import { GN, RM } from "../905/441038";
function _(e) {
  let t = useDispatch();
  return jsx(CY, {
    onClick: () => {
      t(sf({
        view: "licenseGroup",
        subView: GN.ADMIN,
        licenseGroupId: e.billingGroupId,
        selectedTab: g(RM.MEMBERS)
      }));
    },
    className: "billing_group_dashboard_billing_banner--billingGroupLink--aRY-4",
    trusted: !0,
    children: e.billingGroupName
  });
}
export function $$u0(e) {
  return jsxs(Fragment, {
    children: [t("license_group_admin.billing_dashboard.billing_banner.review_these_billing_groups"), e.billingGroupsToBeReviewed.length <= 3 && tx("license_group_admin.billing_dashboard.billing_banner.billing_group_links", {
      billingGroupLinks: jsx(T, {
        children: e.billingGroupsToBeReviewed.map(e => jsx(_, {
          billingGroupId: e.id,
          billingGroupName: e.name
        }, e.id))
      })
    }), e.billingGroupsToBeReviewed.length > 3 && tx("license_group_admin.billing_dashboard.billing_banner.billing_group_links_plus", {
      count: e.billingGroupsToBeReviewed.length - 3,
      billingGroupLinks: jsx(T, {
        formatType: "unit",
        children: e.billingGroupsToBeReviewed.slice(0, 3).map(e => jsx(_, {
          billingGroupId: e.id,
          billingGroupName: e.name
        }, e.id))
      })
    })]
  });
}
export const Q = $$u0;