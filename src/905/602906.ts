import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { sx, az } from "../905/449184";
import { L } from "../905/270963";
import { z } from "../905/667887";
import { $, b } from "../905/361972";
let d = !!getFeatureFlags().observability_client;
let c = new WeakMap();
let u = new WeakMap();
let $$p0 = new class {
  constructor() {}
  addAction(e, t, i, n, a) {
    (a?.forceEnable || d && getFeatureFlags().datadog_rum_fs_action_logger) && (i !== $.DEBUG || z()) && L?.addAction(`${e} [${t}]`, {
      ...n,
      level: i,
      team: t
    });
  }
  addTiming(e, t, i) {
    d && (i !== $.DEBUG || z()) && L?.addTiming(e, t);
  }
  addError(e, t, i) {
    d && L?.addError(e, {
      ...i,
      team: t
    });
  }
  logVital(e, {
    level: t,
    startTime: i,
    duration: n,
    description: r,
    context: a
  }) {
    d && (t !== $.DEBUG || z()) && (i < performance.timeOrigin && console.warn("You appear to be logging a relative timestamp and not an epoch timestamp. Try adding performance.timeOrigin to the timestamp."), L?.addDurationVital(e, {
      startTime: i,
      duration: n,
      description: r,
      context: a
    }));
  }
  measureCallbackAsVital(e, t) {
    this.startVital(e);
    let i = t();
    this.stopVital(e);
    return i;
  }
  async measureCallbackAsyncAsVital(e, t) {
    this.startVital(e);
    let i = await t();
    this.stopVital(e);
    return i;
  }
  createVital(e, {
    level: t,
    description: i,
    context: n,
    trackFps: r
  }) {
    return new h(e, {
      level: t,
      description: i,
      context: n,
      trackFps: r
    });
  }
  startVital(e, {
    level: t,
    description: i,
    context: n
  } = {
    level: $.INFO
  }) {
    d && (t !== $.DEBUG || z()) && L?.startDurationVital(e, {
      description: i,
      context: n
    });
  }
  stopVital(e, {
    level: t,
    context: i
  } = {
    level: $.INFO
  }) {
    d && (t !== $.DEBUG || z()) && L?.stopDurationVital(e, {
      context: i
    });
  }
  startVitalForDebugging(e, {
    description: t,
    context: i
  } = {}) {
    this.startVital(e, {
      level: $.DEBUG,
      description: t,
      context: i
    });
  }
  stopVitalForDebugging(e, {
    context: t
  } = {}) {
    this.stopVital(e, {
      level: $.DEBUG,
      context: t
    });
  }
  setGlobalContext(e, t) {
    d && L?.setGlobalContextProperty(e, t);
  }
  setViewContext(e, t) {
    d && L?.setViewContextProperty(e, t);
  }
  startUserFlow({
    name: e,
    team: t,
    priority: i,
    trackFps: n,
    context: r,
    eventOptions: a
  }) {
    return new m({
      name: e,
      team: t,
      priority: i ?? b.P2,
      trackFps: n,
      context: r,
      eventOptions: a
    });
  }
}();
class m {
  constructor({
    name: e,
    team: t,
    priority: i,
    trackFps: n,
    context: r,
    eventOptions: a
  }) {
    this.context = {};
    this.ended = !1;
    this.name = e;
    this.context.flowName = e;
    this.context.team = t;
    this.context.priority = i;
    this.eventOptions = a;
    this.trackFps = n;
    this.internalDuration = new h(`${this.name}`, {
      level: $.INFO,
      team: t,
      trackFps: n ?? !0,
      context: r
    });
    this.internalDuration.start();
  }
  startDuration(e, t = {}) {
    let i = new h(`${this.name}.${e}`, {
      level: t.level ?? $.INFO,
      description: t.description,
      context: this.context,
      trackFps: this.trackFps ?? !1,
      onStop: t => {
        this.context[e] = t;
      }
    });
    i.start();
    return i;
  }
  measureDuration(e, t, i) {
    let n = this.startDuration(e, i);
    try {
      return t();
    } finally {
      n.stop();
    }
  }
  async measureDurationAsync(e, t, i) {
    let n = this.startDuration(e, i);
    try {
      return await t();
    } finally {
      n.stop();
    }
  }
  measureTimer(e, t) {
    let i = performance.now();
    try {
      return t();
    } finally {
      let t = performance.now() - i;
      this.context[e] = t;
      $$p0.addTiming(`${this.name}.${e}`, t, $.INFO);
    }
  }
  async measureTimerAsync(e, t) {
    let i = performance.now();
    try {
      return await t();
    } finally {
      let t = performance.now() - i;
      this.context[e] = t;
      $$p0.addTiming(`${this.name}.${e}`, t, $.INFO);
    }
  }
  createVital(e, {
    level: t,
    description: i,
    context: n
  }) {
    return new h(e, {
      level: t,
      description: i,
      context: n
    });
  }
  addContext(e) {
    Object.assign(this.context, e);
    this.internalDuration.addContext(e);
  }
  end() {
    this.ended || (this.ended = !0, this.internalDuration.stop());
  }
  trackEvent(e, t, i) {
    sx(e, {
      ...this.context,
      ...t
    }, {
      ...this.eventOptions,
      ...i
    });
  }
  trackDefinedEvent(e, t = {}) {
    az.trackDefinedEvent(e, {
      ...this.context,
      ...t
    });
  }
}
class h {
  constructor(e, {
    level: t,
    description: i,
    team: a,
    context: s,
    trackFps: o = !1,
    fpsCollectionDurationMs: l = 18e4,
    onStop: d
  }) {
    this.started = !1;
    this.stopped = !1;
    this.startTime = 0;
    this.fpsMonitorId = null;
    this.frameCount = 0;
    this.lastFpsUpdate = 0;
    this.name = e;
    this.description = i;
    this.context = s ?? {};
    this.level = t;
    this.trackFps = o && !!getFeatureFlags().observability_client_fps;
    this.team = a ?? _$$e.UNOWNED;
    this.fpsCollectionDurationMs = Math.min(l, 18e4);
    this.onStop = d;
  }
  startFrameRateMonitoring() {
    if (null !== this.fpsMonitorId) return;
    this.frameCount = 0;
    this.lastFpsUpdate = performance.now();
    c.set(this, []);
    u.set(this, []);
    let e = performance.now();
    let t = () => {
      let i = performance.now();
      let n = i - e;
      let r = this.getFrameTimeData();
      r && r.push(n);
      e = i;
      this.frameCount++;
      let a = i - this.lastFpsUpdate;
      let s = i - this.startTime;
      if (a >= 1e3) {
        let e = Math.round(1e3 * this.frameCount / a);
        let t = this.getFpsData();
        t && t.push({
          timestamp: i,
          fps: e
        });
        this.frameCount = 0;
        this.lastFpsUpdate = i;
      }
      !this.stopped && s < this.fpsCollectionDurationMs ? this.fpsMonitorId = requestAnimationFrame(t) : this.stopped || this.stopFpsMonitoring();
    };
    this.fpsMonitorId = requestAnimationFrame(t);
  }
  stopFpsMonitoring() {
    if (null !== this.fpsMonitorId) {
      cancelAnimationFrame(this.fpsMonitorId);
      this.fpsMonitorId = null;
      let e = function (e) {
        if (!e?.length) return null;
        let t = e.map(e => e.fps);
        t.sort((e, t) => e - t);
        return {
          average: Math.round(t.reduce((e, t) => e + t, 0) / t.length),
          min: Math.min(...t),
          max: Math.max(...t),
          median: t[Math.floor(t.length / 2)] || 0,
          p90: t[Math.floor(.1 * t.length)] || 0,
          samples: e.length
        };
      }(this.getFpsData());
      let t = function (e) {
        if (!e?.length) return null;
        e.sort((e, t) => e - t);
        let t = e.reduce((e, t) => e + t, 0) / e.length;
        let i = e.map(e => {
          let i = e - t;
          return i * i;
        });
        let n = Math.sqrt(i.reduce((e, t) => e + t, 0) / i.length);
        let r = Math.floor(.9 * e.length);
        let a = Math.floor(.95 * e.length);
        let s = Math.floor(.99 * e.length);
        let o = e.filter(e => e > 30).length / e.length;
        let l = e.filter(e => e > 50).length / e.length;
        let d = e[0] ?? 0;
        let c = e[e.length - 1] ?? 0;
        let u = e[Math.floor(.5 * e.length)] ?? 0;
        let p = e[r] ?? c;
        let m = e[a] ?? c;
        let h = e[s] ?? c;
        return {
          count: e.length,
          avg: t,
          min: d,
          max: c,
          median: u,
          p90: p,
          p95: m,
          p99: h,
          stddev: n,
          inferredFps: 1e3 / t,
          percentAbove30ms: o,
          percentAbove50ms: l
        };
      }(this.getFrameTimeData());
      this.addContext({
        fpsStats: e,
        frameTimeStats: t
      });
    }
  }
  getFrameTimeData() {
    return u.get(this);
  }
  getFpsData() {
    return c.get(this);
  }
  start() {
    if (this.started) {
      $$p0.addError(Error(`DurationVital ${this.name} already started`), _$$e.UNOWNED);
      return;
    }
    (this.level !== $.DEBUG || z()) && (this.startTime = performance.now(), this.started = !0, this.trackFps && this.startFrameRateMonitoring());
  }
  stop() {
    if (this.stopped || !this.started) {
      $$p0.addError(Error(`DurationVital ${this.name} ${this.stopped ? "already stopped" : "stopped but never started"}`), this.team);
      return;
    }
    if (this.level === $.DEBUG && !z()) return;
    this.stopFpsMonitoring();
    let e = performance.now() - this.startTime;
    let t = this.startTime + performance.timeOrigin;
    $$p0.logVital(this.name, {
      level: this.level,
      startTime: t,
      duration: e,
      description: this.description,
      context: this.context
    });
    this.onStop?.(e, this.context?.fpsStats, this.context?.frameTimeStats);
    this.stopped = !0;
  }
  addContext(e) {
    this.context = {
      ...this.context,
      ...e
    };
  }
}
export const J6 = $$p0;