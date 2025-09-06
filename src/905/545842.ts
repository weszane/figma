import { atom, mg } from "../figma_app/27355";
import { Ok } from "../figma_app/851625";
import { r as _$$r } from "../905/520829";
let $$s2 = atom(Ok());
let o = atom(e => {
  let t = e($$s2);
  if (t.status !== _$$r.SUCCESS) throw Error("FigmaScope internal code is running but no FigmaScope resources are set. This is a bug - please report in #figmascope.");
  return t.value;
});
let $$l0 = mg(o, e => e.primaryResource);
let $$d1 = mg(o, e => e.diffResource);
export const Cc = $$l0;
export const lX = $$d1;
export const lu = $$s2;