import { useEffect, useRef } from 'react';
import { n as _$$n } from '../905/64411';
import { getResourceDataOrFallback } from '../905/419236';
import { l as _$$l } from '../905/716947';
import { useAtomWithSubscription } from '../figma_app/27355';
import { usePreviousValue } from '../figma_app/922077';
import { LibraryPresetSubscriptionsV2 } from '../figma_app/43951';
import { getProviderConfigType } from '../figma_app/155411';
import { useSubscribedLibraries } from '../figma_app/155728';
import { useFigmaLibrariesEnabled } from '../figma_app/657017';
import { useSelector, useDispatch } from 'react-redux';
export function $$m0() {
  let e = useDispatch();
  let t = useRef(!1);
  let s = useSelector(e => e.loadingState);
  let m = useFigmaLibrariesEnabled();
  let g = usePreviousValue(m);
  let f = useAtomWithSubscription(LibraryPresetSubscriptionsV2.Query({
    group: getProviderConfigType()
  }));
  let x = useSubscribedLibraries();
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