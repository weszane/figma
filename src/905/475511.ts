import { eJ, Tq } from "../figma_app/243058";
import { PW } from "../905/497152";
import { oz, nV } from "../905/808701";
export function $$s1(e) {
  let t = oz(PW.CODE_COMPONENT, e);
  if (!t) return null;
  let i = l(e);
  return i ? {
    ...t,
    ...i
  } : null;
}
export function $$o0(e) {
  let t = nV(PW.CODE_COMPONENT, e);
  if (!t) return null;
  let i = l(e);
  return i ? {
    ...t,
    ...i
  } : null;
}
function l(e) {
  if (!e.codeComponentFields) return null;
  let {
    belongsToCodeLibraryId,
    exportedFromCodeFileId,
    codeExportName,
    isCodeBehavior,
    codeBehaviorData
  } = e.codeComponentFields;
  let o = eJ.fromString(belongsToCodeLibraryId);
  if (!o) return null;
  let l = Tq.fromString(exportedFromCodeFileId);
  return l ? {
    belongsToCodeLibraryId: o,
    exportedFromCodeFileId: l,
    codeExportName,
    isCodeBehavior,
    codeBehaviorData
  } : null;
}
export const I = $$o0;
export const r = $$s1;