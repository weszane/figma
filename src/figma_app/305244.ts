import { ServiceCategories as _$$e } from "../905/165054";
import { FullscreenWebSocketTsApi, Multiplayer } from "../figma_app/763686";
import { ReduxSceneGraph, getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { logInfo, logWarning } from "../905/714362";
import { ds } from "../figma_app/314264";
import { II } from "../905/687477";
import { xK } from "../905/125218";
let h = null;
let m = 0;
let g = 0;
function f() {
  II();
  FullscreenWebSocketTsApi.connectFinished();
}
export function $$E1() {
  return h?.bufferedAmount || 0;
}
function y(e) {
  II();
  FullscreenWebSocketTsApi.receive(e);
}
function b(e, t) {
  let r = new URL(e);
  let n = new URL(t);
  r.searchParams.$$delete("recentReload");
  n.searchParams.$$delete("recentReload");
  return r.toString() === n.toString();
}
function T(e) {
  if (null !== h) {
    h.onopen = null;
    h.onmessage = null;
    h.onclose = null;
    h.onerror = null;
    try {
      h.close();
    } catch (e) {}
    h = null;
    II();
    FullscreenWebSocketTsApi.disconnect(e);
  }
}
let I = !1;
export function $$S2() {
  if (h) {
    I = !0;
    let e = h.url;
    T("breakMultiplayerWebsocketForTesting");
    console.log(`breakMultiplayerWebsocketForTesting: disconnected from ${e}`);
  }
}
export function $$v3(e = !1) {
  h || (I = !1, Multiplayer.reconnect(e), console.log(`unbreakMultiplayerWebsocketForTesting: reconnected to ${h ? h.url : null}`));
}
export let $$A0 = {
  connect: function (e) {
    if (I) return;
    m++;
    T("connect");
    let t = mpGlobal.sock;
    let r = mpGlobal.perfMetrics;
    let p = mpGlobal.msgs;
    mpGlobal.sock = null;
    mpGlobal.msgs = [];
    mpGlobal.perfMetrics = [];
    xK.setWsUrl(e);
    let E = debugState?.getState();
    if (t && b(t.url, e) && (t.readyState === WebSocket.CONNECTING || t.readyState === WebSocket.OPEN)) {
      for (let {
        key,
        ts,
        nBytes
      } of (h = t, g = 0, r)) xK.logWsMsg(key, nBytes, ts);
      f();
      let e = p.length;
      for (let [t, r] of p.entries()) if (logInfo("multiplayer", "Replaying websocket message", {
        i: t,
        total: e,
        len: r.byteLength
      }), y(r), !h) return;
      h.readyState === WebSocket.CONNECTING && (h.onopen = () => {
        xK.logWsMsg("mp-ws-onopen");
      });
    } else {
      if (ds("multiplayer_connect_attempt_ws_start", E?.openFile?.key, E, {
        url: e,
        urlLength: e.length,
        connectAttemptId: m,
        isReconnect: !!ReduxSceneGraph && -1 !== getSingletonSceneGraph().scene,
        isIncremental: Multiplayer?.isIncrementalSession()
      }), null !== t) {
        if (!b(t.url, e) && (logWarning("multiplayer", "Preconnect URL doesn't match URL", {
          preconnectUrl: t.url,
          url: e
        }), getFeatureFlags().report_preconnect_mismatch && reportError(_$$e.SCENEGRAPH_AND_SYNC, Error("Multiplayer preconnect URL mismatch"))), t.readyState !== WebSocket.CONNECTING && t.readyState !== WebSocket.OPEN) {
          let e = null;
          t.readyState === WebSocket.CLOSED ? e = "closed" : t.readyState === WebSocket.CLOSING && (e = "closing");
          logWarning("multiplayer", "readyState is bad, skipping preconnect optimization", {
            readyState: e
          });
        }
        trackEventAnalytics("preconnect_url_mismatch", {
          preconnectUrl: t.url,
          url: e,
          readyState: t.readyState
        }, {
          forwardToDatadog: !0
        });
        try {
          t.close();
        } catch {}
      }
      let r = e.length;
      if (g >= 3 && r > 2e3 && navigator.onLine) {
        let t = new URL(e);
        t.searchParams.$$delete("scenegraph-queries-initial-nodes");
        e = t.toString() + "&use-incremental-for-editors=0";
        let n = {
          connectAttemptId: m,
          originalUrlLength: r,
          newUrlLength: e.length,
          forced: !1,
          consecutiveInitFailureCount: g,
          shortened_url: !0
        };
        ds("multiplayer_connect_truncate_ws_url", E?.openFile?.key, E, n);
        logInfo("multiplayer", "Truncating websocket url to force full loading", n);
      }
      (h = new WebSocket(e)).binaryType = "arraybuffer";
      h.onopen = () => {
        g = 0;
        f();
        xK.logWsMsg("mp-ws-onopen");
        ds("multiplayer_connect_ws_open", E?.openFile?.key, E, {
          connectAttemptId: m
        });
        logInfo("multiplayer", "Websocket opened");
      };
    }
    h.onmessage = e => {
      let t = new Uint8Array(e.data);
      xK.logWsMsg("mp-ws-onmessage", t.length * t.BYTES_PER_ELEMENT);
      y(t);
    };
    h.onclose = () => {
      T("socket.onclose");
    };
    h.onerror = () => {
      navigator.onLine ? g++ : g = 0;
      T("socket.onerror");
      ds("multiplayer_connect_ws_error", E?.openFile?.key, E, {
        connectAttemptId: m,
        consecutiveInitFailureCount: g,
        online: navigator.onLine
      });
      logInfo("multiplayer", "Websocket error", {
        online: navigator.onLine,
        consecutiveInitFailureCount: g
      });
    };
  },
  disconnect: T,
  send: function (e) {
    try {
      h.send(e);
    } catch (e) {}
  }
};
export const Pp = $$A0;
export const Yq = $$E1;
export const u1 = $$S2;
export const zi = $$v3;