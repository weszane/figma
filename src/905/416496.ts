import { v8u } from "../figma_app/763686";
let $$r1 = 1;
let $$a2 = .76;
let $$s0 = -1;
function o(e, t) {
  return 1e-6 > Math.abs(e - t);
}
export var $$l3 = (e => (e[e.LOW = 0] = "LOW", e[e.MEDIUM = 1] = "MEDIUM", e[e.HIGH = 2] = "HIGH", e))($$l3 || {});
export function $$d5(e, t) {
  switch (e) {
    case 0:
      return "JPEG" === t ? .75 : .5;
    case 1:
      return "JPEG" === t ? .8 : .76;
    case 2:
      return 1;
  }
}
export function $$c7(e, t) {
  switch (t) {
    case v8u.JPEG:
      return $$d5(e, "JPEG");
    case v8u.PDF:
      return $$d5(e, "PDF");
    case v8u.PNG:
    case v8u.CSV:
      return $$s0;
  }
}
export function $$u4(e, t) {
  return o(e, $$d5(0, t)) ? 0 : o(e, $$d5(1, t)) ? 1 : 2;
}
export function $$p6(e, t) {
  switch (t) {
    case v8u.JPEG:
      return $$u4(e, "JPEG");
    case v8u.PDF:
      return $$u4(e, "PDF");
    case v8u.PNG:
    case v8u.CSV:
      return;
  }
}
export const GU = $$s0;
export const Ho = $$r1;
export const JI = $$a2;
export const Kj = $$l3;
export const OK = $$u4;
export const Yj = $$d5;
export const dB = $$p6;
export const t_ = $$c7;