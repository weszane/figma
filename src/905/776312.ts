import { localStorageRef } from "../905/657224";
import { setBrowserViewBarModeOptions, setBrowserViewBarSortOptions } from "../905/34809";
import { hydrateFileBrowser } from "../905/929976";
import { P } from "../905/77553";
let o = {
  [P.VIEW_MODE]: "view-bar-view-mode-option",
  [P.SORT_MODE]: "view-bar-sort-options"
};
function l(e) {
  let t = localStorageRef && localStorageRef.getItem(e) || "{}";
  try {
    return JSON.parse(t);
  } catch (e) {
    return {};
  }
}
function d(e, t) {
  if (localStorageRef) try {
    let i = JSON.stringify(t);
    localStorageRef.setItem(e, i);
  } catch (e) {}
  return t;
}
export function $$c1(e = {}, t) {
  if (hydrateFileBrowser.matches(t)) return l(o[P.VIEW_MODE]);
  if (setBrowserViewBarModeOptions.matches(t)) {
    let i = {
      ...e,
      [t.payload.viewId]: t.payload.viewMode
    };
    return d(o[P.VIEW_MODE], i);
  }
  return e;
}
export function $$u0(e = {}, t) {
  if (hydrateFileBrowser.matches(t)) return l(o[P.SORT_MODE]);
  if (setBrowserViewBarSortOptions.matches(t)) {
    let i = {
      ...e,
      [t.payload.viewId]: t.payload.sortMode
    };
    return d(o[P.SORT_MODE], i);
  }
  return e;
}
export function $$p2(e, t, i) {
  return t[e] ?? i;
}
export const pw = $$u0;
export const q5 = $$c1;
export const y2 = $$p2;