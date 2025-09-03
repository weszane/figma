import { l7 } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { UD } from "../figma_app/624361";
export let $$s0 = "embedded-prototype-";
export function $$o1(e, t, r, s, o) {
  if (t <= 0 || r <= 0) {
    console.error("Cannot process embed thumbnail: invalid dimensions", {
      width: t,
      height: r,
      nodeId: s
    });
    return;
  }
  if (e.length !== t * r * 4) {
    console.error("Cannot process embed thumbnail: data length mismatch for RGBA format", {
      expected: t * r * 4,
      actual: e.length,
      nodeId: s
    });
    return;
  }
  let l = getSingletonSceneGraph().get(s);
  if (!l) {
    console.error("Cannot process embed thumbnail: node not found", s);
    return;
  }
  try {
    let i = document.createElement("canvas");
    i.width = t;
    i.height = r;
    let s = i.getContext("2d");
    if (!s) {
      console.error("Failed to get 2D canvas context for embed thumbnail processing");
      return;
    }
    let d = new ImageData(new Uint8ClampedArray(e), t, r);
    s.putImageData(d, 0, 0);
    i.toBlob(e => {
      if (!e) {
        console.error("Failed to convert canvas to blob for embed thumbnail");
        return;
      }
      e.arrayBuffer().then(e => {
        let t = new Uint8Array(e);
        return UD(t, "image/png", "embed-thumbnail");
      }).then(e => {
        l7.system("apply-embed-thumbnail", () => {
          0 === l.fills.length ? l.insertImageInFillPaint(e) : l.setImageInFillPaint(e);
        });
        o?.();
      }).catch(e => {
        console.error("Failed to decode embed thumbnail image:", e);
      });
    }, "image/png");
  } catch (e) {
    console.error("Failed to process embed thumbnail data:", e);
  }
}
export const xu = $$s0;
export const yx = $$o1;