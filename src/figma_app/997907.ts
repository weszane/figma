import { atomStoreManager } from "../figma_app/27355";
import { QH, h8, Ze } from "../figma_app/27829";
let $$a2 = QH(atomStoreManager, "FileBrowser");
let $$s1 = h8("filebrowser-loading-page", e => {
  e.setAttribute("id", "");
  e.classList.remove("hidden");
  e.classList.remove("fadeOut");
}, e => {
  let t = e.querySelector("#filebrowser-loading-progress-bar");
  if (!t) return;
  let r = t.getAnimations()[0];
  let n = r?.effect?.getComputedTiming().duration;
  r && "number" == typeof n && (r.currentTime = n);
});
export function $$o0() {
  Ze("filebrowser-loading-page");
}
export const bG = $$o0;
export const m1 = $$s1;
export const q_ = $$a2;