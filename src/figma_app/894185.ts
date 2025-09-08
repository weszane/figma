import { notifyFontLoadingState } from "../905/426868";
export let $$n0;
let $$a = class {
  fontResourceStatusChanged(e, t, r) {
    notifyFontLoadingState(e, t, r);
  }
};
export function $$s1() {
  $$n0 = new $$a();
}
export const S = $$n0;
export const a = $$s1;