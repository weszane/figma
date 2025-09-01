import { W } from "../vendor/696534";
import { dm } from "../vendor/186187";
import { V } from "../vendor/359881";
export function $$a2(e, r) {
  return W(V(), "setTimeout")(dm(e), r);
}
export function $$h0(e) {
  W(V(), "clearTimeout")(e);
}
export function $$d3(e, r) {
  return W(V(), "setInterval")(dm(e), r);
}
export function $$p1(e) {
  W(V(), "clearInterval")(e);
}
export const DJ = $$h0;
export const vG = $$p1;
export const wg = $$a2;
export const yb = $$d3;