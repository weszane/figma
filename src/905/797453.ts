import { setGlobalTags, clearGlobalTags } from "../905/760074";
import { CPPEventType } from "../905/535806";
export let $$n0;
class s {
  setBranchingSentryTags() {
    setGlobalTags(CPPEventType.CPP, null);
  }
  clearBranchingSentryTags() {
    clearGlobalTags();
  }
}
export function $$o1() {
  $$n0 = new s();
}
export const B = $$n0;
export const x = $$o1;