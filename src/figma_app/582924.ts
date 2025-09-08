import { SchemaJoinStatus, Multiplayer, IPagePlugin, LogToConsoleMode } from "../figma_app/763686";
import { atomStoreManager } from "../figma_app/27355";
import { logInfo } from "../905/714362";
import { isInteractionPathCheck } from "../figma_app/897289";
import { fullscreenValue } from "../figma_app/455680";
import { nc } from "../figma_app/474636";
import { n as _$$n } from "../905/347702";
import { oJ } from "../905/346794";
let u = null;
let p = 0;
let _ = !1;
let h = !1;
export function $$m6(e) {
  switch (e) {
    case SchemaJoinStatus.UNJOINED:
      return "unjoined";
    case SchemaJoinStatus.UNJOINED_FROM_ERROR:
      return "unjoined_from_error";
    case SchemaJoinStatus.UNJOINED_FROM_VALIDATION_FAILURE:
      return "unjoined_from_validation_failure";
    case SchemaJoinStatus.GOT_SCHEMA:
      return "got_schema";
    case SchemaJoinStatus.JOINING_INITIAL_LOAD:
      return "joining_initial_load";
    case SchemaJoinStatus.JOINING_RECONNECT:
      return "joining_reconnect";
    case SchemaJoinStatus.JOINING_RECONNECT_AWAITING_QUERY_REPLY:
      return "joining_reconnect_awaiting_query_reply";
    case SchemaJoinStatus.JOINED:
      return "joined";
    case SchemaJoinStatus.SHOULD_UPGRADE:
      return "should_upgrade";
    case SchemaJoinStatus.UPGRADING:
      return "upgrading";
    case SchemaJoinStatus.WAITING_FOR_RELOAD:
      return "waiting_for_reload";
    case SchemaJoinStatus.DETACHED:
      return "detached";
    default:
      return "unknown";
  }
}
export function $$g0() {
  h || (h = !0, setInterval(() => fullscreenValue.isReady() && Multiplayer.updateConnectionStateIfNeeded(!1), 250), window.addEventListener("online", () => {
    navigator.onLine && fullscreenValue.isReady() && Multiplayer.updateConnectionStateIfNeeded(!0);
  }), window.addEventListener("visibilitychange", () => {
    "visible" === document.visibilityState && fullscreenValue.isReady() && Multiplayer.updateConnectionStateIfNeeded(!0);
  }));
}
export function $$f2(e) {
  u || (u = function () {
    try {
      let e = new Blob(["(" + function () {
        onmessage = e => setTimeout(() => self.postMessage(""), e.data);
      } + ")()"], {
        type: "text/javascript"
      });
      let t = new Worker(URL.createObjectURL(e));
      return (e, r) => {
        t.onmessage || (t.onmessage = () => {
          t.onmessage = null;
          e();
        }, t.postMessage(r));
      };
    } catch (e) {
      console.error(e);
      return (e, t) => {
        setTimeout(e, t);
      };
    }
  }());
  p = e;
  _ || function e() {
    p && (_ = !0, u(function () {
      _ = !1;
      p && Multiplayer.flush();
      e();
    }, p));
  }();
}
export function $$E9(e) {
  let t = $$S1();
  let r = $$v5(t);
  Multiplayer.startLoadingAllPages(t, e);
  r.then(() => {
    atomStoreManager.set(nc, !1);
  });
  return r;
}
export function $$y8(e, t) {
  let r = $$S1();
  let i = $$v5(r);
  Multiplayer.subscribeToGuids(e, r, t);
  return i;
}
let $$b3 = _$$n(() => Multiplayer.isIncrementalSession() || Multiplayer.isValidatingIncremental());
let T = 1;
let I = new Map();
let $$S1 = () => T++;
export function $$v5(e) {
  return new Promise((t, r) => {
    I.set(e, [t, r]);
  });
}
export function $$A7(e) {
  let t = I.get(e);
  if (t) {
    let [r, n] = t;
    r();
    I.$$delete(e);
  }
}
export function $$x11() {
  I.forEach((e, t) => {
    let [r, n] = e;
    n();
  });
  I.clear();
}
export function $$N4(e, t, r = IPagePlugin.CONTAINING_PAGE) {
  isInteractionPathCheck();
  let i = $$S1();
  let a = $$v5(i);
  let o = r === IPagePlugin.PLUGIN;
  Multiplayer.subscribeToContainingPage__DO_NOT_USE_DIRECTLY(e, i, t, o);
  return a;
}
export function $$C10(e, t, r = IPagePlugin.CONTAINING_PAGE) {
  if (0 === e.length) return Promise.resolve();
  isInteractionPathCheck();
  let i = $$S1();
  let a = $$v5(i);
  let o = r === IPagePlugin.PLUGIN;
  Multiplayer.subscribeToContainingPages__DO_NOT_USE_DIRECTLY(e, i, t, o);
  return a;
}
export function $$w13(e) {
  return !!Multiplayer && Multiplayer.isNodeDownloaded(e);
}
export function $$O12(e) {
  let t = () => {
    let r = $$S1();
    return new Promise(async (t, i) => {
      e.$$delete("0:0");
      logInfo("Autosave", `Requesting dependencies for ${e.size} nodes while loading incrementally`, void 0, {
        logToConsole: LogToConsoleMode.ALWAYS
      });
      await oJ(SchemaJoinStatus.JOINED);
      I.set(r, [t, i]);
      Multiplayer.autosaveSubscribeToContainingPages(e, r);
    }).catch(() => t());
  };
  return t();
}
export const AW = $$g0;
export const Ak = $$S1;
export const Cd = $$f2;
export const Ff = $$b3;
export const IL = $$N4;
export const Ki = $$v5;
export const LD = $$m6;
export const PV = $$A7;
export const Tj = $$y8;
export const W5 = $$E9;
export const WA = $$C10;
export const Xk = $$x11;
export const Xl = $$O12;
export const mQ = $$w13;