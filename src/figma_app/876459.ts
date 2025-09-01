import { OpenTarget } from "../905/380844";
import { v } from "../905/883621";
import { Ay } from "../figma_app/778880";
import { XM } from "../905/11";
import { E } from "../905/55574";
import { d as _$$d } from "../905/698995";
import { x5, JN } from "../figma_app/369803";
let $$c5 = function () {
  let e = window.__figmaDesktop;
  delete window.__figmaDesktop;
  return e ? new _$$d(e) : null;
}();
let $$u7 = function () {
  let e = window.__figmaDesktopGetPopoutAPI?.();
  e?.lockAPI();
  return e ? new E(e) : null;
}();
let $$p3 = !!navigator.userAgent.match(/Figma\//);
let $$_2 = window.bellFeedAPI ? window.bellFeedAPI : null;
export function $$h1(e) {
  return window.bellFeedAPI && null != window.bellFeedAPI.version && window.bellFeedAPI.version >= e ? window.bellFeedAPI : null;
}
let m = $$c5 || $$u7;
m && !navigator.userAgent.match(/figma-linux/) && (v({
  browser_name: "Figma Desktop",
  desktop_channel: m.beta ? "beta" : "stable",
  desktop_version: m.getInformationalVersion(),
  desktop_client_id: m.getClientID(),
  os_version: m.getOSVersion()
}), XM("browser", {
  name: "Desktop",
  version: m.getInformationalVersion()
}));
let g = $$h1(8);
export function $$f0() {
  let e = x5($$c5?.getInformationalVersion());
  return e.status === JN.DEPRECATED ? e.date : null;
}
export function $$E8() {
  return x5($$c5?.getInformationalVersion()).status === JN.DISABLED;
}
export function $$y6() {
  if ($$c5 && Ay.mac) {
    let [e, t] = `${Ay.osversion}`.split(".");
    return 10 > +e || 10 == +e && 12 > +t;
  }
  return !1;
}
export function $$b9() {
  return !!$$c5;
}
g && v({
  browser_name: "Figma Desktop",
  desktop_version: g.desktopAppVersion,
  os_version: g.osVersion
});
export const GN = $$f0;
export const O_ = $$h1;
export const S8 = $$_2;
export const Zy = $$p3;
export const aw = OpenTarget;
export const eD = $$c5;
export const fU = $$y6;
export const hX = $$u7;
export const hl = $$E8;
export const y3 = $$b9;