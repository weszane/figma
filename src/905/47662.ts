import { WebSocketCloseCodes, ConnectionModes, ComputationError } from "../905/957591";
import { ExponentialBackoff, createDeferredPromise, throwAsyncIf, throwIf } from "../905/419236";
let a = {
  backoffInitialMs: 250,
  backoffMaxMs: 6e5,
  backoffMultiplier: 2
};
export class $$s0 {
  constructor(e, t, i, n, s = {}, o, l) {
    this.uriParams = e;
    this.wsImpl = t;
    this.authArgs = i;
    this.emitter = n;
    this.clientOptions = s;
    this.visibilityObserver = o;
    this.clearStickySession = l;
    this.uri = this.constructUri();
    this.visibilityObserver = o;
    o && o.addChangeHandler(this.visibilityChange);
    let d = s.backoffConfig ?? a;
    this.backoff = new ExponentialBackoff(d);
    this.registerPingInterval();
  }
  uri;
  ws = null;
  state = {
    type: "disconnected"
  };
  backoff;
  onCloseResolve = null;
  reconnectTimeout = null;
  pingInterval = null;
  preventReconnectForDebugging = !1;
  preventAutoReconnectOnNextClose = !1;
  connectionCount = 0;
  cleanup() {
    this.visibilityObserver && this.visibilityObserver.removeChangeHandler(this.visibilityChange);
    this.closeWithoutReconnecting(WebSocketCloseCodes.CLIENT_GOING_AWAY, "client_cleanup");
    this.clearPingInterval();
  }
  constructUri() {
    "/" === this.uriParams.url[this.uriParams.url.length - 1] && (this.uriParams.url = this.uriParams.url.slice(0, -1));
    let e = "/api/livegraph";
    this.uriParams.useNext && (e = "/api/livegraph-next");
    (this.uriParams.url.includes("localhost") || this.uriParams.url.includes("127.0.0.1")) && (e = "");
    let t = new URLSearchParams(this.uriParams.pageLoadToken);
    for (let [e, i] of (t.append("userId", this.uriParams.userId || ""), t.append("anonUserId", this.uriParams.anonUserId || ""), t.append("clientType", this.uriParams.clientType), t.append("commitHash", this.uriParams.commitHash), t.append("preload", JSON.stringify(this.uriParams.preloadedViews)), Object.entries(this.uriParams.extras))) t.append(e, i);
    return `${this.uriParams.url}${e}?${t.toString()}`;
  }
  registerPingInterval() {
    this.pingInterval || (this.pingInterval = setInterval(() => {
      this.isConnected() && !this.visibilityObserver?.isHidden() && this.send({
        messageType: "ping"
      });
    }, this.getIntervalWithJitter()));
  }
  clearPingInterval() {
    this.pingInterval && (clearInterval(this.pingInterval), this.pingInterval = null);
  }
  observers = new Set();
  addObserver(e) {
    this.observers.add(e);
  }
  removeObserver(e) {
    this.observers.$$delete(e);
  }
  get debug() {
    return {
      disconnect: () => {
        this.preventReconnectForDebugging = !0;
        this.ws && this.ws.close(WebSocketCloseCodes.MANUAL_CLOSE, "for-testing");
      },
      reconnect: () => {
        this.preventReconnectForDebugging = !1;
        this.connect();
      },
      sendPingNow: () => {
        this.sendPingNow();
      }
    };
  }
  currentConnAttemptCount = 0;
  async connect() {
    let [e, t] = createDeferredPromise();
    let i = !1;
    let a = this.connectionCount > 0;
    let s = this.visibilityObserver?.isHidden() && a;
    if (this.preventReconnectForDebugging || s || "connected" === this.state.type || "connecting" === this.state.type) return "skipped";
    this.clearReconnect();
    this.currentConnAttemptCount++;
    let o = performance.getEntriesByType("navigation");
    let l = o.length > 0 && o[0]?.type === "reload";
    let d = !!this.clientOptions.livegraphUnstickOnRefresh;
    l && !a && (this.emitter.emit({
      type: "HARD_REFRESH"
    }), d && this.clearStickySession?.());
    let c = this.clientOptions.splayDesktopBellConnConfig;
    if (c) {
      let e = new Date();
      if (c.timesUtc.some(t => {
        let [i, n, r] = t.split(":").map(Number);
        let a = new Date(e);
        a.setUTCHours(i ?? 0, n, r);
        return Math.abs(e.getTime() - a.getTime()) / 1e3 < c.rangeSec;
      })) {
        let e = Math.random() * c.durationSec * 1e3;
        let t = null;
        await new Promise(i => {
          t = setTimeout(i, e);
        });
        t && clearTimeout(t);
      }
    }
    let u = new URL(this.uri);
    u.searchParams.append("connectionType", a ? ConnectionModes.Reconnect : ConnectionModes.Initial);
    u.searchParams.append("reconnect", this.backoff.attemptsSoFar() + "");
    a && u.searchParams.$$delete("preload");
    this.ws = this.wsImpl(u.toString());
    this.setConnectionState({
      type: "connecting"
    });
    let p = this.ws;
    this.ws.onopen = e => {
      let n = this.ws;
      if (throwAsyncIf(p === n, "Current websocket is different from newly-opened websocket"), throwIf(null !== this.ws, "websocket should be non-null"), this.ws?.readyState !== this.ws?.OPEN) return;
      this.setConnectionState({
        type: "connected",
        authenticated: !1,
        count: this.backoff.attemptsSoFar()
      });
      t("success");
      i = !0;
      this.connectionCount += 1;
      let a = {
        clientType: this.uriParams.clientType,
        commitHash: this.uriParams.commitHash
      };
      this.uriParams.extras.clientUrl && (a.clientUrl = this.uriParams.extras.clientUrl);
      let s = {
        messageType: "auth",
        clientType: this.uriParams.clientType,
        args: this.authArgs,
        tags: a
      };
      for (let e of (this.emitter.emit({
        type: "REQUEST_MESSAGE",
        message: s
      }), this.ws.send(JSON.stringify(s)), this.observers)) e.onConnectionOpen();
    };
    this.ws.onclose = e => {
      if (this.setConnectionState({
        type: "disconnected"
      }), this.emitter.emit({
        type: "CONNECTION_CLOSED",
        url: this.uri,
        closeEvent: e
      }), [WebSocketCloseCodes.SERVER_SESSION_LIMIT_REACHED, WebSocketCloseCodes.AUTH_FAIL].includes(e.code) && this.clearStickySession?.(), i || t("failure"), this.onCloseResolve?.(), this.preventAutoReconnectOnNextClose) {
        this.preventAutoReconnectOnNextClose = !1;
        return;
      }
      for (let t of (this.reconnectTimeout || (this.reconnectTimeout = setTimeout(() => {
        this.reconnectTimeout = null;
        this.connect();
      }, this.backoff.nextBackoffMs())), this.observers)) t.onConnectionClose(e);
    };
    this.ws.onerror = e => {
      this.emitter.emit({
        type: "ERROR",
        error: e
      });
    };
    this.ws.onmessage = ({
      data: e
    }) => {
      let t = JSON.parse(e);
      if (t) {
        switch (this.emitter.emit({
          type: "RESPONSE_MESSAGE",
          message: t
        }), t.messageType) {
          case "authSuccess":
            this.setConnectionState({
              type: "connected",
              authenticated: !0,
              count: this.currentConnAttemptCount,
              podName: t.podName,
              containerName: t.containerName,
              serverVersion: t.serverVersion
            });
            this.backoff.reset();
            this.currentConnAttemptCount = 0;
            break;
          case "authFail":
            this.emitter.emit({
              type: "ERROR",
              error: new ComputationError()
            });
            this.setConnectionState({
              type: "error",
              errorType: "authFail"
            });
            this.closeWithoutReconnecting(WebSocketCloseCodes.AUTH_FAIL, "client_auth_fail");
            break;
          case "ack":
            this._lastAckTime = new Date();
            break;
          case "requestError":
            this.setConnectionState({
              type: "error",
              errorType: "requestError"
            });
            this.ws?.close(WebSocketCloseCodes.CLIENT_ERROR, "request_error");
            break;
          case "serverError":
            this.setConnectionState({
              type: "error",
              errorType: "serverError"
            });
            this.ws?.close(WebSocketCloseCodes.SERVER_ERROR, "server_error");
        }
        for (let e of this.observers) e.handleMessage(t);
      }
    };
    return e;
  }
  clearReconnect() {
    this.reconnectTimeout && (clearTimeout(this.reconnectTimeout), this.reconnectTimeout = null);
  }
  visibilityChange = () => {
    this.visibilityObserver?.isHidden() ? this.clearPingInterval() : (this.sendPingNow(), this.registerPingInterval(), this.connect());
  };
  async closeWithoutReconnecting(e, t) {
    let [i, n] = createDeferredPromise();
    this.onCloseResolve = n;
    this.clearReconnect();
    this.preventAutoReconnectOnNextClose = !0;
    null !== this.ws && this.ws?.readyState !== this.ws?.CLOSED && (this.ws.close(e, t), await i);
  }
  async reconnect() {
    this.preventAutoReconnectOnNextClose = !1;
    return this.connect();
  }
  getIntervalWithJitter() {
    return 3e4 + (Math.random() - .5) * 5e3;
  }
  isConnected() {
    return "connected" === this.state.type && !!this.ws && this.ws?.readyState === this.ws?.OPEN;
  }
  isAuthenticated() {
    return this.isConnected() && this.state.authenticated;
  }
  isInitial() {
    return 1 === this.connectionCount;
  }
  getConnectionCount() {
    return this.connectionCount;
  }
  send(e) {
    this.isConnected() ? (this.emitter.emit({
      type: "REQUEST_MESSAGE",
      message: e
    }), this.ws.send(JSON.stringify(e))) : throwAsyncIf(!1, `ClientConnection.send called with message type ${e.messageType} while in disconnected state`);
  }
  sendPingNow() {
    this.isConnected() && !this.visibilityObserver?.isHidden() && this.send({
      messageType: "ping"
    });
  }
  _lastAckTime = new Date(0);
  getLastAckTime() {
    return this._lastAckTime;
  }
  setConnectionState(e) {
    this.state = e;
    this.emitter.emit({
      type: "CONNECTION_STATE",
      state: e,
      url: this.uri
    });
  }
  getState() {
    return this.state;
  }
  isReconnectScheduled() {
    return "disconnected" === this.state.type && null !== this.reconnectTimeout;
  }
  getBackoff() {
    return this.backoff;
  }
  getWsUrl() {
    return this.ws ? new URL(this.ws.url) : null;
  }
}
export const A = $$s0;