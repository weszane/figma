import { useCallback, useEffect } from 'react';
import { Fragment, jsx } from 'react/jsx-runtime';
import { atom, useAtomWithSubscription, Xr } from '../figma_app/27355';
import { bh } from '../figma_app/119475';
let $$o0 = 0;
let $$l6 = 1;
let $$d2 = 2;
let $$c1 = 3;
let $$u5 = 4;
export function $$p7() {
  let e = bh();
  useEffect(() => {
    let t = t => {
      if (document.activeElement && document.activeElement !== document.body) return;
      let r = t.code;
      (r === 'ArrowUp' || r === 'ArrowDown' || r === 'ArrowLeft' || r === 'ArrowRight') && (e(), t.preventDefault(), t.stopPropagation());
    };
    document.addEventListener('keydown', t);
    return () => document.removeEventListener('keydown', t);
  }, [e]);
  return jsx(Fragment, {});
}
let _ = atom(null);
let h = atom(null);
export function $$m4(e, {
  enable: t,
  lockUp: r,
  lockDown: n
}) {
  let s = Xr(_);
  let o = Xr(h);
  return {
    onFocus: useCallback(() => {
      t && (r && s({
        path: e,
        column: null
      }), n && o({
        path: e,
        column: null
      }));
    }, [s, o, e, t, r, n]),
    onBlur: useCallback(() => {
      t && (r && s(null), n && o(null));
    }, [s, o, t, r, n])
  };
}
export function $$g3() {
  let e = useAtomWithSubscription(_);
  let t = useAtomWithSubscription(h);
  return {
    overrideUp: useCallback(() => e, [e]),
    overrideDown: useCallback(() => t, [t])
  };
}
export const $t = $$o0;
export const FC = $$c1;
export const J1 = $$d2;
export const JO = $$g3;
export const eM = $$m4;
export const lW = $$u5;
export const uQ = $$l6;
export const y7 = $$p7;