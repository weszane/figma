import { AppStateTsApi, PanelType } from "../figma_app/763686";
import { useAtomWithSubscription } from "../figma_app/27355";
import { parsePxNumber } from "../figma_app/783094";
import { Point } from "../905/736624";
import { _ } from "../figma_app/658134";
import { getObservableOrFallback } from "../figma_app/84367";
import { GQ } from "../figma_app/32128";
import { s0 } from "../figma_app/115923";
import { y9S } from "../figma_app/27776";
let $$p0 = 8;
let $$_2 = 12;
export function $$h1() {
  let e = GQ() + _;
  let t = useAtomWithSubscription(s0);
  let r = getObservableOrFallback(AppStateTsApi.editorPreferences().renderRulers) && t === PanelType.FILE;
  let h = parsePxNumber(y9S);
  return [new Point((r ? h : 0) + $$p0 + e, (r ? h : 0) + $$_2), {
    x: "left",
    y: "top"
  }];
}
export const QG = $$p0;
export const _I = $$h1;
export const r$ = $$_2;