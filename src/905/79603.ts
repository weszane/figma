import { jsx } from "react/jsx-runtime";
import { forwardRef, useCallback } from "react";
import { p } from "../905/991924";
import { jr, W0 } from "../figma_app/896988";
export let $$o0 = forwardRef(function (e, t) {
  let {
    onKeyDown
  } = e;
  let o = useCallback(e => {
    onKeyDown?.(e);
    jr(e, W0.NO);
  }, [onKeyDown]);
  return jsx(p, {
    ...e,
    ref: t,
    onKeyDown: o
  });
});
export const A = $$o0;