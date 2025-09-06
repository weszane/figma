import { EventEmitter } from "../905/690073";
export let $$i3 = new EventEmitter("action");
export function $$a2(e) {
  $$i3.trigger("action", e);
}
export let $$s0 = new EventEmitter("action");
export function $$o1(e, t) {
  $$s0.trigger("action", [e, t]);
}
export const $K = $$s0;
export const U2 = $$o1;
export const mr = $$a2;
export const oW = $$i3;