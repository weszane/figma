import { UN } from "../905/700578";
import r from "../vendor/260986";
import { Gs } from "../figma_app/949105";
import { n6 } from "../figma_app/193952";
var a = r;
let $$l3 = "Building Blocks";
let $$d1 = "Presets";
let $$c2 = "\u2726/";
export function $$u0(e) {
  if (!e) return [];
  let t = UN().get(e);
  let i = t?.childrenNodes.find(e => n6(e.name, $$l3));
  let r = i?.childrenNodes.filter(e => Gs(e)) ?? [];
  return a()(r.map(e => {
    if (e.symbolId) {
      let t = UN().get(e.symbolId);
      if (t) return t.isState ? t.parentNode : t;
    }
    return null;
  }).filter(Boolean), e => e.guid);
}
export const VN = $$u0;
export const i2 = $$d1;
export const lS = $$c2;
export const vh = $$l3;