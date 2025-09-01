import { Ce } from "../vendor/998256";
import { zf } from "../vendor/975854";
import { eJ } from "../vendor/352483";
export function $$a1(e) {
  let n = zf();
  let i = {
    sid: eJ(),
    init: !0,
    timestamp: n,
    started: n,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: !1,
    toJSON: () => Ce({
      sid: `${i.sid}`,
      init: i.init,
      started: new Date(1e3 * i.started).toISOString(),
      timestamp: new Date(1e3 * i.timestamp).toISOString(),
      status: i.status,
      errors: i.errors,
      did: "number" == typeof i.did || "string" == typeof i.did ? `${i.did}` : void 0,
      duration: i.duration,
      abnormal_mechanism: i.abnormal_mechanism,
      attrs: {
        release: i.release,
        environment: i.environment,
        ip_address: i.ipAddress,
        user_agent: i.userAgent
      }
    })
  };
  e && $$o2(i, e);
  return i;
}
export function $$o2(e, n = {}) {
  if (!n.user || (!e.ipAddress && n.user.ip_address && (e.ipAddress = n.user.ip_address), e.did || n.did || (e.did = n.user.id || n.user.email || n.user.username)), e.timestamp = n.timestamp || zf(), n.abnormal_mechanism && (e.abnormal_mechanism = n.abnormal_mechanism), n.ignoreDuration && (e.ignoreDuration = n.ignoreDuration), n.sid && (e.sid = 32 === n.sid.length ? n.sid : eJ()), void 0 !== n.init && (e.init = n.init), !e.did && n.did && (e.did = `${n.did}`), "number" == typeof n.started && (e.started = n.started), e.ignoreDuration) e.duration = void 0;else if ("number" == typeof n.duration) e.duration = n.duration;else {
    let n = e.timestamp - e.started;
    e.duration = n >= 0 ? n : 0;
  }
  n.release && (e.release = n.release);
  n.environment && (e.environment = n.environment);
  !e.ipAddress && n.ipAddress && (e.ipAddress = n.ipAddress);
  !e.userAgent && n.userAgent && (e.userAgent = n.userAgent);
  "number" == typeof n.errors && (e.errors = n.errors);
  n.status && (e.status = n.status);
}
export function $$u0(e, n) {
  let i = {};
  n ? i = {
    status: n
  } : "ok" === e.status && (i = {
    status: "exited"
  });
  $$o2(e, i);
}
export const Vu = $$u0;
export const fj = $$a1;
export const qO = $$o2;