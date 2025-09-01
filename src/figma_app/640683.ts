let $$n2 = /^\/(?:file|design|board|slides|site|buzz|rev|make)\/([0-9a-zA-Z]{22,128})(?:\/|$)/;
let i = /(?:file|design|board|slides|site|buzz|rev|make)/;
let a = /([0-9a-zA-Z]{22,128})/;
export function $$s1(e) {
  return $$n2.test(e);
}
export function $$o0(e) {
  return RegExp(`^${i.source}$`).test(e);
}
export function $$l3(e) {
  if (!$$s1(e)) return null;
  let t = e.match(a);
  return t ? t[0] : null;
}
export const PU = $$o0;
export const ek = $$s1;
export const jW = $$n2;
export const zv = $$l3;