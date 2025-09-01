import { ServiceCategories as _$$e } from "../905/165054";
import { $D } from "../905/11";
let a = 16 / 9;
export function $$s0(e) {
  try {
    if (!e) return null;
    if ((e.naturalWidth / e.naturalHeight).toFixed(3) === a.toFixed(3)) return "transparent";
    let t = document.createElement("canvas");
    let i = t.getContext("2d");
    if (!i) {
      t.remove();
      return null;
    }
    let {
      width,
      height
    } = e;
    t.width = width;
    t.height = height;
    i.drawImage(e, 0, 0, width, height);
    let s = i.getImageData(0, height / 2, 1, 1).data;
    let l = i.getImageData(width / 2, 0, 1, 1).data;
    let d = i.getImageData(width, height / 2, -1, 1).data;
    let c = i.getImageData(width / 2, height, 1, -1).data;
    let u = o(s);
    let p = o(l);
    let m = o(d);
    let h = o(c);
    t.remove();
    return function (e) {
      let t = new Map();
      let i = null;
      let n = 0;
      for (let r of e) {
        let e = (t.get(r) ?? 0) + 1;
        t.set(r, e);
        e > n && (n = e, i = r);
      }
      return i;
    }([u, p, m, h]);
  } catch (t) {
    $D(_$$e.WAYFINDING, t, {
      extra: {
        imageObject: e,
        "imageObject instanceof HTMLElement": e instanceof HTMLElement,
        "imageObject instanceof HTMLImageElement": e instanceof HTMLImageElement
      }
    });
    return null;
  }
}
function o(e) {
  return "#" + (0x1000000 + (e[0] << 16) + (e[1] << 8) + e[2]).toString(16).slice(1);
}
export const J = $$s0;