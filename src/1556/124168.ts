import { d4 } from "../vendor/514228";
export function $$l1(e) {
  return !e?.profile?.job_title || !e?.profile?.images;
}
export function $$o0(e) {
  let t = $$l1(e);
  let n = d4(e => e.userFlags?.seen_profile);
  return t && !n;
}
export const K = $$o0;
export const w = $$l1;