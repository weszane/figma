import { useEffect } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { analyticsEventManager } from "../905/449184";
import { isAppShellEnabled } from "../905/561581";
import { datadogRum } from "../905/270963";
import { F } from "../905/680873";
import { observabilityClient } from "../905/602906";
import { LogLevelStr } from "../905/361972";
import { reportError } from "../905/11";
import { generateUUIDv4 } from "../905/871474";
import { z } from "../905/239603";
import { getSelectedViewDeepEqual } from "../figma_app/386952";
import { n as _$$n, V } from "../905/788423";
let f = [_$$n("RecentFiles"), _$$n("SharedFiles"), _$$n("SharedProjects"), _$$n("Drafts"), _$$n("OrgAllWorkspaces"), _$$n("Workspace"), _$$n("Team"), _$$n("Folder")];
let E = [V("Sidebar"), V("MainBodyContent"), V("FileCreateEntrypoint")];
let y = ["Sidebar", "MainBodyContent", "FileCreateEntrypoint"];
let b = ["Sidebar", "MainBodyContent"];
let T = new Map([["RecentFiles", new Set(y)], ["SharedFiles", new Set(y)], ["SharedProjects", new Set(y)], ["OrgAllWorkspaces", new Set(b)], ["Workspace", new Set(b)], ["Team", new Set(b)], ["Drafts", new Set(y)], ["Folder", new Set(y)]]);
let I = "BEGIN_NAVIGATION";
let S = isAppShellEnabled();
let v = null;
class A {
  constructor() {
    this.navigationMark = null;
    this.activeView = null;
    this.pendingMarks = [];
    this.markCounters = {};
    this.paintedComponents = new Map([["RecentFiles", new Set([])], ["SharedFiles", new Set()], ["SharedProjects", new Set()], ["OrgAllWorkspaces", new Set([])], ["Workspace", new Set([])], ["Team", new Set([])], ["Drafts", new Set([])], ["Folder", new Set([])]]);
  }
  get lastVisibilityChange() {
    return window.MONITORING?.mostRecentVisibilityChange?.time ?? 1 / 0;
  }
  get lastOnlineChanged() {
    return window.MONITORING?.mostRecentNetworkStatus?.time ?? 1 / 0;
  }
}
let x = new A();
export function $$N2() {
  if (getFeatureFlags().contentful_paint_performance_monitor) {
    if (v) {
      console.warn("Oops! Contentful paint performance observer already initialized. If you want to monitor something new, modify this file to add your view and tracking identifiers");
      return;
    }
    (v = new PerformanceObserver(e => {
      j(C, e);
    })).observe({
      type: "mark",
      buffered: !0
    });
  }
}
function C(e, t) {
  t.getEntriesByName(e).forEach(e => {
    let t = e.name;
    let {
      activeView,
      pendingMarks,
      markCounters
    } = x;
    if (t) {
      if (t === I) {
        (x = new A()).navigationMark = e;
        return;
      }
      if (!activeView && f.includes(t)) {
        x.activeView = t;
        pendingMarks.forEach(R);
        return;
      }
      if (markCounters[e.name] = (markCounters[e.name] ?? 0) + 1, !activeView) {
        e.detail.isLoaded && pendingMarks.push(e);
        return;
      }
      e.detail.isLoaded && R(e);
    }
  });
}
let w = z.object({
  isLoaded: z.boolean(),
  navigationId: z.string().nullable(),
  contextArgs: z.record(z.string(), z.unknown()).optional()
});
function O(e) {
  let t = w.safeParse(e.detail);
  return t.success ? t.data : (reportError(_$$e.WAYFINDING, Error("Invalid detail for contentful paint tracker mark"), {
    extra: {
      mark: e
    }
  }), null);
}
function R(e) {
  let t = O(e);
  if (!t || !x.activeView) return;
  let r = e.name;
  let n = function (e) {
    let t = e.split("ContentfulPaint:Component:")[1];
    if (t) return t;
  }(r);
  let i = function (e) {
    let t = e.split("ContentfulPaint:View:")[1];
    if (t) return t;
  }(x.activeView);
  let o = e.startTime;
  if (!n || !i) return;
  let d = x.paintedComponents.get(i);
  if (d?.has(n)) return;
  d?.add(n);
  let p = o;
  let _ = null;
  let h = x.navigationMark;
  if (h) {
    let e = performance.measure(r, h.name, r);
    let t = O(h);
    if (!t) return;
    _ = t.navigationId;
    p = e.duration;
  }
  if (n && i) {
    let r = !h;
    let d = !r && 1 === x.markCounters[e.name];
    let m = t.contextArgs ? JSON.stringify(t.contextArgs) : void 0;
    let g = x.lastVisibilityChange < e.startTime;
    let f = x.lastOnlineChanged < e.startTime;
    let E = {
      component: n,
      durationMs: p,
      didInstaLoad: d,
      view: i,
      navigationEventId: _ ?? void 0,
      coldLoad: r,
      criticalContentfulPaintComplete: function (e) {
        let t = T.get(e);
        let r = x.paintedComponents.get(e);
        return !!t && !!r && [...t].every(e => r.has(e));
      }(i),
      isAppShell: S,
      contextArgsStr: m,
      wasBackgrounded: g,
      wasOfflined: f,
      version: 1,
      relativeStartTime: o
    };
    let y = {
      startTime: r ? performance.timeOrigin : o + performance.timeOrigin,
      duration: p,
      context: E
    };
    analyticsEventManager.trackDefinedEvent("file_browser.contentful_paint", E);
    getFeatureFlags().observability_client ? observabilityClient.logVital("file_browser.contentful_paint", {
      level: LogLevelStr.INFO,
      ...y
    }) : datadogRum?.addDurationVital("file_browser.contentful_paint", y);
  }
}
export function $$L4({
  markName: e,
  isLoaded: t,
  contextArgs: r
}) {
  return k({
    markName: V(e),
    isLoaded: t,
    contextArgs: r
  });
}
export function $$P5(e) {
  return k({
    markName: _$$n(e),
    isLoaded: !0
  });
}
export function $$D1() {
  M({
    markName: I,
    isLoaded: !1
  });
}
function k({
  markName: e,
  isLoaded: t,
  contextArgs: r
}) {
  let i = getSelectedViewDeepEqual();
  let a = F(r);
  useEffect(() => {
    M({
      markName: e,
      isLoaded: t,
      contextArgs: a.current
    });
  }, [t, e, i, a]);
}
function M({
  markName: e,
  isLoaded: t,
  contextArgs: r
}) {
  getFeatureFlags().contentful_paint_performance_monitor && performance.mark(e, {
    detail: {
      navigationId: e === I ? generateUUIDv4() : null,
      isLoaded: t,
      contextArgs: r
    }
  });
}
export function $$F0() {
  getFeatureFlags().contentful_paint_performance_monitor && v && (x = new A(), j(performance.clearMarks.bind(performance)), v.takeRecords(), v.disconnect(), v = null);
}
function j(e, t) {
  e(I, t);
  f.forEach(r => {
    e(r, t);
  });
  E.forEach(r => {
    e(r, t);
  });
}
export function $$U3() {
  performance.getEntriesByName(I, "mark").forEach(e => {
    reportError(_$$e.WAYFINDING, Error("Stale navigation mark present"), {
      extra: {
        staleNavigationMark: e
      }
    });
  });
  performance.clearMarks(I);
}
export const $E = $$F0;
export const YD = $$D1;
export const $o = $$N2;
export const Fi = $$U3;
export const WX = $$L4;
export const kF = $$P5;