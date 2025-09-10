import { parseQuery } from "../905/634134";
let r = {};
export function $$a2(e) {
  if (!e) {
    r = {};
    return;
  }
  r = parseQuery(e);
}
export function $$s1(e) {
  return r[e];
}
export function $$o0(e) {
  delete r[e];
}
export const EM = $$o0;
export const QL = $$s1;
export const TH = $$a2;
