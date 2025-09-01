import { qO } from "../vendor/882763";
import { Qd } from "../vendor/314131";
import { vF } from "../vendor/150583";
import { eJ } from "../vendor/352483";
import { lu } from "../vendor/975854";
import { h as _$$h } from "../vendor/453233";
import { my } from "../vendor/998256";
function o() {
  return {
    traceId: eJ(),
    spanId: eJ().substring(16)
  };
}
let s = "_sentrySpan";
function c(e, n) {
  n ? my(e, s, n) : delete e[s];
}
class h {
  constructor() {
    this._notifyingListeners = !1;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    this._propagationContext = o();
  }
  clone() {
    let e = new h();
    e._breadcrumbs = [...this._breadcrumbs];
    e._tags = {
      ...this._tags
    };
    e._extra = {
      ...this._extra
    };
    e._contexts = {
      ...this._contexts
    };
    e._user = this._user;
    e._level = this._level;
    e._session = this._session;
    e._transactionName = this._transactionName;
    e._fingerprint = this._fingerprint;
    e._eventProcessors = [...this._eventProcessors];
    e._requestSession = this._requestSession;
    e._attachments = [...this._attachments];
    e._sdkProcessingMetadata = {
      ...this._sdkProcessingMetadata
    };
    e._propagationContext = {
      ...this._propagationContext
    };
    e._client = this._client;
    e._lastEventId = this._lastEventId;
    c(e, this[s]);
    return e;
  }
  setClient(e) {
    this._client = e;
  }
  setLastEventId(e) {
    this._lastEventId = e;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(e) {
    this._scopeListeners.push(e);
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e);
    return this;
  }
  setUser(e) {
    this._user = e || {
      email: void 0,
      id: void 0,
      ip_address: void 0,
      username: void 0
    };
    this._session && qO(this._session, {
      user: e
    });
    this._notifyScopeListeners();
    return this;
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(e) {
    this._requestSession = e;
    return this;
  }
  setTags(e) {
    this._tags = {
      ...this._tags,
      ...e
    };
    this._notifyScopeListeners();
    return this;
  }
  setTag(e, n) {
    this._tags = {
      ...this._tags,
      [e]: n
    };
    this._notifyScopeListeners();
    return this;
  }
  setExtras(e) {
    this._extra = {
      ...this._extra,
      ...e
    };
    this._notifyScopeListeners();
    return this;
  }
  setExtra(e, n) {
    this._extra = {
      ...this._extra,
      [e]: n
    };
    this._notifyScopeListeners();
    return this;
  }
  setFingerprint(e) {
    this._fingerprint = e;
    this._notifyScopeListeners();
    return this;
  }
  setLevel(e) {
    this._level = e;
    this._notifyScopeListeners();
    return this;
  }
  setTransactionName(e) {
    this._transactionName = e;
    this._notifyScopeListeners();
    return this;
  }
  setContext(e, n) {
    null === n ? delete this._contexts[e] : this._contexts[e] = n;
    this._notifyScopeListeners();
    return this;
  }
  setSession(e) {
    e ? this._session = e : delete this._session;
    this._notifyScopeListeners();
    return this;
  }
  getSession() {
    return this._session;
  }
  update(e) {
    if (!e) return this;
    let n = "function" == typeof e ? e(this) : e;
    let [i, t] = n instanceof $$p0 ? [n.getScopeData(), n.getRequestSession()] : Qd(n) ? [e, e.requestSession] : [];
    let {
      tags,
      extra,
      user,
      contexts,
      level,
      fingerprint = [],
      propagationContext
    } = i || {};
    this._tags = {
      ...this._tags,
      ...tags
    };
    this._extra = {
      ...this._extra,
      ...extra
    };
    this._contexts = {
      ...this._contexts,
      ...contexts
    };
    user && Object.keys(user).length && (this._user = user);
    level && (this._level = level);
    fingerprint.length && (this._fingerprint = fingerprint);
    propagationContext && (this._propagationContext = propagationContext);
    t && (this._requestSession = t);
    return this;
  }
  clear() {
    this._breadcrumbs = [];
    this._tags = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = void 0;
    this._transactionName = void 0;
    this._fingerprint = void 0;
    this._requestSession = void 0;
    this._session = void 0;
    c(this, void 0);
    this._attachments = [];
    this._propagationContext = o();
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(e, n) {
    let i = "number" == typeof n ? n : 100;
    if (i <= 0) return this;
    let t = {
      timestamp: lu(),
      ...e
    };
    let f = this._breadcrumbs;
    f.push(t);
    this._breadcrumbs = f.length > i ? f.slice(-i) : f;
    this._notifyScopeListeners();
    return this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }
  addAttachment(e) {
    this._attachments.push(e);
    return this;
  }
  clearAttachments() {
    this._attachments = [];
    return this;
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: this[s]
    };
  }
  setSDKProcessingMetadata(e) {
    this._sdkProcessingMetadata = _$$h(this._sdkProcessingMetadata, e, 2);
    return this;
  }
  setPropagationContext(e) {
    this._propagationContext = e;
    return this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(e, n) {
    let i = n && n.event_id ? n.event_id : eJ();
    if (!this._client) {
      vF.warn("No client configured on scope - will not capture exception!");
      return i;
    }
    let t = Error("Sentry syntheticException");
    this._client.captureException(e, {
      originalException: e,
      syntheticException: t,
      ...n,
      event_id: i
    }, this);
    return i;
  }
  captureMessage(e, n, i) {
    let t = i && i.event_id ? i.event_id : eJ();
    if (!this._client) {
      vF.warn("No client configured on scope - will not capture message!");
      return t;
    }
    let f = Error(e);
    this._client.captureMessage(e, n, {
      originalException: e,
      syntheticException: f,
      ...i,
      event_id: t
    }, this);
    return t;
  }
  captureEvent(e, n) {
    let i = n && n.event_id ? n.event_id : eJ();
    this._client ? this._client.captureEvent(e, {
      ...n,
      event_id: i
    }, this) : vF.warn("No client configured on scope - will not capture event!");
    return i;
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
      e(this);
    }), this._notifyingListeners = !1);
  }
}
export let $$p0 = h;
export const H = $$p0;