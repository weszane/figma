import { getFeatureFlags } from "../905/601108";
import { createRemovableAtomFamily, atom, useAtomWithSubscription } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { Xf } from "../figma_app/153916";
import { A as _$$A } from "../905/920142";
import { getInitialOptions } from "../figma_app/169182";
import { oA, Xm, gB } from "../905/723791";
import { CT } from "../figma_app/297957";
import { n as _$$n } from "../1577/959155";
import { FBillingModelType } from "../figma_app/191312";
import { OrgProductTermsEligibleInfo } from "../figma_app/43951";
import { D6, j_ } from "../figma_app/465071";
export let $$p1 = createRemovableAtomFamily(e => atom(t => e ? t(OrgProductTermsEligibleInfo.Query({
  orgId: e
})).transform(({
  org: e
}) => !!oA(e?.isSalesAssistedPlanProperty)?.value && !oA(e?.subscriptionShouldNotAutoRenewPlanProperty) && oA(e?.plan?.termsOfServiceAcceptanceByTermsKey)?.termsKey !== FBillingModelType.SEATS_MODEL_BILLING_2025) : resourceUtils.disabled()));
export function $$h0(e, t) {
  let i = CT();
  let o = Xf(e?.id);
  let _ = _$$n();
  let m = useAtomWithSubscription($$p1(e?.id ?? null));
  let h = D6("useProductTermsEligibility");
  let b = j_(h).unwrapOr(!1);
  let x = o.data?.analyze_data_contract_v2_start;
  let k = x ? _$$A(x) : null;
  let w = _$$A();
  let v = !!k && w.isBefore(k) && 90 >= k.diff(w, "day");
  let g = !!k && w.isBefore(k) && 30 >= k.diff(w, "day");
  let j = _$$A(getInitialOptions().analyze_data_flow_v2_until);
  let y = !!e && _$$A(e.created_at).isBefore(j);
  let C = oA(m);
  let N = getFeatureFlags().terms_of_service_may_2025_update;
  let A = !!(e?.id && (b || t) && y && v && i && C && (_ || N && g));
  return "loading" === o.status || "loading" === m.status || C?.status === "loading" ? Xm() : gB({
    isEligible: A,
    orgTermsInfo: {
      organizationName: e?.name ?? "organization",
      renewalDate: k
    }
  });
}
export const T = $$h0;
export const b = $$p1;