import { eJ, YB } from "../figma_app/243058";
import { PW } from "../905/497152";
import { oz, nV } from "../905/808701";
export function $$s1(e) {
  let t = oz(PW.CODE_FILE, e);
  if (!t) return null;
  let i = l(e);
  return i ? {
    ...t,
    ...i
  } : null;
}
export function $$o0(e) {
  let t = nV(PW.CODE_FILE, e);
  if (!t) return null;
  let i = l(e);
  return i ? {
    ...t,
    ...i
  } : null;
}
function l(e) {
  if (!e.codeFileFields) return null;
  let {
    belongsToCodeLibraryId,
    canvasNodeId
  } = e.codeFileFields;
  let r = eJ.fromString(belongsToCodeLibraryId);
  let a = canvasNodeId ? YB.fromString(canvasNodeId) : null;
  return r ? {
    belongsToCodeLibraryId: r,
    canvasNodeId: a
  } : null;
}
export const d = $$o0;
export const y = $$s1;