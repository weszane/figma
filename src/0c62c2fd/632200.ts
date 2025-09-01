import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { memo } from "react";
import { wA } from "../vendor/514228";
import n from "classnames";
import { tM, qM } from "../figma_app/637027";
import { tx, t as _$$t } from "../905/303541";
import { l as _$$l } from "../905/192768";
import { Ce, to } from "../905/156213";
import { Wc } from "../figma_app/482142";
import { OJ } from "../905/519092";
import { Dy, v0, hF, pL } from "../905/289198";
var o = n;
let f = memo(function (e) {
  let t = wA();
  let {
    teamId,
    billingEndDate
  } = e.modalShown.data;
  let n = e.teams[teamId];
  let f = () => {
    t(Ce());
  };
  let g = billingEndDate ? jsxs(Fragment, {
    children: [tx("confirm_downgrade.team_name_will_be_downgraded_to_our_free_starter_plan", {
      teamName: n?.name
    }), " ", tx("confirm_downgrade.any_seats_you_add", {
      billingEndDate
    })]
  }) : tx("confirm_downgrade.on_your_next_billing_date_team_name_will_be_downgraded_to_our_free_starter_plan", {
    teamName: n?.name
  });
  return jsx(OJ, {
    onClose: f,
    title: _$$t("confirm_downgrade.cancel_professional_plan"),
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
        children: [jsx(tM, {
          onClick: f,
          children: tx("confirm_downgrade.go_back")
        }), jsx(qM, {
          className: pL,
          onClick: () => {
            t(Wc({
              teamId
            }));
            t(to({
              type: _$$l()
            }));
          },
          children: tx("confirm_downgrade.finish_cancellation")
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