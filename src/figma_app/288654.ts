import { useContext, useState, useEffect, useMemo, useCallback, useRef, useLayoutEffect } from "react";
import { zN } from "../905/19536";
import { resourceUtils } from "../905/989992";
import { W } from "../905/491061";
import { lw, bu } from "../905/663269";
import { SubscriptionManager } from "../905/417830";
import { Dj } from "../figma_app/28817";
import { F4 } from "../905/795642";
import { M } from "../905/609813";
import { DEFAULT_LOADING_STATE } from "../905/957591";
import { trackEventAnalytics } from "../905/449184";
import { ZC } from "../figma_app/39751";
import { g as _$$g } from "../905/880308";
import { ob } from "../905/436043";
function f() {
  let e = useContext(ob);
  if (!e) throw Error("Tried to use useSubscription outside a LiveGraph context provider");
  return e;
}
export function $$E4() {
  return f().client;
}
function y(e) {
  return !e.hasOwnProperty("enabled") || !!e.enabled;
}
export function $$b2(...e) {
  let t = T(e) ? e[0].view : e[0];
  let r = T(e) ? e[0].args : e[1];
  let i = (T(e) ? e[1] : e[2]) ?? {};
  let s = y(i);
  let [l, d] = useState(s && r ? DEFAULT_LOADING_STATE : F4);
  let u = f();
  let [_, h] = useState(r);
  let m = i.traceId;
  let g = l;
  u.mock && r && (g = u.mock.useSubscription(t, r));
  r && !lw(r, _) && (h(r), d(g = s ? DEFAULT_LOADING_STATE : F4));
  useEffect(() => {
    if (u.mock) return;
    if (!1 === s) {
      d(F4);
      return;
    }
    if (!_) return;
    let e = u.client?.subscribe(t, _, e => {
      d(e);
    }, m);
    return () => {
      e?.();
    };
  }, [s, _, u.client, u.mock, t, m]);
  return useMemo(() => resourceUtils.from(g), [g]);
}
function T(e) {
  return Array.isArray(e) && (1 === e.length || 2 === e.length) && bu(e[0]);
}
export function $$I0(...e) {
  let t = T(e) ? e[0].view : e[0];
  let r = T(e) ? e[0].args : e[1];
  let l = (T(e) ? e[1] : e[2]) ?? {};
  let d = zN(r, lw);
  let u = y(l);
  let _ = function () {
    let [e, t] = useState(0);
    return useCallback(() => t(e => e + 1), []);
  }();
  let g = f();
  let E = l.traceId;
  let b = function (e, t) {
    let r = useRef(_$$g());
    let i = ZC(e);
    let a = ZC(t);
    void 0 === i || void 0 === a || i === e && lw(t, a) || (r.current = _$$g());
    return r.current;
  }(t, d);
  let S = useMemo(() => g.client?.viewHasStaticQueries(t) ? {
    ...d,
    __requestId: b
  } : d, [d, b, t, g.client]);
  let v = u && S ? g.mock ? g.mock.useSubscription(t, S) : g.client?.getViewResult(t, S) ?? DEFAULT_LOADING_STATE : F4;
  useEffect(() => {
    if (!g.mock && !1 !== u && S) return g.client?.subscribe(t, S, _, E);
  }, [u, g.client, g.mock, t, E, S, _]);
  let A = useMemo(() => new W(() => () => {}), []);
  return useMemo(() => {
    let e = g.client;
    return null == e ? resourceUtils.disabled() : resourceUtils.suspendableFrom(v, () => new Promise((r, n) => {
      let i = e.subscribe(t, d, e => {
        "loaded" === e.status ? (r(), setTimeout(() => i?.())) : e.errors && (n(e.errors), setTimeout(() => i?.()));
      });
    }), A);
  }, [d, g.client, v, A, t]);
}
export function $$S7(e, t, r = {}) {
  let i = f();
  let s = y(r);
  let [o, d] = useState({});
  let [c] = useState(() => new SubscriptionManager(i.client, () => d({})));
  useLayoutEffect(() => {
    c.update(e, s ? t : []);
  }, [c, e, t, s]);
  useLayoutEffect(() => () => c.clear(), [c]);
  return useMemo(() => t.map(e => ({
    args: e,
    result: s ? resourceUtils.from(c.currentResult(e)) : resourceUtils.disabled()
  })), [c, t, s, o]);
}
export function $$v3() {
  let e = f();
  let [t, r] = useState(e.client ? e.client.getHealthStatus() : Dj.DISCONNECTED);
  let i = e => r(e);
  useEffect(() => {
    if (null !== e.client) return e.client.addHealthListener(i);
  }, [e]);
  return t;
}
class A {
  constructor(e, t, r) {
    this.viewArgs = e;
    this.traceId = _$$g();
    this.errors = null;
    this._isLoading = !0;
    this.timer = new M({
      onTimeout: () => t(this),
      timeoutMs: r
    });
  }
  finish() {
    this._isLoading = !1;
    this.timer.finish();
  }
  get timeElapsedMs() {
    return this.timer.getTime();
  }
  get wasBackgrounded() {
    return this.timer.backgrounded;
  }
  get wasOffline() {
    return this.timer.wasOffline;
  }
  get wasDisconnected() {
    return this.timer.wasDisconnected;
  }
  get isLoading() {
    return this._isLoading;
  }
}
export function $$x6(e, t, r) {
  let i = useRef(null);
  let a = !1 !== r.enabled;
  let s = r.subscriptionLogger;
  let l = useRef(t);
  let d = i.current;
  !i.current && a && (i.current = new A(t, e => s.onEvent("stuck", u, e), s.stuckMs));
  let c = a ? i.current.traceId : void 0;
  let u = $$b2(e, t, {
    enabled: a,
    traceId: c
  });
  if (null === d && a && s.onEvent("initiated", u, i.current), !lw(t, l.current)) {
    let e = new A(t, e => s.onEvent("stuck", u, e), s.stuckMs);
    i.current?.isLoading && (i.current.finish(), s.onEvent("canceled", u, i.current, {
      nextTraceId: e.traceId
    }));
    i.current = e;
    s.onEvent("initiated", u, i.current);
    l.current = t;
  }
  useEffect(() => {
    "loaded" === u.status ? i.current?.isLoading && (i.current.finish(), s.onEvent("loaded", u, i.current)) : "errors" === u.status && i.current?.isLoading && (i.current.finish(), i.current.errors = u.errors, s.onEvent("error", u, i.current));
  }, [u, u.errors, u.status, s]);
  useEffect(() => () => {
    i.current?.isLoading && (i.current.finish(), s.onEvent("canceled", u, i.current));
  }, []);
  return u;
}
export function $$N5(e, t, r = {}) {
  let i = useRef(window.performance.now());
  let a = useRef(!1);
  useEffect(() => {
    if (!a.current && "loading" !== e.status && "disabled" !== e.status) {
      let n = window.performance.now();
      trackEventAnalytics(t, {
        ...r,
        durationMs: n - i.current,
        status: e.status
      });
      a.current = !0;
    }
  }, [r, t, e.status]);
}
export { Dj } from "../figma_app/28817";
export const Bh = $$I0;
export const Rs = $$b2;
export const Ym = $$v3;
export const ZA = $$E4;
export const ap = $$N5;
export const oS = $$x6;
export const p = $$S7;