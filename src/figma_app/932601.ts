import { UN } from "../905/700578";
import { eU } from "../figma_app/27355";
import { r } from "../905/520829";
import { Wh } from "../figma_app/615482";
let $$o0 = Wh(() => eU([]));
let $$l2 = Wh(() => eU(null));
let $$d3 = Wh(() => eU(r.INIT));
let c = Wh(() => eU(null));
let $$u1 = eU(e => e(c), (e, t, r) => {
  let i = e(c);
  let a = "function" == typeof r ? r(i) : r;
  if (i !== a) {
    if (t(c, a), a) {
      let e = UN().get(a);
      t($$l2, e?.name || "");
    } else t($$l2, null);
  }
});
export const cE = $$o0;
export const l7 = $$u1;
export const oZ = $$l2;
export const qp = $$d3;