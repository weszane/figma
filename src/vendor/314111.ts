import { SB } from "../vendor/728046";
import { normalize } from "../vendor/231181";
import { Ce } from "../vendor/998256";
import { O } from "../vendor/240444";
export function $$o4(e, n = []) {
  return [e, n];
}
export function $$u1(e, n) {
  let [i, t] = e;
  return [i, [...t, n]];
}
export function $$l8(e, n) {
  for (let i of e[1]) {
    let e = i[0].type;
    if (n(i, e)) return !0;
  }
  return !1;
}
export function $$d5(e, n) {
  return $$l8(e, (e, i) => n.includes(i));
}
function s(e) {
  return O.__SENTRY__ && O.__SENTRY__.encodePolyfill ? O.__SENTRY__.encodePolyfill(e) : new TextEncoder().encode(e);
}
export function $$c2(e) {
  let [n, i] = e;
  let t = JSON.stringify(n);
  function r(e) {
    "string" == typeof t ? t = "string" == typeof e ? t + e : [s(t), e] : t.push("string" == typeof e ? s(e) : e);
  }
  for (let e of i) {
    let [n, i] = e;
    if (r(`
${JSON.stringify(n)}
`), "string" == typeof i || i instanceof Uint8Array) r(i);else {
      let e;
      try {
        e = JSON.stringify(i);
      } catch (n) {
        e = JSON.stringify(normalize(i));
      }
      r(e);
    }
  }
  return "string" == typeof t ? t : function (e) {
    let n = new Uint8Array(e.reduce((e, n) => e + n.length, 0));
    let i = 0;
    for (let t of e) {
      n.set(t, i);
      i += t.length;
    }
    return n;
  }(t);
}
export function $$h6(e) {
  let n = "string" == typeof e ? s(e) : e;
  function i(e) {
    let i = n.subarray(0, e);
    n = n.subarray(e + 1);
    return i;
  }
  function t() {
    var e;
    let t = n.indexOf(10);
    t < 0 && (t = n.length);
    return JSON.parse((e = i(t), O.__SENTRY__ && O.__SENTRY__.decodePolyfill ? O.__SENTRY__.decodePolyfill(e) : new TextDecoder().decode(e)));
  }
  let f = t();
  let r = [];
  for (; n.length;) {
    let e = t();
    let n = "number" == typeof e.length ? e.length : void 0;
    r.push([e, n ? i(n) : t()]);
  }
  return [f, r];
}
export function $$p3(e) {
  let n = "string" == typeof e.data ? s(e.data) : e.data;
  return [Ce({
    type: "attachment",
    length: n.length,
    filename: e.filename,
    content_type: e.contentType,
    attachment_type: e.attachmentType
  }), n];
}
let g = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  span: "span",
  statsd: "metric_bucket"
};
export function $$m9(e) {
  return g[e];
}
export function $$_0(e) {
  if (!e || !e.sdk) return;
  let {
    name,
    version
  } = e.sdk;
  return {
    name,
    version
  };
}
export function $$b7(e, n, i, f) {
  let a = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(n && {
      sdk: n
    }),
    ...(!!i && f && {
      dsn: SB(f)
    }),
    ...(a && {
      trace: Ce({
        ...a
      })
    })
  };
}
export const Cj = $$_0;
export const W3 = $$u1;
export const bN = $$c2;
export const bm = $$p3;
export const h4 = $$o4;
export const hP = $$d5;
export const mE = $$h6;
export const n2 = $$b7;
export const yH = $$l8;
export const zk = $$m9;