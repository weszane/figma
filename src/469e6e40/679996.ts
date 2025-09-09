import { customHistory } from "../905/612521";
export function $$s0(e, t, a = !0) {
  let i = new URLSearchParams(customHistory.location.search);
  if ("true" === i.get(e)) {
    if (a) {
      i.$$delete(e);
      let t = i.toString().length > 0 ? `?${i.toString()}` : "";
      customHistory.replace(`${customHistory.location.pathname}${t}`);
    }
    t();
  }
}
export const S = $$s0;