import { T as _$$T } from "../vendor/381201";
import { _C, qm, lc, P$, mH } from "../vendor/678925";
import { vF, Ow, Z9, pq } from "../vendor/150583";
import { $X, eJ, GR, gO, M6 } from "../vendor/352483";
import { Xr, gt, xv } from "../vendor/108286";
import { KU, rm, v4, o5 } from "../vendor/325489";
import { sp, GS, u4, Ce, HF, pO, my } from "../vendor/998256";
import { RV, qQ, yF, gd, vk } from "../vendor/156870";
import { m7, vm } from "../vendor/519647";
import { Cp, r as _$$r, J0, J5 } from "../vendor/288996";
import { T as _$$T2 } from "../vendor/570893";
import { O as _$$O } from "../vendor/240444";
import { j as _$$j } from "../vendor/520392";
import { AD, SB } from "../vendor/728046";
import { Cj, n2, h4, W3, bm } from "../vendor/314111";
import { qO } from "../vendor/882763";
import { lF } from "../vendor/26278";
import { lu, zf } from "../vendor/975854";
import { U as _$$U } from "../vendor/16909";
import { NF, sO, Qg, Qd, T2, BD, W6, bJ, xH, Kg, tH } from "../vendor/314131";
import { XW, T2 as _$$T3, xg } from "../vendor/873843";
import { mG } from "../vendor/650703";
import { M as _$$M } from "../vendor/821359";
import { cd } from "../vendor/231181";
import { Z as _$$Z } from "../vendor/39153";
import { Hd, xE, $N } from "../vendor/641395";
import { _ as _$$_ } from "../vendor/577508";
let t;
let f;
let r;
let a;
let o;
let h = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", 'can\'t redefine non-configurable property "solana"', "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"];
let p = _C((e = {}) => ({
  name: "InboundFilters",
  processEvent: (n, i, t) => !function (e, n) {
    var i;
    return n.ignoreInternal && function (e) {
      try {
        return "SentryError" === e.exception.values[0].type;
      } catch (e) {}
      return !1;
    }(e) ? (_$$T && vF.warn(`Event dropped due to being internal Sentry Error.
Event: ${$X(e)}`), !0) : (i = n.ignoreErrors, !e.type && i && i.length && function (e) {
      let n;
      let i = [];
      e.message && i.push(e.message);
      try {
        n = e.exception.values[e.exception.values.length - 1];
      } catch (e) {}
      n && n.value && (i.push(n.value), n.type && i.push(`${n.type}: ${n.value}`));
      return i;
    }(e).some(e => Xr(e, i))) ? (_$$T && vF.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${$X(e)}`), !0) : e.type || !e.exception || !e.exception.values || 0 === e.exception.values.length || e.message || e.exception.values.some(e => e.stacktrace || e.type && "Error" !== e.type || e.value) ? !function (e, n) {
      if ("transaction" !== e.type || !n || !n.length) return !1;
      let i = e.transaction;
      return !!i && Xr(i, n);
    }(e, n.ignoreTransactions) ? !function (e, n) {
      if (!n || !n.length) return !1;
      let i = g(e);
      return !!i && Xr(i, n);
    }(e, n.denyUrls) ? !function (e, n) {
      if (!n || !n.length) return !0;
      let i = g(e);
      return !i || Xr(i, n);
    }(e, n.allowUrls) && (_$$T && vF.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${$X(e)}.
Url: ${g(e)}`), !0) : (_$$T && vF.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${$X(e)}.
Url: ${g(e)}`), !0) : (_$$T && vF.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${$X(e)}`), !0) : (_$$T && vF.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${$X(e)}`), !0);
  }(n, function (e = {}, n = {}) {
    return {
      allowUrls: [...(e.allowUrls || []), ...(n.allowUrls || [])],
      denyUrls: [...(e.denyUrls || []), ...(n.denyUrls || [])],
      ignoreErrors: [...(e.ignoreErrors || []), ...(n.ignoreErrors || []), ...(e.disableErrorDefaults ? [] : h)],
      ignoreTransactions: [...(e.ignoreTransactions || []), ...(n.ignoreTransactions || [])],
      ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
    };
  }(e, t.getOptions())) ? n : null
}));
function g(e) {
  try {
    let n;
    try {
      n = e.exception.values[0].stacktrace.frames;
    } catch (e) {}
    return n ? function (e = []) {
      for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n];
        if (i && "<anonymous>" !== i.filename && "[native code]" !== i.filename) return i.filename || null;
      }
      return null;
    }(n) : null;
  } catch (n) {
    _$$T && vF.error(`Cannot extract url for event ${$X(e)}`);
    return null;
  }
}
let b = new WeakMap();
let y = _C(() => ({
  name: "FunctionToString",
  setupOnce() {
    t = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...e) {
        let n = sp(this);
        let i = b.has(KU()) && void 0 !== n ? n : this;
        return t.apply(i, e);
      };
    } catch (e) {}
  },
  setup(e) {
    b.set(e, !0);
  }
}));
let w = _C(() => {
  let e;
  return {
    name: "Dedupe",
    processEvent(n) {
      if (n.type) return n;
      try {
        var i;
        if ((i = e) && (function (e, n) {
          let i = e.message;
          let t = n.message;
          return !!((i || t) && (!i || t) && (i || !t) && i === t && S(e, n) && k(e, n));
        }(n, i) || function (e, n) {
          let i = E(n);
          let t = E(e);
          return !!(i && t && i.type === t.type && i.value === t.value && S(e, n) && k(e, n));
        }(n, i))) {
          _$$T && vF.warn("Event dropped due to being a duplicate of previously captured event.");
          return null;
        }
      } catch (e) {}
      return e = n;
    }
  };
});
function k(e, n) {
  let i = RV(e);
  let t = RV(n);
  if (!i && !t) return !0;
  if (i && !t || !i && t || t.length !== i.length) return !1;
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    let f = i[e];
    if (n.filename !== f.filename || n.lineno !== f.lineno || n.colno !== f.colno || n.$$function !== f.$$function) return !1;
  }
  return !0;
}
function S(e, n) {
  let i = e.fingerprint;
  let t = n.fingerprint;
  if (!i && !t) return !0;
  if (i && !t || !i && t) return !1;
  try {
    return !(i.join("") !== t.join(""));
  } catch (e) {
    return !1;
  }
}
function E(e) {
  return e.exception && e.exception.values && e.exception.values[0];
}
let P = {};
let L = {};
function N(e, n) {
  P[e] = P[e] || [];
  P[e].push(n);
}
function O(e, n) {
  if (!L[e]) {
    L[e] = !0;
    try {
      n();
    } catch (n) {
      _$$T2 && vF.error(`Error while instrumenting ${e}`, n);
    }
  }
}
function A(e, n) {
  let i = e && P[e];
  if (i) for (let t of i) try {
    t(n);
  } catch (n) {
    _$$T2 && vF.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${qQ(t)}
Error:`, n);
  }
}
let R = _$$O;
function I(e) {
  let n = "history";
  N(n, e);
  O(n, z);
}
function z() {
  if (!function () {
    let e = R.chrome;
    let n = e && e.app && e.app.runtime;
    let i = "history" in R && !!R.history.pushState && !!R.history.replaceState;
    return !n && i;
  }()) return;
  let e = _$$j.onpopstate;
  function n(e) {
    return function (...n) {
      let i = n.length > 2 ? n[2] : void 0;
      if (i) {
        let e = f;
        let n = String(i);
        f = n;
        A("history", {
          from: e,
          to: n
        });
      }
      return e.apply(this, n);
    };
  }
  _$$j.onpopstate = function (...n) {
    let i = _$$j.location.href;
    let t = f;
    if (f = i, A("history", {
      from: t,
      to: i
    }), e) try {
      return e.apply(this, n);
    } catch (e) {}
  };
  GS(_$$j.history, "pushState", n);
  GS(_$$j.history, "replaceState", n);
}
let V = "Not capturing exception because it's already been captured.";
class K {
  constructor(e) {
    this._options = e;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    if (e.dsn ? this._dsn = AD(e.dsn) : _$$T && vF.warn("No DSN provided, client will not send events."), this._dsn) {
      let n = function (e, n, i) {
        return n || `${function (e) {
          let n = e.protocol ? `${e.protocol}:` : "";
          let i = e.port ? `:${e.port}` : "";
          return `${n}//${e.host}${i}${e.path ? `/${e.path}` : ""}/api/`;
        }(e)}${e.projectId}/envelope/?${u4({
          sentry_key: e.publicKey,
          sentry_version: "7",
          ...(i && {
            sentry_client: `${i.name}/${i.version}`
          })
        })}`;
      }(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
      this._transport = e.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...e.transportOptions,
        url: n
      });
    }
  }
  captureException(e, n, i) {
    let t = eJ();
    if (GR(e)) {
      _$$T && vF.log(V);
      return t;
    }
    let f = {
      event_id: t,
      ...n
    };
    this._process(this.eventFromException(e, f).then(e => this._captureEvent(e, f, i)));
    return f.event_id;
  }
  captureMessage(e, n, i, t) {
    let f = {
      event_id: eJ(),
      ...i
    };
    let r = NF(e) ? e : String(e);
    let a = sO(e) ? this.eventFromMessage(r, n, f) : this.eventFromException(e, f);
    this._process(a.then(e => this._captureEvent(e, f, t)));
    return f.event_id;
  }
  captureEvent(e, n, i) {
    let t = eJ();
    if (n && n.originalException && GR(n.originalException)) {
      _$$T && vF.log(V);
      return t;
    }
    let f = {
      event_id: t,
      ...n
    };
    let r = (e.sdkProcessingMetadata || {}).capturedSpanScope;
    this._process(this._captureEvent(e, f, r || i));
    return f.event_id;
  }
  captureSession(e) {
    "string" != typeof e.release ? _$$T && vF.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), qO(e, {
      init: !1
    }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(e) {
    let n = this._transport;
    return n ? (this.emit("flush"), this._isClientDoneProcessing(e).then(i => n.flush(e).then(e => i && e))) : XW(!0);
  }
  close(e) {
    return this.flush(e).then(e => (this.getOptions().enabled = !1, this.emit("close"), e));
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e);
  }
  init() {
    (this._isEnabled() || this._options.integrations.some(({
      name: e
    }) => e.startsWith("Spotlight"))) && this._setupIntegrations();
  }
  getIntegrationByName(e) {
    return this._integrations[e];
  }
  addIntegration(e) {
    let n = this._integrations[e.name];
    qm(this, e, this._integrations);
    n || lc(this, [e]);
  }
  sendEvent(e, n = {}) {
    this.emit("beforeSendEvent", e, n);
    let i = function (e, n, i, t) {
      var f;
      let r = Cj(i);
      let a = e.type && "replay_event" !== e.type ? e.type : "event";
      (f = i && i.sdk) && (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || f.name, e.sdk.version = e.sdk.version || f.version, e.sdk.integrations = [...(e.sdk.integrations || []), ...(f.integrations || [])], e.sdk.packages = [...(e.sdk.packages || []), ...(f.packages || [])]);
      let o = n2(e, r, t, n);
      delete e.sdkProcessingMetadata;
      let u = [{
        type: a
      }, e];
      return h4(o, [u]);
    }(e, this._dsn, this._options._metadata, this._options.tunnel);
    for (let e of n.attachments || []) i = W3(i, bm(e));
    let t = this.sendEnvelope(i);
    t && t.then(n => this.emit("afterSendEvent", e, n), null);
  }
  sendSession(e) {
    let n = function (e, n, i, t) {
      let f = Cj(i);
      let r = {
        sent_at: new Date().toISOString(),
        ...(f && {
          sdk: f
        }),
        ...(!!t && n && {
          dsn: SB(n)
        })
      };
      let a = "aggregates" in e ? [{
        type: "sessions"
      }, e] : [{
        type: "session"
      }, e.toJSON()];
      return h4(r, [a]);
    }(e, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(n);
  }
  recordDroppedEvent(e, n, i) {
    if (this._options.sendClientReports) {
      let t = "number" == typeof i ? i : 1;
      let f = `${e}:${n}`;
      _$$T && vF.log(`Recording outcome: "${f}"${t > 1 ? ` (${t} times)` : ""}`);
      this._outcomes[f] = (this._outcomes[f] || 0) + t;
    }
  }
  on(e, n) {
    let i = this._hooks[e] = this._hooks[e] || [];
    i.push(n);
    return () => {
      let e = i.indexOf(n);
      e > -1 && i.splice(e, 1);
    };
  }
  emit(e, ...n) {
    let i = this._hooks[e];
    i && i.forEach(e => e(...n));
  }
  sendEnvelope(e) {
    return (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport) ? this._transport.send(e).then(null, e => (_$$T && vF.error("Error while sending envelope:", e), e)) : (_$$T && vF.error("Transport disabled"), XW({}));
  }
  _setupIntegrations() {
    let {
      integrations
    } = this._options;
    this._integrations = P$(this, integrations);
    lc(this, integrations);
  }
  _updateSessionFromEvent(e, n) {
    let i = !1;
    let t = !1;
    let f = n.exception && n.exception.values;
    if (f) for (let e of (t = !0, f)) {
      let n = e.mechanism;
      if (n && !1 === n.handled) {
        i = !0;
        break;
      }
    }
    let r = "ok" === e.status;
    (r && 0 === e.errors || r && i) && (qO(e, {
      ...(i && {
        status: "crashed"
      }),
      errors: e.errors || Number(t || i)
    }), this.captureSession(e));
  }
  _isClientDoneProcessing(e) {
    return new _$$T3(n => {
      let i = 0;
      let t = setInterval(() => {
        0 == this._numProcessing ? (clearInterval(t), n(!0)) : (i += 1, e && i >= e && (clearInterval(t), n(!1)));
      }, 1);
    });
  }
  _isEnabled() {
    return !1 !== this.getOptions().enabled && void 0 !== this._transport;
  }
  _prepareEvent(e, n, i, t = rm()) {
    let f = this.getOptions();
    let r = Object.keys(this._integrations);
    !n.integrations && r.length > 0 && (n.integrations = r);
    this.emit("preprocessEvent", e, n);
    e.type || t.setLastEventId(e.event_id || n.event_id);
    return mG(f, e, n, i, this, t).then(e => {
      if (null === e) return e;
      let n = {
        ...t.getPropagationContext(),
        ...(i ? i.getPropagationContext() : void 0)
      };
      if (!(e.contexts && e.contexts.trace) && n) {
        let {
          traceId,
          spanId,
          parentSpanId,
          dsc
        } = n;
        e.contexts = {
          trace: Ce({
            trace_id: traceId,
            span_id: spanId,
            parent_span_id: parentSpanId
          }),
          ...e.contexts
        };
        let a = dsc || lF(traceId, this);
        e.sdkProcessingMetadata = {
          dynamicSamplingContext: a,
          ...e.sdkProcessingMetadata
        };
      }
      return e;
    });
  }
  _captureEvent(e, n = {}, i) {
    return this._processEvent(e, n, i).then(e => e.event_id, e => {
      _$$T && ("log" === e.logLevel ? vF.log(e.message) : vF.warn(e));
    });
  }
  _processEvent(e, n, i) {
    let t = this.getOptions();
    let {
      sampleRate
    } = t;
    let r = Q(e);
    let a = X(e);
    let o = e.type || "error";
    let l = `before send for type \`${o}\``;
    let s = void 0 === sampleRate ? void 0 : function (e) {
      if ("boolean" == typeof e) return Number(e);
      let n = "string" == typeof e ? parseFloat(e) : e;
      if ("number" != typeof n || isNaN(n) || n < 0 || n > 1) {
        _$$T && vF.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`);
        return;
      }
      return n;
    }(sampleRate);
    if (a && "number" == typeof s && Math.random() > s) {
      this.recordDroppedEvent("sample_rate", "error", e);
      return xg(new _$$U(`Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`, "log"));
    }
    let c = "replay_event" === o ? "replay" : o;
    let h = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(e, n, i, h).then(i => {
      if (null === i) {
        this.recordDroppedEvent("event_processor", c, e);
        return new _$$U("An event processor returned `null`, will not send event.", "log");
      }
      return n.data && !0 === n.data.__sentry__ ? i : function (e, n) {
        let i = `${n} must return \`null\` or a valid event.`;
        if (Qg(e)) return e.then(e => {
          if (!Qd(e) && null !== e) throw new _$$U(i);
          return e;
        }, e => {
          throw new _$$U(`${n} rejected with ${e}`);
        });
        if (!Qd(e) && null !== e) throw new _$$U(i);
        return e;
      }(function (e, n, i, t) {
        let {
          beforeSend,
          beforeSendTransaction,
          beforeSendSpan
        } = n;
        if (X(i) && beforeSend) return beforeSend(i, t);
        if (Q(i)) {
          if (i.spans && beforeSendSpan) {
            let n = [];
            for (let t of i.spans) {
              let i = beforeSendSpan(t);
              i ? n.push(i) : e.recordDroppedEvent("before_send", "span");
            }
            i.spans = n;
          }
          if (beforeSendTransaction) {
            if (i.spans) {
              let e = i.spans.length;
              i.sdkProcessingMetadata = {
                ...i.sdkProcessingMetadata,
                spanCountBeforeProcessing: e
              };
            }
            return beforeSendTransaction(i, t);
          }
        }
        return i;
      }(this, t, i, n), l);
    }).then(t => {
      if (null === t) {
        if (this.recordDroppedEvent("before_send", c, e), r) {
          let n = 1 + (e.spans || []).length;
          this.recordDroppedEvent("before_send", "span", n);
        }
        throw new _$$U(`${l} returned \`null\`, will not send event.`, "log");
      }
      let f = i && i.getSession();
      if (!r && f && this._updateSessionFromEvent(f, t), r) {
        let e = (t.sdkProcessingMetadata && t.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (t.spans ? t.spans.length : 0);
        e > 0 && this.recordDroppedEvent("before_send", "span", e);
      }
      let a = t.transaction_info;
      r && a && t.transaction !== e.transaction && (t.transaction_info = {
        ...a,
        source: "custom"
      });
      this.sendEvent(t, n);
      return t;
    }).then(null, e => {
      if (e instanceof _$$U) throw e;
      this.captureException(e, {
        data: {
          __sentry__: !0
        },
        originalException: e
      });
      return new _$$U(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`);
    });
  }
  _process(e) {
    this._numProcessing++;
    e.then(e => (this._numProcessing--, e), e => (this._numProcessing--, e));
  }
  _clearOutcomes() {
    let e = this._outcomes;
    this._outcomes = {};
    return Object.entries(e).map(([e, n]) => {
      let [i, t] = e.split(":");
      return {
        reason: i,
        category: t,
        quantity: n
      };
    });
  }
  _flushOutcomes() {
    _$$T && vF.log("Flushing outcomes...");
    let e = this._clearOutcomes();
    if (0 === e.length) {
      _$$T && vF.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      _$$T && vF.log("No dsn provided, will not send outcomes");
      return;
    }
    _$$T && vF.log("Sending outcomes:", e);
    let n = function (e, n, i) {
      let t = [{
        type: "client_report"
      }, {
        timestamp: lu(),
        discarded_events: e
      }];
      return h4(n ? {
        dsn: n
      } : {}, [t]);
    }(e, this._options.tunnel && SB(this._dsn));
    this.sendEnvelope(n);
  }
}
function X(e) {
  return void 0 === e.type;
}
function Q(e) {
  return "transaction" === e.type;
}
let Z = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function ee(e, n) {
  let i = ei(e, n);
  let t = {
    type: function (e) {
      let n = e && e.name;
      return !n && ef(e) ? e.message && Array.isArray(e.message) && 2 == e.message.length ? e.message[0] : "WebAssembly.Exception" : n;
    }(n),
    value: function (e) {
      let n = e && e.message;
      return n ? n.error && "string" == typeof n.error.message ? n.error.message : ef(e) && Array.isArray(e.message) && 2 == e.message.length ? e.message[1] : n : "No error message";
    }(n)
  };
  i.length && (t.stacktrace = {
    frames: i
  });
  void 0 === t.type && "" === t.value && (t.value = "Unrecoverable error caught");
  return t;
}
function en(e, n) {
  return {
    exception: {
      values: [ee(e, n)]
    }
  };
}
function ei(e, n) {
  let i = n.stacktrace || n.stack || "";
  let t = n && et.test(n.message) ? 1 : 0;
  let f = "number" == typeof n.framesToPop ? n.framesToPop : 0;
  try {
    return e(i, t, f);
  } catch (e) {}
  return [];
}
let et = /Minified React error #\d+;/i;
function ef(e) {
  return "undefined" != typeof WebAssembly && void 0 !== WebAssembly.Exception && e instanceof WebAssembly.Exception;
}
function er(e, n, i, t, f) {
  let r;
  if (T2(n) && n.error) return en(e, n.error);
  if (BD(n) || W6(n)) {
    if ("stack" in n) r = en(e, n);else {
      let f = n.name || (BD(n) ? "DOMError" : "DOMException");
      let a = n.message ? `${f}: ${n.message}` : f;
      r = ea(e, a, i, t);
      gO(r, a);
    }
    "code" in n && (r.tags = {
      ...r.tags,
      "DOMException.code": `${n.code}`
    });
    return r;
  }
  return bJ(n) ? en(e, n) : (Qd(n) || xH(n) ? r = function (e, n, i, t) {
    let f = KU();
    let r = f && f.getOptions().normalizeDepth;
    let a = function (e) {
      for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
        let i = e[n];
        if (i instanceof Error) return i;
      }
    }(n);
    let o = {
      __serialized__: cd(n, r)
    };
    if (a) return {
      exception: {
        values: [ee(e, a)]
      },
      extra: o
    };
    let u = {
      exception: {
        values: [{
          type: xH(n) ? n.constructor.name : t ? "UnhandledRejection" : "Error",
          value: function (e, {
            isUnhandledRejection: n
          }) {
            let i = HF(e);
            let t = n ? "promise rejection" : "exception";
            if (T2(e)) return `Event \`ErrorEvent\` captured as ${t} with message \`${e.message}\``;
            if (xH(e)) {
              let n = function (e) {
                try {
                  let n = Object.getPrototypeOf(e);
                  return n ? n.constructor.name : void 0;
                } catch (e) {}
              }(e);
              return `Event \`${n}\` (type=${e.type}) captured as ${t}`;
            }
            return `Object captured as ${t} with keys: ${i}`;
          }(n, {
            isUnhandledRejection: t
          })
        }]
      },
      extra: o
    };
    if (i) {
      let n = ei(e, i);
      n.length && (u.exception.values[0].stacktrace = {
        frames: n
      });
    }
    return u;
  }(e, n, i, f) : (r = ea(e, n, i, t), gO(r, `${n}`, void 0)), M6(r, {
    synthetic: !0
  }), r);
}
function ea(e, n, i, t) {
  let f = {};
  if (t && i) {
    let t = ei(e, i);
    t.length && (f.exception = {
      values: [{
        value: n,
        stacktrace: {
          frames: t
        }
      }]
    });
  }
  if (NF(n)) {
    let {
      __sentry_template_string__,
      __sentry_template_values__
    } = n;
    f.logentry = {
      message: __sentry_template_string__,
      params: __sentry_template_values__
    };
    return f;
  }
  f.message = n;
  return f;
}
let eo = _$$O;
let eu = 0;
function el(e, n = {}, i) {
  if ("function" != typeof e) return e;
  try {
    let n = e.__sentry_wrapped__;
    if (n) {
      if ("function" == typeof n) return n;
      return e;
    }
    if (sp(e)) return e;
  } catch (n) {
    return e;
  }
  let t = function () {
    let i = Array.prototype.slice.call(arguments);
    try {
      let t = i.map(e => el(e, n));
      return e.apply(this, t);
    } catch (e) {
      eu++;
      setTimeout(() => {
        eu--;
      });
      v4(t => {
        t.addEventProcessor(e => (n.mechanism && (gO(e, void 0, void 0), M6(e, n.mechanism)), e.extra = {
          ...e.extra,
          arguments: i
        }, e));
        Cp(e);
      });
      return e;
    }
  };
  try {
    for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  } catch (e) {}
  pO(t, e);
  my(e, "__sentry_wrapped__", t);
  try {
    Object.getOwnPropertyDescriptor(t, "name").configurable && Object.defineProperty(t, "name", {
      get: () => e.name
    });
  } catch (e) {}
  return t;
}
class ed extends K {
  constructor(e) {
    let n = {
      parentSpanIsAlwaysRootSpan: !0,
      ...e
    };
    !function (e, n, i = [n], t = "npm") {
      let f = e._metadata || {};
      f.sdk || (f.sdk = {
        name: `sentry.javascript.${n}`,
        packages: i.map(e => ({
          name: `${t}:@sentry/${e}`,
          version: _$$M
        })),
        version: _$$M
      });
      e._metadata = f;
    }(n, "browser", ["browser"], eo.SENTRY_SDK_SOURCE || "npm");
    super(n);
    n.sendClientReports && eo.document && eo.document.addEventListener("visibilitychange", () => {
      "hidden" === eo.document.visibilityState && this._flushOutcomes();
    });
  }
  eventFromException(e, n) {
    return function (e, n, i, t) {
      let f = er(e, n, i && i.syntheticException || void 0, t);
      M6(f);
      f.level = "error";
      i && i.event_id && (f.event_id = i.event_id);
      return XW(f);
    }(this._options.stackParser, e, n, this._options.attachStacktrace);
  }
  eventFromMessage(e, n = "info", i) {
    return function (e, n, i = "info", t, f) {
      let r = ea(e, n, t && t.syntheticException || void 0, f);
      r.level = i;
      t && t.event_id && (r.event_id = t.event_id);
      return XW(r);
    }(this._options.stackParser, e, n, i, this._options.attachStacktrace);
  }
  captureUserFeedback(e) {
    if (!this._isEnabled()) {
      Z && vF.warn("SDK not enabled, will not capture user feedback.");
      return;
    }
    let n = function (e, {
      metadata: n,
      tunnel: i,
      dsn: t
    }) {
      let f = {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...(n && n.sdk && {
          sdk: {
            name: n.sdk.name,
            version: n.sdk.version
          }
        }),
        ...(!!i && !!t && {
          dsn: SB(t)
        })
      };
      let r = [{
        type: "user_report"
      }, e];
      return h4(f, [r]);
    }(e, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel
    });
    this.sendEnvelope(n);
  }
  _prepareEvent(e, n, i) {
    e.platform = e.platform || "javascript";
    return super._prepareEvent(e, n, i);
  }
}
function es() {
  if (!_$$j.document) return;
  let e = A.bind(null, "dom");
  let n = ec(e, !0);
  _$$j.document.addEventListener("click", n, !1);
  _$$j.document.addEventListener("keypress", n, !1);
  ["EventTarget", "Node"].forEach(n => {
    let i = _$$j[n] && _$$j[n].prototype;
    i && i.hasOwnProperty && i.hasOwnProperty("addEventListener") && (GS(i, "addEventListener", function (n) {
      return function (i, t, f) {
        if ("click" === i || "keypress" == i) try {
          let t = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
          let r = t[i] = t[i] || {
            refCount: 0
          };
          if (!r.handler) {
            let t = ec(e);
            r.handler = t;
            n.call(this, i, t, f);
          }
          r.refCount++;
        } catch (e) {}
        return n.call(this, i, t, f);
      };
    }), GS(i, "removeEventListener", function (e) {
      return function (n, i, t) {
        if ("click" === n || "keypress" == n) try {
          let i = this.__sentry_instrumentation_handlers__ || {};
          let f = i[n];
          f && (f.refCount--, f.refCount <= 0 && (e.call(this, n, f.handler, t), f.handler = void 0, delete i[n]), 0 === Object.keys(i).length && delete this.__sentry_instrumentation_handlers__);
        } catch (e) {}
        return e.call(this, n, i, t);
      };
    }));
  });
}
function ec(e, n = !1) {
  return i => {
    if (!i || i._sentryCaptured) return;
    let t = function (e) {
      try {
        return e.target;
      } catch (e) {
        return null;
      }
    }(i);
    if ("keypress" === i.type && (!t || !t.tagName || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable)) return;
    my(i, "_sentryCaptured", !0);
    t && !t._sentryId && my(t, "_sentryId", eJ());
    let f = "keypress" === i.type ? "input" : i.type;
    !function (e) {
      if (e.type !== a) return !1;
      try {
        if (!e.target || e.target._sentryId !== o) return !1;
      } catch (e) {}
      return !0;
    }(i) && (e({
      event: i,
      name: f,
      global: n
    }), a = i.type, o = t ? t._sentryId : void 0);
    clearTimeout(r);
    r = _$$j.setTimeout(() => {
      o = void 0;
      a = void 0;
    }, 1e3);
  };
}
let eh = "__sentry_xhr_v3__";
function ep() {
  if (!_$$j.XMLHttpRequest) return;
  let e = XMLHttpRequest.prototype;
  e.open = new Proxy(e.open, {
    apply(e, n, i) {
      let t = 1e3 * zf();
      let f = Kg(i[0]) ? i[0].toUpperCase() : void 0;
      let r = function (e) {
        if (Kg(e)) return e;
        try {
          return e.toString();
        } catch (e) {}
      }(i[1]);
      if (!f || !r) return e.apply(n, i);
      n[eh] = {
        method: f,
        url: r,
        request_headers: {}
      };
      "POST" === f && r.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
      let a = () => {
        let e = n[eh];
        if (e && 4 === n.readyState) {
          try {
            e.status_code = n.status;
          } catch (e) {}
          A("xhr", {
            endTimestamp: 1e3 * zf(),
            startTimestamp: t,
            xhr: n
          });
        }
      };
      "onreadystatechange" in n && "function" == typeof n.onreadystatechange ? n.onreadystatechange = new Proxy(n.onreadystatechange, {
        apply: (e, n, i) => (a(), e.apply(n, i))
      }) : n.addEventListener("readystatechange", a);
      n.setRequestHeader = new Proxy(n.setRequestHeader, {
        apply(e, n, i) {
          let [t, f] = i;
          let r = n[eh];
          r && Kg(t) && Kg(f) && (r.request_headers[t.toLowerCase()] = f);
          return e.apply(n, i);
        }
      });
      return e.apply(n, i);
    }
  });
  e.send = new Proxy(e.send, {
    apply(e, n, i) {
      let t = n[eh];
      t && (void 0 !== i[0] && (t.body = i[0]), A("xhr", {
        startTimestamp: 1e3 * zf(),
        xhr: n
      }));
      return e.apply(n, i);
    }
  });
}
function eg() {
  "console" in _$$O && Ow.forEach(function (e) {
    e in _$$O.console && GS(_$$O.console, e, function (n) {
      Z9[e] = n;
      return function (...n) {
        A("console", {
          args: n,
          level: e
        });
        let i = Z9[e];
        i && i.apply(_$$O.console, n);
      };
    });
  });
}
function em(e, n) {
  return !!e && "object" == typeof e && !!e[n];
}
function e_(e) {
  return "string" == typeof e ? e : e ? em(e, "url") ? e.url : e.toString ? e.toString() : "" : "";
}
let ev = ["fatal", "error", "warning", "log", "info", "debug"];
function ew(e) {
  if (void 0 !== e) return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0;
}
function ek(e) {
  if (!e) return {};
  let n = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!n) return {};
  let i = n[6] || "";
  let t = n[8] || "";
  return {
    host: n[4],
    path: n[5],
    protocol: n[2],
    search: i,
    hash: t,
    relative: n[5] + i + t
  };
}
let eS = _C((e = {}) => {
  let n = {
    console: !0,
    dom: !0,
    fetch: !0,
    history: !0,
    sentry: !0,
    xhr: !0,
    ...e
  };
  return {
    name: "Breadcrumbs",
    setup(e) {
      var i;
      n.console && function (e) {
        let n = "console";
        N(n, e);
        O(n, eg);
      }(function (n) {
        var i;
        if (KU() !== e) return;
        let t = {
          category: "console",
          data: {
            arguments: n.args,
            logger: "console"
          },
          level: "warn" === (i = n.level) ? "warning" : ev.includes(i) ? i : "log",
          message: gt(n.args, " ")
        };
        if ("assert" === n.level) {
          if (!1 !== n.args[0]) return;
          t.message = `Assertion failed: ${gt(n.args.slice(1), " ") || "console.assert"}`;
          t.data.$$arguments = n.args.slice(1);
        }
        _$$Z(t, {
          input: n.args,
          level: n.level
        });
      });
      n.dom && (N("dom", (i = n.dom, function (n) {
        let t;
        let f;
        if (KU() !== e) return;
        let r = "object" == typeof i ? i.serializeAttribute : void 0;
        let a = "object" == typeof i && "number" == typeof i.maxStringLength ? i.maxStringLength : void 0;
        a && a > 1024 && (Z && vF.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a} was configured. Sentry will use 1024 instead.`), a = 1024);
        "string" == typeof r && (r = [r]);
        try {
          let e = n.event;
          let i = e && e.target ? e.target : e;
          t = Hd(i, {
            keyAttrs: r,
            maxStringLength: a
          });
          f = xE(i);
        } catch (e) {
          t = "<unknown>";
        }
        if (0 === t.length) return;
        let o = {
          category: `ui.${n.name}`,
          message: t
        };
        f && (o.data = {
          "ui.component_name": f
        });
        _$$Z(o, {
          event: n.event,
          name: n.name,
          global: n.global
        });
      })), O("dom", es));
      n.xhr && (N("xhr", function (n) {
        if (KU() !== e) return;
        let {
          startTimestamp,
          endTimestamp
        } = n;
        let f = n.xhr[eh];
        if (!startTimestamp || !endTimestamp || !f) return;
        let {
          method,
          url,
          status_code,
          body
        } = f;
        let l = {
          xhr: n.xhr,
          input: body,
          startTimestamp,
          endTimestamp
        };
        let d = ew(status_code);
        _$$Z({
          category: "xhr",
          data: {
            method,
            url,
            status_code
          },
          type: "http",
          level: d
        }, l);
      }), O("xhr", ep));
      n.fetch && function (e, n) {
        let i = "fetch";
        N(i, e);
        O(i, () => function (e, n = !1) {
          (!n || m7()) && GS(_$$O, "fetch", function (n) {
            return function (...i) {
              let {
                method,
                url
              } = function (e) {
                if (0 === e.length) return {
                  method: "GET",
                  url: ""
                };
                if (2 === e.length) {
                  let [n, i] = e;
                  return {
                    url: e_(n),
                    method: em(i, "method") ? String(i.method).toUpperCase() : "GET"
                  };
                }
                let n = e[0];
                return {
                  url: e_(n),
                  method: em(n, "method") ? String(n.method).toUpperCase() : "GET"
                };
              }(i);
              let r = {
                args: i,
                fetchData: {
                  method,
                  url
                },
                startTimestamp: 1e3 * zf()
              };
              e || A("fetch", {
                ...r
              });
              let a = Error().stack;
              return n.apply(_$$O, i).then(async n => (e ? e(n) : A("fetch", {
                ...r,
                endTimestamp: 1e3 * zf(),
                response: n
              }), n), e => {
                A("fetch", {
                  ...r,
                  endTimestamp: 1e3 * zf(),
                  error: e
                });
                bJ(e) && void 0 === e.stack && (e.stack = a, my(e, "framesToPop", 1));
                return e;
              });
            };
          });
        }(void 0, void 0));
      }(function (n) {
        if (KU() !== e) return;
        let {
          startTimestamp,
          endTimestamp
        } = n;
        if (!(!endTimestamp || n.fetchData.url.match(/sentry_key/) && "POST" === n.fetchData.method)) {
          if (n.error) {
            let e = n.fetchData;
            let f = {
              data: n.error,
              input: n.args,
              startTimestamp,
              endTimestamp
            };
            _$$Z({
              category: "fetch",
              data: e,
              level: "error",
              type: "http"
            }, f);
          } else {
            let e = n.response;
            let f = {
              ...n.fetchData,
              status_code: e && e.status
            };
            let r = {
              input: n.args,
              response: e,
              startTimestamp,
              endTimestamp
            };
            let a = ew(f.status_code);
            _$$Z({
              category: "fetch",
              data: f,
              type: "http",
              level: a
            }, r);
          }
        }
      });
      n.history && I(function (n) {
        if (KU() !== e) return;
        let i = n.from;
        let t = n.to;
        let f = ek(eo.location.href);
        let r = i ? ek(i) : void 0;
        let a = ek(t);
        r && r.path || (r = f);
        f.protocol === a.protocol && f.host === a.host && (t = a.relative);
        f.protocol === r.protocol && f.host === r.host && (i = r.relative);
        _$$Z({
          category: "navigation",
          data: {
            from: i,
            to: t
          }
        });
      });
      n.sentry && e.on("beforeSendEvent", function (n) {
        KU() === e && _$$Z({
          category: `sentry.${"transaction" === n.type ? "transaction" : "event"}`,
          event_id: n.event_id,
          level: n.level,
          message: $X(n)
        }, {
          event: n
        });
      });
    }
  };
});
let eE = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
let ex = _C((e = {}) => {
  let n = {
    XMLHttpRequest: !0,
    eventTarget: !0,
    requestAnimationFrame: !0,
    setInterval: !0,
    setTimeout: !0,
    ...e
  };
  return {
    name: "BrowserApiErrors",
    setupOnce() {
      n.setTimeout && GS(eo, "setTimeout", eC);
      n.setInterval && GS(eo, "setInterval", eC);
      n.requestAnimationFrame && GS(eo, "requestAnimationFrame", eT);
      n.XMLHttpRequest && "XMLHttpRequest" in eo && GS(XMLHttpRequest.prototype, "send", eP);
      let e = n.eventTarget;
      e && (Array.isArray(e) ? e : eE).forEach(eL);
    }
  };
});
function eC(e) {
  return function (...n) {
    let i = n[0];
    n[0] = el(i, {
      mechanism: {
        data: {
          function: qQ(e)
        },
        handled: !1,
        type: "instrument"
      }
    });
    return e.apply(this, n);
  };
}
function eT(e) {
  return function (n) {
    return e.apply(this, [el(n, {
      mechanism: {
        data: {
          function: "requestAnimationFrame",
          handler: qQ(e)
        },
        handled: !1,
        type: "instrument"
      }
    })]);
  };
}
function eP(e) {
  return function (...n) {
    let i = this;
    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
      e in i && "function" == typeof i[e] && GS(i, e, function (n) {
        let i = {
          mechanism: {
            data: {
              function: e,
              handler: qQ(n)
            },
            handled: !1,
            type: "instrument"
          }
        };
        let t = sp(n);
        t && (i.mechanism.data.handler = qQ(t));
        return el(n, i);
      });
    });
    return e.apply(this, n);
  };
}
function eL(e) {
  let n = eo[e] && eo[e].prototype;
  n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (GS(n, "addEventListener", function (n) {
    return function (i, t, f) {
      try {
        "function" == typeof t.handleEvent && (t.handleEvent = el(t.handleEvent, {
          mechanism: {
            data: {
              function: "handleEvent",
              handler: qQ(t),
              target: e
            },
            handled: !1,
            type: "instrument"
          }
        }));
      } catch (e) {}
      return n.apply(this, [i, el(t, {
        mechanism: {
          data: {
            function: "addEventListener",
            handler: qQ(t),
            target: e
          },
          handled: !1,
          type: "instrument"
        }
      }), f]);
    };
  }), GS(n, "removeEventListener", function (e) {
    return function (n, i, t) {
      try {
        let f = i && i.__sentry_wrapped__;
        f && e.call(this, n, f, t);
      } catch (e) {}
      return e.call(this, n, i, t);
    };
  }));
}
let eN = null;
function eO() {
  eN = _$$O.onerror;
  _$$O.onerror = function (e, n, i, t, f) {
    A("error", {
      column: t,
      error: f,
      line: i,
      msg: e,
      url: n
    });
    return !!eN && !eN.__SENTRY_LOADER__ && eN.apply(this, arguments);
  };
  _$$O.onerror.__SENTRY_INSTRUMENTED__ = !0;
}
let eA = null;
function eM() {
  eA = _$$O.onunhandledrejection;
  _$$O.onunhandledrejection = function (e) {
    A("unhandledrejection", e);
    return !eA || !!eA.__SENTRY_LOADER__ || eA.apply(this, arguments);
  };
  _$$O.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
}
let eR = _C((e = {}) => {
  let n = {
    onerror: !0,
    onunhandledrejection: !0,
    ...e
  };
  return {
    name: "GlobalHandlers",
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(e) {
      n.onerror && (function (e) {
        let n = "error";
        N(n, e);
        O(n, eO);
      }(n => {
        let {
          stackParser,
          attachStacktrace
        } = eI();
        if (KU() !== e || eu > 0) return;
        let {
          msg,
          url,
          line,
          column,
          error
        } = n;
        let l = function (e, n, i, t) {
          let f = e.exception = e.exception || {};
          let r = f.values = f.values || [];
          let a = r[0] = r[0] || {};
          let o = a.stacktrace = a.stacktrace || {};
          let u = o.frames = o.frames || [];
          let l = isNaN(parseInt(t, 10)) ? void 0 : t;
          let d = isNaN(parseInt(i, 10)) ? void 0 : i;
          let s = Kg(n) && n.length > 0 ? n : $N();
          0 === u.length && u.push({
            colno: l,
            filename: s,
            function: yF,
            in_app: !0,
            lineno: d
          });
          return e;
        }(er(stackParser, error || msg, void 0, attachStacktrace, !1), url, line, column);
        l.level = "error";
        _$$r(l, {
          originalException: error,
          mechanism: {
            handled: !1,
            type: "onerror"
          }
        });
      }), ej("onerror"));
      n.onunhandledrejection && (function (e) {
        let n = "unhandledrejection";
        N(n, e);
        O(n, eM);
      }(n => {
        let {
          stackParser,
          attachStacktrace
        } = eI();
        if (KU() !== e || eu > 0) return;
        let f = function (e) {
          if (sO(e)) return e;
          try {
            if ("reason" in e) return e.reason;
            if ("detail" in e && "reason" in e.detail) return e.detail.reason;
          } catch (e) {}
          return e;
        }(n);
        let r = sO(f) ? {
          exception: {
            values: [{
              type: "UnhandledRejection",
              value: `Non-Error promise rejection captured with value: ${String(f)}`
            }]
          }
        } : er(stackParser, f, void 0, attachStacktrace, !0);
        r.level = "error";
        _$$r(r, {
          originalException: f,
          mechanism: {
            handled: !1,
            type: "onunhandledrejection"
          }
        });
      }), ej("onunhandledrejection"));
    }
  };
});
function ej(e) {
  Z && vF.log(`Global Handler attached: ${e}`);
}
function eI() {
  let e = KU();
  return e && e.getOptions() || {
    stackParser: () => [],
    attachStacktrace: !1
  };
}
let ez = _C(() => ({
  name: "HttpContext",
  preprocessEvent(e) {
    if (!eo.navigator && !eo.location && !eo.document) return;
    let n = e.request && e.request.url || eo.location && eo.location.href;
    let {
      referrer
    } = eo.document || {};
    let {
      userAgent
    } = eo.navigator || {};
    let f = {
      ...(e.request && e.request.headers),
      ...(referrer && {
        Referer: referrer
      }),
      ...(userAgent && {
        "User-Agent": userAgent
      })
    };
    let r = {
      ...e.request,
      ...(n && {
        url: n
      }),
      headers: f
    };
    e.request = r;
  }
}));
function eB(e, n) {
  e.mechanism = e.mechanism || {
    type: "generic",
    handled: !0
  };
  e.mechanism = {
    ...e.mechanism,
    ...("AggregateError" === e.type && {
      is_exception_group: !0
    }),
    exception_id: n
  };
}
function eH(e, n, i, t) {
  e.mechanism = e.mechanism || {
    type: "generic",
    handled: !0
  };
  e.mechanism = {
    ...e.mechanism,
    type: "chained",
    source: n,
    exception_id: i,
    parent_id: t
  };
}
let eD = _C((e = {}) => {
  let n = e.limit || 5;
  let i = e.key || "cause";
  return {
    name: "LinkedErrors",
    preprocessEvent(e, t, f) {
      let r = f.getOptions();
      !function (e, n, i = 250, t, f, r, a) {
        if (!r.exception || !r.exception.values || !a || !tH(a.originalException, Error)) return;
        let o = r.exception.values.length > 0 ? r.exception.values[r.exception.values.length - 1] : void 0;
        o && (r.exception.values = function e(n, i, t, f, r, a, o, u) {
          if (a.length >= t + 1) return a;
          let l = [...a];
          if (tH(f[r], Error)) {
            eB(o, u);
            let a = n(i, f[r]);
            let d = l.length;
            eH(a, r, d, u);
            l = e(n, i, t, f[r], r, [a, ...l], a, d);
          }
          Array.isArray(f.errors) && f.errors.forEach((f, a) => {
            if (tH(f, Error)) {
              eB(o, u);
              let d = n(i, f);
              let s = l.length;
              eH(d, `errors[${a}]`, s, u);
              l = e(n, i, t, f, r, [d, ...l], d, s);
            }
          });
          return l;
        }(e, n, f, a.originalException, t, r.exception.values, o, 0).map(e => (e.value && (e.value = xv(e.value, i)), e)));
      }(ee, r.stackParser, r.maxValueLength, i, n, e, t);
    }
  };
});
function eU(e, n, i, t) {
  let f = {
    filename: e,
    function: "<anonymous>" === n ? yF : n,
    in_app: !0
  };
  void 0 !== i && (f.lineno = i);
  void 0 !== t && (f.colno = t);
  return f;
}
let eF = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
let e$ = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
let eq = /\((\S*)(?::(\d+))(?::(\d+))\)/;
let eG = [30, e => {
  let n = eF.exec(e);
  if (n) {
    let [, e, i, t] = n;
    return eU(e, yF, +i, +t);
  }
  let i = e$.exec(e);
  if (i) {
    if (i[2] && 0 === i[2].indexOf("eval")) {
      let e = eq.exec(i[2]);
      e && (i[2] = e[1], i[3] = e[2], i[4] = e[3]);
    }
    let [e, n] = eQ(i[1] || yF, i[2]);
    return eU(n, e, i[3] ? +i[3] : void 0, i[4] ? +i[4] : void 0);
  }
}];
let eW = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
let eV = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
let eK = [50, e => {
  let n = eW.exec(e);
  if (n) {
    if (n[3] && n[3].indexOf(" > eval") > -1) {
      let e = eV.exec(n[3]);
      e && (n[1] = n[1] || "eval", n[3] = e[1], n[4] = e[2], n[5] = "");
    }
    let e = n[3];
    let i = n[1] || yF;
    [i, e] = eQ(i, e);
    return eU(e, i, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0);
  }
}];
let eX = gd(eG, eK);
let eQ = (e, n) => {
  let i = -1 !== e.indexOf("safari-extension");
  let t = -1 !== e.indexOf("safari-web-extension");
  return i || t ? [-1 !== e.indexOf("@") ? e.split("@")[0] : yF, i ? `safari-extension:${n}` : `safari-web-extension:${n}`] : [e, n];
};
export function $$eZ0(e = {}) {
  let n = function (e = {}) {
    let n = {
      defaultIntegrations: [p(), y(), ex(), eS(), eR(), eD(), w(), ez()],
      release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : eo.SENTRY_RELEASE && eo.SENTRY_RELEASE.id ? eo.SENTRY_RELEASE.id : void 0,
      autoSessionTracking: !0,
      sendClientReports: !0
    };
    null == e.defaultIntegrations && delete e.defaultIntegrations;
    return {
      ...n,
      ...e
    };
  }(e);
  if (!n.skipBrowserExtensionCheck && function () {
    let e = void 0 !== eo.window && eo;
    if (!e) return !1;
    let n = e.chrome ? "chrome" : "browser";
    let i = e[n];
    let t = i && i.runtime && i.runtime.id;
    let f = eo.location && eo.location.href || "";
    let r = !!t && eo === eo.top && ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"].some(e => f.startsWith(`${e}//`));
    let a = void 0 !== e.nw;
    return !!t && !r && !a;
  }()) {
    pq(() => {
      console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
    });
    return;
  }
  Z && !vm() && vF.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.");
  let i = function (e, n) {
    !0 === n.debug && (_$$T ? vF.enable() : pq(() => {
      console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
    }));
    o5().update(n.initialScope);
    let i = new e(n);
    o5().setClient(i);
    i.init();
    return i;
  }(ed, {
    ...n,
    stackParser: vk(n.stackParser || eX),
    integrations: mH(n),
    transport: n.transport || _$$_
  });
  n.autoSessionTracking && function () {
    if (void 0 === eo.document) {
      Z && vF.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
      return;
    }
    J0({
      ignoreDuration: !0
    });
    J5();
    I(({
      from: e,
      to: n
    }) => {
      void 0 !== e && e !== n && (J0({
        ignoreDuration: !0
      }), J5());
    });
  }();
  return i;
}
export const Ts = $$eZ0;