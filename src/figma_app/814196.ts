import { getFeatureFlags } from "../905/601108";
import { atomStoreManager, useAtomWithSubscription, atom } from "../figma_app/27355";
import { sessionStorageRef, localStorageRef } from "../905/657224";
import { customHistory } from "../905/612521";
import { postUserFlag } from "../905/985254";
import { FFileType } from "../figma_app/191312";
import { UserPreferences } from "../figma_app/43951";
import { getNormalizedPath } from "../figma_app/193867";
import { e as _$$e } from "../905/859735";
import { GZ } from "../905/508367";
import { desktopAPIInstance } from "../figma_app/876459";
import { debugState } from "../905/407919";
import { getInitialOptions } from "../figma_app/169182";
let g = (() => {
  if (sessionStorageRef) {
    let e = "initialPathName";
    if (sessionStorageRef[e]) return sessionStorageRef[e];
    sessionStorageRef[e] = customHistory.location.pathname;
  }
  return customHistory.location.pathname;
})();
export function $$f2() {
  return !GZ() && !desktopAPIInstance && !!((getInitialOptions().editing_file || getInitialOptions().link_password_input) && E(y) || E(b));
}
function E(e) {
  return e(g) && e(customHistory.location.pathname);
}
function y(e) {
  return ["/file/", ...Object.values({
    [FFileType.DESIGN]: "/design/",
    [FFileType.WHITEBOARD]: "/board/",
    [FFileType.SLIDES]: "/slides/",
    [FFileType.SITES]: "/site/",
    [FFileType.COOPER]: "/buzz/",
    [FFileType.FIGMAKE]: "/make/"
  })].some(t => e.startsWith(t));
}
function b(e) {
  let t = getNormalizedPath(e);
  return t.length >= 4 && "files" === t[1] && "feed-posts" === t[2] && !!t[3];
}
let T = "autoOpenInDesktopApp";
let I = "openInDesktopAppMenuModal";
export function $$S5() {
  return getFeatureFlags().desktop_use_db_auto_open_pref ? atomStoreManager.get(C) : localStorageRef ? localStorageRef[T] : void 0;
}
export function $$v3(e) {
  localStorageRef && (localStorageRef[T] = e);
  getFeatureFlags().desktop_write_auto_open_pref && (_$$e.setPreferenceValue({
    key: "auto_open_in_desktop",
    value: e
  }), debugState.dispatch(postUserFlag({
    user_changed_auto_open_pref: !0
  })));
}
export function $$A0() {
  return localStorageRef ? localStorageRef[I] : void 0;
}
export function $$x1(e) {
  localStorageRef && (localStorageRef[I] = e);
}
export function $$N4() {
  return useAtomWithSubscription(C);
}
let C = atom(e => {
  let t = e(UserPreferences.Query({}));
  let r = getInitialOptions().user_data?.auto_open_in_desktop;
  "loaded" === t.status && t.data?.currentUser?.userPreferences?.status === "loaded" && (r = t.data.currentUser.userPreferences.data?.preferences.auto_open_in_desktop);
  return r;
});
export const W2 = $$A0;
export const _A = $$x1;
export const _p = $$f2;
export const hW = $$v3;
export const ji = $$N4;
export const vn = $$S5;