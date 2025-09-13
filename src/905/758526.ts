import { atom } from "../figma_app/27355";
import { currentUserOrgIdAtom } from "../905/845253";
let a = ["1294228696770984111"];
let $$s0 = atom(e => {
  let t = e(currentUserOrgIdAtom);
  return !!t && a.includes(t);
});
export const D = $$s0;