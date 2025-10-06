import { jsx } from "react/jsx-runtime";
import { TabLoop } from "../905/718764";
import { useFocusAreaRef, useManagedFocusArea } from "../figma_app/290668";
import { c } from "../905/814434";
export function $$o0({
  children: e,
  ...t
}) {
  let i = useFocusAreaRef();
  return jsx(TabLoop, {
    children: jsx("div", {
      ...t,
      className: c,
      ref: i,
      children: e
    })
  });
}
export function $$l1({
  isAccessible: e,
  children: t,
  ...i
}) {
  let o = useManagedFocusArea(!e);
  return jsx(TabLoop, {
    children: jsx("div", {
      ...i,
      className: c,
      ref: o,
      children: t
    })
  });
}
export const m = $$o0;
export const v = $$l1;