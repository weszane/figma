import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { iL } from "../figma_app/762706";
import { Rx } from "../905/686312";
import { loadScript } from "../figma_app/623293";
import { logDebug, logInfo, logWarning, logError } from "../905/714362";
import { analyticsEventManager } from "../905/449184";
import { w$ } from "../figma_app/594947";
import { Su } from "../figma_app/781115";
import { L } from "../905/550169";
import { ld } from "../figma_app/582563";
import { isInteractionPathCheck } from "../figma_app/897289";
class d {
  constructor(e, t) {
    this._timeOfLastDisconnectMs = null;
    this._timeOfLastConnectionMs = null;
    this._timeOfFirstConnectionMs = null;
    this._definedConnectionAttemptEventName = e;
    this._definedDisconnectEventName = t;
  }
  handleSocketDisconnect(e) {
    if (null == this._timeOfLastConnectionMs) return;
    this._timeOfLastDisconnectMs = this.nowMs();
    let t = (this._timeOfLastDisconnectMs - this._timeOfLastConnectionMs) / 1e3;
    let r = this.nowMs() / 1e3;
    analyticsEventManager.trackDefinedEvent(this._definedDisconnectEventName, {
      connectionDurationSeconds: t,
      windowIsActive: e,
      sessionLengthSeconds: r
    });
  }
  handleSocketConnectionAttempt(e, t, r, n) {
    if (!e && t < 3) return;
    let i = this._timeOfLastDisconnectMs;
    let a = (this.nowMs() - i) / 1e3;
    e && (this._timeOfLastConnectionMs = this.nowMs(), null == this._timeOfFirstConnectionMs && (this._timeOfFirstConnectionMs = this._timeOfLastConnectionMs));
    let s = this.nowMs() / 1e3;
    analyticsEventManager.trackDefinedEvent(this._definedConnectionAttemptEventName, {
      success: e,
      timeSinceDisconnectSeconds: a,
      numberOfConnectionAttempts: t,
      firstTimeConnecting: r,
      windowIsActive: n,
      sessionLengthSeconds: s
    });
  }
  nowMs() {
    return Math.round(performance.now());
  }
}
var m = null;
var g = null;
export function $$f0() {
  return m;
}
new L();
class E {
  bindContext(e, t) {
    Rx(e, t, iL().WebGLEmscriptenObj);
  }
  getNewProgramId() {
    let e = iL().WebGLEmscriptenObj;
    return e.getNewId(e.programs);
  }
  getFramebuffer(e) {
    return iL().WebGLEmscriptenObj.framebuffers[e];
  }
  getRenderbuffer(e) {
    return iL().WebGLEmscriptenObj.renderbuffers[e];
  }
  getTexture(e) {
    return iL().WebGLEmscriptenObj.textures[e];
  }
}
let y = class e {
  getDynamicConfigBoolean(t, r, n) {
    return w$.getDynamicConfigBoolean(t, r, n, e.SourceLoggingString);
  }
  getDynamicConfigNumber(t, r, n) {
    return w$.getDynamicConfigNumber(t, r, n, e.SourceLoggingString);
  }
  getDynamicConfigString(t, r, n) {
    return w$.getDynamicConfigString(t, r, n, e.SourceLoggingString);
  }
  getExperimentBoolean(t, r, n) {
    return w$.getExperimentBoolean(t, r, n, e.SourceLoggingString);
  }
  getExperimentNumber(t, r, n) {
    return w$.getExperimentNumber(t, r, n, e.SourceLoggingString);
  }
  getExperimentString(t, r, n) {
    return w$.getExperimentString(t, r, n, e.SourceLoggingString);
  }
  clearFeatureGatesForTesting() {
    w$.clear();
  }
  updateFeatureGateForTesting(e, t) {
    w$.updateFeatureGateForTesting(e, t);
  }
  getFeatureGate(e) {
    return w$.getFeatureGateFromInitialOptions(e);
  }
  setInRenderServerForViewerTests() {
    w$.setInRenderServerForViewerTests();
  }
  updateExperimentForTesting(e, t, r) {
    w$.updateExperimentForTesting(e, t, r);
  }
  clearExperimentsForTesting() {
    w$.clear();
  }
};
async function b() {
  if (!Fig.createViewer) try {
    let e = Fig.tsViewerScriptURL;
    await loadScript(e);
  } catch (e) {
    throw e;
  }
}
export async function $$T2() {
  await b();
  return Fig.getPrototypeAppBindingsForTest();
}
export function $$I3(e, t, r, i) {
  let [a, s] = useState(null);
  let l = useRef({
    viewerMode: e,
    containerElement: t,
    loadTimeTracker: Su,
    statsigViewerWebConfig: new y(),
    socketConnectionTracker: new d("prototype.multiplayer_socket_connection_attempt", "prototype.multiplayer_socket_disconnect"),
    safeModeOptions: ld,
    emscriptenGL: new E(),
    logError: (e, t, r, n, i) => {
      switch (e) {
        case "DEBUG":
          logDebug(t, r, n, i);
          break;
        case "INFO":
          logInfo(t, r, n, i);
          break;
        case "WARN":
          logWarning(t, r, n, i);
          break;
        case "ERROR":
          logError(t, r, n, i);
      }
    },
    ...r
  });
  useEffect(() => {
    let e = l.current;
    (async function () {
      let {
        containerElement
      } = l.current;
      m && !i ? (JSON.stringify({
        ...e,
        containerElement: null
      }) === JSON.stringify(g) || isInteractionPathCheck() || console.warn("useViewer called with different options than the first call!"), containerElement && m.setNewContainerElement(containerElement)) : (g = {
        ...e,
        containerElement: null
      }, await b(), m = await Fig.createViewer(e));
      s(m);
    })();
  }, [i]);
  useEffect(() => {
    a && t && a.setNewContainerElement(t);
  }, [a, t]);
  let c = t?.getBoundingClientRect();
  useLayoutEffect(() => {
    a?.forceFrame();
  }, [a, c?.x, c?.y, c?.height, c?.width]);
  return a;
}
export function $$S4(e, t, r) {
  useEffect(() => (e?.on(t, r), () => {
    e?.off(t, r);
  }), [e, t, r]);
}
export function $$v1(e, t) {
  return e.data?.type === t;
}
y.SourceLoggingString = "viewer";
export const hk = $$f0;
export const CZ = $$v1;
export const pp = $$T2;
export const ur = $$I3;
export const O5 = $$S4;