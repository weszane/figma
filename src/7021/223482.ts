import { jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { T1 } from "../figma_app/153916";
import { dayjs } from "../905/920142";
import { useSingleEffect } from "../905/791079";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { T as _$$T } from "../1577/951568";
import { SeatBillingTermsModal } from "../7021/149615";
import { postUserFlag } from "../905/985254";
import { getContractCurrency, setupPricesTransform } from "../905/84777";
import { e as _$$e } from "../905/621515";
import { collaboratorSet } from "../905/332483";
import { selectUserFlag } from "../905/940356";
import { FBillingModelType, FOrganizationLevelType } from "../figma_app/191312";
import { liveStoreInstance, getAtomMutate } from "../905/713695";
import { isBigmaEnabledSimple } from "../figma_app/336853";
import { ProductTierEnum, RenewalTermEnum } from "../905/712921";
import { N as _$$N } from "../figma_app/268271";
import { w as _$$w } from "../7021/108292";
import { OnboardingSequence } from "../905/152487";
import { kSi } from "../figma_app/6204";
let $$C1 = liveStoreInstance.Mutation(({
  planParentId: e,
  planType: t
}) => _$$w.updateTermsAcceptance({
  termsKey: FBillingModelType.SEATS_MODEL_BILLING_2025,
  planParentId: e,
  planType: t
}).then(() => {
  T1(e);
}));
let S = "seen_seat_billing_terms_modal";
export function $$$$k0({
  org: e
}) {
  let t = useDispatch();
  let a = getAtomMutate($$C1);
  let n = _$$T(e);
  let y = !!n?.data?.isEligible;
  let k = getContractCurrency({
    planParentId: e.id,
    planType: FOrganizationLevelType.ORG
  }, {
    enabled: y
  });
  let N = !!k.data;
  let q = setupPricesTransform({
    billableProductKeys: collaboratorSet,
    baseQuery: {
      tier: isBigmaEnabledSimple(e) ? ProductTierEnum.ENTERPRISE : ProductTierEnum.ORG,
      currency: k.data,
      renewalTerm: RenewalTermEnum.YEAR,
      unit: RenewalTermEnum.MONTH
    },
    options: {
      enabled: N
    }
  });
  let O = selectUserFlag(S);
  let E = e => t(postUserFlag({
    [S]: e
  }));
  let {
    isShowing,
    show,
    complete
  } = _$$e({
    overlay: kSi,
    priority: _$$N.HIGH_PRIORITY_MODAL
  }, [n]);
  if (useSingleEffect(() => {
    show({
      canShow: e => {
        let t = e.orgTermsInfo?.renewalDate;
        let a = !!t && 14 >= dayjs(t).diff(dayjs(), "day");
        return e.isEligible && (!O || a);
      }
    });
  }), "loaded" !== n.status || !k.data || !q.data) return null;
  let {
    orgTermsInfo
  } = n.data;
  return jsx(OnboardingSequence, {
    isShowing,
    children: jsx(SeatBillingTermsModal, {
      orgId: e?.id,
      organizationName: orgTermsInfo.organizationName,
      renewalDate: orgTermsInfo.renewalDate,
      isEnterprise: isBigmaEnabledSimple(e),
      onAccept: () => {
        e?.id && a({
          planParentId: e.id,
          planType: FOrganizationLevelType.ORG
        }).then(() => {
          t(VisualBellActions.enqueue({
            message: getI18nString("seat_billing_terms.modal.success")
          }));
        });
        complete();
      },
      onClose: () => {
        E(!0);
        complete();
      },
      open: isShowing,
      prices: q.data
    })
  });
}
export const k = $$$$k0;
export const l = $$C1;