import { jsx } from "react/jsx-runtime";
import { useMemo, useState, useEffect } from "react";
import { E as _$$E } from "../905/53857";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { Y } from "../figma_app/515088";
import { useFilteredRequestIds, RequestFilterType } from "../figma_app/845611";
if (443 == require.j) {}
export function $$d0({
  refreshNonce: e,
  refreshTabCountNonce: t,
  viewableBillingGroupIds: a,
  planType: d,
  planId: c,
  managedRequests: u,
  showAllOrgRequests: m,
  selectedRequestView: _,
  processedRequestIds: p,
  showBillingGroupAdminRequests: g,
  isOrgAdmin: h
}) {
  let [x, f] = useAtomValueAndSetter(Y);
  let v = m || g;
  let b = v ? [d, c, u].toString() : [d, c].toString();
  let y = useMemo(() => JSON.stringify(v ? {
    refreshNonce: e,
    refreshTabCountNonce: t,
    billing_group_ids: u ? a : null
  } : {
    refreshNonce: e,
    billing_group_ids: h ? [null] : []
  }), [e, t, u, a, v, h]);
  let j = useFilteredRequestIds({
    planType: d,
    planId: c,
    filterParams: y,
    processedRequestIds: p
  });
  let [I, E] = useState(null);
  useEffect(() => {
    if (null !== j && (E(j.length), u)) {
      let e = {
        ...x
      };
      e[b] = j.length;
      f(e);
    }
  }, [j, b]);
  return null !== I && (j?.length !== 0 || m) && jsx(_$$E, {
    variant: u && _ === RequestFilterType.ALL_MANAGED_REQUESTS || !u && _ === RequestFilterType.ALL_ORG_REQUESTS ? "brandOutline" : "defaultFilled",
    "data-testid": "table-row-count-badge",
    children: I.toString()
  }) || jsx("div", {});
}
export const E = $$d0;