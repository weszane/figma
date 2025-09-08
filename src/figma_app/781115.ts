import { D } from "../905/347702";
import { CorePerfInfo } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { getInitialOptions } from "../figma_app/169182";
import { logDebug, logError } from "../905/714362";
import { xK } from "../905/125218";
function d() {
  return window.performance ? window.performance.now() : Date.now();
}
let c = D(() => ("" + Math.random()).substr(2));
export class $$u0 {
  constructor() {
    this._lastConnectToMs = -1;
    this._scheduledTimeouts = [];
    this._domContentLoaded = -1;
    this._livegraphStartTime = -1;
    this._multiplayerStartTime = -1;
    this._multiplayerSatisfiedTime = -1;
    this._liveGraphSubscriptionLoaded = -1;
    this._multiplayerFirstResponse = -1;
    this._multiplayerFirstFinish = -1;
    this._iflCompleted = -1;
    this._sentViewerConnectToMetric = !1;
    this._connectArgs = null;
    this._isInEmbed = self !== top;
    this.reportedAbandon = !1;
    this.enableProfiling = !1;
    this.fullscreenEvents = {
      loadAndStartFullscreenIfNecessary: -1,
      fullscreenIsReady: -1
    };
    this.reportViewerAbandon = () => {
      let e = this._connectArgs;
      if (this.reportedAbandon || this.renderingEventsReported || "Preview" === e.entry && !this.wasInlinePreviewModalOpenedSinceViewerLoaded) return;
      let t = Math.round(performance.now()) - e.afterConnectTo;
      trackEventAnalytics("Viewer Abandon", {
        entry: e.entry,
        connectionType: e.connectionType,
        abandonTime: t
      }, {
        forwardToDatadog: !0,
        sendAsBeacon: !0
      });
      this.reportedAbandon = !0;
    };
    this.renderingEventsMaxSize = 10;
    this.renderingEvents = [];
    this.renderingEventsReported = !1;
    this.handleDOMContentLoaded = () => {
      this._domContentLoaded = this.now();
      this.mark("dom_content_loaded");
      analyticsEventManager.trackDefinedEvent("prototype.dom_content_loaded", {
        time: this._domContentLoaded
      });
    };
    this.handleDocumentIsLoaded = () => {
      let e = {};
      this._connectArgs?.fullscreen !== "None" && (e = {
        ...this.fullscreenEvents,
        ...xK.getEventsToReport(!1)
      });
      let t = {
        domContentLoaded: this._domContentLoaded,
        preloadedTabStart: window.preloadedTabStart,
        androidProtoPreloadedTabStart: window.androidProtoPreloadedTabStart,
        androidProtoFsPreloaded: window.androidProtoFsPreloaded,
        mobileFileViewerPreloadedTabStart: window.mobileFileViewerPreloadedTabStart,
        mobileFileViewerPreloaded: window.mobileFileViewerPreloaded,
        documentIsLoaded: this.now(),
        connectAttemptID: this._lastConnectToID,
        wasBackgroundedOnceWhileLoading: this._wasBackgroundedOnceWhileLoading,
        ...this._connectArgs,
        ...e
      };
      trackEventAnalytics("Viewer Document Is Loaded", t);
    };
    this.wasViewerLoadReported = !1;
    this.handleViewerLoaded = e => {
      if (this.clearScheduledTimeouts(), logDebug("Load Time Tracker", "handleViewerLoaded", {
        lastConnectToMs: this._lastConnectToMs,
        lastConnectToID: this._lastConnectToID
      }), this._lastConnectToMs >= 0 && null != this._lastConnectToID) {
        this.handleTabSwitchOrLoadChange("visible" === document.visibilityState, !1);
        let t = {
          delaySecondsSinceConnect: (d() - this._lastConnectToMs) / 1e3,
          domContentLoaded: this._domContentLoaded,
          preloadedTabStart: window.preloadedTabStart,
          androidProtoFsPreloaded: window.androidProtoFsPreloaded,
          androidProtoPreloadedTabStart: window.androidProtoPreloadedTabStart,
          mobileFileViewerPreloadedTabStart: window.mobileFileViewerPreloadedTabStart,
          mobileFileViewerPreloaded: window.mobileFileViewerPreloaded,
          connectAttemptID: this._lastConnectToID,
          timeNow: this.now(),
          visibleLoadTime: this._totalVisibleLoadTime,
          wasBackgroundedOnceWhileLoading: this._wasBackgroundedOnceWhileLoading,
          isStatsigBootstrapFlagOn: !0,
          hasStatsigBootstrapValues: !!getInitialOptions().statsig_bootstrap_values,
          isUsingStatsigClientSDK: !0,
          isUsingStatsigPrefetch: !0
        };
        if (this._connectArgs) {
          let r = t.timeNow - t.domContentLoaded;
          let n = {
            ...t,
            entry: this._connectArgs.entry,
            connectionType: this._connectArgs.connectionType,
            isInEmbed: this._isInEmbed,
            loadTimeMs: r,
            lastLoaded: e
          };
          this.mark("viewer_loaded");
          this.measure("viewer_loaded_measure", "dom_content_loaded", "viewer_loaded");
          analyticsEventManager.trackDefinedEvent("prototype.viewer_loaded", n);
        }
        this._lastConnectToMs = -1;
        this.wasViewerLoadReported = !0;
      } else logError("load", "Unexpected Viewer Loaded event without Viewer Connect To report");
    };
    this.handleFontListLoaded = e => {
      let t = {
        ...this._connectArgs,
        domContentLoaded: this._domContentLoaded,
        connectAttemptID: this._lastConnectToID,
        timeNow: this.now()
      };
      trackEventAnalytics("Viewer Font List Loaded", t);
    };
    this.computeLoadTimeSinceDomContentLoaded = (e = this.now()) => window.androidProtoFsPreloaded && window.androidProtoPreloadedTabStart && e >= window.androidProtoPreloadedTabStart ? e - window.androidProtoPreloadedTabStart + window.androidProtoFsPreloaded - this._domContentLoaded : e - this._domContentLoaded;
    this.handleAfterConnectTo = e => {
      this._lastConnectToMs = d();
      this._lastConnectToID = c();
      logDebug("Load Time Tracker", "handleAfterConnectTo", {
        lastConnectToMs: this._lastConnectToMs,
        lastConnectToID: this._lastConnectToID
      });
      this._connectArgs = {
        ...e,
        afterConnectTo: this.now()
      };
      let t = {
        domContentLoaded: this._domContentLoaded,
        preloadedTabStart: window.preloadedTabStart,
        androidProtoFsPreloaded: window.androidProtoFsPreloaded,
        androidProtoPreloadedTabStart: window.androidProtoPreloadedTabStart,
        mobileFileViewerPreloadedTabStart: window.mobileFileViewerPreloadedTabStart,
        mobileFileViewerPreloaded: window.mobileFileViewerPreloaded,
        connectAttemptID: this._lastConnectToID,
        ...this._connectArgs
      };
      if ((!this._sentViewerConnectToMetric || getFeatureFlags().prototype_connectto_debug) && (analyticsEventManager.trackDefinedEvent("prototype.viewer_connect_to", {
        ...t,
        isInEmbed: this._isInEmbed
      }), this._sentViewerConnectToMetric = !0), this.renderingEventsReported = !1, this.renderingEvents = [], this.clearScheduledTimeouts(), e.logViewerWaiting) for (let e of [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90]) {
        let t = setTimeout(() => {
          let t = (d() - this._lastConnectToMs) / 1e3;
          trackEventAnalytics("Viewer Waiting", {
            waitedAtLeastSeconds: e,
            delaySecondsSinceConnect: t,
            connectAttemptID: this._lastConnectToID
          });
        }, 1e3 * e);
        this._scheduledTimeouts.push(t);
      }
      let r = setTimeout(() => {
        let e = (d() - this._lastConnectToMs) / 1e3;
        trackEventAnalytics("Viewer Waiting", {
          waitedAtLeastSeconds: 60,
          delaySecondsSinceConnect: e,
          connectAttemptID: this._lastConnectToID,
          entry: this._connectArgs?.entry,
          connectionType: this._connectArgs?.connectionType,
          isInEmbed: this._isInEmbed
        }, {
          forwardToDatadog: !0
        });
      }, 6e4);
      this._scheduledTimeouts.push(r);
      window.addEventListener("pagehide", this.reportViewerAbandon);
      this.reportedAbandon = !1;
      document.addEventListener("visibilitychange", () => {
        let e = "visible" === document.visibilityState;
        let t = !1;
        this._lastConnectToMs >= 0 && null != this._lastConnectToID && (t = !this.wasViewerLoadReported);
        this.handleTabSwitchOrLoadChange(e, t);
      });
      this.handleTabSwitchOrLoadChange("visible" === document.visibilityState, !0);
    };
    this.wasInlinePreviewModalOpenedSinceViewerLoaded = !1;
    this._wasBackgroundedOnceWhileLoading = !1;
    this._totalVisibleLoadTime = 0;
    this._wasVisiblyLoading = !1;
    this._lastTabSwitchOrLoadChange = -1;
    this.handleTabSwitchOrLoadChange = (e, t) => {
      t && (this._wasBackgroundedOnceWhileLoading = this._wasBackgroundedOnceWhileLoading || !e);
      let r = e && t;
      if (!this._wasVisiblyLoading && r) this._lastTabSwitchOrLoadChange = this.now();else {
        if (!this._wasVisiblyLoading || r) return;
        this._totalVisibleLoadTime += this.now() - this._lastTabSwitchOrLoadChange;
      }
      this._lastTabSwitchOrLoadChange = this.now();
      this._wasVisiblyLoading = r;
    };
    this.clearScheduledTimeouts = () => {
      for (let e of this._scheduledTimeouts) clearTimeout(e);
      this._scheduledTimeouts = [];
    };
  }
  now() {
    return Math.round(performance.now());
  }
  mark(e) {
    this.enableProfiling && performance.mark(e);
  }
  measure(e, t, r) {
    this.enableProfiling && performance.measure(e, t, r);
  }
  handleDocumentRenderStart() {
    !this.renderingEventsReported && this.renderingEvents.length < this.renderingEventsMaxSize && this.renderingEvents.push([this.now(), -1]);
  }
  handleDocumentRenderStop() {
    if (this.renderingEventsReported) return;
    let e = this.renderingEvents.length - 1;
    if (e >= 0 && -1 === this.renderingEvents[e][1] && (this.renderingEvents[e][1] = this.now()), logDebug("Load Time Tracker", "handleDocumentRenderStop", {
      lastIndex: e
    }), window.removeEventListener("pagehide", this.reportViewerAbandon), this.renderingEvents.length >= this.renderingEventsMaxSize) {
      let e = {};
      let t = !0;
      let r = 0;
      let i = 0;
      this.renderingEvents.forEach((n, a) => {
        t = t && n[0] >= r && n[1] >= n[0];
        let s = `frame.${a}.start`;
        let o = `frame.${a}.stop`;
        e[s] = n[0];
        e[o] = n[1];
        i += n[1] - n[0];
        r = n[1];
      });
      e.total = t ? i : -1;
      e.connectAttemptID = this._lastConnectToID;
      e.totalUsedHeapMemory = CorePerfInfo?.getTotalUsedHeapMemory() ?? 0;
      e.maxUsedHeapMemory = CorePerfInfo?.getMaxUsedHeapMemory() ?? 0;
      this.wasViewerLoadReported || this._connectArgs?.entry !== "Prototype" || logError("load", "Unexpected Viewer Rendering First Frames event without Viewer Loaded report");
      let s = this.computeLoadTimeSinceDomContentLoaded();
      let l = {
        ...e,
        timeToFirstFrame: s,
        avgFirstTenFramesRenderingTimeMs: i / this.renderingEvents.length,
        entry: this._connectArgs?.entry,
        connectionType: this._connectArgs?.connectionType,
        isInEmbed: this._isInEmbed
      };
      trackEventAnalytics("Viewer Rendering First Frames", l, {
        forwardToDatadog: !0
      });
      this.renderingEventsReported = !0;
      this.renderingEvents = [];
    }
  }
  _formNativeLoadTimeMetadataFigmentEvent(e, t) {
    return {
      user_load_start_time: e.userLoadStartTime,
      user_load_start_relative: e.userLoadStartTime - t,
      time_origin: t,
      native_viewer_session_id: e.nativeViewerSessionId,
      native_semantic_viewer_session_id: e.nativeSemanticViewerSessionId,
      source: e.source
    };
  }
  handleNativeLoadTimeMetadata(e) {
    let t = this._formNativeLoadTimeMetadataFigmentEvent(e, performance.timeOrigin);
    analyticsEventManager.trackDefinedEvent("native.load_time_metadata", t);
  }
  handleLivegraphConnectionOpened() {
    -1 === this._livegraphStartTime && (this._livegraphStartTime = this.now(), this.mark("livegraph_subscription_started"), this.measure("livegraph_subscription_started_measure", "dom_content_loaded", "livegraph_subscription_started"));
    analyticsEventManager.trackDefinedEvent("prototype.livegraph_subscription_started", {
      timeSinceDomContentLoaded: this.computeLoadTimeSinceDomContentLoaded(this._livegraphStartTime)
    });
  }
  handleLivegraphConnectionResponded() {
    let e = this.now();
    -1 === this._liveGraphSubscriptionLoaded && (this._liveGraphSubscriptionLoaded = e, this.mark("livegraph_subscription_loaded"), this.measure("livegraph_subscription_loaded_measure", "dom_content_loaded", "livegraph_subscription_loaded"));
    analyticsEventManager.trackDefinedMetric("prototype.livegraph_subscription_loaded", {
      timeSinceDomContentLoaded: this.computeLoadTimeSinceDomContentLoaded(e),
      responseTime: e - this._livegraphStartTime
    });
  }
  handleMultiplayerOpenConnection() {
    -1 === this._multiplayerStartTime && (this._multiplayerStartTime = this.now(), this.mark("multiplayer_connection_start"), this.measure("multiplayer_connection_start_measure", "dom_content_loaded", "multiplayer_connection_start"));
    analyticsEventManager.trackDefinedEvent("prototype.multiplayer_connection_start", {
      timeSinceDomContentLoaded: this.computeLoadTimeSinceDomContentLoaded(this._multiplayerStartTime)
    });
  }
  handleMultiplayerFirstResponse() {
    -1 === this._multiplayerFirstResponse && (this._multiplayerFirstResponse = this.now(), this.mark("multiplayer_first_response"), this.measure("multiplayer_first_response_measure", "dom_content_loaded", "multiplayer_first_response"));
    analyticsEventManager.trackDefinedMetric("prototype.multiplayer_first_response", {
      timeSinceDomContentLoaded: this.computeLoadTimeSinceDomContentLoaded(),
      responseTime: this.now() - this._multiplayerStartTime
    });
  }
  handleMultiplayerIFLSatisfied() {
    -1 === this._multiplayerFirstFinish && (this._multiplayerFirstFinish = this.now(), this.mark("multiplayer_first_finish"), this.measure("multiplayer_first_finish_measure", "dom_content_loaded", "multiplayer_first_finish"));
    -1 === this._multiplayerSatisfiedTime && (this._multiplayerSatisfiedTime = this.now());
    analyticsEventManager.trackDefinedMetric("prototype.multiplayer_first_finish", {
      timeSinceDomContentLoaded: this.computeLoadTimeSinceDomContentLoaded(),
      responseTime: this.now() - this._multiplayerStartTime
    });
  }
  handleIFLCompleted() {
    -1 === this._iflCompleted && (this._iflCompleted = this.now(), this.mark("ifl_completed"), this.measure("ifl_completed_measure", "dom_content_loaded", "ifl_completed"));
    analyticsEventManager.trackDefinedMetric("prototype.ifl_completed", {
      timeSinceDomContentLoaded: this.computeLoadTimeSinceDomContentLoaded(),
      responseTime: this.now() - this._multiplayerSatisfiedTime
    });
  }
  setWasInlinePreviewModalOpenedSinceViewerLoaded(e) {
    this.wasInlinePreviewModalOpenedSinceViewerLoaded = e;
  }
}
export let $$p1 = new $$u0();
export const Se = $$u0;
export const Su = $$p1;