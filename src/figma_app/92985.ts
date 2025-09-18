import { useSelector } from "react-redux";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { isInvalidValue } from "../905/216495";
import { LibraryInfo } from "../figma_app/43951";
import { selectInstanceKeys } from "../figma_app/889655";
import { $ } from "../905/330495";
export function $$d0() {
  let e = useSelector(selectInstanceKeys);
  let {
    backingSymbolGUID,
    singleBackingSymbol,
    isBackingSymbolShared,
    backingStateGroupGUID,
    singleBackingStateGroup,
    isBackingStateGroupShared
  } = $(e);
  let _ = singleBackingSymbol?.sourceLibraryKey ?? singleBackingStateGroup?.sourceLibraryKey ?? "";
  let [h] = setupResourceAtomHandler(LibraryInfo({
    libraryKey: _
  }));
  return null != backingSymbolGUID && !isInvalidValue(backingSymbolGUID) && isBackingSymbolShared || null != backingStateGroupGUID && !isInvalidValue(singleBackingStateGroup) && isBackingStateGroupShared ? h : null;
}
export function $$c2() {
  let e = useSelector(selectInstanceKeys);
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