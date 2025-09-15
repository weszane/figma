import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { nD } from "../figma_app/416935";
import { useLatestRef } from "../figma_app/922077";
import { getPaymentFlowData } from "../figma_app/169182";
import { XHR } from "../905/910117";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { sx as _$$sx } from "../figma_app/307841";
import { sf } from "../905/929976";
import { loadingStateDelete } from "../figma_app/714946";
import { eK, i as _$$i, M2, Lo, $h, yy, Ef, qU, Je, js, Az } from "../figma_app/482142";
import { Xw } from "../905/584989";
import { N_ } from "../905/332483";
import { FFileType } from "../figma_app/191312";
import { UpgradeSteps, SubscriptionType } from "../figma_app/831101";
import { D } from "../905/347702";
import { lX, nt } from "../9420/394825";
import { selectCurrentUser } from "../905/372672";
import { GH } from "../905/18797";
import { buildUserRecordsWithPlanStatus, countUsersWithPaidAccess, getAnnualValue, getMonthlyValue } from "../figma_app/345997";
let $$b2 = D(({
  teamId: e,
  canSeeBillingAddressExp: t
}) => {
  let a = useDispatch();
  let p = useSelector(e => e.loadingState);
  let x = useSelector(t => e ? t.teamUserByTeamId[e] : null);
  let y = useSelector(e => e.selectedView);
  let b = selectCurrentUser();
  let [w, A] = useState(!0);
  let I = useLatestRef(e);
  let k = _$$sx();
  let P = Xw.loadingKeyForPayload({
    teamId: e
  });
  let M = GH(p, P);
  let R = getPaymentFlowData();
  useEffect(() => {
    a(Xw({
      teamId: e
    }));
  }, [a, e]);
  let O = function () {
    let e = useDispatch();
    return useCallback(t => {
      trackEventAnalytics("Loaded Saved Cart State", {
        teamId: t.teamId,
        lastSavedAt: t.updatedAt
      });
      e(eK(t));
    }, [e]);
  }();
  useEffect(() => {
    async function s(t) {
      try {
        let s = await XHR.post("/api/subscriptions/teams/calculate_estimate", {
          ...t,
          team_id: e
        });
        a(_$$i({
          taxes: s.data.meta.estimate
        }));
      } catch (e) {
        a(FlashActions.error(getI18nString("payments.errors.estimate_calculation_error")));
        a(sf({
          ...y,
          paymentStep: UpgradeSteps.PAYMENT_AND_ADDRESS
        }));
      }
      A(!1);
    }
    if (void 0 === I || I === e || w || ($$E0(a), A(!0)), (!e || M) && w) {
      let n = buildUserRecordsWithPlanStatus(x, b);
      let d = Object.entries(n).map(([e, t]) => {
        if (nD(t.email || "")) return e;
      }).filter(e => !!e);
      a(M2({
        figmaEmailTeamUsers: d
      }));
      let o = lX({
        teamId: e,
        userId: b?.id
      });
      if (o) {
        o.editorStatusChanges = nt(o.editorStatusChanges, n);
        let l = countUsersWithPaidAccess(n, o.editorStatusChanges, FFileType.DESIGN);
        let c = countUsersWithPaidAccess(n, o.editorStatusChanges, FFileType.WHITEBOARD);
        let m = l + o.numEmptyDesignSeats;
        let _ = c + o.numEmptyWhiteboardSeats;
        if (O({
          numDesignEditors: m,
          numWhiteboardEditors: _,
          editorStatusChanges: o.editorStatusChanges,
          teamId: e,
          updatedAt: o.updatedAt,
          cartSelections: o.cartSelections
        }), R) {
          var r;
          r = R.billing_period;
          let e = SubscriptionType[SubscriptionType[r]];
          let i = t ? {
            billing_address: R.billing_address,
            shipping_address: R.shipping_address || R.billing_address
          } : null;
          a(Lo({
            billingPeriod: e
          }));
          a($h({
            vatGstId: R.vat_gst_id
          }));
          a(yy({
            legalName: R.customer_legal_name || R.company_name,
            displayName: R.display_name
          }));
          a(Ef({
            regionalVatGstId: R.regional_vat_gst_id
          }));
          s({
            address: R.address,
            editor_status_changes: o.editorStatusChanges,
            figma_email_team_users: d,
            selected_currency: R.currency,
            annual_quantity: getAnnualValue(e, m),
            monthly_quantity: getMonthlyValue(e, m),
            annual_whiteboard_quantity: getAnnualValue(e, _),
            monthly_whiteboard_quantity: getMonthlyValue(e, _),
            vat_gst_id: R.vat_gst_id,
            regional_vat_gst_id: R.regional_vat_gst_id,
            ...i
          });
        } else {
          "teamUpgrade" === y.view && y.paymentStep === UpgradeSteps.CONFIRM_PAY && y.billingPeriod !== SubscriptionType.STUDENT && analyticsEventManager.trackDefinedEvent("monetization_upgrades.pro_checkout_confirmation_without_payment_flow_data", {
            isCampfireCart: k,
            teamId: e ?? void 0
          });
          A(!1);
        }
      } else A(!1);
    }
  }, [a, M, x, I, e, b, w, R, y, O, t, k]);
  useEffect(() => () => {
    e && C(a, e);
  }, [a, e]);
  return w;
});
let C = D((e, t) => {
  let a = Xw.loadingKeyForPayload({
    teamId: t
  });
  e(loadingStateDelete({
    key: a
  }));
});
export function $$w1(e) {
  e(qU({
    cartSelections: {
      countBySeatType: N_.dict(e => 0),
      selectedUserSeatTypes: {}
    }
  }));
}
export function $$E0(e) {
  e(Je({
    editorStatusChanges: {
      upgrade: {
        whiteboard: [],
        design: [],
        slides: [],
        sites: [],
        cooper: [],
        figmake: []
      },
      downgrade: {
        whiteboard: [],
        design: [],
        slides: [],
        sites: [],
        cooper: [],
        figmake: []
      }
    }
  }));
  e(js({
    numDesignEditors: 0
  }));
  e(Az({
    numWhiteboardEditors: 0
  }));
}
export const Mt = $$E0;
export const OI = $$w1;
export const Ud = $$b2;