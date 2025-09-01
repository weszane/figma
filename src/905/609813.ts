export class $$n0 {
  _startTime = performance.now();
  _startEpochTime = Date.now();
  _timerId = null;
  metadata = null;
  finished = !1;
  backgrounded = !1;
  wasOffline = !1;
  wasDisconnected = !1;
  constructor(e = {}, t) {
    this.backgrounded = "hidden" === document.visibilityState;
    this.wasOffline = !navigator.onLine;
    if (document.addEventListener("visibilitychange", this.onVisibilityChange), window.addEventListener("offline", this.onOffline), t && (this.metadata = t), e.onTimeout) {
      if (!e.timeoutMs) throw Error("onTimeout specified without timeoutMs");
      this._timerId = setTimeout(() => {
        e.onTimeout(this.backgrounded, this.wasOffline, this.wasDisconnected);
      }, e.timeoutMs);
    }
    void 0 !== e.isConnectedToLG && (this.wasDisconnected = !e.isConnectedToLG);
  }
  get startEpochTime() {
    return this._startEpochTime;
  }
  get startTime() {
    return this._startTime;
  }
  finish = () => (this.finished && console.debug("Timer already finished"), this._timerId && clearTimeout(this._timerId), this.finished = !0, document.removeEventListener("visibilitychange", this.onVisibilityChange), Math.round(performance.now() - this._startTime));
  getTime() {
    return Math.round(performance.now() - this._startTime);
  }
  onVisibilityChange = () => {
    "hidden" === document.visibilityState && (this.backgrounded = !0);
  };
  onOffline = () => {
    this.wasOffline = !0;
  };
  markDisconnected = () => {
    this.wasDisconnected = !0;
  };
}
export const M = $$n0;