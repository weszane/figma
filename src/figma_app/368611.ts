import { ServiceCategories as _$$e } from "../905/165054";
import { glU } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { buildUploadUrl } from "../figma_app/169182";
import { reportError } from "../905/11";
import { T } from "../figma_app/409248";
let d = Object.create(null);
export async function $$c1(e) {
  let t = await T(e, d);
  glU?.setWashiTapePresetPattern(t);
}
export async function $$u0(e, t) {
  let r = await T(e, d);
  l7(t, "set-paint-from-washi-tape-preset", () => glU?.setWashiTapePresetPatternAndUpdateSelectedNodes(r));
}
export function $$p2(e) {
  if (e.image) return buildUploadUrl(e.image);
  throw Error(`Invalid washi tape ${e} has no image`);
}
export function $$_3(e) {
  for (let t of e) {
    let e = $$p2(t);
    e && T(e, d).catch(e => {
      reportError(_$$e.FIGJAM, e);
    });
  }
}
export function $$h4(e) {
  let t = $$p2(e);
  return T(t, d);
}
export const Cs = $$u0;
export const Iw = $$c1;
export const M8 = $$p2;
export const Qc = $$_3;
export const gC = $$h4;