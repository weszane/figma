import { um, zl, eU } from "../figma_app/27355";
import { FJ } from "../905/508367";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { Wh } from "../figma_app/615482";
var d = (e => (e[e.DISPATCH_WINDOW_OPEN = 0] = "DISPATCH_WINDOW_OPEN", e[e.SET_READY_FOR_MESSAGES = 1] = "SET_READY_FOR_MESSAGES", e[e.CLOSE_WINDOW = 2] = "CLOSE_WINDOW", e[e.REFRESH_WINDOW = 3] = "REFRESH_WINDOW", e))(d || {});
function c(e) {
  if (!e) return;
  e.presenterViewer = null;
  let t = new Set(["close", "open", "alert", "confirm", "prompt", "focus", "blur", "postMessage", "addEventListener", "removeEventListener", "dispatchEvent", "setTimeout", "clearTimeout", "setInterval", "clearInterval", "requestAnimationFrame", "cancelAnimationFrame", "document", "location", "history", "navigator", "screen", "innerWidth", "innerHeight", "outerWidth", "outerHeight", "scrollX", "scrollY", "pageXOffset", "pageYOffset", "localStorage", "sessionStorage", "console", "performance", "parent", "top", "self", "window", "frames", "length", "name", "opener", "origin", "devicePixelRatio", "crypto", "isSecureContext", "visualViewport", "customElements", "trustedTypes", "onload", "onunload", "onbeforeunload", "onerror", "onresize", "onmessage", "onmessageerror", "onfocus", "onblur", "Object", "Array", "Function", "String", "Number", "Boolean", "Date", "RegExp", "Error", "Promise", "Map", "Set", "WeakMap", "WeakSet", "JSON", "Math", "parseInt", "parseFloat", "isNaN", "isFinite", "encodeURI", "decodeURI", "encodeURIComponent", "decodeURIComponent"]);
  for (let r of Object.keys(e)) if (!t.has(r)) try {
    let t = e[r];
    ("object" == typeof t || "function" == typeof t) && t && t instanceof e.Object && (e[r] = null);
  } catch (e) {}
}
let u = um({
  readyForMessages: !1
}, (e, t) => {
  switch (t.type) {
    case 0:
      {
        c(e.avWindow);
        let r = function (e, t, r) {
          if ("" === t) {
            e(F.enqueue({
              message: _$$t("slides.presenter_view.unknown_error"),
              error: !0
            }));
            return;
          }
          if (!r) {
            e(F.enqueue({
              message: _$$t("slides.presenter_view.network_error"),
              error: !0
            }));
            return;
          }
          let l = t.split("/")[4];
          let d = `audience-view-${l}`;
          new URL(t);
          let c = .8 * window.screen.availHeight;
          let p = FJ(t, d, `height=${c},width=${16 * c / 9},left=0,top=0,popup=yes`);
          if (null === p) {
            let i = {
              text: _$$t("slides.presenter_view.open_popup"),
              action: () => {
                zl.set(u, {
                  type: 0,
                  dispatch: e,
                  url: t,
                  isOnline: r
                });
              }
            };
            e(F.enqueue({
              message: _$$t("slides.presenter_view.pop_up_error"),
              error: !0,
              button: i
            }));
            zl.set(u, {
              type: 2
            });
          } else e(F.enqueue({
            icon: zX.NOTES_ON_RECTANGLE,
            message: _$$t("slides.presenter_view.visual_bells.opened_audience_view_in_separate_window")
          }));
          return p;
        }(t.dispatch, t.url, t.isOnline);
        if (r) return {
          avWindow: r,
          readyForMessages: !1
        };
        return {
          readyForMessages: !1
        };
      }
    case 1:
      if (e.avWindow) return {
        avWindow: e.avWindow,
        readyForMessages: !0
      };
      return {
        readyForMessages: !1
      };
    case 3:
      return {
        avWindow: t.window,
        readyForMessages: !0
      };
    case 2:
      c(e.avWindow);
      return {
        readyForMessages: !1
      };
  }
});
let p = Wh(() => eU(new Set()));
Wh(() => eU(e => e(p), (e, t, r) => {
  let n = e(p);
  r && t(p, new Set([...n, r]));
}));