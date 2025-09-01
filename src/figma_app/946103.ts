import { r as _$$r } from "../905/882131";
export class $$$$i1 extends Event {
  constructor(e, t) {
    if (!t || !_$$r.includes(t.previousPriority)) throw TypeError(`Invalid task priority: '${t.previousPriority}'`);
    super(e);
    this.previousPriority = t.previousPriority;
  }
}
export class $$a0 extends AbortController {
  constructor(e = {}) {
    if (super(), null == e && (e = {}), "object" != typeof e) throw TypeError("'init' is not an object");
    let t = void 0 === e.priority ? "user-visible" : e.priority;
    if (!_$$r.includes(t)) throw TypeError(`Invalid task priority: '${t}'`);
    this.priority_ = t;
    this.isPriorityChanging_ = !1;
    (function (e) {
      let t = e.signal;
      Object.defineProperties(t, {
        priority: {
          get: function () {
            return e.priority_;
          },
          enumerable: !0
        },
        onprioritychange: {
          value: null,
          writable: !0,
          enumerable: !0
        }
      });
      t.addEventListener("prioritychange", e => {
        t.onprioritychange && t.onprioritychange(e);
      });
    })(this);
  }
  setPriority(e) {
    if (!_$$r.includes(e)) throw TypeError("Invalid task priority: " + e);
    if (this.isPriorityChanging_) throw new DOMException("", "NotAllowedError");
    if (this.signal.priority === e) return;
    this.isPriorityChanging_ = !0;
    let t = this.priority_;
    this.priority_ = e;
    let r = new $$$$i1("prioritychange", {
      previousPriority: t
    });
    this.signal.dispatchEvent(r);
    this.isPriorityChanging_ = !1;
  }
}
export const i = $$a0;
export const w = $$$$i1;