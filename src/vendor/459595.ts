import { q } from "../vendor/82231";
let $$s1 = {
  test: e => "number" == typeof e,
  parse: parseFloat,
  transform: e => e
};
let $$o0 = {
  ...$$s1,
  transform: e => q(0, 1, e)
};
let $$a2 = {
  ...$$s1,
  default: 1
};
export const X4 = $$o0;
export const ai = $$s1;
export const hs = $$a2;