import { d4 } from "../vendor/514228";
import { i } from "../905/890459";
export function $$a0(e) {
  let {
    currentUserOrgId
  } = e;
  currentUserOrgId || i(e);
  return `/${currentUserOrgId}`;
}
export function $$s1() {
  return d4($$a0);
}
export const j = $$a0;
export const q = $$s1;