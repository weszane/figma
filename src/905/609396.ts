let n;
export class $$r4 {
  constructor(e) {
    this.elapsedTime = 0;
    this.totalElapsedTime = 0;
    this.startTime = 0;
    this.callDepth = 0;
    this.topLevelCallCount = 0;
    this.totalCallCount = 0;
    this.performanceNow = e || (() => performance.now());
  }
  start() {
    0 === this.callDepth && (this.startTime = this.performanceNow(), this.topLevelCallCount++);
    this.callDepth++;
    this.totalCallCount++;
  }
  stop() {
    if (0 === this.callDepth) {
      console.debug("Called stop on an already-stopped timer");
      return;
    }
    if (this.callDepth--, 0 === this.callDepth) {
      let e = this.performanceNow() - this.startTime;
      this.elapsedTime += e;
      this.totalElapsedTime += e;
    }
  }
  time(e) {
    this.start();
    let t = e();
    this.stop();
    return t;
  }
  static time(e) {
    let t = new $$r4();
    t.time(e);
    return t.getElapsedTime();
  }
  getElapsedTime() {
    return 0 === this.callDepth ? this.elapsedTime : this.elapsedTime + this.performanceNow() - this.startTime;
  }
  getTotalElapsedTime() {
    return 0 === this.callDepth ? this.totalElapsedTime : this.totalElapsedTime + this.performanceNow() - this.startTime;
  }
  getTopLevelCallCount() {
    return this.topLevelCallCount;
  }
  getTotalCallCount() {
    return this.totalCallCount;
  }
  reset() {
    if (this.callDepth > 0) {
      console.error("Cannot reset a running timer");
      return;
    }
    this.startTime = 0;
    this.elapsedTime = 0;
    this.topLevelCallCount = 0;
  }
}
class a {
  constructor() {
    this.timerStack = [];
    this.startListeners = new Set();
    this.stopListeners = new Set();
  }
  start(e) {
    let t = new $$r4();
    this.timerStack.push({
      name: e,
      timer: t
    });
    this.startListeners.forEach(t => t(e, 0));
    t.start();
  }
  stop(e) {
    let t = this.timerStack.pop();
    if (!t) {
      console.error(`Expected last started timer to be ${e}, but got an empty timer stack`);
      return;
    }
    if (t.name !== e) {
      console.error(`Expected last started timer to be ${e}, but got ${t.name}`);
      return;
    }
    t.timer.stop();
    this.stopListeners.forEach(i => i(e, t.timer.getElapsedTime()));
  }
  time(e, t) {
    this.start(e);
    let i = t();
    this.stop(e);
    return i;
  }
  addStartListener(e) {
    this.startListeners.add(e);
  }
  removeStartListener(e) {
    this.startListeners.$$delete(e);
  }
  addStopListener(e) {
    this.stopListeners.add(e);
  }
  removeStopListener(e) {
    this.stopListeners.$$delete(e);
  }
}
class s {
  constructor(e) {
    this.name = e;
    this.hitCount = 0;
    this.totalElapsedTime = 0;
    this.maxElapsedTime = 0;
    this.elapsedTimes = [];
    this.children = [];
  }
  reset() {
    this.hitCount = 0;
    this.totalElapsedTime = 0;
    this.maxElapsedTime = 0;
    this.elapsedTimes = [];
    this.children.forEach(e => e.reset());
  }
}
export class $$o5 {
  constructor(e) {
    this.options = e;
    this.timerGroup = new a();
    this.rootNodes = [];
    this.nodeStack = [];
    this.warnOpenCount = 0;
    this.onStart = e => {
      let t = null;
      let i = this.rootNodes;
      for (let n of (this.nodeStack.length > 0 && (i = this.nodeStack[this.nodeStack.length - 1].children), i)) if (n.name === e) {
        t = n;
        break;
      }
      t || (t = new s(e), i.push(t));
      this.nodeStack.push(t);
    };
    this.onStop = (e, t) => {
      let i = this.nodeStack.pop();
      if (!i) {
        console.error("Got onStop with an empty result stack");
        return;
      }
      for (i.hitCount++, i.totalElapsedTime += t, i.maxElapsedTime = Math.max(i.maxElapsedTime, t); i.elapsedTimes.length >= this.options.bufferSize;) i.elapsedTimes.shift();
      i.elapsedTimes.push(t);
    };
    this.timerGroup.addStartListener(this.onStart);
    this.timerGroup.addStopListener(this.onStop);
  }
  start(e) {
    this.timerGroup.start(e);
  }
  stop(e) {
    this.timerGroup.stop(e);
  }
  time(e, t) {
    this.start(e);
    let i = t();
    this.stop(e);
    return i;
  }
  areTimersOpen() {
    return this.nodeStack.length > 0;
  }
  report() {
    if (this.nodeStack.length > 0) {
      var e;
      0 == ((e = ++this.warnOpenCount) & e - 1) && console.warn("Asking for a report while some timers remain open", JSON.stringify(this.nodeStack.map(e => e.name)));
    }
    return this.rootNodes;
  }
  reset() {
    this.rootNodes.forEach(e => e.reset());
  }
  addStartListener(e) {
    this.timerGroup.addStartListener(e);
  }
  removeStartListener(e) {
    this.timerGroup.removeStartListener(e);
  }
  addStopListener(e) {
    this.timerGroup.addStopListener(e);
  }
  removeStopListener(e) {
    this.timerGroup.removeStopListener(e);
  }
  getBufferSize() {
    return this.options.bufferSize;
  }
}
let l = "undefined" != typeof performance && "mark" in performance && "measure" in performance && "clearMarks" in performance;
let d = class e extends $$r4 {
  constructor(e, t, i) {
    super();
    this._isUnreliable = !1;
    this.name = e;
    this.attributes = t;
    this.group = i;
    this.ref = new WeakRef(this);
    p.add(this);
  }
  start() {
    this.callDepth = 0;
    this.reset();
    super.start();
    $$h3.isPerfReportEnabled && (this.mark = performance.mark(this.performanceMarkStartName, {
      detail: this.attributes
    }));
  }
  pause() {
    super.stop();
  }
  resume() {
    super.start();
  }
  get isUnreliable() {
    return this._isUnreliable || document.hidden;
  }
  set isUnreliable(e) {
    this._isUnreliable = e;
  }
  get isRunning() {
    return this.callDepth > 0;
  }
  setTime(e) {
    this.elapsedTime = e;
  }
  stop() {
    if (super.stop(), $$h3.isPerfReportEnabled && this.mark) {
      performance.mark(this.performanceMarkEndName, {
        detail: this.attributes
      });
      try {
        performance.measure(this.performanceMeasureName, this.performanceMarkStartName, this.performanceMarkEndName);
        performance.clearMarks(this.performanceMarkStartName);
        performance.clearMarks(this.performanceMarkEndName);
      } catch {}
      this.mark = void 0;
    }
    this.group && (this.group.onStop(this), this.group = void 0);
    return this.getElapsedTime();
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  getAttributes() {
    return this.attributes;
  }
  stableId() {
    let t = this.attributes.key;
    void 0 === t && (void 0 === this.id && (this.id = e.operationSeq++), t = this.id.toString());
    return t;
  }
  get performanceMeasureName() {
    let e = this.stableId();
    return `${this.name}::${e}`;
  }
  get performanceMarkStartName() {
    return `${this.performanceMeasureName}::start`;
  }
  get performanceMarkEndName() {
    return `${this.performanceMeasureName}::end`;
  }
};
d.operationSeq = 0;
let $$c2 = d;
let u = class e {
  static registryCallback(t) {
    e.operations.$$delete(t);
  }
  static add(t) {
    e.operations.add(t.ref);
    e.registry.register(t, t.ref, t.ref);
  }
  static forEach(t) {
    e.operations.forEach(i => {
      let n = i.deref();
      n ? t(n) : (e.operations.$$delete(i), e.registry.unregister(i));
    });
  }
};
u.operations = new Set();
u.registry = new FinalizationRegistry(u.registryCallback);
class p {
  static add(e) {
    u.add(e);
  }
}
p.onVisibiltyChange = () => {
  "hidden" === document.visibilityState && u.forEach(e => {
    e.isRunning && (e.isUnreliable = !0);
  });
};
let m = class e {
  constructor() {
    this._keepResults = !1;
    this.operations = new Map();
  }
  static installCallbacks() {
    e.installVisibilityChangeCallback();
    e.installPeriodicCleanupCallback();
  }
  static global() {
    return g;
  }
  static removePeriodicCleanupCallback() {
    void 0 !== n && (clearInterval(n), n = void 0);
  }
  static installVisibilityChangeCallback() {
    document.addEventListener("visibilitychange", () => {
      p.onVisibiltyChange();
      "visible" === document.visibilityState && this.installPeriodicCleanupCallback();
    });
  }
  static installPeriodicCleanupCallback(e = 6e4, t = 36e5) {
    this.removePeriodicCleanupCallback();
    n = setInterval(() => {
      g.cleanup(t);
    }, e);
  }
  keepResults(e) {
    this._keepResults = void 0 === e || e;
  }
  resetAllTimersBeforeTest() {
    this.operations = new Map();
  }
  start(e, t) {
    let i = this.getOrCreate(e, t);
    i.start();
    return i;
  }
  getOrCreate(e, t) {
    let i = this.operations.get(e);
    i || (i = new Map(), this.operations.set(e, i));
    let n = t ? t.key : void 0;
    let r = i.get(n);
    if (r) return r;
    {
      let r = new $$c2(e, t || {}, this);
      i.set(n, r);
      return r;
    }
  }
  get(e, t) {
    return this.operations.get(e)?.get(t);
  }
  getAll(e) {
    return this.operations.get(e);
  }
  delete(e, t) {
    return e ? this.operations.get(e)?.delete(t) || !1 : (this.operations.clear(), !0);
  }
  pause(e, t) {
    let i = this.operations.get(e)?.get(t);
    return i ? (i.pause(), !0) : (this.maybeThrowError(e, t), !1);
  }
  resume(e, t) {
    let i = this.operations.get(e)?.get(t);
    return i ? (i.resume(), !0) : (this.maybeThrowError(e, t), !1);
  }
  trySetAttribute(e, t, i, n) {
    let r = this.operations.get(e)?.get(t);
    r && r.setAttribute(i, n);
  }
  tryGetAttribute(e, t) {
    let i = this.operations.get(e)?.get(t);
    return i ? i.getAttributes() : {};
  }
  reset(e, t) {
    let i = this.operations.get(e)?.get(t);
    return !!i && (i.reset(), !0);
  }
  tryStop(e, t) {
    let i = this.operations.get(e)?.get(t);
    return i ? i.stop() : 0;
  }
  maybeThrowError(e, t) {}
  stop(e, t) {
    let i = this.operations.get(e)?.get(t);
    return i ? i.stop() : (this.maybeThrowError(e, t), 0);
  }
  onStop(e) {
    this._keepResults || this.$$delete(e.name, e.attributes.key);
  }
  report() {
    return this.operations;
  }
  cleanup(e = 36e5) {
    for (let [t, i] of this.operations.entries()) {
      for (let t of i.values()) t.getElapsedTime() >= e && t.stop();
      0 === i.size && this.operations.$$delete(t);
    }
  }
};
m.isPerfReportEnabled = !l && !1;
let $$h3 = m;
let g = new $$h3();
export class $$f0 {
  constructor() {
    this._distributions = new Map();
  }
  create(e, t) {
    this._distributions.set(e, new _(e, t));
  }
  add(e, t) {
    this._distributions.get(e)?.add(t);
  }
  remove(e) {
    this._distributions.$$delete(e);
  }
  reset(e) {
    this._distributions.get(e)?.resetMetrics();
  }
  analyticsProperties(e) {
    return this._distributions.get(e)?.analyticsProperties();
  }
}
class _ {
  constructor(e, t) {
    this.maxMs = -1;
    this.totalMs = 0;
    this.count = 0;
    this.meanDistanceSq = 0;
    this._analytics_distribution_name = e;
    this._buckets = [];
    this._bins = t;
    for (let e = 0; e < this._bins.length; e++) this._buckets.push(0);
  }
  add(e) {
    for (let t = 0; t < this._bins.length; t++) if (e <= this._bins[t]) {
      this._buckets[t] += 1;
      break;
    }
    let t = this.count > 0 ? this.totalMs / this.count : 0;
    this.maxMs = Math.max(this.maxMs, e);
    this.totalMs += e;
    this.count++;
    let i = this.totalMs / this.count;
    this.meanDistanceSq += (e - t) * (e - i);
  }
  getMode() {
    if (0 === this.count) return null;
    let e = 0;
    let t = -1;
    for (let i = 0; i < this._bins.length; i++) this._buckets[i] > e && (e = this._buckets[i], t = i);
    return t < 0 ? null : {
      min: 0 === t ? 0 : this._bins[t - 1],
      max: this._bins[t]
    };
  }
  toLogParams() {
    let e = [];
    for (let t = 0; t < this._bins.length; t++) e.push(this._buckets[t]);
    return e;
  }
  schema() {
    let e = [];
    for (let t = 0; t < this._bins.length; t++) {
      let i = 0 === t ? 0 : this._bins[t - 1];
      let n = this._bins[t] === Number.MAX_SAFE_INTEGER ? "or_higher" : this._bins[t];
      e.push(`count_${i}_to_${n}_ms`);
    }
    return e;
  }
  toPOJO() {
    let e = {};
    for (let t = 0; t < this._bins.length; t++) e[this._bins[t]] = this._buckets[t];
    e._avg = this.totalMs / this.count;
    e._max = this.maxMs;
    e._stdd = this.count > 1 ? Math.sqrt(this.meanDistanceSq / (this.count - 1)) : 0;
    e._count = this.count;
    e._total = this.totalMs;
    return e;
  }
  resetMetrics() {
    this._buckets = Array(this._bins.length).fill(0);
    this.maxMs = 0;
    this.count = 0;
    this.totalMs = 0;
    this.meanDistanceSq = 0;
  }
  analyticsProperties() {
    let e = {
      schema: this.schema()
    };
    e[this._analytics_distribution_name] = this.toLogParams();
    return e;
  }
}
let A = [1, 9, 17, 19, 20, 23, 25, 29, 32, 48, 64, 80, 96, 112, 224, 448, 896, 1792, 3584, Number.MAX_SAFE_INTEGER];
function y(e, t) {
  let i = Math.pow(10, t);
  return (e * i | 0) / i;
}
export class $$b1 extends _ {
  constructor() {
    super("fps", A);
  }
  toLogParams() {
    let e = [this.count, y(this.totalMs / this.count, 2), y(this.maxMs, 2)];
    for (let t = 0; t < this._bins.length; t++) e.push(this._buckets[t]);
    return e;
  }
  schema() {
    return ["frame_count", "mean_frame_ms", "max_frame_ms"].concat(...super.schema());
  }
}
export const Sp = $$f0;
export const UP = $$b1;
export const jk = $$c2;
export const y7 = $$h3;
export const M4 = $$r4;
export const t1 = $$o5;