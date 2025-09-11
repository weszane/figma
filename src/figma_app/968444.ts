import { FullscreenMode, Fullscreen } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { localStorageRef } from "../905/657224";
import { browserCapabilities } from "../905/409121";
import { dZ, v7 } from "../figma_app/475303";
let l = "customKeyboardShortcuts";
let $$d3 = new Map(Object.entries(FullscreenMode).map(([e, t]) => [e, t]));
let c = new Map(Object.entries(FullscreenMode).map(([e, t]) => [t, e]));
function u(e, t, r) {
  let n = c.get(t);
  let i = Object.entries(e).find(([e, t]) => t.type === n && t.action === r);
  return i?.[0];
}
export function $$p1(e, t, r) {
  if (!getFeatureFlags().ce_custom_keyboard_shortcuts) return;
  let d = h();
  let p = dZ.get(v7()) || "UNKNOWN";
  let _ = browserCapabilities.isApple() ? "mac" : "!mac";
  let m = c.get(e);
  let g = d[p]?.[_] ?? {};
  let f = u(g, e, t);
  f && delete g[f];
  d[p] = {
    ...d[p],
    [_]: {
      ...g,
      [r]: {
        type: m,
        action: t
      }
    }
  };
  console.log("[CustomKeyboardShortcuts] saving shortcuts to local storage", {
    typeString: m,
    action: t,
    shortcutStr: r,
    shortcuts: d
  });
  localStorageRef?.setItem(l, JSON.stringify(d));
  Fullscreen.reloadKeyboardShortcuts();
}
export function $$_0(e, t) {
  if (!getFeatureFlags().ce_custom_keyboard_shortcuts) return;
  let r = h();
  let d = dZ.get(v7()) || "UNKNOWN";
  let p = browserCapabilities.isApple() ? "mac" : "!mac";
  let _ = c.get(e);
  let m = r[d]?.[p] ?? {};
  let g = u(m, e, t);
  if (g) delete m[g];else {
    console.error("[CustomKeyboardShortcuts] could not find existing shortcut", {
      typeString: _,
      action: t,
      shortcuts: r
    });
    return;
  }
  r[d] = {
    ...r[d],
    [p]: {
      ...m
    }
  };
  localStorageRef?.setItem(l, JSON.stringify(r));
  Fullscreen.reloadKeyboardShortcuts();
}
function h() {
  let e;
  if (!localStorageRef) return {};
  let t = localStorageRef.getItem(l);
  if (!t) return {};
  try {
    e = JSON.parse(t);
  } catch (e) {
    console.error("[Custom Keyboard Shortcuts] Failed to parse from local storage", e);
  }
  return e;
}
export function $$m2() {
  let e = dZ.get(v7()) || "UNKNOWN";
  let t = browserCapabilities.isApple() ? "mac" : "!mac";
  let r = h() ?? {};
  return r[e]?.[t] ?? {};
}
export const C4 = $$_0;
export const L3 = $$p1;
export const Uc = $$m2;
export const iZ = $$d3;