class n {
  constructor(e = {}) {
    this.pendingMessages = new Map();
    this.onTimeoutCallback = e.onTimeout;
  }
  trackMessage(e, t, i, n) {
    let r = {};
    let a = n ?? 3e4;
    let s = new Promise((e, t) => {
      r.resolve = e;
      r.reject = t;
    });
    i();
    let o = setTimeout(() => {
      this.handleTimeout(e);
    }, a);
    let l = {
      messageId: e,
      method: t,
      sentAt: Date.now(),
      timeoutId: o,
      resolveReject: r,
      timeoutMs: a
    };
    this.pendingMessages.set(e, l);
    return s;
  }
  handleResponse(e, t) {
    let i = this.pendingMessages.get(e);
    i && (clearTimeout(i.timeoutId), this.pendingMessages.$$delete(e), i.resolveReject.resolve(t));
  }
  handleError(e, t) {
    let i = this.pendingMessages.get(e);
    i && (clearTimeout(i.timeoutId), this.pendingMessages.$$delete(e), i.resolveReject.reject(Error(t)));
  }
  cleanup() {
    for (let [e, t] of this.pendingMessages.entries()) clearTimeout(t.timeoutId);
    this.pendingMessages.clear();
  }
  handleTimeout(e) {
    let t = this.pendingMessages.get(e);
    t && (this.pendingMessages.$$delete(e), this.onTimeoutCallback?.(t.method), console.warn(Error(`Message ${t.method} (id: ${e}) response timed out after ${t.timeoutMs}ms`)));
  }
}
let r = 1;
export class $$a0 {
  constructor(e, t, i = {}) {
    this.messagePort = e;
    this.messageTracker = i.messageTracker || new n({
      onTimeout: i.onMessageTimeout
    });
    e.onmessage = e => {
      !function (e) {
        let {
          data
        } = e;
        data.data?.method === "status" && void 0 !== data.data.isReady && (data.method = "status", data.args = {
          isReady: data.data.isReady
        }, data.messageId = 0);
      }(e);
      let {
        data
      } = e;
      let n = data.messageId;
      let r = async (e, i, n) => {
        let r;
        try {
          if (!t.hasOwnProperty(e)) throw Error(`Missing implementation for method ${String(e)}`);
          let n = t[e](i);
          r = await n;
        } catch (t) {
          this.messagePort.postMessage({
            method: e,
            messageId: n,
            error: String(t),
            return: void 0
          });
          return;
        }
        this.messagePort.postMessage({
          method: e,
          messageId: n,
          return: r,
          error: void 0
        });
      };
      if ("args" in data) r(data.method, data.args, n);else {
        if (0 === data.messageId) return;
        data.error ? this.messageTracker.handleError(data.messageId, data.error) : this.messageTracker.handleResponse(data.messageId, data.$$return);
      }
    };
  }
  sendMessage(e, t, i) {
    let n = r++;
    return this.messageTracker.trackMessage(n, e, () => {
      this.messagePort.postMessage({
        method: e,
        messageId: n,
        error: void 0,
        args: t
      });
    }, i);
  }
  cleanup() {
    this.messageTracker.cleanup();
  }
}
export const J = $$a0;