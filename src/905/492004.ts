import { md } from "../figma_app/27355";
import { bt } from "../905/270322";
import { dV } from "../figma_app/728075";
let s = e => e.toUpperCase().substring(1);
let o = s(dV);
let l = bt(e => e.multiplayer.allUsers);
export function $$d0() {
  let e = md(l);
  if (!e || 0 === e.length) return o;
  let t = e[0];
  return t.color.startsWith("#") ? s(t.color) : o;
}
export const fU = $$d0;