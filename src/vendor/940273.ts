import { IO, yE, LU, YK, Sv, XZ } from "../vendor/897392";
import { FK, b2 } from "../vendor/157953";
export function $$o1(e, r) {
  for (n = "", i = FK(e), o = 0, void 0; o < i; o++) {
    var n;
    var i;
    var o;
    n += r(e[o], o, e, r) || "";
  }
  return n;
}
export function $$a0(e, r, n, a) {
  switch (e.type) {
    case IO:
      if (e.children.length) break;
    case yE:
    case LU:
      return e.$$return = e.$$return || e.value;
    case YK:
      return "";
    case Sv:
      return e.$$return = e.value + "{" + $$o1(e.children, a) + "}";
    case XZ:
      e.value = e.props.join(",");
  }
  return b2(n = $$o1(e.children, a)) ? e.$$return = e.value + "{" + n + "}" : "";
}
export const A = $$a0;
export const l = $$o1;