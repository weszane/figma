import { useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { isLocalFileKey } from "../905/657242";
import { filterNotNullish } from "../figma_app/656233";
import { isNotNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { i6g, NUh, W2B, Bko, uXP, h3O } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager, atom, useAtomWithSubscription } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { MR } from "../vendor/390973";
import { trackEventAnalytics } from "../905/449184";
import { l as _$$l } from "../905/728491";
import { debugState } from "../905/407919";
import { getInitialOptions } from "../figma_app/169182";
import { p as _$$p } from "../figma_app/288654";
import { Timer } from "../905/609396";
import { BrowserInfo } from "../figma_app/778880";
import { reportError } from "../905/11";
import { logError, logInfo, logDebug, logWarning } from "../905/714362";
import { fF } from "../905/471229";
import { YQ } from "../905/502364";
import { getI18nString } from "../905/303541";
import { _ as _$$_ } from "../905/170564";
import { Q as _$$Q } from "../905/463586";
import { yJ } from "../figma_app/78808";
import { ds } from "../figma_app/314264";
import { kS } from "../figma_app/864723";
import { Ff, Xl } from "../figma_app/582924";
import { l as _$$l2 } from "../905/412815";
import { xK } from "../905/125218";
import { dDF } from "../figma_app/43951";
import { M4 as _$$M } from "../905/713695";
import { m as _$$m } from "../905/294113";
import { B as _$$B } from "../905/18613";
import { L_, hS } from "../905/200074";
import { O as _$$O } from "../905/291063";
import { h as _$$h } from "../905/662353";
import { Sp, SW, jP, DV, w8, iM, dU, Zt, Z4, cu, JR, BE, IE, Ab, DB, Fy } from "../905/25189";
import { Lf, rQ, W6, U4 } from "../905/327522";
import { HZ, hp, m6, Cr, a as _$$a } from "../905/725909";
import { mc, A2, LX } from "../905/58217";
function K(e, t) {
  let r = "unknown";
  e ? "string" == typeof e ? r = e : "message" in e && (r = e.message) : r = "no error message";
  logError("Autosave", r, {
    message: t
  });
}
export function $$Y11() {
  return 7776e6;
}
async function $(e, t, r, n) {
  let i = n.objectStore(Sp);
  let a = await i.index(SW).get([e, t, r]);
  return a && a.id ? {
    id: a.id,
    ...a
  } : void 0;
}
async function X(e, t, r, n) {
  let i = await $(e, t, r, n);
  return i?.id;
}
async function q(e, t, r) {
  let n = e.objectStore(Sp);
  let i = e.objectStore(jP);
  let a = e.objectStore(DV);
  let s = e.objectStore(w8);
  let o = [];
  for (let e of r) {
    let t = await n.index(SW).get([e.userID, e.fileKey, e.sessionID]);
    t && t.id && o.push(t);
  }
  if (0 === o.length) {
    await e.done;
    return {
      changesByNode: new Map(),
      referencedNodeMap: new Map(),
      fileVersion: -1
    };
  }
  o.sort((e, t) => t.fileVersion - e.fileVersion);
  let l = o[0];
  let c = new Map();
  let u = new Map();
  for (let e of await i.getAll(iM(l.id))) c.set(e.nodeID, {
    changes: e.changes,
    editorSessionID: l.id
  });
  for (let e of await s.getAll(iM(l.id))) u.set(e.nodeID, e.buffer);
  let p = l.lastUpdatedAt;
  for (let e of o.slice(1)) {
    let t = e.fileVersion === l.fileVersion;
    if (t) {
      for (let t of await i.getAll(iM(e.id))) {
        let e = c.get(t.nodeID);
        let r = t.changes;
        if (e) {
          let {
            changes
          } = e;
          r = i6g.mergeMultiplayerMessages(changes, t.changes, l.fileVersion);
        }
        c.set(t.nodeID, {
          changes: r,
          editorSessionID: l.id
        });
        i.put({
          editorSessionID: l.id,
          nodeID: t.nodeID,
          changes: r
        }).catch(e => K(e, "mergeAndClaimChanges: updating session IDs"));
      }
      for (let t of await s.getAll(iM(e.id))) {
        u.set(t.nodeID, t.buffer);
        s.put({
          editorSessionID: l.id,
          nodeID: t.nodeID,
          buffer: t.buffer
        }).catch(e => K(e, "mergeAndClaimChanges: merge referenced nodes"));
      }
      p = Math.max(p, e.lastUpdatedAt);
    }
    i.$$delete(iM(e.id)).catch(e => K(e, "mergeAndClaimChanges: node changes for session"));
    s.$$delete(iM(e.id)).catch(e => K(e, "mergeAndClaimChanges: referenced nodes for session"));
    let r = await a.openCursor(iM(e.id));
    for (; r;) {
      t && a.put({
        ...r.value,
        editorSessionID: l.id
      }).catch(e => K(e, "mergeAndClaimChanges: merge images"));
      r.$$delete().catch(e => K(e, "mergeAndClaimChanges: remove old image"));
      r = await r.$$continue();
    }
    n.$$delete(e.id).catch(e => K(e, "mergeAndClaimChanges: delete old session id"));
  }
  await n.put({
    ...l,
    sessionID: t,
    lastUpdatedAt: p
  });
  dU(e);
  await e.done;
  logInfo("Autosave", `Found claimed autosave changes from ${o.length} sessions`, void 0, {
    logToConsole: NUh.ALWAYS
  });
  return {
    changesByNode: c,
    referencedNodeMap: u,
    fileVersion: l.fileVersion
  };
}
async function J(e, t) {
  let r = Zt(e, t);
  let n = [];
  await xK.timeAsync("checkForAutosave", async () => {
    let e = await Z4();
    if (!e) return;
    let t = e.transaction(Sp);
    let i = t.objectStore(Sp);
    let a = await i.index(SW).openCursor(r);
    for (; a;) {
      n.push(a.value);
      a = await a.$$continue();
    }
    await t.done;
  });
  n.length > 0 && logDebug("Autosave", "Found auto-saved data for this file", void 0, {
    logToConsole: NUh.ALWAYS
  });
  return n;
}
async function Z(e) {
  return await xK.timeAsync("filterAutosaveSessions", async () => {
    let t = await Promise.all(e.map(e => mc(e)));
    let r = Date.now() - $$Y11();
    let n = e.filter((e, n) => !t[n] && e.lastUpdatedAt > r);
    0 === n.length && logInfo("Autosave", "Changes not available or already claimed by another tab", void 0, {
      logToConsole: NUh.ALWAYS
    });
    return n;
  });
}
let Q = null;
export async function $$ee5(e) {
  async function t() {
    for (let e of ["figma-autosave-v2", "figma-autosave-darklaunch-v2"]) MR(e).catch(() => {});
    try {
      let t = await $$ed14(cu(e), e => Date.now() - e.lastUpdatedAt < $$Y11());
      if (t.length > 0) {
        let e = t.map(e => e.lastUpdatedAt);
        trackEventAnalytics("autosave garbage collect", {
          numSessions: t.length,
          localSessionCount: t.reduce((e, t) => e + (t.isLocalFile ? 1 : 0), 0),
          nodeCount: t.reduce((e, t) => e + t.nodeCount, 0),
          imageCount: t.reduce((e, t) => e + t.imageCount, 0),
          referencedNodeCount: t.reduce((e, t) => e + t.referencedNodeCount, 0),
          oldestSession: Math.min(...e),
          newestSession: Math.max(...e)
        });
      }
    } catch (e) {
      Lf("Failed to garbage collect autosave changes", e);
    }
    L_();
  }
  Q || (Q = t());
  await Q;
}
export async function $$et10(e) {
  let t = {};
  for (let r of e) {
    let e = await $$er16(r);
    (e.unsyncedFiles.length > 0 || e.newFiles.length > 0) && (t[r] = e);
  }
  return t;
}
export async function $$er16(e) {
  let t = await Z4();
  if (!t) return {
    unsyncedFiles: [],
    newFiles: [],
    nextGarbageCollectionTimestamp: -1
  };
  let {
    editorSessionRowsWithChanges,
    newFilesByKey,
    newFilesWithChanges
  } = await en(t, e);
  let s = new Set();
  let o = new Map();
  let l = -1;
  let d = [];
  for (let t of editorSessionRowsWithChanges) s.has(t.fileKey) || d.push(mc({
    userID: e,
    fileKey: t.fileKey,
    sessionID: t.sessionID
  }).then(e => {
    if (!e) {
      s.add(t.fileKey);
      let e = Math.max(o.get(t.fileKey) || 0, t.lastUpdatedAt);
      o.set(t.fileKey, e);
      l = -1 === l ? t.lastUpdatedAt : Math.min(l, t.lastUpdatedAt);
    }
  }));
  await Promise.all(d);
  return {
    unsyncedFiles: Array.from(s).filter(e => !isLocalFileKey(e)).map(e => ({
      type: "autosave-file",
      fileKey: e,
      lastUpdatedAt: o.get(e)
    })),
    newFiles: Array.from(s).filter(e => isLocalFileKey(e) && newFilesByKey.has(e)).map(e => {
      let t = newFilesByKey.get(e);
      return es(t, o, newFilesWithChanges.has(t.fileKey));
    }).filter(({
      hasChanges: e
    }) => e),
    nextGarbageCollectionTimestamp: l
  };
}
async function en(e, t) {
  let r = e.transaction([Sp, jP, JR]);
  let n = Error("original async stack");
  r.done.catch(e => {
    e.cause = n;
    reportError(_$$e.UNOWNED, e);
  });
  let i = r.objectStore(Sp);
  let a = await i.index(SW).getAll(cu(t));
  let s = [];
  let o = r.objectStore(jP);
  for (let e of a) if ((await o.count(iM(e.id))) > 0) {
    for (let t of await o.getAll(iM(e.id))) if (!(getFeatureFlags().suppress_unsaved_changes_ui && getFeatureFlags().incremental_loading_validation) || i6g && !i6g.changesAreOnlyNewFileSystemChanges(t.changes, e.fileVersion)) {
      s.push(e);
      break;
    }
  }
  let c = new Map();
  let p = r.objectStore(JR);
  let _ = new Set();
  for (let e of await p.getAll(cu(t))) {
    c.set(e.fileKey, e);
    let t = a.find(t => t.fileKey === e.fileKey);
    if (t) {
      let r = await o.getAll(iM(t.id));
      (eh(e.fileKey, r) || e.hasChangedMetadata) && _.add(e.fileKey);
    }
  }
  return {
    editorSessionRowsWithChanges: s,
    newFilesByKey: c,
    newFilesWithChanges: _
  };
}
export async function $$ei23(e) {
  let t = await $$er16(e);
  return t.unsyncedFiles.length > 0 || t.newFiles.length > 0;
}
async function ea(e) {
  if (rQ()) return [];
  let t = await Z4();
  if (!t) return [];
  let {
    editorSessionRowsWithChanges,
    newFilesByKey,
    newFilesWithChanges
  } = await en(t, e);
  let a = new Set();
  let s = new Map();
  for (let e of editorSessionRowsWithChanges) {
    a.add(e.fileKey);
    s.set(e.fileKey, Math.max(s.get(e.fileKey) || 0, e.lastUpdatedAt));
  }
  let l = Array.from(a).map(e => {
    let t = newFilesByKey.get(e);
    return t ? es(t, s, newFilesWithChanges.has(t.fileKey)) : null;
  }).filter(isNotNullish);
  eb?.fileCreationManager?.updateNewFileInfoFromFiles(l);
  return l;
}
function es(e, t, r) {
  return {
    type: "new-autosave-file",
    fileKey: e.fileKey,
    editorType: e.editorType,
    name: e.name,
    creatorId: e.userID,
    createdAt: e.createdAt,
    lastUpdatedAt: t.get(e.fileKey),
    orgId: e.orgID ?? null,
    hasChanges: r,
    hasChangedMetadata: e.hasChangedMetadata ?? !1
  };
}
export async function $$eo0(e, t) {
  if (rQ()) return;
  let r = async (e, r) => {
    let n = r.objectStore(jP);
    return eh(t, await n.getAll(iM(e.id)));
  };
  await $$ed14(Zt(e, t), r);
}
export async function $$el21(e, t) {
  await $$ed14(cu(e), e => !t.includes(e.fileKey));
}
export async function $$ed14(e, t) {
  let r = await Z4();
  if (!r) return [];
  let n = r.transaction([Sp, jP, DV, w8, JR], "readwrite");
  let i = Error("original async stack");
  n.done.catch(e => {
    e.cause = i;
    reportError(_$$e.UNOWNED, e);
  });
  let s = n.objectStore(Sp);
  let o = n.objectStore(jP);
  let d = n.objectStore(DV);
  let c = n.objectStore(w8);
  let u = n.objectStore(JR);
  let p = !1;
  let _ = await s.index(SW).getAll(e);
  let h = [];
  let m = [];
  for (let e of _) if (!(t && (await t(e, n)))) {
    let [t, r, n] = await Promise.all([o.count(iM(e.id)), d.count(iM(e.id)), c.count(iM(e.id))]);
    m.push({
      userID: e.userID,
      fileKey: e.fileKey,
      sessionID: e.sessionID,
      isLocalFile: isLocalFileKey(e.fileKey),
      nodeCount: t,
      imageCount: r,
      referencedNodeCount: n,
      lastUpdatedAt: e.lastUpdatedAt
    });
    s.$$delete(e.id).catch(e => K(e, "deleteAutosaveDataForSessions: delete editor session"));
    o.$$delete(iM(e.id)).catch(e => K(e, "deleteAutosaveDataForSessions: delete node changes"));
    d.$$delete(iM(e.id)).catch(e => K(e, "deleteAutosaveDataForSessions: delete images"));
    c.$$delete(iM(e.id)).catch(e => K(e, "deleteAutosaveDataForSessions: delete referenced nodes"));
    p = !0;
    isLocalFileKey(e.fileKey) && h.push({
      localFileKey: e.fileKey,
      userID: e.userID
    });
  }
  for (let {
    localFileKey,
    userID
  } of h) 0 === (await s.index(SW).count(Zt(userID, localFileKey))) ? await u.$$delete(Zt(userID, localFileKey)) : W6("Local file has remaining sessions");
  (await s.count()) === 0 && ((await o.count()) > 0 && (W6("Found leftover node changes in IDB"), o.$$delete(BE()).catch(e => K(e, "deleteAutosaveDataForSessions: delete leftover node changes"))), (await d.count()) > 0 && (W6("Found leftover images in IDB"), d.$$delete(IE()).catch(e => K(e, "deleteAutosaveDataForSessions: delete leftover images"))), (await c.count()) > 0 && (W6("Found leftover referenced node buffers in IDB"), c.$$delete(Ab()).catch(e => K(e, "deleteAutosaveDataForSessions: delete leftover referenced nodes"))));
  dU(n);
  await n.done;
  p && HZ();
  return m;
}
async function ec(e, t) {
  (await t.objectStore(jP).count(iM(e))) === 0 && (await t.objectStore(DV).count(iM(e))) === 0 && (await t.objectStore(w8).count(iM(e))) === 0 && t.objectStore(Sp).$$delete(e).catch(e => K(e, "deleteEditorSessionRowIfUnused: delete editor session"));
}
export async function $$eu8(e, t) {
  let r = await Z4();
  if (!r) throw Error("Could not open autosave data");
  let n = r.transaction([Sp, jP, DV, w8]);
  let i = n.objectStore(Sp);
  let a = n.objectStore(jP);
  let s = {};
  for (let e of await i.getAll()) {
    s[e.id] = e;
    s[e.id].changes = {};
  }
  for (let r of (s.unknown = {
    changes: {}
  }, (await a.getAll()).slice(0, e))) r.editorSessionID in s ? s[r.editorSessionID].changes[r.nodeID] = JSON.parse(i6g.encodeChangesAsJson(r.changes, s[r.editorSessionID].fileVersion, !!t)) : s.unknown.changes[r.nodeID] = JSON.parse(i6g.encodeChangesAsJson(r.changes, 1, !!t));
  await n.done;
  return s;
}
async function ep(e) {
  let {
    transaction,
    commitPolicy,
    userID,
    fileKey,
    fileVersion,
    sessionID,
    oldSessionID,
    pendingChanges,
    pendingImages,
    pendingReferencedNodes,
    reason,
    isFirstCommitOfAutosaveSession
  } = e;
  let m = transaction.objectStore(Sp);
  let g = transaction.objectStore(jP);
  let f = transaction.objectStore(DV);
  let y = transaction.objectStore(w8);
  let b = await $(userID, fileKey, oldSessionID, transaction);
  let T = 0;
  b && (T = (b.offlineEditingTime || 0) + (isFirstCommitOfAutosaveSession ? 0 : Date.now() - b.lastUpdatedAt));
  let I = b?.id;
  let S = {
    userID,
    fileKey,
    sessionID,
    lastUpdatedAt: Date.now(),
    releaseTag: getInitialOptions().release_git_tag || "",
    fileVersion,
    lastCommitReason: reason,
    offlineEditingTime: T,
    originalTrackingSessionId: fF()
  };
  for (let e of (null == I ? I = await m.add(S) : (commitPolicy === W2B.REPLACE_CHANGES && (g.$$delete(iM(I)).catch(e => K(e, "commitChanges: replace node changes")), y.$$delete(iM(I)).catch(e => K(e, "commitChanges: replace referenced nodes"))), m.put({
    id: I,
    ...S
  }).catch(e => K(e, "commitChanges: update session"))), pendingChanges)) e.changes ? g.put({
    editorSessionID: I,
    nodeID: e.nodeID,
    changes: e.changes
  }).catch(e => K(e, "commitChanges: put node changes")) : g.$$delete([I, e.nodeID]).catch(e => K(e, "commitChanges: clear node changes"));
  for (let e of pendingImages) if ((await f.count([I, e])) === 0) {
    let t = Bko.getCompressedImage(e);
    t && f.add({
      editorSessionID: I,
      hash: e,
      blob: t
    }).catch(e => K(e, "commitChanges: add images"));
  }
  for (let e of pendingReferencedNodes) y.add({
    editorSessionID: I,
    nodeID: e.nodeID,
    buffer: e.buffer
  }).catch(e => K(e, "commitChanges: add referenced nodes"));
  let A = await g.count(iM(I));
  0 === A && (await f.$$delete(iM(I)), await y.$$delete(iM(I)));
  await ec(I, transaction);
  dU(transaction);
  await transaction.done;
  isLocalFileKey(fileKey) && HZ();
  return A;
}
async function e_(e, t, r) {
  logInfo("Autosave", "assigning file key for new file", {
    localFileKey: t,
    newFileKey: r
  });
  await DB([Sp, JR], async n => {
    let i = n.objectStore(Sp);
    (await i.index(SW).getAll(Zt(e, t))).map(e => {
      e.fileKey = r;
      i.put(e);
    });
    n.objectStore(JR).$$delete(Zt(e, t));
  }, "readwrite");
  HZ();
}
function eh(e, t) {
  if (!isLocalFileKey(e)) return t.length > 0;
  if (t.length > 2) return !0;
  for (let {
    nodeID
  } of t) if (!["0:0", "0:1"].includes(nodeID)) return !0;
  return !1;
}
class em {
  constructor() {
    this.nextEventPromise = new Promise(e => {
      this.nextEventPromiseResolve = e;
    });
  }
  onCommitEvent() {
    this.nextEventPromiseResolve();
    this.nextEventPromise = new Promise(e => {
      this.nextEventPromiseResolve = e;
    });
  }
  waitForNextCommit() {
    return this.nextEventPromise;
  }
}
class eg {
  constructor(e, t) {
    this.userID = e;
    this._state = {
      type: "connecting"
    };
    this._fileKey = "";
    this._hasReportedError = !1;
    this.fileCreationManager = null;
    this.fileKey = t;
    rQ() ? (this._sessionsToRestore = Promise.resolve([]), this._state = {
      type: "terminated"
    }) : isLocalFileKey(t) ? this._sessionsToRestore = J(e, t) : this._sessionsToRestore = J(e, t).then(e => Z(e));
  }
  get fileKey() {
    return this._fileKey;
  }
  get managerState() {
    return this._state.type;
  }
  session() {
    return "connected" === this._state.type ? this._state.session : null;
  }
  set fileKey(e) {
    this._fileKey = e;
    let t = isLocalFileKey(e) ? e : null;
    atomStoreManager.set(_$$h, t);
  }
  async assignFileKeyForLocalFile(e) {
    if ("connected" !== this._state.type) {
      "connecting" === this._state.type && W6("Still connecting");
      return;
    }
    try {
      await this._state.session.enqueueAssignFileKeyForLocalFile(e, () => {
        this.fileKey = e;
        this.fileCreationManager = null;
      });
    } catch (e) {
      this.terminateDueToError("unable to update file key", !0);
    }
  }
  async terminateAndWaitForCleanup() {
    let e = "connected" === this._state.type ? this._state.session : null;
    this._state = {
      type: "terminated"
    };
    atomStoreManager.set(_$$h, null);
    await e?.destroy().catch(() => W6("Failed to destroy autosave session"));
  }
  terminateDueToError(e, t) {
    logWarning("Autosave", "autosave disabled", {
      message: e
    });
    t && W6(e);
    let r = "connected" === this._state.type;
    this._hasReportedError || (trackEventAnalytics("autosave_disabled", {
      message: e,
      hasSessionInProgress: r
    }, {
      forwardToDatadog: !0
    }), this._hasReportedError = !0);
    this.terminateAndWaitForCleanup().catch(t => W6("Failed to terminate autosave", {
      message: e,
      error: t.message
    }));
  }
  async onConnect(e) {
    if ("connecting" !== this._state.type) return;
    try {
      await Fy();
    } catch (e) {
      logInfo("Autosave", "IDB is not available in the current browser session.", void 0, {
        logToConsole: NUh.ALWAYS
      });
      trackEventAnalytics("autosave_db_failure", {
        message: e.message
      });
      this.terminateDueToError("unable to open DB", !1);
      return;
    }
    let t = new Timer();
    t.start();
    let r = await this._sessionsToRestore;
    isLocalFileKey(this.fileKey) && (r.length > 1 ? (W6("Local file has multiple sessions", {
      sessionCount: r.length,
      sessionIds: r.map(e => e.sessionID).slice(0, 5).join(", ")
    }), this.terminateDueToError("Local file has multiple sessions", !1)) : 1 === r.length && 0 !== r[0].sessionID && (W6("Local file with changes from non-zero session", {
      existingSessionId: r[0].sessionID
    }), this.terminateDueToError("Local file with changes from non-zero session", !1)));
    let n = await A2({
      userID: this.userID,
      fileKey: this.fileKey,
      sessionID: e
    });
    if (!n) {
      this.terminateDueToError("unable to acquire lock", !0);
      return;
    }
    this._state = {
      type: "connected",
      session: new ey(e, this, t, r, n)
    };
  }
  async onConnectNewFile(e) {
    let t = this.fileKey;
    if (isLocalFileKey(t)) try {
      await DB([JR], async r => {
        let n = r.objectStore(JR);
        if (await n.get(Zt(this.userID, t))) return;
        let i = {
          fileKey: t,
          userID: this.userID,
          editorType: e.editorType,
          name: e.fileName ?? getI18nString("fullscreen.fullscreen_view_selector.untitled"),
          createdAt: Date.now(),
          orgID: e.org_id
        };
        await n.put(i);
      }, "readwrite");
      this.fileCreationManager && W6("File creation manager already exists", {
        fileKey: t
      });
      this.fileCreationManager = new eE(t, e);
    } catch (e) {
      this.terminateDueToError("unable to set new file info", !0);
      return;
    }
    await this.onConnect(0);
  }
}
async function ef(e, t, r) {
  if (isLocalFileKey(t) && e) try {
    await DB([JR], async n => {
      let i = n.objectStore(JR);
      let a = await i.get(Zt(e, t));
      a && (await i.put({
        ...a,
        name: r,
        hasChangedMetadata: !0
      }));
    }, "readwrite");
    HZ();
  } catch (e) {
    reportError(_$$e.SCENEGRAPH_AND_SYNC, Error("unable to update new file info"));
  }
}
class eE {
  constructor(e, t) {
    this._pendingRealFileKey = null;
    this.fileKey = e;
    this._newFileInfo = t;
  }
  get newFileInfo() {
    return this._newFileInfo;
  }
  updateNewFileInfo(e) {
    this._newFileInfo = {
      ...this._newFileInfo,
      ...e
    };
  }
  updateNewFileInfoFromFiles(e) {
    let t = e.find(e => e.fileKey === this.fileKey);
    if (t) {
      let e = _$$B(t, this.newFileInfo.openNewFileIn);
      this.updateNewFileInfo(e);
    }
  }
  get pendingRealFileKey() {
    return this._pendingRealFileKey;
  }
  assignPendingRealFileKey(e) {
    this._pendingRealFileKey = e;
    hp.sendToAllTabs(m6, {
      localFileKey: this.fileKey,
      realFileKey: e
    });
  }
}
class ey {
  constructor(e, t, r, n, i) {
    this.sessionID = e;
    this.manager = t;
    this.restoreTimer = r;
    this.changesToRestore = n;
    this.webLock = i;
    this.transactionQueue = new _$$O();
    this.commitEventListener = new em();
    this.restoring = !1;
    this.consecutiveCommitsAddingChanges = 0;
    this.lastCommitTime = 0;
    this.activityLogger = navigator.storage?.estimate ? new hS() : null;
    this.restoreAnalytics = {
      hadChangesToRestore: !1,
      fileKey: "",
      time: 0,
      timeToStartSession: 0,
      timeToApply: 0,
      timeToSync: 0,
      sessionsCheckTime: 0,
      numberOfBytes: 0,
      numberOfNodes: 0,
      numberOfReferencedNodes: 0,
      numberOfRestoredReferencedNodes: 0,
      numberOfSessions: 0,
      numberOfImages: 0,
      neededToMigrate: !1,
      persistentStorage: !1,
      changesAreAllDerivedData: !1,
      nodeFields: [],
      stagingDump: void 0,
      lastUpdatedAt: void 0,
      releaseTag: void 0,
      isLocalFile: !1,
      offlineEditingTime: void 0,
      lastCommitReason: void 0,
      originalTrackingSessionId: void 0,
      storageUsageBytes: void 0,
      storageQuotaBytes: void 0,
      isIncremental: !1
    };
    this.reportedFullQueue = !1;
    this.reportedStorageError = !1;
    this.hasCommitted = !1;
    this.restoreAnalytics.timeToStartSession = this.restoreTimer.getElapsedTime();
  }
  getActivityLogger() {
    return this.activityLogger;
  }
  async destroy() {
    await this.webLock.release().catch(e => K(e, "AutosaveSession.destroy: releasing session lock"));
  }
  sessionTransaction(e, t, r, n) {
    let i = DB(t, r, n);
    i.catch(t => {
      trackEventAnalytics("autosave_transaction_failure", {
        transactionName: e,
        message: t.message
      });
      this.manager.terminateDueToError(`${e} transaction failed`, !1);
    });
    return i;
  }
  readyToAcceptChanges() {
    let e = this.transactionQueue.length >= 10;
    e && !this.reportedFullQueue && (this.reportedFullQueue = !0, W6("Autosave transaction queue is backed up."));
    return !this.restoring && !e;
  }
  hasOngoingCommitTask() {
    return !this.transactionQueue.isComplete();
  }
  getLastCommitTime() {
    return this.lastCommitTime;
  }
  async tryToFlushAutosave() {
    this.readyToAcceptChanges() && (i6g.flushAutosave(), await this.transactionQueue.waitForCompletion());
  }
  async enqueueAutosaveCommit(e) {
    await this.transactionQueue.enqueue(() => this.commitAutosave(e));
  }
  async commitAutosave(e) {
    let {
      changes,
      commitPolicy,
      fileVersion,
      fileKey,
      newSessionID,
      numberOfUncleanRegisters,
      reason
    } = e;
    if (!this.readyToAcceptChanges()) {
      this.manager.terminateDueToError("Committing, but not ready to accept changes", !0);
      return;
    }
    if (newSessionID < 0) {
      this.manager.terminateDueToError("Unexpected sessionID < 0", !0);
      return;
    }
    if (fileKey && fileKey !== this.manager.fileKey) {
      W6("Web file key out of sync with fullscreen file key", {
        "web file key": this.manager.fileKey,
        "fullscreen file key": fileKey
      });
      this.manager.terminateDueToError("Web file key out of sync with fullscreen file key", !1);
      return;
    }
    this.activityLogger?.recordAutosaveCommit(this.manager.fileKey, this.manager.userID, this.sessionID, e);
    let l = this.sessionID;
    let c = null;
    if (newSessionID !== this.sessionID) {
      c = this.webLock;
      this.sessionID = newSessionID;
      let e = await A2({
        userID: this.manager.userID,
        fileKey: this.manager.fileKey,
        sessionID: this.sessionID
      });
      if (!e) {
        this.manager.terminateDueToError("unable to acquire lock", !0);
        return;
      }
      this.webLock = e;
    }
    if (!LX(this.webLock, {
      userID: this.manager.userID,
      fileKey: this.manager.fileKey,
      sessionID: this.sessionID
    })) {
      this.manager.terminateDueToError("lock is not for the current session", !1);
      return;
    }
    let u = changes.changedNodes.length;
    let p = changes.changedNodes.map(e => ({
      nodeID: e.nodeID,
      changes: e.changes
    })).concat(changes.clearedNodes.map(e => ({
      nodeID: e,
      changes: null
    })));
    let _ = [];
    for (let e of changes.referencedNodes) _.push({
      nodeID: e.nodeID,
      buffer: e.changes
    });
    let h = new Set();
    for (let e of changes.imageHashes) h.add(e);
    let m = await this.sessionTransaction("commit", [Sp, jP, DV, w8], async e => await ep({
      transaction: e,
      commitPolicy,
      userID: this.manager.userID,
      fileKey: this.manager.fileKey,
      fileVersion,
      oldSessionID: l,
      sessionID: this.sessionID,
      pendingChanges: p,
      pendingImages: h,
      pendingReferencedNodes: _,
      reason,
      isFirstCommitOfAutosaveSession: !this.hasCommitted
    }), "readwrite");
    this.hasCommitted = !0;
    this.lastCommitTime = Date.now();
    let g = {
      stored_node_changes: m,
      unclean_registers: numberOfUncleanRegisters,
      changed_nodes: u,
      cleared_nodes: changes.clearedNodes.length,
      referenced_nodes: _.length,
      pending_images: h.size,
      commit_policy: W2B[commitPolicy],
      session_id: this.sessionID,
      new_session_id: newSessionID,
      commit_reason: void 0 !== reason ? uXP[reason] : void 0,
      file_key: fileKey,
      manager_file_key: this.manager.fileKey
    };
    if (logInfo("Autosave", "commit completed", g), ds("autosave_commit_completed", fileKey, debugState.getState(), g), !this.reportedStorageError && void 0 !== numberOfUncleanRegisters && numberOfUncleanRegisters !== m) {
      if (m > 0 && 0 === numberOfUncleanRegisters) {
        let e = e => {
          if (!(e.length > 5)) return e;
          {
            let t = e.slice(0, 5);
            t.push("...");
            return t;
          }
        };
        let r = await $$eu8(5, !0);
        logError("Autosave", "Dumping autosave since we expect IDB to be empty", {
          debug: r,
          changedNodes: e(changes.changedNodes.map(e => e.nodeID)),
          clearedNodes: e(changes.clearedNodes),
          referencedNodes: e(changes.referencedNodes.map(e => e.nodeID)),
          imageHashes: e(changes.imageHashes),
          currentSessionID: h3O.currentSessionID(),
          commitQueueLength: this.transactionQueue.length
        });
        this.manager.terminateDueToError("Expected IDB to be empty after synchronizing with multiplayer", !0);
      } else m > numberOfUncleanRegisters ? this.manager.terminateDueToError("Expected IDB to have at many node changes as registers (currently has more)", !0) : m < numberOfUncleanRegisters && this.manager.terminateDueToError("Expected IDB to have at many node changes as registers (currently has less)", !0);
      this.reportedStorageError = !0;
    }
    null != c && c.release().catch(e => K(e, "commitAutosave: release lock"));
    this.commitEventListener.onCommitEvent();
    commitPolicy === W2B.ADD_CHANGES ? (this.consecutiveCommitsAddingChanges++, this.consecutiveCommitsAddingChanges >= 4 && YQ({
      id: Cr
    })) : this.consecutiveCommitsAddingChanges = 0;
  }
  async restoreAutosaveIfNeeded() {
    if (i6g.fileIsReadOnly()) return;
    this.restoreAnalytics.fileKey = this.manager.fileKey;
    this.restoreAnalytics.isLocalFile = isLocalFileKey(this.manager.fileKey);
    this.restoring = !0;
    let e = function () {
      if (!BrowserInfo.chrome || !navigator.storage?.persist) return Promise.resolve(!1);
      let e = new Promise(e => setTimeout(() => e(!1), 200));
      return Promise.race([navigator.storage.persist(), e]);
    }();
    let t = U4();
    let r = this.changesToRestore;
    if (this.changesToRestore = [], this.restoreAnalytics.sessionsCheckTime = this.restoreTimer.getElapsedTime(), this.restoreAnalytics.numberOfSessions = r.length, r.length > 0) {
      let e = r[0];
      this.restoreAnalytics.lastUpdatedAt = e.lastUpdatedAt;
      this.restoreAnalytics.offlineEditingTime = e.offlineEditingTime;
      this.restoreAnalytics.originalTrackingSessionId = e.originalTrackingSessionId;
      this.restoreAnalytics.lastCommitReason = e.lastCommitReason ? uXP[e.lastCommitReason] : void 0;
      this.restoreAnalytics.releaseTag = e.releaseTag;
      await this.restoreChangesForSessionRows(r);
    }
    this.restoreAnalytics.persistentStorage = await e;
    let {
      usageBytes,
      quotaBytes
    } = await t;
    this.restoreAnalytics.storageUsageBytes = usageBytes;
    this.restoreAnalytics.storageQuotaBytes = quotaBytes;
    this.restoreAnalytics.isIncremental = h3O.isIncrementalSession();
    this.restoreTimer.stop();
    this.restoreAnalytics.time = this.restoreTimer.getElapsedTime();
    ds("autosave_restore_on_load", this.restoreAnalytics.fileKey, debugState.getState(), this.restoreAnalytics, {
      forwardToDatadog: !0
    });
    this.restoring = !1;
  }
  async restoreChangesForSessionRows(e) {
    if (!LX(this.webLock, {
      userID: this.manager.userID,
      fileKey: this.manager.fileKey,
      sessionID: this.sessionID
    })) {
      this.manager.terminateDueToError("lock is not for the current session", !1);
      return;
    }
    let {
      changesByNode,
      referencedNodeMap,
      fileVersion
    } = await this.sessionTransaction("restore", [Sp, jP, DV, w8], async t => await q(t, this.sessionID, e), "readwrite");
    let i = changesByNode.size > 0;
    for (let {
      changes
    } of (i ? (isLocalFileKey(this.manager.fileKey) || (await _$$m(this.manager.fileKey, "Offline sync", "Before syncing changes", debugState.dispatch).catch(e => W6("Failed to create before savepoint", {
      status: e.status,
      message: e.data?.message
    }))), logInfo("Autosave", "Restoring auto-saved data", void 0, {
      logToConsole: NUh.ALWAYS
    }), await this.restoreChanges(changesByNode, referencedNodeMap, fileVersion)) : logInfo("Autosave", "Changes are empty!", void 0, {
      logToConsole: NUh.ALWAYS
    }), this.commitEventListener.waitForNextCommit().then(() => {
      hp.sendToOtherTabs(_$$a);
    }).catch(e => K(e, "restoreChangesForSessionRows: waitForNextCommit")), this.restoreAnalytics.hadChangesToRestore = i, this.restoreAnalytics.numberOfBytes = 0, this.restoreAnalytics.numberOfNodes = changesByNode.size, this.restoreAnalytics.numberOfReferencedNodes = referencedNodeMap.size, changesByNode.values())) this.restoreAnalytics.numberOfBytes += changes.length;
  }
  async restoreChanges(e, t, r) {
    let n = Array.from(e.entries()).sort(([e, t], [r, n]) => e < r ? -1 : 1);
    let i = getFeatureFlags().suppress_unsaved_changes_ui && getFeatureFlags().incremental_loading_validation && n.every(([e, {
      changes: t
    }]) => i6g.changesAreOnlyNewFileSystemChanges(t, r));
    let s = [];
    for (let [e, {
      changes: t,
      editorSessionID: i
    }] of n) {
      let {
        decodedAsEmptyMultiplayerMessage
      } = i6g.loadAutosavedNodeChanges(e, t, r);
      decodedAsEmptyMultiplayerMessage && s.push([e, i]);
    }
    let o = Promise.resolve();
    if (s.length > 0 && (logWarning("Autosave", "Deleting nodes without phase or property changes", {
      numNodes: s.length,
      guids: JSON.stringify(s.map(([e]) => e).slice(0, 10))
    }), trackEventAnalytics("autosave delete empty changes", {
      numNodes: s.length,
      willDelete: !0
    }), o = this.sessionTransaction("delete_empty_changes", [jP, DV, w8, Sp], async e => {
      let t = e.objectStore(jP);
      let r = new Set(s.map(([e, t]) => t));
      await Promise.all(s.map(([e, r]) => t.$$delete([r, e]).catch(e => K(e, "restoreChanges: delete empty node changes"))));
      await Promise.all(Array.from(r.values()).map(t => ec(t, e)));
    }, "readwrite")), this.restoreAnalytics.changesAreAllDerivedData = i6g.changesAreAllDerivedData(), this.restoreAnalytics.nodeFields = i6g.restoredNodeFieldNames(), this.restoreAnalytics.neededToMigrate = i6g.currentFileVersion() > r, Ff()) {
      ds("autosave_load_containing_pages_start", this.manager.fileKey, debugState.getState(), {
        node_count: e.size,
        fileKey: this.manager.fileKey
      });
      let t = performance.now();
      let r = new Set(e.keys());
      for (let e of i6g.getParentIndexChanges()) r.add(e);
      await Xl(r);
      ds("autosave_load_containing_pages_end", this.manager.fileKey, debugState.getState(), {
        node_count: e.size,
        timeElapsed: performance.now() - t,
        fileKey: this.manager.fileKey
      });
    }
    let l = i6g.getImagesUsedInAutosavedChanges().split(" ");
    this.restoreAnalytics.numberOfImages = await this.restoreImagesIfAvailable(l);
    let p = this.restoreAvailableReferencedNodes(t);
    i6g.migrateAndSetAutosaveChanges(p, r);
    l7.autosave("autosave", () => i6g.applyAutosavedChanges());
    this.restoreAnalytics.timeToApply = this.restoreTimer.getElapsedTime();
    logInfo("Autosave", "Successfully applied auto-saved changes", void 0, {
      logToConsole: NUh.ALWAYS
    });
    let _ = () => {
      debugState.dispatch(_$$Q.enqueueFront({
        notification: {
          type: _$$_.AUTOSAVE_CHANGES_RESTORED,
          message: getI18nString("autosave.changes_synced")
        }
      }));
      logInfo("Autosave", "Successfully synced auto-saved changes", void 0, {
        logToConsole: NUh.ALWAYS
      });
    };
    await o;
    (async () => {
      await _$$l2();
      this.restoreAnalytics.timeToSync = this.restoreTimer.getElapsedTime();
      isLocalFileKey(this.manager.fileKey) || (await _$$m(this.manager.fileKey, "Offline sync", "After syncing changes", debugState.dispatch).catch(e => {
        ds("autosave_skip_after_checkpoint", this.manager.fileKey, debugState.getState(), {
          error: e.data?.message
        });
        W6("Failed to create after savepoint", {
          status: e.status,
          message: e.data?.message
        });
      }));
      this.manager.fileKey !== debugState.getState().openFile?.key || i || _();
    })();
  }
  async restoreImagesIfAvailable(e) {
    let t = 0;
    await this.sessionTransaction("restore images", [Sp, DV], async r => {
      let n = await this.currentEditorSessionID(r);
      if (!n) return;
      let i = r.objectStore(DV);
      for (let r of e) {
        let e = await i.get([n, r]);
        e && (i6g.restoreImageBytes(r, e.blob), t++);
      }
      await r.done;
    });
    return t;
  }
  restoreAvailableReferencedNodes(e) {
    let t = [];
    for (let [r, n] of e) {
      i6g.restoreReferencedNodeFile(r, n);
      t.push(r);
    }
    return t;
  }
  currentEditorSessionID(e) {
    return X(this.manager.userID, this.manager.fileKey, this.sessionID, e);
  }
  async getNodeChangesForSession() {
    let e = await Z4();
    if (!e) throw Error("Unable to get DB");
    let t = e.transaction([Sp, jP], "readonly");
    let r = t.objectStore(jP);
    let n = await this.currentEditorSessionID(t);
    return n ? await r.getAll(iM(n)) : [];
  }
  async getNodeChangeCount() {
    return (await this.getNodeChangesForSession()).length;
  }
  async hasPersistedUserChanges() {
    let e = await this.getNodeChangesForSession();
    return eh(this.manager.fileKey, e);
  }
  async enqueueAssignFileKeyForLocalFile(e, t) {
    let r = this.manager.fileKey;
    if (!isLocalFileKey(r)) {
      W6("Only local file keys can be reassigned");
      return;
    }
    if (isLocalFileKey(e)) {
      W6("Cannot reassign file key to a local file key");
      return;
    }
    await this.transactionQueue.enqueue(async () => {
      let n = this.webLock;
      let i = await A2({
        userID: this.manager.userID,
        fileKey: e,
        sessionID: this.sessionID
      });
      if (!i) {
        this.manager.terminateDueToError("unable to acquire lock", !0);
        return;
      }
      this.webLock = i;
      await e_(this.manager.userID, r, e);
      t();
      await n?.release();
    });
  }
}
let eb = null;
export function $$eT9() {
  return eb;
}
export function $$eI18(e, t) {
  if (eb) {
    if (eb.fileKey === e) {
      logInfo("Autosave", "Autosave manager already exists");
      return eb;
    }
    W6("Manager already exists. Updating file key", {
      "current fileKey": eb.fileKey,
      "new fileKey": e
    });
    eb.terminateAndWaitForCleanup();
    eb = null;
  }
  logDebug("Autosave", "Create autosave manager", {
    fileKey: e
  });
  return eb = new eg(t, e);
}
export function $$eS20() {
  $$ev22().catch(e => K(e, "failed to destroy autosave manager"));
}
export async function $$ev22() {
  if (logDebug("Autosave", "Destroy autosave manager"), !eb) {
    logInfo("Autosave", "No manager to destroy");
    return;
  }
  let e = eb;
  eb = null;
  await e.terminateAndWaitForCleanup();
}
export function $$eA15(e, {
  offlineFiles: t
}) {
  let r = {};
  for (let n in e) {
    let e = t[n];
    e && (r[n] = e);
  }
  return r;
}
export let $$ex6 = _$$M.Query({
  async fetch({
    userId: e
  }) {
    if (!e) return {};
    let t = await ea(e);
    let r = {};
    for (let e of t) r[e.fileKey] = e;
    return r;
  }
});
export var $$eN19 = (e => (e.OFFLINE_FILE_TILE = "OFFLINE_FILE_TILE", e.EDITOR = "EDITOR", e))($$eN19 || {});
let $$eC12 = _$$M.Mutation(({
  fileKey: e,
  name: t,
  source: r
}, {
  atomStore: n,
  query: i,
  reduxStore: a
}) => {
  if (n.set(eL, null), !t) return;
  let s = a.getState().user?.id ?? null;
  i.mutate($$ex6({
    userId: s
  }), r => {
    let n = r[e];
    n && (n.name = t);
  });
  let o = eb?.fileCreationManager;
  o && (o.fileKey === e ? (o.updateNewFileInfo({
    fileName: t
  }), o.pendingRealFileKey && debugState.dispatch(yJ({
    file: {
      key: o.pendingRealFileKey,
      name: t
    },
    userInitiated: !0
  }))) : W6("File key in rename mutation does not match current FileCreationManager file key", {
    mutationFileKey: e,
    fileCreationManagerFileKey: o.fileKey
  }));
  trackEventAnalytics("Rename New Autosave File", {
    source: r,
    isOffline: !navigator.onLine
  });
  return ef(s, e, t);
});
let ew = atom(e => {
  let t = e(kS);
  let r = {};
  if (t) {
    let n = e($$ex6({
      userId: t
    }));
    for (let [e, t] of Object.entries(n?.data ?? {})) t.hasChanges && (r[e] = t);
  }
  return r;
});
let $$eO17 = atom(e => {
  let t = e(_$$h);
  let r = e(kS);
  if (t && r) {
    let n = e($$ex6({
      userId: r
    }));
    let i = n?.data ?? {};
    if (t in i) return i[t];
  }
  return null;
});
export function $$eR1() {
  return atomStoreManager.get($$eO17);
}
let eL = atom(null);
export function $$eP13(e) {
  atomStoreManager.set(eL, e.fileKey);
}
let eD = atom({});
export function $$ek2(e, t) {
  let r = atomStoreManager.get(eD);
  atomStoreManager.set(eD, {
    ...r,
    [e]: t
  });
}
let eM = atom(e => {
  let t = {
    ...e(ew)
  };
  let r = e(eL);
  let n = e(eD);
  let i = {};
  for (let e in t) e in n || (i[e] = t[e]);
  if (r && r in i) {
    let e = i[r];
    i[r] = {
      ...e,
      isRenaming: !0
    };
  }
  return i;
});
export function $$eF7() {
  return useAtomWithSubscription(eM);
}
export function $$ej4(e) {
  let t = useSelector(t => !!t.autosave.unclaimedFilesWithChangesInIDB.find(t => t.fileKey === e));
  let r = _$$l(dDF, t ? e : "");
  return t ? r : resourceUtils.loaded(!1);
}
export function $$eU3() {
  let e = useSelector(e => e.autosave.unclaimedFilesWithChangesInIDB);
  let t = useSelector(e => e.autosave.unclaimedFilesCreatedOffline);
  let r = _$$p(dDF, useMemo(() => e.map(({
    fileKey: e
  }) => ({
    key: e
  })), [e]));
  let a = useMemo(() => r.map(({
    result: e
  }) => e.transform(e => !!e.file?.hasPermission)), [r]);
  let o = useSelector(e => e.fileByKey);
  return useMemo(() => ({
    unsyncedFiles: filterNotNullish(e.map(({
      fileKey: e,
      lastUpdatedAt: t
    }, r) => {
      let n = o[e];
      return n && !n.trashed_at && a[r].unwrapOr(!1) ? {
        type: "autosave-file",
        fileKey: e,
        lastUpdatedAt: t,
        file: n
      } : null;
    })),
    localUnsyncedFiles: t
  }), [e, t, o, a]);
}
export const $3 = $$eo0;
export const GT = $$eR1;
export const Gc = $$ek2;
export const Gg = $$eU3;
export const I4 = $$ej4;
export const JI = $$ee5;
export const OL = $$ex6;
export const Rp = $$eF7;
export const Ww = $$eu8;
export const ZG = $$eT9;
export const ZW = $$et10;
export const bD = $$Y11;
export const b_ = $$eC12;
export const dm = $$eP13;
export const go = $$ed14;
export const gp = $$eA15;
export const kl = $$er16;
export const lu = $$eO17;
export const mu = $$eI18;
export const oE = $$eN19;
export const t = $$eS20;
export const wI = $$el21;
export const yn = $$ev22;
export const z$ = $$ei23;