import { createAtomWithEquality, t_, atomStoreManager, atom, Ut } from "../figma_app/27355";
import { getConsentRegion } from "../figma_app/169182";
import { W } from "../905/423575";
let s = "pref";
export var $$o4 = (e => (e.UNLOADED = "unloaded", e.NO = "no", e.YES = "yes", e))($$o4 || {});
function l() {
  let e = W();
  if (e) return e.get(s);
}
async function d(e = "background") {
  try {
    return await scheduler.postTask(() => l(), {
      priority: e
    });
  } catch {
    return;
  }
}
async function c(e, t = "background") {
  try {
    await scheduler.postTask(() => function (e) {
      let t = W();
      t && t.set(s, e, {
        maxAge: 31536e3
      });
    }(e), {
      priority: t
    });
  } catch {}
}
let u = createAtomWithEquality(t_(() => l()));
async function p() {
  atomStoreManager.set(u, await d());
}
async function m(e) {
  atomStoreManager.set(u, e);
  await c(e);
}
export async function $$h2({
  consentRegion: e,
  cookiesEnabled: t
}) {
  await m({
    t: e,
    f: t,
    a: t,
    m: t
  });
}
window.addEventListener("focus", () => p());
let $$g0 = atom(e => {
  switch (e(u)) {
    case Ut:
    case void 0:
      return "unloaded";
    case null:
      return "no";
    default:
      return "yes";
  }
});
let $$f1 = atom(e => {
  let t = e(u);
  switch (t) {
    case Ut:
    case void 0:
      return !1;
    case null:
      return "explicit" !== getConsentRegion();
    default:
      return t.a;
  }
});
let $$_6 = atom(e => {
  let t = e(u);
  switch (t) {
    case Ut:
    case void 0:
      return !1;
    case null:
      return !getConsentRegion();
    default:
      return t.m;
  }
});
let $$A5 = atom(e => {
  let t = e(u);
  switch (t) {
    case Ut:
    case void 0:
      return !1;
    case null:
      return "explicit" !== getConsentRegion();
    default:
      return t.f;
  }
});
let $$y3 = atom(0);
export const Dr = $$g0;
export const EA = $$f1;
export const L3 = $$h2;
export const P4 = $$y3;
export const S6 = $$o4;
export const Zu = $$A5;
export const cQ = $$_6;