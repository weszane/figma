import { U } from "../vendor/885230";
import { getGlobalScope } from "../vendor/325489";
import { T as _$$T } from "../vendor/381201";
import { Qg } from "../vendor/314131";
import { vF } from "../vendor/150583";
import { T2 } from "../vendor/873843";
import { H } from "../vendor/341099";
import { O } from "../vendor/240444";
import { eJ, M6 } from "../vendor/352483";
import { normalize } from "../vendor/231181";
import { xv } from "../vendor/108286";
import { lu } from "../vendor/975854";
import { k1 } from "../vendor/26278";
import { Ce } from "../vendor/998256";
import { h as _$$h } from "../vendor/453233";
import { kX, zU, et } from "../vendor/919466";
let s = new WeakMap();
function v(e, n) {
  let {
    extra,
    tags,
    user,
    contexts,
    level,
    sdkProcessingMetadata,
    breadcrumbs,
    fingerprint,
    eventProcessors,
    attachments,
    propagationContext,
    transactionName,
    span
  } = n;
  w(e, "extra", extra);
  w(e, "tags", tags);
  w(e, "user", user);
  w(e, "contexts", contexts);
  e.sdkProcessingMetadata = _$$h(e.sdkProcessingMetadata, sdkProcessingMetadata, 2);
  level && (e.level = level);
  transactionName && (e.transactionName = transactionName);
  span && (e.span = span);
  breadcrumbs.length && (e.breadcrumbs = [...e.breadcrumbs, ...breadcrumbs]);
  fingerprint.length && (e.fingerprint = [...e.fingerprint, ...fingerprint]);
  eventProcessors.length && (e.eventProcessors = [...e.eventProcessors, ...eventProcessors]);
  attachments.length && (e.attachments = [...e.attachments, ...attachments]);
  e.propagationContext = {
    ...e.propagationContext,
    ...propagationContext
  };
}
function w(e, n, i) {
  e[n] = _$$h(e[n], i, 1);
}
export function $$k1(e, n, i, b, w, k) {
  let {
    normalizeDepth = 3,
    normalizeMaxBreadth = 1e3
  } = e;
  let x = {
    ...n,
    event_id: n.event_id || i.event_id || eJ(),
    timestamp: n.timestamp || lu()
  };
  let C = i.integrations || e.integrations.map(e => e.name);
  (function (e, n) {
    let {
      environment,
      release,
      dist,
      maxValueLength = 250
    } = n;
    "environment" in e || (e.environment = "environment" in n ? environment : U);
    void 0 === e.release && void 0 !== release && (e.release = release);
    void 0 === e.dist && void 0 !== dist && (e.dist = dist);
    e.message && (e.message = xv(e.message, maxValueLength));
    let o = e.exception && e.exception.values && e.exception.values[0];
    o && o.value && (o.value = xv(o.value, maxValueLength));
    let u = e.request;
    u && u.url && (u.url = xv(u.url, maxValueLength));
  })(x, e);
  C.length > 0 && (x.sdk = x.sdk || {}, x.sdk.integrations = [...(x.sdk.integrations || []), ...C]);
  w && w.emit("applyFrameMetadata", n);
  void 0 === n.type && function (e, n) {
    let i = function (e) {
      let n;
      let i = O._sentryDebugIds;
      if (!i) return {};
      let t = s.get(e);
      t ? n = t : (n = new Map(), s.set(e, n));
      return Object.keys(i).reduce((t, f) => {
        let r;
        let a = n.get(f);
        a ? r = a : (r = e(f), n.set(f, r));
        for (let e = r.length - 1; e >= 0; e--) {
          let n = r[e];
          let a = n && n.filename;
          if (n && a) {
            t[a] = i[f];
            break;
          }
        }
        return t;
      }, {});
    }(n);
    try {
      e.exception.values.forEach(e => {
        e.stacktrace.frames.forEach(e => {
          e.filename && (e.debug_id = i[e.filename]);
        });
      });
    } catch (e) {}
  }(x, e.stackParser);
  let T = function (e, n) {
    if (!n) return e;
    let i = e ? e.clone() : new H();
    i.update(n);
    return i;
  }(b, i.captureContext);
  i.mechanism && M6(x, i.mechanism);
  let P = w ? w.getEventProcessors() : [];
  let L = getGlobalScope().getScopeData();
  k && v(L, k.getScopeData());
  T && v(L, T.getScopeData());
  let N = [...(i.attachments || []), ...L.attachments];
  N.length && (i.attachments = N);
  !function (e, n) {
    let {
      fingerprint,
      span,
      breadcrumbs,
      sdkProcessingMetadata
    } = n;
    (function (e, n) {
      let {
        extra,
        tags,
        user,
        contexts,
        level,
        transactionName
      } = n;
      let u = Ce(extra);
      u && Object.keys(u).length && (e.extra = {
        ...u,
        ...e.extra
      });
      let l = Ce(tags);
      l && Object.keys(l).length && (e.tags = {
        ...l,
        ...e.tags
      });
      let d = Ce(user);
      d && Object.keys(d).length && (e.user = {
        ...d,
        ...e.user
      });
      let s = Ce(contexts);
      s && Object.keys(s).length && (e.contexts = {
        ...s,
        ...e.contexts
      });
      level && (e.level = level);
      transactionName && "transaction" !== e.type && (e.transaction = transactionName);
    })(e, n);
    span && function (e, n) {
      e.contexts = {
        trace: kX(n),
        ...e.contexts
      };
      e.sdkProcessingMetadata = {
        dynamicSamplingContext: k1(n),
        ...e.sdkProcessingMetadata
      };
      let i = zU(n);
      let t = et(i).description;
      t && !e.transaction && "transaction" === e.type && (e.transaction = t);
    }(e, span);
    e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [];
    fingerprint && (e.fingerprint = e.fingerprint.concat(fingerprint));
    e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
    (function (e, n) {
      let i = [...(e.breadcrumbs || []), ...n];
      e.breadcrumbs = i.length ? i : void 0;
    })(e, breadcrumbs);
    e.sdkProcessingMetadata = {
      ...e.sdkProcessingMetadata,
      ...sdkProcessingMetadata
    };
  }(x, L);
  return function e(n, i, t, f = 0) {
    return new T2((u, l) => {
      let d = n[f];
      if (null === i || "function" != typeof d) u(i);else {
        let s = d({
          ...i
        }, t);
        _$$T && d.id && null === s && vF.log(`Event processor "${d.id}" dropped event`);
        Qg(s) ? s.then(i => e(n, i, t, f + 1).then(u)).then(null, l) : e(n, s, t, f + 1).then(u).then(null, l);
      }
    });
  }([...P, ...L.eventProcessors], x, i).then(e => (e && function (e) {
    let n = {};
    try {
      e.exception.values.forEach(e => {
        e.stacktrace.frames.forEach(e => {
          e.debug_id && (e.abs_path ? n[e.abs_path] = e.debug_id : e.filename && (n[e.filename] = e.debug_id), delete e.debug_id);
        });
      });
    } catch (e) {}
    if (0 === Object.keys(n).length) return;
    e.debug_meta = e.debug_meta || {};
    e.debug_meta.images = e.debug_meta.images || [];
    let i = e.debug_meta.images;
    Object.entries(n).forEach(([e, n]) => {
      i.push({
        type: "sourcemap",
        code_file: e,
        debug_id: n
      });
    });
  }(e), "number" == typeof normalizeDepth && normalizeDepth > 0) ? function (e, n, i) {
    if (!e) return null;
    let t = {
      ...e,
      ...(e.breadcrumbs && {
        breadcrumbs: e.breadcrumbs.map(e => ({
          ...e,
          ...(e.data && {
            data: normalize(e.data, n, i)
          })
        }))
      }),
      ...(e.user && {
        user: normalize(e.user, n, i)
      }),
      ...(e.contexts && {
        contexts: normalize(e.contexts, n, i)
      }),
      ...(e.extra && {
        extra: normalize(e.extra, n, i)
      })
    };
    e.contexts && e.contexts.trace && t.contexts && (t.contexts.trace = e.contexts.trace, e.contexts.trace.data && (t.contexts.trace.data = normalize(e.contexts.trace.data, n, i)));
    e.spans && (t.spans = e.spans.map(e => ({
      ...e,
      ...(e.data && {
        data: normalize(e.data, n, i)
      })
    })));
    return t;
  }(e, normalizeDepth, normalizeMaxBreadth) : e);
}
export function $$S0(e) {
  return e ? e instanceof H || "function" == typeof e || Object.keys(e).some(e => E.includes(e)) ? {
    captureContext: e
  } : e : void 0;
}
let E = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
export const li = $$S0;
export const mG = $$k1;