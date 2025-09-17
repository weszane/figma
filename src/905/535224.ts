import { getFeatureFlags } from "../905/601108";
import { isCrossDomain, isIframe, appendSearchParams } from "../905/508367";
import { desktopAPIInstance } from "../figma_app/876459";
import { customHistory } from "../905/612521";
import { getInitialOptions } from "../figma_app/169182";
import { BrowserInfo } from "../figma_app/778880";
import { XHR } from "../905/910117";
import { m as _$$m } from "../905/575846";
import { trackEventAnalytics } from "../905/449184";
async function c(e, t, i, n) {
  if (BrowserInfo.blink && window.WebAssembly || BrowserInfo.firefox && +BrowserInfo.version >= 56) {
    let t = `http://127.0.0.1:${e}`;
    let {
      data
    } = await XHR({
      method: XHR.Methods.GET,
      url: `${t}${i}`,
      headers: {
        "Content-Type": "text/plain"
      },
      ...n
    });
    return {
      data,
      origin: t
    };
  }
  let r = `https://figmadaemon.com:${t}`;
  let {
    data
  } = await XHR({
    method: XHR.Methods.GET,
    url: `${r}${i}`,
    headers: {
      "Content-Type": "text/plain"
    },
    ...n
  });
  return {
    data,
    origin: r
  };
}
async function u(e, t, i, n, r) {
  if (BrowserInfo.blink && window.WebAssembly || BrowserInfo.firefox && +BrowserInfo.version >= 56) {
    let t = `http://127.0.0.1:${e}`;
    let {
      data
    } = await XHR({
      method: XHR.Methods.POST,
      url: `${t}${i}`,
      headers: {
        "Content-Type": r
      },
      data: n
    });
    return {
      data,
      origin: t
    };
  }
  let a = `https://figmadaemon.com:${t}`;
  let {
    data
  } = await XHR({
    method: XHR.Methods.POST,
    url: `${a}${i}`,
    headers: {
      "Content-Type": r
    },
    data: n
  });
  return {
    data,
    origin: a
  };
}
let h = getInitialOptions().user_data;
let g = h && h.id;
export var $$f0 = (e => (e.DESKTOP_INTERSTITIAL = "desktop_interstitial", e.OOM_MODAL = "oom_modal", e.OPEN_IN_DESKTOP_MODAL = "open_in_desktop_modal", e.UNIVERSAL_POSTING_MODAL = "universal_posting_modal", e.COMMUNITY_INTERSTITIAL = "community_interstitial", e.FULLSCREEN_MENU = "fullscreen_menu", e))($$f0 || {});
let _ = () => BrowserInfo.mac && !BrowserInfo.isIpad || BrowserInfo.windows;
export function $$A4(e, t) {
  return isCrossDomain() || !_() ? Promise.reject() : c(44950, 44960, `/figma${e}`, t);
}
export function $$y3(e, t, i) {
  return isIframe() || !_() ? Promise.reject() : u(44950, 44960, `/figma${e}`, t, i);
}
export async function $$b1(e) {
  if (desktopAPIInstance) return !1;
  try {
    let t = new URL(e).origin;
    let {
      data
    } = await $$A4(`/desktop/can-open-url?userID=${g}&url=${t}`);
    if ("boolean" == typeof data.canOpen) return data.canOpen;
  } catch (e) {}
  return !1;
}
export async function $$v6(e, t) {
  if (desktopAPIInstance) return !1;
  try {
    let i = getInitialOptions().editing_file?.editor_type;
    if (g) {
      let t = {
        fuid: g
      };
      e === location.href && i && (t.editor_type = i);
      e = appendSearchParams(e, t);
    }
    let {
      data
    } = await $$A4(`/desktop/open-url?userID=${g}&url=${encodeURIComponent(e)}`);
    if ("boolean" == typeof data.opened) {
      trackEventAnalytics("Open Url In Desktop", {
        opened: data.opened,
        source: t,
        editorType: i
      });
      return data.opened;
    }
  } catch (e) {}
  return !1;
}
export function $$I5() {
  $$E8() && customHistory.redirect("/settings#fonts");
}
export function $$E8() {
  return !!_() && !desktopAPIInstance && !_$$m;
}
export function $$x2() {
  return $$A4("/version");
}
export function $$S7(e) {
  let t = "/font-files?";
  void 0 !== e && (t += `freetype_minimum_api_version=${e}&`);
  getFeatureFlags().desktop_isolate_metadata && (t += "isolate=true&");
  return $$A4(t);
}
export const B3 = $$f0;
export const oU = $$b1;
export const P6 = $$x2;
export const vH = $$y3;
export const rO = $$A4;
export const dm = $$I5;
export const Sr = $$v6;
export const xQ = $$S7;
export const K4 = $$E8;