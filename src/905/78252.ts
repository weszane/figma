import { M } from "../905/151578";
import { UN } from "../905/700578";
import { rt } from "../figma_app/615482";
export function $$s0(e, t, i = {}) {
  let o = rt(e);
  o.onMount = e => {
    let a = new M(UN(), t, i);
    let s = a.subscribe(() => {
      e(a.readValue());
    });
    e(a.readValue());
    return s;
  };
  return o;
}
export const d = $$s0;