let $$n1 = "Frame";
let $$r0 = "AutoLayout";
export function $$a7(e) {
  if (e.includes("flex-col")) ;else if (e.includes("flex")) return "flex";
  return "flex flex-col";
}
export let $$s2 = "w-full h-fit";
export function $$o4(e, t) {
  return "mobile-screen-width" === t ? `${e}-96` : "mobile-screen-height" === t ? `${e}-[568px]` : "hug" === t ? `${e}-fit` : "full" === t ? `${e}-full` : "small" === t ? $$l6(e, $$d5.small) : "regular" === t ? $$l6(e, $$d5.regular) : "large" === t ? $$l6(e, $$d5.large) : void 0;
}
export function $$l6(e, t) {
  return `${e}-[${Math.round(4 * t)}px]`;
}
export let $$d5 = {
  small: 12,
  regular: 36,
  large: 85.5
};
export function $$c3(e) {
  let t;
  switch (e?.toLowerCase()) {
    case "small":
      t = "w-60";
      break;
    case "medium":
      t = "w-80";
      break;
    default:
      t = "w-100";
  }
  return `flex flex-col ${t}`;
}
export const Hd = $$r0;
export const Qe = $$n1;
export const Wo = $$s2;
export const kn = $$c3;
export const qM = $$o4;
export const tr = $$d5;
export const vE = $$l6;
export const xe = $$a7;