import { Gt } from "../905/275640";
export function $$r1() {
  let e = Gt("numSelectedByType");
  return !!(e && (e.FRAME || e.INSTANCE || e.SYMBOL));
}
export function $$a0(e) {
  return Object.keys(e.sceneGraphSelection);
}
export const Cy = $$a0;
export const m = $$r1;