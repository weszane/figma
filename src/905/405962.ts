import { Iz } from "../figma_app/27355";
import { A } from "../905/920142";
import { Q } from "../905/467310";
import { D } from "../905/347702";
import { FOrganizationType } from "../figma_app/191312";
import { BXv } from "../figma_app/43951";
import { A as _$$A } from "../905/475480";
import { Z1 } from "../905/401885";
var n;
(e => {
  e.getBillingTrial = function (t) {
    return {
      ...t,
      status: e.getBillingTrialStatus(t)
    };
  };
  e.getBillingTrialStatus = D(t => e.isDeactivated(t) ? Q.DEACTIVATED : e.isExpired(t) ? Q.EXPIRED : e.isValidated(t) ? Q.ACTIVE : Q.PENDING);
  e.isDeactivated = D(e => !!e.deactivatedAt);
  e.isExpired = D(e => A().utc().isAfter(A(e.trialPeriodEnd).utc()));
  e.isValidated = D(e => {
    let t = e.metadata;
    return !!t?.validated_at || !!t?.validatedAt;
  });
})(n || (n = {}));
export let $$p0 = Iz(e => Z1(BXv.Query({
  resourceId: e,
  resourceType: FOrganizationType.ORG
}), e => {
  let t = e.billingTrialForResource;
  return t ? _$$A.getOrgTrial(n.getBillingTrial(t)) : null;
}));
export const U = $$p0;