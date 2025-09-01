import { kul, h3O, DPQ, NUh } from "../figma_app/763686";
import { zl } from "../figma_app/27355";
import { Lo } from "../905/714362";
import { nl } from "../figma_app/257275";
import { Y5 } from "../figma_app/455680";
import { nc } from "../figma_app/474636";
import { n as _$$n } from "../905/347702";
import { oJ } from "../905/346794";
let u = null;
let p = 0;
let _ = !1;
let h = !1;
export function $$m6(e) {
  switch (e) {
    case kul.UNJOINED:
      return "unjoined";
    case kul.UNJOINED_FROM_ERROR:
      return "unjoined_from_error";
    case kul.UNJOINED_FROM_VALIDATION_FAILURE:
      return "unjoined_from_validation_failure";
    case kul.GOT_SCHEMA:
      return "got_schema";
    case kul.JOINING_INITIAL_LOAD:
      return "joining_initial_load";
    case kul.JOINING_RECONNECT:
      return "joining_reconnect";
    case kul.JOINING_RECONNECT_AWAITING_QUERY_REPLY:
      return "joining_reconnect_awaiting_query_reply";
    case kul.JOINED:
      return "joined";
    case kul.SHOULD_UPGRADE:
      return "should_upgrade";
    case kul.UPGRADING:
      return "upgrading";
    case kul.WAITING_FOR_RELOAD:
      return "waiting_for_reload";
    case kul.DETACHED:
      return "detached";
    default:
      return "unknown";
  }
}
export function $$g0() {
  h || (h = !0, setInterval(() => Y5.isReady() && h3O.updateConnectionStateIfNeeded(!1), 250), window.addEventListener("online", () => {
    navigator.onLine && Y5.isReady() && h3O.updateConnectionStateIfNeeded(!0);
  }), window.addEventListener("visibilitychange", () => {
    "visible" === document.visibilityState && Y5.isReady() && h3O.updateConnectionStateIfNeeded(!0);
  }));
}
export function $$f2(e) {
  u || (u = function() {
    try {
      let e = new Blob(["(" + function() {
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
    p && (_ = !0, u(function() {
      _ = !1;
      p && h3O.flush();
      e();
    }, p));
  }();
}
export function $$E9(e) {
  let t = $$S1();
  let r = $$v5(t);
  h3O.startLoadingAllPages(t, e);
  r.then(() => {
    zl.set(nc, !1);
  });
  return r;
}
export function $$y8(e, t) {
  let r = $$S1();
  let i = $$v5(r);
  h3O.subscribeToGuids(e, r, t);
  return i;
}
let $$b3 = _$$n(() => h3O.isIncrementalSession() || h3O.isValidatingIncremental());
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
export function $$N4(e, t, r = DPQ.CONTAINING_PAGE) {
  nl();
  let i = $$S1();
  let a = $$v5(i);
  let o = r === DPQ.PLUGIN;
  h3O.subscribeToContainingPage__DO_NOT_USE_DIRECTLY(e, i, t, o);
  return a;
}
export function $$C10(e, t, r = DPQ.CONTAINING_PAGE) {
  if (0 === e.length) return Promise.resolve();
  nl();
  let i = $$S1();
  let a = $$v5(i);
  let o = r === DPQ.PLUGIN;
  h3O.subscribeToContainingPages__DO_NOT_USE_DIRECTLY(e, i, t, o);
  return a;
}
export function $$w13(e) {
  return !!h3O && h3O.isNodeDownloaded(e);
}
export function $$O12(e) {
  let t = () => {
    let r = $$S1();
    return new Promise(async (t, i) => {
      e.$$delete("0:0");
      Lo("Autosave", `Requesting dependencies for ${e.size} nodes while loading incrementally`, void 0, {
        logToConsole: NUh.ALWAYS
      });
      await oJ(kul.JOINED);
      I.set(r, [t, i]);
      h3O.autosaveSubscribeToContainingPages(e, r);
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
