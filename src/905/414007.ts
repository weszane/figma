import { getCookieValue, getStorage } from "../905/657224";
import { Ay } from "../figma_app/778880";
export let $$a2 = "ajs_anonymous_id";
class s {
  get(e) {
    let t = getCookieValue(document.cookie, e);
    if (null === t) return null;
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  }
  set(e, t, i) {
    let n = encodeURI(JSON.stringify(t));
    let s = new Date(Date.now() + 2592e6).toUTCString();
    let o = `${e}=${n}; path=/;`;
    if (i?.maxAge ? o += ` max-age=${i?.maxAge};` : o += ` expires=${s};`, e === $$a2) {
      let e = location.hostname.split(".");
      o += ` domain=.${e.slice(e.length - 2, e.length).join(".")};`;
    }
    let l = "https:" === location.protocol;
    let [d, c] = `${Ay.osversion}`.split(".");
    if (!(i?.sameSite === "none" && Ay.safari && 13 > +Ay.version && Ay.mac && 11 > +d && 15 > +c)) {
      let e = i?.sameSite || "lax";
      l || "none" !== e || (e = "lax");
      o += ` samesite=${e};`;
    }
    i?.path && (o += ` path=${i.path};`);
    l && (o += " secure;");
    document.cookie = o;
  }
  delete(e, {
    includeDotDomainPrefix: t = !1
  } = {}) {
    let i = `${e}=; Max-Age=0; path=/;`;
    t && (i += `domain=.${window.location.hostname}`);
    document.cookie = i;
  }
}
export function $$o0() {
  if (navigator.cookieEnabled) try {
    document.cookie;
    return new s();
  } catch (e) {}
  return null;
}
export function $$l1() {
  return $$o0() || getStorage();
}
export const OZ = $$o0;
export const UG = $$l1;
export const nL = $$a2;