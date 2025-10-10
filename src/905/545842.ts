import { atom, selectAtom } from "../figma_app/27355";
import { createInitState } from "../figma_app/851625";
import { APILoadingStatus } from "../905/520829";
let $$s2 = atom(createInitState());
let o = atom(e => {
  let t = e($$s2);
  if (t.status !== APILoadingStatus.SUCCESS) throw Error("FigmaScope internal code is running but no FigmaScope resources are set. This is a bug - please report in #figmascope.");
  return t.value;
});
let $$l0 = selectAtom(o, e => e.primaryResource);
let $$d1 = selectAtom(o, e => e.diffResource);
export const Cc = $$l0;
export const lX = $$d1;
export const lu = $$s2;