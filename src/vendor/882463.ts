import { Q } from "../vendor/166452";
import { S$ } from "../vendor/348210";
class o extends Q {
  constructor() {
    super();
    this.setup = e => {
      if (!S$ && window.addEventListener) {
        let r = () => e();
        window.addEventListener("online", r, !1);
        window.addEventListener("offline", r, !1);
        return () => {
          window.removeEventListener("online", r);
          window.removeEventListener("offline", r);
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      null == (e = this.cleanup) || e.call(this);
      this.cleanup = void 0;
    }
  }
  setEventListener(e) {
    var r;
    this.setup = e;
    null == (r = this.cleanup) || r.call(this);
    this.cleanup = e(e => {
      "boolean" == typeof e ? this.setOnline(e) : this.onOnline();
    });
  }
  setOnline(e) {
    this.online = e;
    e && this.onOnline();
  }
  onOnline() {
    this.listeners.forEach(e => {
      e();
    });
  }
  isOnline() {
    return "boolean" == typeof this.online ? this.online : "undefined" == typeof navigator || void 0 === navigator.onLine || navigator.onLine;
  }
}
export let $$a0 = new o();
export const t = $$a0;