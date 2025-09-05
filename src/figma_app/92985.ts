import { useSelector } from "../vendor/514228";
import { IT } from "../figma_app/566371";
import { gl } from "../905/216495";
import { Eb } from "../figma_app/43951";
import { dT } from "../figma_app/889655";
import { $ } from "../905/330495";
export function $$d0() {
  let e = useSelector(dT);
  let {
    backingSymbolGUID,
    singleBackingSymbol,
    isBackingSymbolShared,
    backingStateGroupGUID,
    singleBackingStateGroup,
    isBackingStateGroupShared
  } = $(e);
  let _ = singleBackingSymbol?.sourceLibraryKey ?? singleBackingStateGroup?.sourceLibraryKey ?? "";
  let [h] = IT(Eb({
    libraryKey: _
  }));
  return null != backingSymbolGUID && !gl(backingSymbolGUID) && isBackingSymbolShared || null != backingStateGroupGUID && !gl(singleBackingStateGroup) && isBackingStateGroupShared ? h : null;
}
export function $$c2() {
  let e = useSelector(dT);
  let {
    isBackingSymbolShared,
    singleBackingSymbol,
    isBackingStateGroupShared,
    singleBackingStateGroup
  } = $(e);
  return singleBackingSymbol ? !isBackingSymbolShared : !!singleBackingStateGroup && !isBackingStateGroupShared;
}
export function $$u3(e) {
  return !!e && !!e?.hubFile;
}
export function $$p1(e) {
  if (!e) return !1;
  let t = (e.file?.library?.approvedLibraries ?? []).length > 0;
  return !$$u3(e) && t;
}
export const Yj = $$d0;
export const _F = $$p1;
export const kt = $$c2;
export const xA = $$u3;