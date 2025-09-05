import { useSelector } from "../vendor/514228";
import { Nfd, lyf } from "../figma_app/763686";
import { T } from "../905/868547";
import { R } from "../905/105002";
let $$o2 = [Nfd.CODE, Nfd.SETTINGS];
let l = [...$$o2.map(e => R(e)), "INSERT"];
export function $$d0() {
  let e = useSelector(e => T(e.progressBarState.mode));
  let t = useSelector(e => e.mirror.appModel.isReadOnly || e.mirror.appModel.topLevelMode === lyf.HISTORY);
  return {
    fileLoading: e,
    readOnlyUser: e ? void 0 : t
  };
}
export function $$c1(e) {
  let {
    fileLoading,
    readOnlyUser
  } = $$d0();
  return !!fileLoading || !!readOnlyUser && l.includes(e.toUpperCase());
}
export const Sn = $$d0;
export const hM = $$c1;
export const ou = $$o2;