import { jsx } from "react/jsx-runtime";
import { forwardRef, useCallback } from "react";
import { p } from "../905/991924";
import { handleKeyboardEventByState, KeyboardEventResponse } from "../figma_app/896988";
export let $$o0 = forwardRef(function (e, t) {
  let {
    onKeyDown
  } = e;
  let o = useCallback(e => {
    onKeyDown?.(e);
    handleKeyboardEventByState(e, KeyboardEventResponse.NO);
  }, [onKeyDown]);
  return jsx(p, {
    ...e,
    ref: t,
    onKeyDown: o
  });
});
export const A = $$o0;
