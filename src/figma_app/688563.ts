import { ImageCppBindings } from "../figma_app/763686";
import { H9 } from "../figma_app/930338";
import { gC } from "../figma_app/368611";
import { B } from "../figma_app/371825";
export function $$o0(e) {
  e && !e._native_toolbar_get_image_data && (e._native_toolbar_get_image_data = async e => {
    let t = B.find(t => t.image === e);
    if (t) {
      let e = await gC(t);
      return Promise.resolve(H9(e));
    }
    {
      let t = ImageCppBindings?.getCompressedImage(e) ?? null;
      if (t) return Promise.resolve(H9(t));
    }
    return Promise.resolve(null);
  });
}
export const I = $$o0;