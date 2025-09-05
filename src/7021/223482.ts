import { jsx } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { T1 } from "../figma_app/153916";
import { A } from "../905/920142";
import { h as _$$h } from "../905/207101";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { T as _$$T } from "../1577/951568";
import { SeatBillingTermsModal } from "../7021/149615";
import { b as _$$b } from "../905/985254";
import { vK, jv } from "../905/84777";
import { e as _$$e } from "../905/621515";
import { N_ } from "../905/332483";
import { f as _$$f } from "../905/940356";
import { FBillingModelType, FOrganizationLevelType } from "../figma_app/191312";
import { M4, gY } from "../905/713695";
import { kA } from "../figma_app/336853";
import { Ju, IX } from "../905/712921";
import { N as _$$N } from "../figma_app/268271";
import { w as _$$w } from "../7021/108292";
import { M } from "../905/152487";
import { kSi } from "../figma_app/6204";
let $$C1 = M4.Mutation(({
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
  let a = gY($$C1);
  let n = _$$T(e);
  let y = !!n?.data?.isEligible;
  let k = vK({
    planParentId: e.id,
    planType: FOrganizationLevelType.ORG
  }, {
    enabled: y
  });
  let N = !!k.data;
  let q = jv({
    billableProductKeys: N_,
    baseQuery: {
      tier: kA(e) ? Ju.ENTERPRISE : Ju.ORG,
      currency: k.data,
      renewalTerm: IX.YEAR,
      unit: IX.MONTH
    },
    options: {
      enabled: N
    }
  });
  let O = _$$f(S);
  let E = e => t(_$$b({
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
  if (_$$h(() => {
    show({
      canShow: e => {
        let t = e.orgTermsInfo?.renewalDate;
        let a = !!t && 14 >= A(t).diff(A(), "day");
        return e.isEligible && (!O || a);
      }
    });
  }), "loaded" !== n.status || !k.data || !q.data) return null;
  let {
    orgTermsInfo
  } = n.data;
  return jsx(M, {
    isShowing,
    children: jsx(SeatBillingTermsModal, {
      orgId: e?.id,
      organizationName: orgTermsInfo.organizationName,
      renewalDate: orgTermsInfo.renewalDate,
      isEnterprise: kA(e),
      onAccept: () => {
        e?.id && a({
          planParentId: e.id,
          planType: FOrganizationLevelType.ORG
        }).then(() => {
          t(F.enqueue({
            message: _$$t("seat_billing_terms.modal.success")
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