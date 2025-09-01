import { O } from "../905/561581";
import { p, V } from "../905/709735";
import { getLocaleFallbacks, getInitialOptions } from "../figma_app/169182";
import { XN, Ay } from "../figma_app/778880";
let o = XN ? "iPadOS" : Ay.osname;
let l = XN ? "0" : Ay.osversion;
function d(e) {
  let t = window.navigator.languages || [];
  return e < t.length ? t[e] : void 0;
}
let c = {
  browser_name: Ay.name,
  browser_version: +Ay.version,
  bundler: "webpack",
  entrypoint_variant: p,
  entrypoint: window.ENTRY_POINT ?? "unknown",
  isAppShell: O(),
  navigatorLanguage1: d(0),
  navigatorLanguage2: d(1),
  navigatorLanguage3: d(2),
  navigatorLanguages: (window.navigator.languages || []).join(","),
  os_name: o,
  os_version: l,
  page_locale: getLocaleFallbacks()[0],
  release_tag: getInitialOptions().release_git_tag,
  release: getInitialOptions().release_manifest_git_commit,
  uiVersion: V
};
export function $$u0() {
  return c;
}
export function $$p1(e) {
  c = {
    ...c,
    ...e
  };
}
export const X = $$u0;
export const v = $$p1;