import { styleKeyToNameMap, styleKeyToSoftDeletedIdMap } from "../figma_app/276332";
export function $$i0(e, t) {
  let r = e[styleKeyToNameMap[t]];
  return e[styleKeyToSoftDeletedIdMap[t]] ? void 0 : r;
}
export const b = $$i0;