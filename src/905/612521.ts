import { U } from "../905/869893";
import { Lf } from "../figma_app/564528";
import { x1 } from "../905/714362";
import { sx } from "../905/449184";
import { jsx } from "react/jsx-runtime";
import { Ix as _$$Ix } from "../vendor/130505";
import { debounce } from "../905/915765";
import { Z } from "../vendor/39153";
import { Co } from "../905/657224";
import { zR } from "../vendor/488412";
import { lZ } from "../figma_app/257275";
let n;
export function $$u6(e) {
  return null != e && "view" in e;
}
let p = (() => {
  let e = {
    trackEvent: sx,
    sloge: x1,
    tryOpenUrlForZoom: Lf
  };
  n = zR();
  return {
    get location() {
      return {
        ...n.location,
        href: window.location.href
      };
    },
    push: debounce((e, t) => {
      try {
        if (e) {
          let {
            origin,
            path
          } = A(e);
          origin ? origin === window.location.origin && path ? n.push(path, t) : window.history.pushState(t, "", e) : n.push(e, t);
        } else n.push({
          ...n.location,
          state: t
        });
      } catch (e) {
        console.warn(e);
      }
    }, 300, !0),
    replace: debounce((e, t) => {
      try {
        if (e) {
          let {
            origin,
            path
          } = A(e);
          origin ? origin === window.location.origin && path ? n.replace(path, t) : window.history.replaceState(t, "", e) : n.replace(e, t);
        } else n.replace({
          ...n.location,
          state: t
        });
      } catch (e) {
        console.warn(e);
      }
    }, 300, !0),
    reset() {
      throw Error("history.reset() must be used only in tests");
    },
    reload(t, i = {}) {
      if (Z({
        level: "info",
        message: "Reloading the page",
        data: {
          reason: t,
          metadata: i
        }
      }), lZ()) {
        console.warn("ignoring history.reload() in interaction tests");
        return;
      }
      let n = {
        ...i,
        reason: t
      };
      if (function () {
        let e;
        if (null == Co) return !1;
        let t = JSON.parse(Co.getItem("reload_times") || JSON.stringify([]));
        let i = Date.now() - 3e5;
        for (; t && t[0] < i;) t.shift();
        t.length > 15 ? e = !0 : (t.push(Date.now()), e = !1);
        Co.setItem("reload_times", JSON.stringify(t));
        return e;
      }()) {
        e.trackEvent("Location Reload Excessive", n);
        return;
      }
      e.trackEvent("Page Reloaded", n, {
        forwardToDatadog: !0,
        sendAsBeacon: !0
      });
      console.log("Reloading the page... reason:", t, i);
      try {
        window.self !== window.top && window.top.location.reload();
      } catch (e) {
        if (!(e instanceof DOMException)) throw e;
      }
      location.reload();
    },
    async reloadAndWaitForever(t, i = {}) {
      if (lZ()) {
        console.warn("ignoring history.reloadAndWaitForever() in interaction tests");
        return;
      }
      this.reload(t, i);
      setTimeout(() => {
        e.sloge("reload", "Long reload time", {
          reason: t,
          metadata: i,
          timeout: 1e4
        });
        return Error("Long reload time");
      }, 1e4);
      let n = new Promise(() => {});
      await n;
    },
    async reloadEmbed(t) {
      if (lZ()) {
        console.warn("ignoring history.reloadEmbed() in interaction tests");
        return;
      }
      console.log("Reloading the embed... reason:", t);
      location.reload();
      setTimeout(() => {
        e.sloge("reload", "Long reload time", {
          reason: t,
          timeout: 1e4
        });
        return Error("Long reload time");
      }, 1e4);
      let i = new Promise(() => {});
      await i;
    },
    redirect(e, t) {
      let {
        hostname,
        href
      } = _(e);
      if (hostname === window.location.hostname) {
        if (window.self !== window.top && !t) {
          window.top.location.href = href;
          return;
        }
        p.unsafeRedirect(e, t);
      } else throw Error("Attempting to redirect to another domain.");
    },
    async redirectAndWaitForever(e, t) {
      p.redirect(e, t);
      let i = new Promise(() => {});
      await i;
    },
    postRedirect(t, i) {
      if (lZ()) {
        console.warn("ignoring history.postRedirect() in interaction tests");
        return;
      }
      if (e.tryOpenUrlForZoom(t)) return;
      let {
        hostname,
        href
      } = _(t);
      if (hostname === window.location.hostname) {
        if (window.self !== window.top && !i) {
          window.top.location.href = href;
          return;
        }
        let e = document.createElement("form");
        e.setAttribute("rel", "noopener");
        e.method = "post";
        e.action = t;
        i && (e.target = i);
        document.body.append(e);
        e.submit();
        e.remove();
      } else throw Error("Attempting to redirect to another domain.");
    },
    unsafeRedirect(t, i, n) {
      if (lZ()) {
        console.warn("ignoring history.unsafeRedirect() in interaction tests");
        return;
      }
      if (e.tryOpenUrlForZoom(t)) return;
      let r = document.createElement("a");
      r.href = t;
      r.rel = "noreferrer noopener";
      i ? r.target = i : window.opener = null;
      n ? n.appendChild(r) : document.body.appendChild(r);
      r.click();
      r.remove();
    },
    unsafeRedirectMsTeams(e, t) {
      if (lZ()) {
        console.warn("ignoring history.unsafeRedirectMsTeams() in interaction tests");
        return;
      }
      let {
        hostname,
        href
      } = _(e);
      if (hostname !== window.location.hostname || !["/switch_user", "/oauth", "/start_google_sso", "/signup_with_google_sso"].includes(new URL(href).pathname)) return;
      let r = document.createElement("a");
      r.href = e;
      r.rel = "noreferrer";
      t && (r.target = t);
      document.body.appendChild(r);
      r.click();
      r.remove();
    },
    unsafeRedirectWithLocationHref(e) {
      document.location.href = e;
    },
    listen: function (e) {
      return n.listen((t, i) => {
        e(i);
      });
    },
    back: n.goBack,
    forward: n.goForward,
    go: n.go
  };
})();
U(p);
export let $$m0 = p;
export function $$h3(e) {
  return jsx(_$$Ix, {
    history: n,
    ...e
  });
}
export function $$g1() {
  return p.location.pathname.startsWith("/file/") || p.location.pathname.startsWith("/design/") || p.location.pathname.startsWith("/board/") || p.location.pathname.startsWith("/slides/") || p.location.pathname.startsWith("/site/") || p.location.pathname.startsWith("/buzz/");
}
export function $$f5() {
  return p.location.pathname.startsWith("/make/");
}
let _ = (e) => {
  let t = document.createElement("a");
  t.href = e;
  return {
    hostname: t.hostname,
    href: t.href
  };
};
function A(e) {
  try {
    let t = new URL(e);
    return {
      origin: t.origin,
      path: t.pathname + t.search + t.hash
    };
  } catch (e) {
    return {};
  }
}
export function $$y4() {
  if (p.location.state && "view" in p.location.state) return p.location.state;
}
export function $$b2() {
  if (p.location.state && "previousSelectedView" in p.location.state) return p.location.state.previousSelectedView;
}
export const Ay = $$m0;
export const Cs = $$g1;
export const Gl = $$b2;
export const Ix = $$h3;
export const Xr = $$y4;
export const af = $$f5;
export const s0 = $$u6;