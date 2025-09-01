import { RYP, ywP } from "../figma_app/763686";
import { M } from "../905/366117";
function a(e, t) {
  switch (e) {
    case "DOCUMENT":
      return t;
    case "SRGB":
    case "CMYK":
      return RYP.SRGB;
    case "DISPLAY_P3_V4":
      return RYP.DISPLAY_P3;
  }
}
export function $$s0(e, t) {
  if (1 === e.length) return a(e[0].colorProfile ?? "DOCUMENT", t);
  {
    let i = e[0]?.colorProfile ?? "DOCUMENT";
    for (let t of e) if ((t.colorProfile ?? "DOCUMENT") !== i) {
      i = "DOCUMENT";
      break;
    }
    return a(i, t);
  }
}
export function $$o1(e, t) {
  switch (e) {
    case ywP.LEGACY:
      return t === M.DISPLAY_P3 ? RYP.DISPLAY_P3 : RYP.SRGB;
    case ywP.SRGB:
      return RYP.SRGB;
    case ywP.DISPLAY_P3:
      return RYP.DISPLAY_P3;
  }
}
export const A = $$s0;
export const j = $$o1;