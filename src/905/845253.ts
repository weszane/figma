import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { useSelector } from "../vendor/514228";
export function $$r3(e, t) {
  if (!e) return;
  let i = t[e];
  if (i) return i;
}
export function $$a2() {
  return useSelector(({
    currentUserOrgId: e,
    orgById: t
  }) => $$r3(e, t));
}
export function $$s0() {
  return useSelector(e => e.currentUserOrgId);
}
export let $$o1 = createReduxSubscriptionAtomWithState(({
  currentUserOrgId: e
}) => e);
export const dq = $$s0;
export const h0 = $$o1;
export const sZ = $$a2;
export const td = $$r3;