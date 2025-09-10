import { useSelector } from "react-redux";
import { i } from "src/905/890459";
export function $$a0(e) {
  let {
    currentUserOrgId
  } = e;
  currentUserOrgId || i(e);
  return `/${currentUserOrgId}`;
}
export function $$s1() {
  return useSelector($$a0);
}
export const j = $$a0;
export const q = $$s1;
