import { useSelector, shallowEqual } from "../vendor/514228";
import { Pq, Pe } from "../figma_app/12796";
import { getPermissionsState } from "../figma_app/642025";
export function $$s1() {
  return useSelector(getPermissionsState, shallowEqual);
}
export function $$o0() {
  return useSelector(e => Pq({
    copyExportRestrictedArgs: e.openFile
  }));
}
export function $$l2() {
  return useSelector(e => !!e.openFile && Pe(e.openFile));
}
export const AF = $$o0;
export const FC = $$s1;
export const h = $$l2;