import { CUSTOM_IMAGE_TYPE_STR } from "../figma_app/664063";
import { f } from "../905/911785";
export let $$a0 = "  ";
export function $$s1(e, t) {
  return e.split("\n").map(e => `${t}${e}`).join("\n");
}
export function $$o4(e) {
  return `${$$a0}return (
${$$s1(e, $$a0.repeat(2))}
${$$a0})`;
}
export function $$l2(e) {
  let t = e.replace(/\n/g, "").replace(/\{/g, "{\n").replace(/\}/g, "\n}").replace(/; /g, "\n").split("\n");
  let i = 0;
  let n = new f();
  for (let e of t) {
    e.includes("}") && i--;
    n.append(`${$$a0.repeat(Math.max(0, i))}${e}`);
    e.includes("{") && i++;
  }
  return n.toString("\n");
}
export function $$d3(e) {
  if (e === CUSTOM_IMAGE_TYPE_STR) return e;
  let t = e.indexOf("{");
  let i = e.lastIndexOf("}");
  return -1 === t || -1 === i ? e : e.substring(0, t) + $$l2(e.substring(t, i + 1)) + e.substring(i + 1);
}
export const BH = $$a0;
export const C5 = $$s1;
export const CT = $$l2;
export const S3 = $$d3;
export const uG = $$o4;