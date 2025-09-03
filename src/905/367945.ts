import { jsx } from "react/jsx-runtime";
import { throwTypeError } from "../figma_app/465776";
import { S } from "../905/274480";
import { J } from "../905/270045";
import { N } from "../905/438674";
import { tx, t } from "../905/303541";
import { U } from "../905/331038";
import { w } from "../905/113805";
import { Zc } from "../905/497882";
import { Zj, Z3, wC } from "../905/448440";
import { mr } from "../figma_app/45218";
import { __, tZ } from "../905/271611";
import { A as _$$A } from "../905/567946";
let f = e => {
  if (e && "validation" === e.type) switch (e.key) {
    case "AUTHOR_MUST_BE_USER":
      return tx("community.seller.you_can_only_publish_paid_resources_from_a_personal_profile", {
        learnMoreLink: jsx(y, {})
      });
    case "FREEMIUM_EXTENSION_MUST_BE_PAID":
      return t("community.seller.pricing_using_payments_api");
    case "FREEMIUM_REQUIRED_FOR_MIGRATION":
      return t("community.seller.freemium_required_for_migration");
    case "PRICE_EMPTY":
    case "PRICE_TOO_LOW":
    case "PRICE_TOO_HIGH":
    case "PRICE_NOT_WHOLE_NUMBER":
    case "PAID_RESOURCE_ALREADY_PUBLISHED":
    case "PRICE_INCREASE_OUT_OF_RANGE":
    case "PRICE_CANNOT_BE_INCREASED":
      break;
    default:
      return throwTypeError(e);
  }
};
let _ = e => {
  if (e) switch (e.key) {
    case "USER_IS_NOT_FILE_OWNER":
      return t("community.seller.only_explicit_owner_can_sell");
    case "USER_CANNOT_SELL_RESOURCE":
    case "CANNOT_SELL_PRIVATE_EXTENSION":
    case "USER_CANNOT_SELL_ON_COMMUNITY":
      return;
    case "UNABLE_TO_IDENTIFY_FILE_OWNER":
    case "FREE_RESOURCE_ALREADY_PUBLISHED":
      return t("community.seller.only_new_resources_can_be_sold_on_community");
    case "USER_AUTHOR_DISABLED_BY_ORG":
      return tx("community.seller.pricing_is_disabled_because_your_organization_does_not_allow", {
        learnMoreLink: jsx(y, {})
      });
    default:
      return throwTypeError(e.key);
  }
};
export function $$A0({
  priceField: e
}) {
  let {
    publishRoleField,
    existingResourceContent,
    localExtension
  } = e.deps;
  let o = publishRoleField && (!existingResourceContent || mr(existingResourceContent)) ? Zj({
    user: e.deps.user,
    publishRoleField,
    existingResourceContent,
    localExtension
  }) : Z3(e.deps);
  let A = w(e);
  let y = U(A, f);
  return o.some(e => ["USER_CANNOT_SELL_ON_COMMUNITY", "CANNOT_SELL_PRIVATE_EXTENSION"].includes(e.key)) ? null : jsx(_$$A, {
    label: t("community.publishing.monetization"),
    disabled: !Zc(e),
    error: y,
    afterErrorContent: o.length > 0 ? _(o[0]) : void 0,
    children: jsx(S, {
      label: jsx(J, {
        children: t("community.publishing.sell_this_resource_on_community")
      }),
      checked: wC(e),
      onChange: () => {
        Zc(e) && (wC(e) ? e.setValue(0) : (e.setValue(void 0), __(tZ.PRICE_INPUT)));
      },
      disabled: !Zc(e)
    })
  });
}
function y() {
  return jsx(N, {
    newTab: !0,
    href: "https://help.figma.com/hc/articles/12067637274519-About-selling-Community-resources",
    trusted: !0,
    children: t("general.learn_more")
  });
}
export const H = $$A0;