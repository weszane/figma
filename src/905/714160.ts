import { Rq, T1, lg } from "../figma_app/164212";
export let $$n1;
class a {
  isValidFloat(e) {
    return Rq(e);
  }
  isValidFloatEndingWithDecimal(e) {
    return Rq(e) && e.endsWith(".");
  }
  stringToFloat(e) {
    return T1(e);
  }
  floatToString(e) {
    return lg(e);
  }
}
export function $$s0() {
  $$n1 = new a();
}
export const FR = $$s0;
export const XA = $$n1;