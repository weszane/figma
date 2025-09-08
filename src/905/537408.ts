import { bytesToHex } from "../905/125019";
import { ImageCppBindings } from "../figma_app/763686";
import { Jr } from "../figma_app/624361";
export async function $$s0(e) {
  if (!e || !e.image || !e.image.hash || !ImageCppBindings) return null;
  let t = bytesToHex(e.image.hash);
  await Jr().loadImageByHash(t);
  return ImageCppBindings.getCompressedImage(t) || null;
}
export const I = $$s0;