import { Y5 } from "../figma_app/455680";
import { $$ } from "../figma_app/62612";
export let $$a1 = 2.6;
export function $$s2(e) {
  let t = Y5.getViewportInfo();
  return $$(t, {
    x: e.left - t.x,
    y: e.top - t.y
  });
}
export function $$o0(e) {
  let t = Y5.getViewportInfo();
  return $$(t, {
    x: e.x - t.x,
    y: e.y - t.y
  });
}
export const C2 = $$o0;
export const P = $$a1;
export const zG = $$s2;