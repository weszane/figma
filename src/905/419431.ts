import { pM } from "../905/39567";
let r = new Map();
export function $$a1(e) {
  e.forEach((e, t) => {
    r.set(t, e);
  });
}
export async function $$s0(e) {
  if (!r.has(e)) {
    console.error(`Asset ${e} not found in assets map`);
    return Error(`Asset ${e} not found`);
  }
  let t = r.get(e);
  if (!t) throw Error(`Blob for asset ${e} is undefined`);
  return new Uint8Array(await t.arrayBuffer());
}
export let $$o2 = `http://localhost:${pM}/assets`;
export const LP = $$s0;
export const Zw = $$a1;
export const fJ = $$o2;