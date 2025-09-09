import { formatList } from "../figma_app/930338";
export function $$i0(e) {
  if (!e) return "";
  let t = e.map(e => e.handle || e.name || "").filter(e => !!e);
  return formatList(t);
}
export function $$a1() {
  return !!window.INITIAL_OPTIONS?.user_data;
}
export const e = $$i0;
export const w = $$a1;