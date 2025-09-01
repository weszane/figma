import { q } from "../vendor/476421";
import { TP, M8, vk, Oc, FR } from "../vendor/929565";
import { V } from "../vendor/359881";
import { Dx } from "../vendor/186187";
import { Vy } from "../vendor/780783";
import { wg, DJ } from "../vendor/73976";
import { s5, $$do, bb } from "../vendor/193284";
import { A2 } from "../vendor/815544";
let c = new Map();
function d(e) {
  for (let t of c.keys()) t < e && c.$$delete(t);
}
let f = {
  sendProfile: (e, t, n, r) => {
    let s = function(e, t, n, r) {
      let s = t.tags;
      let a = function(e, t, n) {
        let r = {
          application: {
            id: t
          }
        };
        n && (r.session = {
          id: n
        });
        let i = Array.from(new Set(e.views.map(e => e.viewId)));
        i.length && (r.view = {
          id: i
        });
        let s = e.longTasks.map(e => e.id).filter(e => void 0 !== e);
        s.length && (r.long_task = {
          id: s
        });
        return r;
      }(e, n, r);
      let o = s.concat(["language:javascript", "runtime:chrome", "family:chrome", "host:browser"]);
      return {
        ...a,
        attachments: ["wall-time.json"],
        start: new Date(e.startClocks.timeStamp).toISOString(),
        end: new Date(e.endClocks.timeStamp).toISOString(),
        family: "chrome",
        runtime: "chrome",
        format: "json",
        version: 4,
        tags_profiler: o.join(","),
        _dd: {
          clock_drift: TP()
        }
      };
    }(e, t, n, r);
    let a = function(e, t) {
      let n = new Blob([JSON.stringify(e)], {
        type: "application/json"
      });
      let r = new FormData();
      r.append("event", new Blob([JSON.stringify(t)], {
        type: "application/json"
      }), "event.json");
      r.append("wall-time.json", n, "wall-time.json");
      return {
        data: r,
        bytesCount: 0
      };
    }(e, s);
    let o = t.build("fetch", a);
    A2("Sending profile to public profiling intake", {
      profilingIntakeURL: o,
      applicationId: n,
      sessionId: r
    });
    return fetch(o, {
      body: a.data,
      method: "POST"
    });
  }
};
let $$m0 = {
  sampleIntervalMs: 10,
  collectIntervalMs: 6e4,
  minProfileDurationMs: 5e3,
  minNumberOfSamples: 50
};
export function $$v1(e, t, n, p, g = $$m0) {
  let b;
  let h = s5($$do.LONG_ANIMATION_FRAME);
  let w = [];
  let y = {
    state: "stopped"
  };
  function k() {
    let n;
    let r = V().Profiler;
    if (!r) {
      p.set({
        status: "error",
        error_reason: "not-supported-by-browser"
      });
      return Error("RUM Profiler is not supported in this browser.");
    }
    I(y).catch(Dx);
    let {
      cleanupTasks,
      observer
    } = function(n) {
      let r;
      if ("running" === n.state) return {
        cleanupTasks: n.cleanupTasks,
        observer: n.observer
      };
      let i = [];
      if (e.trackLongTasks) {
        (r = new PerformanceObserver(T)).observe({
          entryTypes: [h ? "long-animation-frame" : "longtask"]
        });
        let e = t.subscribe(12, e => {
          !function({
            rawRumEvent: e,
            startTime: t
          }) {
            var n;
            e.type === bb.LONG_TASK && (n = e.long_task.id, c.set(t, n));
          }(e);
        });
        i.push(() => r?.disconnect());
        i.push(e.unsubscribe);
      }
      let s = t.subscribe(2, e => {
        M({
          viewId: e.id,
          viewName: e.name,
          startClocks: e.startClocks
        });
      });
      i.push(s.unsubscribe);
      return {
        cleanupTasks: i,
        observer: r
      };
    }(y);
    try {
      n = new r({
        sampleInterval: g.sampleIntervalMs,
        maxBufferSize: Math.round(1.5 * g.collectIntervalMs / g.sampleIntervalMs)
      });
    } catch (e) {
      e instanceof Error && e.message.includes("disabled by Document Policy") ? (Vy.warn("[DD_RUM] Profiler startup failed. Ensure your server includes the `Document-Policy: js-profiling` response header when serving HTML pages.", e), p.set({
        status: "error",
        error_reason: "missing-document-policy-header"
      })) : p.set({
        status: "error",
        error_reason: "unexpected-exception"
      });
      return;
    }
    p.set({
      status: "running",
      error_reason: void 0
    });
    y = {
      state: "running",
      startClocks: M8(),
      profiler: n,
      timeoutId: wg(k, g.collectIntervalMs),
      longTasks: [],
      views: [],
      cleanupTasks,
      observer
    };
    M(b);
    n.addEventListener("samplebufferfull", S);
  }
  async function I(t) {
    var r;
    var s;
    if ("running" !== t.state) return;
    O(null !== (s = t.observer?.takeRecords()) && void 0 !== s ? s : []);
    DJ(t.timeoutId);
    t.profiler.removeEventListener("samplebufferfull", S);
    let {
      startClocks,
      longTasks,
      views
    } = t;
    let p = M8();
    await t.profiler.stop().then(t => {
      let r = M8();
      let s = longTasks.length > 0;
      let l = vk(startClocks.timeStamp, r.timeStamp) < g.minProfileDurationMs;
      let m = function(e) {
        let t = 0;
        for (let n of e) void 0 !== n.stackId && t++;
        return t;
      }(t.samples) < g.minNumberOfSamples;
      !s && (l || m) || (function(t) {
        var r;
        let i = n.findTrackedSession()?.id;
        f.sendProfile(t, e.profilingEndpointBuilder, e.applicationId, i).catch(Dx);
      }(Object.assign(t, {
        startClocks,
        endClocks: r,
        clocksOrigin: Oc(),
        longTasks,
        views,
        sampleInterval: g.sampleIntervalMs
      })), d(p.relative));
    }).catch(Dx);
  }
  async function _(e) {
    "running" === y.state && (y.cleanupTasks.forEach(e => e()), await I(y), y = {
      state: e
    });
  }
  function M(e) {
    "running" === y.state && e && y.views.push(e);
  }
  function S() {
    k();
  }
  function T(e) {
    O(e.getEntries());
  }
  function O(e) {
    if ("running" === y.state) for (let n of e) {
      var t;
      if (n.duration < g.sampleIntervalMs) continue;
      let e = FR(n.startTime);
      t = e.relative;
      let r = c.get(t);
      y.longTasks.push({
        id: r,
        duration: n.duration,
        entryType: n.entryType,
        startClocks: e
      });
    }
  }
  function D() {
    "hidden" === document.visibilityState && "running" === y.state ? _("paused").catch(Dx) : "visible" === document.visibilityState && "paused" === y.state && k();
  }
  function P() {
    k();
  }
  return {
    start: function(t) {
      "running" !== y.state && (b = t ? {
        startClocks: t.startClocks,
        viewId: t.id,
        viewName: t.name
      } : void 0, w.push(q(e, window, "visibilitychange", D).stop, q(e, window, "beforeunload", P).stop), k());
    },
    stop: async function() {
      await _("stopped");
      w.forEach(e => e());
      d(M8().relative);
      p.set({
        status: "stopped",
        error_reason: void 0
      });
    },
    isStopped: function() {
      return "stopped" === y.state;
    },
    isRunning: function() {
      return "running" === y.state;
    },
    isPaused: function() {
      return "paused" === y.state;
    }
  };
}
export const DEFAULT_RUM_PROFILER_CONFIGURATION = $$m0;
export const createRumProfiler = $$v1; 
