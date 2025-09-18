import { useSelector } from "react-redux";
import { isInteractionPathCheck } from "../figma_app/897289";
import { useFullscreenReady } from "../905/924253";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { el } from "../figma_app/226737";
import { P } from "../905/35881";
export function $$d2() {
  return useSelector(e => P(e.selectedView));
}
export function $$c1() {
  let e = $$d2();
  let t = el();
  let r = t && !t.endsWith("-1:-1");
  return !isInteractionPathCheck() && (!e || !!r);
}
export function $$u0() {
  let e = useSelector(e => e.isFullscreenDocumentLoaded);
  let t = useFullscreenReady();
  let r = useDeepEqualSceneValue(e => null !== e.get("0:0"));
  return e && t && r;
}
export const EI = $$u0;
export const jY = $$c1;
export const sO = $$d2;