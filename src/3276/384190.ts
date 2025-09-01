import { KH } from "../905/81982";
let o = new KH({
  keys: ["name"],
  threshold: .1
});
export function $$a0(e, t) {
  o.set(t);
  return o.search(e);
}
export const n = $$a0;