import { JE, Og } from "../figma_app/262240";
export const I = function e(t) {
  return JE(t) && Og(t.parentNode) ? t : "CANVAS" !== t.parentNode.type ? e(t.parentNode) : void 0;
};