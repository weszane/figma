import { getFeatureFlags } from "../905/601108";
import { desktopAPIInstance } from "../figma_app/876459";
let $$a0 = {
  getFeatureFlags: () => getFeatureFlags(),
  desktopAppGetAPIVersion: () => desktopAPIInstance ? desktopAPIInstance.getVersion() : 0
};
let s = {};
export function $$o2(e, t) {
  s[e] = t;
}
export function $$l1(e) {
  let t = s[e];
  t ? t() : console.warn(`The binary ${e} hasn't been loaded yet; nothing to refresh`);
}
export const LO = $$a0;
export const f_ = $$l1;
export const vw = $$o2;