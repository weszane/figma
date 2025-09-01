import { mapFilter } from "../figma_app/656233";
import { W2B, uXP } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { sx } from "../905/449184";
import { Zx } from "../905/11";
import { Lo, xi } from "../905/714362";
import { O } from "../905/291063";
import { DB, h5 } from "../905/25189";
import { U4, Lf, W6 } from "../905/327522";
let p = getFeatureFlags().autosave_activity_log_debug ? 1e4 : 3e5;
let m = getFeatureFlags().autosave_activity_log_debug ? 5e3 : 6e4;
export async function $$h0() {
  let {
    usageBytes
  } = await U4();
  let t = usageBytes && usageBytes > 0xa00000;
  try {
    await DB([h5], async i => {
      let n = i.objectStore(h5);
      let r = [];
      let a = await n.openCursor();
      for (; a;) {
        if (t || a.value.endTime < Date.now() - 2592e6) {
          let {
            fileKey,
            userID,
            startTime,
            endTime
          } = a.value;
          r.push({
            fileKey,
            userID,
            startTime,
            endTime
          });
          a?.delete();
        }
        a = await a.$$continue();
      }
      if (r.length > 0) {
        let i = new Set(r.map(e => e.fileKey)).size;
        let n = new Set(r.map(e => e.userID)).size;
        let a = r.reduce((e, t) => Math.min(e, t.startTime), 1 / 0);
        let o = r.reduce((e, t) => Math.max(e, t.endTime), 0);
        sx("activity log garbage collect", {
          numRows: r.length,
          numFiles: i,
          numUsers: n,
          earliestStartTime: a,
          lastEndTime: o,
          usageBytes,
          deleteAll: t
        });
      }
    }, "readwrite");
  } catch (e) {
    Lf("Failed to garbage collect activity log", e);
  }
}
async function g(e) {
  await DB([h5], async t => {
    t.objectStore(h5).add(e);
    await t.done;
  }, "readwrite");
}
class f {
  constructor(e, t, i) {
    this.queue = new O();
    this.nextPromiseResolve = () => { };
    this.nextFlushPromise = new Promise(e => this.nextPromiseResolve = e);
    this.hasLoggedFlushError = !1;
    this.currentLog = {
      fileKey: e,
      userID: t,
      startingSessionID: i,
      startTime: Date.now(),
      endTime: Date.now(),
      logs: []
    };
  }
  addCommit(e) {
    this.currentLog.endTime = Date.now();
    this.currentLog.autosaveChanges && e.commitPolicy === W2B.ADD_CHANGES && e.reason === this.currentLog.autosaveChanges.commitReason ? this.currentLog.autosaveChanges.commit = function(e, t) {
      let i = {};
      e.changedNodes.forEach(e => i[e.nodeID] = e);
      e.clearedNodes.forEach(e => i[e] = null);
      t.changedNodes.forEach(e => i[e.nodeID] = e);
      t.clearedNodes.forEach(e => i[e] = null);
      let r = Object.values(i).filter(e => null !== e);
      let a = mapFilter(Object.entries(i), e => null === e[1] ? e[0] : null);
      let s = {};
      e.referencedNodes.forEach(({
        nodeID: e,
        changes: t
      }) => s[e] = t);
      t.referencedNodes.forEach(({
        nodeID: e,
        changes: t
      }) => s[e] = t);
      let o = Object.entries(s).map(e => ({
        nodeID: e[0],
        changes: e[1]
      }));
      let l = new Set();
      e.imageHashes.forEach(e => l.add(e));
      t.imageHashes.forEach(e => l.add(e));
      return {
        changedNodes: r,
        clearedNodes: a,
        referencedNodes: o,
        imageHashes: Array.from(l)
      };
    }(this.currentLog.autosaveChanges.commit, e.changes) : (this.currentLog.autosaveChanges && this.flushToDisk(), this.currentLog.autosaveChanges = {
      commit: e.changes,
      commitPolicy: e.commitPolicy,
      commitReason: e.reason,
      fileVersion: e.fileVersion
    });
    e.newSessionID && (this.currentLog.newSessionID = e.newSessionID);
  }
  addLog(e) {
    this.currentLog.endTime = Date.now();
    this.currentLog.logs.push(e);
  }
  waitForNextFlushForTest() {
    return this.nextFlushPromise;
  }
  logFlushError(e, t, i) {
    this.hasLoggedFlushError || (this.hasLoggedFlushError = !0, t && W6(`Activity log flush error: ${e}`, i), sx("activity log flush error", {
      message: e,
      ...i
    }));
  }
  async flushToDisk() {
    if (!this.currentLog.autosaveChanges && 0 === this.currentLog.logs.length) {
      Lo("Autosave activity log", "Nothing to write");
      return;
    }
    let e = this.currentLog;
    this.currentLog = {
      fileKey: e.fileKey,
      userID: e.userID,
      startingSessionID: e.newSessionID ?? e.startingSessionID,
      startTime: Date.now(),
      endTime: Date.now(),
      logs: []
    };
    let {
      usageBytes
    } = await U4();
    if (void 0 === usageBytes) {
      this.logFlushError("Unable to get storage estimate", !0);
      return;
    }
    if (usageBytes > 0xa00000) {
      this.logFlushError("Exceeded storage quota", !1, {
        usageBytes
      });
      return;
    }
    await this.queue.enqueue(() => g(e)).catch(e => this.logFlushError("Failed to write to disk", !0, {
      wrappedErrorMessage: e.message
    }));
    this.nextPromiseResolve();
    this.nextFlushPromise = new Promise(e => this.nextPromiseResolve = e);
  }
}
let _ = !1;
async function A() {
  if (_) return;
  _ = !0;
  let {
    usageBytes,
    quotaBytes
  } = await U4();
  let i = [];
  try {
    await DB([h5], async e => {
      let t = e.objectStore(h5);
      let n = await t.openCursor();
      for (; n;) {
        let {
          fileKey,
          userID,
          startTime,
          endTime
        } = n.value;
        i.push({
          fileKey,
          userID,
          startTime,
          endTime
        });
        n = await n.$$continue();
      }
    }, "readonly");
  } catch (e) {
    xi("Autosave", "Failed to get activity log data for telemetry", {
      error: e?.message
    });
  }
  if (i.length > 0) {
    let n = new Set(i.map(e => e.fileKey)).size;
    let r = new Set(i.map(e => e.userID)).size;
    let a = i.reduce((e, t) => Math.min(e, t.startTime), 1 / 0);
    let o = Date.now() - a;
    let l = i.reduce((e, t) => Math.max(e, t.endTime), 0);
    let d = Date.now() - l;
    sx("activity log usage", {
      numRows: i.length,
      numFiles: n,
      numUsers: r,
      earliestStartTime: a,
      earliestStartTimeDelta: o,
      lastEndTime: l,
      lastEndTimeDelta: d,
      usageBytes,
      quotaBytes
    });
  }
}
export class $$y1 {
  constructor() {
    this.state = {
      type: "online"
    };
    A();
    Zx.on("breadcrumb", e => this.recordSentryBreadcrumb(e));
  }
  startFlushInterval() {
    return function(e, t) {
      let i = setInterval(() => {
        "done" === e() && clearInterval(i);
      }, t);
      return () => clearInterval(i);
    }(() => "offline" !== this.state.type ? (W6("We should only call flush if there is something to flush"), "done") : (this.state.activityTracker.flushToDisk(), "continue"), p);
  }
  flushToDisk() {
    return "offline" === this.state.type ? this.state.activityTracker.flushToDisk() : Promise.resolve();
  }
  waitForNextFlushForTest() {
    return "offline" === this.state.type ? this.state.activityTracker.waitForNextFlushForTest() : Promise.resolve();
  }
  recordAutosaveCommit(e, t, i, n) {
    let a;
    let s;
    if ("online" === this.state.type) a = n.reason === uXP.OFFLINE || n.reason === uXP.LIMBOED_CHANGES ? {
      type: "offline",
      activityTracker: new f(e, t, i),
      cancelFlushTimer: this.startFlushInterval(),
      startTime: Date.now()
    } : {
      type: "online"
    }; else if (n.reason === uXP.SYNCED) {
      let {
        activityTracker,
        cancelFlushTimer,
        startTime
      } = this.state;
      Date.now() - startTime > m && (activityTracker.addCommit(n), s = activityTracker.flushToDisk());
      cancelFlushTimer();
      a = {
        type: "online"
      };
    } else a = this.state;
    this.state = a;
    "offline" === this.state.type && this.state.activityTracker.addCommit(n);
    return {
      newState: this.state.type,
      flushPromise: s
    };
  }
  recordSentryBreadcrumb(e) {
    "online" !== this.state.type && this.state.activityTracker.addLog({
      level: e.level ? e.level : "log",
      type: "sentry",
      time: e.timestamp ?? Date.now(),
      log: JSON.stringify(e)
    });
  }
}
export const L_ = $$h0;
export const hS = $$y1; 
