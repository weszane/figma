import { l } from "../905/716947";
import { blake2bHex } from "../vendor/804079";
let a = new Map();
export function $$s0(e) {
  if (a.has(e)) return a.get(e);
  let t = l("lk-" + blake2bHex(e));
  a.set(e, t);
  return t;
}
export const $ = $$s0;