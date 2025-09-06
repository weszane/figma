import { useSelector } from "../vendor/514228";
import { atom } from "../figma_app/27355";
import a from "../vendor/128080";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
var s = a;
let l = e => e.selectedView;
let d = e => e.selectedView.view;
export function $$c4() {
  return useSelector(l);
}
export function $$u6() {
  return useSelector(l, s());
}
export function $$p5() {
  let e = $$c4();
  if ("prototype" !== e.view) throw Error(`Unexpected non-prototype view: ${e.view}`);
  return e;
}
let $$_1 = createReduxSubscriptionAtomWithState(l);
let $$h3 = createReduxSubscriptionAtomWithState(e => e.modalShown);
let $$m7 = atom(e => e($$h3)?.type || null);
let $$g0 = createReduxSubscriptionAtomWithState(e => e.notifications?.[0]?.type ?? null);
export function $$f8() {
  return useSelector(d);
}
export function $$E2() {
  return useSelector(e => "fullscreen" === e.selectedView.view && e.selectedView.fileKey ? e.selectedView.fileKey : null);
}
export const AN = $$g0;
export const OC = $$_1;
export const Td = $$E2;
export const Uc = $$h3;
export const _6 = $$c4;
export const mr = $$p5;
export const tc = $$u6;
export const yF = $$m7;
export const z3 = $$f8;