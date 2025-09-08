import { HandoffBindingsCpp } from "../figma_app/763686";
export let $$n3;
let a = [];
export function $$s0(e) {
  a.push(e);
  a.length && HandoffBindingsCpp.setIsNodeChangeCallbackRegistered(!0);
}
export function $$o2(e) {
  (a = a.filter(t => t !== e)).length || HandoffBindingsCpp.setIsNodeChangeCallbackRegistered(!1);
}
export function $$l1() {
  $$n3 = {
    nodeChange: e => {
      for (let t of a) t(e);
    }
  };
}
export const BT = $$s0;
export const Ju = $$l1;
export const q$ = $$o2;
export const rS = $$n3;