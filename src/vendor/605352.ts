import { Kg } from "../vendor/4355";
import { u } from "../vendor/736267";
import { V } from "../vendor/896466";
import { B } from "../vendor/907558";
export let $$h0 = {
  test: e => B.test(e) || u.test(e) || V.test(e),
  parse: e => B.test(e) ? B.parse(e) : V.test(e) ? V.parse(e) : u.parse(e),
  transform: e => Kg(e) ? e : e.hasOwnProperty("red") ? B.transform(e) : V.transform(e)
};
export const y = $$h0;