import { jsx } from "react/jsx-runtime";
import { useRef, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { dP } from "../figma_app/119475";
import { P } from "../905/347284";
import { a3, Vm } from "../905/703676";
import { Wm, _o, T$ } from "../905/697409";
export function $$c0({
  dropdownId: e,
  dropdownChild: t,
  containerRefRight: r,
  limitHeight: c
}) {
  let u = useSelector(e => e.dropdownShown);
  let p = !!u && u.type === e;
  let _ = useRef(null);
  return (useLayoutEffect(() => {
    if (!_.current || !p) return;
    let e = u.data.targetRect;
    let {
      width
    } = _.current.getBoundingClientRect();
    let n = e.left + width + 30;
    let i = r || window.innerWidth;
    n > i && (_.current.style.left = `${i - n}px`);
  }), p) ? jsx("div", {
    className: Wm,
    ref: _,
    children: jsx(P, {
      className: c ? _o : T$,
      children: jsx(dP, {
        children: jsx(a3.Provider, {
          value: Vm.DROPDOWN,
          children: t
        })
      })
    })
  }) : null;
}
export const G = $$c0;
