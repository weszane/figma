import { vv } from "../905/508457";
import { isNotNullish } from "../figma_app/95419";
import { Ez5 } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { eU } from "../figma_app/27355";
let $$o0 = vv(() => Ez5?.canvasGrid().canvasGridArray, []);
let l = eU(e => {
  let t = e($$o0);
  let i = [];
  t.forEach((e, t) => {
    e.forEach((e, n) => {
      let r = getSingletonSceneGraph().get(e);
      r && i.push({
        id: e,
        coord: {
          row: t,
          col: n
        },
        node: r
      });
    });
  });
  return i;
});
let d = eU(e => {
  let t = e(l);
  let i = new Map();
  t.forEach(e => i.set(e.id, e));
  return i;
});
let $$c1 = eU(e => {
  let t = e($$o0);
  let i = e(d);
  return t.reduce((e, t, r) => (e[r] = t.map(e => i.get(e)).filter(isNotNullish), e), {});
});
export const BT = $$o0;
export const Un = $$c1;