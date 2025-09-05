import { useEffect, useRef } from 'react';
import { n as _$$n } from '../905/64411';
import { getResourceDataOrFallback } from '../905/419236';
import { l as _$$l } from '../905/716947';
import { md } from '../figma_app/27355';
import { qd } from '../figma_app/39751';
import { fy7 } from '../figma_app/43951';
import { M } from '../figma_app/155411';
import { je } from '../figma_app/155728';
import { n1 } from '../figma_app/657017';
import { useSelector, useDispatch } from '../vendor/514228';
export function $$m0() {
  let e = useDispatch();
  let t = useRef(!1);
  let s = useSelector(e => e.loadingState);
  let m = n1();
  let g = qd(m);
  let f = md(fy7.Query({
    group: M()
  }));
  let x = je();
  useEffect(() => {
    if (!t.current && !0 === m && !1 === g && f.status === 'loaded') {
      t.current = !0;
      let e = new Set(x?.data?.map(e => e.libraryKey) ?? []);
      for (let t of f?.data?.libraryPresetSubscriptionsV2 ?? []) {
        let s = _$$l(getResourceDataOrFallback(t.libraryKey) ?? '');
        s && e.has(s) && _$$n({
          libraryKey: s
        });
      }
    }
  }, [e, m, g, s, f, x]);
}
export const S = $$m0;