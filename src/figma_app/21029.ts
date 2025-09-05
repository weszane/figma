import { useSelector } from "../vendor/514228";
import { nl } from "../figma_app/257275";
import { q } from "../905/924253";
import { Fk } from "../figma_app/167249";
import { el } from "../figma_app/226737";
import { P } from "../905/35881";
export function $$d2() {
  return useSelector(e => P(e.selectedView));
}
export function $$c1() {
  let e = $$d2();
  let t = el();
  let r = t && !t.endsWith("-1:-1");
  return !nl() && (!e || !!r);
}
export function $$u0() {
  let e = useSelector(e => e.isFullscreenDocumentLoaded);
  let t = q();
  let r = Fk(e => null !== e.get("0:0"));
  return e && t && r;
}
export const EI = $$u0;
export const jY = $$c1;
export const sO = $$d2;