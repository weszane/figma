import { debounce } from "../905/915765";
import { hMR } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { BrowserInfo } from "../figma_app/778880";
import { hk } from "../figma_app/632319";
import { le } from "../figma_app/527873";
var $$n1;
var $$i0;
class p {
  constructor(e) {
    for (let t of (this.reported = !1, this.initializationStart = null, this.events = {}, ["applyNodeChanges", "multiplayerMessageSize", "initializePrototypeLib", "viewerSceneDidCompleteInitialLoad", "transferSentToWorker", "transferMemory", "transferMemorySize"])) {
      e[t] = e[t] || [];
      e[t].push(this);
    }
  }
  reset() {
    this.events = {};
  }
  start(e) {
    this.logTime(e + "Start");
    "initializePrototypeLib" === e && (this.initializationStart = performance.now());
  }
  end(e) {
    this.logTime(e + "End");
  }
  logValue(e, t) {
    this.events[e] = t;
  }
  logTime(e) {
    this.events[e] = Math.round(performance.now());
  }
  report() {
    this.logTime("reportedAt");
    let e = {
      version: 2,
      firstReport: !this.reported,
      totalUsedHeapMemory: hMR?.getTotalUsedHeapMemory(),
      maxUsedHeapMemory: hMR?.getMaxUsedHeapMemory(),
      fileKey: hk()?.openFileKey(),
      ...this.events
    };
    setTimeout(() => {
      trackEventAnalytics("Prototype Lib Loaded", e);
      this.reported = !0;
    });
  }
}
class _ {
  constructor(e) {
    for (let t of (this.startTimes = {}, this.meta = {}, this.track = debounce(e => {
      getFeatureFlags().prototype_lib_perf_report && trackEventAnalytics("Prototype Lib Function", e);
    }, 200), ["applyNodeChanges", "getNodeChangesForSwap", "multiplayerMessageSize"])) {
      e[t] = e[t] || [];
      e[t].push(this);
    }
  }
  reset() {
    this.startTimes = {};
    this.meta = {};
  }
  logValue(e, t) {
    this.meta[e] = t;
  }
  start(e) {
    this.startTimes[e] = performance.now();
  }
  end(e) {
    if (void 0 !== this.startTimes[e]) {
      let t = hMR?.getTotalUsedHeapMemory();
      let r = hMR?.getMaxUsedHeapMemory();
      let n = {
        name: e,
        start: this.startTimes[e],
        end: performance.now(),
        totalUsedHeapMemory: t,
        maxUsedHeapMemory: r,
        ...this.meta
      };
      this.track(n);
      this.reset();
    }
  }
}
(e => {
  let t = {};
  let r = new _(t);
  e.loadTimer = new p(t);
  let n = [r, e.loadTimer];
  e.reset = function () {
    for (let e of n) e.reset();
  };
  e.start = function (e) {
    t[e]?.forEach(t => t.start(e));
  };
  e.end = function (e) {
    t[e]?.forEach(t => t.end(e));
  };
  e.logValue = function (e, r) {
    t[e]?.forEach(t => t.logValue(e, r));
  };
  let i = !0;
  e.reportOOM = function (t) {
    if (!i) return;
    i = !1;
    let r = e.loadTimer.initializationStart ? Math.round(performance.now() - e.loadTimer.initializationStart) : 0;
    let n = {
      totalMemoryInBytes: le(),
      failedSize: t,
      currentAllocatedBytes: hMR?.getTotalUsedHeapMemory(),
      maxAllocatedBytes: hMR?.getMaxUsedHeapMemory(),
      timeSinceInitialization: r,
      is64BitBrowser: BrowserInfo.is64BitBrowser
    };
    trackEventAnalytics("Prototype Lib Out Of Memory", n);
  };
})($$n1 || ($$n1 = {}));
(e => {
  let t = null;
  e.setLoadTimeTracker = function (e) {
    t = e;
  };
  e.getLoadTimeTracker = function () {
    return t;
  };
})($$i0 || ($$i0 = {}));
export const Q = $$i0;
export const r = $$n1;