import { B } from "../905/950875";
import { R } from "../905/256203";
import { b } from "../905/946806";
import { Z } from "../905/279476";
import { useFplStrings } from "../figma_app/415899";
import { tp, LO, FM, Sp, P2, W, eW, Ck, LC, e1 } from "../905/193774";
export function $$d3(e, t) {
  switch (e) {
    case "warn":
      return "inset-modal" === t ? R : Z;
    case "danger":
    case "success":
    case "default":
    case "brand":
      return "inset-modal" === t ? B : b;
  }
}
export function $$c2(e) {
  let t = useFplStrings("warning");
  let i = useFplStrings("danger");
  switch (e) {
    case "warn":
      return t;
    case "danger":
      return i;
    case "success":
    case "default":
    case "brand":
      return null;
  }
}
let $$u0 = {
  default: tp,
  brand: LO,
  success: FM,
  warn: Sp,
  danger: P2
};
let $$p1 = {
  "full-width": W,
  inline: eW,
  informational: Ck,
  "inset-modal": LC,
  inset: e1
};
export const GS = $$u0;
export const L4 = $$p1;
export const T8 = $$c2;
export const sW = $$d3;