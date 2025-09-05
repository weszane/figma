import { localStorageRef } from "../905/657224";
import { FFileType } from "../figma_app/191312";
let a = "last-used-editor-type";
export function $$s1() {
  let e = localStorageRef?.getItem(a);
  if (e && Object.values(FFileType).includes(e)) return e;
}
export function $$o0(e) {
  localStorageRef?.setItem(a, e);
}
export const b = $$o0;
export const r = $$s1;