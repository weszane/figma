import { jsx } from "react/jsx-runtime";
import { createContext, memo, useReducer, useMemo, useContext } from "react";
let a = {
  isPopoverOpen: !1
};
let s = createContext({
  state: a,
  dispatch: () => {}
});
function o(e, t) {
  return "set popover open" === t.type ? {
    ...e,
    isPopoverOpen: t.payload
  } : e;
}
export let $$l0 = memo(function (e) {
  let [t, i] = useReducer(o, a);
  let l = useMemo(() => ({
    state: t,
    dispatch: i
  }), [t, i]);
  return jsx(s.Provider, {
    value: l,
    children: e.children
  });
});
export function $$d1() {
  return useContext(s);
}
export function $$c2() {
  return !$$d1().state.isPopoverOpen;
}
export const IA = $$l0;
export const Wv = $$d1;
export const _r = $$c2;