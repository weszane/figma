import { U } from "../vendor/885230";
import { KU } from "../vendor/325489";
import { sy, i_ } from "../vendor/40198";
import { Kg } from "../vendor/314131";
import { Ce } from "../vendor/998256";
import { et, zU, pK } from "../vendor/919466";
let o = /^sentry-/;
function u(e) {
  return e.split(",").map(e => e.split("=").map(e => decodeURIComponent(e.trim()))).reduce((e, [n, i]) => (n && i && (e[n] = i), e), {});
}
export function $$s0(e, n) {
  let i = n.getOptions();
  let {
    publicKey
  } = n.getDsn() || {};
  let r = Ce({
    environment: i.environment || U,
    release: i.release,
    public_key: publicKey,
    trace_id: e
  });
  n.emit("createDsc", r);
  return r;
}
export function $$c1(e) {
  let n = KU();
  if (!n) return {};
  let i = $$s0(et(e).trace_id || "", n);
  let t = zU(e);
  let l = t._frozenDsc;
  if (l) return l;
  let c = t.spanContext().traceState;
  let h = c && c.get("sentry.dsc");
  let p = h && function (e) {
    let n = e && (Kg(e) || Array.isArray(e)) ? Array.isArray(e) ? e.reduce((e, n) => (Object.entries(u(n)).forEach(([n, i]) => {
      e[n] = i;
    }), e), {}) : u(e) : void 0;
    if (!n) return;
    let i = Object.entries(n).reduce((e, [n, i]) => (n.match(o) && (e[n.slice("sentry-".length)] = i), e), {});
    return Object.keys(i).length > 0 ? i : void 0;
  }(h);
  if (p) return p;
  let g = et(t);
  let m = g.data || {};
  let _ = m[sy];
  null != _ && (i.sample_rate = `${_}`);
  let b = m[i_];
  let y = g.description;
  "url" !== b && y && (i.transaction = y);
  (function (e) {
    if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
    let n = KU();
    let i = n && n.getOptions();
    return !!i && (i.enableTracing || "tracesSampleRate" in i || "tracesSampler" in i);
  })() && (i.sampled = String(pK(t)));
  n.emit("createDsc", i, t);
  return i;
}
export const lF = $$s0;
export const k1 = $$c1;