import { my } from "../vendor/998256";
import { O } from "../vendor/240444";
export function $$r3() {
  let e = O;
  let n = e.crypto || e.msCrypto;
  let i = () => 16 * Math.random();
  try {
    if (n && n.randomUUID) return n.randomUUID().replace(/-/g, "");
    n && n.getRandomValues && (i = () => {
      let e = new Uint8Array(1);
      n.getRandomValues(e);
      return e[0];
    });
  } catch (e) {}
  return "10000000100040008000100000000000".replace(/[018]/g, e => (e ^ (15 & i()) >> e / 4).toString(16));
}
function a(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
export function $$o0(e) {
  let {
    message,
    event_id
  } = e;
  if (message) return message;
  let t = a(e);
  return t ? t.type && t.value ? `${t.type}: ${t.value}` : t.type || t.value || event_id || "<unknown>" : event_id || "<unknown>";
}
export function $$u4(e, n, i) {
  let t = e.exception = e.exception || {};
  let f = t.values = t.values || [];
  let r = f[0] = f[0] || {};
  r.value || (r.value = n || "");
  r.type || (r.type = i || "Error");
}
export function $$l2(e, n) {
  let i = a(e);
  if (!i) return;
  let t = i.mechanism;
  if (i.mechanism = {
    type: "generic",
    handled: !0,
    ...t,
    ...n
  }, n && "data" in n) {
    let e = {
      ...(t && t.data),
      ...n.data
    };
    i.mechanism.data = e;
  }
}
export function $$d1(e) {
  if (e && e.__sentry_captured__) return !0;
  try {
    my(e, "__sentry_captured__", !0);
  } catch (e) {}
  return !1;
}
export const $X = $$o0;
export const GR = $$d1;
export const M6 = $$l2;
export const eJ = $$r3;
export const gO = $$u4;