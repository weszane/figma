import { O5 } from "../figma_app/387100";
import { eU } from "../figma_app/27355";
import { Ay } from "../vendor/159563";
import { getInitialOptions } from "../figma_app/169182";
import { k } from "../figma_app/904944";
import { Qf } from "../figma_app/202626";
export function $$d2(e) {
  let t = Qf(e);
  if (!t) return !1;
  if (t.childCount > 1) return !0;
  let r = O5(e, t.guid);
  let i = 1 === r.length ? r[0] : void 0;
  if (i && i.childCount > 2) return !0;
  for (let e of i?.childrenNodes ?? []) if (e.childrenNodes && e.childCount > 0) return !0;
  return !1;
}
let $$c1 = eU(!0);
let $$u3 = eU(null);
let $$p5 = eU(Math.random());
eU(getInitialOptions().sites_template_picker_urls ?? void 0);
let $$_0 = eU({
  type: k.TEXT,
  id: "explore",
  text: "Explore"
});
let h = eU({});
let $$m4 = eU(e => e(h), (e, t, r, n) => {
  t(h, Ay(e => {
    e[r] = n;
  }));
});
export const LS = $$_0;
export const P4 = $$c1;
export const PR = $$d2;
export const ZH = $$u3;
export const cF = $$m4;
export const iG = $$p5;