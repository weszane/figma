import { fZb } from "../figma_app/763686";
import { _m } from "../905/709095";
import { t1, y7, Sp } from "../905/609396";
export let $$s2 = new t1({
  bufferSize: 400
});
y7.installCallbacks();
let $$o3 = y7.global();
let $$l1 = new Sp();
window.FIGMA_appTimer = $$s2;
window.FIGMA_opsTimer = $$o3;
window.FIGMA_distribution = $$l1;
window.FIGMA_start_react_profile = () => fZb?.startProfile(_m, 1);
window.FIGMA_stop_react_profile = () => fZb?.stopProfile(_m, 1);
export let $$d0 = new Set(["react-render", "frame", "trigger-action", "symbol-updater", "style-updater", "synthesize-all-pending-changes", "scene-render", "render-tree-generation", "fullscreen-handle-event", "comments-render", "react", "update-selection-properties"]);
export const Q4 = $$d0;
export const Vq = $$l1;
export const rH = $$s2;
export const sn = $$o3;