import { encodeBase64 } from "../905/561685";
export function $$i0(e) {
  return e.size.y > e.size.x ? Math.floor(1024 * e.size.x / e.size.y) : 1024;
}
export async function $$$$a1(e) {
  let t = await e.loadImagesAndExport([{
    imageType: "JPEG",
    suffix: "jpeg",
    constraint: {
      type: "CONTENT_WIDTH",
      value: Math.min(e.size.x, $$i0(e))
    }
  }]);
  return t.length > 0 ? "data:image/jpeg;base64," + encodeBase64(t) : "";
}
export const a = $$i0;
export const v = $$$$a1;