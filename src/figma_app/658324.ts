import { useMemo } from "react";
import { eU, zl, md } from "../figma_app/27355";
import a from "../vendor/239910";
import { k } from "../905/651849";
import { t as _$$t } from "../905/303541";
import { qH } from "../figma_app/934005";
import { M4, IT } from "../905/713695";
import { i as _$$i } from "../905/787489";
import { V } from "../905/223084";
var s = a;
let _ = eU({});
function h(e) {
  let t = s()(e, e => e.id);
  zl.set(_, e => ({
    ...e,
    ...t
  }));
}
let m = M4.Query({
  fetch: async e => {
    let t = (await V.getPlanInvoices(e)).data.meta.invoices;
    h(t);
    return t;
  }
});
function g(e, t) {
  let r = md(_);
  return useMemo(() => e.transform(e => {
    let n = e.map(e => r[e.id] ?? e);
    t && (n = n.filter(e => e.state === t));
    return n;
  }), [e, t, r]);
}
export function $$f1({
  planType: e,
  planId: t
}, r = {}) {
  let [n] = IT(m({
    planType: e,
    planId: t
  }), r);
  _$$i(n, _$$t("plan_invoices.generic_load_error"));
  return g(n);
}
let E = M4.Query({
  fetch: async ({
    planType: e,
    planId: t
  }) => {
    let r = (await V.getUpcomingPlanInvoices({
      planType: e,
      planId: t
    })).data.meta.invoices;
    h(r);
    return r;
  }
});
export async function $$y2(e) {
  try {
    let t = await M4.fetch(E(e), {
      policy: "networkOnly"
    });
    let r = M4.getMutation(b);
    await r({
      queryArgs: e,
      upcomingPlanInvoices: t
    });
  } catch (e) {
    k.error(e);
  }
}
let b = M4.Mutation((e, {
  query: t
}) => {
  t.mutate(m(e.queryArgs), t => [...e.upcomingPlanInvoices, ...t.filter(({
    state: e
  }) => e !== qH.PENDING)]);
});
let T = M4.Query({
  fetch: async ({
    planType: e,
    planId: t
  }) => {
    let r = (await V.getOpenPlanInvoices({
      planType: e,
      planId: t
    })).data.meta.invoices;
    h(r);
    return r;
  },
  enabled: e => !!e
});
export function $$I0(e, t = {}) {
  let [r] = IT(T(e), t);
  _$$i(r, _$$t("plan_invoices.generic_load_error"));
  return g(r, qH.OPEN);
}
export const Ti = $$I0;
export const bQ = $$f1;
export const jL = $$y2;