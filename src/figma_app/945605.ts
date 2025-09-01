import { WB, Oe } from "../vendor/344390";
export let $$n1;
class a {
  rgbaToThumbhash(e, t, r) {
    if (e > 100 || t > 100) {
      let n = e;
      let i = t;
      let a = e / t;
      e < t ? e = Math.round((t = 100) * a) : t = Math.round((e = 100) / a);
      let s = new OffscreenCanvas(n, i);
      let o = s.getContext("2d");
      let l = new ImageData(new Uint8ClampedArray(r), n, i);
      o.putImageData(l, 0, 0);
      let d = new OffscreenCanvas(e, t).getContext("2d");
      d.drawImage(s, 0, 0, n, i, 0, 0, e, t);
      r = new Uint8Array(d.getImageData(0, 0, e, t).data);
    }
    return WB(e, t, r);
  }
  thumbhashToRgba(e) {
    let {
      w,
      h,
      rgba
    } = Oe(e);
    return {
      width: w,
      height: h,
      rgba
    };
  }
}
export function $$s0() {
  $$n1 = new a();
}
export const hR = $$s0;
export const we = $$n1;