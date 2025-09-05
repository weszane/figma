import { getStorage } from "../905/657224";
let i = "CHECK_OSS_SALES_EXPERIMENT_LOCAL_KEY";
let a = "CHECKED_OSS_SALES_EXPERIMENT_LOCAL_KEY";
export function $$s0(e) {
  let t = getStorage();
  t.get(a) || t.set(i, e);
}
export function $$o2() {
  getStorage().set(a, !0);
}
export function $$l1(e) {
  let t = getStorage();
  return !t.get(a) && e === t.get(i);
}
export const Lb = $$s0;
export const nN = $$l1;
export const wj = $$o2;