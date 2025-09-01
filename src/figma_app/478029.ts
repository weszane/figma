import { Mt, eU, md, Rq } from "../figma_app/27355";
import { Wh } from "../figma_app/615482";
import { Vg } from "../figma_app/410518";
import { V, S } from "../figma_app/694362";
async function $$o(e, t) {
  let r = await t(Vg(e));
  return r.length > 0 ? [e, r] : null;
}
function l(e) {
  let t = e(V);
  return new Set([...e(S), ...t]);
}
export let $$d1 = Mt(Wh(() => eU(async e => {
  let t = [...l(e)].map(t => $$o(t, e));
  return Object.fromEntries((await Promise.all(t)).filter(Boolean));
}), {
  preserveValue: !0
}));
export function $$c0() {
  let e = md(u);
  return "hasData" !== e.state || e.data;
}
let u = Rq(Mt(Wh(() => eU(async e => {
  for (let t of l(e)) if ((await e(Vg(t))).length > 0) return !1;
  return !0;
}))));
export const D = $$c0;
export const o = $$d1;