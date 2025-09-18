import { reportError } from '../905/11';
import { I as _$$I } from '../905/117966';
import { gpuFullscreenEventNames, fullscreenPerfManager } from '../905/125218';
import { ServiceCategories as _$$e } from '../905/165054';
import { r as _$$r } from '../905/210851';
import { analyticsEventManager, trackEventAnalytics, trackFullScreenAnalytics } from '../905/449184';
import { sendHistogram } from '../905/485103';
import { AggregationType, LanguageType } from '../905/535806';
import { distributionAnalytics, globalPerfTimer, reactTimerGroup, timerEventNames } from '../905/542194';
import { currentSelectionAtom } from '../905/617744';
import { EventEmitter } from '../905/690073';
import { logCustom, setModeEventHandler } from '../905/714362';
import { debounce } from '../905/915765';
import { N } from '../905/945673';
import { atomStoreManager } from '../figma_app/27355';
import { isDevEnvironment } from '../figma_app/169182';
import { Rf } from '../figma_app/546509';
import { $G, S as _$$S, Ad, ai, f1, kJ, s$ } from '../figma_app/553184';
import { Cd, Cr, E7, JA, kq, P2, sl, w4, wl, Zp } from '../figma_app/682945';
import { DocumentSaveEvent, Multiplayer } from '../figma_app/763686';
let A = [];
function y(e) {
  return `<img src="data:image/png;base64, ${e}" alt="Image of tile" />`;
}
let v = new class {
  constructor() {
    this.roundTripTimes = [];
    this.report = debounce(() => {
      let e = 0;
      this.roundTripTimes.forEach(t => e += t);
      let t = Math.round(1e3 * e / this.roundTripTimes.length);
      this.roundTripTimes = [];
      sendHistogram('performance.multiplayer.round_trip_time', t);
    }, 6e4);
  }
  reportMultiplayerRoundTripTime(e) {
    this.roundTripTimes.push(e);
    this.report();
  }
}();
export let $$w0 = new class {
  constructor() {
    this.events = new EventEmitter('fullscreen');
    setModeEventHandler(this.trackFromFullscreen.bind(this));
  }
  trackFromFullscreen(e, t, i, n, r, a) {
    trackFullScreenAnalytics(e, _$$r(t), {
      forwardToDatadog: i,
      batchRequest: r ?? void 0,
      addToRUM: a ?? void 0
    });
  }
  trackDefinedEventFromFullscreen(e, t) {
    analyticsEventManager.trackDefinedFullscreenEvent(e, _$$r(t));
  }
  resetDefinedAnalyticsForDocument() {
    analyticsEventManager.resetDefinedAnalyticsForDocument();
  }
  slogFromFullscreen(e, t, i, n, r, a, s) {
    return logCustom(e, t, i, n, r, a, s);
  }
  reportContextLost() {
    ai();
  }
  reportContextRestored() {
    kJ();
    JA();
  }
  reportRenderLayerCount(e) {
    Cd(e);
  }
  reportIndependentLayerAnimationActive() {
    sl();
  }
  reportNonIndependentLayerAnimationActive() {
    Zp();
  }
  reportIndependentLayerActive() {
    kq();
  }
  reportIndependentLayerAdded() {
    Cr();
  }
  reportIndependentLayerRemoved() {
    wl();
  }
  reportRenderedTileBytesUsed(e) {
    P2(e);
  }
  reportAnimationFromCpp() {
    w4();
  }
  reportAnimationFromTs() {
    E7();
  }
  recordRenderingEvent(e, t) {
    !function (e, t) {
      let i = '';
      if (e === 'transferState') {
        let e = !0;
        let n = 0;
        i += '<h1>Transfer State Tiles</h1><table><tr>';
        for (let r = 0; r < t.tiles.length; r++) {
          let a = t.tiles[r];
          e || a.y === n || (i += '</tr><tr>');
          i += `<td>${y(a.tile)}</td>`;
          n = a.y;
          e = !1;
        }
        i += '</tr></table>';
      } else {
        e === 'renderTile' ? (i += '<h1>Rendered Tile</h1>', i += `<h2>x = ${t.x}, y = ${t.y}, GUID = ${t.guid}</h2>`, i += y(t.tile)) : e === 'drawToTileStackTile' && (i += '<h1>Draw to Tile Stack Tile</h1>', i += `<h2>debugInfo = ${t.debugInfo}</h2>`, i += y(t.tile));
      }
      A.push(i);
    }(e, t);
  }
  saveRenderingTrace() {
    !function () {
      if (A.length === 0) return;
      let e = `<!doctype html>
    <html>
    <head>
      <title>Rendering Trace</title>
      <meta charset="utf-8">
      <style>
        td {
          padding: 2px;
        }
      </style>
    </head>
    <body>`;
      e += A.join('');
      e += `
    </body>
    </html>`;
      let t = document.createElement('a');
      t.href = URL.createObjectURL(new Blob([e], {
        type: 'application/javascript'
      }));
      t.download = 'rendering_trace.html';
      document.body.appendChild(t);
      t.click();
      document.body.removeChild(t);
      A.length = 0;
    }();
  }
  reportDirtyAfterLoad(e) {
    let t = isDevEnvironment();
    trackEventAnalytics('dirty_after_load', {
      registersDump: Multiplayer?.pendingRegistersDump(t).substring(0, 1e4),
      sessionID: e
    });
    f1();
  }
  reportConsecutiveFlushes() {
    $G();
  }
  reportConsecutiveImageChangeSkips() {
    _$$S();
  }
  reportPerfEvent(e) {
    switch (e) {
      case DocumentSaveEvent.AFTER_FIRST_RENDER:
        s$('AFTER_FIRST_RENDER');
        fullscreenPerfManager.start('AFTER_FIRST_RENDER');
        break;
      case DocumentSaveEvent.DOCUMENT_STARTED_SAVING:
        s$('DOCUMENT_STARTED_SAVING');
        break;
      case DocumentSaveEvent.DOCUMENT_FINISHED_SAVING:
        s$('DOCUMENT_FINISHED_SAVING');
    }
  }
  reportContextRestore() {
    this.events.trigger('context-restore');
  }
  reportMultiplayerRoundTripTime(e) {
    v.reportMultiplayerRoundTripTime(e);
  }
  reportBranchingLoadTime(e, t, i, n, r, a) {
    let l = atomStoreManager.get(currentSelectionAtom);
    let d = {
      branchFileKey: n,
      sourceFileKey: i,
      durationMs: 1e3 * e,
      loadType: AggregationType.GRANULAR,
      functionName: t,
      profileStep: LanguageType.CPP_ONLY,
      branchModalTrackingId: a,
      direction: l
    };
    r && (d = {
      diffType: r,
      ...d
    });
    trackEventAnalytics('Branch Modal Load Time', d);
  }
  reportQuantizedColorEqualsUse(e, t, i, n, r, a, s, l) {
    let c = {
      ..._$$I(new Error().stack),
      color1: JSON.stringify({
        r: e,
        g: t,
        b: i,
        a: n
      }),
      color2: JSON.stringify({
        r,
        g: a,
        b: s,
        a: l
      })
    };
    trackEventAnalytics('quantized_color_equal_use', c);
  }
  tryReportError(e) {
    reportError(_$$e.SCENEGRAPH_AND_SYNC, new Error(e));
  }
  startPerfTimer(e) {
    timerEventNames.has(e) && reactTimerGroup.start(e);
    gpuFullscreenEventNames.has(e) && fullscreenPerfManager.startFs(e);
  }
  stopPerfTimer(e) {
    timerEventNames.has(e) && reactTimerGroup.stop(e);
    gpuFullscreenEventNames.has(e) && fullscreenPerfManager.stopFs(e);
  }
  startOpsTimer(e, t) {
    globalPerfTimer.start(e, {
      key: t
    });
  }
  stopOpsTimer(e, t) {
    return globalPerfTimer.stop(e, t);
  }
  createDistribution(e, t) {
    distributionAnalytics.create(e, t);
  }
  addToDistribution(e, t) {
    distributionAnalytics.add(e, t);
  }
  resetDistribution(e) {
    distributionAnalytics.reset(e);
  }
  getDistributionAnalyticsProperties(e) {
    return distributionAnalytics.analyticsProperties(e);
  }
  removeDistribution(e) {
    distributionAnalytics.remove(e);
  }
  tryStopOpsTimer(e, t) {
    return globalPerfTimer.tryStop(e, t);
  }
  pauseOpsTimer(e, t) {
    return globalPerfTimer.pause(e, t);
  }
  resumeOpsTimer(e, t) {
    return globalPerfTimer.resume(e, t);
  }
  trySetAttributeOpsTimer(e, t, i, n) {
    return globalPerfTimer.trySetAttribute(e, t, i, n);
  }
  tryGetAttributesOpsTimer(e, t) {
    return globalPerfTimer.tryGetAttribute(e, t);
  }
  getOpsTimer(e, t) {
    return globalPerfTimer.report().get(e)?.get(t) || null;
  }
  logNumericMetric(e, t) {
    for (let i of Ad) {
      if (e.startsWith(i)) {
        sendHistogram(e, t);
        break;
      }
    }
    N.isNumberEvent(e) && N.loadTimer.logEvent(e, t);
    e === 'receiveNodeChanges' && fullscreenPerfManager.logNodeChangeMsg(t);
  }
  logStringMetric(e, t) {
    N.isStringEvent(e) && N.loadTimer.logEvent(e, t);
    gpuFullscreenEventNames.has(e) && fullscreenPerfManager.startFs(e);
  }
  handleAllocationFailureWithNative(e) {
    let t = Rf();
    return !!t?.handleAllocationFailure && (t.handleAllocationFailure(e), t.handleAllocationFailure = void 0, !0);
  }
}();
export const F = $$w0;