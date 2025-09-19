import { atom } from 'jotai';
import { getInitialOptions } from '../figma_app/169182';
import { Qf } from '../figma_app/202626';
import { getResponsiveChildren } from '../figma_app/387100';
import { k } from '../figma_app/904944';
import { produce } from 'immer';
export function $$d2(e) {
  let t = Qf(e);
  if (!t) return !1;
  if (t.childCount > 1) return !0;
  let r = getResponsiveChildren(e, t.guid);
  let i = r.length === 1 ? r[0] : void 0;
  if (i && i.childCount > 2) return !0;
  for (let e of i?.childrenNodes ?? []) {
    if (e.childrenNodes && e.childCount > 0) return !0;
  }
  return !1;
}
let $$c1 = atom(!0);
let $$u3 = atom(null);
let $$p5 = atom(Math.random());
atom(getInitialOptions().sites_template_picker_urls ?? void 0);
let $$_0 = atom({
  type: k.TEXT,
  id: 'explore',
  text: 'Explore'
});
let h = atom({});
let $$m4 = atom(e => e(h), (e, t, r, n) => {
  t(h, produce(e => {
    e[r] = n;
  }));
});
export const LS = $$_0;
export const P4 = $$c1;
export const PR = $$d2;
export const ZH = $$u3;
export const cF = $$m4;
export const iG = $$p5;