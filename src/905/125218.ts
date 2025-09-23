import { reportError } from '../905/11';
import { getRandomString } from '../905/87821';
import { ServiceCategories } from '../905/165054';
import { getGpuDeviceInfo } from '../905/190247';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { getTrackingSessionId, incrementSessionCounter } from '../905/471229';
import { getConnectionInfo, getNavigatorHardwareInfo } from '../905/550523';
import { endPerformanceSpan, startPerformanceSpan } from '../905/670985';
import { getEnvironmentInfo } from '../905/883621';
import { getInitialOptions } from '../figma_app/169182';
import { getReconnectId, resetReconnectCounter, setLoadID } from '../figma_app/314264';
import { AutosaveHelpers, CorePerfInfo, FullscreenPerfMetrics } from '../figma_app/763686';
import { desktopAPIInstance } from '../figma_app/876459';

/**
 * Manages hit counts for events, limiting the number of tracked hits per key.
 * Original class name: f
 */
class HitsManager {
  maxHits: number;
  numHits: Record<string, number>;
  constructor(maxHits: number) {
    this.maxHits = maxHits;
    this.numHits = {};
  }

  /**
   * Returns a key with index if under maxHits, otherwise null.
   * Original method: getKeyWithIndex
   */
  getKeyWithIndex(key: string): string | null {
    const count = this.numHits[key] || 0;
    if (count === 0) return key;
    if (count < this.maxHits) return `${key}.${count}`;
    return null;
  }

  /** Clears all hit counts. Original method: clear */
  clear(): void {
    this.numHits = {};
  }

  /** Increments hit count for a key. Original method: increment */
  increment(key: string): void {
    this.numHits[key] = (this.numHits[key] || 0) + 1;
  }
}

/** Set of fullscreen event names. Original variable: $$_0 */
export const gpuFullscreenEventNames = new Set(['initialize-gpu', 'render-tree-generation', 'mp-receive-schema', 'mp-receive-decompress-buffer', 'mp-receive-decode-buffer-node-change', 'mp-receive-decode-buffer-other', 'handle-changes-from-server', 'handle-joining-changes-from-server', 'playback-joining-messages', 'synthesize-missing-geometry-cache-changes', 'update-symbol-instances', 'enforce-structural-invariants', 'after-initial-join', 'handle-join-end', 'first-document-render', 'mp-ws-onmessage', 'mp-ws-onopen', 'receiveSceneGraphReply']);

/** Set of time event names. Original variable: A */
const timeEventNames = new Set(['initialize-gpu.start', 'initialize-gpu.end', 'AFTER_FIRST_RENDER', 'createStoreStart', 'initAndHydrateActionNoUserStateStart', 'initAndHydrateActionNoUserStateEnd', 'hydrateActionWithUserStateStart', 'hydrateActionWithUserStateEnd', 'initialReactRenderStart', 'initialReactRenderEnd', 'loadingBinaryStart', 'loadingCodeStart', 'instantiateStreamingStart', 'instantiateStreamingEnd', 'awaitInstantiateStreamingStart', 'awaitInstantiateStreamingEnd', 'instantiateStart', 'instantiateEnd', 'awaitInstantiateStart', 'awaitInstantiateEnd', 'callMainStart', 'callMainEnd', 'editorPreloaded', 'loadAndStartFullscreen', 'fullscreenIsReady', 'appEntryStart', 'appEntryEnd', 'fileMetadataRequestStart', 'fileMetadataRequestEnd']);
const cssResourceRegex = /\/figma_app.*\.css(\.br)?$/;

/**
 * Fullscreen performance and event manager.
 * Original variable: $$y1
 */
class FullscreenPerfManager {
  _loadID: string | null = null;
  timeEvents: Record<string, number> = {};
  wsEventTimes: Record<string, number> = {};
  wsMsgSizes: Record<string, number> = {};
  wsMaxMsgInfo: {
    size?: number;
    timestamp?: number;
  } = {
    size: undefined,
    timestamp: undefined
  };
  wsTotalMsgSize = 0;
  wsTotalNodeChangeSize = 0;
  fileKey: string | null = null;
  folderId: string | null = null;
  teamId: string | null = null;
  orgId: string | null = null;
  fsHitsManager = new HitsManager(10);
  wsHitsManager = new HitsManager(10);
  wsMsgSizeHitsManager = new HitsManager(10);
  numTimesLoaded = 0;
  fileOpenIndex = 0;
  reportedLoad = false;
  reportedAbandon = false;
  reportedFocusLost = false;
  reportedFocusGained = false;
  reportedBackgrounded = false;
  reportedOffline = false;
  isLoading = false;
  isVisibleLoad = false;
  wsUrl: string | null = null;
  chunkingEnabled = false;
  chunkSize = 0;

  /** Reports file abandon event. Original method: reportAbandon */
  reportAbandon = (): void => {
    if (this.reportedLoad || this.reportedAbandon) return;
    const abandonTime = Math.round(performance.now()) - (this.isColdBoot ? 0 : this.timeEvents.openFileActionStart);
    trackEventAnalytics('Fullscreen File Abandon', {
      fileKey: this.fileKey,
      loadID: this.loadID(),
      randomID: getRandomString(),
      fileOpenIndex: this.fileOpenIndex,
      abandonTime,
      fullLoadTime: this.timeEvents.fullLoadTime,
      coldBoot: this.isColdBoot,
      isDesktopInitialStartupTab: desktopAPIInstance?.tabWasOpenedAsPartOfInitialStartup()
    }, {
      forwardToDatadog: true,
      sendAsBeacon: true
    });
    this.reportedAbandon = true;
  };

  /** Reports focus lost event. Original method: reportFocusLost */
  reportFocusLost = (): void => {
    if (this.reportedLoad || this.reportedFocusLost) return;
    const focusLostTime = Math.round(performance.now()) - (this.isColdBoot ? 0 : this.timeEvents.openFileActionStart);
    trackEventAnalytics('Fullscreen Loading Lost Focus', {
      fileKey: this.fileKey,
      randomID: getRandomString(),
      fileOpenIndex: this.fileOpenIndex,
      focusLostTime,
      fullLoadTime: this.timeEvents.fullLoadTime,
      coldBoot: this.isColdBoot
    });
    this.mark('lostFocus');
    this.reportedFocusLost = true;
  };

  /** Reports focus gained event. Original method: reportFocusGained */
  reportFocusGained = (): void => {
    if (this.reportedLoad || this.reportedFocusGained) return;
    const focusedTime = Math.round(performance.now()) - (this.isColdBoot ? 0 : this.timeEvents.openFileActionStart);
    trackEventAnalytics('Fullscreen Loading Gained Focus', {
      fileKey: this.fileKey,
      randomID: getRandomString(),
      fileOpenIndex: this.fileOpenIndex,
      focusedTime,
      fullLoadTime: this.timeEvents.fullLoadTime,
      coldBoot: this.isColdBoot
    });
    this.mark('gainedFocus');
    this.reportedFocusGained = true;
  };

  /** Reports backgrounded event. Original method: reportBackgrounded */
  reportBackgrounded = (): void => {
    if (this.reportedLoad || document.visibilityState !== 'hidden' || this.reportedBackgrounded) return;
    const backgroundedTime = Math.round(performance.now()) - (this.isColdBoot ? 0 : this.timeEvents.openFileActionStart ?? 0);
    analyticsEventManager.trackDefinedEvent('scenegraph_and_sync.backgrounded_load', {
      fileKey: this.fileKey,
      fileParentOrgId: this.orgId,
      fileTeamId: this.teamId,
      containingFolderId: this.folderId,
      loadID: this._loadID,
      backgroundedTime,
      coldBoot: this.isColdBoot
    });
    this.mark('backgrounded');
    this.reportedBackgrounded = true;
  };

  /** Reports offline event. Original method: reportOffline */
  reportOffline = (): void => {
    if (this.reportedLoad || this.reportedOffline) return;
    const offlineTime = Math.round(performance.now()) - (this.isColdBoot ? 0 : this.timeEvents.openFileActionStart ?? 0);
    analyticsEventManager.trackDefinedEvent('scenegraph_and_sync.load_went_offline', {
      fileKey: this.fileKey,
      fileParentOrgId: this.orgId,
      fileTeamId: this.teamId,
      containingFolderId: this.folderId,
      loadID: this._loadID,
      coldBoot: this.isColdBoot,
      offlineTime
    });
    this.mark('offline');
    this.reportedOffline = true;
  };

  /** Returns current load ID. Original method: loadID */
  loadID(): string | null {
    return this._loadID;
  }

  /** Checks if a visible load is in progress. Original method: isInProgressVisibleLoad */
  isInProgressVisibleLoad(): boolean {
    return this.isLoading && this.isVisibleLoad;
  }

  /** Generates a new load ID. Original method: newLoadID */
  newLoadID(): string {
    return Date.now().toString(36);
  }

  /** Marks a time event. Original method: mark */
  mark(event: string): void {
    this.timeEvents[event] = Math.round(performance.now());
  }

  /** Starts a fullscreen event span. Original method: startFs */
  startFs(event: string): void {
    const key = this.fsHitsManager.getKeyWithIndex(event);
    if (key !== null) {
      startPerformanceSpan(key, ServiceCategories.SCENEGRAPH_AND_SYNC);
      this.mark(`${key}.start`);
    }
  }

  /** Stops a fullscreen event span. Original method: stopFs */
  stopFs(event: string): void {
    const key = this.fsHitsManager.getKeyWithIndex(event);
    if (key !== null) {
      this.mark(`${key}.end`);
      endPerformanceSpan(key);
    }
    this.fsHitsManager.increment(event);
  }

  /** Sets the WebSocket URL. Original method: setWsUrl */
  setWsUrl(url: string): void {
    this.wsUrl = url;
  }

  /** Logs a WebSocket message event. Original method: logWsMsg */
  logWsMsg(event: string, size?: number, timestamp?: number): void {
    const time = timestamp === undefined ? performance.now() : timestamp;
    if (event === 'mp-ws-onopen') {
      this.wsEventTimes = {};
      this.wsMsgSizes = {};
      this.wsHitsManager.clear();
      this.wsMsgSizeHitsManager.clear();
      this.wsMaxMsgInfo = {
        size: undefined,
        timestamp: undefined
      };
      this.wsTotalMsgSize = 0;
      this.wsTotalNodeChangeSize = 0;
    }
    const rootEvent = 'mp-init';
    const eventCount = Object.keys(this.wsEventTimes).length;
    if (eventCount === 0) startPerformanceSpan(rootEvent, ServiceCategories.SCENEGRAPH_AND_SYNC, time);else if (eventCount === 1) endPerformanceSpan(rootEvent, time);
    const wsKey = this.wsHitsManager.getKeyWithIndex(event);
    if (wsKey !== null) this.wsEventTimes[wsKey] = time;
    this.wsHitsManager.increment(event);
    const sizeKey = `${event}-size`;
    const wsSizeKey = this.wsMsgSizeHitsManager.getKeyWithIndex(sizeKey);
    if (wsSizeKey !== null && size) this.wsMsgSizes[wsSizeKey] = size;
    this.wsMsgSizeHitsManager.increment(sizeKey);
    if (size !== undefined) {
      this.wsMaxMsgInfo = {
        size: Math.max(this.wsMaxMsgInfo.size || 0, size),
        timestamp: size > (this.wsMaxMsgInfo.size || 0) ? time : this.wsMaxMsgInfo.timestamp
      };
      this.wsTotalMsgSize += size;
    }
  }

  /** Logs node change message size. Original method: logNodeChangeMsg */
  logNodeChangeMsg(size: number): void {
    this.wsTotalNodeChangeSize += size;
  }

  /** Marks document loaded and calculates full load time. Original method: documentIsLoaded */
  documentIsLoaded(): void {
    this.start('documentIsLoaded');
    this.timeEvents.fullLoadTime = this.timeEvents.documentIsLoaded - (this.isColdBoot ? 0 : this.timeEvents.openFileActionStart);
  }

  /** Marks React fullscreen view rendered and calculates duration. Original method: reactFullscreenViewIsRendered */
  reactFullscreenViewIsRendered(): void {
    this.start('reactFullscreenViewIsRendered');
    this.timeEvents.reactFullscreenViewIsRenderedDuration = this.timeEvents.reactFullscreenViewIsRendered - (this.isColdBoot ? 0 : this.timeEvents.openFileActionStart);
  }

  /**
   * Logs open file action and resets relevant state.
   * Original method: logOpenFileAction
   */
  logOpenFileAction(fileKey: string, isVisibleLoad: boolean, folderId: string, teamId: string, orgId: string) {
    this.fileKey = fileKey;
    this.folderId = folderId;
    this.teamId = teamId;
    this.orgId = orgId;
    this._loadID = this.newLoadID();
    setLoadID(this._loadID);
    resetReconnectCounter();
    this.numTimesLoaded++;
    this.fileOpenIndex = this.numTimesLoaded;
    for (const key in this.timeEvents) {
      if (!timeEventNames.has(key)) delete this.timeEvents[key];
    }
    this.fsHitsManager.clear();
    this.mark('openFileActionStart');
    this.installListeners();
    this.reportedLoad = false;
    this.isLoading = true;
    this.isVisibleLoad = isVisibleLoad;
    this.reportedAbandon = false;
    this.reportedFocusLost = false;
    this.reportedFocusGained = false;
    this.reportedBackgrounded = false;
    this.reportedOffline = false;
    return {
      fileOpenIndex: this.fileOpenIndex,
      isColdBoot: this.isColdBoot
    };
  }

  /** Updates app entry time events. Original method: updateAppEntryTimeEvents */
  updateAppEntryTimeEvents(start: number, end: number): void {
    this.timeEvents.appEntryStart = start;
    this.timeEvents.appEntryEnd = end;
  }

  /** Marks a generic event. Original method: start */
  start(event: string): void {
    this.mark(event);
  }

  /** Installs window event listeners. Original method: installListeners */
  installListeners(): void {
    window.addEventListener('pagehide', this.reportAbandon);
    window.addEventListener('blur', this.reportFocusLost);
    window.addEventListener('focus', this.reportFocusGained);
    window.addEventListener('offline', this.reportOffline);
    window.addEventListener('visibilitychange', this.reportBackgrounded);
  }

  /** Removes window event listeners. Original method: uninstallListeners */
  uninstallListeners(): void {
    window.removeEventListener('pagehide', this.reportAbandon);
    window.removeEventListener('blur', this.reportFocusLost);
    window.removeEventListener('focus', this.reportFocusGained);
    window.removeEventListener('offline', this.reportOffline);
    window.removeEventListener('visibilitychange', this.reportBackgrounded);
  }

  /**
   * Times a synchronous function and records start/end events.
   * Original method: time
   */
  time<T>(event: string, fn: () => T): T {
    startPerformanceSpan(event, ServiceCategories.SCENEGRAPH_AND_SYNC);
    this.mark(`${event}Start`);
    try {
      return fn();
    } finally {
      this.mark(`${event}End`);
      endPerformanceSpan(event);
    }
  }

  /**
   * Times an async function and records start/end events.
   * Original method: timeAsync
   */
  async timeAsync<T>(event: string, fn: () => Promise<T>): Promise<T> {
    startPerformanceSpan(event, ServiceCategories.SCENEGRAPH_AND_SYNC);
    this.mark(`${event}Start`);
    try {
      return await fn();
    } finally {
      this.mark(`${event}End`);
      endPerformanceSpan(event);
    }
  }

  /** Determines if this is a cold boot. Original getter: isColdBoot */
  get isColdBoot(): boolean {
    return !this.timeEvents.editorPreloaded && !this.timeEvents.androidProtoEditorPreloaded && !this.timeEvents.mobileFileViewerPreloaded && this.numTimesLoaded === 1 && !!getInitialOptions().editing_file;
  }

  /** Gets file performance metadata. Original method: getFilePerfMetadata */
  getFilePerfMetadata() {
    const initialClientNodeCount = FullscreenPerfMetrics?.getFileNodeCount();
    const userPageCount = FullscreenPerfMetrics?.getUserPageCount();
    const mpMsgNodeChangesCount = FullscreenPerfMetrics?.getMpMsgNodeChangesCount();
    const mpMsgUserChangesCount = FullscreenPerfMetrics?.getMpMsgUserChangesCount();
    const serverSideLoadTimeMetadata = FullscreenPerfMetrics?.getServerSideLoadTimeMetadata() || {};
    const readOnly = AutosaveHelpers?.fileIsReadOnly();
    const fileVersion = AutosaveHelpers?.currentFileVersion();
    const concurrentLoadingTabsCount = desktopAPIInstance?.getConcurrentLoadingTabsCount();
    return {
      coldBoot: this.isColdBoot,
      readOnly,
      initialClientNodeCount,
      userPageCount,
      mpMsgNodeChangesCount,
      mpMsgUserChangesCount,
      mpWsMsgsMaxSize: this.wsMaxMsgInfo.size,
      mpWsMsgsMaxSizeTs: this.wsMaxMsgInfo.timestamp,
      mpWsMsgsTotalSize: this.wsTotalMsgSize,
      mpWsNodeChangeMsgsTotalSize: this.wsTotalNodeChangeSize,
      fileVersion,
      concurrentLoadingTabsCount,
      ...serverSideLoadTimeMetadata
    };
  }

  /**
   * Collects all events and metadata to report.
   * Original method: getEventsToReport
   */
  getEventsToReport(includeGpuInfo: boolean) {
    // Helper to collect JS resource timing
    function getAppJsTiming() {
      const allLink = Array.from(document.querySelectorAll('link[rel="preload"]')) as HTMLLinkElement[];
      const preloads = allLink.filter(e => e.href.includes('webpack') && (e.href.endsWith('.js') || e.href.endsWith('.js.gz') || e.href.endsWith('.js.br'))).map(e => e.href);
      const preloadSet = new Set(preloads);
      const resources = performance.getEntriesByType('resource').filter(e => preloadSet.has(e.name));
      const appJsRegex = /\/(figma_app)/;
      const rootIdx = resources.findIndex(e => appJsRegex.test(e.name) && !e.name.includes('runtime'));
      const rootEvent = resources[rootIdx];
      resources.splice(rootIdx, 1);
      if (!rootEvent) return null;
      const allEvents = [rootEvent, ...resources];
      return {
        startTime: Math.min(...allEvents.map(e => e.startTime)),
        endTime: Math.max(...allEvents.map(e => e.startTime + e.duration)),
        transferSize: allEvents.reduce((sum, e) => sum + e.transferSize, 0),
        rawRootEvent: rootEvent
      };
    }

    // Helper to collect CSS/wasm resource timing
    function getResourceTiming() {
      if (!performance.getEntriesByType) return {};
      const result: Record<string, PerformanceResourceTiming> = {};
      for (const entry of performance.getEntriesByType('resource')) {
        if (cssResourceRegex.test(entry.name)) result.appCss = entry as PerformanceResourceTiming;else if (entry.name === Fig.fullscreenURLs['compiled_wasm.wasm']) result.wasm = entry as PerformanceResourceTiming;else if (entry.name === Fig.fullscreenURLs['compiled_wasm.js']) result.wasmJs = entry as PerformanceResourceTiming;
      }
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length === 1) result.pageNavigation = navEntries[0] as PerformanceNavigationTiming;
      return result;
    }

    // Helper to aggregate all timing and metadata
    function aggregateEvents(times: Record<string, number>, wsMsgSizes: Record<string, number>, appJsTiming: any, resourceTiming: any, meta: any, includeAppJsDetails: boolean) {
      const result: any = {
        times,
        wsMsgSizes,
        meta: meta || {}
      };
      if (appJsTiming) {
        result.times.appJsLoadStart = appJsTiming.startTime;
        result.times.appJsLoadEnd = appJsTiming.endTime;
        if (includeAppJsDetails && 'toJSON' in appJsTiming.rawRootEvent) {
          const details = appJsTiming.rawRootEvent.toJSON();
          for (const key in details) {
            result.meta[`appJs.${key}`] = details[key];
          }
        }
        result.meta['appJs.transferSize'] = appJsTiming.transferSize;
      }
      for (const key in resourceTiming) {
        const entry = resourceTiming[key];
        if (!entry) continue;
        let start = null;
        if ('startTime' in entry) {
          const startKey = `${key}LoadStart`;
          result.times[startKey] = start = entry.startTime;
        }
        if ('duration' in entry && start !== null) {
          const endKey = `${key}LoadEnd`;
          result.times[endKey] = start + entry.duration;
        }
        if (includeAppJsDetails && 'toJSON' in entry) {
          const details = entry.toJSON();
          for (const detailKey in details) {
            result.meta[`${key}.${detailKey}`] = details[detailKey];
          }
        }
      }
      return result;
    }
    const events = aggregateEvents({
      ...this.timeEvents,
      ...this.wsEventTimes
    }, this.wsMsgSizes, getAppJsTiming(), getResourceTiming(), this.getFilePerfMetadata(), includeGpuInfo);
    const gpuInfo = getGpuDeviceInfo();
    return {
      ...events.times,
      ...events.wsMsgSizes,
      ...events.meta,
      ...(gpuInfo ? Object.fromEntries(Object.entries(gpuInfo).map(([k, v]) => [`device-info-${k}`, v])) : {})
    };
  }

  /**
   * Reports load time analytics and logs load time to console.
   * Original method: report
   */
  report(fileKey: string, productType: string): void {
    if (this.reportedLoad || fileKey !== this.fileKey) return;
    this.reportedLoad = true;
    this.isLoading = false;
    setTimeout(() => {
      this.uninstallListeners();
      const events = this.getEventsToReport(true);
      const connectionInfo = getConnectionInfo();
      const hardwareInfo = getNavigatorHardwareInfo();
      trackEventAnalytics('Fullscreen Load Time', {
        loadID: this.loadID(),
        version: 8,
        fileKey,
        folderId: this.folderId,
        teamId: this.teamId,
        orgId: this.orgId,
        productType,
        randomID: getRandomString(),
        isVisibleLoad: this.isVisibleLoad,
        fileOpenIndex: this.fileOpenIndex,
        wsUrl: this.wsUrl,
        chunkingEnabled: this.chunkingEnabled,
        chunkSize: this.chunkSize,
        multiplayerPreload: window.EARLY_ARGS?.multiplayer_preconnect_options?.multiplayerPreload || false,
        ...events,
        ...connectionInfo,
        ...hardwareInfo
      }, {
        forwardToDatadog: true
      });
      if (typeof events.documentIsLoaded === 'number') {
        let loadTime = -1;
        const isDesktop = getEnvironmentInfo().browser_name === 'Figma Desktop';
        if (this.isColdBoot) {
          if (isDesktop && events.editorPreloaded) {
            if (typeof events.editorPreloaded === 'number') {
              loadTime = events.documentIsLoaded - events.editorPreloaded;
            }
          } else {
            loadTime = events.documentIsLoaded;
          }
        } else if (typeof events.openFileActionStart === 'number') {
          loadTime = events.documentIsLoaded - events.openFileActionStart;
        }
        console.log(`[Fullscreen] loadtime=${(loadTime / 1e3).toFixed(2)}s ${CorePerfInfo ? `maxmem=${CorePerfInfo.getMaxUsedHeapMemory()}` : ''}`);
      }
    });
  }

  /**
   * Returns client-rendered metadata for reporting.
   * Original method: getClientRenderedMetadata
   */
  getClientRenderedMetadata() {
    if (this._loadID === null) {
      reportError(ServiceCategories.FIGFILE_PLATFORM, new Error('reporting client-rendered metadata without load ID'));
    }
    return {
      loadID: this._loadID ?? '',
      reconnectId: getReconnectId(),
      trackingSessionId: getTrackingSessionId(),
      trackingSessionSequenceId: incrementSessionCounter()
    };
  }
}
export const fullscreenPerfManager = new FullscreenPerfManager();
export const xK = fullscreenPerfManager;
export const Qw = gpuFullscreenEventNames;
