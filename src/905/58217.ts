import { trackEventAnalytics } from "../905/449184";
import { localStorageRef } from "../905/657224";
import { Timer } from "../905/609396";
import { logError } from "../905/714362";
import { yp, Ph, ly } from "../905/138461";
let o = "ping-request:";
let l = "ping-response:";
function c({
  userID: e,
  fileKey: t,
  sessionID: i
}) {
  return `autosave-${e}-${t}-${i}`;
}
export function $$u1(e, t) {
  return e.name === c(t);
}
export async function $$p3(e) {
  let t = c(e);
  return yp ? !(await Ph(t)) : function (e, t, i) {
    let n = localStorageRef;
    if (!n) return Promise.reject("Local storage not available");
    let d = o + e;
    let c = l + e;
    let u = new Timer();
    let p = !1;
    let m = e => {};
    let h = new Promise(e => {
      m = e;
    });
    let g = () => {
      n.removeItem(d);
      n.removeItem(c);
      window.removeEventListener("storage", f);
    };
    let f = e => {
      e.storageArea === n && null !== e.newValue && e.key === c && (u.stop(), g(), p ? logError("storage", "ping: responded after timeout interval") : m(!0));
    };
    n.removeItem(d);
    n.removeItem(c);
    window.addEventListener("storage", f);
    let _ = Date.now();
    n.setItem(d, _.toString());
    u.start();
    setTimeout(() => {
      setTimeout(g, 1e4);
      p = !0;
      m(!1);
    }, 200);
    window.addEventListener("unload", g);
    return h;
  }(t, 0, 0);
}
export async function $$m2(e, t) {
  return await $$p3({
    userID: e,
    fileKey: t.fileKey,
    sessionID: 0
  });
}
export async function $$h0(e) {
  let t = c(e);
  let i = null;
  if (yp) i = await ly(t);else {
    let e = function (e) {
      let t = localStorageRef;
      if (!t) throw Error("Local storage not available");
      let i = o + e;
      let n = l + e;
      t.removeItem(n);
      let a = e => {
        if (e.storageArea === t && null !== e.newValue && e.key === i) {
          let e = Date.now();
          t.setItem(n, e.toString());
          setTimeout(() => {
            t.removeItem(i);
            t.removeItem(n);
          }, 1e3);
        }
      };
      window.addEventListener("storage", a, !1);
      return {
        unregister: () => window.removeEventListener("storage", a, !1)
      };
    }(t);
    i = {
      name: t,
      release: () => (e.unregister(), Promise.resolve())
    };
  }
  i || trackEventAnalytics("autosave_acquiring_lock_failed", {
    lockName: t,
    sessionID: e.sessionID,
    webLocksAvailable: yp
  });
  return i;
}
export const A2 = $$h0;
export const LX = $$u1;
export const M = $$m2;
export const mc = $$p3;