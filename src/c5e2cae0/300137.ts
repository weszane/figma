import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { b as _$$b } from "../905/946806";
import { getFeatureFlags } from "../905/601108";
import { openWindow } from "../905/508367";
import { A } from "../905/920142";
import { getInitialOptions } from "../figma_app/169182";
import { isStudentValidated } from "../figma_app/141320";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { TrackingProvider, withTrackedClick } from "../figma_app/831799";
import { liveStoreInstance, IT } from "../905/713695";
import { Cn } from "../c5e2cae0/453906";
import { selectCurrentUser } from "../905/372672";
import { SubscriptionType } from "../figma_app/831101";
let g = liveStoreInstance.Query({
  fetch: async () => (await Cn.maintenancePoc1()).data.meta
});
export function $$v0(e) {
  if (!getFeatureFlags().campfire_cart_banner) return jsx(Fragment, {});
  let {
    isProCart,
    isCampfireCart
  } = e;
  return jsx("div", {
    style: styleBuilderInstance.$$if(isProCart, styleBuilderInstance.add({
      marginTop: "-16px"
    }).mb32, styleBuilderInstance.mt16).$$if(isCampfireCart, styleBuilderInstance.mt16.add({
      marginBottom: "40px"
    }), styleBuilderInstance.flex.justifyCenter.px16).$,
    children: jsx(y, {
      ...e
    })
  });
}
function y({
  billingPeriod: e = SubscriptionType.ANNUAL,
  isProCart: t,
  isReviewPage: a,
  isCampfireCart: h
}) {
  let v = selectCurrentUser();
  let y = function (e) {
    let {
      data,
      status
    } = function (e) {
      let [t] = IT(g(null), {
        enabled: getFeatureFlags().campfire_i18n_verbiage && e
      });
      return t;
    }(e);
    if ("loaded" === status && data?.strings.cart_banner) return {
      info: data.strings.cart_banner.cart_banner_info,
      edu_info: data.strings.cart_banner.cart_banner_edu_info
    };
  }(!0);
  let T = getInitialOptions().analyze_data_flow_v2_until;
  let N = isStudentValidated(v) && t ? y?.edu_info.replace(/\[BILLING_REMODEL_GA_DATE\]/g, A(T).format("MMMM D, YYYY")) : y?.info.replace(/\[NEXT_RENEWAL_DATE\]/g, j(e));
  let b = getI18nString("checkout.banner.price_change", {
    date: j(e)
  });
  return jsx(TrackingProvider, {
    name: "Campfire Cart Banner",
    children: jsxs("div", {
      className: cssBuilderInstance.flex.justifyBetween.itemsCenter.minH40.px8.flexGrow1.colorBgWarningTertiary.$,
      style: styleBuilderInstance.add({
        borderRadius: "13px"
      }).$$if(a, styleBuilderInstance.add({
        maxWidth: t ? "693px" : "758px"
      })).$,
      "data-testid": "campfire-cart-banner",
      children: [jsxs("div", {
        className: cssBuilderInstance.flex.itemsCenter.$,
        children: [jsx(_$$b, {}), jsx("p", {
          className: cssBuilderInstance.fontMedium.px4.$,
          children: h ? b : N
        })]
      }), jsx(S, {
        onClick: () => openWindow("https://help.figma.com/hc/articles/27468498501527", "_blank"),
        children: renderI18nText("campfire_banner.learn_more")
      })]
    })
  });
}
function j(e) {
  let t = new Date();
  t.setFullYear(t.getFullYear() + 1);
  let a = new Date();
  a.setFullYear(2025);
  a.getDate() >= 11 ? a.setMonth(2) : a.setMonth(3);
  return A(e === SubscriptionType.ANNUAL ? t : a).format("MMMM D, YYYY");
}
let S = withTrackedClick(function ({
  onClick: e,
  children: t
}) {
  return jsx("button", {
    className: "campfire_cart_banner--mockUI3Button--Aw9Vz",
    onClick: e,
    children: t
  });
});
export const W = $$v0;