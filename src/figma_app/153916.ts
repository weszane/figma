import { useCallback, useMemo, useEffect } from "react";
import { ZC } from "../figma_app/39751";
import { gY, IT } from "../figma_app/566371";
import { XHR } from "../905/910117";
import { t as _$$t } from "../905/303541";
import { jL } from "../figma_app/658324";
import { FOrganizationLevelType } from "../figma_app/191312";
import { M4 } from "../905/713695";
import { D6, j_ } from "../figma_app/465071";
import { i as _$$i } from "../905/787489";
import { Eh } from "../figma_app/617654";
var n;
(n || (n = {})).orgBillingDataQuery = M4.Query({
  fetch: async e => (await Eh.getBillingData({
    orgId: e
  })).data.meta,
  enabled: e => !!e
});
let $$m0 = M4.Mutation(async (e, {
  query: t
}) => {
  let {
    orgId,
    billingContacts,
    onRejected
  } = e;
  let s = await XHR.put(`/api/orgs/${orgId}/billing_data`, {
    admin_email: billingContacts
  }).catch(e => {
    onRejected(e);
    return e;
  });
  t.mutate(n.orgBillingDataQuery(orgId), e => {
    e && (e.admin_email = s.data.meta.admin_email);
  });
});
let $$g1 = M4.Mutation(async (e, {
  query: t
}) => {
  let r = await XHR.put(`/api/orgs/${e.orgId}/lock_invoice`, {
    license_quantities: e.licenseQuantities
  }).catch(t => {
    e.onRejected(t);
    return t;
  });
  let i = n.orgBillingDataQuery(e.orgId);
  t.mutate(i, e => {
    e && (e.invoices = r.data.meta.invoices);
  });
  e.planInvoiceId ? (t.refetch(i), await jL({
    planType: FOrganizationLevelType.ORG,
    planId: e.orgId
  })) : await t.refetch(i);
  return r.data.meta;
});
let f = M4.Mutation((e, {
  query: t
}) => {
  t.refetch(n.orgBillingDataQuery(e));
});
export function $$E2(e) {
  let t = gY(f);
  return useCallback(() => {
    t(e);
  }, [t, e]);
}
export async function $$y3(e) {
  await M4.fetch(n.orgBillingDataQuery(e), {
    policy: "networkOnly"
  });
}
export function $$b4(e, t = !0) {
  let r = D6("useOrgBillingData");
  let o = j_(r).unwrapOr(!1);
  let [d, c] = IT(n.orgBillingDataQuery(e), {
    enabled: t
  });
  _$$i(d, _$$t("org_billing_error_default"));
  let u = ZC(e);
  let h = useMemo(() => u !== e && !!u, [e, u]);
  let m = ZC(o);
  let g = useMemo(() => !1 === m && o && d.data && 0 === Object.keys(d.data).length, [o, d.data, m]);
  let f = useMemo(() => g || h, [g, h]);
  useEffect(() => {
    "loading" !== d.status && f && c.refetch();
  }, [c, f, d.status]);
  return d;
}
export const I2 = $$m0;
export const QD = $$g1;
export const SM = $$E2;
export const T1 = $$y3;
export const Xf = $$b4; 
