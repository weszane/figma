import { ColorFormatEnum } from "../figma_app/763686";
export let $$n1 = new Set([ColorFormatEnum.HEX]);
export function $$i0(e, t, r, i) {
  let a = r(e, i);
  return $$n1.has(t) ? {
    value: a,
    copyValue: r(e, {
      hexCSSValue: !0
    })
  } : {
    value: a,
    copyValue: a
  };
}
export const q = $$i0;
export const x = $$n1;