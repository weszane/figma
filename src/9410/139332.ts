import { xb } from "../figma_app/465776";
let n = ["Table", "CodeBlock", "MindMap", "Text", "Section"];
let a = ["Timer", "Image", "Link"];
export function $$s1(e) {
  return "string" == typeof e && n.includes(e);
}
export function $$o0(e) {
  return $$s1(e) || "string" == typeof e && a.includes(e) ? e : "object" == typeof e && e.id && e.name && e.img ? "FaceStamp" : void xb(e);
}
export const V7 = $$o0;
export const kg = $$s1;