import { jsx } from "react/jsx-runtime";
import { useRef, useMemo, forwardRef } from "react";
import { s as _$$s } from "../cssbuilder/589278";
import { L0, MQ, AD } from "../905/479155";
export function $$o1(e) {
  let t = useRef(null);
  let {
    tracker,
    index,
    isPrimaryLayout
  } = L0(t, e.primary);
  let d = useMemo(() => ({
    trackerRef: tracker,
    layoutIndex: index,
    primary: isPrimaryLayout
  }), [isPrimaryLayout, index, tracker]);
  return jsx(MQ.Provider, {
    value: d,
    children: jsx(AD, {
      children: jsx($$l0, {
        ...e,
        ref: t,
        children: e.children
      })
    })
  });
}
export let $$l0 = forwardRef((e, t) => jsx("div", {
  ref: t,
  className: _$$s.flex.$$if("space-between" === e.justify, _$$s.justifyBetween).$$if("end" === e.justify, _$$s.justifyEnd).$$if("center" === e.justify, _$$s.justifyCenter).$$if("center" === e.align, _$$s.itemsCenter).$$if("end" === e.align, _$$s.itemsEnd).$$if(e.fullWidth, _$$s.wFull).$$if(e.fullHeight, _$$s.hFull).$,
  style: {
    gap: e.gap ?? 8
  },
  children: e.children
}));
export const B = $$l0;
export const b = $$o1;