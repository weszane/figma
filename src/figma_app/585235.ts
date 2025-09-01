import { x4 } from "../905/657224";
let i = "library-section-expanded-";
export function $$a2(e, t = !1) {
  let r = null;
  try {
    if (null != x4) {
      let t = x4.getItem(`${i}${e}`);
      r = t ? JSON.parse(t) : null;
    }
  } catch (e) {}
  return null != r ? !!r : t;
}
export function $$s0(e, t) {
  null !== x4 && x4.setItem(`${i}${e}`, JSON.stringify(t));
}
export function $$o1(e, t) {
  switch (e) {
    case "FILE":
      return "Used in this file" !== t;
    case "PAGE":
    case "NAME_GROUP":
    case "ASSET_TYPE":
      return !1;
  }
}
export const DG = $$s0;
export const pR = $$o1;
export const xO = $$a2;