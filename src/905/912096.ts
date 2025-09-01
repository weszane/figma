import { NA } from "../vendor/288996";
import { DN } from "../905/657224";
import { OZ } from "../905/414007";
let s = "figma.reporting";
let o = "user.plan.max";
export function $$l0(e) {
  e && NA(o, e);
}
export function $$d1() {
  (function () {
    let e;
    let t = OZ();
    if (!t) return;
    let i = t.get(s);
    if (i) {
      try {
        e = JSON.parse(atob(i));
      } catch (e) {
        t.$$delete(s);
        return;
      }
      e?.uhp && DN().set(o, e.uhp);
      t.$$delete(s);
      t.set(s, btoa(JSON.stringify(e)), {
        path: "/api/figment-proxy/monitor"
      });
    }
  })();
  return DN().get(o);
}
export const C = $$l0;
export const T = $$d1;