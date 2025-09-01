import { Ay } from "../905/612521";
export function $$s0(e, t, a = !0) {
  let i = new URLSearchParams(Ay.location.search);
  if ("true" === i.get(e)) {
    if (a) {
      i.$$delete(e);
      let t = i.toString().length > 0 ? `?${i.toString()}` : "";
      Ay.replace(`${Ay.location.pathname}${t}`);
    }
    t();
  }
}
export const S = $$s0;