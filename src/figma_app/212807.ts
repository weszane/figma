import { d4, bN } from "../vendor/514228";
import { Pq, Pe } from "../figma_app/12796";
import { getPermissionsState } from "../figma_app/642025";
export function $$s1() {
  return d4(getPermissionsState, bN);
}
export function $$o0() {
  return d4(e => Pq({
    copyExportRestrictedArgs: e.openFile
  }));
}
export function $$l2() {
  return d4(e => !!e.openFile && Pe(e.openFile));
}
export const AF = $$o0;
export const FC = $$s1;
export const h = $$l2;