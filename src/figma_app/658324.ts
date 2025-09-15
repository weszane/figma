import { useMemo } from "react";
import { atom, atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import a from "../vendor/239910";
import { logger } from "../905/651849";
import { getI18nString } from "../905/303541";
import { qH } from "../figma_app/934005";
import { liveStoreInstance, IT } from "../905/713695";
import { i as _$$i } from "../905/787489";
import { V } from "../905/223084";
var s = a;
let _ = atom({});
function h(e) {
  let t = s()(e, e => e.id);
  atomStoreManager.set(_, e => ({
    ...e,
    ...t
  }));
}
let m = liveStoreInstance.Query({
  fetch: async e => {
    let t = (await V.getPlanInvoices(e)).data.meta.invoices;
    h(t);
    return t;
  }
});
function g(e, t) {
  let r = useAtomWithSubscription(_);
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
  _$$i(n, getI18nString("plan_invoices.generic_load_error"));
  return g(n);
}
let E = liveStoreInstance.Query({
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
    let t = await liveStoreInstance.fetch(E(e), {
      policy: "networkOnly"
    });
    let r = liveStoreInstance.getMutation(b);
    await r({
      queryArgs: e,
      upcomingPlanInvoices: t
    });
  } catch (e) {
    logger.error(e);
  }
}
let b = liveStoreInstance.Mutation((e, {
  query: t
}) => {
  t.mutate(m(e.queryArgs), t => [...e.upcomingPlanInvoices, ...t.filter(({
    state: e
  }) => e !== qH.PENDING)]);
});
let T = liveStoreInstance.Query({
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
  _$$i(r, getI18nString("plan_invoices.generic_load_error"));
  return g(r, qH.OPEN);
}
export const Ti = $$I0;
export const bQ = $$f1;
export const jL = $$y2;