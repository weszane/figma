import { resourceUtils } from "../905/989992";
import { setupResourceAtomHandler, handleSuspenseRetainRelease } from "../figma_app/566371";
import { reportError } from "../905/11";
import { FOrganizationLevelType } from "../figma_app/191312";
import { CurrentOrgBillingPeriodView } from "../figma_app/43951";
import { useSuspendCurrentPrivilegedPlan } from "../figma_app/465071";
export function $$$$d1({
  planType: e,
  planParentId: t
}) {
  let [r] = setupResourceAtomHandler(CurrentOrgBillingPeriodView({
    orgId: t
  }), {
    enabled: e === FOrganizationLevelType.ORG && !!t
  });
  let {
    status,
    errors,
    suspense,
    data
  } = r;
  switch (status) {
    case "loading":
      return resourceUtils.loadingSuspendable(suspense);
    case "loaded":
      return resourceUtils.loadedSuspendable(data?.org?.activeOrgBillingPeriod?.isEla ?? !1, errors, suspense);
    case "disabled":
      return resourceUtils.loadedSuspendable(!1, [], suspense);
    case "errors":
      return resourceUtils.errorSuspendable(errors, suspense);
  }
}
export function $$c0({
  reportErrorsToTeam: e
}) {
  let t = useSuspendCurrentPrivilegedPlan({
    reportErrorsToTeam: e
  });
  let r = $$$$d1({
    planType: t.type,
    planParentId: t.key.parentId
  });
  let [n] = handleSuspenseRetainRelease(r);
  if ("loaded" !== n.status) {
    let t = Error("Error fetching isELA info");
    reportError(e, t);
    return t;
  }
  return n.data;
}
export const d = $$c0;
export const h = $$$$d1;