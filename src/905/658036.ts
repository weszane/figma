import { isMac } from "../905/881471";
export function $$r1(e) {
  return e.altKey || e.metaKey || e.shiftKey || e.ctrlKey;
}
export function $$a0(e) {
  return isMac ? e.metaKey : e.ctrlKey;
}
export const F = $$a0;
export const y = $$r1;