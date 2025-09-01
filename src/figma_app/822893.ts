import { isPointInRect } from "../905/736624";
import { Y5 } from "../figma_app/455680";
export function $$a0() {
  return Array.from(document.querySelectorAll('[data-cancel-insertable-resource-drag-and-drop="true"]')).map(e => e.getBoundingClientRect());
}
export function $$s1(e, t) {
  return isPointInRect(Y5.getViewportInfo(), e) && !t.some(t => isPointInRect(t, e));
}
export const M = $$a0;
export const Y = $$s1;