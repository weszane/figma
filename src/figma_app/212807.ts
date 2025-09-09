import { useSelector, shallowEqual } from "react-redux";
import { isCopyExportAllowed, isExportRestricted } from "../figma_app/12796";
import { getPermissionsState } from "../figma_app/642025";
export function $$s1() {
  return useSelector(getPermissionsState, shallowEqual);
}
export function $$o0() {
  return useSelector(e => isCopyExportAllowed({
    copyExportRestrictedArgs: e.openFile
  }));
}
export function $$l2() {
  return useSelector(e => !!e.openFile && isExportRestricted(e.openFile));
}
export const AF = $$o0;
export const FC = $$s1;
export const h = $$l2;