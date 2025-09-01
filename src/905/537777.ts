import { gr } from "../figma_app/243058";
export function $$r3(e) {
  let t = gr.fromString(e);
  return t ? gr.toKiwi(t) : null;
}
export function $$a1(e) {
  let t = gr.fromKiwi(e);
  return t ? gr.toString(t) : "<invalid>";
}
export function $$s4(e) {
  return $$a1({
    guid: e
  });
}
export function $$o0(e, t) {
  return gr.toString(gr.fromRef({
    key: e,
    version: t
  }));
}
export function $$l2(e) {
  let t = gr.fromString(e);
  return !!t && gr.isValid(t);
}
export const Hc = $$o0;
export const dI = $$a1;
export const fn = $$l2;
export const sH = $$r3;
export const wL = $$s4;