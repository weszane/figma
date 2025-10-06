import { ColorSpaceEnum, ColorProfileEnum } from "../figma_app/763686";
import { ColorSpaceType } from "../905/366117";
function a(e, t) {
  switch (e) {
    case "DOCUMENT":
      return t;
    case "SRGB":
    case "CMYK":
      return ColorSpaceEnum.SRGB;
    case "DISPLAY_P3_V4":
      return ColorSpaceEnum.DISPLAY_P3;
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
    case ColorProfileEnum.LEGACY:
      return t === ColorSpaceType.DISPLAY_P3 ? ColorSpaceEnum.DISPLAY_P3 : ColorSpaceEnum.SRGB;
    case ColorProfileEnum.SRGB:
      return ColorSpaceEnum.SRGB;
    case ColorProfileEnum.DISPLAY_P3:
      return ColorSpaceEnum.DISPLAY_P3;
  }
}
export const A = $$s0;
export const j = $$o1;