import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import a from "../vendor/197638";
import { s9 } from "../905/194389";
import { getInitialOptions } from "../figma_app/169182";
import { BrowserInfo } from "../figma_app/778880";
import { reportError } from "../905/11";
import { logInfo } from "../905/714362";
import { Dm } from "../figma_app/8833";
import { D } from "../905/347702";
import { isInteractionPathCheck } from "../figma_app/897289";
var s = a;
export class $$m3 extends s9 {
  constructor(e) {
    super("Script load error.", e);
  }
}
let g = D((e, t, r = window.document) => {
  let n = r.createElement("script");
  e && e.length > 0 && (n.id = e);
  n.type = "text/javascript";
  n.async = !0;
  n.setAttribute("nonce", getInitialOptions().csp_nonce);
  t && (n.crossOrigin = "anonymous");
  return n;
});
export function $$f4(e, t) {
  let r = t?.window?.document || window.document;
  e || (console.error("bad src"), reportError(_$$e.CLIENT_PLATFORM, Error("bad loadScript src")));
  let i = t?.id;
  let a = !t || !1 !== t.cors;
  let s = !t || !1 !== t.retry;
  let l = t?.waitForCondition;
  let d = Error("original async stack");
  let p = new Promise((t, n) => {
    let c = async r => {
      if (void 0 !== l) try {
        await new Promise((e, t) => {
          let r = 0;
          let n = () => {
            if (l()) return e();
            ++r < 50 ? scheduler.postTask(n, {
              delay: 100,
              priority: "background"
            }) : t(Error("waitForCondition timed out"));
          };
          n();
        });
      } catch (t) {
        logInfo("loadScript", "waitForCondition timed out", {
          src: e
        });
        n(t);
      }
      t(r);
    };
    let p = g(i, a, r);
    p.onload = c;
    p.onerror = t => {
      let l = e => {
        logInfo("loadScript", "Script load error event", {
          event: e
        });
        n(new $$m3({
          cause: d
        }));
      };
      if (!s) {
        l(t);
        return;
      }
      r.head.removeChild(p);
      let _ = g(i, a, r);
      if (_.onload = c, _.onerror = e => {
        r.head.removeChild(_);
        l(e);
      }, !e) {
        n(new s9("invalid src", {
          cause: d
        }));
        return;
      }
      let h = -1 === e.indexOf("?") ? "?" : "&";
      _.src = e + h + "lsRetry=" + Math.random();
      r.head.appendChild(_);
      let f = "string" == typeof t ? t : t.message;
      logInfo("loadScript", "Retrying script load", {
        originalSrc: e,
        retrySrc: _.src,
        initialError: f
      });
    };
    p.src = e;
    r.head.appendChild(p);
  });
  p.catch(t => console.error(`Fetching ${e} failed: ${t.toString()}`));
  return p;
}
export function $$E1() {
  if ((BrowserInfo.safari && Number(BrowserInfo.version) >= 18 && 19 > Number(BrowserInfo.version) || BrowserInfo.ios && BrowserInfo.chrome && Number(BrowserInfo.version) >= 135 && 137 >= Number(BrowserInfo.version) || BrowserInfo.webkit && Number(BrowserInfo.version) >= 135 && 137 >= Number(BrowserInfo.version)) && getFeatureFlags().hook_webkit_text_decoder) {
    let e = g(void 0, !0);
    e.text = `
    try {
      const originalDecode = TextDecoder.prototype.decode
      TextDecoder.prototype.decode = function (input, options = {}) {
        if (!this.bytesSinceDecoderReset) {
          this.bytesSinceDecoderReset = 0
        }
        this.bytesSinceDecoderReset += input.byteLength
        if (this.bytesSinceDecoderReset > 1024 * 1024 * 1024) {
          this.bytesSinceDecoderReset = 0
          this.delegate = new TextDecoder(this.encoding, this.options)
        }
        if (this.delegate) {
          return this.delegate.decode(input, options)
        }
        return originalDecode.call(this, input, options)
      }
    } catch (e) {
      // noop
    }
    `;
    document.head.appendChild(e);
  }
}
function y() {
  let e = !!(navigator.clipboard && navigator.clipboard.read && navigator.clipboard.write);
  let t = window.FigmaMobile;
  return (e || !!t?.readClipboardData) && !isInteractionPathCheck();
}
function b(e, {
  withLineBreaks: t = !1
} = {}) {
  return new Promise((r, n) => {
    let i = document.activeElement;
    let a = !1;
    try {
      e.length > 104857.6 && console.warn("string too long for copyText usage watchdog timer of 1s.  formatting will take too long");
      let r = t ? document.createElement("textarea") : document.createElement("input");
      r.style.cssText = "position: fixed; top: -100px";
      r.classList.add(Dm);
      document.body.appendChild(r);
      r.value = e;
      r.focus();
      r.select();
      (a = document.execCommand("copy")) || !BrowserInfo.msedge || (a = !0);
      r.remove();
    } finally {
      i?.focus();
    }
    a ? r() : n();
  });
}
export async function $$T0(e, t) {
  if (y()) try {
    await function (e, {
      withLineBreaks: t = !1
    } = {}) {
      t || (e = e.replace(/$\s?/gm, ""));
      return navigator.clipboard.writeText(e);
    }(e, t);
    return;
  } catch { }
  return b(e, t);
}
function I(e, t) {
  let r;
  let n = new Blob([e], {
    type: "text/html"
  });
  if (void 0 === t) {
    let t = document.createElement("div");
    t.innerHTML = s().sanitize(e);
    r = new Blob([t.innerText], {
      type: "text/plain"
    });
  } else r = new Blob([t], {
    type: "text/plain"
  });
  let i = new ClipboardItem({
    "text/plain": r,
    "text/html": n
  });
  return navigator.clipboard.write([i]);
}
export async function $$S2(e) {
  if (y()) try {
    await I(e);
    return;
  } catch { }
  return new Promise((t, r) => {
    let n = document.createElement("div");
    n.style.cssText = "position: fixed; transform: translateX(-200%)";
    n.innerHTML = s().sanitize(e);
    n.classList.add(Dm);
    document.body.appendChild(n);
    try {
      let e = window.getSelection();
      if (e) {
        let i = document.createRange();
        i.selectNodeContents(n);
        e.removeAllRanges();
        e.addRange(i);
        document.execCommand("copy") ? t() : r();
      } else r();
    } catch {
      r();
    } finally {
      n.remove();
    }
  });
}
export async function $$v5(e, t) {
  if (y()) try {
    await I(e, t);
    return;
  } catch { }
  return b(t);
}
export const Dk = $$T0;
export const RM = $$E1;
export const Xt = $$S2;
export const gX = $$m3;
export const k0 = $$f4;
export const wY = $$v5;
