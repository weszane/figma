import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle } from "react";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { y } from "../905/263077";
import { Y } from "../905/193977";
export let $$l0 = forwardRef((e, t) => {
  let i = useRef(null);
  let {
    focus
  } = Y(i);
  useImperativeHandle(t, () => ({
    focus
  }), [focus]);
  y("", i);
  return jsx("div", {
    ref: i,
    className: cssBuilderInstance.absolute.opacity0.cursorDefault.$,
    tabIndex: -1
  });
});
export const t = $$l0;