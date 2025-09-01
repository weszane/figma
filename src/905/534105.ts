import { jsx } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import { e as _$$e, l as _$$l } from "../905/107855";
export function $$s0(e) {
  let [t, i] = useState(!1);
  let {
    wiggleCount,
    onWiggle
  } = e;
  useEffect(() => {
    wiggleCount > 0 && (i(!0), onWiggle?.(wiggleCount));
  }, [wiggleCount, onWiggle]);
  let l = useCallback(() => i(!1), [i]);
  return jsx("div", {
    className: t ? _$$e : _$$l,
    onAnimationEnd: l,
    children: e.children
  });
}
export const c = $$s0;