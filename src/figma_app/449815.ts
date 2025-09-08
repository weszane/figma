import { YesNo } from "../figma_app/763686";
let i = [];
export function $$a1(e) {
  i.push(e);
  return () => {
    i = i.filter(t => t !== e);
  };
}
export function $$s0(e) {
  for (let t of i) t(e === YesNo.YES);
}
export const U = $$s0;
export const k = $$a1;