import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { az } from "../905/449184";
import { clearPaymentFlowData } from "../figma_app/169182";
import { On } from "../9420/975542";
import { tx, t as _$$t } from "../905/303541";
import { _l } from "../figma_app/976345";
import { sf } from "../905/929976";
import { c as _$$c } from "../905/370443";
import { $z } from "../figma_app/831799";
import { Al } from "../9420/394825";
import { iZ } from "../905/372672";
import { OI, Mt } from "../c5e2cae0/2942";
import { Ju } from "../905/712921";
import { tY, tn } from "../figma_app/831101";
import { SC, Sc, h5, ck, jX } from "../figma_app/707808";
import { Nd, N6 } from "../figma_app/81441";
if (443 == require.j) {}
function j(e) {
  return jsx($z, {
    type: "button",
    className: Nd,
    trackingProperties: {
      trackingDescriptor: _$$c.CANCEL
    },
    onClick: e.onClick,
    dataTestId: "upgrade-breadcrumb-menu-cancel",
    children: tx("pro_cart.breadcrumbs.cancel")
  });
}
var S = (e => (e[e.PLAN_COMPARISON = 0] = "PLAN_COMPARISON", e[e.CREATE_TEAM = 1] = "CREATE_TEAM", e[e.ADD_COLLABORATORS = 2] = "ADD_COLLABORATORS", e[e.ADJUST_EDITORS = 3] = "ADJUST_EDITORS", e[e.SET_EDITORS = 4] = "SET_EDITORS", e[e.PAYMENT_AND_ADDRESS = 5] = "PAYMENT_AND_ADDRESS", e[e.CONFIRM_PAY = 6] = "CONFIRM_PAY", e))(S || {});
function T(e, t, a, s) {
  let r = t === tY.STUDENT;
  let l = [];
  switch (e) {
    case SC.CREATE_AND_UPGRADE:
      l.push(0);
      l.push(1);
      r ? l.push(4) : a || (l.push(4), l.push(5));
      l.push(6);
      break;
    case SC.UPGRADE_EXISTING_TEAM:
      s === Sc.TEAM ? (l.push(3), r || l.push(5)) : r ? (l.push(0), l.push(3)) : a ? l.push(0) : (l.push(0), l.push(4), l.push(5));
      l.push(6);
      break;
    case SC.CREATE:
      l.push(1);
      l.push(2);
      l.push(0);
      s === Sc.TEAM && (r ? l.push(4) : a || (l.push(4), l.push(5)), l.push(6));
      break;
    default:
      throwTypeError(e);
  }
  return l.map(e => function (e) {
    switch (e) {
      case 0:
        return {
          step: tn.PLAN_COMPARISON,
          text: _$$t("pro_cart.breadcrumbs.choose_plan")
        };
      case 1:
        return {
          step: tn.CREATE_TEAM,
          text: _$$t("pro_cart.breadcrumbs.create_team")
        };
      case 2:
        return {
          step: tn.ADD_COLLABORATORS,
          text: _$$t("pro_cart.breadcrumbs.add_team_members")
        };
      case 3:
        return {
          step: tn.CHOOSE_PLAN,
          text: _$$t("pro_cart.breadcrumbs.adjust_editors.seat_rename")
        };
      case 4:
        return {
          step: tn.CHOOSE_PLAN,
          text: _$$t("pro_cart.breadcrumbs.set_editors.seat_rename")
        };
      case 5:
        return {
          step: tn.PAYMENT_AND_ADDRESS,
          text: _$$t("pro_cart.breadcrumbs.payment_information")
        };
      case 6:
        return {
          step: tn.CONFIRM_PAY,
          text: _$$t("pro_cart.breadcrumbs.review")
        };
    }
  }(e));
}
export function $$N0(e, t, a, s, r, i) {
  let l = T(t, a, s, r).map(e => e.step);
  let n = l.indexOf(e);
  i = i || l[0];
  return -1 === n ? i : l[n + 1];
}
export function $$b1(e) {
  let {
    selectedView
  } = e;
  let {
    teamId,
    paymentStep,
    teamFlowType
  } = t;
  let _ = useDispatch();
  let u = useSelector(e => e.payment.billingPeriod);
  let S = iZ()?.id;
  let N = T(teamFlowType, u, useSelector(e => e.payment.promo), e.selectedView.planType || Sc.UNDETERMINED);
  let b = N.findIndex(e => e.step === paymentStep);
  return jsxs("div", {
    className: N6,
    "data-testid": "cart-breadcrumb-menu-pro",
    children: [jsx(j, {
      onClick: () => {
        (clearPaymentFlowData(), e.isCampfireCart ? OI(_) : Mt(_), h5(teamFlowType) && null === teamId && Al(S), S) ? teamId && (!selectedView.previousView || "fullscreen" !== selectedView.previousView.view) ? _(_l({
          workspace: {
            userId: S,
            teamId,
            orgId: null
          },
          view: {
            view: "recentsAndSharing"
          }
        })) : _(sf(selectedView.previousView || {
          view: "recentsAndSharing"
        })) : _(sf(selectedView.previousView || (teamId ? {
          view: "team",
          teamId
        } : {
          view: "recentsAndSharing"
        })));
        selectedView.callbackOnClose?.();
      }
    }), N.map((r, n) => jsx(On, {
      selected: paymentStep === r.step,
      number: n + 1,
      text: r.text,
      canClick: n < b,
      lightText: !0,
      onClick: () => {
        az.trackDefinedEvent("monetization_upgrades.checkout_breadcrumb_navigation", {
          fromStep: paymentStep,
          toStep: r.step,
          tier: Ju.PRO,
          isCampfireCart: !!e.isCampfireCart,
          teamId: teamId ?? void 0
        });
        _(sf({
          ...selectedView,
          paymentStep: r.step,
          billingPeriod: u === tY.UNSPECIFIED ? void 0 : u,
          planType: ck(teamFlowType, r.step) ? Sc.UNDETERMINED : selectedView.planType,
          teamFlowType: jX(teamFlowType) && r.step === tn.PLAN_COMPARISON ? SC.CREATE_AND_UPGRADE : selectedView.teamFlowType
        }));
      }
    }, r.text))]
  });
}
export const kR = $$N0;
export const vU = $$b1;