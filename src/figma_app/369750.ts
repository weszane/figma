import { getFeatureFlags } from "../905/601108";
import { cn } from "../figma_app/85384";
export function $$a3(e) {
  return !!e.find(e => e.event?.interactionType === "ON_CLICK" && e.actions?.find(e => "NAVIGATE" === e.navigationType || "NONE" === e.connectionType || "URL" === e.connectionType || cn(e))) ?? !1;
}
export function $$s2(e) {
  return !!e.find(e => e.event?.interactionType === "ON_CLICK" && e.actions?.find(e => "INTERNAL_NODE" === e.connectionType || "URL" === e.connectionType || cn(e))) ?? !1;
}
export function $$o7(e) {
  return e.some(e => e.event?.interactionType === "ON_CLICK" && e.actions?.length === 1 && (e.actions[0]?.connectionType === "URL" || e.actions[0]?.navigationType === "NAVIGATE" || e.actions[0]?.connectionType === "NONE"));
}
export function $$l4(e) {
  return !!getFeatureFlags().sts_links_v2 && e.some(e => e.actions?.some(e => cn(e)));
}
let $$d0 = 1;
let $$c5 = 1;
let $$u1 = 0;
let $$p6 = 0;
export const $Y = $$d0;
export const Q5 = $$u1;
export const ol = $$s2;
export const p4 = $$a3;
export const pL = $$l4;
export const q0 = $$c5;
export const rb = $$p6;
export const zL = $$o7;