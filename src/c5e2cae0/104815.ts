import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { _H } from "../figma_app/598111";
import { o as _$$o } from "../c5e2cae0/371580";
import { x as _$$x } from "../905/211326";
import { tx } from "../905/303541";
import { d as _$$d } from "../c5e2cae0/841217";
import { sf } from "../905/929976";
import { Ay } from "../figma_app/482142";
import { S_ } from "../5885/925885";
import { fu } from "../figma_app/831799";
import { LN } from "../figma_app/514043";
import { Ud } from "../c5e2cae0/2942";
export function $$g0(e) {
  let {
    selectedView,
    promo
  } = e;
  let g = useDispatch();
  let x = Ud({
    teamId: selectedView.teamId
  });
  let f = () => {
    _H();
    g(Ay({
      promo: null
    }));
    g(sf(e.selectedView.previousView || {
      view: "team",
      teamId: selectedView.teamId
    }));
  };
  let v = () => {
    g(S_({
      teamId: selectedView.teamId,
      teamName: selectedView.teamName,
      promoCode: promo?.code || "",
      onSuccess: f,
      onError: f
    }));
  };
  return promo ? jsx(fu, {
    name: "Redeem Promo Code > Confirm",
    properties: {
      teamId: selectedView.teamId
    },
    children: jsxs("div", {
      className: "promo_modals--promoReviewInner--O81Uu",
      children: [jsx("div", {
        className: "promo_modals--cancelRow--Zrs8S",
        children: jsx("button", {
          type: "button",
          className: "promo_modals--cancelButton--ho2Ks text--fontPos11--2LvXf text--_fontBase--QdLsd",
          onClick: f,
          children: tx("promo.promo_review.cancel")
        })
      }), jsx("div", {
        className: "promo_modals--promoReviewTitle--fatmf text--fontPos20--Bcz97 text--_fontBase--QdLsd",
        children: tx("promo.promo_review.redeem_your_days_of_free_professional_plan", {
          days: promo.promo_value
        })
      }), jsx("div", {
        className: "promo_modals--promoReviewDescription--uLn0D text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: tx("promo.promo_review.any_additional_editors_invited_to_selected_view_team_name_will_also_be_free_of_charge_for_the_next_days.seat_rename", {
          teamName: selectedView.teamName,
          days: promo.promo_value
        })
      }), jsx("div", {
        children: jsx(_$$x, {
          isLoading: x,
          children: () => jsx(_$$o, {
            children: jsx(_$$d, {
              selectedView,
              onClickConfirm: v,
              currency: LN(),
              canSeeBillingAddressExp: !1
            })
          })
        })
      })]
    })
  }) : (f(), null);
}
export const PromoReviewPage = $$g0;