import { VH } from "../figma_app/178419";
import { UN } from "../905/700578";
import { Vb, wj } from "../905/759470";
import { Se } from "../905/889062";
export async function $$o0() {
  try {
    let e = VH(UN());
    if (!e) return;
    let t = await Se(e.guid, {
      fixedWidth: Vb,
      fixedHeight: wj,
      thumbnailScalingStrategy: "FILL_SPACE"
    });
    if (!t) return;
    return {
      allMedia: [t],
      thumbnailMedium: t
    };
  } catch (e) {}
}
export const O = $$o0;