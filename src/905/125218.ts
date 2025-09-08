import { ServiceCategories as _$$e } from "../905/165054";
import { FullscreenPerfMetrics, AutosaveHelpers, CorePerfInfo } from "../figma_app/763686";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { getEnvironmentInfo } from "../905/883621";
import { desktopAPIInstance } from "../figma_app/876459";
import { getInitialOptions } from "../figma_app/169182";
import { l as _$$l } from "../905/190247";
import { reportError } from "../905/11";
import { startPerformanceSpan, endPerformanceSpan } from "../905/670985";
import { getTrackingSessionId, incrementSessionCounter } from "../905/471229";
import { ys, QM, Nq } from "../figma_app/314264";
import { ds } from "../905/87821";
import { dd, PH } from "../905/550523";
class f {
  constructor(e) {
    this.maxHits = e;
    this.numHits = {};
  }
  getKeyWithIndex(e) {
    let t = this.numHits[e] || 0;
    return 0 === t ? e : t < this.maxHits ? `${e}.${t}` : null;
  }
  clear() {
    this.numHits = {};
  }
  increment(e) {
    this.numHits[e] = (this.numHits[e] || 0) + 1;
  }
}
let $$_0 = new Set(["initialize-gpu", "render-tree-generation", "mp-receive-schema", "mp-receive-decompress-buffer", "mp-receive-decode-buffer-node-change", "mp-receive-decode-buffer-other", "handle-changes-from-server", "handle-joining-changes-from-server", "playback-joining-messages", "synthesize-missing-geometry-cache-changes", "update-symbol-instances", "enforce-structural-invariants", "after-initial-join", "handle-join-end", "first-document-render", "mp-ws-onmessage", "mp-ws-onopen", "receiveSceneGraphReply"]);
let A = new Set(["initialize-gpu.start", "initialize-gpu.end", "AFTER_FIRST_RENDER", "createStoreStart", "initAndHydrateActionNoUserStateStart", "initAndHydrateActionNoUserStateEnd", "hydrateActionWithUserStateStart", "hydrateActionWithUserStateEnd", "initialReactRenderStart", "initialReactRenderEnd", "loadingBinaryStart", "loadingCodeStart", "instantiateStreamingStart", "instantiateStreamingEnd", "awaitInstantiateStreamingStart", "awaitInstantiateStreamingEnd", "instantiateStart", "instantiateEnd", "awaitInstantiateStart", "awaitInstantiateEnd", "callMainStart", "callMainEnd", "editorPreloaded", "loadAndStartFullscreen", "fullscreenIsReady", "appEntryStart", "appEntryEnd", "fileMetadataRequestStart", "fileMetadataRequestEnd"]);
let $$y1 = new class {
  constructor() {
    this._loadID = null;
    this.timeEvents = {};
    this.wsEventTimes = {};
    this.wsMsgSizes = {};
    this.wsMaxMsgInfo = {
      size: void 0,
      timestamp: void 0
    };
    this.wsTotalMsgSize = 0;
    this.wsTotalNodeChangeSize = 0;
    this.fileKey = null;
    this.folderId = null;
    this.teamId = null;
    this.orgId = null;
    this.fsHitsManager = new f(10);
    this.wsHitsManager = new f(10);
    this.wsMsgSizeHitsManager = new f(10);
    this.numTimesLoaded = 0;
    this.fileOpenIndex = 0;
    this.reportedLoad = !1;
    this.reportedAbandon = !1;
    this.reportedFocusLost = !1;
    this.reportedFocusGained = !1;
    this.reportedBackgrounded = !1;
    this.reportedOffline = !1;
    this.isLoading = !1;
    this.isVisibleLoad = !1;
    this.wsUrl = null;
    this.chunkingEnabled = !1;
    this.chunkSize = 0;
    this.reportAbandon = () => {
      if (this.reportedLoad || this.reportedAbandon) return;
      let e = Math.round(performance.now()) - (this.isColdBoot ? 0 : this.timeEvents.openFileActionStart);
      trackEventAnalytics("Fullscreen File Abandon", {
        fileKey: this.fileKey,
        loadID: this.loadID(),
        randomID: ds(),
        fileOpenIndex: this.fileOpenIndex,
        abandonTime: e,
        fullLoadTime: this.timeEvents.fullLoadTime,
        coldBoot: this.isColdBoot,
        isDesktopInitialStartupTab: desktopAPIInstance && desktopAPIInstance.tabWasOpenedAsPartOfInitialStartup()
      }, {
        forwardToDatadog: !0,
        sendAsBeacon: !0
      });
      this.reportedAbandon = !0;
    };
    this.reportFocusLost = () => {
      if (this.reportedLoad || this.reportedFocusLost) return;
      let e = Math.round(performance.now()) - (this.isColdBoot ? 0 : this.timeEvents.openFileActionStart);
      trackEventAnalytics("Fullscreen Loading Lost Focus", {
        fileKey: this.fileKey,
        randomID: ds(),
        fileOpenIndex: this.fileOpenIndex,
        focusLostTime: e,
        fullLoadTime: this.timeEvents.fullLoadTime,
        coldBoot: this.isColdBoot
      });
      this.mark("lostFocus");
      this.reportedFocusLost = !0;
    };
    this.reportFocusGained = () => {
      if (this.reportedLoad || this.reportedFocusGained) return;
      let e = Math.round(performance.now()) - (this.isColdBoot ? 0 : this.timeEvents.openFileActionStart);
      trackEventAnalytics("Fullscreen Loading Gained Focus", {
        fileKey: this.fileKey,
        randomID: ds(),
        fileOpenIndex: this.fileOpenIndex,
        focusedTime: e,
        fullLoadTime: this.timeEvents.fullLoadTime,
        coldBoot: this.isColdBoot
      });
      this.mark("gainedFocus");
      this.reportedFocusGained = !0;
    };
    this.reportBackgrounded = () => {
      if (this.reportedLoad || "hidden" !== document.visibilityState || this.reportedBackgrounded) return;
      let e = Math.round(performance.now()) - (this.isColdBoot ? 0 : this.timeEvents.openFileActionStart ?? 0);
      analyticsEventManager.trackDefinedEvent("scenegraph_and_sync.backgrounded_load", {
        fileKey: this.fileKey,
        fileParentOrgId: this.orgId,
        fileTeamId: this.teamId,
        containingFolderId: this.folderId,
        loadID: this._loadID,
        backgroundedTime: e,
        coldBoot: this.isColdBoot
      });
      this.mark("backgrounded");
      this.reportedBackgrounded = !0;
    };
    this.reportOffline = () => {
      if (this.reportedLoad || this.reportedOffline) return;
      let e = Math.round(performance.now()) - (this.isColdBoot ? 0 : this.timeEvents.openFileActionStart ?? 0);
      analyticsEventManager.trackDefinedEvent("scenegraph_and_sync.load_went_offline", {
        fileKey: this.fileKey,
        fileParentOrgId: this.orgId,
        fileTeamId: this.teamId,
        containingFolderId: this.folderId,
        loadID: this._loadID,
        coldBoot: this.isColdBoot,
        offlineTime: e
      });
      this.mark("offline");
      this.reportedOffline = !0;
    };
  }
  loadID() {
    return this._loadID;
  }
  isInProgressVisibleLoad() {
    return this.isLoading && this.isVisibleLoad;
  }
  newLoadID() {
    return Date.now().toString(36);
  }
  mark(e) {
    this.timeEvents[e] = Math.round(performance.now());
  }
  startFs(e) {
    let t = this.fsHitsManager.getKeyWithIndex(e);
    null !== t && (startPerformanceSpan(t, _$$e.SCENEGRAPH_AND_SYNC), this.mark(`${t}.start`));
  }
  stopFs(e) {
    let t = this.fsHitsManager.getKeyWithIndex(e);
    null !== t && (this.mark(`${t}.end`), endPerformanceSpan(t));
    this.fsHitsManager.increment(e);
  }
  setWsUrl(e) {
    this.wsUrl = e;
  }
  logWsMsg(e, t, i) {
    i = void 0 === i ? performance.now() : i;
    "mp-ws-onopen" === e && (this.wsEventTimes = {}, this.wsMsgSizes = {}, this.wsHitsManager.clear(), this.wsMsgSizeHitsManager.clear(), this.wsMaxMsgInfo = {
      size: void 0,
      timestamp: void 0
    }, this.wsTotalMsgSize = 0, this.wsTotalNodeChangeSize = 0);
    let r = "mp-init";
    let a = Object.keys(this.wsEventTimes).length;
    0 === a ? startPerformanceSpan(r, _$$e.SCENEGRAPH_AND_SYNC, i) : 1 === a && endPerformanceSpan(r, i);
    let s = this.wsHitsManager.getKeyWithIndex(e);
    null !== s && (this.wsEventTimes[s] = i);
    this.wsHitsManager.increment(e);
    let o = `${e}-size`;
    let l = this.wsMsgSizeHitsManager.getKeyWithIndex(o);
    null !== l && t && (this.wsMsgSizes[l] = t);
    this.wsMsgSizeHitsManager.increment(o);
    void 0 !== t && (this.wsMaxMsgInfo = {
      size: Math.max(this.wsMaxMsgInfo.size || 0, t),
      timestamp: t > (this.wsMaxMsgInfo.size || 0) ? i : this.wsMaxMsgInfo.timestamp
    }, this.wsTotalMsgSize += t);
  }
  logNodeChangeMsg(e) {
    this.wsTotalNodeChangeSize += e;
  }
  documentIsLoaded() {
    this.start("documentIsLoaded");
    this.timeEvents.fullLoadTime = this.timeEvents.documentIsLoaded - (this.isColdBoot ? 0 : this.timeEvents.openFileActionStart);
  }
  reactFullscreenViewIsRendered() {
    this.start("reactFullscreenViewIsRendered");
    this.timeEvents.reactFullscreenViewIsRenderedDuration = this.timeEvents.reactFullscreenViewIsRendered - (this.isColdBoot ? 0 : this.timeEvents.openFileActionStart);
  }
  logOpenFileAction(e, t, i, n, r) {
    for (let t in this.fileKey = e, this.folderId = i, this.teamId = n, this.orgId = r, this._loadID = this.newLoadID(), ys(this._loadID), QM(), this.numTimesLoaded++, this.fileOpenIndex = this.numTimesLoaded, this.timeEvents) A.has(t) || delete this.timeEvents[t];
    this.fsHitsManager.clear();
    this.mark("openFileActionStart");
    this.installListeners();
    this.reportedLoad = !1;
    this.isLoading = !0;
    this.isVisibleLoad = t;
    this.reportedAbandon = !1;
    this.reportedFocusLost = !1;
    this.reportedFocusGained = !1;
    this.reportedBackgrounded = !1;
    this.reportedOffline = !1;
    return {
      fileOpenIndex: this.fileOpenIndex,
      isColdBoot: this.isColdBoot
    };
  }
  updateAppEntryTimeEvents(e, t) {
    this.timeEvents.appEntryStart = e;
    this.timeEvents.appEntryEnd = t;
  }
  start(e) {
    this.mark(e);
  }
  installListeners() {
    window.addEventListener("pagehide", this.reportAbandon);
    window.addEventListener("blur", this.reportFocusLost);
    window.addEventListener("focus", this.reportFocusGained);
    window.addEventListener("offline", this.reportOffline);
    window.addEventListener("visibilitychange", this.reportBackgrounded);
  }
  uninstallListeners() {
    window.removeEventListener("pagehide", this.reportAbandon);
    window.removeEventListener("blur", this.reportFocusLost);
    window.removeEventListener("focus", this.reportFocusGained);
    window.removeEventListener("offline", this.reportOffline);
    window.removeEventListener("visibilitychange", this.reportBackgrounded);
  }
  time(e, t) {
    startPerformanceSpan(e, _$$e.SCENEGRAPH_AND_SYNC);
    this.mark(e + "Start");
    try {
      return t();
    } finally {
      this.mark(e + "End");
      endPerformanceSpan(e);
    }
  }
  async timeAsync(e, t) {
    startPerformanceSpan(e, _$$e.SCENEGRAPH_AND_SYNC);
    this.mark(e + "Start");
    try {
      return await t();
    } finally {
      this.mark(e + "End");
      endPerformanceSpan(e);
    }
  }
  get isColdBoot() {
    return !this.timeEvents.editorPreloaded && !this.timeEvents.androidProtoEditorPreloaded && !this.timeEvents.mobileFileViewerPreloaded && 1 === this.numTimesLoaded && !!getInitialOptions().editing_file;
  }
  getFilePerfMetadata() {
    let e = FullscreenPerfMetrics?.getFileNodeCount();
    let t = FullscreenPerfMetrics?.getUserPageCount();
    let i = FullscreenPerfMetrics?.getMpMsgNodeChangesCount();
    let n = FullscreenPerfMetrics?.getMpMsgUserChangesCount();
    let a = FullscreenPerfMetrics?.getServerSideLoadTimeMetadata() || {};
    let s = AutosaveHelpers?.fileIsReadOnly();
    let l = AutosaveHelpers?.currentFileVersion();
    let d = desktopAPIInstance?.getConcurrentLoadingTabsCount();
    return {
      coldBoot: this.isColdBoot,
      readOnly: s,
      initialClientNodeCount: e,
      userPageCount: t,
      mpMsgNodeChangesCount: i,
      mpMsgUserChangesCount: n,
      mpWsMsgsMaxSize: this.wsMaxMsgInfo.size,
      mpWsMsgsMaxSizeTs: this.wsMaxMsgInfo.timestamp,
      mpWsMsgsTotalSize: this.wsTotalMsgSize,
      mpWsNodeChangeMsgsTotalSize: this.wsTotalNodeChangeSize,
      fileVersion: l,
      concurrentLoadingTabsCount: d,
      ...a
    };
  }
  getEventsToReport(e) {
    let t = function (e, t, i, n, r, a) {
      let s = {
        times: e,
        wsMsgSizes: t,
        meta: r || {}
      };
      if (i) {
        if (s.times.appJsLoadStart = i.startTime, s.times.appJsLoadEnd = i.endTime, a && "toJSON" in i.rawRootEvent) {
          let e = i.rawRootEvent.toJSON();
          for (let t in e) {
            let i = `appJs.${t}`;
            s.meta[i] = e[t];
          }
        }
        s.meta["appJs.transferSize"] = i.transferSize;
      }
      for (let e in n) {
        let t = n[e];
        if (!t) continue;
        let i = null;
        if ("startTime" in t) {
          let n = `${e}LoadStart`;
          s.times[n] = i = t.startTime;
        }
        if ("duration" in t && null !== i) {
          let n = `${e}LoadEnd`;
          s.times[n] = i + t.duration;
        }
        if (a && "toJSON" in t) {
          let i = t.toJSON();
          for (let t in i) {
            let n = `${e}.${t}`;
            s.meta[n] = i[t];
          }
        }
      }
      return s;
    }({
      ...this.timeEvents,
      ...this.wsEventTimes
    }, this.wsMsgSizes, function () {
      let e = [];
      let t = null;
      {
        let i = new Set(Array.from(document.querySelectorAll('link[rel="preload"]')).filter(e => e.href.includes("webpack") && (e.href.endsWith(".js") || e.href.endsWith(".js.gz") || e.href.endsWith(".js.br"))).map(e => e.href));
        let n = performance.getEntriesByType("resource").filter(e => i.has(e.name));
        let r = /\/(figma_app)/;
        let a = n.findIndex(e => r.test(e.name) && !e.name.includes("runtime"));
        t = n[a];
        n.splice(a, 1);
        e.push(...n);
      }
      if (!t) return null;
      let i = [t, ...e];
      return {
        startTime: Math.min(...i.map(e => e.startTime)),
        endTime: Math.max(...i.map(e => e.startTime + e.duration)),
        transferSize: i.reduce((e, t) => e + t.transferSize, 0),
        rawRootEvent: t
      };
    }(), function () {
      if (!performance.getEntriesByType) return {};
      let e = {};
      for (let t of performance.getEntriesByType("resource")) b.test(t.name) ? e.appCss = t : t.name === Fig.fullscreenURLs["compiled_wasm.wasm"] ? e.wasm = t : t.name === Fig.fullscreenURLs["compiled_wasm.js"] && (e.wasmJs = t);
      let t = performance.getEntriesByType("navigation");
      1 === t.length && (e.pageNavigation = t[0]);
      return e;
    }(), this.getFilePerfMetadata(), e);
    let i = _$$l();
    return {
      ...t.times,
      ...t.wsMsgSizes,
      ...t.meta,
      ...(i ? Object.fromEntries(Object.entries(i).map(([e, t]) => [`device-info-${e}`, t])) : {})
    };
  }
  report(e, t) {
    this.reportedLoad || e !== this.fileKey ? this.fileKey : (this.reportedLoad = !0, this.isLoading = !1, setTimeout(() => {
      this.uninstallListeners();
      let i = this.getEventsToReport(!0);
      let n = dd();
      let o = PH();
      if (trackEventAnalytics("Fullscreen Load Time", {
        loadID: this.loadID(),
        version: 8,
        fileKey: e,
        folderId: this.folderId,
        teamId: this.teamId,
        orgId: this.orgId,
        productType: t,
        randomID: ds(),
        isVisibleLoad: this.isVisibleLoad,
        fileOpenIndex: this.fileOpenIndex,
        wsUrl: this.wsUrl,
        chunkingEnabled: this.chunkingEnabled,
        chunkSize: this.chunkSize,
        multiplayerPreload: window.EARLY_ARGS?.multiplayer_preconnect_options?.multiplayerPreload || !1,
        ...i,
        ...n,
        ...o
      }, {
        forwardToDatadog: !0
      }), "number" == typeof i.documentIsLoaded) {
        let e = -1;
        let t = "Figma Desktop" === getEnvironmentInfo().browser_name;
        this.isColdBoot ? t && i.editorPreloaded ? "number" == typeof i.editorPreloaded && (e = i.documentIsLoaded - i.editorPreloaded) : e = i.documentIsLoaded : "number" == typeof i.openFileActionStart && (e = i.documentIsLoaded - i.openFileActionStart);
        console.log(`[Fullscreen] loadtime=${(e / 1e3).toFixed(2)}s ${CorePerfInfo ? `maxmem=${CorePerfInfo.getMaxUsedHeapMemory()}` : ""}`);
      }
    }));
  }
  getClientRenderedMetadata() {
    null === this._loadID && reportError(_$$e.FIGFILE_PLATFORM, Error("reporting client-rendered metadata without load ID"));
    return {
      loadID: this._loadID ?? "",
      reconnectId: Nq(),
      trackingSessionId: getTrackingSessionId(),
      trackingSessionSequenceId: incrementSessionCounter()
    };
  }
}();
let b = /\/figma_app.*\.css(\.br)?$/;
export const Qw = $$_0;
export const xK = $$y1;