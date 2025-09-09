import { ServiceCategories as _$$e } from "../905/165054";
import { customHistory } from "../905/612521";
import { Uz } from "../905/63728";
import { reportError } from "../905/11";
import { jN } from "../905/612685";
import { O } from "../905/833838";
import { trackEventAnalytics } from "../905/449184";
import { fakePath, getInitialOptions } from "../figma_app/169182";
export function $$u10(e, t) {
  let i;
  let r;
  try {
    i = new URL(e, fakePath);
    r = new URLSearchParams(i.search);
  } catch (i) {
    reportError(_$$e.WAYFINDING, i, {
      extra: {
        ...t,
        url: e
      }
    });
    return i;
  }
  Object.entries(t).forEach(e => {
    let [t, i] = e;
    r.set(t, i);
  });
  let a = r.toString();
  a && (i.search = `?${a}`);
  let o = i.href;
  return o.startsWith(fakePath) ? o.substr(fakePath.length) : o;
}
export function $$p6(e, t, i) {
  let n = new URL(e, fakePath);
  let r = new URLSearchParams(n.search);
  r.has(t) || r.set(t, i);
  let a = r.toString();
  a && (n.search = `?${a}`);
  let s = n.href;
  return s.startsWith(fakePath) ? s.substr(fakePath.length) : s;
}
export function $$m12() {
  return customHistory.location.pathname + customHistory.location.search;
}
export function $$h11(e) {
  var t = e.url;
  if (null != t) {
    if (t.startsWith("mailto:")) {
      customHistory.unsafeRedirect(t, e.openInNewWindow ? "_blank" : "");
      return;
    }
    t.startsWith("http://") || t.startsWith("https://") || (t = "http://" + t);
    customHistory.postRedirect(`/exit?url=${encodeURIComponent(t)}`, e.openInNewWindow ? "_blank" : "");
  }
}
export function $$g5(e, t, i, n) {
  return e ? e !== t : i !== n;
}
export function $$f7(e, {
  orgId: t,
  teamId: i,
  selectedView: n,
  user: a
}) {
  let s = e.base ?? "file";
  let c = $$A13(jN({
    ...e,
    base: s
  }), a);
  c = $$y15(c, t, i, n);
  (function (e, t, i, n = "file") {
    trackEventAnalytics("file_browser_fresh_external_file_load", {
      fileKey: e,
      entryPlanId: t || i,
      planType: t ? O.ORG : O.TEAM,
      urlType: n
    });
  })(e.file.key, t, i, s);
  customHistory.redirect(c);
}
export function $$_0(e, t, i = "file") {
  trackEventAnalytics("file_browser_fresh_external_file_load", {
    fileKey: e,
    entryPlanId: t || "external-teams",
    urlType: i
  });
}
export function $$A13(e, t) {
  return t ? $$p6(e, "fuid", t.id) : e;
}
export function $$y15(e, t, i, n) {
  let r = "";
  let a = t || i;
  a && (r = $$p6(e, "prev-plan-id", a), r = $$p6(r, "prev-plan-type", t ? O.ORG : O.TEAM));
  n && (r = $$p6(r, "prev-selected-view", n.view), r = "folder" === n.view ? $$p6(r, "prev-folder-id", n.folderId) : r, r = "recentsAndSharing" === n.view && n.tab ? $$p6(r, "prev-tab", n.tab) : r);
  return r;
}
export function $$b2(e, t, i) {
  return window.open(e, t, i);
}
export function $$v1(e) {
  return {
    top: e ? e.top : 0,
    right: e ? e.right : 0,
    bottom: e ? e.bottom : 0,
    left: e ? e.left : 0,
    width: e ? e.width : 0,
    height: e ? e.height : 0
  };
}
export function $$I14(e, t) {
  return e && t ? JSON.stringify($$v1(e)) === JSON.stringify($$v1(t)) : e === t;
}
export function $$$$E3() {
  return self !== top;
}
export function $$x9() {
  try {
    return self !== top && self.location.host !== top?.location.host;
  } catch (e) {
    return !0;
  }
}
let $$S8 = {};
let w = document && document.documentElement;
function C(e, t) {
  Object.defineProperty($$S8, e, {
    enumerable: !0,
    configurable: !0,
    get() {
      let i = t();
      Object.defineProperty($$S8, e, {
        enumerable: !0,
        value: i
      });
      return i;
    }
  });
}
export function $$T4() {
  return null == document.visibilityState || "visible" === document.visibilityState ? Promise.resolve() : new Promise(e => {
    document.addEventListener("visibilitychange", function t() {
      "visible" === document.visibilityState && (document.removeEventListener("visibilitychange", t), e());
    });
  });
}
export function $$k16(e) {
  let t = getInitialOptions().user_data;
  let i = t && t.id;
  let n = function (e) {
    if (!i || e instanceof KeyboardEvent && e.keyCode !== Uz.ENTER) return;
    let t = e.target;
    if (!(t instanceof Element)) return;
    let n = t.closest("a");
    if (!n || n.hostname !== window.location.hostname) return;
    let r = window.location.href;
    let s = n.href.substr(0, n.href.indexOf("#"));
    let o = r.indexOf("#");
    let l = r.substr(0, o);
    let d = r.substr(o + 1);
    s && s === (l || d) || (n.href = $$p6(n.href, "fuid", i));
  };
  let r = e ?? document;
  r.addEventListener("click", n);
  r.addEventListener("keydown", n);
}
C("pointerLock", () => !!(w && w.requestPointerLock));
C("fullscreenChangeEventName", () => "onfullscreenchange" in document ? "fullscreenchange" : "onmozfullscreenchange" in document ? "mozfullscreenchange" : "onwebkitfullscreenchange" in document ? "webkitfullscreenchange" : "onMSFullscreenChange" in document ? "MSFullscreenChange" : "onmsfullscreenchange" in document ? "msfullscreenchange" : null);
C("fullscreenErrorEventName", () => "onfullscreenerror" in document ? "fullscreenerror" : "onmozfullscreenerror" in document ? "mozfullscreenerror" : "onwebkitfullscreenerror" in document ? "webkitfullscreenerror" : "onMSFullscreenError" in document ? "MSFullscreenError" : "onmsfullscreenerror" in document ? "msfullscreenerror" : null);
C("requestFullscreenFunc", () => w && (w.requestFullscreen || w.mozRequestFullScreen || w.webkitRequestFullscreen || w.msRequestFullscreen || null));
C("exitFullscreenFunc", () => {
  let e = document.exitFullscreen || document.mozExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen || null;
  return e ? e.bind(document) : null;
});
C("getFullscreenElement", () => document.fullscreenElement ? () => document.fullscreenElement : document.mozFullScreenElement ? () => document.mozFullScreenElement : document.webkitFullscreenElement ? () => document.webkitFullscreenElement : document.msFullscreenElement ? () => document.msFullscreenElement : () => null);
C("fullscreen", () => null != $$S8.requestFullscreenFunc && null != $$S8.exitFullscreenFunc && (document.fullscreenEnabled || document.webkitFullscreenEnabled));
export const $R = $$_0;
export const E = $$v1;
export const FJ = $$b2;
export const GZ = $$$$E3;
export const Lb = $$T4;
export const N7 = $$g5;
export const NQ = $$p6;
export const QV = $$f7;
export const R7 = $$S8;
export const Up = $$x9;
export const dR = $$u10;
export const jJ = $$h11;
export const jM = $$m12;
export const mc = $$A13;
export const t7 = $$I14;
export const vk = $$y15;
export const wy = $$k16;