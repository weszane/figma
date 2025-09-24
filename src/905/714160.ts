import { isValidNumberString, stringToFloat, floatToString } from "../figma_app/164212";
export let $$n1;
class a {
  isValidFloat(e) {
    return isValidNumberString(e);
  }
  isValidFloatEndingWithDecimal(e) {
    return isValidNumberString(e) && e.endsWith(".");
  }
  stringToFloat(e) {
    return stringToFloat(e);
  }
  floatToString(e) {
    return floatToString(e);
  }
}
export function $$s0() {
  $$n1 = new a();
}
export const FR = $$s0;
export const XA = $$n1;