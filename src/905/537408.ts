import { B9 } from "../905/125019";
import { Bko } from "../figma_app/763686";
import { Jr } from "../figma_app/624361";
export async function $$s0(e) {
  if (!e || !e.image || !e.image.hash || !Bko) return null;
  let t = B9(e.image.hash);
  await Jr().loadImageByHash(t);
  return Bko.getCompressedImage(t) || null;
}
export const I = $$s0;