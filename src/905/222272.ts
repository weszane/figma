import { jsx } from "react/jsx-runtime";
import { useRef, useMemo, forwardRef } from "react";
import { cssBuilderInstance } from "../cssbuilder/589278";
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
  className: cssBuilderInstance.flex.$$if("space-between" === e.justify, cssBuilderInstance.justifyBetween).$$if("end" === e.justify, cssBuilderInstance.justifyEnd).$$if("center" === e.justify, cssBuilderInstance.justifyCenter).$$if("center" === e.align, cssBuilderInstance.itemsCenter).$$if("end" === e.align, cssBuilderInstance.itemsEnd).$$if(e.fullWidth, cssBuilderInstance.wFull).$$if(e.fullHeight, cssBuilderInstance.hFull).$,
  style: {
    gap: e.gap ?? 8
  },
  children: e.children
}));
export const B = $$l0;
export const b = $$o1;