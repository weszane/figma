import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { memo } from "react";
import { useDispatch } from "react-redux";
import n from "classnames";
import { ButtonSecondaryTracked, ButtonNegativeTracked } from "../figma_app/637027";
import { renderI18nText, getI18nString } from "../905/303541";
import { l as _$$l } from "../905/192768";
import { hideModal, showModalHandler } from "../905/156213";
import { cancelOrDowngradeTeamThunk } from "../figma_app/482142";
import { HeaderModal } from "../905/519092";
import { Dy, v0, hF, pL } from "../905/289198";
var o = n;
let f = memo(function (e) {
  let t = useDispatch();
  let {
    teamId,
    billingEndDate
  } = e.modalShown.data;
  let n = e.teams[teamId];
  let f = () => {
    t(hideModal());
  };
  let g = billingEndDate ? jsxs(Fragment, {
    children: [renderI18nText("confirm_downgrade.team_name_will_be_downgraded_to_our_free_starter_plan", {
      teamName: n?.name
    }), " ", renderI18nText("confirm_downgrade.any_seats_you_add", {
      billingEndDate
    })]
  }) : renderI18nText("confirm_downgrade.on_your_next_billing_date_team_name_will_be_downgraded_to_our_free_starter_plan", {
    teamName: n?.name
  });
  return jsx(HeaderModal, {
    onClose: f,
    title: getI18nString("confirm_downgrade.cancel_professional_plan"),
    minWidth: 344,
    maxWidth: 344,
    dataTestId: "downgrade-confirmation-modal",
    fixedTop: !0,
    children: jsxs("div", {
      className: Dy,
      children: [jsx("p", {
        children: g
      }), jsxs("div", {
        className: o()(v0, hF),
        children: [jsx(ButtonSecondaryTracked, {
          onClick: f,
          children: renderI18nText("confirm_downgrade.go_back")
        }), jsx(ButtonNegativeTracked, {
          className: pL,
          onClick: () => {
            t(cancelOrDowngradeTeamThunk({
              teamId
            }));
            t(showModalHandler({
              type: _$$l()
            }));
          },
          children: renderI18nText("confirm_downgrade.finish_cancellation")
        })]
      })]
    })
  });
});
export function $$g0(e) {
  return jsx(f, {
    ...e
  });
}
export const ConfirmDowngradeModal = $$g0;