import { useState, useEffect } from "react";
import { eU, zl } from "../figma_app/27355";
import { sx } from "../905/449184";
import { v } from "../905/883621";
import { Ay } from "../figma_app/778880";
import { kF } from "../905/11";
export function $$d3() {
  return !!(Ay.chromeos && window.matchMedia("(display-mode: tabbed)").matches);
}
let c = /^\/(files|idle_timeout|ip_account_restriction|my_plugins|user|org|team)(\/.*)?$/;
export function $$u4(e) {
  return c.test(e) || "/" === e || "" === e;
}
export function $$p1(e) {
  document.body.style.backgroundColor = "#2c2c2c";
}
export let $$_0 = eU(null);
export function $$h2() {
  m();
  Ay.chromeos && Ay.chrome && (window.matchMedia("(display-mode: tabbed)").addEventListener("change", () => {
    $$d3() && ($$p1("dark"), m());
  }), window.addEventListener("appinstalled", () => {
    sx("chrome_os_app_installed");
  }), window.addEventListener("beforeinstallprompt", e => {
    zl.set($$_0, e);
  }));
}
function m() {
  let e = $$d3();
  kF("chrome_os_app", e);
  e && v({
    browser_name: "Figma ChromeOS App"
  });
}
export function $$g6() {
  let [e, t] = useState($$d3());
  useEffect(() => {
    if (!Ay.chromeos || !Ay.chrome) return;
    let e = () => t($$d3());
    let r = window.matchMedia("(display-mode: tabbed)");
    r.addEventListener("change", e);
    return () => r.removeEventListener("change", e);
  }, []);
  return e;
}
let f = new Set(["BrowserRefresh", "BrowserBack", "BrowserForward", "ZoomToggle", "PrintScreen", "BrightnessUp", "BrightnessDown", "MediaPlayPause", "AudioVolumeMute", "AudioVolumeUp", "AudioVolumeDown", "F4", "Unidentified"]);
function E(e) {
  f.has(e.key) && e.stopPropagation();
}
export function $$y5() {
  let e = $$g6();
  useEffect(() => {
    if (e) {
      document.addEventListener("keydown", E, !0);
      return () => document.removeEventListener("keydown", E, !0);
    }
  }, [e]);
}
export const Bb = $$_0;
export const Fe = $$p1;
export const GH = $$h2;
export const ce = $$d3;
export const cm = $$u4;
export const fp = $$y5;
export const lH = $$g6;