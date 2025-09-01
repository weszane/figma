import { c } from "../vendor/190472";
import { Tw } from "../vendor/832351";
import { A } from "../vendor/723372";
export function $$i0(...e) {
  let t = {
    ...e[0]
  };
  for (let a = 1; a < e.length; a++) {
    let i = e[a];
    for (let e in i) {
      let a = t[e];
      let o = i[e];
      "function" == typeof a && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = c(a, o) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof a && "string" == typeof o ? t[e] = A(a, o) : "id" === e && a && o ? t.id = Tw(a, o) : t[e] = void 0 !== o ? o : a;
    }
  }
  return t;
}
export const v = $$i0;