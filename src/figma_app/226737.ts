import { isValidValue } from "../905/216495";
import { useSelectionProperty } from "../905/275640";
import { useDeepEqualSceneValue } from "../figma_app/167249";
export function $$s0() {
  return useDeepEqualSceneValue(e => e.getRoot().slideThemeId);
}
export function $$o2() {
  let [e] = useSelectionProperty("themeId");
  return e;
}
export function $$l1() {
  let e = $$o2();
  let t = $$s0();
  return e && isValidValue(e) ? e : t;
}
export const el = $$s0;
export const s1 = $$l1;
export const sW = $$o2;