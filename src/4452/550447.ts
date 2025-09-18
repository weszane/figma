import { useCallback, useEffect, useState } from 'react';
import { ViewAccessTypeEnum } from '../905/513035';
import { k as _$$k } from '../4452/48052';
import { D3 } from '../4452/846771';
import { isNullish } from '../figma_app/95419';
import { Xf } from '../figma_app/153916';
import { FOrganizationLevelType } from '../figma_app/421473';
import { un } from '../figma_app/457899';
import { CurrencyFormatter } from '../figma_app/514043';
import { setupDynamicConfigHandler } from '../figma_app/594947';
import { isProrationBillingEnabledForCurrentPlan } from '../figma_app/618031';
import { I1 } from '../figma_app/990058';
import { useSelector, useDispatch } from 'react-redux';
export function $$h0(e, t) {
  let a = useDispatch();
  let {
    getDynamicConfig
  } = setupDynamicConfigHandler('disable_cost_messaging_config');
  let {
    seatAvailability
  } = _$$k(e);
  let f = isProrationBillingEnabledForCurrentPlan();
  let [v, b] = useState();
  let y = e.key.type === FOrganizationLevelType.ORG;
  let j = Xf(e.key.parentId, y);
  let I = useSelector(e => e.teamBilling);
  let E = y ? j.data?.currency : I.summary.currency;
  useEffect(() => {
    async function s() {
      b(await a(I1({
        orgId: e?.key.parentId ?? '',
        userId: t?.userId ?? ''
      })));
    }
    y && s();
  }, [a, y, e?.key.parentId, e?.key.type, t?.userId]);
  let S = (y ? v?.active_seat_type?.key : t?.currentSeat.billableProductKey) ?? ViewAccessTypeEnum.VIEW;
  let T = y ? void 0 : t?.currentSeat.billingInterval;
  let A = un({
    planKey: e.key,
    currentSeatType: S,
    currentSeatBillingInterval: T,
    enabled: !!E
  });
  return {
    calculateCostForSeatTypeIncrease: useCallback(() => {
      let e = t?.billableProductKey;
      let a = seatAvailability[e] ?? !1;
      if (getDynamicConfig().get(t?.email ?? '', !1)) {
        return {
          price: null,
          reason: D3.COST_MESSAGING_DISABLED
        };
      }
      if (void 0 === E) {
        return {
          price: null,
          reason: D3.MISSING_CURRENCY
        };
      }
      if (A.status !== 'loaded' || A.data === null) return;
      if (a) {
        return {
          price: null,
          reason: D3.AVAILABLE_SEAT
        };
      }
      if (!f) {
        return {
          price: null,
          reason: D3.PRORATION_NOT_ENABLED
        };
      }
      let s = A.data[e]?.amount;
      return isNullish(s) ? {
        price: null,
        reason: D3.MISSING_PRICE
      } : {
        price: new CurrencyFormatter(E).formatMoney(s, {
          showCents: !1
        })
      };
    }, [t?.billableProductKey, t?.email, seatAvailability, getDynamicConfig, E, A.status, A.data, f]),
    status: A.status
  };
}
export const n = $$h0;