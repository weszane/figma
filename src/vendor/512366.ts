import { Kg } from "../vendor/4355";
let s = e => ({
  test: r => Kg(r) && r.endsWith(e) && 1 === r.split(" ").length,
  parse: parseFloat,
  transform: r => `${r}${e}`
});
let $$o3 = s("deg");
let $$a0 = s("%");
let $$h2 = s("px");
let $$d4 = s("vh");
let $$p5 = s("vw");
let $$g1 = {
  ...$$a0,
  parse: e => $$a0.parse(e) / 100,
  transform: e => $$a0.transform(100 * e)
};
export const KN = $$a0;
export const gQ = $$g1;
export const px = $$h2;
export const uj = $$o3;
export const vh = $$d4;
export const vw = $$p5;