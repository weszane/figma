import { getLocalStorage } from "../905/657224";
import { createActionCreator } from "../905/73481";
import { logError } from "../905/714362";
import { QQ } from "../figma_app/808294";
import { createOptimistThunk } from "../905/350402";
import { N } from "../905/696711";
import { C } from "../905/180";
createOptimistThunk((e, t) => {
  let {
    payments,
    source
  } = t;
  let o = e.getState().user?.id;
  if (!o || !payments) return;
  let l = payments.filter(QQ);
  let d = `${c}_${o}`;
  let u = getLocalStorage()?.getItem(d);
  if (u) {
    let e = JSON.parse(u);
    if (Array.isArray(e)) {
      let t = new Set(l.map(e => e.monetized_resource_metadata_id));
      let n = e.map(e => e.monetized_resource_metadata_id).filter(e => !t.has(e));
      n.length && logError("community", "[ActivePayments] mismatch detected", {
        source,
        userId: o,
        revoked: n,
        previousPayments: e,
        currentPayments: payments
      }, {
        reportAsSentryError: !0
      });
    }
  }
  let p = JSON.stringify(l);
  getLocalStorage()?.setItem(d, p);
});
let c = "debug_succeeded_payments";
let $$u3 = createOptimistThunk((e, t, {
  loadingKey: r
}) => {
  let n = C.getBuyerActivePayments();
  N(n, e, r);
  n.then(({
    data: t
  }) => {
    e.dispatch($$h0(t.meta));
  }).catch(() => {});
});
let $$p1 = createActionCreator("M10N_DEL_ACTIVE_USER_PAYMENT");
let $$_2 = createActionCreator("M10N_REALTIME_ACTIVE_USER_PAYMENT");
let $$h0 = createActionCreator("M10N_SET_ACTIVE_USER_PAYMENTS");
export const M2 = $$h0;
export const Sp = $$p1;
export const k3 = $$_2;
export const oQ = $$u3;