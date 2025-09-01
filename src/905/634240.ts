import { glU } from "../figma_app/763686";
import { Hq } from "../905/189185";
import { UN } from "../905/700578";
import { i as _$$i } from "../905/970229";
import { Rw } from "../figma_app/930338";
import { UD } from "../figma_app/624361";
import { t as _$$t } from "../905/658240";
export async function $$c0(e, t) {
  let [i, c] = await Promise.all([e.arrayBuffer(), _$$t(e, {
    includeMimeType: !0
  })]);
  let u = new Uint8Array(i);
  let p = _$$i(u) ?? "image/png";
  let m = await UD(u, p, e.name);
  Hq.system("process-image-file", () => {
    let e = UN();
    let i = e.getInternalCanvas();
    if (!i) return;
    let r = e.createNode("RECTANGLE");
    r.size = {
      x: m.fullResolution.width,
      y: m.fullResolution.height
    };
    i.appendChild(r);
    r.fills = [];
    r.insertImageInFillPaint(m);
    let s = Rw(m.fullResolution.hash);
    glU?.addImageNodeAsImageImport(r.id);
    t({
      type: "IMAGE",
      nodeGuid: r.guid,
      image: c,
      imageHash: s
    });
  });
}
export const z = $$c0;