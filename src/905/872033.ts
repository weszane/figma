import { jsx } from "react/jsx-runtime";
import { createContext, forwardRef, useRef, useMemo } from "react";
import { S } from "../905/823680";
import { $ } from "../905/61417";
import { defaultComponentAttribute } from "../905/577641";
let l = createContext(null);
let $$d1 = forwardRef(({
  children: e,
  htmlAttributes: t,
  ...i
}, a) => {
  let s = useRef(null);
  let d = useMemo(() => ({
    triggerButtonRef: s
  }), []);
  return jsx(l.Provider, {
    value: d,
    children: jsx("div", {
      ...defaultComponentAttribute,
      ...i,
      ...t,
      ref: a,
      role: "group",
      "data-fpl-group": !0,
      onContextMenu: e => {
        s?.current && (s.current.click(), e.preventDefault(), e.stopPropagation());
      },
      onPointerDownCapture: e => {
        s?.current && 2 === e.button && e.stopPropagation();
      },
      children: e
    })
  });
});
export function $$c0(e) {
  let {
    triggerButtonRef
  } = $(l, "useGroupTrigger", "ButtonGroupPrimitive");
  return S(e, triggerButtonRef);
}
$$d1.displayName = "ButtonGroupPrimitive";
export const Jo = $$c0;
export const rN = $$d1;