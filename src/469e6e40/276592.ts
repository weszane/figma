import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { CY } from "../figma_app/637027";
import { T } from "../figma_app/257703";
import { getI18nString, renderI18nText } from "../905/303541";
import { sf } from "../905/929976";
import { g } from "../905/817247";
import { UserRole, GroupType } from "../905/441038";
function _(e) {
  let t = useDispatch();
  return jsx(CY, {
    onClick: () => {
      t(sf({
        view: "licenseGroup",
        subView: UserRole.ADMIN,
        licenseGroupId: e.billingGroupId,
        selectedTab: g(GroupType.MEMBERS)
      }));
    },
    className: "billing_group_dashboard_billing_banner--billingGroupLink--aRY-4",
    trusted: !0,
    children: e.billingGroupName
  });
}
export function $$u0(e) {
  return jsxs(Fragment, {
    children: [getI18nString("license_group_admin.billing_dashboard.billing_banner.review_these_billing_groups"), e.billingGroupsToBeReviewed.length <= 3 && renderI18nText("license_group_admin.billing_dashboard.billing_banner.billing_group_links", {
      billingGroupLinks: jsx(T, {
        children: e.billingGroupsToBeReviewed.map(e => jsx(_, {
          billingGroupId: e.id,
          billingGroupName: e.name
        }, e.id))
      })
    }), e.billingGroupsToBeReviewed.length > 3 && renderI18nText("license_group_admin.billing_dashboard.billing_banner.billing_group_links_plus", {
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
