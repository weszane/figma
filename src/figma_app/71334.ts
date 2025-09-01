import { g } from "../905/401009";
import { C } from "../905/637936";
import { r as _$$r } from "../905/882131";
export class $$s0 {
  constructor() {
    this.queues_ = {};
    _$$r.forEach(e => {
      this.queues_[e] = new C();
    });
    this.pendingHostCallback_ = null;
    this.signals_ = new WeakMap();
  }
  postTask(e, t) {
    if (void 0 !== (t = Object.assign({}, t)).signal) {
      if (null === t.signal || !("aborted" in t.signal) || "function" != typeof t.signal.addEventListener) return Promise.reject(TypeError("'signal' is not a valid 'AbortSignal'"));
      if (t.signal && t.signal.priority && !_$$r.includes(t.signal.priority)) return Promise.reject(TypeError(`Invalid task priority: '${t.signal.priority}'`));
    }
    if (void 0 !== t.priority && (null === t.priority || !_$$r.includes(t.priority))) return Promise.reject(TypeError(`Invalid task priority: '${t.priority}'`));
    if (void 0 === t.delay && (t.delay = 0), t.delay = Number(t.delay), t.delay < 0) return Promise.reject(TypeError("'delay' must be a positive number."));
    let r = {
      callback: e,
      options: t,
      resolve: null,
      reject: null,
      hostCallback: null,
      abortCallback: null,
      onTaskCompleted: function () {
        this.options.signal && !this.abortCallback && (this.options.signal.removeEventListener("abort", this.abortCallback), this.abortCallback = null);
      },
      onTaskAborted: function () {
        this.hostCallback && (this.hostCallback.cancel(), this.hostCallback = null);
        this.options.signal.removeEventListener("abort", this.abortCallback);
        this.abortCallback = null;
        this.reject(this.options.signal.reason);
      },
      isAborted: function () {
        return this.options.signal && this.options.signal.aborted;
      }
    };
    let n = new Promise((e, t) => {
      r.resolve = e;
      r.reject = t;
    });
    this.schedule_(r);
    return n;
  }
  schedule_(e) {
    let t = e.options.signal;
    if (t) {
      if (t.aborted) {
        e.reject(new DOMException("The task was aborted.", "AbortError"));
        return;
      }
      e.abortCallback = () => {
        e.onTaskAborted();
      };
      t.addEventListener("abort", e.abortCallback);
    }
    if (e.options.delay > 0) {
      e.hostCallback = new g(() => {
        e.hostCallback = null;
        this.onTaskDelayExpired_(e);
      }, null, e.options.delay);
      return;
    }
    this.pushTask_(e);
    this.scheduleHostCallbackIfNeeded_();
  }
  onTaskDelayExpired_(e) {
    this.pushTask_(e);
    this.pendingHostCallback_ && (this.pendingHostCallback_.cancel(), this.pendingHostCallback_ = null);
    this.schedulerEntryCallback_();
  }
  onPriorityChange_(e) {
    let t = this.signals_.get(e);
    if (void 0 === t) throw Error("Attempting to change priority on an unregistered signal");
    if (t === e.priority) return;
    let r = this.queues_[t];
    this.queues_[e.priority].merge(r, t => t.options.signal === e);
    this.signals_.set(e, e.priority);
  }
  schedulerEntryCallback_() {
    this.pendingHostCallback_ = null;
    this.runNextTask_();
    this.scheduleHostCallbackIfNeeded_();
  }
  scheduleHostCallbackIfNeeded_() {
    let e = this.nextTaskPriority_();
    null != e && ("background" !== e && this.pendingHostCallback_ && this.pendingHostCallback_.isIdleCallback() && (this.pendingHostCallback_.cancel(), this.pendingHostCallback_ = null), this.pendingHostCallback_ || (this.pendingHostCallback_ = new g(() => {
      this.schedulerEntryCallback_();
    }, e, 0)));
  }
  pushTask_(e) {
    let t;
    if (t = e.options.priority ? e.options.priority : e.options.signal && e.options.signal.priority ? e.options.signal.priority : "user-visible", !_$$r.includes(t)) throw TypeError(`Invalid task priority: ${t}`);
    if (e.options.signal && e.options.signal.priority) {
      let t = e.options.signal;
      this.signals_.has(t) || (t.addEventListener("prioritychange", () => {
        this.onPriorityChange_(t);
      }), this.signals_.set(t, t.priority));
    }
    this.queues_[t].push(e);
  }
  runNextTask_() {
    let e = null;
    do {
      let t = this.nextTaskPriority_();
      if (null == t) return;
      e = this.queues_[t].takeNextTask();
    } while (e.isAborted());
    try {
      let t = e.callback();
      e.resolve(t);
    } catch (t) {
      e.reject(t);
    } finally {
      e.onTaskCompleted();
    }
  }
  nextTaskPriority_() {
    for (let e = 0; e < _$$r.length; e++) {
      let t = _$$r[e];
      if (!this.queues_[t].isEmpty()) return t;
    }
    return null;
  }
}
export const _ = $$s0;