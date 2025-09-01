import { useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { az } from "../905/449184";
import { J6 } from "../905/602906";
import { $ } from "../905/361972";
import { x1 } from "../905/714362";
export let $$n1;
let c = ["dependency_event_bus_variable_versioning"];
class u {
  constructor() {
    this.rafFrameTimings = {};
    this.pendingCallbacks = {};
    this.rafFrameTimingCallback = () => {
      for (let [e, t] of Object.entries(this.rafFrameTimings)) t.length < 5 ? t.push(performance.now()) : this.onFrameTimingReady(e);
      if (Object.keys(this.rafFrameTimings).some(this.isWorkLeft)) requestAnimationFrame(this.rafFrameTimingCallback);else for (let e of Object.keys(this.pendingCallbacks)) this.onFrameTimingReady(e);
    };
    this.isWorkLeft = e => (this.rafFrameTimings[e]?.length ?? 0) < 5;
    this.onFrameTimingReady = e => {
      let t = this.getFrameTimings(e);
      this.pendingCallbacks[e]?.(t);
      delete this.pendingCallbacks[e];
      delete this.rafFrameTimings[e];
    };
    this.getFrameTimings = e => {
      let t = this.rafFrameTimings[e];
      return t ? function (e) {
        return e.map((t, r) => 0 === r ? 0 : t - (e[r - 1] ?? t)).slice(1);
      }(t) : [];
    };
    this.whenFrameTimingIsReady = (e, t) => {
      this.rafFrameTimings[e] ? this.isWorkLeft(e) ? this.pendingCallbacks[e] = t : t(this.getFrameTimings(e)) : t([]);
    };
  }
  requestFrameTiming(e) {
    this.rafFrameTimings[e] = [performance.now()];
    requestAnimationFrame(this.rafFrameTimingCallback);
  }
}
class p {
  constructor() {
    this.observer = null;
    this.loafEntries = [];
  }
  clear() {
    this.loafEntries = [];
  }
  startTracking() {
    this.observer || this.initializePerformanceObserver();
  }
  stopTracking() {
    this.observer && (this.observer.disconnect(), this.observer = null);
    this.clear();
  }
  initializePerformanceObserver() {
    this.observer = new PerformanceObserver(e => {
      for (let t of e.getEntries()) "long-animation-frame" === t.entryType && this.loafEntries.push(t);
    });
    this.observer.observe({
      type: "long-animation-frame",
      buffered: !0
    });
  }
  getFrameMetrics(e) {
    let t = this.loafEntries.filter(t => t.startTime >= e.wallTime.start && t.startTime <= e.wallTime.end);
    let r = t.filter(t => t.startTime - e.wallTime.start < 5e3);
    function n(e) {
      return {
        count: e.length,
        timeMs: e.map(e => e.duration).reduce((e, t) => e + t, 0),
        blockingTimeMs: e.map(e => e.blockingDuration).reduce((e, t) => e + t, 0)
      };
    }
    let i = n(t);
    let a = n(r);
    return {
      longAnimationFrameCount: i.count,
      longAnimationFrameTimeMs: i.timeMs,
      longAnimationFrameBlockingTimeMs: i.blockingTimeMs,
      longAnimationFrameFirst5sCount: a.count,
      longAnimationFrameFirst5sTimeMs: a.timeMs,
      longAnimationFrameFirst5sBlockingTimeMs: a.blockingTimeMs
    };
  }
}
class _ {
  trackUserActionTimings(e) {
    let t = performance.now();
    Array.from(e.values()).forEach(e => {
      if (!m) {
        x1("user_action_timing", "UserActionLongFrameTracker is not initialized, skipping long frame metrics for user action timing");
        return;
      }
      let r = m?.getFrameMetrics(e);
      m?.clear();
      h?.whenFrameTimingIsReady(e.id, n => {
        !function (e, {
          nextFrameTimings: t,
          absoluteFlushTimeMs: r,
          ...n
        }) {
          az.trackDefinedMetric("user_action_timing.action", {
            editScopeName: e.name,
            flushTimeMs: r - e.wallTime.start,
            wallTimeMs: e.wallTime.end - e.wallTime.start,
            wallTimePlusNextFrameMs: e.wallTime.end - e.wallTime.start + (t[0] ?? 0),
            editScopeCount: e.editScopeCount,
            editScopeSyncTimeMs: e.editScopeSyncTime,
            editScopeAsyncTimeMs: e.editScopeAsyncTime,
            editScopeTimeMs: e.editScopeSyncTime + e.editScopeAsyncTime,
            ...n,
            nextFrameTimings: JSON.stringify(t),
            userActionTimingScopes: JSON.stringify(e.userActionTimingScopes),
            isPartialEvent: !!e.isPartialEvent,
            containsSymbolUpdaterWork: e.userActionTimingScopes.some(e => "SymbolUpdater" === e.scopeName)
          });
          let i = {};
          let d = getFeatureFlags();
          d.ds_user_action_timing_log_ffs && 864e5 > performance.now() && (i = Object.fromEntries(c.map(e => [e, d[e] ?? !1])));
          J6.logVital(`user_action_timing.action.${e.name}`, {
            level: $.INFO,
            startTime: performance.timeOrigin + e.wallTime.start,
            duration: e.wallTime.end - e.wallTime.start,
            description: e.userActionTimingScopes.map(e => `${e.scopeName}: ${e.duration}ms (${e.count})`).join(", "),
            context: {
              editScopeSyncTimeMs: e.editScopeSyncTime,
              editScopeAsyncTimeMs: e.editScopeAsyncTime,
              isPartialEvent: e.isPartialEvent,
              editScopeCount: e.editScopeCount,
              userActionTimingScopes: Object.fromEntries(e.userActionTimingScopes.map(e => [e.scopeName, {
                duration: e.duration,
                count: e.count
              }])),
              evaluatedFeatureFlags: i
            }
          });
        }(e, {
          nextFrameTimings: n,
          absoluteFlushTimeMs: t,
          ...r
        });
      });
    });
    m?.clear();
  }
  requestFrameTiming(e) {
    h?.requestFrameTiming(e);
  }
}
let h = null;
let m = null;
export function $$g2() {
  getFeatureFlags().ds_user_action_timing_api && (h = new u(), m = new p());
  $$n1 = new _();
}
export function $$f0() {
  useEffect(() => (m?.startTracking(), () => {
    m?.stopTracking();
  }), []);
}
export const DW = $$f0;
export const st = $$n1;
export const wy = $$g2;