import { Q } from "../vendor/166452";
import { S$ } from "../vendor/348210";
class o extends Q {
  constructor() {
    super();
    this.setup = e => {
      if (!S$ && window.addEventListener) {
        let r = () => e();
        window.addEventListener("visibilitychange", r, !1);
        window.addEventListener("focus", r, !1);
        return () => {
          window.removeEventListener("visibilitychange", r);
          window.removeEventListener("focus", r);
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
      "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
    });
  }
  setFocused(e) {
    this.focused = e;
    e && this.onFocus();
  }
  onFocus() {
    this.listeners.forEach(e => {
      e();
    });
  }
  isFocused() {
    return "boolean" == typeof this.focused ? this.focused : "undefined" == typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
export let $$a0 = new o();
export const m = $$a0;