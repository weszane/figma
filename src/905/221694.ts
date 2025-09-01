import { eU } from "../figma_app/27355";
import { bt } from "../905/270322";
let a = bt(e => e.hubFiles);
let $$s0 = eU(e => {
  let t = e(a);
  let i = {};
  for (let e of Object.values(t)) e.library_key && (i[e.library_key] = e);
  return i;
});
export const O = $$s0;