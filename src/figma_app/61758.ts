import { ServiceCategories as _$$e } from "../905/165054";
import { Sm } from "../905/859698";
import { atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { fh } from "../figma_app/98072";
import { FComponentType } from "../figma_app/191312";
import { L8 } from "../figma_app/435826";
import { UI, Gd, bV } from "../figma_app/600968";
let p = null;
export async function $$_2() {
  try {
    if (!$$h1()) return;
    let e = await UI();
    await $$m0(e);
  } catch (e) {
    reportError(_$$e.PROTOTYPING, e);
  }
}
export function $$h1() {
  let e = atomStoreManager.get(Gd);
  return 0 !== e.size && Object.entries(atomStoreManager.get(fh[FComponentType.CODE_COMPONENT].subscribed)).some(([t, r]) => e.has(t));
}
export async function $$m0(e) {
  let {
    enabled
  } = atomStoreManager.get(bV);
  if (!enabled) return;
  if (p) {
    await p;
    return;
  }
  let r = atomStoreManager.get(fh[FComponentType.CODE_COMPONENT].subscribed);
  let n = new Map(e.map(e => [e.asset.key, e.asset]));
  let o = [];
  for (let [e, t] of Object.entries(r)) {
    let r = n.get(Sm(e));
    if (r) {
      for (let [e, n] of Object.entries(t.pagesByVersion)) if (r.version !== e) {
        o.push(r);
        break;
      }
    }
  }
  0 !== o.length && (p = (async () => {
    await L8(debugState, o);
    p = null;
  })(), await p);
}
export const Az = $$m0;
export const cF = $$h1;
export const rg = $$_2;