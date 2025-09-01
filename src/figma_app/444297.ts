import { useMemo } from "react";
import { Tv } from "../figma_app/311375";
import { Em } from "../figma_app/976749";
import { Kf } from "../figma_app/516028";
import { y } from "../905/461685";
import { n as _$$n } from "../905/347702";
import { A } from "../905/556276";
import { N } from "../figma_app/191390";
export function $$u1() {
  let e = Em();
  let t = Kf();
  let r = y().transform(e => e?.canCreateSlidesFileWithReasons.result).unwrapOr(!1);
  return !!e && !!r && !!t;
}
export let $$p0 = _$$n(() => {
  let e = $$u1();
  let t = N();
  let r = Tv();
  let a = A();
  return useMemo(() => !!e && (r.length ? !!a.length : t.size > 0), [e, r.length, t.size, a.length]);
});
export const C = $$p0;
export const d = $$u1;